"use client";

import { cn } from "@/lib/cn";

export type DogDetails = {
  name: string;
  ageYears: string;
  ageMonths: string;
  breed: string;
  weightKg: string;
  notes: string;
};

export function emptyDogDetails(): DogDetails {
  return { name: "", ageYears: "", ageMonths: "", breed: "", weightKg: "", notes: "" };
}

export function isDogDetailsValid(d: DogDetails): boolean {
  // Required: name, ageYears (0+ allowed for puppies). Everything else optional.
  if (!d.name.trim()) return false;
  const y = Number(d.ageYears);
  if (Number.isNaN(y) || y < 0 || y > 25) return false;
  if (d.ageMonths) {
    const m = Number(d.ageMonths);
    if (Number.isNaN(m) || m < 0 || m > 11) return false;
  }
  if (d.weightKg) {
    const w = Number(d.weightKg);
    if (Number.isNaN(w) || w < 0 || w > 120) return false;
  }
  return true;
}

const inputCls = cn(
  "h-12 w-full rounded-lg border-2 bg-cream px-4 text-base text-offblack shadow-sm",
  "transition-colors placeholder:text-stone/60",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40",
  "border-forest/20 focus:border-forest",
);

export function DogDetailsStep({
  details,
  onChange,
}: {
  details: DogDetails;
  onChange: (next: DogDetails) => void;
}) {
  function patch<K extends keyof DogDetails>(k: K, v: DogDetails[K]) {
    onChange({ ...details, [k]: v });
  }

  return (
    <div>
      <p className="eyebrow">Last bit · Personalise your guides</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-balance text-forest md:text-4xl">
        Tell us about your dog.
      </h1>
      <p className="mt-3 text-base leading-relaxed text-offblack/80">
        These details let us tune the nutrition guides we email you — feeding
        principles, treat caps, and the ingredient guide all reference your
        dog&rsquo;s age, breed, and weight.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label htmlFor="dog-name" className="mb-1 block text-sm font-semibold text-forest">
            Dog&rsquo;s name <span className="text-coral-600">*</span>
          </label>
          <input
            id="dog-name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="e.g. Daisy"
            value={details.name}
            onChange={(e) => patch("name", e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <p className="mb-1 block text-sm font-semibold text-forest">
            Age <span className="text-coral-600">*</span>
          </p>
          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="dog-years" className="sr-only">
                Years
              </label>
              <div className="relative">
                <input
                  id="dog-years"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={25}
                  step={1}
                  placeholder="4"
                  value={details.ageYears}
                  onChange={(e) => patch("ageYears", e.target.value)}
                  className={cn(inputCls, "pr-16")}
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-stone">
                  years
                </span>
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="dog-months" className="sr-only">
                Months
              </label>
              <div className="relative">
                <input
                  id="dog-months"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={11}
                  step={1}
                  placeholder="0"
                  value={details.ageMonths}
                  onChange={(e) => patch("ageMonths", e.target.value)}
                  className={cn(inputCls, "pr-20")}
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-stone">
                  months
                </span>
              </div>
            </div>
          </div>
          <p className="mt-1 text-xs text-stone">
            For puppies, leave years at 0 and use months.
          </p>
        </div>

        <div>
          <label htmlFor="dog-breed" className="mb-1 block text-sm font-semibold text-forest">
            Breed (or mix)
          </label>
          <input
            id="dog-breed"
            type="text"
            autoComplete="off"
            placeholder="e.g. Kelpie, Cavoodle, Staffy x"
            value={details.breed}
            onChange={(e) => patch("breed", e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="dog-weight" className="mb-1 block text-sm font-semibold text-forest">
            Weight
          </label>
          <div className="relative">
            <input
              id="dog-weight"
              type="number"
              inputMode="decimal"
              min={0}
              max={120}
              step={0.1}
              placeholder="18.5"
              value={details.weightKg}
              onChange={(e) => patch("weightKg", e.target.value)}
              className={cn(inputCls, "pr-12")}
            />
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-stone">
              kg
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="dog-notes" className="mb-1 block text-sm font-semibold text-forest">
            Anything else we should know? <span className="text-stone font-normal">(optional)</span>
          </label>
          <textarea
            id="dog-notes"
            rows={3}
            placeholder="e.g. recently moved house, new puppy in the family, vet flagged a sensitive stomach"
            value={details.notes}
            onChange={(e) => patch("notes", e.target.value)}
            className={cn(
              "w-full rounded-lg border-2 bg-cream px-4 py-3 text-base text-offblack shadow-sm",
              "transition-colors placeholder:text-stone/60",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40",
              "border-forest/20 focus:border-forest",
              "resize-none",
            )}
          />
        </div>
      </div>
    </div>
  );
}
