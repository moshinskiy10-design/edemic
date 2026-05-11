import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { ctaText, quizHref, site } from "@/data/site";

export function FounderIntro() {
  return (
    <Section id="founder">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-forest/10">
              <Image
                src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=900&q=80"
                alt={`${site.founder.fullName}'s dog Daisy, photographed in regional Victoria`}
                fill
                sizes="(min-width: 768px) 450px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-2 rounded-md bg-cream px-4 py-3 text-xs shadow-lg ring-1 ring-forest/10 md:right-auto md:-left-6">
              <p className="font-semibold text-forest">{site.founder.fullName}</p>
              <p className="text-stone">{site.founder.photoCaption}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Meet your founder</p>
            <h2 className="mt-4 font-display text-h1 font-bold text-balance text-forest">
              {site.founder.firstName}, a mentor who&rsquo;s lived the picky-eater years.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-prose text-pretty text-lg leading-relaxed text-offblack/80">
              {site.founder.bio}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill tone="forest">{site.founder.yearsExperience}+ years mentoring</Pill>
              <Pill tone="coral">Pet Professional Guild Australia</Pill>
              <Pill tone="stone">Regional VIC based</Pill>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <LinkButton href={quizHref} size="lg">
                {ctaText.long} →
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
