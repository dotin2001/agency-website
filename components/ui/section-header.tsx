import type { HTMLAttributes, ReactNode } from "react";
import { ViewportReveal } from "@/components/motion/viewport-reveal";

type SectionHeaderAlign = "start" | "center";
type SectionHeaderLevel = "h1" | "h2" | "h3";

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  action?: ReactNode;
  align?: SectionHeaderAlign;
  description?: ReactNode;
  eyebrow?: ReactNode;
  headingLevel?: SectionHeaderLevel;
  title: ReactNode;
};

const alignClasses: Record<SectionHeaderAlign, string> = {
  start: "items-start text-left",
  center: "items-center text-center",
};

const titleClasses: Record<SectionHeaderLevel, string> = {
  h1: "text-4xl font-semibold tracking-normal sm:text-5xl",
  h2: "text-3xl font-semibold tracking-normal sm:text-4xl",
  h3: "text-2xl font-semibold tracking-normal sm:text-3xl",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionHeader({
  action,
  align = "start",
  className,
  description,
  eyebrow,
  headingLevel,
  title,
  ...props
}: Readonly<SectionHeaderProps>) {
  const Heading = headingLevel ?? "h2";

  return (
    <ViewportReveal
      className={cn("flex flex-col gap-4", alignClasses[align], className)}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-medium text-[var(--color-text-secondary)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "max-w-3xl text-[var(--color-text-primary)]",
          titleClasses[Heading],
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
          {description}
        </p>
      ) : null}
      {action ? <div>{action}</div> : null}
    </ViewportReveal>
  );
}
