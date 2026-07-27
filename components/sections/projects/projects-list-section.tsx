import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
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

type ProjectsListCopy = {
  heading: string;
};

const projectsListCopy: Record<Locale, ProjectsListCopy> = {
  en: {
    heading: "Project Collection",
  },
  vi: {
    heading: "Danh sách dự án",
  },
};

// Temporary placeholder project data until approved case-study content and CMS integration exist.
const placeholderProjects: readonly PlaceholderProject[] = [
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
  {
    slug: "product-launch",
    content: {
      en: {
        title: "Product Launch",
        client: "Lifestyle Brand",
        industry: "Lifestyle",
        services: "Launch Strategy, Creative, Content",
        statement:
          "A launch system connecting positioning, campaign ideas, and digital communication.",
      },
      vi: {
        title: "Ra mắt sản phẩm",
        client: "Thương hiệu phong cách sống",
        industry: "Phong cách sống",
        services: "Chiến lược ra mắt, Sáng tạo, Nội dung",
        statement:
          "Một hệ thống ra mắt kết nối định vị, ý tưởng chiến dịch và truyền thông kỹ thuật số.",
      },
    },
  },
  {
    slug: "content-ecosystem",
    content: {
      en: {
        title: "Content Ecosystem",
        client: "Service Brand",
        industry: "Services",
        services: "Content Strategy, Social, Production",
        statement:
          "A clearer content structure designed to improve consistency across channels and teams.",
      },
      vi: {
        title: "Hệ sinh thái nội dung",
        client: "Thương hiệu dịch vụ",
        industry: "Dịch vụ",
        services: "Chiến lược nội dung, Mạng xã hội, Sản xuất",
        statement:
          "Một cấu trúc nội dung rõ ràng hơn nhằm tăng tính nhất quán giữa các kênh và đội ngũ.",
      },
    },
  },
  {
    slug: "performance-platform",
    content: {
      en: {
        title: "Performance Platform",
        client: "Digital Commerce Brand",
        industry: "Commerce",
        services: "Landing Pages, Measurement, Optimization",
        statement:
          "A modular digital platform connecting campaign execution with measurement and learning.",
      },
      vi: {
        title: "Nền tảng hiệu quả",
        client: "Thương hiệu thương mại số",
        industry: "Thương mại",
        services: "Landing page, Đo lường, Tối ưu",
        statement:
          "Một nền tảng số linh hoạt kết nối triển khai chiến dịch với đo lường và quá trình học hỏi.",
      },
    },
  },
];

const projectLayoutClasses = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-12",
  "lg:col-span-5",
  "lg:col-span-7 lg:mt-12",
  "lg:col-span-6",
  "lg:col-span-6 lg:mt-10",
] as const;

export function ProjectsListSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = projectsListCopy[locale];

  return (
    <Section
      aria-labelledby="projects-list-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            headingLevel="h2"
            id="projects-list-heading"
            title={copy.heading}
          />

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            {placeholderProjects.map((project, index) => {
              const content = project.content[locale];

              return (
                <ProjectCard
                  className={projectLayoutClasses[index]}
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
