import type { ProjectSlug } from "@/lib/content/projects";
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
    <figure className={cn("grid gap-3", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)]",
          frameAspectClasses[variant],
        )}
      >
        <ProjectMockVisual
          aspect={variant}
          index={index}
          mode="gallery"
          projectSlug={projectSlug}
        />
      </div>
      <figcaption className="grid gap-1">
        <span className="text-sm font-medium text-[var(--color-text-primary)]">
          {label}
        </span>
        <span className="text-sm leading-6 text-[var(--color-text-secondary)]">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
