import type { HTMLAttributes, ReactNode } from "react";

type ClusterGap = "xs" | "sm" | "md" | "lg" | "xl";
type ClusterAlign = "start" | "center" | "end";
type ClusterJustify = "start" | "center" | "between" | "end";

type ClusterProps = HTMLAttributes<HTMLDivElement> & {
  align?: ClusterAlign;
  children: ReactNode;
  gap?: ClusterGap;
  justify?: ClusterJustify;
};

const gapClasses: Record<ClusterGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-8",
  xl: "gap-12",
};

const alignClasses: Record<ClusterAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const justifyClasses: Record<ClusterJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
  end: "justify-end",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Cluster({
  align = "center",
  children,
  className,
  gap = "md",
  justify = "start",
  ...props
}: Readonly<ClusterProps>) {
  return (
    <div
      className={cn(
        "flex flex-wrap",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
