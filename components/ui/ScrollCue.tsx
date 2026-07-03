"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * ヒーロー下部の下スクロール誘導インジケーター。
 */
export function ScrollCue({ label }: { label: string }) {
  const reduce = useReducedMotion();

  return (
    <a
      href="#problem"
      className="group inline-flex flex-col items-center gap-2 text-navy/60 transition-colors hover:text-navy"
    >
      <span className="text-xs uppercase tracking-kicker">{label}</span>
      <motion.span
        aria-hidden
        className="flex h-9 w-5 items-start justify-center rounded-full border border-navy/30 p-1"
        animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
        transition={
          reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <motion.span
          className="h-2 w-1 rounded-full bg-gold"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={
            reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </motion.span>
    </a>
  );
}
