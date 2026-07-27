import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "@/components/ui/section-header";

type Locale = "en" | "vi";

type LocalizedProject = {
  client: string;
  industry: string;
  services: string;
  statement: string;
  title: string;
};

type PlaceholderProject = {
  content: Record<Locale, LocalizedProject>;
  slug: string;
};

type SelectedProjectsCopy = {
  cta: string;
  eyebrow: string;
  headline: string;
  supportingCopy: string;
};

// Temporary localized section copy until the production content system is implemented.
const sectionCopy: Record<Locale, SelectedProjectsCopy> = {
  en: {
    eyebrow: "Selected Projects",
    headline: "Work built to create distinction and move the business forward.",
    supportingCopy:
      "A selection of projects where strategy, creativity, technology, and performance were brought together into one coherent experience.",
    cta: "View All Projects",
  },
  vi: {
    eyebrow: "Dự án nổi bật",
    headline:
      "Những dự án tạo dấu ấn và thúc đẩy thương hiệu tiến về phía trước.",
    supportingCopy:
      "Một số dự án tiêu biểu nơi chiến lược, sáng tạo, công nghệ và hiệu quả được kết nối thành một trải nghiệm nhất quán.",
    cta: "Xem tất cả dự án",
  },
};

// Temporary placeholder project data until real project content and CMS integration exist.
const placeholderProjects: Array<PlaceholderProject> = [
  {
    slug: "brand-transformation",
    content: {
      en: {
        title: "Brand Transformation",
        client: "Premium Consumer Brand",
        industry: "Consumer",
        services: "Strategy, Branding, Digital Experience",
        statement:
          "A unified brand system designed to create clarity across every customer touchpoint.",
      },
      vi: {
        title: "Chuyển hóa thương hiệu",
        client: "Thương hiệu tiêu dùng cao cấp",
        industry: "Tiêu dùng",
        services: "Chiến lược, Thương hiệu, Trải nghiệm số",
        statement:
          "Một hệ thống thương hiệu thống nhất nhằm tạo sự rõ ràng trên mọi điểm chạm khách hàng.",
      },
    },
  },
  {
    slug: "integrated-campaign",
    content: {
      en: {
        title: "Integrated Campaign",
        client: "Real Estate Brand",
        industry: "Real Estate",
        services: "Creative Campaign, Content, Media",
        statement:
          "One campaign direction translated consistently across content, digital, and media.",
      },
      vi: {
        title: "Chiến dịch tích hợp",
        client: "Thương hiệu bất động sản",
        industry: "Bất động sản",
        services: "Chiến dịch sáng tạo, Nội dung, Media",
        statement:
          "Một định hướng chiến dịch được triển khai nhất quán trên nội dung, kỹ thuật số và media.",
      },
    },
  },
  {
    slug: "digital-experience",
    content: {
      en: {
        title: "Digital Experience",
        client: "Hospitality Brand",
        industry: "Hospitality",
        services: "Experience Strategy, UX/UI, Development",
        statement:
          "A responsive digital experience shaped around clear storytelling and user intent.",
      },
      vi: {
        title: "Trải nghiệm số",
        client: "Thương hiệu dịch vụ lưu trú",
        industry: "Dịch vụ lưu trú",
        services: "Chiến lược trải nghiệm, UX/UI, Phát triển",
        statement:
          "Một trải nghiệm số linh hoạt được xây dựng quanh câu chuyện rõ ràng và mục tiêu người dùng.",
      },
    },
  },
];

export function SelectedProjectsSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const copy = sectionCopy[locale];

  return (
    <Section
      aria-labelledby="home-selected-projects-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <SectionHeader
              className="max-w-3xl"
              description={copy.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {copy.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-selected-projects-heading"
              title={copy.headline}
            />
            <ButtonLink
              href={`/${locale}/projects`}
              size="large"
              variant="secondary"
            >
              {copy.cta}
            </ButtonLink>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            {placeholderProjects.map((project, index) => {
              const content = project.content[locale];
              const isFeatured = index === 0;

              return (
                <ProjectCard
                  className={
                    isFeatured
                      ? "lg:col-span-7"
                      : "lg:col-span-5 lg:mt-12"
                  }
                  client={content.client}
                  href={`/${locale}/projects/${project.slug}`}
                  index={index}
                  industry={content.industry}
                  key={project.slug}
                  services={content.services}
                  statement={content.statement}
                  title={content.title}
                />
              );
            })}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
