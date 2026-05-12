"use client";

import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { EaterType } from "@/data/eater-types";
import type { successTiers } from "@/data/program";
import { site } from "@/data/site";

type Tier = (typeof successTiers)[number];

export function ResultStep({
  result,
  tier,
  email,
  submitted,
  onRestart,
}: {
  result: {
    type: EaterType;
    score: Record<string, number>;
    healthFlagged: boolean;
  };
  tier: Tier;
  email: string;
  submitted: boolean;
  onRestart: () => void;
}) {
  const { type } = result;

  return (
    <div>
      {submitted && (
        <div className="mb-8 rounded-lg border border-forest/20 bg-forest/5 px-5 py-4 text-sm text-offblack/85">
          <p>
            <strong className="text-forest">Sent.</strong> Your plan and the
            first email are on their way to{" "}
            <span className="font-semibold">{email}</span>. Check spam if it
            hasn&rsquo;t landed in 2 minutes.
          </p>
        </div>
      )}

      <p className="eyebrow">Your dog is type {type.number}</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-balance text-forest md:text-5xl">
        {type.name}
      </h1>
      <p className="mt-5 text-pretty text-lg leading-relaxed text-offblack/85">
        {type.oneLiner}
      </p>
      <p className="mt-3 text-pretty text-base leading-relaxed text-offblack/75">
        {type.body}
      </p>

      <div className="mt-10 rounded-lg border border-forest/15 bg-cream-200/40 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-600">
          Three things to try this week
        </p>
        <ul className="mt-4 space-y-3 text-base text-offblack/85">
          {immediateWins(type.slug).map((w) => (
            <li key={w} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-forest"
              />
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-lg border-2 border-coral/40 bg-cream px-6 py-7 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">
          We recommend
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-forest">
          {tier.name} —{" "}
          <span className="text-coral-600">{tier.price}</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-offblack/80">
          {tier.summary} Built around the {type.name.toLowerCase()} pattern,
          with the full curriculum, a personalised written plan, and a {site.guaranteeDays}
          -day money-back guarantee.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <LinkButton href={tier.cta.href} size="lg" className="w-full sm:w-auto">
            Start with {tier.name} →
          </LinkButton>
          <button
            type="button"
            onClick={onRestart}
            className="text-sm font-semibold text-stone hover:text-forest"
          >
            Retake the quiz
          </button>
        </div>

        <p className="mt-5 text-xs text-stone">
          Prefer to see all three tiers?{" "}
          <a href="/#pricing" className="text-forest underline underline-offset-4">
            Compare Base, Optimal, and Premium
          </a>
          .
        </p>
      </div>

      <p
        className={cn(
          "mt-10 rounded-lg bg-forest px-5 py-4 text-center text-sm text-cream",
        )}
      >
        Your first email arrives in under 2 minutes. Day 5 wraps up the free
        course — read those first, then decide.
      </p>
    </div>
  );
}

function immediateWins(slug: EaterType["slug"]): string[] {
  switch (slug) {
    case "anxious":
      return [
        "Move the bowl to the quietest corner of the house — out of foot-traffic, away from the door.",
        "Keep mealtimes within the same 30-minute window every day for a week. Routine first, food second.",
        "Sit nearby while they eat, but don't hover. Predictable presence beats encouragement.",
      ];
    case "bored":
      return [
        "Rotate two proteins this week — chicken Mon/Wed/Fri, beef Tue/Thu/Sat. Don't change brands, just the protein.",
        "Add one tablespoon of warm water and a spoon of plain yoghurt to one meal. See if the bowl finishes.",
        "Try a slow-feed puzzle or snuffle mat for one meal. Make the bowl an event.",
      ];
    case "spoiled":
      return [
        "15-minute rule: put the bowl down, walk away. After 15 minutes, lift it. Don't replace it until next meal.",
        "Zero scraps, zero treats from the table for 7 days. Everyone in the house, no exceptions.",
        "Two meals a day at fixed times. No grazing windows.",
      ];
    case "health-sensitive":
      return [
        "Book a vet appointment in the next 7 days if you haven't already. Bring a 3-day food + symptom diary.",
        "Don't change the food yet — your vet needs to see the current baseline to spot patterns.",
        "Keep a daily log: what went in, what came out, energy level, scratching. Three rows a day, 14 days.",
      ];
  }
}
