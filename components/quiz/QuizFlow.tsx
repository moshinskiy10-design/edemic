"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeEmph } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { quizQuestions } from "@/data/quiz";
import {
  computeResult,
  emptyQuizState,
  isQuestionAnswered,
  isValidEmail,
  type QuizState,
} from "@/lib/quiz";
import { successTiers } from "@/data/program";
import { site } from "@/data/site";
import { QuestionStep } from "./QuestionStep";
import { EmailGate } from "./EmailGate";
import { ResultStep } from "./ResultStep";

type Stage = "question" | "email" | "result";

export function QuizFlow() {
  const [stage, setStage] = useState<Stage>("question");
  const [qIndex, setQIndex] = useState(0);
  const [state, setState] = useState<QuizState>(emptyQuizState());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total = quizQuestions.length;
  const current = quizQuestions[qIndex];
  const answered = isQuestionAnswered(state, qIndex);

  const progress = useMemo(() => {
    if (stage === "result") return 100;
    if (stage === "email") return Math.round(((total + 0.5) / (total + 1)) * 100);
    return Math.round(((qIndex + (answered ? 1 : 0)) / (total + 1)) * 100);
  }, [stage, qIndex, answered, total]);

  function setAnswer(ai: number, multi: boolean) {
    setState((prev) => {
      const next = { answers: prev.answers.map((a) => [...a]) };
      const picks = next.answers[qIndex];
      if (multi) {
        const i = picks.indexOf(ai);
        if (i >= 0) picks.splice(i, 1);
        else picks.push(ai);
      } else {
        next.answers[qIndex] = [ai];
      }
      return next;
    });
  }

  function goNext() {
    if (!answered) return;
    if (qIndex < total - 1) setQIndex((i) => i + 1);
    else setStage("email");
  }

  function goBack() {
    if (stage === "email") {
      setStage("question");
      return;
    }
    if (qIndex > 0) setQIndex((i) => i - 1);
  }

  function submitEmail() {
    if (!isValidEmail(email)) return;
    // Stub: in production this hits ConvertKit/Klaviyo/Formspree.
    // For the static export we just persist locally and reveal the result.
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(
          "edemic.quiz",
          JSON.stringify({ email, answers: state.answers, at: Date.now() }),
        );
      } catch {}
    }
    setSubmitted(true);
    setStage("result");
  }

  function restart() {
    setState(emptyQuizState());
    setQIndex(0);
    setEmail("");
    setSubmitted(false);
    setStage("question");
  }

  const result = stage === "result" ? computeResult(state) : null;
  const recommendedTier =
    result &&
    (result.healthFlagged
      ? successTiers.find((t) => t.slug === "premium")!
      : successTiers.find((t) => t.slug === "optimal")!);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-10 md:py-16">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-baseline gap-1 font-display text-xl font-bold tracking-tight text-forest"
        >
          edemic
          <span className="text-coral text-sm font-semibold tracking-[0.18em]">
            PETS
          </span>
        </Link>
        <p className="text-xs uppercase tracking-[0.18em] text-stone">
          60-second quiz
        </p>
      </header>

      <div
        className="mt-6 h-1.5 w-full overflow-hidden rounded-pill bg-forest/10"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full bg-coral"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: easeEmph }}
        />
      </div>

      <div className="relative mt-10 flex-1">
        <AnimatePresence mode="wait" initial={false}>
          {stage === "question" && current && (
            <motion.div
              key={`q-${qIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: easeEmph }}
            >
              <QuestionStep
                question={current}
                index={qIndex}
                total={total}
                picks={state.answers[qIndex]}
                onPick={(ai) => setAnswer(ai, !!current.multi)}
              />
            </motion.div>
          )}

          {stage === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: easeEmph }}
            >
              <EmailGate
                email={email}
                onChange={setEmail}
                onSubmit={submitEmail}
              />
            </motion.div>
          )}

          {stage === "result" && result && recommendedTier && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: easeEmph }}
            >
              <ResultStep
                result={result}
                tier={recommendedTier}
                email={email}
                submitted={submitted}
                onRestart={restart}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {stage !== "result" && (
        <footer className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={stage === "question" && qIndex === 0}
            className={cn(
              "text-sm font-semibold text-stone transition-colors",
              "hover:text-forest disabled:opacity-30 disabled:hover:text-stone",
            )}
          >
            ← Back
          </button>

          {stage === "question" ? (
            <Button
              onClick={goNext}
              disabled={!answered}
              size="lg"
              className="min-w-[180px]"
            >
              {qIndex === total - 1 ? "See my result" : "Next"} →
            </Button>
          ) : (
            <Button
              onClick={submitEmail}
              disabled={!isValidEmail(email)}
              size="lg"
              className="min-w-[180px]"
            >
              Get my plan →
            </Button>
          )}
        </footer>
      )}

      <p className="mt-10 text-center text-xs text-stone/80">
        Edemic Pets is an educational nutrition program · {site.guaranteeDays}
        -day money-back · For medical concerns, see a registered Australian vet.
      </p>
    </div>
  );
}
