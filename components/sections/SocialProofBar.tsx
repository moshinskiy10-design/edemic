import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const items = [
  { stat: "1,000+", label: "Aussie dog parents helped" },
  { stat: "4", label: "eater types · proven framework" },
  { stat: "4.9★", label: "average program rating" },
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
        <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:gap-x-2 md:gap-y-0 md:divide-x md:divide-cream/20">
          {items.map((item, idx) => (
            <li
              key={item.label}
              className={cn(
                "text-center md:px-3",
                idx === items.length - 1 && "col-span-2 sm:col-span-1",
              )}
            >
              <p className="font-display text-2xl font-bold leading-none text-coral whitespace-nowrap sm:text-3xl md:text-[1.85rem] lg:text-[2.25rem] xl:text-4xl">
                {item.stat}
              </p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cream/90 md:text-[0.7rem] lg:text-xs">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
