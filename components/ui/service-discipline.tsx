import { Stack } from "@/components/layout/stack";

type ServiceDisciplineProps = {
  capabilities: readonly string[];
  className?: string;
  index: number;
  label: string;
  summary: string;
  title: string;
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ServiceDiscipline({
  capabilities,
  className,
  index,
  label,
  summary,
  title,
}: Readonly<ServiceDisciplineProps>) {
  return (
    <article
      className={cn(
        "grid gap-6 border-t border-[var(--color-border-default)] py-8 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(14rem,0.75fr)] md:gap-8",
        className,
      )}
    >
      <span
        aria-label={label}
        className="text-sm font-medium text-[var(--color-brand-primary)]"
      >
        {label}
      </span>

      <Stack gap="xs">
        <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
          {title}
        </h3>
        <p className="max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">
          {summary}
        </p>
      </Stack>

      <ul className="grid gap-2 text-sm leading-6 text-[var(--color-text-secondary)]">
        {capabilities.map((capability) => (
          <li
            className="border-l border-[var(--color-border-default)] pl-3"
            key={`${index}-${capability}`}
          >
            {capability}
          </li>
        ))}
      </ul>
    </article>
  );
}
