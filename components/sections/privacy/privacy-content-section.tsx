import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import type { PrivacyContentSectionContent } from "@/lib/content/privacy";

export function PrivacyContentSection({
  content,
}: Readonly<{ content: PrivacyContentSectionContent }>) {
  return (
    <Section
      aria-labelledby="privacy-content-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="reading">
        <Stack gap="xl">
          <h2
            className="text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
            id="privacy-content-heading"
          >
            {content.headline}
          </h2>

          <ol className="grid gap-8">
            {content.sections.map((section, index) => (
              <li
                className="border-t border-[var(--color-border-default)] pt-6"
                key={section.heading}
              >
                <article className="grid gap-3">
                  <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {section.heading}
                  </h3>
                  <p className="break-words text-base leading-7 text-[var(--color-text-secondary)]">
                    {section.body}
                  </p>
                </article>
              </li>
            ))}
          </ol>

          <p className="border-y border-[var(--color-border-default)] py-5 text-base font-semibold leading-7 text-[var(--color-text-primary)]">
            {content.finalDisclosure}
          </p>
        </Stack>
      </Container>
    </Section>
  );
}
