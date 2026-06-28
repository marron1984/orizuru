"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * ページ上部の読み進み進捗バー（金色）。
 * スクロール量に連動。控えめなモーション演出。
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-gold via-gold-light to-gold"
      style={{ scaleX }}
    />
  );
}
