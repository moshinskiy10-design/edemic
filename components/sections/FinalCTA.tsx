import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { ctaText, quizHref, site } from "@/data/site";

export function FinalCTA() {
  return (
    <Section size="lg" className="border-t border-forest/10">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">One last nudge</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-balance text-forest">
            You&rsquo;ve scrolled this far. Sixty more seconds gets you a plan.
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-lg text-offblack/80">
            The quiz is the only homework. Everything else — the email
            micro-course, the free 15-minute 1-on-1 call with Steffi, the{" "}
            {site.guaranteeDays}-day guarantee — is on us.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <LinkButton href={quizHref} size="lg">
              {ctaText.start} →
            </LinkButton>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-sm text-stone hover:text-forest"
            >
              Prefer to chat? Call {site.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-forest/10 bg-cream-200/60 p-8">
            <p className="font-display text-h3 font-semibold text-forest">
              Our {site.guaranteeDays}-day guarantee
            </p>
            <p className="mt-3 text-pretty text-base leading-relaxed text-offblack/80">
              Try the program for {site.guaranteeDays} days. If your dog
              isn&rsquo;t eating more consistently, email{" "}
              <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-4">
                {site.email}
              </a>{" "}
              and we&rsquo;ll refund the full amount. No questions, no &ldquo;why are
              you leaving&rdquo; survey.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.14em] text-stone">
              Cancel anytime · No auto-renewal traps
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
