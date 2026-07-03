import type { Dictionary } from "@/content/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Crane } from "@/components/ui/Crane";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { slideLeft, slideRight, popIn } from "@/lib/motion";

/** 私たちの信念（ケアは、善意の塊）。これまで→これからの対比。 */
export function Belief({ content: belief }: { content: Dictionary["belief"] }) {
  return (
    <section id="belief" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="section-shell relative">
        <SectionHeading
          kicker={belief.kicker}
          heading={belief.heading}
          lead={belief.lead}
        />

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* これまで（左から） */}
          <Reveal
            variants={slideLeft}
            className="rounded-2xl border border-hairline bg-paper-2 p-8"
          >
            <p className="text-xs uppercase tracking-kicker text-ink-muted">
              {belief.before.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-navy/80">
              {belief.before.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {belief.before.body}
            </p>
          </Reveal>

          {/* 反転を示す折り鶴（ポップイン＋緩やかな回転） */}
          <Reveal
            variants={popIn}
            delay={0.15}
            className="flex items-center justify-center text-gold"
          >
            <Crane className="h-12 w-12 rotate-90 md:rotate-0" title={belief.craneTitle} />
          </Reveal>

          {/* これから（右から） */}
          <Reveal
            variants={slideRight}
            delay={0.1}
            className="rounded-2xl border border-gold/50 bg-gold/10 p-8"
          >
            <p className="text-xs uppercase tracking-kicker text-gold">
              {belief.after.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-navy">
              {belief.after.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">
              {belief.after.body}
            </p>
          </Reveal>
        </div>

        {/* ステートメント（明るい写真に紙白のスクリムを重ね、ネイビーの文字で読ませる） */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-hairline">
            <ParallaxImage
              src={belief.image}
              alt={belief.imageAlt}
              sizes="(max-width: 1024px) 100vw, 72rem"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,244,236,0.82) 0%, rgba(247,244,236,0.9) 100%)",
              }}
            />
            <p className="relative mx-auto max-w-3xl px-6 py-20 text-balance text-center font-serif text-xl leading-relaxed text-navy sm:px-10 sm:py-24 sm:text-2xl">
              {belief.statement}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
