import Link from "next/link";
import { site } from "@/data/site";

const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Refund", href: "/legal/refund" },
];

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-cream-200/60">
      <div className="wrap py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-flex items-baseline gap-1 font-display text-2xl font-bold tracking-tight text-forest"
            >
              edemic
              <span className="text-coral text-base font-semibold tracking-[0.18em]">
                PETS
              </span>
            </Link>
            <p className="mt-4 max-w-prose text-sm text-stone">
              Australian-owned canine wellness mentorship. Founded in regional
              Victoria, built for Aussie households.
            </p>
          </div>

          <div className="text-sm text-stone">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest/70">
              Contact
            </p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="block font-semibold text-offblack hover:text-forest"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-1">{site.hours}</p>
            <a href={`mailto:${site.email}`} className="mt-2 block hover:text-forest">
              {site.email}
            </a>
            <p className="mt-2">{site.address}</p>
          </div>

          <div className="text-sm text-stone">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest/70">
              Legal
            </p>
            <ul className="space-y-1.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-forest">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-stone/80">
              {site.legalName} · ABN {site.abn}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-stone/80">
              Edemic Pets is an educational mentorship. It is not a substitute
              for veterinary care. Always consult a registered veterinarian for
              medical concerns.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-forest/10 pt-6 text-xs text-stone/70 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <div className="flex gap-4">
            <a href={site.socials.instagram} className="hover:text-forest">Instagram</a>
            <a href={site.socials.facebook} className="hover:text-forest">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
