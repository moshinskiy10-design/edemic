export const courseProgram = {
  eyebrow: "How we work",
  heading: "We teach you — so you build the perfect bowl yourself",
  subhead:
    "Edemic Pets isn't a do-this-eat-that feeding chart. It's a full education in canine nutrition, paired with 1:1 mentorship in a private chat with Steffi — so you finish as the expert on your own dog's food.",
  stats: [
    { value: "1:1", label: "private chat with Steffi" },
    { value: "12", label: "nutrition modules" },
    { value: "4", label: "eater patterns covered" },
    { value: "60d", label: "money-back guarantee" },
  ],
  highlights: [
    {
      title: "You become the expert",
      body:
        "Instead of handing you a plan that goes stale in a month, we teach you the principles of canine nutrition — so you can build, adjust, and trust your dog's bowl through every life stage.",
    },
    {
      title: "1:1 mentorship in private chat — by the hand",
      body:
        "The core of the program is direct chat access to Steffi. Ask anything, photograph the bowl, send a label — you get real answers from a canine nutritionist, not a chatbot. Video lessons are one option; the mentorship is the difference.",
    },
    {
      title: "Aussie pantry, Aussie brands",
      body:
        "Ingredient guides, brand notes, and seasonal tips all assume an Australian household. No US-only kibble brands, no celsius/fahrenheit confusion, no overseas vet advice.",
    },
  ],
};

export const successTiers = [
  {
    slug: "base",
    name: "Base",
    eyebrow: "Self-paced learning",
    summary:
      "The full nutrition curriculum and the four-pattern framework. Work through it on your own and start building your dog's bowl from first principles.",
    priceAnchor: "$99 AUD",
    price: "$84 AUD",
    discount: "Save 15%",
    tone: "stone" as const,
    badge: null as string | null,
    includes: [
      "Full 12-module nutrition curriculum (video + written)",
      "The four-pattern eater-type framework",
      "Aussie pantry & ingredient guides",
      "60-day money-back guarantee",
    ],
    excludes: [
      "1:1 chat mentorship with Steffi",
      "Plan reviews — get your draft checked",
      "Private community access",
    ],
    cta: { label: "Start with Base →", href: "/quiz" },
  },
  {
    slug: "optimal",
    name: "Optimal",
    eyebrow: "With chat mentorship",
    summary:
      "Everything in Base, plus 1:1 mentorship in a private chat with Steffi — by the hand, every step. This is our flagship.",
    priceAnchor: "$249 AUD",
    price: "$211 AUD",
    discount: "Save 15%",
    tone: "forest" as const,
    badge: "Most chosen",
    includes: [
      "Everything in Base",
      "1:1 private chat mentorship with Steffi (2 business-day replies)",
      "Plan reviews — send your draft, get notes back",
      "Private community of Aussie dog parents",
      "Aussie ingredient sourcing guide",
      "Lifetime updates to the curriculum",
    ],
    excludes: [
      "Priority next-business-day chat replies",
      "Label-reading workshop",
    ],
    cta: { label: "Choose Optimal →", href: "/quiz" },
  },
  {
    slug: "premium",
    name: "Premium",
    eyebrow: "Priority chat mentorship",
    summary:
      "Everything in Optimal, plus priority next-business-day chat replies and the full reference library. For owners who want the deepest support and the fastest answers.",
    priceAnchor: "$549 AUD",
    price: "$466 AUD",
    discount: "Save 15%",
    tone: "coral" as const,
    badge: "Most in-depth",
    includes: [
      "Everything in Optimal",
      "Priority 1:1 chat — next business day reply",
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
  "Every tier includes the 60-day money-back guarantee. Prices in Australian dollars, GST inclusive. Cancel anytime — what you learn is yours to keep. Edemic Pets is an educational nutrition program — not a veterinary service. For medical concerns, please see a registered Australian veterinarian.";
