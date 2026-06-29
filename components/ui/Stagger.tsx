"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { stagger as staggerVariants, popIn, viewportOnce } from "@/lib/motion";

type Tag = "div" | "ul" | "ol";

/**
 * スタッガー（時間差）コンテナ。子の <StaggerItem> を順番に立ち上げる。
 * 親が initial/whileInView を制御し、子は variants のみを持つ（真のスタッガー）。
 * reduced-motion 時は即時表示。
 */
export function Stagger({
  children,
  className,
  variants = staggerVariants,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const T = as;
    return <T className={className}>{children}</T>;
  }
  const M = motion[as];
  return (
    <M
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </M>
  );
}

/** スタッガーの子。親コンテナの制御で動く。 */
export function StaggerItem({
  children,
  className,
  variants = popIn,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const T = as;
    return <T className={className}>{children}</T>;
  }
  const M = motion[as];
  return (
    <M className={className} variants={variants}>
      {children}
    </M>
  );
}
