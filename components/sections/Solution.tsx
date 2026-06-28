import type { Dictionary } from "@/content/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

/** ソリューション（折る→束ねる→届ける→次の一巡へ）。工程に写真を対応。 */
export function Solution({ content: solution }: { content: Dictionary["solution"] }) {
  return (
    <section id="solution" className="bg-paper-2 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={solution.kicker}
          heading={solution.heading}
          lead={solution.lead}
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solution.steps.map((step, i) => (
            <Reveal
              key={step.no}
              delay={i * 0.08}
              className="flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white"
            >
              <div className="relative aspect-[4/3] w-full">
                <ImageWithFallback
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full"
                />
                <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold font-serif text-sm font-semibold text-navy">
                  {step.no}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
