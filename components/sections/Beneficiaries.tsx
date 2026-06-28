import { beneficiaries } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** 守る対象（受益の順番）。当事者本人→家族→ケアスタッフ→世界の支援先。 */
export function Beneficiaries() {
  return (
    <section id="beneficiaries" className="bg-paper-2 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={beneficiaries.kicker}
          heading={beneficiaries.heading}
          lead={beneficiaries.lead}
        />

        {/* 受益の順番をステップとして横並び（モバイルは縦） */}
        <ol className="mt-16 grid gap-4 md:grid-cols-4">
          {beneficiaries.steps.map((step, i) => (
            <Reveal
              key={step.no}
              as="li"
              delay={i * 0.1}
              className="relative rounded-2xl border border-hairline bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy font-serif text-xs font-semibold text-gold-light">
                  {step.no}
                </span>
                {/* 次のステップへの矢印（最後を除く・md以上） */}
                {i < beneficiaries.steps.length - 1 ? (
                  <span aria-hidden className="hidden text-gold md:block">
                    →
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-14">
          <blockquote className="mx-auto max-w-3xl border-l-2 border-gold pl-6 font-serif text-lg leading-relaxed text-navy sm:text-xl">
            {beneficiaries.statement}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
