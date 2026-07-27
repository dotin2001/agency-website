import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";

type Locale = "en" | "vi";

type EngagementModel = {
  description: string;
  title: string;
};

type EngagementCopy = {
  closingStatement: string;
  eyebrow: string;
  headline: string;
  models: readonly EngagementModel[];
  primaryCta: string;
  secondaryCta: string;
  supportingCopy: string;
};

// Temporary localized Services copy until the production content system is implemented.
const engagementCopy: Record<Locale, EngagementCopy> = {
  en: {
    eyebrow: "How We Engage",
    headline: "Start with the challenge, not the service menu.",
    supportingCopy:
      "Some challenges require one focused capability. Others need an integrated team working across strategy, creative, technology, content, and performance.",
    models: [
      {
        title: "Focused Engagement",
        description:
          "A defined team and scope for one clear strategic, creative, digital, or performance need.",
      },
      {
        title: "Integrated Project",
        description:
          "Multiple disciplines working together from discovery through delivery.",
      },
      {
        title: "Ongoing Partnership",
        description:
          "A connected team supporting continuous campaigns, content, digital evolution, and learning.",
      },
    ],
    closingStatement:
      "The right model depends on the challenge, timeline, internal team, and level of integration required.",
    primaryCta: "Discuss Your Project",
    secondaryCta: "View Selected Work",
  },
  vi: {
    eyebrow: "Cách chúng tôi hợp tác",
    headline: "Bắt đầu từ bài toán, không phải danh sách dịch vụ.",
    supportingCopy:
      "Một số thách thức chỉ cần một năng lực tập trung. Những bài toán khác cần đội ngũ tích hợp phối hợp giữa chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả.",
    models: [
      {
        title: "Hợp tác tập trung",
        description:
          "Một đội ngũ và phạm vi rõ ràng cho nhu cầu cụ thể về chiến lược, sáng tạo, kỹ thuật số hoặc hiệu quả.",
      },
      {
        title: "Dự án tích hợp",
        description:
          "Nhiều chuyên môn cùng phối hợp từ giai đoạn khám phá đến khi hoàn thiện.",
      },
      {
        title: "Đồng hành dài hạn",
        description:
          "Một đội ngũ kết nối hỗ trợ chiến dịch, nội dung, phát triển trải nghiệm số và quá trình học hỏi liên tục.",
      },
    ],
    closingStatement:
      "Mô hình phù hợp phụ thuộc vào bài toán, thời gian, đội ngũ nội bộ và mức độ tích hợp cần thiết.",
    primaryCta: "Trao đổi về dự án",
    secondaryCta: "Xem dự án nổi bật",
  },
};

function formatModelNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function EngagementSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = engagementCopy[locale];

  return (
    <Section
      aria-labelledby="services-engagement-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="media-content">
            <SectionHeader
              className="max-w-3xl"
              description={copy.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {copy.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="services-engagement-heading"
              title={copy.headline}
            />

            <Stack
              className="border-l border-[var(--color-border-default)] pl-5"
              gap="lg"
            >
              <p className="max-w-md text-xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                {copy.closingStatement}
              </p>
              <Cluster align="center" gap="sm">
                <ButtonLink
                  aria-label={copy.primaryCta}
                  href={`/${locale}/contact`}
                  size="large"
                >
                  {copy.primaryCta}
                </ButtonLink>
                <ButtonLink
                  aria-label={copy.secondaryCta}
                  href={`/${locale}/projects`}
                  size="large"
                  variant="secondary"
                >
                  {copy.secondaryCta}
                </ButtonLink>
              </Cluster>
            </Stack>
          </Split>

          <ol className="grid gap-6 md:grid-cols-3">
            {copy.models.map((model, index) => (
              <li
                className="border-t border-[var(--color-border-default)] pt-5 md:min-h-56"
                key={model.title}
              >
                <Stack gap="lg">
                  <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {formatModelNumber(index)}
                  </span>
                  <Stack gap="xs">
                    <h3 className="text-xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                      {model.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                      {model.description}
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
