import type { HTMLAttributes, ReactNode } from "react";

type SplitVariant = "balanced" | "content-media" | "media-content";
type SplitGap = "xs" | "sm" | "md" | "lg" | "xl";

type SplitProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: SplitGap;
  variant?: SplitVariant;
};

const gapClasses: Record<SplitGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-10",
  xl: "gap-16",
};

const variantClasses: Record<SplitVariant, string> = {
  balanced: "md:grid-cols-2",
  "content-media": "md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
  "media-content": "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Split({
  children,
  className,
  gap = "lg",
  variant = "balanced",
  ...props
}: Readonly<SplitProps>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-start",
        gapClasses[gap],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
