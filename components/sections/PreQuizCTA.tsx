import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { ctaText, quizHref } from "@/data/site";

export function PreQuizCTA() {
  return (
    <Section tone="forest" size="lg">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">
            60 seconds · No credit card
          </p>
          <h2 className="mt-4 font-display text-hero font-bold text-balance text-cream">
            Find your dog&rsquo;s eater type.
          </h2>
          <p className="mt-6 text-pretty text-lg text-cream/85">
            Seven questions. One result. A free 5-day micro-course mailed to you
            — even if you never spend a cent.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <LinkButton href={quizHref} size="lg" variant="coral">
              {ctaText.primary} →
            </LinkButton>
            <p className="text-sm text-cream/70">
              Already booked? Skip to <a href="#faq" className="underline underline-offset-4 hover:text-coral">FAQ</a>.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
