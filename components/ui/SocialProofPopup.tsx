"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { socialProofEvents } from "@/data/social-proof";
import { cn } from "@/lib/cn";

// Calmer cadence: 6s visible, 24s gap → one popup every 30 seconds.
const INITIAL_DELAY_MS = 8000;
const VISIBLE_MS = 6000;
const GAP_MS = 24000;
const DISMISS_KEY = "edemic:sp:dismissed";

export function SocialProofPopup() {
  const [index, setIndex] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
      return;
    }

    // Preload all map tiles so they're cached when each popup appears.
    for (const ev of socialProofEvents) {
      const img = new window.Image();
      img.src = ev.mapTile;
    }

    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let timer: ReturnType<typeof setTimeout>;

    const showAt = (i: number) => {
      setIndex(i);
      setVisible(true);
      timer = setTimeout(
        () => {
          setVisible(false);
          timer = setTimeout(
            () => showAt((i + 1) % socialProofEvents.length),
            reducedMotion ? 0 : GAP_MS,
          );
        },
        reducedMotion ? VISIBLE_MS + GAP_MS : VISIBLE_MS,
      );
    };

    const start = setTimeout(() => showAt(0), INITIAL_DELAY_MS);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, []);

  if (dismissed || index < 0) return null;
  const ev = socialProofEvents[index];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed left-4 bottom-4 z-30 hidden w-[360px] md:block",
        "transition-all duration-500 ease-emph",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0 pointer-events-none",
      )}
    >
      <div className="flex items-stretch gap-3 overflow-hidden rounded-lg border border-forest/10 bg-white shadow-lg ring-1 ring-black/[0.02]">
        <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden bg-cream-200">
          <Image
            key={ev.mapTile}
            src={ev.mapTile}
            alt={`Map of ${ev.city}`}
            fill
            sizes="88px"
            className="object-cover"
            unoptimized
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[14px] drop-shadow"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-warning">
              <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
              <circle cx="12" cy="9" r="2.2" className="fill-white" />
            </svg>
          </span>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col justify-center pr-9 leading-snug">
          <p className="text-[13px]">
            <span className="font-semibold text-[#2BA0AE]">{ev.name}</span>{" "}
            <span className="text-stone">({ev.city})</span>
          </p>
          <p className="mt-0.5 text-[13px] font-medium text-offblack">
            {ev.action}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[11px] text-stone">
            <span>{ev.timeAgo}</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 fill-[#2BA0AE]"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm3.6 5.9-4.2 4.7a.8.8 0 0 1-1.2 0L4 8.2a.8.8 0 1 1 1.2-1.1l1.6 1.8 3.6-4a.8.8 0 1 1 1.2 1Z" />
              </svg>
              <span className="font-semibold text-stone">
                Verified by{" "}
                <span className="text-[#2BA0AE]">ProveSource</span>
              </span>
            </span>
          </p>

          <button
            type="button"
            onClick={() => {
              setDismissed(true);
              try {
                sessionStorage.setItem(DISMISS_KEY, "1");
              } catch {
                // sessionStorage can throw in some privacy contexts — silent.
              }
            }}
            aria-label="Dismiss social proof notifications"
            className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full text-stone/60 hover:bg-forest/5 hover:text-forest"
          >
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M3 3l10 10M13 3 3 13" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
