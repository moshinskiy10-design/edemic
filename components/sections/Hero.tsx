import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { ctaText, quizHref, site } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/*
        Grid choreography:
        - Mobile (single column): title → image → body (in DOM/order).
        - Desktop: title + body stack in the left column, image spans both rows
          on the right via md:row-span-2.
      */}
      <div className="wrap grid grid-cols-1 gap-x-16 gap-y-10 pb-20 pt-10 md:grid-cols-[1.1fr_1fr] md:gap-y-10 md:pb-28 md:pt-20">
        {/* Title block — appears first on mobile, top-left on desktop */}
        <div className="order-1 md:order-1 animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-600">
            Australian canine nutrition guidance
          </p>

          <h1 className="mt-5 font-display text-hero font-bold tracking-tight text-balance text-forest">
            Steffi{" "}
            <span className="italic font-normal text-coral-600">
              &amp; Daisy
            </span>
          </h1>
        </div>

        {/* Image — middle on mobile, right column spanning both rows on desktop */}
        <div className="relative order-2 md:order-2 md:row-span-2 md:self-center animate-fade-in [animation-delay:120ms]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg border border-forest/10 shadow-lg md:max-w-none">
            <Image
              src={withBasePath("/founder/steffi-daisy.png")}
              alt={`${site.founder.fullName} with her Kelpie Daisy at sunset, regional Victoria`}
              fill
              priority
              sizes="(min-width: 768px) 540px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/20" />
          </div>

          <div className="absolute -bottom-5 left-5 rounded-md bg-cream px-4 py-3 text-xs shadow-lg ring-1 ring-forest/10 md:left-5">
            <p className="font-semibold text-forest">
              {site.founder.fullName} &middot; Daisy
            </p>
            <p className="mt-1 text-stone">
              Canine nutritionist &middot; {site.founder.yearsExperience}+
              years
            </p>
            <p className="text-stone">{site.founder.photoCaption}</p>
          </div>

          <div className="absolute -top-3 right-3 rotate-3 rounded-md bg-forest px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream shadow-md md:-right-3">
            🇦🇺 Bendigo, VIC
          </div>
        </div>

        {/* Body block — last on mobile, bottom-left on desktop */}
        <div className="order-3 md:order-3 md:col-start-1 animate-fade-up">
          <div className="max-w-prose space-y-4 text-pretty text-base leading-relaxed text-offblack/85 md:text-lg">
            <p>
              As an Australian canine nutritionist with{" "}
              {site.founder.yearsExperience}+ years in the field,
              Steffi&rsquo;s mission is simple: hand you a personalised written
              plan — not a generic feeding chart — and a four-pattern framework
              that pinpoints why your dog won&rsquo;t eat.
            </p>
            <p>
              You get a tailored feeding plan, the four-pattern picky-eater
              framework, the free 60-second quiz, and a {site.guaranteeDays}-day
              money-back promise. Daisy, her Kelpie, is the original test case.
            </p>
          </div>

          <div className="mt-7 rounded-lg border border-coral/30 bg-coral/10 px-5 py-4 md:px-6 md:py-5">
            <p className="font-display text-lg font-bold text-forest text-balance md:text-h3">
              Over 1,000 Aussie dog parents have found their dog&rsquo;s eater
              type using this free quiz —{" "}
              <span className="text-coral-600">and you can be next.</span>
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <LinkButton
              href={quizHref}
              size="lg"
              className="w-full whitespace-nowrap sm:w-auto"
            >
              {ctaText.primary} →
            </LinkButton>
            <p className="text-sm text-stone">
              60 seconds · No credit card · Why won&rsquo;t your dog eat?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
