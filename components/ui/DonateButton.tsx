"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cta } from "@/content/site";

/**
 * 寄付CTAボタン。
 * - NEXT_PUBLIC_DONATE_URL が設定されていれば、その URL を新規タブで開く。
 * - 未設定なら「準備中」モーダルを表示する（投資・出資の導線は一切置かない）。
 *
 * 寄付は常にミッション（公益・支援）の文脈に閉じる。
 */
export function DonateButton({ className = "" }: { className?: string }) {
  const donateUrl = process.env.NEXT_PUBLIC_DONATE_URL;
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-navy shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-gold/30 focus-visible:ring-offset-navy";

  if (donateUrl) {
    return (
      <a
        href={donateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {cta.donateLabel}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${baseClass} ${className}`}
        aria-haspopup="dialog"
      >
        {cta.donateLabel}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
          >
            <button
              aria-label="閉じる"
              tabIndex={-1}
              className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="donate-modal-title"
              className="relative w-full max-w-md rounded-2xl border border-hairline bg-paper p-8 text-left shadow-2xl"
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            >
              <h3
                id="donate-modal-title"
                className="text-xl font-semibold text-navy"
              >
                {cta.donatePreparingTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {cta.donatePreparingBody}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-navy-700"
              >
                閉じる
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
