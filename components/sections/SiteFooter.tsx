import { footer, site } from "@/content/site";
import { Crane } from "@/components/ui/Crane";

/** フッター。主体・連携（FSUN）・注記・コピーライト。 */
export function SiteFooter() {
  const year = 2026; // 公開年。更新時に見直す。

  return (
    <footer className="border-t border-white/10 bg-navy py-16">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* ブランド */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-gold">
                <Crane className="h-7 w-7" />
              </span>
              <span className="font-serif text-xl font-semibold text-paper">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">
              {footer.description}
            </p>
          </div>

          {/* 主体・連携・SNS */}
          <div className="flex flex-col gap-4 text-sm text-paper/70">
            <div>
              <p className="text-xs uppercase tracking-kicker text-paper/40">
                Organization
              </p>
              <p className="mt-2 leading-relaxed">{footer.org}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-kicker text-paper/40">
                Partnership
              </p>
              {/* FSUN は国連そのものではない。連携 までの表記。 */}
              <p className="mt-2 leading-relaxed">{footer.partner}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-kicker text-paper/40">Social</p>
              <ul className="mt-2 flex gap-4">
                {footer.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-paper/70 transition-colors hover:text-gold-light"
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
        <div className="mt-12 space-y-2 border-t border-white/10 pt-8 text-xs leading-relaxed text-paper/45">
          <p>{footer.teaserNote}</p>
          <p>{footer.imageNote}</p>
        </div>

        <p className="mt-6 text-xs text-paper/40">
          © {year} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
