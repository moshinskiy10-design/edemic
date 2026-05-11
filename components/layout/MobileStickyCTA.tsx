"use client";

import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/Button";
import { ctaText, quizHref } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileStickyCTA() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-cream/95 px-4 py-3 backdrop-blur",
        "transition-transform duration-300 ease-emph md:hidden",
        shown ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!shown}
    >
      <LinkButton href={quizHref} size="md" className="w-full">
        {ctaText.start}
      </LinkButton>
    </div>
  );
}
