import { eaterTypes, type EaterType } from "@/data/eater-types";
import { quizQuestions, type QuizScore } from "@/data/quiz";

export type QuizState = {
  /** answers[questionIndex] holds the chosen answer indices for that question. */
  answers: number[][];
};

export function emptyQuizState(): QuizState {
  return { answers: quizQuestions.map(() => []) };
}

export function isQuestionAnswered(state: QuizState, qIndex: number): boolean {
  return state.answers[qIndex]?.length > 0;
}

export function emptyScore(): QuizScore {
  return { anxious: 0, bored: 0, spoiled: 0, "health-sensitive": 0 };
}

export function computeResult(state: QuizState): {
  type: EaterType;
  score: QuizScore;
  healthFlagged: boolean;
} {
  const score = emptyScore();
  let healthFlagged = false;

  quizQuestions.forEach((q, qi) => {
    const picks = state.answers[qi] ?? [];
    picks.forEach((ai) => {
      const ans = q.answers[ai];
      if (!ans) return;
      if (ans.healthFlag) healthFlagged = true;
      for (const [k, v] of Object.entries(ans.weights)) {
        score[k as keyof QuizScore] += v ?? 0;
      }
    });
  });

  // Tie-break order: health-sensitive (safety first) > anxious > bored > spoiled.
  // Health-sensitive only wins on its own merits — flagged but lower score still
  // goes to the actual winner, with the flag preserved so we can show the vet
  // banner on top of any result.
  const priority: EaterType["slug"][] = [
    "health-sensitive",
    "anxious",
    "bored",
    "spoiled",
  ];

  let topSlug: EaterType["slug"] = "anxious";
  let topScore = -1;
  for (const slug of priority) {
    if (score[slug] > topScore) {
      topScore = score[slug];
      topSlug = slug;
    }
  }

  const type = eaterTypes.find((t) => t.slug === topSlug)!;
  return { type, score, healthFlagged };
}

const AU_EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return AU_EMAIL_RX.test(value.trim());
}
