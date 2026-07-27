import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";

type Locale = "en" | "vi";

type ValueItem = {
  description: string;
  label: string;
  title: string;
};

type ValuesCopy = {
  eyebrow: string;
  headline: string;
  values: Array<ValueItem>;
};

// Temporary localized About copy until the production content system is implemented.
const valuesCopy: Record<Locale, ValuesCopy> = {
  en: {
    eyebrow: "What Guides Us",
    headline: "Four principles shape every decision we make.",
    values: [
      {
        label: "Clarity",
        title: "Start with the right problem",
        description:
          "We create direction before execution so every decision has a clear purpose.",
      },
      {
        label: "Distinction",
        title: "Build a recognizable point of view",
        description:
          "We look for ideas and systems that make the brand meaningful and memorable.",
      },
      {
        label: "Craft",
        title: "Care about how the work is made",
        description:
          "Strategy only becomes valuable when it is translated into thoughtful and reliable execution.",
      },
      {
        label: "Impact",
        title: "Connect the work to outcomes",
        description:
          "We define success clearly and use learning to improve the work over time.",
      },
    ],
  },
  vi: {
    eyebrow: "Điều định hướng chúng tôi",
    headline: "Bốn nguyên tắc định hình mọi quyết định trong dự án.",
    values: [
      {
        label: "Rõ ràng",
        title: "Bắt đầu từ đúng vấn đề",
        description:
          "Chúng tôi tạo định hướng trước khi triển khai để mọi quyết định đều có mục đích rõ ràng.",
      },
      {
        label: "Khác biệt",
        title: "Xây dựng một góc nhìn dễ nhận diện",
        description:
          "Chúng tôi tìm kiếm những ý tưởng và hệ thống giúp thương hiệu trở nên có ý nghĩa và đáng nhớ.",
      },
      {
        label: "Chỉn chu",
        title: "Quan tâm đến cách công việc được tạo ra",
        description:
          "Chiến lược chỉ tạo ra giá trị khi được chuyển hóa thành quá trình triển khai có chủ đích và đáng tin cậy.",
      },
      {
        label: "Tác động",
        title: "Kết nối công việc với kết quả",
        description:
          "Chúng tôi xác định rõ thành công và sử dụng quá trình học hỏi để liên tục cải thiện dự án.",
      },
    ],
  },
};

function formatValueNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ValuesSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = valuesCopy[locale];

  return (
    <Section
      aria-labelledby="about-values-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            eyebrow={
              <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                {copy.eyebrow}
              </span>
            }
            headingLevel="h2"
            id="about-values-heading"
            title={copy.headline}
          />

          <ol className="grid border-y border-[var(--color-border-default)] md:grid-cols-2">
            {copy.values.map((value, index) => (
              <li
                className={cn(
                  "border-t border-[var(--color-border-default)] py-6 first:border-t-0 md:border-l md:px-6 md:odd:border-l-0 lg:min-h-64",
                  index === 1 ? "md:border-t-0" : undefined,
                )}
                key={value.label}
              >
                <Stack gap="lg">
                  <Cluster align="center" gap="sm">
                    <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                      {formatValueNumber(index)}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-normal text-[var(--color-text-secondary)]">
                      {value.label}
                    </span>
                  </Cluster>

                  <Stack gap="xs">
                    <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                      {value.title}
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
                      {value.description}
                    </p>
                  </Stack>
                </Stack>
              </li>
            ))}
          </ol>
        </Stack>
      </Container>
    </Section>
  );
}
