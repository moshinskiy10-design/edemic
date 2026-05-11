import { site } from "@/data/site";

export function TrustBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-forest text-cream/95">
      <div className="wrap flex h-9 items-center justify-between text-[12px] tracking-wide">
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="font-semibold transition-colors hover:text-coral"
        >
          <span aria-hidden className="mr-1.5">📞</span>
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">{site.phone}</span>
        </a>
        <span className="hidden md:inline text-cream/70">
          {site.hours} · {site.voicemail}
        </span>
        <span className="font-semibold">
          <span aria-hidden className="mr-1">🇦🇺</span>
          Proudly Australian
        </span>
      </div>
    </div>
  );
}
