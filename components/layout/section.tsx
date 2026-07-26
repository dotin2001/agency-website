import type { ComponentPropsWithoutRef } from "react";

type SectionSpacing = "compact" | "default" | "spacious" | "chapter";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-8 sm:py-10",
  default: "py-12 sm:py-16",
  spacious: "py-16 sm:py-24",
  chapter: "py-20 sm:py-32",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({
  children,
  className,
  spacing = "default",
  ...props
}: Readonly<SectionProps>) {
  return (
    <section className={cn(spacingClasses[spacing], className)} {...props}>
      {children}
    </section>
  );
}
