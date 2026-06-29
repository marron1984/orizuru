import type { Dictionary } from "@/content/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

/** 問題提起（三つの分断）。3カラム。 */
export function Problem({ content: problem }: { content: Dictionary["problem"] }) {
  return (
    <section id="problem" className="bg-paper py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={problem.kicker}
          heading={problem.heading}
          lead={problem.lead}
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {problem.items.map((item) => (
            <StaggerItem
              key={item.no}
              className="group relative rounded-2xl border border-hairline bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10"
            >
              <span className="font-serif text-4xl font-semibold text-gold/70">
                {item.no}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              <span
                aria-hidden
                className="mt-6 block h-px w-10 bg-gold/40 transition-all group-hover:w-16"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
