import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";
import type {
  ContactFormSectionContent,
  ContactPageContent,
} from "@/lib/content/contact";

type ContactFormSectionProps = Readonly<{
  content: ContactFormSectionContent;
  fields: ContactPageContent["fields"];
}>;

export function ContactFormSection({
  content,
  fields,
}: ContactFormSectionProps) {
  return (
    <Section
      aria-labelledby="contact-form-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Split gap="xl" variant="content-media">
          <Stack className="max-w-3xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {content.eyebrow}
            </p>
            <h2
              className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
              id="contact-form-heading"
            >
              {content.headline}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {content.supportingCopy}
            </p>
          </Stack>

          <ProjectInquiryForm content={content} fields={fields} />
        </Split>
      </Container>
    </Section>
  );
}
