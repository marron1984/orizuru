import type { Dictionary } from "@/content/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

/**
 * 尊厳とセーフガーディング（信頼の担保）。
 * 発信は本人の選択。住居・ケアの提供条件には結びつけない。
 * 肖像権・同意・撤回の自由。未成年・判断能力が限定的な方への特別な配慮。
 */
export function Safeguarding({
  content: safeguarding,
}: {
  content: Dictionary["safeguarding"];
}) {
  return (
    <section id="safeguarding" className="bg-paper py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={safeguarding.kicker}
          heading={safeguarding.heading}
          lead={safeguarding.lead}
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {safeguarding.items.map((item) => (
            <StaggerItem
              key={item.title}
              className="group border border-hairline bg-white p-8 transition-colors duration-300 hover:border-gold/50"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold transition-transform duration-300 group-hover:scale-110"
              >
                {/* 盾のアイコン（信頼の担保） */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
