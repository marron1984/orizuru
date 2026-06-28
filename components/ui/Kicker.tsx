type KickerProps = {
  children: React.ReactNode;
  /** ネイビー背景上で使う場合は tone="onDark" */
  tone?: "onLight" | "onDark";
  className?: string;
};

/**
 * 英語ラベル（キッカー）。大文字＋広めのレタースペーシング、金色。
 */
export function Kicker({ children, tone = "onLight", className = "" }: KickerProps) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-medium uppercase tracking-kicker ${
        tone === "onDark" ? "text-gold-light" : "text-gold"
      } ${className}`}
    >
      <span aria-hidden className="h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  );
}
