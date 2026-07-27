import Link from "next/link";
import type { LinkProps } from "next/link";
import { Stack } from "@/components/layout/stack";
import { MediaFrame } from "@/components/ui/media-frame";

type ProjectCardProps = {
  className?: string;
  client: string;
  href: LinkProps["href"];
  index: number;
  industry: string;
  services: string;
  statement: string;
  title: string;
};

const mediaPatterns = [
  "before:absolute before:inset-y-6 before:left-8 before:w-px before:bg-[var(--color-brand-primary)] before:content-[''] after:absolute after:bottom-8 after:left-14 after:h-20 after:w-28 after:border after:border-[var(--color-border-default)] after:content-['']",
  "before:absolute before:left-8 before:right-8 before:top-10 before:h-px before:bg-[var(--color-brand-primary)] before:content-[''] after:absolute after:bottom-8 after:right-8 after:h-24 after:w-20 after:border-l after:border-t after:border-[var(--color-border-default)] after:content-['']",
  "before:absolute before:bottom-8 before:left-8 before:right-8 before:h-px before:bg-[var(--color-brand-primary)] before:content-[''] after:absolute after:inset-y-8 after:right-12 after:w-px after:bg-[var(--color-border-default)] after:content-['']",
] as const;

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatProjectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function getCaseStudyLabel(href: LinkProps["href"]) {
  if (typeof href === "string" && href.startsWith("/vi/")) {
    return "Xem case study";
  }

  return "View Case Study";
}

export function ProjectCard({
  className,
  client,
  href,
  index,
  industry,
  services,
  statement,
  title,
}: Readonly<ProjectCardProps>) {
  const caseStudyLabel = getCaseStudyLabel(href);
  const projectNumber = formatProjectNumber(index);
  const pattern = mediaPatterns[index % mediaPatterns.length];

  return (
    <Link
      aria-label={`${caseStudyLabel}: ${title}`}
      className={cn(
        "group block rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]",
        className,
      )}
      href={href}
    >
      <article className="grid h-full gap-5 p-3 sm:p-4">
        <MediaFrame aspectRatio={index === 0 ? "widescreen" : "landscape"}>
          {/* Temporary CSS-only media placeholder until real project media and CMS assets exist. */}
          <div
            aria-hidden="true"
            className={cn(
              "relative h-full w-full bg-[var(--color-bg-page)]",
              pattern,
            )}
          >
            <div className="absolute inset-5 border border-[var(--color-border-default)]" />
            <div className="absolute bottom-5 right-5 h-10 w-10 border border-[var(--color-brand-primary)]" />
          </div>
        </MediaFrame>

        <Stack className="p-1 sm:p-2" gap="md">
          <div className="flex items-start justify-between gap-4">
            <span className="text-sm font-medium text-[var(--color-brand-primary)]">
              {projectNumber}
            </span>
            <span className="text-right text-xs font-medium uppercase tracking-normal text-[var(--color-text-secondary)]">
              {industry}
            </span>
          </div>

          <Stack gap="xs">
            <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
              {title}
            </h3>
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              {client}
            </p>
          </Stack>

          <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
            {statement}
          </p>

          <div className="border-t border-[var(--color-border-default)] pt-4">
            <p className="text-xs font-medium uppercase tracking-normal text-[var(--color-text-secondary)]">
              {services}
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--color-text-primary)] underline decoration-[var(--color-brand-primary)] decoration-2 underline-offset-4">
              {caseStudyLabel}
            </p>
          </div>
        </Stack>
      </article>
    </Link>
  );
}
