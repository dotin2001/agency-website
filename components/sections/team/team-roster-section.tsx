import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import { SectionHeader } from "@/components/ui/section-header";

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

const headings: Record<Locale, string> = {
  en: "Multidisciplinary Roster",
  vi: "Đội ngũ đa chuyên môn",
};

// Fictional role placeholders until approved team information and CMS content are available.
const placeholderTeamMembers: readonly PlaceholderTeamMember[] = [
  {
    id: "strategy-lead",
    content: {
      en: {
        displayName: "Strategy Lead",
        discipline: "Strategy & Brand",
        description:
          "Connects business priorities, audience understanding, positioning, and communication direction.",
      },
      vi: {
        displayName: "Phụ trách chiến lược",
        discipline: "Chiến lược & Thương hiệu",
        description:
          "Kết nối ưu tiên kinh doanh, sự thấu hiểu khách hàng, định vị và định hướng truyền thông.",
      },
    },
  },
  {
    id: "account-lead",
    content: {
      en: {
        displayName: "Client Partnership Lead",
        discipline: "Partnership & Delivery",
        description:
          "Keeps objectives, teams, decisions, and project delivery aligned throughout the engagement.",
      },
      vi: {
        displayName: "Phụ trách đối tác khách hàng",
        discipline: "Hợp tác & Triển khai",
        description:
          "Duy trì sự đồng thuận giữa mục tiêu, đội ngũ, quyết định và quá trình triển khai dự án.",
      },
    },
  },
  {
    id: "creative-lead",
    content: {
      en: {
        displayName: "Creative Lead",
        discipline: "Creative Direction",
        description:
          "Shapes the central ideas and creative systems that give the work distinction.",
      },
      vi: {
        displayName: "Phụ trách sáng tạo",
        discipline: "Định hướng sáng tạo",
        description:
          "Định hình ý tưởng trung tâm và hệ thống sáng tạo giúp dự án tạo dấu ấn khác biệt.",
      },
    },
  },
  {
    id: "design-lead",
    content: {
      en: {
        displayName: "Design Lead",
        discipline: "Brand & Digital Design",
        description:
          "Translates creative direction into coherent visual systems across brand and digital touchpoints.",
      },
      vi: {
        displayName: "Phụ trách thiết kế",
        discipline: "Thiết kế thương hiệu & Kỹ thuật số",
        description:
          "Chuyển định hướng sáng tạo thành hệ thống hình ảnh nhất quán trên thương hiệu và các điểm chạm số.",
      },
    },
  },
  {
    id: "technology-lead",
    content: {
      en: {
        displayName: "Technology Lead",
        discipline: "Digital & Development",
        description:
          "Turns experience direction into responsive, reliable, and maintainable digital products.",
      },
      vi: {
        displayName: "Phụ trách công nghệ",
        discipline: "Kỹ thuật số & Phát triển",
        description:
          "Chuyển định hướng trải nghiệm thành các sản phẩm số linh hoạt, đáng tin cậy và dễ duy trì.",
      },
    },
  },
  {
    id: "content-lead",
    content: {
      en: {
        displayName: "Content Lead",
        discipline: "Content & Social",
        description:
          "Builds communication systems that keep ideas consistent across formats, channels, and teams.",
      },
      vi: {
        displayName: "Phụ trách nội dung",
        discipline: "Nội dung & Mạng xã hội",
        description:
          "Xây dựng hệ thống truyền thông giúp ý tưởng nhất quán giữa định dạng, kênh và đội ngũ.",
      },
    },
  },
  {
    id: "media-lead",
    content: {
      en: {
        displayName: "Media Lead",
        discipline: "Media & Distribution",
        description:
          "Connects audiences, channels, timing, and investment with the communication direction.",
      },
      vi: {
        displayName: "Phụ trách media",
        discipline: "Media & Phân phối",
        description:
          "Kết nối đối tượng, kênh, thời điểm và nguồn lực với định hướng truyền thông.",
      },
    },
  },
  {
    id: "performance-lead",
    content: {
      en: {
        displayName: "Performance Lead",
        discipline: "Measurement & Optimization",
        description:
          "Defines learning frameworks and turns campaign signals into clearer next decisions.",
      },
      vi: {
        displayName: "Phụ trách hiệu quả",
        discipline: "Đo lường & Tối ưu",
        description:
          "Xây dựng khung học hỏi và chuyển tín hiệu chiến dịch thành những quyết định tiếp theo rõ ràng hơn.",
      },
    },
  },
];

const rosterLayoutClasses = [
  "md:col-span-2 lg:col-span-7",
  "lg:col-span-5 lg:mt-12",
  "lg:col-span-4",
  "lg:col-span-4 lg:mt-10",
  "md:col-span-2 lg:col-span-8",
  "lg:col-span-4 lg:mt-10",
  "lg:col-span-6",
  "lg:col-span-6 lg:mt-12",
] as const;

export function TeamRosterSection({ locale }: Readonly<{ locale: Locale }>) {
  return (
    <Section
      aria-labelledby="team-roster-heading"
      className="relative border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      spacing="chapter"
    >
      <Container size="page">
        <Stack gap="xl">
          <SectionHeader
            className="max-w-3xl"
            headingLevel="h2"
            id="team-roster-heading"
            title={headings[locale]}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:items-start">
            {placeholderTeamMembers.map((member, index) => {
              const content = member.content[locale];
              const isFeatured = index === 0 || index === 4;

              return (
                <TeamMemberCard
                  className={rosterLayoutClasses[index]}
                  description={content.description}
                  discipline={content.discipline}
                  displayName={content.displayName}
                  index={index}
                  key={member.id}
                  variant={isFeatured ? "featured" : "standard"}
                />
              );
            })}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
