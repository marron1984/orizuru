import { NextResponse } from "next/server";

/**
 * メール登録 API（雛形）。
 *
 * SUBSCRIBE_ENDPOINT が設定されていれば、そこへ転送する。
 * 未設定の場合は、サーバーログに残すのみで成功を返す（実送信は後で接続）。
 *
 * 接続例: Resend / Formspree / 任意の Webhook。
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
  const endpoint = process.env.SUBSCRIBE_ENDPOINT;

  if (!endpoint) {
    // プレースホルダ運用: 実送信先が未接続のあいだはログのみ。
    console.info(`[subscribe] (未接続) 登録リクエストを受領: ${normalized}`);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: normalized, source: "orizuru-teaser" }),
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[subscribe] 転送に失敗しました", err);
    return NextResponse.json({ ok: false, error: "upstream_failed" }, { status: 502 });
  }
}
