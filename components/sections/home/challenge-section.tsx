import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { SectionHeader } from "@/components/ui/section-header";

type Locale = "en" | "vi";

type ChallengeItem = {
  description: string;
  title: string;
};

type ChallengeCopy = {
  eyebrow: string;
  headline: string;
  items: Array<ChallengeItem>;
  supportingCopy: string;
};

// Temporary localized homepage copy until the production content system is implemented.
const challengeCopy: Record<Locale, ChallengeCopy> = {
  en: {
    eyebrow: "The Challenge",
    headline:
      "Brands do not need more noise. They need clearer meaning.",
    supportingCopy:
      "Communication often becomes fragmented across campaigns, channels, and digital touchpoints. The result is more output, but less distinction, consistency, and measurable purpose.",
    items: [
      {
        title: "Generic communication",
        description:
          "Brand messages become interchangeable and difficult to remember.",
      },
      {
        title: "Disconnected campaigns",
        description:
          "Creative, media, content, and digital execution move in different directions.",
      },
      {
        title: "Weak digital experiences",
        description:
          "Websites and digital touchpoints feel functional, but not distinctive.",
      },
      {
        title: "Activity without impact",
        description:
          "Teams produce more assets without a clear connection to business outcomes.",
      },
    ],
  },
  vi: {
    eyebrow: "Thách thức",
    headline:
      "Thương hiệu không cần thêm nhiễu. Thương hiệu cần ý nghĩa rõ ràng hơn.",
    supportingCopy:
      "Truyền thông thường bị phân mảnh giữa chiến dịch, kênh và các điểm chạm số. Kết quả là nhiều đầu việc hơn nhưng ít khác biệt, thiếu nhất quán và khó chứng minh hiệu quả.",
    items: [
      {
        title: "Thông điệp đại trà",
        description:
          "Nội dung thương hiệu dễ trở nên giống nhau và khó tạo dấu ấn.",
      },
      {
        title: "Chiến dịch rời rạc",
        description:
          "Sáng tạo, media, nội dung và triển khai số đi theo những hướng khác nhau.",
      },
      {
        title: "Trải nghiệm số thiếu khác biệt",
        description:
          "Website và các điểm chạm số vẫn hoạt động, nhưng chưa đủ sức ghi nhớ.",
      },
      {
        title: "Nhiều hoạt động, ít tác động",
        description:
          "Đội ngũ tạo ra nhiều tài sản truyền thông nhưng thiếu liên kết rõ ràng với mục tiêu kinh doanh.",
      },
    ],
  },
};

function formatStep(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ChallengeSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = challengeCopy[locale];

  return (
    <Section
      aria-labelledby="home-challenge-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
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
            id="home-challenge-heading"
            title={copy.headline}
          />

          <ol className="grid gap-6">
            {copy.items.map((item, index) => (
              <li
                className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-t border-[var(--color-border-default)] pt-5 sm:even:ml-8"
                key={item.title}
              >
                <span className="text-sm font-medium text-[var(--color-brand-primary)]">
                  {formatStep(index)}
                </span>
                <Stack gap="xs">
                  <h3 className="text-lg font-semibold tracking-normal text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </Stack>
              </li>
            ))}
          </ol>
        </Split>
      </Container>
    </Section>
  );
}
