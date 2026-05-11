"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeEmph } from "@/lib/motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-3 text-center font-display text-h1 font-bold text-balance text-forest">
            Sensible questions, plain answers.
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-forest/10 border-y border-forest/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={cn(
                    "flex w-full items-center justify-between gap-6 py-5 text-left",
                    "transition-colors hover:text-forest",
                  )}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold text-offblack md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "shrink-0 rounded-pill border border-forest/30 px-2 py-1 text-sm text-forest transition-transform",
                      isOpen ? "rotate-45" : "rotate-0",
                    )}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: easeEmph }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-pretty leading-relaxed text-offblack/80">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
