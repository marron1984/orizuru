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
 * ORIZURU ティザー 1ページ構成。
 * 上から下へスクロールして読ませる。各セクションは components/sections/ に分割。
 */
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Problem />
        <Belief />
        <Solution />
        <CycleModel />
        <Beneficiaries />
        <Destinations />
        <Safeguarding />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
