import type { Variants } from "framer-motion";

/**
 * 共有モーション variants。
 * よりダイナミックな登場（大きめの移動・スケール・ブラー・スプリング）を基本にする。
 * prefers-reduced-motion は各コンポーネント（Reveal / Stagger 等）で一括尊重する。
 */

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 64, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -90, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 90, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

/** 勢いのあるポップイン（スプリング） */
export const popIn: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 18, mass: 0.7 },
  },
};

/** 子要素を順番に立ち上げるコンテナ（強めのスタッガー） */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
