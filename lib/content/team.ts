import type {
  CallToActionContent,
  ContentItem,
  LocalizedContent,
  SectionIntroContent,
} from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

type TeamRoleVariant = "featured" | "standard";

export type TeamHeroContent = SectionIntroContent &
  Readonly<{
    disclosure: string;
  }>;

export type TeamRoleContent = Readonly<{
  description: string;
  discipline: string;
  displayName: string;
  identifier: string;
  variant: TeamRoleVariant;
}>;

export type TeamRosterContent = Readonly<{
  headline: string;
  roles: readonly [
    TeamRoleContent,
    TeamRoleContent,
    TeamRoleContent,
    TeamRoleContent,
    TeamRoleContent,
    TeamRoleContent,
    TeamRoleContent,
    TeamRoleContent,
  ];
}>;

export type TeamCollaborationContent = SectionIntroContent &
  Readonly<{
    closingStatement: string;
    principles: readonly [ContentItem, ContentItem, ContentItem, ContentItem];
    primaryCta: CallToActionContent;
    secondaryCta: CallToActionContent;
  }>;

export type TeamPageContent = Readonly<{
  collaboration: TeamCollaborationContent;
  hero: TeamHeroContent;
  roster: TeamRosterContent;
}>;

// Temporary localized Team content until approved team information and CMS content are available.
export const TEAM_CONTENT = {
  en: {
    hero: {
      eyebrow: "Our Team",
      headline: "A multidisciplinary team connected by one shared direction.",
      supportingCopy:
        "Strategy, creativity, technology, content, and performance work together from the beginning—so ideas remain coherent from the first decision through delivery.",
      disclosure:
        "The profiles below are fictional role placeholders and must be replaced with approved team information before launch.",
    },
    roster: {
      headline: "Multidisciplinary Roster",
      roles: [
        {
          identifier: "strategy-lead",
          displayName: "Strategy Lead",
          discipline: "Strategy & Brand",
          description:
            "Connects business priorities, audience understanding, positioning, and communication direction.",
          variant: "featured",
        },
        {
          identifier: "account-lead",
          displayName: "Client Partnership Lead",
          discipline: "Partnership & Delivery",
          description:
            "Keeps objectives, teams, decisions, and project delivery aligned throughout the engagement.",
          variant: "standard",
        },
        {
          identifier: "creative-lead",
          displayName: "Creative Lead",
          discipline: "Creative Direction",
          description:
            "Shapes the central ideas and creative systems that give the work distinction.",
          variant: "standard",
        },
        {
          identifier: "design-lead",
          displayName: "Design Lead",
          discipline: "Brand & Digital Design",
          description:
            "Translates creative direction into coherent visual systems across brand and digital touchpoints.",
          variant: "standard",
        },
        {
          identifier: "technology-lead",
          displayName: "Technology Lead",
          discipline: "Digital & Development",
          description:
            "Turns experience direction into responsive, reliable, and maintainable digital products.",
          variant: "featured",
        },
        {
          identifier: "content-lead",
          displayName: "Content Lead",
          discipline: "Content & Social",
          description:
            "Builds communication systems that keep ideas consistent across formats, channels, and teams.",
          variant: "standard",
        },
        {
          identifier: "media-lead",
          displayName: "Media Lead",
          discipline: "Media & Distribution",
          description:
            "Connects audiences, channels, timing, and investment with the communication direction.",
          variant: "standard",
        },
        {
          identifier: "performance-lead",
          displayName: "Performance Lead",
          discipline: "Measurement & Optimization",
          description:
            "Defines learning frameworks and turns campaign signals into clearer next decisions.",
          variant: "standard",
        },
      ],
    },
    collaboration: {
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
      primaryCta: {
        label: "Work With Us",
        href: "/contact",
      },
      secondaryCta: {
        label: "Explore Our Services",
        href: "/services",
      },
    },
  },
  vi: {
    hero: {
      eyebrow: "Đội ngũ",
      headline:
        "Một đội ngũ đa chuyên môn cùng kết nối bởi một định hướng chung.",
      supportingCopy:
        "Chiến lược, sáng tạo, công nghệ, nội dung và hiệu quả cùng phối hợp ngay từ đầu để ý tưởng luôn nhất quán từ quyết định đầu tiên đến khi hoàn thiện.",
      disclosure:
        "Các hồ sơ bên dưới chỉ là vị trí minh họa và phải được thay thế bằng thông tin đội ngũ đã được phê duyệt trước khi ra mắt.",
    },
    roster: {
      headline: "Đội ngũ đa chuyên môn",
      roles: [
        {
          identifier: "strategy-lead",
          displayName: "Phụ trách chiến lược",
          discipline: "Chiến lược & Thương hiệu",
          description:
            "Kết nối ưu tiên kinh doanh, sự thấu hiểu khách hàng, định vị và định hướng truyền thông.",
          variant: "featured",
        },
        {
          identifier: "account-lead",
          displayName: "Phụ trách đối tác khách hàng",
          discipline: "Hợp tác & Triển khai",
          description:
            "Duy trì sự đồng thuận giữa mục tiêu, đội ngũ, quyết định và quá trình triển khai dự án.",
          variant: "standard",
        },
        {
          identifier: "creative-lead",
          displayName: "Phụ trách sáng tạo",
          discipline: "Định hướng sáng tạo",
          description:
            "Định hình ý tưởng trung tâm và hệ thống sáng tạo giúp dự án tạo dấu ấn khác biệt.",
          variant: "standard",
        },
        {
          identifier: "design-lead",
          displayName: "Phụ trách thiết kế",
          discipline: "Thiết kế thương hiệu & Kỹ thuật số",
          description:
            "Chuyển định hướng sáng tạo thành hệ thống hình ảnh nhất quán trên thương hiệu và các điểm chạm số.",
          variant: "standard",
        },
        {
          identifier: "technology-lead",
          displayName: "Phụ trách công nghệ",
          discipline: "Kỹ thuật số & Phát triển",
          description:
            "Chuyển định hướng trải nghiệm thành các sản phẩm số linh hoạt, đáng tin cậy và dễ duy trì.",
          variant: "featured",
        },
        {
          identifier: "content-lead",
          displayName: "Phụ trách nội dung",
          discipline: "Nội dung & Mạng xã hội",
          description:
            "Xây dựng hệ thống truyền thông giúp ý tưởng nhất quán giữa định dạng, kênh và đội ngũ.",
          variant: "standard",
        },
        {
          identifier: "media-lead",
          displayName: "Phụ trách media",
          discipline: "Media & Phân phối",
          description:
            "Kết nối đối tượng, kênh, thời điểm và nguồn lực với định hướng truyền thông.",
          variant: "standard",
        },
        {
          identifier: "performance-lead",
          displayName: "Phụ trách hiệu quả",
          discipline: "Đo lường & Tối ưu",
          description:
            "Xây dựng khung học hỏi và chuyển tín hiệu chiến dịch thành những quyết định tiếp theo rõ ràng hơn.",
          variant: "standard",
        },
      ],
    },
    collaboration: {
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
      primaryCta: {
        label: "Hợp tác cùng chúng tôi",
        href: "/contact",
      },
      secondaryCta: {
        label: "Khám phá dịch vụ",
        href: "/services",
      },
    },
  },
} as const satisfies LocalizedContent<TeamPageContent>;

export function getTeamContent(locale: Locale) {
  return TEAM_CONTENT[locale];
}
