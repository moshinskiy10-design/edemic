import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const creds = [
  { name: "Pet Professional Guild Australia", note: "Force-free practice" },
  { name: "Delta Institute graduate", note: "Behaviour fundamentals" },
  { name: "AU Privacy Act 1988", note: "Compliant data handling" },
  { name: "Vet-aligned protocols", note: "Health-sensitive routing" },
];

export function Credentials() {
  return (
    <Section size="sm" tone="cream-200">
      <Reveal delay={0.1}>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {creds.map((c) => (
            <li
              key={c.name}
              className="rounded-md border border-forest/10 bg-cream px-5 py-4 text-center"
            >
              <p className="font-semibold text-forest">{c.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone">
                {c.note}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-stone">
          Edemic Pets is an educational mentorship, not a veterinary service.
          See a registered vet for medical concerns.
        </p>
      </Reveal>
    </Section>
  );
}
