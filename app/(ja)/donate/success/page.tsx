import type { Metadata } from "next";
import { DonateSuccess } from "@/components/donate/DonateSuccess";
import { getDictionary } from "@/content/dictionary";

export const metadata: Metadata = {
  title: "ご寄付ありがとうございます ── ORIZURU",
  robots: { index: false, follow: false },
};

/** 日本語 寄付完了ページ（/donate/success）。 */
export default function DonateSuccessJa() {
  return <DonateSuccess dict={getDictionary("ja")} lang="ja" />;
}
