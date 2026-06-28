import type { Metadata } from "next";
import type { Locale } from "@/content/dictionary";
import { getDictionary } from "@/content/dictionary";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://orizuru.example.com";

/**
 * ロケール別の metadata を生成する。
 * hreflang（alternates.languages）と OGP locale を適切に設定し、
 * 投資系キーワードは含めない（公益・支援の文脈のみ）。
 */
export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = locale === "en" ? "/en" : "/";
  const ogLocale = locale === "en" ? "en_US" : "ja_JP";
  const altLocale = locale === "en" ? "ja_JP" : "en_US";

  return {
    metadataBase: new URL(siteUrl),
    title: dict.site.meta.title,
    description: dict.site.meta.description,
    keywords:
      locale === "en"
        ? ["paper cranes", "donation", "care", "welfare", "support", "ORIZURU"]
        : ["千羽鶴", "ドネーション", "ケア", "福祉", "寄付", "支援", "ORIZURU"],
    alternates: {
      canonical: path,
      languages: {
        ja: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: altLocale,
      url: path,
      siteName: dict.site.name,
      title: dict.site.meta.title,
      description: dict.site.meta.description,
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
          alt: dict.site.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.site.meta.title,
      description: dict.site.meta.description,
      images: ["/images/og.jpg"],
    },
    robots: { index: true, follow: true },
  };
}
