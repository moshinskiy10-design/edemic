import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { successTiers, programNote } from "@/data/program";
import { cn } from "@/lib/cn";

const cardTone = {
  forest:
    "border-forest bg-forest text-cream ring-2 ring-coral/60 md:scale-[1.02]",
  coral: "border-coral/40 bg-cream text-offblack",
  stone: "border-stone/20 bg-cream text-offblack",
} as const;

const headingTone = {
  forest: "text-cream",
  coral: "text-forest",
  stone: "text-forest",
} as const;

const priceTone = {
  forest: "text-coral",
  coral: "text-coral-600",
  stone: "text-forest",
} as const;

const subtleTone = {
  forest: "text-cream/80",
  coral: "text-offblack/70",
  stone: "text-offblack/70",
} as const;

const dividerTone = {
  forest: "border-cream/20",
  coral: "border-forest/10",
  stone: "border-forest/10",
} as const;

export function SuccessProgram() {
  return (
    <Section id="pricing" tone="cream">
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">Invest in your dog&rsquo;s pattern</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-balance text-forest">
            Select your <span className="text-coral-600">Success Program</span>
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-offblack/80">
            Three tiers, all built around the same curriculum and your dog&rsquo;s
            personalised written plan. The difference is how much written support
            and reference material you want alongside it.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
        {successTiers.map((tier, i) => (
          <Reveal key={tier.slug} delay={i * 0.08} as="article">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-lg border p-7 shadow-md transition-all duration-300 ease-emph",
                "hover:-translate-y-1 hover:shadow-lg",
                cardTone[tier.tone],
              )}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-coral px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-offblack shadow-md">
                  {tier.badge}
                </span>
              )}

              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.16em]",
                  tier.tone === "forest" ? "text-coral" : "text-stone",
                )}
              >
                {tier.eyebrow}
              </p>
              <h3
                className={cn(
                  "mt-2 font-display text-h2 font-bold",
                  headingTone[tier.tone],
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-3 text-pretty text-[15px] leading-relaxed",
                  subtleTone[tier.tone],
                )}
              >
                {tier.summary}
              </p>

              <div
                className={cn("mt-6 border-t pt-6", dividerTone[tier.tone])}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={cn(
                      "font-display text-4xl font-bold leading-none",
                      priceTone[tier.tone],
                    )}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm line-through",
                      tier.tone === "forest"
                        ? "text-cream/50"
                        : "text-stone/70",
                    )}
                  >
                    {tier.priceAnchor}
                  </span>
                </div>
                <span
                  className={cn(
                    "mt-2 inline-block rounded-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                    tier.tone === "forest"
                      ? "bg-coral/20 text-coral"
                      : "bg-forest/10 text-forest",
                  )}
                >
                  {tier.discount}
                </span>
              </div>

              <ul
                className={cn(
                  "mt-6 space-y-3 border-t pt-6",
                  dividerTone[tier.tone],
                )}
              >
                {tier.includes.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-start gap-3 text-[15px] leading-snug",
                      tier.tone === "forest" ? "text-cream" : "text-offblack",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full",
                        tier.tone === "forest" ? "bg-coral" : "bg-forest",
                      )}
                    />
                    <span>{f}</span>
                  </li>
                ))}
                {tier.excludes.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-start gap-3 text-[15px] leading-snug line-through",
                      tier.tone === "forest"
                        ? "text-cream/40"
                        : "text-stone/60",
                    )}
                  >
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-current opacity-40"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <LinkButton
                  href={tier.cta.href}
                  size="lg"
                  variant={tier.tone === "forest" ? "coral" : "primary"}
                  className="w-full"
                >
                  {tier.cta.label}
                </LinkButton>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-sm leading-relaxed text-stone">
          {programNote}
        </p>
      </Reveal>
    </Section>
  );
}
