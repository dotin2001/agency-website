import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";

type Locale = "en" | "vi";

type PrincipleItem = {
  description: string;
  title: string;
};

type PrinciplesCopy = {
  closingStatement: string;
  cta: string;
  eyebrow: string;
  headline: string;
  principles: Array<PrincipleItem>;
};

// Temporary localized About copy until the production content system is implemented.
const principlesCopy: Record<Locale, PrinciplesCopy> = {
  en: {
    eyebrow: "How We Work",
    headline:
      "Collaboration stays connected from the first question to delivery.",
    principles: [
      {
        title: "Work as one team",
        description:
          "Strategy, creative, technology, content, and performance contribute from the beginning.",
      },
      {
        title: "Make decisions visible",
        description:
          "Clear reasoning helps teams align, respond, and improve the work together.",
      },
      {
        title: "Build systems, not isolated outputs",
        description:
          "We create structures that remain useful beyond one campaign, page, or deliverable.",
      },
      {
        title: "Learn through execution",
        description:
          "Delivery generates insight, and insight informs the next decision.",
      },
    ],
    closingStatement:
      "Better work happens when disciplines share context, responsibility, and direction.",
    cta: "Start a Project",
  },
  vi: {
    eyebrow: "Cách chúng tôi làm việc",
    headline:
      "Sự phối hợp được duy trì từ câu hỏi đầu tiên đến giai đoạn hoàn thiện.",
    principles: [
      {
        title: "Làm việc như một đội ngũ thống nhất",
        description:
          "Chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả cùng tham gia ngay từ đầu.",
      },
      {
        title: "Làm rõ cơ sở của quyết định",
        description:
          "Lập luận rõ ràng giúp các đội ngũ đồng thuận, phản hồi và cùng nhau nâng cao chất lượng dự án.",
      },
      {
        title: "Xây dựng hệ thống thay vì đầu việc riêng lẻ",
        description:
          "Chúng tôi tạo ra những cấu trúc có thể tiếp tục phát huy giá trị sau một chiến dịch, trang web hoặc hạng mục bàn giao.",
      },
      {
        title: "Học hỏi trong quá trình triển khai",
        description:
          "Việc thực thi tạo ra hiểu biết mới và những hiểu biết đó định hướng cho quyết định tiếp theo.",
      },
    ],
    closingStatement:
      "Dự án tốt hơn được tạo ra khi các chuyên môn cùng chia sẻ bối cảnh, trách nhiệm và định hướng.",
    cta: "Bắt đầu dự án",
  },
};

function formatPrincipleNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function PrinciplesSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = principlesCopy[locale];

  return (
    <Section
      aria-labelledby="about-principles-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="content-media">
            <SectionHeader
              className="max-w-3xl"
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {copy.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="about-principles-heading"
              title={copy.headline}
            />

            <Stack
              className="border-l border-[var(--color-border-default)] pl-5"
              gap="lg"
            >
              <p className="max-w-md text-xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                {copy.closingStatement}
              </p>
              <ButtonLink
                aria-label={copy.cta}
                href={`/${locale}/contact`}
                size="large"
              >
                {copy.cta}
              </ButtonLink>
            </Stack>
          </Split>

          <ol className="grid gap-0 border-y border-[var(--color-border-default)]">
            {copy.principles.map((principle, index) => (
              <li
                className="grid gap-4 border-t border-[var(--color-border-default)] py-6 first:border-t-0 md:grid-cols-[4rem_minmax(0,0.55fr)_minmax(0,0.45fr)] md:items-start md:gap-8"
                key={principle.title}
              >
                <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                  {formatPrincipleNumber(index)}
                </span>
                <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                  {principle.title}
                </h3>
                <p className="max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </Stack>
      </Container>
    </Section>
  );
}
