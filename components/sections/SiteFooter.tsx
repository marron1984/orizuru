import type { Dictionary } from "@/content/dictionary";
import { Crane } from "@/components/ui/Crane";

/** フッター。主体・連携（FSUN）・注記・コピーライト。 */
export function SiteFooter({
  content: footer,
  siteName,
}: {
  content: Dictionary["footer"];
  siteName: string;
}) {
  const year = 2026; // 公開年。更新時に見直す。

  return (
    <footer className="border-t border-hairline bg-paper-2 py-16">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* ブランド */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-gold">
                <Crane className="h-7 w-7" />
              </span>
              <span className="font-serif text-xl font-semibold text-navy">
                {siteName}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              {footer.description}
            </p>
          </div>

          {/* 主体・連携・SNS */}
          <div className="flex flex-col gap-4 text-sm text-navy/75">
            <div>
              <p className="text-xs uppercase tracking-kicker text-ink-muted/70">
                {footer.orgLabel}
              </p>
              <p className="mt-2 leading-relaxed">{footer.org}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-kicker text-ink-muted/70">
                {footer.partnerLabel}
              </p>
              {/* FSUN は国連そのものではない。連携 までの表記。 */}
              <p className="mt-2 leading-relaxed">{footer.partner}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-kicker text-ink-muted/70">
                {footer.socialLabel}
              </p>
              <ul className="mt-2 flex gap-4">
                {footer.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-navy/70 transition-colors hover:text-gold"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 注記 */}
        <div className="mt-12 space-y-2 border-t border-hairline pt-8 text-xs leading-relaxed text-ink-muted/80">
          <p>{footer.teaserNote}</p>
          <p>{footer.imageNote}</p>
        </div>

        <p className="mt-6 text-xs text-ink-muted/70">
          © {year} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
