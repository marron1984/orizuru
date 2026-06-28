import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
// 署名検証のため生のボディが必要。動的実行に固定する。
export const dynamic = "force-dynamic";

/**
 * Stripe Webhook 受信。
 * STRIPE_WEBHOOK_SECRET 設定時に署名を検証し、寄付の受領をログに記録する。
 * 実運用では、ここで領収メール送信や台帳記録などへ接続する。
 */
export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "missing_signature" }, { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err);
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.info(
        `[stripe webhook] donation received: ${session.id} ` +
          `amount=${session.amount_total ?? "?"} ${session.currency ?? ""} ` +
          `mode=${session.mode}`,
      );
      // TODO: 領収メール送信 / 台帳記録など実運用の処理をここに接続する。
      break;
    }
    case "invoice.paid": {
      // 毎月（サブスクリプション）の継続課金の確認
      const invoice = event.data.object as Stripe.Invoice;
      console.info(
        `[stripe webhook] recurring donation paid: ${invoice.id} ` +
          `amount=${invoice.amount_paid} ${invoice.currency}`,
      );
      break;
    }
    default:
      // 未対応イベントは受領のみ
      break;
  }

  return NextResponse.json({ received: true });
}
