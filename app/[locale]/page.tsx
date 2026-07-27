import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";

export default function LocaleHomePage() {
  return (
    <Section spacing="compact">
      <Container>
        <Stack gap="lg">
          <SectionHeader
            description="This page is not implemented yet."
            headingLevel="h1"
            title="Home"
          />
          <Stack gap="sm">
            <p className="max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)]">
              Development check: the persistent Phase 4 3D canvas foundation is
              active.
            </p>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}
