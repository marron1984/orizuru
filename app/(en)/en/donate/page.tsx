import type { Metadata } from "next";
import { DonateScreen } from "@/components/donate/DonateScreen";
import { getDictionary } from "@/content/dictionary";
import { isStripeConfigured } from "@/lib/stripe";

// Stripe 設定の有無をリクエスト時に評価する（ビルド時に固定しない）
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Support with a donation ── ORIZURU",
  description:
    "Your donation supports the work of carrying cranes to the causes we help. Choose a one-time or monthly gift.",
  alternates: {
    canonical: "/en/donate",
    languages: { ja: "/donate", en: "/en/donate" },
  },
};

/** English donation page (/en/donate). */
export default function DonateEn() {
  return (
    <DonateScreen
      dict={getDictionary("en")}
      lang="en"
      configured={isStripeConfigured()}
    />
  );
}
