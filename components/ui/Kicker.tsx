type KickerProps = {
  children: React.ReactNode;
  /** ネイビー背景上で使う場合は tone="onDark" */
  tone?: "onLight" | "onDark";
  className?: string;
};

/**
 * セクションの英語ラベル（キッカー）。
 * 大文字＋トラッキングの控えめなエディトリアル・ラベル（装飾チップは付けない）。
 */
export function Kicker({ children, tone = "onLight", className = "" }: KickerProps) {
  return (
    <p
      className={`text-[0.7rem] font-semibold uppercase tracking-kicker ${
        tone === "onDark" ? "text-gold-light" : "text-gold"
      } ${className}`}
    >
      {children}
    </p>
  );
}
