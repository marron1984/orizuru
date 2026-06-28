import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

/**
 * フォントは next/font の制約上モジュールスコープで定義する必要があるため、
 * 各ロケールのルートレイアウトで共有できるようここに集約する。
 * 日本語・英語ともブランド統一のため Noto 系を用いる（Latin サブセットを含む）。
 */
export const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});
