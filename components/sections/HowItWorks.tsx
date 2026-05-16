import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Take the quiz",
    body: "Seven multiple-choice questions. One tap per answer. 60 seconds, no email until the end.",
  },
  {
    n: "02",
    title: "Get your nutrition guides",
    body: "We match your dog to one of four eater types and email you free nutrition guides for that pattern — no upsell, no card needed.",
  },
  {
    n: "03",
    title: "Become the expert",
    body: "Inside the program, Steffi mentors you by the hand in a private chat. You learn the principles, build the bowl yourself, and most owners see the change inside three weeks.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="cream-200">
      <Reveal>
        <p className="eyebrow text-center">How it works</p>
        <h2 className="mt-3 text-center font-display text-h1 font-bold text-balance text-forest">
          Three steps. About a week to see it shift.
        </h2>
      </Reveal>

      <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.08} as="li">
            <div className="flex h-full flex-col rounded-lg border border-forest/10 bg-cream p-7 shadow-sm">
              <span className="font-display text-5xl font-bold text-coral/80">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-h3 font-semibold text-forest">
                {step.title}
              </h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-offblack/80">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
