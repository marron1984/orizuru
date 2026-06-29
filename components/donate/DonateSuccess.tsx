import Link from "next/link";
import type { Dictionary, Locale } from "@/content/dictionary";
import { Crane } from "@/components/ui/Crane";

/**
 * 寄付完了（サンキュー）ページ。
 * Stripe Checkout からのリダイレクト先。実際の受領記録は Webhook で行う。
 */
export function DonateSuccess({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const s = dict.donate.success;
  const home = lang === "en" ? "/en" : "/";

  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-navy px-6 py-20">
      <div className="w-full max-w-lg text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Crane className="h-9 w-9" />
        </span>
        <p className="mt-8 text-xs font-medium uppercase tracking-kicker text-gold-light">
          {s.kicker}
        </p>
        <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-paper sm:text-4xl">
          {s.heading}
        </h1>
        <p className="mt-5 text-pretty leading-relaxed text-paper/80">{s.body}</p>
        <Link
          href={home}
          className="mt-10 inline-flex items-center justify-center rounded-none bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors hover:bg-gold-light"
        >
          {s.backHome}
        </Link>
      </div>
    </div>
  );
}
