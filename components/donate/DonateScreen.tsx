import Link from "next/link";
import type { Dictionary, Locale } from "@/content/dictionary";
import { Crane } from "@/components/ui/Crane";
import { DonateForm } from "@/components/donate/DonateForm";

type Props = {
  dict: Dictionary;
  lang: Locale;
  configured: boolean;
};

/**
 * 寄付ページの土台（言語非依存）。
 * Stripe 設定済みならフォームを、未設定なら準備中の案内を表示する。
 * 寄付は公益・支援の文脈のみ。投資・出資の導線は一切持たない。
 */
export function DonateScreen({ dict, lang, configured }: Props) {
  const d = dict.donate;
  const home = lang === "en" ? "/en" : "/";
  const langSwitch =
    lang === "ja"
      ? { href: "/en/donate", label: "English" }
      : { href: "/donate", label: "日本語" };

  return (
    <div className="flex min-h-[100svh] flex-col bg-paper">
      {/* 簡易ヘッダー */}
      <header className="border-b border-hairline">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link
            href={home}
            className="flex items-center gap-2 font-serif text-lg font-semibold text-navy"
          >
            <span className="text-gold">
              <Crane className="h-6 w-6" />
            </span>
            {dict.site.name}
          </Link>
          <Link
            href={langSwitch.href}
            className="text-sm text-ink-muted transition-colors hover:text-navy"
          >
            {langSwitch.label}
          </Link>
        </div>
      </header>

      <main id="main" className="flex-1">
        <div className="section-shell max-w-2xl py-16 sm:py-24">
          <Link
            href={home}
            className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-navy"
          >
            <span aria-hidden>←</span> {d.backToHome}
          </Link>

          <p className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-kicker text-gold">
            <span aria-hidden className="h-px w-6 bg-current opacity-60" />
            {d.kicker}
          </p>
          <h1 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            {d.heading}
          </h1>
          <p className="mt-5 text-pretty leading-relaxed text-ink-muted">
            {d.lead}
          </p>

          <div className="mt-10 rounded-3xl border border-hairline bg-white p-6 shadow-sm sm:p-8">
            {configured ? (
              <DonateForm content={d} lang={lang} />
            ) : (
              <div>
                <h2 className="text-lg font-semibold text-navy">
                  {dict.cta.donatePreparingTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {dict.cta.donatePreparingBody}
                </p>
                <Link
                  href={home}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-700"
                >
                  {d.backToHome}
                </Link>
              </div>
            )}
          </div>

          {/* 用途の明示（投資・出資ではない旨） */}
          <p className="mt-6 text-xs leading-relaxed text-ink-muted">{d.usageNote}</p>
        </div>
      </main>
    </div>
  );
}
