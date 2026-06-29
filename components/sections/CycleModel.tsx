"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/content/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * 循環モデルの簡易図。
 * ORIZURU を中心に、現場・ドナー・世界の支援先がひとつの円でつながる。
 * 軽量な SVG（装飾）＋ テキストの凡例（情報）で構成し、アクセシブルに保つ。
 * リングの流れ・中心のパルス・ハローで循環を表現（reduced-motion 時は静止）。
 */
export function CycleModel({ content: cycle }: { content: Dictionary["cycle"] }) {
  const reduce = useReducedMotion();
  const { nodes } = cycle;
  const legend = [
    { ...nodes.field, color: "text-gold" },
    { ...nodes.donor, color: "text-gold" },
    { ...nodes.world, color: "text-gold" },
  ];

  return (
    <section id="cycle" className="bg-paper py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker={cycle.kicker}
          heading={cycle.heading}
          lead={cycle.lead}
          align="center"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* 図（装飾）。情報は下の凡例で担保するため aria-hidden ではなく role=img + 説明 */}
          <Reveal className="mx-auto w-full max-w-md">
            <svg
              viewBox="0 0 400 400"
              className="h-auto w-full"
              role="img"
              aria-label={cycle.diagramLabel}
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0 L10 5 L0 10 z" fill="#C8A451" />
                </marker>
              </defs>

              {/* 循環を示す円弧（金）。破線が流れて循環を表現する。 */}
              <motion.circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="#C8A451"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                animate={reduce ? undefined : { strokeDashoffset: [0, -56] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 4, repeat: Infinity, ease: "linear" }
                }
              />
              {/* 流れの矢印（円周上に3つ） */}
              {[0, 120, 240].map((deg) => {
                const a = (deg * Math.PI) / 180;
                const x = 200 + 130 * Math.cos(a);
                const y = 200 + 130 * Math.sin(a);
                return (
                  <g key={deg} transform={`translate(${x} ${y}) rotate(${deg + 90})`}>
                    <path
                      d="M-8 0 L8 0"
                      stroke="#C8A451"
                      strokeWidth="2"
                      markerEnd="url(#arrow)"
                    />
                  </g>
                );
              })}

              {/* 外周の3ノード */}
              {[
                { deg: 270, label: nodes.field.title },
                { deg: 30, label: nodes.donor.title },
                { deg: 150, label: nodes.world.title },
              ].map((n) => {
                const a = (n.deg * Math.PI) / 180;
                const x = 200 + 130 * Math.cos(a);
                const y = 200 + 130 * Math.sin(a);
                return (
                  <g key={n.deg}>
                    <circle cx={x} cy={y} r="46" fill="#1A2138" />
                    <circle
                      cx={x}
                      cy={y}
                      r="46"
                      fill="none"
                      stroke="#C8A451"
                      strokeOpacity="0.5"
                    />
                    <text
                      x={x}
                      y={y + 4}
                      textAnchor="middle"
                      fontSize="13"
                      fill="#F7F4EC"
                      fontFamily="var(--font-sans)"
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}

              {/* 中心からの発信を表すハロー */}
              {!reduce ? (
                <motion.circle
                  cx="200"
                  cy="200"
                  fill="none"
                  stroke="#C8A451"
                  strokeWidth="1.5"
                  initial={{ r: 58, opacity: 0.5 }}
                  animate={{ r: [58, 124], opacity: [0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
              ) : null}

              {/* 中心ノード ORIZURU（呼吸するパルス） */}
              <motion.circle
                cx="200"
                cy="200"
                r="58"
                fill="#C8A451"
                animate={reduce ? undefined : { r: [58, 62, 58] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }
              />
              <text
                x="200"
                y="205"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#1A2138"
                fontFamily="var(--font-serif)"
                letterSpacing="1"
              >
                ORIZURU
              </text>
            </svg>
          </Reveal>

          {/* 凡例（情報） */}
          <div className="flex flex-col gap-5">
            {legend.map((node, i) => (
              <Reveal
                key={node.title}
                delay={i * 0.08}
                className="flex gap-4 rounded-xl border border-hairline bg-white p-5"
              >
                <span
                  aria-hidden
                  className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gold`}
                />
                <div>
                  <h3 className="text-base font-semibold text-navy">{node.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {node.body}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <p className="rounded-xl bg-navy px-6 py-5 text-center font-serif text-base leading-relaxed text-paper">
                {cycle.note}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
