"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Crane } from "./Crane";

/** 千羽鶴の虹色を、ネイビーの中で効かせる差し色として散らす */
const cranes = [
  { top: "12%", left: "8%", size: 30, color: "#E2C882", delay: 0, dur: 6 },
  { top: "24%", left: "82%", size: 40, color: "#D64541", delay: 0.6, dur: 7 },
  { top: "62%", left: "14%", size: 34, color: "#C8A451", delay: 0.3, dur: 6.5 },
  { top: "74%", left: "76%", size: 26, color: "#E2C882", delay: 1.1, dur: 8 },
  { top: "44%", left: "92%", size: 22, color: "#9FB4D6", delay: 0.2, dur: 5.5 },
  { top: "84%", left: "44%", size: 24, color: "#C8A451", delay: 1.4, dur: 8.5 },
  { top: "18%", left: "52%", size: 20, color: "#D64541", delay: 0.9, dur: 7.2 },
  { top: "54%", left: "60%", size: 28, color: "#E2C882", delay: 0.5, dur: 6.8 },
  { top: "34%", left: "28%", size: 18, color: "#9FB4D6", delay: 1.7, dur: 9 },
];

/**
 * 漂う折り鶴の装飾フィールド。上下の浮遊・回転・スケールを大きめに効かせる。
 * 純粋な装飾のため aria-hidden。reduced-motion 時は静止。
 */
export function CraneField({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {cranes.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: c.top, left: c.left, color: c.color, opacity: 0.55 }}
          initial={reduce ? false : { y: 0, x: 0, rotate: -6 }}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -28, 6, 0],
                  x: [0, 10, -8, 0],
                  rotate: [-6, 8, -4, -6],
                  scale: [1, 1.12, 0.96, 1],
                }
          }
          transition={
            reduce
              ? undefined
              : { duration: c.dur, delay: c.delay, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Crane className="h-auto" style={{ width: c.size }} />
        </motion.div>
      ))}
    </div>
  );
}
