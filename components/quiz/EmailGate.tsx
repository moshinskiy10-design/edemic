"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { isValidEmail } from "@/lib/quiz";

export function EmailGate({
  email,
  onChange,
  onSubmit,
}: {
  email: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
}) {
  const [touched, setTouched] = useState(false);
  const invalid = touched && email.length > 0 && !isValidEmail(email);

  return (
    <div>
      <p className="eyebrow">Almost there</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-balance text-forest md:text-4xl">
        Where should we send your dog&rsquo;s plan?
      </h1>
      <p className="mt-3 text-base leading-relaxed text-offblack/80">
        Your personalised result lands in your inbox in under 2 minutes. The
        free 5-day micro-course follows — no card needed, no upsell traps.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isValidEmail(email)) onSubmit();
          else setTouched(true);
        }}
        className="mt-8"
      >
        <label htmlFor="quiz-email" className="sr-only">
          Email address
        </label>
        <input
          id="quiz-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          autoFocus
          placeholder="you@example.com.au"
          value={email}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          className={cn(
            "h-14 w-full rounded-lg border-2 bg-cream px-5 text-base text-offblack shadow-sm",
            "transition-colors placeholder:text-stone/60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40",
            invalid
              ? "border-warning"
              : "border-forest/20 focus:border-forest",
          )}
        />
        {invalid && (
          <p className="mt-2 text-sm text-warning">
            That doesn&rsquo;t look like a valid email — double-check it?
          </p>
        )}

        <ul className="mt-6 space-y-2 text-sm text-offblack/80">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-forest" />
            We never sell your data — Australian Privacy Act 1988 compliant.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-forest" />
            One-click unsubscribe on every email.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-forest" />
            No credit card needed — the 5-day plan is free.
          </li>
        </ul>
      </form>
    </div>
  );
}
