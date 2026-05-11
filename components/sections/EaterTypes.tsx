import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { eaterTypes } from "@/data/eater-types";
import { ctaText, quizHref } from "@/data/site";
import { cn } from "@/lib/cn";

const tones = {
  forest: "border-forest/15 hover:border-forest/40",
  coral: "border-coral/30 hover:border-coral",
  stone: "border-stone/20 hover:border-stone/50",
  warning: "border-warning/30 hover:border-warning/60",
} as const;

const numberTones = {
  forest: "text-forest/60",
  coral: "text-coral-600",
  stone: "text-stone/70",
  warning: "text-warning/80",
} as const;

export function EaterTypes() {
  return (
    <Section id="eater-types">
      <div className="md:flex md:items-end md:justify-between md:gap-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The four types</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-balance text-forest">
            Picky eating is rarely about the food. It&rsquo;s a pattern.
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-offblack/80">
            We&rsquo;ve sorted years of mentorship conversations into four
            common patterns. Most dogs land squarely in one. The plan starts as
            soon as you know which.
          </p>
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-8 flex w-full flex-col items-start gap-6 md:mt-0 md:w-[36rem] md:max-w-[36rem] md:items-end"
        >
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-forest/10"
            style={{ aspectRatio: "2048 / 1080" }}
          >
            <Image
              src="/before-after.png"
              alt="Before and after: a hesitant dog transformed into a confident, engaged eater"
              fill
              sizes="(max-width: 768px) 100vw, 36rem"
              className="object-cover object-top"
              priority={false}
            />
          </div>
          <LinkButton href={quizHref} size="lg">
            {ctaText.variantTypes} →
          </LinkButton>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {eaterTypes.map((type, i) => (
          <Reveal key={type.slug} delay={i * 0.06} as="article">
            <div
              className={cn(
                "group relative h-full rounded-lg border bg-cream p-7 transition-all duration-300 ease-emph",
                "hover:-translate-y-1 hover:shadow-lg",
                tones[type.tone],
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "font-display text-5xl font-bold leading-none",
                    numberTones[type.tone],
                  )}
                >
                  {type.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
                  Type {type.number.replace("0", "")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-h2 font-semibold text-forest">
                {type.name}
              </h3>
              <p className="mt-2 text-pretty text-base font-medium text-offblack">
                {type.oneLiner}
              </p>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-offblack/75">
                {type.body}
              </p>
              <p className="mt-5 border-t border-forest/10 pt-4 text-xs uppercase tracking-[0.14em] text-stone">
                Cue · {type.cue}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
