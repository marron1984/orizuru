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
 * 上部に細いルールを引き、雑誌的なセクション・オープナーとして組む。
 */
export function SectionHeading({
  kicker,
  heading,
  lead,
  tone = "onLight",
  align = "left",
}: SectionHeadingProps) {
  const onDark = tone === "onDark";
  const center = align === "center";
  return (
    <Reveal
      className={`flex flex-col ${center ? "items-center text-center" : "items-start"}`}
    >
      {/* エディトリアルなセクション見出しの罫 */}
      <div
        className={`mb-6 flex items-center gap-4 ${center ? "justify-center" : ""}`}
      >
        <span
          aria-hidden
          className={`h-px w-10 ${onDark ? "bg-paper/30" : "bg-navy/20"}`}
        />
        <Kicker tone={tone}>{kicker}</Kicker>
      </div>
      <h2
        className={`max-w-3xl text-balance font-serif text-[1.9rem] font-medium leading-[1.25] tracking-tight sm:text-[2.5rem] lg:text-[3rem] ${
          onDark ? "text-paper" : "text-navy"
        }`}
      >
        {heading}
      </h2>
      {lead ? (
        <p
          className={`mt-6 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${
            onDark ? "text-paper/75" : "text-ink-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
