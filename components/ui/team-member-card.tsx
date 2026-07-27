import { Stack } from "@/components/layout/stack";
import { MediaFrame } from "@/components/ui/media-frame";

type TeamMemberCardVariant = "standard" | "featured";

type TeamMemberCardProps = {
  className?: string;
  description: string;
  discipline: string;
  displayName: string;
  index: number;
  variant: TeamMemberCardVariant;
};

const variantClasses: Record<TeamMemberCardVariant, string> = {
  featured:
    "grid gap-6 p-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:items-end sm:p-5",
  standard: "grid gap-5 p-4",
};

const headingClasses: Record<TeamMemberCardVariant, string> = {
  featured:
    "text-3xl font-semibold tracking-normal text-[var(--color-text-primary)]",
  standard:
    "text-xl font-semibold tracking-normal text-[var(--color-text-primary)]",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatMemberNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function TeamMemberCard({
  className,
  description,
  discipline,
  displayName,
  index,
  variant,
}: Readonly<TeamMemberCardProps>) {
  return (
    <article
      className={cn(
        "rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)]",
        variantClasses[variant],
        className,
      )}
    >
      <MediaFrame aria-hidden="true" aspectRatio="portrait">
        {/* Temporary decorative portrait placeholder; replace with approved team photography later. */}
        <div className="relative h-full w-full bg-[var(--color-bg-page)]">
          <div className="absolute inset-4 border border-[var(--color-border-default)]" />
          <div className="absolute inset-x-8 top-8 h-px bg-[var(--color-brand-primary)]" />
          <div className="absolute bottom-8 left-8 h-20 w-px bg-[var(--color-border-default)]" />
          <div className="absolute bottom-8 right-8 h-16 w-16 border border-[var(--color-brand-primary)]" />
        </div>
      </MediaFrame>

      <Stack gap="md">
        <div className="flex items-start justify-between gap-4">
          <span className="text-sm font-medium text-[var(--color-brand-primary)]">
            {formatMemberNumber(index)}
          </span>
          <span className="text-right text-xs font-semibold uppercase tracking-normal text-[var(--color-text-secondary)]">
            {discipline}
          </span>
        </div>

        <Stack gap="xs">
          <h3 className={headingClasses[variant]}>{displayName}</h3>
          <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
            {description}
          </p>
        </Stack>
      </Stack>
    </article>
  );
}
