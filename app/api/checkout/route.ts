import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getDictionary } from "@/content/dictionary";
import {
  CURRENCY,
  isFrequency,
  isValidAmount,
  type Frequency,
} from "@/lib/donation";

export const runtime = "nodejs";

/**
 * Stripe Checkout セッションを作成し、決済ページの URL を返す。
 * 寄付は公益・支援の文脈のみ。投資・出資の導線は持たない。
 *
 * 金額は必ずサーバー側で再検証する（クライアントの値は信頼しない）。
 * 商品名はクライアント入力ではなく、ロケール＋頻度からサーバーで決定する。
 */
export async function POST(request: Request) {
  const stripe = getStripe();
  if (!stripe) {
    // STRIPE_SECRET_KEY 未設定 → 準備中
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let amount: unknown;
  let frequency: unknown;
  let locale: unknown;
  try {
    const body = await request.json();
    amount = body?.amount;
    frequency = body?.frequency;
    locale = body?.locale;
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (!isValidAmount(amount)) {
    return NextResponse.json({ error: "invalid_amount" }, { status: 422 });
  }
  if (!isFrequency(frequency)) {
    return NextResponse.json({ error: "invalid_frequency" }, { status: 422 });
  }
  const lang = locale === "en" ? "en" : "ja";
  const freq = frequency as Frequency;
  const dict = getDictionary(lang).donate;

  // success / cancel の URL は同一オリジンを基準に組み立てる
  const origin =
    request.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    new URL(request.url).origin;
  const base = lang === "en" ? `${origin}/en` : origin;

  const productName =
    freq === "monthly" ? dict.productNameMonthly : dict.productNameOnce;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: freq === "monthly" ? "subscription" : "payment",
      locale: lang,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: amount,
            product_data: { name: productName },
            ...(freq === "monthly"
              ? { recurring: { interval: "month" as const } }
              : {}),
          },
        },
      ],
      // 一回払いのときだけ寄付向けのボタン表記にする
      ...(freq === "once" ? { submit_type: "donate" as const } : {}),
      billing_address_collection: "auto",
      success_url: `${base}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/donate`,
      metadata: { project: "orizuru", frequency: freq, locale: lang },
    });

    if (!session.url) {
      throw new Error("missing session url");
    }
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] failed to create session", err);
    return NextResponse.json({ error: "stripe_error" }, { status: 502 });
  }
}
