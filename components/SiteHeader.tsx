"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

/**
 * 固定ヘッダー。スクロールで背景を不透明化する控えめな演出。
 * ヒーロー上では透明、スクロール後はネイビーの半透明ガラス。
 */
export function SiteHeader() {
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
          ? "border-b border-white/10 bg-navy/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="メインナビゲーション"
        className="section-shell flex h-16 items-center justify-between"
      >
        <a
          href="#main"
          className="font-serif text-lg font-semibold tracking-wide text-paper"
        >
          {site.name}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper/75 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold-light transition-colors hover:bg-gold hover:text-navy"
        >
          {nav.cta}
        </a>
      </nav>
    </header>
  );
}
