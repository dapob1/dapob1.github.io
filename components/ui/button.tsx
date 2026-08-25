import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "inverted" | "outlined";
  asChild?: boolean;
};

export function Button({
  className,
  variant = "primary",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-200",
        "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-primary text-tertiary hover:bg-primary-400 active:bg-primary-600",
        variant === "secondary" &&
          "bg-secondary text-neutral-900 hover:bg-secondary-400 active:bg-secondary-600",
        variant === "inverted" &&
          "bg-tertiary text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200",
        variant === "outlined" &&
          "border border-tertiary/30 bg-transparent text-tertiary hover:border-secondary hover:text-secondary",
        className,
      )}
      {...props}
    />
  );
}

export function IconButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-tertiary/20 bg-neutral-800 text-tertiary transition-colors hover:border-primary hover:text-primary",
        className,
      )}
      {...props}
    />
  );
}

export function LabelChip({
  children,
  dotClassName = "bg-primary",
  className,
}: {
  children: ReactNode;
  dotClassName?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-tertiary/15 bg-neutral-800/80 px-3 py-1 text-xs font-medium text-tertiary/80",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotClassName)} aria-hidden />
      {children}
    </span>
  );
}
