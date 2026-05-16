"use client";

import { LinkButton } from "@/components/ui/Button";
import type { EaterType } from "@/data/eater-types";
import type { successTiers } from "@/data/program";
import { calendlyHref, site } from "@/data/site";
import type { DogDetails } from "./DogDetailsStep";

type Tier = (typeof successTiers)[number];

export function ResultStep({
  result,
  tier,
  details,
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
  details: DogDetails;
  email: string;
  submitted: boolean;
  onRestart: () => void;
}) {
  const { type } = result;
  const name = details.name.trim() || "Your dog";
  const ageLabel = formatAge(details.ageYears, details.ageMonths);
  const breed = details.breed.trim();
  const descriptor = [ageLabel, breed].filter(Boolean).join(" ");
  const fullDescriptor = descriptor ? `your ${descriptor}` : "your dog";

  return (
    <div>
      {submitted && (
        <div className="mb-8 rounded-lg border border-forest/20 bg-forest/5 px-5 py-4 text-sm text-offblack/85">
          <p>
            <strong className="text-forest">Sent.</strong> {name}&rsquo;s
            result and the first nutrition guide are on their way to{" "}
            <span className="font-semibold">{email}</span>. Check spam if it
            hasn&rsquo;t landed in 2 minutes.
          </p>
        </div>
      )}

      <p className="eyebrow">Result · type {type.number}</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-balance text-forest md:text-5xl">
        {name} is {articleFor(type.name)} {type.name}.
      </h1>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone">
        Eater profile · {fullDescriptor}
      </p>
      <p className="mt-5 text-pretty text-lg leading-relaxed text-offblack/85">
        {type.oneLiner}
      </p>
      <p className="mt-3 text-pretty text-base leading-relaxed text-offblack/75">
        {type.body}
      </p>

      <div className="mt-10 rounded-lg border border-forest/15 bg-cream-200/40 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-600">
          Three things to try this week with {name}
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
        <p className="mt-5 text-xs text-stone">
          Your free nutrition guides — feeding principles, treat caps, AU
          brand notes — are in your inbox. Look for an email from Steffi at
          Edemic.
        </p>
      </div>

      <div className="mt-10 rounded-lg border-2 border-coral/40 bg-cream px-6 py-7 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">
          Recommended next step
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-forest">
          Start the {tier.name} program —{" "}
          <span className="text-coral-600">{tier.price}</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-offblack/80">
          Built around the {type.name.toLowerCase()} pattern, with the full
          nutrition curriculum, 1:1 chat mentorship with Steffi, and a{" "}
          {site.guaranteeDays}-day money-back guarantee.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <LinkButton href={tier.cta.href} size="lg" className="flex-1 sm:flex-none">
            Start with {tier.name} →
          </LinkButton>
          <LinkButton
            href={calendlyHref}
            size="lg"
            variant="ghost"
            className="flex-1 sm:flex-none"
          >
            Book a free 15-min call →
          </LinkButton>
        </div>

        <p className="mt-5 text-xs text-stone">
          Not sure which tier?{" "}
          <a href="/#pricing" className="text-forest underline underline-offset-4">
            Compare Base, Optimal, and Premium
          </a>
          . Want to talk it through first? The 15-min call is free, no card
          needed.
        </p>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 text-sm font-semibold text-stone hover:text-forest"
      >
        Retake the quiz
      </button>

      <p className="mt-10 rounded-lg bg-forest px-5 py-4 text-center text-sm text-cream">
        Your first nutrition guide arrives in under 2 minutes. The full
        series is yours to keep — read those, then decide.
      </p>
    </div>
  );
}

function articleFor(name: string): string {
  return /^[aeiouAEIOU]/.test(name) ? "an" : "a";
}

function formatAge(yearsRaw: string, monthsRaw: string): string {
  const y = Number(yearsRaw);
  const m = Number(monthsRaw);
  const yearsOk = !Number.isNaN(y) && yearsRaw !== "";
  const monthsOk = !Number.isNaN(m) && monthsRaw !== "" && m > 0;
  if (!yearsOk && !monthsOk) return "";
  if (yearsOk && y === 0 && monthsOk) {
    return `${m}-month-old`;
  }
  if (yearsOk && y > 0 && monthsOk) {
    return `${y}-year-old`;
  }
  if (yearsOk && y > 0) {
    return `${y}-year-old`;
  }
  if (monthsOk) return `${m}-month-old`;
  return "";
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
        "Keep a simple food + symptom diary for 14 days — three rows a day: what went in, what came out, energy and itch level.",
        "Don't switch foods or brands during the diary window — your baseline is the data the plan is built on.",
        "Bring the diary to your next routine vet visit. The plan we email you is designed to slot alongside their advice.",
      ];
  }
}
