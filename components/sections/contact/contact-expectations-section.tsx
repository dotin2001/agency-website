import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import type { ContactExpectationsContent } from "@/lib/content/contact";

export function ContactExpectationsSection({
  content,
}: Readonly<{ content: ContactExpectationsContent }>) {
  return (
    <Section
      aria-labelledby="contact-expectations-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-section)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split className="lg:items-end" gap="xl" variant="content-media">
            <Stack className="max-w-3xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {content.eyebrow}
              </p>
              <h2
                className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
                id="contact-expectations-heading"
              >
                {content.headline}
              </h2>
            </Stack>

            <div className="border-l border-[var(--color-border-default)] pl-5">
              <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                {content.alternativeContactHeadline}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
                {content.alternativeContactCopy}
              </p>
            </div>
          </Split>

          <div className="grid gap-0 border-y border-[var(--color-border-default)] md:grid-cols-3">
            {content.steps.map((step, index) => (
              <article
                className="border-b border-[var(--color-border-default)] py-6 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
                key={step.title}
              >
                <Stack gap="sm">
                  <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </Stack>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
