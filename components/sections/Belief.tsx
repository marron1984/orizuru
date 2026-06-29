import type { Dictionary } from "@/content/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Crane } from "@/components/ui/Crane";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { slideLeft, slideRight, popIn } from "@/lib/motion";

/** 私たちの信念（ケアは、善意の塊）。これまで→これからの対比。 */
export function Belief({ content: belief }: { content: Dictionary["belief"] }) {
  return (
    <section id="belief" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      {/* 背景のかすかな金グラデーション */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(80% 60% at 80% 10%, rgba(200,164,81,0.10), transparent 60%)",
        }}
      />
      <div className="section-shell relative">
        <SectionHeading
          kicker={belief.kicker}
          heading={belief.heading}
          lead={belief.lead}
          tone="onDark"
        />

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* これまで（左から） */}
          <Reveal
            variants={slideLeft}
            className="rounded-2xl border border-white/10 bg-navy-700/40 p-8"
          >
            <p className="text-xs uppercase tracking-kicker text-paper/50">
              {belief.before.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-paper/90">
              {belief.before.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">
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
            className="rounded-2xl border border-gold/30 bg-gradient-to-br from-navy-700/60 to-navy-500/20 p-8"
          >
            <p className="text-xs uppercase tracking-kicker text-gold-light">
              {belief.after.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-paper">
              {belief.after.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              {belief.after.body}
            </p>
          </Reveal>
        </div>

        {/* ステートメント（写真の上にネイビースクリムを重ねて可読性を確保） */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl">
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
                  "linear-gradient(180deg, rgba(26,33,56,0.55) 0%, rgba(26,33,56,0.78) 100%)",
              }}
            />
            <p className="relative mx-auto max-w-3xl px-6 py-20 text-balance text-center font-serif text-xl leading-relaxed text-paper sm:px-10 sm:py-24 sm:text-2xl">
              {belief.statement}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
