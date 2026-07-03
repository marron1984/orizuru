import type { Dictionary } from "@/content/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Crane } from "@/components/ui/Crane";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

/** 届ける先（世界の支援先）。子ども支援／難病の治療費支援／災害支援。 */
export function Destinations({
  content: destinations,
}: {
  content: Dictionary["destinations"];
}) {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="section-shell relative">
        <SectionHeading
          kicker={destinations.kicker}
          heading={destinations.heading}
          lead={destinations.lead}
        />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-hairline">
          <div className="relative aspect-[21/9] w-full">
            <ParallaxImage
              src={destinations.image}
              alt={destinations.imageAlt}
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {destinations.items.map((item) => (
            <StaggerItem
              key={item.title}
              className="group border border-hairline bg-paper p-8 transition-colors duration-300 hover:border-gold/50"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold transition-transform duration-300 group-hover:scale-110">
                <Crane className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
