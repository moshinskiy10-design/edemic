import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/basePath";

type Review = {
  src: string;
  width: number;
  height: number;
  alt: string;
  handle: string;
  badge?: string;
};

// Real Instagram comments. review1 and review2 stay at the top — those are the
// most substantial picky-eater testimonials.
const reviews: Review[] = [
  {
    src: "/reviews/review1.png",
    width: 2912,
    height: 1470,
    alt: "Instagram comment from chunk_thegds about a picky-eater German Shepherd",
    handle: "@chunk_thegds",
    badge: "Picky eater · GSD",
  },
  {
    src: "/reviews/review2.png",
    width: 1952,
    height: 2176,
    alt: "Instagram comment from danifisette about a picky dog with food anxiety",
    handle: "@danifisette",
    badge: "Food anxiety · Featured review",
  },
  {
    src: "/reviews/review3.jpeg",
    width: 1080,
    height: 432,
    alt: "Instagram comment from eb0212 about post-surgery enrichment games",
    handle: "@eb0212",
    badge: "Post-surgery enrichment",
  },
  {
    src: "/reviews/review4.jpeg",
    width: 1080,
    height: 620,
    alt: "Instagram comment from furkannberber about a high-drive breed",
    handle: "@furkannberber",
    badge: "High-drive breed",
  },
  {
    src: "/reviews/review5.jpeg",
    width: 1080,
    height: 598,
    alt: "Instagram comment from essjay203 about shaping-based training games",
    handle: "@essjay203",
    badge: "Shaping over luring",
  },
];

export function TransformationWall() {
  return (
    <Section id="reviews" tone="cream-200">
      <div className="md:flex md:items-end md:justify-between md:gap-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">On Instagram · unedited</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-h1 font-bold text-balance text-forest">
              Real owners. Raw screenshots.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-offblack/80">
              These are unedited Instagram comments from real dog parents.
              We screenshot them, we don&rsquo;t edit them, we don&rsquo;t
              cherry-pick the wording.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex items-center gap-3 rounded-pill bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest shadow-sm ring-1 ring-forest/10 md:mt-0">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-coral" />
            600+ reactions this quarter
          </div>
        </Reveal>
      </div>

      {/*
        CSS columns masonry — each card chooses its own height, columns fill
        bottom-up. break-inside-avoid keeps cards intact at column breaks.
      */}
      <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3 [column-fill:balance]">
        {reviews.map((review, i) => (
          <Reveal key={review.src} delay={Math.min(i * 0.08, 0.32)} className="mb-6 block break-inside-avoid">
            <figure className="overflow-hidden rounded-lg border border-forest/10 bg-cream shadow-sm">
              <div className="flex items-center justify-between gap-3 border-b border-forest/10 bg-cream-200/50 px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                  <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 1.8.25 2.22.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.05.42 2.22.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.17-.25 1.8-.42 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.05.36-2.22.42-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.06-1.8-.25-2.22-.42a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.17-.42-.36-1.05-.42-2.22-.06-1.25-.07-1.65-.07-4.85s0-3.6.07-4.85c.06-1.17.25-1.8.42-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.05-.36 2.22-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.78c-3.13 0-3.5 0-4.74.07-1.05.05-1.62.22-2 .37-.5.2-.86.43-1.24.81-.38.38-.62.74-.81 1.24-.15.38-.33.95-.38 2-.06 1.24-.07 1.61-.07 4.74s0 3.5.07 4.74c.05 1.05.23 1.62.38 2 .19.5.43.86.81 1.24.38.38.74.62 1.24.81.38.15.95.33 2 .38 1.24.06 1.61.07 4.74.07s3.5 0 4.74-.07c1.05-.05 1.62-.23 2-.38.5-.19.86-.43 1.24-.81.38-.38.62-.74.81-1.24.15-.38.33-.95.38-2 .06-1.24.07-1.61.07-4.74s0-3.5-.07-4.74c-.05-1.05-.23-1.62-.38-2a3.34 3.34 0 0 0-.81-1.24 3.34 3.34 0 0 0-1.24-.81c-.38-.15-.95-.33-2-.38C15.5 4 15.13 4 12 4Zm0 3.04a4.96 4.96 0 1 1 0 9.92 4.96 4.96 0 0 1 0-9.92Zm0 1.78a3.18 3.18 0 1 0 0 6.36 3.18 3.18 0 0 0 0-6.36Zm5.16-2.94a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z" />
                  </svg>
                  Instagram
                </div>
                <span className="truncate text-xs text-stone">{review.handle}</span>
              </div>

              <div className="relative w-full bg-white">
                <Image
                  src={withBasePath(review.src)}
                  alt={review.alt}
                  width={review.width}
                  height={review.height}
                  className="block h-auto w-full"
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              {review.badge && (
                <figcaption className="border-t border-forest/10 px-4 py-3 text-xs uppercase tracking-[0.14em] text-stone">
                  {review.badge}
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-center text-sm text-stone">
          Screenshots are real. Anyone who wants a public link to the comment
          thread can email <a href="mailto:hello@edemic.com.au" className="text-forest underline underline-offset-4">hello@edemic.com.au</a>.
        </p>
      </Reveal>
    </Section>
  );
}
