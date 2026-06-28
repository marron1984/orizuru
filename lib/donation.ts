/**
 * 寄付まわりの共通定数・バリデーション・整形。
 * クライアント／サーバー双方から利用する（クライアント側のバリデーションは
 * UX のためであり、最終的な検証は API ルートで必ず行う）。
 *
 * 通貨は JPY（ゼロ十進通貨）。Stripe の unit_amount は「円」をそのまま整数で渡す。
 */

export const CURRENCY = "jpy";

/** 寄付額のプリセット（円） */
export const PRESET_AMOUNTS = [1000, 3000, 5000, 10000] as const;

/** 任意入力の下限・上限（円） */
export const MIN_AMOUNT = 100;
export const MAX_AMOUNT = 1_000_000;

export type Frequency = "once" | "monthly";

export const FREQUENCIES: Frequency[] = ["once", "monthly"];

/** 金額が有効か（正の整数で範囲内） */
export function isValidAmount(amount: unknown): amount is number {
  return (
    typeof amount === "number" &&
    Number.isInteger(amount) &&
    amount >= MIN_AMOUNT &&
    amount <= MAX_AMOUNT
  );
}

export function isFrequency(value: unknown): value is Frequency {
  return value === "once" || value === "monthly";
}

/** ロケールに応じた通貨表記（例: ￥1,000 / ¥1,000） */
export function formatAmount(amount: number, locale: "ja" | "en"): string {
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(amount);
}
