import type { ProjectSlug } from "@/lib/content/projects";
import { ViewportReveal } from "@/components/motion/viewport-reveal";
import { ProjectMockVisual } from "@/components/ui/project-mock-visual";

type GalleryVariant = "wide" | "landscape" | "portrait";

type ProjectGalleryFrameProps = {
  caption: string;
  className?: string;
  index: number;
  label: string;
  projectSlug: ProjectSlug;
  variant: GalleryVariant;
};

const frameAspectClasses: Record<GalleryVariant, string> = {
  wide: "aspect-video",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ProjectGalleryFrame({
  caption,
  className,
  index,
  label,
  projectSlug,
  variant,
}: Readonly<ProjectGalleryFrameProps>) {
  return (
    <ViewportReveal
      className={cn("grid gap-4", className)}
      delayMs={Math.min(index * 70, 280)}
    >
      <figure className="grid gap-4">
        <div
          className={cn(
            "relative overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)]",
            frameAspectClasses[variant],
          )}
        >
          <div className="absolute left-4 top-4 z-10 rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-page)]/92 px-2.5 py-1 text-[11px] font-semibold text-[var(--color-text-secondary)]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <ProjectMockVisual
            aspect={variant}
            index={index}
            mode="gallery"
            projectSlug={projectSlug}
          />
        </div>
        <figcaption className="grid gap-2 border-t border-[var(--color-border-default)] pt-4">
          <span className="text-sm font-medium text-[var(--color-text-primary)]">
            {label}
          </span>
          <span className="text-sm leading-6 text-[var(--color-text-secondary)]">
            {caption}
          </span>
        </figcaption>
      </figure>
    </ViewportReveal>
  );
}
