import type { HTMLAttributes, ReactNode } from "react";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: StackGap;
};

const gapClasses: Record<StackGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-8",
  xl: "gap-12",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Stack({
  children,
  className,
  gap = "md",
  ...props
}: Readonly<StackProps>) {
  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}
