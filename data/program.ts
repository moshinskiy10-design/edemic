export const courseProgram = {
  eyebrow: "The curriculum",
  heading: "A structured program built around your dog's pattern",
  subhead:
    "Twelve focused modules, a personalised written feeding plan, and an Aussie-tailored ingredient guide — designed to make picky eating predictable, not stressful.",
  stats: [
    { value: "12", label: "modules" },
    { value: "20+", label: "lessons" },
    { value: "5h", label: "video, no filler" },
    { value: "4", label: "eater types covered" },
  ],
  highlights: [
    {
      title: "A written plan, built for your dog",
      body:
        "After the quiz, you get a personalised feeding plan for your dog's eater type — not a generic checklist. Each module references the plan, so you always know which step you're on.",
    },
    {
      title: "Aussie pantry, Aussie brands",
      body:
        "Ingredient guides, brand notes, and seasonal tips all assume an Australian household. No US-only kibble brands, no celsius/fahrenheit confusion, no overseas vet advice.",
    },
    {
      title: "Built around four eater types",
      body:
        "Anxious. Bored. Spoiled. Health-sensitive. The plan you get is the plan for your dog's pattern — not a one-size-fits-all feeding template.",
    },
  ],
};

export const successTiers = [
  {
    slug: "base",
    name: "Base",
    eyebrow: "For self-paced owners",
    summary:
      "The full curriculum, the assessment, and the written plan. Work through it on your own schedule.",
    priceAnchor: "$99 AUD",
    price: "$84 AUD",
    discount: "Save 15%",
    tone: "stone" as const,
    badge: null as string | null,
    includes: [
      "Full 12-module video curriculum",
      "Personalised eater-type assessment",
      "Written feeding plan tailored to your dog",
      "60-day money-back guarantee",
    ],
    excludes: [
      "Private community access",
      "Email Q&A support",
      "Plan refresh kit",
    ],
    cta: { label: "Start with Base →", href: "/quiz" },
  },
  {
    slug: "optimal",
    name: "Optimal",
    eyebrow: "With written support",
    summary:
      "Everything in Base, plus email Q&A access and a private community of Aussie dog parents working the same plan.",
    priceAnchor: "$249 AUD",
    price: "$211 AUD",
    discount: "Save 15%",
    tone: "forest" as const,
    badge: "Most chosen",
    includes: [
      "Everything in Base",
      "Email Q&A access, replies within 2 business days",
      "Plan refresh kit when your dog levels up",
      "Private community of Aussie dog parents",
      "Aussie ingredient sourcing guide",
      "Lifetime updates to the curriculum",
    ],
    excludes: [
      "Label-reading workshop",
      "AU brand audit library",
    ],
    cta: { label: "Choose Optimal →", href: "/quiz" },
  },
  {
    slug: "premium",
    name: "Premium",
    eyebrow: "Maximum written depth",
    summary:
      "Every resource we publish, plus next-business-day email replies. For owners who want the deepest reference library on Aussie picky eating.",
    priceAnchor: "$549 AUD",
    price: "$466 AUD",
    discount: "Save 15%",
    tone: "coral" as const,
    badge: "Most in-depth",
    includes: [
      "Everything in Optimal",
      "Priority email Q&A, next business day reply",
      "Label-reading workshop (90 min, recorded)",
      "AU brand audit library, updated quarterly",
      "Bonus modules on enrichment and rotation feeding",
      "Health-flag worksheet to take to your vet",
    ],
    excludes: [],
    cta: { label: "Choose Premium →", href: "/quiz" },
  },
];

export const programNote =
  "Every tier includes the 60-day money-back guarantee. Prices in Australian dollars, GST inclusive. Cancel anytime — your plan is yours to keep. Edemic Pets is an educational nutrition program — not a veterinary service. For medical concerns, please see a registered Australian veterinarian.";
