export type EaterType = {
  slug: "anxious" | "bored" | "spoiled" | "health-sensitive";
  number: string;
  name: string;
  oneLiner: string;
  body: string;
  cue: string;
  tone: "forest" | "coral" | "stone" | "warning";
};

export const eaterTypes: EaterType[] = [
  {
    slug: "anxious",
    number: "01",
    name: "The Anxious Eater",
    oneLiner: "Stops eating when life changes — a new home, a new dog, even a new bowl.",
    body:
      "Stress runs straight to the gut. The fix isn't more food, it's a calmer routine, a quieter spot, and a predictable rhythm.",
    cue: "Skips meals after moves, storms, or visitors.",
    tone: "forest",
  },
  {
    slug: "bored",
    number: "02",
    name: "The Bored Eater",
    oneLiner: "Kibble fatigue. Same bowl, same dust, same shrug.",
    body:
      "Rotation feeding, a topper, and a slow-feed puzzle change the picture in days — not because the food was wrong, but because the meal was a non-event.",
    cue: "Eats anything new for two days then quits.",
    tone: "coral",
  },
  {
    slug: "spoiled",
    number: "03",
    name: "The Spoiled Eater",
    oneLiner: "Has trained you. Waits for the good stuff.",
    body:
      "The fifteen-minute rule, no table scraps, scheduled meals. The pattern resets faster than you'd think, but only if everyone in the house is on the same page.",
    cue: "Refuses dinner, then begs at human dinner.",
    tone: "stone",
  },
  {
    slug: "health-sensitive",
    number: "04",
    name: "The Health-Sensitive Eater",
    oneLiner: "Real symptoms behind the bowl — itch, gut, sluggish coat.",
    body:
      "Some patterns point to vet-side issues. This program runs alongside your vet, not instead of one. We simplify ingredients and track what changes.",
    cue: "Vomiting, soft stools, hot spots, or weight drop.",
    tone: "warning",
  },
];
