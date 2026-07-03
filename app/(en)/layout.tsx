import type { Metadata, Viewport } from "next";
import { notoSans, notoSerif } from "../fonts";
import { buildMetadata } from "../metadata";
import { getDictionary } from "@/content/dictionary";
import "../globals.css";

/** 英語ルートのルートレイアウト（lang="en"）。 */
export const metadata: Metadata = buildMetadata("en");

export const viewport: Viewport = {
  themeColor: "#F7F4EC",
  width: "device-width",
  initialScale: 1,
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = getDictionary("en");
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          {dict.nav.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
