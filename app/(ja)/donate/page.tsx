import type { Metadata } from "next";
import { DonateScreen } from "@/components/donate/DonateScreen";
import { getDictionary } from "@/content/dictionary";
import { isStripeConfigured } from "@/lib/stripe";

// Stripe 設定の有無をリクエスト時に評価する（ビルド時に固定しない）
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "寄付で支援する ── ORIZURU",
  description:
    "支援先へ届ける千羽鶴の活動を、あなたの寄付が支えます。一回のみ、または毎月の寄付を選べます。",
  alternates: { canonical: "/donate", languages: { ja: "/donate", en: "/en/donate" } },
};

/** 日本語 寄付ページ（/donate）。 */
export default function DonateJa() {
  return (
    <DonateScreen
      dict={getDictionary("ja")}
      lang="ja"
      configured={isStripeConfigured()}
    />
  );
}
