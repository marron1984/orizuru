"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ImageWithFallback } from "./ImageWithFallback";

/**
 * スクロール連動のパララックス画像（ケンバーンズ風のズームアウト＋縦方向ドリフト）。
 * 親要素は position:relative かつ overflow:hidden であること。
 * reduced-motion 時は静止画像にフォールバック。
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  priority = false,
  zoomFrom = 1.28,
  zoomTo = 1.04,
  drift = 8,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** 入場時のスケール */
  zoomFrom?: number;
  /** 退場時のスケール */
  zoomTo?: number;
  /** 縦ドリフト量（%） */
  drift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [zoomFrom, zoomTo]);
  const y = useTransform(scrollYProgress, [0, 1], [`-${drift}%`, `${drift}%`]);

  if (reduce) {
    return (
      <div className="absolute inset-0">
        <ImageWithFallback
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <motion.div ref={ref} className="absolute inset-0" style={{ scale, y }}>
      <ImageWithFallback
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="h-full w-full"
      />
    </motion.div>
  );
}
