import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { courseProgram } from "@/data/program";
import { quizHref } from "@/data/site";

export function CourseProgram() {
  return (
    <Section id="program" tone="cream-200">
      <div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">{courseProgram.eyebrow}</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-balance text-forest">
            {courseProgram.heading}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-offblack/80">
            {courseProgram.subhead}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {courseProgram.stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-lg border border-forest/10 bg-cream p-5 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold leading-none text-coral md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {courseProgram.highlights.map((h, i) => (
          <Reveal key={h.title} delay={0.05 + i * 0.05} as="article">
            <div className="h-full rounded-lg border border-forest/15 bg-cream p-7 transition-all duration-300 ease-emph hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
              <h3 className="font-display text-h3 font-semibold text-forest">
                {h.title}
              </h3>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-offblack/80">
                {h.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25}>
        <div className="mt-12 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-base text-offblack/70">
            Every tier is built around the same curriculum and 1:1 chat
            mentorship with Steffi. The quiz tells you which tier fits.
          </p>
          <LinkButton href={quizHref} size="lg">
            Find Your Dog&rsquo;s Type →
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
