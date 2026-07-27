import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { ProjectGalleryFrame } from "@/components/ui/project-gallery-frame";
import type {
  Locale,
  LocalizedProjectDetail,
} from "@/lib/projects/project-placeholders";

type ProjectGallerySectionProps = {
  locale: Locale;
  project: LocalizedProjectDetail;
};

const headings: Record<Locale, string> = {
  en: "Project Gallery",
  vi: "Không gian dự án",
};

const galleryLayoutClasses = [
  "lg:col-span-12",
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

export function ProjectGallerySection({
  locale,
  project,
}: Readonly<ProjectGallerySectionProps>) {
  return (
    <Section
      aria-labelledby="project-gallery-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <h2
            className="max-w-3xl text-3xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-4xl"
            id="project-gallery-heading"
          >
            {headings[locale]}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:items-start">
            {project.galleryItems.map((item, index) => (
              <ProjectGalleryFrame
                caption={item.caption}
                className={galleryLayoutClasses[index]}
                index={index}
                key={item.label}
                label={item.label}
                variant={item.variant}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
