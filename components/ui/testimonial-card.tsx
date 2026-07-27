import { Stack } from "@/components/layout/stack";

type TestimonialCardVariant = "primary" | "supporting";

type TestimonialCardProps = {
  attribution: string;
  className?: string;
  index: number;
  quote: string;
  role: string;
  variant: TestimonialCardVariant;
};

const variantClasses: Record<TestimonialCardVariant, string> = {
  primary: "p-6 sm:p-8 lg:min-h-96",
  supporting: "p-5 sm:p-6",
};

const quoteClasses: Record<TestimonialCardVariant, string> = {
  primary:
    "text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-3xl",
  supporting:
    "text-lg font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatTestimonialNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function TestimonialCard({
  attribution,
  className,
  index,
  quote,
  role,
  variant,
}: Readonly<TestimonialCardProps>) {
  return (
    <article
      className={cn(
        "rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)]",
        variantClasses[variant],
        className,
      )}
    >
      <blockquote className="flex h-full flex-col justify-between gap-8">
        <Stack gap="lg">
          <span className="text-sm font-medium text-[var(--color-brand-primary)]">
            {formatTestimonialNumber(index)}
          </span>
          <p className={quoteClasses[variant]}>{quote}</p>
        </Stack>

        <footer className="border-t border-[var(--color-border-default)] pt-5">
          <cite className="not-italic">
            <span className="block text-sm font-semibold text-[var(--color-text-primary)]">
              {attribution}
            </span>
            <span className="mt-1 block text-sm text-[var(--color-text-secondary)]">
              {role}
            </span>
          </cite>
        </footer>
      </blockquote>
    </article>
  );
}
