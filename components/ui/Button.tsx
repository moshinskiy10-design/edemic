import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "coral";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-700 shadow-md hover:shadow-lg",
  coral:
    "bg-coral text-offblack hover:bg-coral-600 shadow-md hover:shadow-lg",
  ghost:
    "bg-transparent text-forest border border-forest/30 hover:border-forest hover:bg-forest/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type LinkButtonProps = CommonProps & {
  href: string;
} & Omit<
    ComponentPropsWithoutRef<"a">,
    "href" | "className" | "children"
  >;

function base(variant: Variant, size: Size, extra?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-wide uppercase",
    "transition-all duration-200 ease-emph",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    "active:translate-y-px",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-md disabled:active:translate-y-0",
    variants[variant],
    sizes[size],
    extra,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={base(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={base(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
