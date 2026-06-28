import Stripe from "stripe";

/**
 * Stripe サーバークライアント。
 * STRIPE_SECRET_KEY が未設定なら null を返し、寄付ページは準備中表示に
 * フォールバックする（受け皿が固まるまではキー未設定で安全に公開できる）。
 */
let cached: Stripe | null = null;

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (!cached) {
    // apiVersion は指定せずアカウント既定を使用（SDK とのバージョン齟齬を避ける）。
    cached = new Stripe(key);
  }
  return cached;
}

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}
