"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary, Locale } from "@/content/dictionary";
import {
  PRESET_AMOUNTS,
  MIN_AMOUNT,
  MAX_AMOUNT,
  formatAmount,
  isValidAmount,
  type Frequency,
} from "@/lib/donation";

type Props = {
  content: Dictionary["donate"];
  lang: Locale;
};

/**
 * 寄付フォーム。頻度（今回のみ／毎月）と金額（プリセット／任意）を選び、
 * /api/checkout で Stripe Checkout セッションを作成して決済ページへ遷移する。
 */
export function DonateForm({ content: d, lang }: Props) {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [preset, setPreset] = useState<number | null>(PRESET_AMOUNTS[1]);
  const [custom, setCustom] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // 任意入力があればそれを優先
  const amount = custom.trim() !== "" ? Number(custom) : preset;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidAmount(amount)) {
      setError(d.amountError);
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, frequency, locale: lang }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      const data = (await res.json()) as { url?: string };
      if (!data.url) throw new Error("missing url");
      // Stripe のホスト型決済ページへ遷移
      window.location.href = data.url;
    } catch {
      setError(d.genericError);
      setSubmitting(false);
    }
  }

  const baseField =
    "rounded-full border px-5 py-3.5 text-sm transition-colors focus-visible:ring-offset-paper";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* 頻度 */}
      <fieldset>
        <legend className="text-sm font-medium text-navy">
          {d.frequencyLabel}
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3" role="radiogroup">
          {(
            [
              { key: "once" as const, label: d.once },
              { key: "monthly" as const, label: d.monthly },
            ]
          ).map((f) => {
            const active = frequency === f.key;
            return (
              <button
                key={f.key}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setFrequency(f.key)}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "border-gold bg-gold text-navy"
                    : "border-hairline bg-white text-navy hover:border-gold/60"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* 金額 */}
      <fieldset>
        <legend className="text-sm font-medium text-navy">{d.amountLabel}</legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PRESET_AMOUNTS.map((value) => {
            const active = custom.trim() === "" && preset === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setPreset(value);
                  setCustom("");
                  if (error) setError("");
                }}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                  active
                    ? "border-gold bg-gold/10 text-navy"
                    : "border-hairline bg-white text-navy hover:border-gold/60"
                }`}
              >
                {formatAmount(value, lang)}
              </button>
            );
          })}
        </div>

        {/* 任意入力 */}
        <div className="mt-3">
          <label htmlFor="custom-amount" className="sr-only">
            {d.customLabel}
          </label>
          <input
            id="custom-amount"
            type="number"
            inputMode="numeric"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step={100}
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              if (e.target.value.trim() !== "") setPreset(null);
              if (error) setError("");
            }}
            placeholder={d.customPlaceholder}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "amount-error" : undefined}
            className={`${baseField} w-full border-hairline bg-white text-navy placeholder:text-ink-muted/60 hover:border-gold/60`}
          />
        </div>

        {error ? (
          <p id="amount-error" role="alert" className="mt-2 text-sm text-vermilion">
            {error}
          </p>
        ) : null}
      </fieldset>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium text-navy shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-gold/30 disabled:opacity-60"
      >
        {submitting ? d.submitting : d.submit}
      </button>

      <p className="text-xs leading-relaxed text-ink-muted">{d.secureNote}</p>
    </form>
  );
}
