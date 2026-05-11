export const courseProgram = {
  eyebrow: "The curriculum",
  heading: "A mentor-led program built around your dog",
  subhead:
    "Twelve focused modules, weekly 1-on-1 mentor calls, and a private feed where Steffi answers questions in plain English — usually within a day.",
  stats: [
    { value: "12", label: "modules" },
    { value: "20+", label: "lessons" },
    { value: "5h", label: "video, no filler" },
    { value: "1-on-1", label: "weekly mentor calls" },
  ],
  highlights: [
    {
      title: "Mentor-paced, not self-paced",
      body:
        "Every week you book a 30-minute call with Steffi. She reviews the past seven days, adjusts the plan, and answers what the lessons don't.",
    },
    {
      title: "Real conversations, in writing",
      body:
        "Send a photo of the bowl, a clip of the walk, a paragraph about last night — Steffi reads everything and replies inside the program, not on a forum.",
    },
    {
      title: "Built around four eater types",
      body:
        "Anxious. Bored. Inconsistent. Sensitive. The plan you get is the plan for your dog's pattern — not a generic feeding checklist.",
    },
  ],
};

export const successTiers = [
  {
    slug: "base",
    name: "Base",
    eyebrow: "For self-paced owners",
    summary:
      "The full curriculum, the assessment, and the written plan. No mentor calls — you work through it on your own time.",
    priceAnchor: "$99 AUD",
    price: "$84 AUD",
    discount: "Save 15%",
    tone: "stone" as const,
    badge: null as string | null,
    includes: [
      "Full 12-module video curriculum",
      "Personalised eater-type assessment",
      "Written feeding plan tailored to your dog",
    ],
    excludes: [
      "Weekly 1-on-1 mentor calls",
      "Direct message access to Steffi",
      "Plan revisions as your dog progresses",
    ],
    cta: { label: "Start with Base →", href: "/quiz" },
  },
  {
    slug: "optimal",
    name: "Optimal",
    eyebrow: "With monthly mentorship",
    summary:
      "Everything in Base, plus a monthly 1-on-1 call with Steffi and message access between calls.",
    priceAnchor: "$249 AUD",
    price: "$211 AUD",
    discount: "Save 15%",
    tone: "forest" as const,
    badge: "Most chosen",
    includes: [
      "Everything in Base",
      "One 30-minute 1-on-1 call per month with Steffi",
      "Direct message support, replies within 24h on weekdays",
      "Plan revisions as your dog progresses",
      "Vet-aligned bowl audits and brand notes",
      "Private community of Aussie dog parents",
      "Founder-recorded answers to your specific questions",
    ],
    excludes: [
      "Weekly 1-on-1 calls",
      "On-call follow-up between scheduled calls",
    ],
    cta: { label: "Choose Optimal →", href: "/quiz" },
  },
  {
    slug: "mentorship",
    name: "Mentorship",
    eyebrow: "Maximum 1-on-1 support",
    summary:
      "Weekly 1-on-1 mentor calls, written follow-ups after every session, and the founder on speed-dial. For dogs whose pattern needs hands-on tuning.",
    priceAnchor: "$549 AUD",
    price: "$466 AUD",
    discount: "Save 15%",
    tone: "coral" as const,
    badge: "Hands-on",
    includes: [
      "Everything in Optimal",
      "Weekly 30-minute 1-on-1 calls with Steffi",
      "Written recap and revised plan after every call",
      "Same-day message support, weekdays",
      "Vet-coordination: Steffi liaises with your GP vet on request",
      "Video review of mealtimes and walks",
      "Behaviour cue audits with annotated feedback",
      "Founder accountability: scheduled check-ins, not just on-demand",
    ],
    excludes: [],
    cta: { label: "Apply for Mentorship →", href: "/quiz" },
  },
];

export const programNote =
  "Every tier includes the 60-day money-back guarantee. Prices in Australian dollars, GST inclusive. Cancel anytime — your plan is yours to keep.";
