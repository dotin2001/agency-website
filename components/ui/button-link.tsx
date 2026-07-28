import Link from "next/link";
import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "text";
type ButtonLinkSize = "medium" | "large";

type ButtonLinkProps = {
  "aria-label"?: string;
  children: ReactNode;
  className?: string;
  href: LinkProps["href"];
  size?: ButtonLinkSize;
  variant?: ButtonLinkVariant;
};

const baseClasses =
  "motion-interactive inline-flex min-h-11 items-center justify-center rounded-md font-medium tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]";

const sizeClasses: Record<ButtonLinkSize, string> = {
  medium: "px-4 py-2 text-sm",
  large: "px-5 py-3 text-base",
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "border border-[var(--color-button-primary-bg,var(--color-brand-primary))] bg-[var(--color-button-primary-bg,var(--color-brand-primary))] text-[var(--color-button-primary-text,rgb(10,16,26))] hover:border-[var(--color-text-primary)] motion-safe:hover:-translate-y-px",
  secondary:
    "border border-[var(--color-border-default)] bg-[var(--color-button-secondary-bg,var(--color-bg-page))] text-[var(--color-button-secondary-text,var(--color-text-primary))] hover:border-[var(--color-brand-primary)] motion-safe:hover:-translate-y-px",
  text: "rounded-none px-0 text-[var(--color-text-primary)] underline decoration-[var(--color-brand-primary)] decoration-2 underline-offset-4 hover:text-[var(--color-text-secondary)]",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ButtonLink({
  "aria-label": ariaLabel,
  children,
  className,
  href,
  size = "medium",
  variant = "primary",
}: Readonly<ButtonLinkProps>) {
  return (
    <Link
      aria-label={ariaLabel}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
