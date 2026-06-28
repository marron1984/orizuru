"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Crane } from "./Crane";

/** 千羽鶴の虹色を、ネイビーの中で効かせる差し色として散らす */
const cranes = [
  { top: "12%", left: "8%", size: 26, color: "#E2C882", delay: 0, dur: 9 },
  { top: "24%", left: "82%", size: 34, color: "#D64541", delay: 1.2, dur: 11 },
  { top: "62%", left: "14%", size: 30, color: "#C8A451", delay: 0.6, dur: 10 },
  { top: "74%", left: "76%", size: 22, color: "#E2C882", delay: 1.8, dur: 12 },
  { top: "44%", left: "92%", size: 18, color: "#9FB4D6", delay: 0.3, dur: 8 },
  { top: "84%", left: "44%", size: 20, color: "#C8A451", delay: 2.2, dur: 13 },
];

/**
 * 控えめに漂う折り鶴の装飾フィールド。
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
          style={{ top: c.top, left: c.left, color: c.color, opacity: 0.5 }}
          initial={reduce ? false : { y: 0, rotate: -3 }}
          animate={
            reduce
              ? undefined
              : { y: [0, -14, 0], rotate: [-3, 3, -3] }
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
