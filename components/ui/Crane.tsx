type CraneProps = {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
};

/**
 * 軽量な折り鶴シルエット（SVG）。
 * 写真が無くても成立する装飾。色は currentColor を継承する。
 */
export function Crane({ className = "", title, style }: CraneProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {/* 折り鶴を抽象化した幾何形。翼・首・尾の三角構成。 */}
      <path d="M50 18 L62 46 L50 40 L38 46 Z" opacity="0.95" />
      <path d="M50 40 L88 30 L60 54 L50 50 Z" />
      <path d="M50 40 L12 30 L40 54 L50 50 Z" />
      <path d="M50 50 L58 78 L50 70 L42 78 Z" opacity="0.9" />
      <path d="M50 50 L74 70 L52 64 Z" opacity="0.7" />
      <path d="M50 50 L26 70 L48 64 Z" opacity="0.7" />
    </svg>
  );
}
