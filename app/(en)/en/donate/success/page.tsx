import type { Metadata } from "next";
import { DonateSuccess } from "@/components/donate/DonateSuccess";
import { getDictionary } from "@/content/dictionary";

export const metadata: Metadata = {
  title: "Thank you for your donation ── ORIZURU",
  robots: { index: false, follow: false },
};

/** English donation success page (/en/donate/success). */
export default function DonateSuccessEn() {
  return <DonateSuccess dict={getDictionary("en")} lang="en" />;
}
