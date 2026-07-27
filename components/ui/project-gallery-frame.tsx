type GalleryVariant = "wide" | "landscape" | "portrait";

type ProjectGalleryFrameProps = {
  caption: string;
  className?: string;
  index: number;
  label: string;
  variant: GalleryVariant;
};

const frameAspectClasses: Record<GalleryVariant, string> = {
  wide: "aspect-video",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

const visualPatterns = [
  "before:left-8 before:top-8 before:h-px before:w-2/3 after:bottom-8 after:right-8 after:h-20 after:w-20",
  "before:bottom-10 before:left-8 before:h-px before:w-1/2 after:right-10 after:top-8 after:h-24 after:w-px",
  "before:left-10 before:top-8 before:h-28 before:w-px after:bottom-10 after:left-14 after:h-px after:w-2/3",
  "before:right-10 before:top-10 before:h-px before:w-1/3 after:bottom-8 after:left-8 after:h-16 after:w-28",
  "before:bottom-12 before:right-8 before:h-px before:w-1/2 after:left-10 after:top-10 after:h-20 after:w-px",
] as const;

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ProjectGalleryFrame({
  caption,
  className,
  index,
  label,
  variant,
}: Readonly<ProjectGalleryFrameProps>) {
  const pattern = visualPatterns[index % visualPatterns.length];

  return (
    <figure className={cn("grid gap-3", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)]",
          frameAspectClasses[variant],
        )}
      >
        {/* Temporary CSS-only placeholder; replace with approved project media before launch. */}
        <div
          aria-hidden="true"
          className={cn(
            "relative h-full w-full bg-[var(--color-bg-section)] before:absolute before:bg-[var(--color-brand-primary)] before:content-[''] after:absolute after:border after:border-[var(--color-border-default)] after:content-['']",
            pattern,
          )}
        >
          <div className="absolute inset-5 border border-[var(--color-border-subtle)]" />
          <div className="absolute bottom-5 right-5 h-10 w-10 border border-[var(--color-brand-primary)]" />
        </div>
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
