"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cta } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * メール登録フォーム。
 * クライアント側でバリデーションし、/api/subscribe へ送信する。
 * 実送信先は環境変数（SUBSCRIBE_ENDPOINT）でプレースホルダ化されている。
 */
export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setMessage(cta.emailInvalid);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setMessage(cta.subscribeSuccess);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(cta.subscribeError);
    }
  }

  const isSuccess = status === "success";

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.p
            key="success"
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-paper"
          >
            {message}
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-3"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              メールアドレス
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="subscribe-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder={cta.emailPlaceholder}
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "subscribe-error" : undefined}
                className="w-full flex-1 rounded-full border border-paper/20 bg-navy-700/60 px-5 py-3.5 text-sm text-paper placeholder:text-paper/40 focus-visible:ring-offset-navy"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-paper/30 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-gold hover:text-gold-light disabled:opacity-60 focus-visible:ring-offset-navy"
              >
                {status === "submitting" ? "送信中…" : cta.subscribeLabel}
              </button>
            </div>
            {status === "error" ? (
              <p id="subscribe-error" role="alert" className="text-sm text-gold-light">
                {message}
              </p>
            ) : null}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
