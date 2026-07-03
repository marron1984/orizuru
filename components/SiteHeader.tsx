"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/dictionary";

/**
 * 固定ヘッダー。スクロールで背景を不透明化する控えめな演出。
 * ヒーロー上では透明、スクロール後はネイビーの半透明ガラス。
 * 言語切替リンク（日本語 / English）を備える。
 */
export function SiteHeader({
  nav,
  siteName,
}: {
  nav: Dictionary["nav"];
  siteName: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={nav.menuLabel}
        className="section-shell flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#main"
          className="font-serif text-lg font-semibold tracking-wide text-navy"
        >
          {siteName}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {/* 言語切替（別ロケールのルートへ遷移） */}
          <Link
            href={nav.switch.href}
            hrefLang={nav.switch.href === "/en" ? "en" : "ja"}
            aria-label={nav.switch.ariaLabel}
            className="text-sm text-navy/60 transition-colors hover:text-gold"
          >
            {nav.switch.label}
          </Link>
          <span aria-hidden className="h-4 w-px bg-navy/15" />
          <a
            href="#cta"
            className="rounded-none border border-gold px-5 py-2 text-sm font-medium tracking-wide text-navy transition-colors hover:bg-gold"
          >
            {nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
