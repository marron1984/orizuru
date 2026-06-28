import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";

type SectionHeadingProps = {
  kicker: string;
  heading: string;
  lead?: string;
  tone?: "onLight" | "onDark";
  align?: "left" | "center";
};

/**
 * セクション冒頭の見出しブロック（キッカー＋大見出し＋リード）。
 */
export function SectionHeading({
  kicker,
  heading,
  lead,
  tone = "onLight",
  align = "left",
}: SectionHeadingProps) {
  const onDark = tone === "onDark";
  return (
    <Reveal
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <Kicker tone={tone} className={align === "center" ? "justify-center" : ""}>
        {kicker}
      </Kicker>
      <h2
        className={`text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          onDark ? "text-paper" : "text-navy"
        }`}
      >
        {heading}
      </h2>
      {lead ? (
        <p
          className={`max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${
            onDark ? "text-paper/80" : "text-ink-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
