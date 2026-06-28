"use client";

import Image from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  /** fill レイアウトで使う（親に position:relative が必要） */
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
};

/**
 * next/image のラッパー。
 * 画像が未配置／読み込み失敗でもネイビー単色が敷かれ、レイアウトが崩れない。
 *
 * 実画像は public/images/ に同名ファイルを配置すれば反映される。
 * 注記: 人物・現場の写真はイメージ素材を含む前提。実在の利用者写真ではない。
 */
export function ImageWithFallback({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  sizes,
  priority = false,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`relative block overflow-hidden bg-navy ${className}`}
      // 画像が無い間も、ネイビーに金のかすかなグラデーションで品よく見せる
      style={{
        backgroundImage:
          "radial-gradient(120% 80% at 70% 0%, rgba(200,164,81,0.16), transparent 60%)",
      }}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        // フォールバック時もスクリーンリーダーへ意味を伝える
        <span className="sr-only">{alt}</span>
      )}
    </span>
  );
}
