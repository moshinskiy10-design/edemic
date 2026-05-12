import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const inside = [
  {
    title: "A 60-second segmentation quiz",
    body: "Seven questions designed by a canine nutritionist — not a marketer. You get a type, not a tier.",
  },
  {
    title: "A free 5-day email micro-course",
    body: "Daily emails tuned to your dog's type. No upsell — these arrive whether you buy the program or not.",
  },
  {
    title: "A personalised written plan",
    body: "After the quiz, you receive a written feeding plan built for your dog's eater type — clear steps, not a generic checklist.",
  },
  {
    title: "Twelve focused video modules",
    body: "Bite-sized lessons (5 hours total, no filler) covering anxious, bored, spoiled, and health-sensitive patterns.",
  },
  {
    title: "Vet-first health routing",
    body: "Health-sensitive dogs get a printable vet-conversation worksheet. We always route medical concerns to a registered Australian vet first.",
  },
  {
    title: "Australian context throughout",
    body: "Pantry assumptions, brand names, seasonal notes — all written for Australian households, not US imports.",
  },
];

export function Methodology() {
  return (
    <Section id="inside">
      <Reveal>
        <p className="eyebrow">What&rsquo;s inside</p>
        <h2 className="mt-3 max-w-3xl font-display text-h1 font-bold text-balance text-forest">
          More than a course — a personalised plan, built around your dog.
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {inside.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} as="li">
            <div className="group flex h-full gap-5 rounded-lg border border-forest/10 bg-cream-200/40 p-6 transition-colors hover:border-forest/30">
              <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-forest text-cream">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-full w-full p-2"
                  aria-hidden
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-h3 font-semibold text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-offblack/80">
                  {item.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
