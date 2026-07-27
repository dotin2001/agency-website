import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";

type Locale = "en" | "vi";

type CapabilityPillar = {
  description: string;
  label: string;
  title: string;
};

type TransformationCopy = {
  closingStatement: string;
  eyebrow: string;
  headline: string;
  pillars: Array<CapabilityPillar>;
  supportingCopy: string;
};

// Temporary localized homepage copy until the production content system is implemented.
const transformationCopy: Record<Locale, TransformationCopy> = {
  en: {
    eyebrow: "The Transformation",
    headline: "From fragmented activity to one connected brand system.",
    supportingCopy:
      "We align strategic direction, creative expression, digital execution, and measurable performance so every touchpoint contributes to the same business story.",
    pillars: [
      {
        label: "Strategy",
        title: "Strategic clarity",
        description:
          "Define the problem, audience, priorities, and direction before execution begins.",
      },
      {
        label: "Creativity",
        title: "Creative distinction",
        description:
          "Build ideas and visual systems that give the brand a recognizable point of view.",
      },
      {
        label: "Technology",
        title: "Digital craftsmanship",
        description:
          "Turn concepts into responsive, useful, and memorable digital experiences.",
      },
      {
        label: "Performance",
        title: "Measurable impact",
        description:
          "Connect creative decisions to clear objectives, learning, and business outcomes.",
      },
    ],
    closingStatement:
      "One direction. Multiple disciplines. A more coherent brand experience.",
  },
  vi: {
    eyebrow: "Chuyển hóa",
    headline:
      "Từ những hoạt động rời rạc thành một hệ thống thương hiệu thống nhất.",
    supportingCopy:
      "Chúng tôi đồng bộ định hướng chiến lược, biểu đạt sáng tạo, triển khai số và hiệu quả đo lường để mọi điểm chạm cùng đóng góp cho một câu chuyện kinh doanh nhất quán.",
    pillars: [
      {
        label: "Chiến lược",
        title: "Định hướng rõ ràng",
        description:
          "Xác định đúng vấn đề, đối tượng, ưu tiên và hướng đi trước khi bắt đầu triển khai.",
      },
      {
        label: "Sáng tạo",
        title: "Dấu ấn khác biệt",
        description:
          "Xây dựng ý tưởng và hệ thống hình ảnh giúp thương hiệu có góc nhìn dễ nhận diện.",
      },
      {
        label: "Công nghệ",
        title: "Năng lực triển khai số",
        description:
          "Chuyển hóa ý tưởng thành những trải nghiệm số hữu ích, linh hoạt và đáng nhớ.",
      },
      {
        label: "Hiệu quả",
        title: "Tác động đo lường được",
        description:
          "Kết nối quyết định sáng tạo với mục tiêu, quá trình học hỏi và kết quả kinh doanh.",
      },
    ],
    closingStatement:
      "Một định hướng. Nhiều năng lực. Một trải nghiệm thương hiệu nhất quán hơn.",
  },
};

function formatStep(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function TransformationSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const copy = transformationCopy[locale];

  return (
    <Section
      aria-labelledby="home-transformation-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="content-media">
            <SectionHeader
              className="max-w-2xl"
              description={copy.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {copy.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-transformation-heading"
              title={copy.headline}
            />

            <div
              aria-hidden="true"
              className="hidden min-h-32 border-l border-[var(--color-border-default)] md:mt-10 md:block"
            />
          </Split>

          <ol className="grid border-y border-[var(--color-border-default)] md:grid-cols-2 lg:grid-cols-4">
            {copy.pillars.map((pillar, index) => (
              <li
                className="border-t border-[var(--color-border-default)] py-6 first:border-t-0 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 lg:min-h-64"
                key={pillar.label}
              >
                <Stack gap="lg">
                  <Cluster align="center" gap="sm">
                    <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                      {formatStep(index)}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-normal text-[var(--color-text-secondary)]">
                      {pillar.label}
                    </span>
                  </Cluster>
                  <Stack gap="xs">
                    <h3 className="text-xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                      {pillar.description}
                    </p>
                  </Stack>
                </Stack>
              </li>
            ))}
          </ol>

          <div className="border-l-2 border-[var(--color-brand-primary)] pl-5">
            <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-3xl">
              {copy.closingStatement}
            </p>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
