import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
  tone = "forest",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "forest" | "coral" | "stone";
}) {
  const tones = {
    forest: "bg-forest/10 text-forest border-forest/20",
    coral: "bg-coral/20 text-offblack border-coral/40",
    stone: "bg-stone/10 text-stone border-stone/20",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
