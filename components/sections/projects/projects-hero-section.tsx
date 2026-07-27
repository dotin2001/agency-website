import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type ProjectsHeroCopy = {
  disclosure: string;
  eyebrow: string;
  headline: string;
  supportingCopy: string;
};

// Temporary localized Projects copy until the production content system is implemented.
const projectsHeroCopy: Record<Locale, ProjectsHeroCopy> = {
  en: {
    eyebrow: "Projects",
    headline: "Selected work across brand, campaign, and digital experience.",
    supportingCopy:
      "Each project begins with a different challenge, but the objective remains consistent: create clearer direction, stronger distinction, and work that contributes to meaningful outcomes.",
    disclosure:
      "The projects below are temporary structural examples and must be replaced with approved case-study content before launch.",
  },
  vi: {
    eyebrow: "Dự án",
    headline:
      "Những dự án tiêu biểu về thương hiệu, chiến dịch và trải nghiệm số.",
    supportingCopy:
      "Mỗi dự án bắt đầu từ một thách thức khác nhau, nhưng mục tiêu luôn nhất quán: tạo định hướng rõ ràng hơn, dấu ấn khác biệt hơn và những giá trị có ý nghĩa.",
    disclosure:
      "Các dự án bên dưới chỉ là nội dung cấu trúc tạm thời và phải được thay thế bằng case study đã được phê duyệt trước khi ra mắt.",
  },
};

export function ProjectsHeroSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = projectsHeroCopy[locale];

  return (
    <Section
      aria-labelledby="projects-hero-heading"
      className="relative overflow-hidden bg-transparent"
      spacing="chapter"
    >
      <Container size="page">
        <Split
          className="lg:grid-cols-[minmax(0,0.9fr)_minmax(16rem,0.7fr)] lg:items-end"
          gap="xl"
        >
          <Stack className="max-w-4xl" gap="md">
            <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
              {copy.eyebrow}
            </p>
            <h1
              className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-normal text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl"
              id="projects-hero-heading"
            >
              {copy.headline}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {copy.supportingCopy}
            </p>
          </Stack>

          <p className="border-l border-[var(--color-border-default)] bg-[var(--color-bg-page)]/90 pl-5 text-sm leading-6 text-[var(--color-text-secondary)]">
            {copy.disclosure}
          </p>
        </Split>
      </Container>
    </Section>
  );
}
