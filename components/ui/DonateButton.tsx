import Link from "next/link";

/**
 * 寄付CTAボタン。
 * - NEXT_PUBLIC_DONATE_URL が設定されていれば、その外部 URL を新規タブで開く。
 * - 未設定なら内蔵の寄付ページ（/donate, /en/donate）へ遷移する。
 *
 * 寄付は常にミッション（公益・支援）の文脈に閉じる。投資・出資の導線は持たない。
 */
export function DonateButton({
  label,
  internalHref,
  className = "",
}: {
  label: string;
  internalHref: string;
  className?: string;
}) {
  const externalUrl = process.env.NEXT_PUBLIC_DONATE_URL;
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-none bg-gold px-9 py-4 text-sm font-medium tracking-wide text-navy transition-colors hover:bg-gold-light focus-visible:ring-offset-navy";

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={internalHref} className={`${baseClass} ${className}`}>
      {label}
    </Link>
  );
}
