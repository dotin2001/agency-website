import type { ReactNode } from "react";
import { Stack } from "@/components/layout/stack";

type EditorialSidecarItem = Readonly<{
  label?: string;
  value: ReactNode;
}>;

type EditorialSidecarProps = Readonly<{
  className?: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  footer?: ReactNode;
  items?: readonly EditorialSidecarItem[];
  title?: ReactNode;
}>;

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function EditorialSidecar({
  className,
  description,
  eyebrow,
  footer,
  items,
  title,
}: EditorialSidecarProps) {
  return (
    <aside
      className={cn(
        "rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 p-5 sm:p-6",
        className,
      )}
    >
      <Stack gap="md">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-normal text-[var(--color-brand-primary)]">
            {eyebrow}
          </p>
        ) : null}

        {title ? (
          <p className="text-lg font-semibold leading-7 tracking-normal text-[var(--color-text-primary)] sm:text-xl">
            {title}
          </p>
        ) : null}

        {description ? (
          <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
            {description}
          </p>
        ) : null}

        {items && items.length > 0 ? (
          <dl className="grid gap-3 border-t border-[var(--color-border-default)] pt-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <div key={item.label ?? index}>
                {item.label ? (
                  <dt className="text-[11px] font-semibold uppercase tracking-normal text-[var(--color-text-secondary)]">
                    {item.label}
                  </dt>
                ) : null}
                <dd className="text-sm leading-6 text-[var(--color-text-primary)]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {footer ? (
          <div className="border-t border-[var(--color-border-default)] pt-4">
            {footer}
          </div>
        ) : null}
      </Stack>
    </aside>
  );
}
