"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { Kicker } from "@/components/ui/Kicker";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { CraneField } from "@/components/ui/CraneField";

/**
 * ヒーロー。フルスクリーン。
 * 背景に千羽鶴のビジュアル＋ネイビーのスクリムで可読性を確保。
 * 画像未配置でもネイビー＋折り鶴装飾で成立する。
 *
 * 注記: 背景の人物・現場写真はイメージ素材を含む前提。実在の利用者写真ではない。
 * 実画像は public/images/hero.jpg を配置すれば反映される。
 */
export function Hero({ content: hero }: { content: Dictionary["hero"] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // ダイナミックなパララックス（背景は大きく流れ、ケンバーンズでズーム、コピーは上へ抜ける）
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.28]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // 登場アニメーション（強めの立ち上がり＋ブラー）
  const rise = {
    hidden: { opacity: 0, y: 48, filter: "blur(12px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={ref}
      aria-label={hero.regionLabel}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
    >
      {/* 背景画像（ネイビーフォールバック付き） */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        {!imgFailed ? (
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            onError={() => setImgFailed(true)}
            className="object-cover"
          />
        ) : null}
      </motion.div>

      {/* ネイビースクリム（左／下を暗くして文字可読性を確保。放射状ではなく直線で） */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,33,56,0.88) 0%, rgba(26,33,56,0.5) 42%, rgba(26,33,56,0.18) 100%), linear-gradient(180deg, rgba(26,33,56,0.35) 0%, transparent 40%, rgba(26,33,56,0.8) 100%)",
        }}
      />

      {/* 装飾の折り鶴 */}
      <CraneField />

      {/* コピー */}
      <motion.div
        className="section-shell relative z-10 py-28"
        style={reduce ? undefined : { y: textY, opacity: textOpacity }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "show"}
            variants={rise}
            transition={{ duration: 0.8, ease }}
          >
            <Kicker tone="onDark">{hero.kicker}</Kicker>
          </motion.div>

          <motion.h1
            className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.18] text-paper sm:text-6xl lg:text-7xl"
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "show"}
            variants={rise}
            transition={{ duration: 1.05, delay: 0.12, ease }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-paper/85 sm:text-lg"
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "show"}
            variants={rise}
            transition={{ duration: 1, delay: 0.32, ease }}
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* 下スクロール誘導 */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <ScrollCue label={hero.scrollCue} />
      </div>
    </section>
  );
}
