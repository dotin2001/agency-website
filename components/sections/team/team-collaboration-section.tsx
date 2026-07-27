import { ButtonLink } from "@/components/ui/button-link";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";

type Locale = "en" | "vi";

type CollaborationPrinciple = {
  description: string;
  title: string;
};

type TeamCollaborationCopy = {
  closingStatement: string;
  eyebrow: string;
  headline: string;
  primaryCta: string;
  principles: readonly CollaborationPrinciple[];
  secondaryCta: string;
  supportingCopy: string;
};

// Temporary localized collaboration copy until the production content system is implemented.
const teamCollaborationCopy: Record<Locale, TeamCollaborationCopy> = {
  en: {
    eyebrow: "How the Team Connects",
    headline: "The work stays stronger when disciplines share context.",
    supportingCopy:
      "Instead of moving work through isolated departments, we form the right team around the challenge and keep key disciplines connected throughout the project.",
    principles: [
      {
        title: "Shared discovery",
        description:
          "Relevant disciplines join the first conversations so the challenge is understood from multiple perspectives.",
      },
      {
        title: "Visible decisions",
        description:
          "Strategic and creative reasoning remains clear so teams can respond, align, and improve together.",
      },
      {
        title: "Connected delivery",
        description:
          "Direction, design, technology, content, and performance stay aligned through implementation.",
      },
      {
        title: "Continuous learning",
        description:
          "What we learn during delivery shapes the next decision rather than remaining in a final report.",
      },
    ],
    closingStatement:
      "Team structure changes with the challenge, but shared direction remains constant.",
    primaryCta: "Work With Us",
    secondaryCta: "Explore Our Services",
  },
  vi: {
    eyebrow: "Cách đội ngũ kết nối",
    headline: "Dự án tốt hơn khi các chuyên môn cùng chia sẻ bối cảnh.",
    supportingCopy:
      "Thay vì chuyển công việc qua từng phòng ban riêng biệt, chúng tôi xây dựng đội ngũ phù hợp quanh bài toán và duy trì sự kết nối giữa các chuyên môn trong suốt dự án.",
    principles: [
      {
        title: "Cùng khám phá bài toán",
        description:
          "Các chuyên môn liên quan tham gia từ những cuộc trao đổi đầu tiên để hiểu thách thức dưới nhiều góc nhìn.",
      },
      {
        title: "Quyết định minh bạch",
        description:
          "Cơ sở chiến lược và sáng tạo được làm rõ để đội ngũ có thể phản hồi, đồng thuận và cùng cải thiện dự án.",
      },
      {
        title: "Triển khai kết nối",
        description:
          "Định hướng, thiết kế, công nghệ, nội dung và hiệu quả luôn được đồng bộ trong quá trình thực hiện.",
      },
      {
        title: "Học hỏi liên tục",
        description:
          "Những điều học được trong triển khai sẽ định hướng cho quyết định tiếp theo thay vì chỉ nằm trong báo cáo cuối kỳ.",
      },
    ],
    closingStatement:
      "Cấu trúc đội ngũ thay đổi theo bài toán, nhưng định hướng chung luôn được duy trì.",
    primaryCta: "Hợp tác cùng chúng tôi",
    secondaryCta: "Khám phá dịch vụ",
  },
};

export function TeamCollaborationSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const copy = teamCollaborationCopy[locale];

  return (
    <Section
      aria-labelledby="team-collaboration-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-section)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split className="lg:items-end" gap="xl" variant="content-media">
            <Stack className="max-w-3xl" gap="md">
              <p className="w-fit border-l-2 border-[var(--color-brand-primary)] pl-3 text-sm font-medium tracking-normal text-[var(--color-text-secondary)]">
                {copy.eyebrow}
              </p>
              <h2
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-5xl"
                id="team-collaboration-heading"
              >
                {copy.headline}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
                {copy.supportingCopy}
              </p>
            </Stack>

            <p className="border-l border-[var(--color-border-default)] pl-5 text-xl font-semibold leading-tight text-[var(--color-text-primary)]">
              {copy.closingStatement}
            </p>
          </Split>

          <div className="grid gap-0 border-y border-[var(--color-border-default)] md:grid-cols-2">
            {copy.principles.map((principle, index) => (
              <article
                className="border-b border-[var(--color-border-default)] py-6 md:px-6 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
                key={principle.title}
              >
                <Stack gap="sm">
                  <p className="text-sm font-medium text-[var(--color-brand-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                    {principle.description}
                  </p>
                </Stack>
              </article>
            ))}
          </div>

          <Cluster align="center" gap="sm">
            <ButtonLink href={`/${locale}/contact`} size="large">
              {copy.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={`/${locale}/services`}
              size="large"
              variant="secondary"
            >
              {copy.secondaryCta}
            </ButtonLink>
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
}
