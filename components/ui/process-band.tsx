type ProcessBandItem = Readonly<{
  description?: string;
  label: string;
  title: string;
}>;

type ProcessBandProps = Readonly<{
  className?: string;
  items: readonly ProcessBandItem[];
}>;

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ProcessBand({
  className,
  items,
}: ProcessBandProps) {
  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-border-default)] md:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => (
        <article
          className="flex h-full flex-col gap-3 bg-[var(--color-bg-page)] px-5 py-5 sm:px-6"
          key={`${item.label}-${item.title}`}
        >
          <span className="text-sm font-medium text-[var(--color-brand-primary)]">
            {item.label}
          </span>
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-base font-semibold leading-6 tracking-normal text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            {item.description ? (
              <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
