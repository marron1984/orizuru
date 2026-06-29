import { NextResponse } from "next/server";
import { notifySubscription } from "@/lib/notify";

export const runtime = "nodejs";

/**
 * メール登録 API。
 *
 * 受け取った登録は notifySubscription() で届け先（既定: ティザー運用担当）へ通知する。
 * 送信手段（Resend / Webhook / ログ）は環境変数で切り替わる（lib/notify.ts 参照）。
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const normalized = email.trim().toLowerCase();

  try {
    const result = await notifySubscription(normalized);
    return NextResponse.json({ ok: true, delivery: result });
  } catch (err) {
    console.error("[subscribe] 通知に失敗しました", err);
    return NextResponse.json({ ok: false, error: "notify_failed" }, { status: 502 });
  }
}
