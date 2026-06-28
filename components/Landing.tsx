import type { Dictionary, Locale } from "@/content/dictionary";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Belief } from "@/components/sections/Belief";
import { Solution } from "@/components/sections/Solution";
import { CycleModel } from "@/components/sections/CycleModel";
import { Beneficiaries } from "@/components/sections/Beneficiaries";
import { Destinations } from "@/components/sections/Destinations";
import { Safeguarding } from "@/components/sections/Safeguarding";
import { CallToAction } from "@/components/sections/CallToAction";
import { SiteFooter } from "@/components/sections/SiteFooter";

/**
 * ORIZURU ティザー 1ページ構成（言語非依存）。
 * 受け取った辞書（dict）を各セクションへ流し込む。
 * 日本語版・英語版の両ページがこのコンポーネントを共有する。
 */
export function Landing({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader nav={dict.nav} siteName={dict.site.name} />
      <main id="main">
        <Hero content={dict.hero} />
        <Problem content={dict.problem} />
        <Belief content={dict.belief} />
        <Solution content={dict.solution} />
        <CycleModel content={dict.cycle} />
        <Beneficiaries content={dict.beneficiaries} />
        <Destinations content={dict.destinations} />
        <Safeguarding content={dict.safeguarding} />
        <CallToAction content={dict.cta} lang={lang} />
      </main>
      <SiteFooter content={dict.footer} siteName={dict.site.name} />
    </>
  );
}
