import Link from "next/link";
import type { LinkProps } from "next/link";
import { ViewportReveal } from "@/components/motion/viewport-reveal";
import { Stack } from "@/components/layout/stack";
import { MediaFrame } from "@/components/ui/media-frame";
import { ProjectMockVisual } from "@/components/ui/project-mock-visual";
import type { ProjectSlug } from "@/lib/content/projects";

type ProjectCardProps = {
  className?: string;
  client: string;
  href: LinkProps["href"];
  index: number;
  industry: string;
  projectSlug: ProjectSlug;
  services: string;
  statement: string;
  title: string;
};

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
  projectSlug,
  services,
  statement,
  title,
}: Readonly<ProjectCardProps>) {
  const caseStudyLabel = getCaseStudyLabel(href);
  const projectNumber = formatProjectNumber(index);

  return (
    <Link
      aria-label={`${caseStudyLabel}: ${title}`}
      className={cn(
        "motion-interactive group block rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] motion-safe:hover:-translate-y-1 motion-safe:hover:border-[var(--color-brand-primary)] motion-safe:focus-visible:-translate-y-1",
        className,
      )}
      href={href}
    >
      <ViewportReveal
        className="h-full"
        delayMs={Math.min(index * 70, 210)}
      >
        <article className="grid h-full gap-5 p-3 sm:p-4">
          <MediaFrame aspectRatio={index === 0 ? "widescreen" : "landscape"}>
            <ProjectMockVisual
              aspect={index === 0 ? "widescreen" : "landscape"}
              index={index}
              mode="card"
              projectSlug={projectSlug}
            />
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
      </ViewportReveal>
    </Link>
  );
}
