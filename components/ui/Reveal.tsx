"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  delay?: number; // seconds
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "li" | "article";
};

// IntersectionObserver-driven CSS reveal.
// Elements above the fold at mount render visible instantly (no animation flash).
// Elements below the fold animate in once they enter the viewport.
export function Reveal({ delay = 0, className, children, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      "data-shown": shown ? "true" : "false",
      className: cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:duration-0",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className,
      ),
      style: { transitionDelay: shown && delay > 0 ? `${delay * 1000}ms` : "0ms" },
    },
    children,
  );
}
