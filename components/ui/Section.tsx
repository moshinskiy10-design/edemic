import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
  tone = "cream",
  size = "md",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "cream-200" | "forest";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    cream: "bg-cream text-offblack",
    "cream-200": "bg-cream-200 text-offblack",
    forest: "bg-forest text-cream",
  } as const;

  const sizes = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  } as const;

  return (
    <section
      id={id}
      className={cn("relative isolate", tones[tone], sizes[size], className)}
    >
      <div className="wrap relative">{children}</div>
    </section>
  );
}
