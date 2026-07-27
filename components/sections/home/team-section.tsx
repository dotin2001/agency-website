import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Split } from "@/components/layout/split";
import { Stack } from "@/components/layout/stack";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamMemberCard } from "@/components/ui/team-member-card";

type Locale = "en" | "vi";

type LocalizedTeamMember = {
  description: string;
  discipline: string;
  displayName: string;
};

type PlaceholderTeamMember = {
  content: Record<Locale, LocalizedTeamMember>;
  id: string;
};

type TeamCopy = {
  collaborationStatement: string;
  cta: string;
  eyebrow: string;
  headline: string;
  supportingCopy: string;
};

// Temporary localized section copy until the production content system is implemented.
const teamCopy: Record<Locale, TeamCopy> = {
  en: {
    eyebrow: "The People Behind the Work",
    headline: "Different disciplines. One shared direction.",
    supportingCopy:
      "Strategists, creatives, developers, content specialists, and performance teams work together from the beginning—so ideas remain coherent from direction to delivery.",
    collaborationStatement:
      "We do not hand work from one department to another. We build the solution together.",
    cta: "Meet the Team",
  },
  vi: {
    eyebrow: "Đội ngũ phía sau dự án",
    headline: "Nhiều chuyên môn. Một định hướng chung.",
    supportingCopy:
      "Chiến lược, sáng tạo, phát triển, nội dung và hiệu quả cùng phối hợp ngay từ đầu để ý tưởng luôn nhất quán từ định hướng đến triển khai.",
    collaborationStatement:
      "Chúng tôi không chuyển giao công việc tuần tự giữa các phòng ban. Chúng tôi cùng xây dựng giải pháp.",
    cta: "Gặp gỡ đội ngũ",
  },
};

// Fictional role placeholders until real team data is available.
const placeholderTeamMembers: Array<PlaceholderTeamMember> = [
  {
    id: "strategy",
    content: {
      en: {
        displayName: "Strategy Lead",
        discipline: "Strategy & Brand",
        description:
          "Connects business priorities, audience understanding, and brand direction.",
      },
      vi: {
        displayName: "Phụ trách chiến lược",
        discipline: "Chiến lược & Thương hiệu",
        description:
          "Kết nối ưu tiên kinh doanh, sự thấu hiểu khách hàng và định hướng thương hiệu.",
      },
    },
  },
  {
    id: "creative",
    content: {
      en: {
        displayName: "Creative Lead",
        discipline: "Creative & Design",
        description:
          "Shapes the ideas and visual systems that give the work distinction.",
      },
      vi: {
        displayName: "Phụ trách sáng tạo",
        discipline: "Sáng tạo & Thiết kế",
        description:
          "Định hình ý tưởng và hệ thống hình ảnh giúp dự án tạo dấu ấn khác biệt.",
      },
    },
  },
  {
    id: "technology",
    content: {
      en: {
        displayName: "Technology Lead",
        discipline: "Digital & Development",
        description:
          "Turns creative direction into responsive and reliable digital experiences.",
      },
      vi: {
        displayName: "Phụ trách công nghệ",
        discipline: "Kỹ thuật số & Phát triển",
        description:
          "Chuyển định hướng sáng tạo thành những trải nghiệm số linh hoạt và đáng tin cậy.",
      },
    },
  },
  {
    id: "growth",
    content: {
      en: {
        displayName: "Growth Lead",
        discipline: "Content & Performance",
        description:
          "Connects communication, distribution, learning, and measurable outcomes.",
      },
      vi: {
        displayName: "Phụ trách tăng trưởng",
        discipline: "Nội dung & Hiệu quả",
        description:
          "Kết nối truyền thông, phân phối, quá trình học hỏi và kết quả đo lường.",
      },
    },
  },
];

export function TeamSection({ locale }: Readonly<{ locale: Locale }>) {
  const copy = teamCopy[locale];
  const [featuredMember, ...supportingMembers] = placeholderTeamMembers;

  return (
    <Section
      aria-labelledby="home-team-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <Split gap="xl" variant="content-media">
            <SectionHeader
              className="max-w-3xl"
              description={copy.supportingCopy}
              eyebrow={
                <span className="border-l-2 border-[var(--color-brand-primary)] pl-3">
                  {copy.eyebrow}
                </span>
              }
              headingLevel="h2"
              id="home-team-heading"
              title={copy.headline}
            />

            <Stack
              className="border-l border-[var(--color-border-default)] pl-6"
              gap="lg"
            >
              <p className="max-w-md text-xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)]">
                {copy.collaborationStatement}
              </p>
              <ButtonLink
                href={`/${locale}/team`}
                size="large"
                variant="secondary"
              >
                {copy.cta}
              </ButtonLink>
            </Stack>
          </Split>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <TeamMemberCard
              className="lg:col-span-6"
              description={featuredMember.content[locale].description}
              discipline={featuredMember.content[locale].discipline}
              displayName={featuredMember.content[locale].displayName}
              index={0}
              variant="featured"
            />

            <div className="grid gap-6 md:grid-cols-3 lg:col-span-6">
              {supportingMembers.map((member, index) => {
                const content = member.content[locale];

                return (
                  <TeamMemberCard
                    description={content.description}
                    discipline={content.discipline}
                    displayName={content.displayName}
                    index={index + 1}
                    key={member.id}
                    variant="standard"
                  />
                );
              })}
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
