import { cta } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { DonateButton } from "@/components/ui/DonateButton";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { CraneField } from "@/components/ui/CraneField";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

/**
 * CTA。寄付・お知らせ登録への誘導。
 * 寄付は公益・支援の文脈に閉じる。投資・出資への導線は置かない。
 */
export function CallToAction() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      {/* 背景写真（ネイビースクリムで可読性を確保） */}
      <div aria-hidden className="absolute inset-0">
        <ImageWithFallback
          src={cta.image}
          alt=""
          fill
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,33,56,0.82) 0%, rgba(26,33,56,0.92) 100%)",
        }}
      />
      <CraneField className="opacity-60" />
      <div className="section-shell relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Kicker tone="onDark" className="justify-center">
            {cta.kicker}
          </Kicker>
          <h2 className="mt-6 text-balance font-serif text-3xl font-semibold leading-tight text-paper sm:text-4xl lg:text-5xl">
            {cta.heading}
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
            {cta.body}
          </p>

          <div className="mt-10">
            <DonateButton />
          </div>
        </Reveal>

        {/* お知らせ登録（メイン導線） */}
        <Reveal delay={0.1} className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-3xl border border-white/10 bg-navy-700/40 p-8 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-paper">
                {cta.subscribeHeading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">
                {cta.subscribeBody}
              </p>
              <div className="mt-6 flex w-full justify-center">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
