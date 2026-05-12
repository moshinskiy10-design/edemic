import type { EaterType } from "@/data/eater-types";

export type QuizScore = Record<EaterType["slug"], number>;

export type QuizAnswer = {
  label: string;
  weights: Partial<QuizScore>;
  /** If true, the user has flagged a medical concern — route to vet-first variant. */
  healthFlag?: boolean;
};

export type QuizQuestion = {
  id: string;
  /** Short eyebrow shown above the question. */
  eyebrow: string;
  prompt: string;
  /** Optional helper text under the prompt. */
  helper?: string;
  /** If true, the user can select multiple answers. */
  multi?: boolean;
  answers: QuizAnswer[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "life-stage",
    eyebrow: "About your dog",
    prompt: "How old is your dog?",
    helper: "Picks the right baseline for the plan.",
    answers: [
      { label: "Puppy (under 1 year)", weights: { anxious: 1 } },
      { label: "Adult (1–7 years)", weights: {} },
      { label: "Senior (7+ years)", weights: { "health-sensitive": 1 } },
    ],
  },
  {
    id: "health-flag",
    eyebrow: "Health check",
    prompt: "In the last 4 weeks, has your dog shown any of these?",
    helper: "Be honest — this changes what we recommend.",
    multi: true,
    answers: [
      {
        label: "Vomiting, more than once",
        weights: { "health-sensitive": 3 },
        healthFlag: true,
      },
      {
        label: "Unexplained weight loss",
        weights: { "health-sensitive": 3 },
        healthFlag: true,
      },
      {
        label: "Hot spots, itching, or coat issues",
        weights: { "health-sensitive": 2 },
        healthFlag: true,
      },
      {
        label: "Soft stools or diarrhea, ongoing",
        weights: { "health-sensitive": 3 },
        healthFlag: true,
      },
      { label: "None of the above", weights: {} },
    ],
  },
  {
    id: "bowl-behavior",
    eyebrow: "At the bowl",
    prompt: "When you put down your dog's regular food, what usually happens?",
    answers: [
      {
        label: "Eats a bit, walks away, comes back later",
        weights: { anxious: 2 },
      },
      { label: "Sniffs and walks away looking unimpressed", weights: { bored: 2 } },
      { label: "Refuses, waits for treats or human food", weights: { spoiled: 3 } },
      {
        label: "Eats fine, but symptoms follow (gas, itch, soft stools)",
        weights: { "health-sensitive": 3 },
      },
    ],
  },
  {
    id: "pattern",
    eyebrow: "Week to week",
    prompt: "How does your dog's eating change over a typical week?",
    answers: [
      {
        label: "Eats well, then suddenly off — usually after a change",
        weights: { anxious: 3 },
      },
      {
        label: "Loves a new food for 2–3 days, then quits on it",
        weights: { bored: 3 },
      },
      {
        label: "Holds out longer if there's a chance of something better",
        weights: { spoiled: 3 },
      },
      {
        label: "Cycles with physical symptoms — itchy, gassy, sluggish",
        weights: { "health-sensitive": 2 },
      },
    ],
  },
  {
    id: "stress-response",
    eyebrow: "When life changes",
    prompt: "How does your dog react to visitors, new pets, moves, or storms?",
    answers: [
      {
        label: "Stops eating entirely or eats much less",
        weights: { anxious: 3 },
      },
      {
        label: "Doesn't really notice — food's food",
        weights: { bored: 1 },
      },
      {
        label: "Holds out for attention or treats",
        weights: { spoiled: 2 },
      },
      {
        label: "Mixed: gut, skin, mood all shift together",
        weights: { "health-sensitive": 2 },
      },
    ],
  },
  {
    id: "household",
    eyebrow: "Your household",
    prompt: "How consistent are feeding rules in your house?",
    answers: [
      {
        label: "Multiple feeders, mixed rules — some give scraps",
        weights: { spoiled: 3 },
      },
      {
        label: "Multiple feeders, but we follow the same routine",
        weights: {},
      },
      { label: "Single feeder — I'm the only one", weights: {} },
      {
        label: "Multiple feeders, dog won't eat for everyone",
        weights: { anxious: 2 },
      },
    ],
  },
  {
    id: "tried",
    eyebrow: "What you've tried",
    prompt: "What's the most common fix you've already tried?",
    answers: [
      { label: "Switched brands two or more times", weights: { bored: 2 } },
      {
        label: "Added toppers, treats, or human food",
        weights: { spoiled: 2 },
      },
      {
        label: "Free-feeding (left food out all day)",
        weights: { anxious: 1, spoiled: 1 },
      },
      {
        label: "Took to the vet first",
        weights: { "health-sensitive": 2 },
      },
    ],
  },
];
