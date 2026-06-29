/**
 * お知らせ登録（subscribe）の通知。
 *
 * 届け先（既定）はティザー運用担当のアドレス。SUBSCRIBE_NOTIFY_EMAIL で上書き可。
 * 送信手段は優先順に:
 *   1. RESEND_API_KEY があれば Resend で通知メールを送信（届け先＝下記）。
 *   2. SUBSCRIBE_ENDPOINT があれば、その Webhook へ転送。
 *   3. いずれも無ければサーバーログに記録（未接続でも成功を返す）。
 *
 * キー未設定のあいだは外部送信しないため、安全に公開できる。
 */

/** ティザーのお知らせ登録の届け先（既定）。 */
const DEFAULT_RECIPIENT = "yoshida@aska-g.com";

export function getNotifyRecipient(): string {
  return process.env.SUBSCRIBE_NOTIFY_EMAIL?.trim() || DEFAULT_RECIPIENT;
}

export type NotifyResult = "sent" | "forwarded" | "logged";

export async function notifySubscription(
  subscriberEmail: string,
): Promise<NotifyResult> {
  const recipient = getNotifyRecipient();
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    // 本番では RESEND_FROM に独自ドメインの検証済み送信元を設定する。
    const from = process.env.RESEND_FROM?.trim() || "ORIZURU <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: subscriberEmail,
        subject: "ORIZURU お知らせ登録",
        text:
          "ORIZURU ティザーサイトで、新しいお知らせ登録がありました。\n\n" +
          `メールアドレス: ${subscriberEmail}\n`,
      }),
    });
    if (!res.ok) throw new Error(`resend responded ${res.status}`);
    return "sent";
  }

  const endpoint = process.env.SUBSCRIBE_ENDPOINT;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: subscriberEmail,
        recipient,
        source: "orizuru-teaser",
      }),
    });
    if (!res.ok) throw new Error(`endpoint responded ${res.status}`);
    return "forwarded";
  }

  console.info(
    `[subscribe] (未接続) 登録を受領: ${subscriberEmail} → 届け先 ${recipient}`,
  );
  return "logged";
}
