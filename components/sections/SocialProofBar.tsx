import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  { stat: "1,000+", label: "Aussie dog parents helped" },
  { stat: "4", label: "eater types · proven framework" },
  { stat: "4.9★", label: "average mentor rating" },
  { stat: "PPGA", label: "Pet Professional Guild member" },
  { stat: "60-day", label: "money-back guarantee" },
];

export function SocialProofBar() {
  return (
    <Section
      size="md"
      tone="forest"
      className="border-y-2 border-coral/40 shadow-lg"
    >
      <Reveal>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-2 md:divide-x md:divide-cream/20">
          {items.map((item) => (
            <li key={item.label} className="text-center md:px-3">
              <p className="font-display text-4xl font-bold leading-none text-coral whitespace-nowrap md:text-[2.75rem] lg:text-5xl xl:text-6xl">
                {item.stat}
              </p>
              <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream md:text-xs lg:text-sm">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
