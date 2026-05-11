import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { ctaText, quizHref } from "@/data/site";

const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Program", href: "#program" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-9 z-40 w-full border-b border-forest/10 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1 font-display text-2xl font-bold tracking-tight text-forest">
          edemic
          <span className="text-coral text-base font-semibold tracking-[0.18em]">PETS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest/80">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LinkButton href={quizHref} size="md" className="hidden sm:inline-flex">
          {ctaText.primary}
        </LinkButton>
      </div>
    </header>
  );
}
