"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** 表示遅延（秒） */
  delay?: number;
  /** 使用する variants（既定は fadeUp） */
  variants?: Variants;
  as?: "div" | "section" | "li" | "span";
};

/**
 * スクロールでビューに入ったらフェードインさせる薄いラッパー。
 * prefers-reduced-motion 時はアニメーションを行わず、即時表示する。
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
