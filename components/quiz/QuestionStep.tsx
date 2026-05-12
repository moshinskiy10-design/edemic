"use client";

import { cn } from "@/lib/cn";
import type { QuizQuestion } from "@/data/quiz";

export function QuestionStep({
  question,
  index,
  total,
  picks,
  onPick,
}: {
  question: QuizQuestion;
  index: number;
  total: number;
  picks: number[];
  onPick: (answerIndex: number) => void;
}) {
  return (
    <div>
      <p className="eyebrow">
        {question.eyebrow} · Question {index + 1} of {total}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-balance text-forest md:text-4xl">
        {question.prompt}
      </h1>
      {question.helper && (
        <p className="mt-3 text-sm text-stone">{question.helper}</p>
      )}

      <ul className="mt-8 space-y-3" role={question.multi ? "group" : "radiogroup"}>
        {question.answers.map((a, ai) => {
          const selected = picks.includes(ai);
          return (
            <li key={a.label}>
              <button
                type="button"
                onClick={() => onPick(ai)}
                role={question.multi ? "checkbox" : "radio"}
                aria-checked={selected}
                className={cn(
                  "flex w-full items-center gap-4 rounded-lg border-2 px-5 py-4 text-left transition-all duration-150 ease-emph",
                  "min-h-[64px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                  selected
                    ? "border-forest bg-forest/5 text-offblack shadow-sm"
                    : "border-forest/15 bg-cream text-offblack hover:border-forest/40 hover:bg-cream-200/40",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    question.multi ? "rounded-md" : "rounded-full",
                    selected
                      ? "border-forest bg-forest text-cream"
                      : "border-forest/30 bg-cream",
                  )}
                  aria-hidden
                >
                  {selected && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className="text-base leading-snug md:text-lg">
                  {a.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {question.multi && (
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-stone">
          Tip · select all that apply
        </p>
      )}
    </div>
  );
}
