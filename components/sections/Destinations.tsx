import { destinations } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Crane } from "@/components/ui/Crane";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

/** 届ける先（世界の支援先）。子ども支援／難病の治療費支援／災害支援。 */
export function Destinations() {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(70% 50% at 20% 0%, rgba(200,164,81,0.10), transparent 60%)",
        }}
      />
      <div className="section-shell relative">
        <SectionHeading
          kicker={destinations.kicker}
          heading={destinations.heading}
          lead={destinations.lead}
          tone="onDark"
        />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-[21/9] w-full">
            <ImageWithFallback
              src={destinations.image}
              alt={destinations.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="h-full w-full"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {destinations.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.1}
              className="group rounded-2xl border border-white/10 bg-navy-700/40 p-8 transition-colors hover:border-gold/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/40 text-gold-light transition-colors group-hover:text-gold">
                <Crane className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
