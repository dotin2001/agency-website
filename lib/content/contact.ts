import type {
  ContentItem,
  LocalizedContent,
  SectionIntroContent,
} from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

type ContactFieldName =
  | "name"
  | "email"
  | "company"
  | "projectType"
  | "budget"
  | "timeline"
  | "details"
  | "consent";

type ContactSelectOptionContent = Readonly<{
  label: string;
  value: string;
}>;

type ContactTextFieldContent = Readonly<{
  autoComplete: string;
  id: string;
  inputType: "email" | "text";
  label: string;
  maxLength: number;
  name: ContactFieldName;
  required: boolean;
  type: "input";
}>;

type ContactSelectFieldContent = Readonly<{
  defaultOption: ContactSelectOptionContent & Readonly<{ disabled: true }>;
  id: string;
  label: string;
  name: ContactFieldName;
  options: readonly ContactSelectOptionContent[];
  required: boolean;
  type: "select";
}>;

type ContactTextareaFieldContent = Readonly<{
  helperText: string;
  id: string;
  label: string;
  maxLength: number;
  minLength: number;
  name: ContactFieldName;
  required: boolean;
  rows: number;
  type: "textarea";
}>;

type ContactCheckboxFieldContent = Readonly<{
  id: string;
  label: string;
  name: ContactFieldName;
  required: true;
  type: "checkbox";
}>;

export type ContactFieldContent =
  | ContactTextFieldContent
  | ContactSelectFieldContent
  | ContactTextareaFieldContent
  | ContactCheckboxFieldContent;

export type ContactHeroContent = SectionIntroContent &
  Readonly<{
    secondaryStatement: string;
  }>;

export type ContactFormSectionContent = SectionIntroContent &
  Readonly<{
    optionalIndicatorText: string;
    previewMessage: string;
    requiredIndicatorText: string;
    submitLabel: string;
  }>;

export type ContactExpectationsContent = Readonly<{
  alternativeContactCopy: string;
  alternativeContactHeadline: string;
  eyebrow: string;
  headline: string;
  steps: readonly [ContentItem, ContentItem, ContentItem];
}>;

export type ContactPageContent = Readonly<{
  expectations: ContactExpectationsContent;
  fields: readonly [
    ContactTextFieldContent,
    ContactTextFieldContent,
    ContactTextFieldContent,
    ContactSelectFieldContent,
    ContactSelectFieldContent,
    ContactSelectFieldContent,
    ContactTextareaFieldContent,
    ContactCheckboxFieldContent,
  ];
  formSection: ContactFormSectionContent;
  hero: ContactHeroContent;
}>;

export const CONTACT_CONTENT = {
  en: {
    hero: {
      eyebrow: "Contact",
      headline: "Tell us what you are trying to change.",
      supportingCopy:
        "Share the challenge, the context, and where the project needs to go. We will use that information to understand whether we are the right team and how the conversation should begin.",
      secondaryStatement:
        "You do not need a finished brief. A clear problem, priority, or ambition is enough to start.",
    },
    formSection: {
      eyebrow: "Project Inquiry",
      headline: "Start with the essentials.",
      supportingCopy:
        "This form is currently a front-end foundation and does not submit data. A secure delivery service will be connected before launch.",
      requiredIndicatorText: "Required",
      optionalIndicatorText: "Optional",
      submitLabel: "Prepare Inquiry",
      previewMessage:
        "Your inquiry is ready for review. Submission delivery will be enabled before launch.",
    },
    fields: [
      {
        type: "input",
        id: "contact-name",
        name: "name",
        label: "Your name",
        inputType: "text",
        autoComplete: "name",
        required: true,
        maxLength: 100,
      },
      {
        type: "input",
        id: "contact-email",
        name: "email",
        label: "Work email",
        inputType: "email",
        autoComplete: "email",
        required: true,
        maxLength: 254,
      },
      {
        type: "input",
        id: "contact-company",
        name: "company",
        label: "Company or organization",
        inputType: "text",
        autoComplete: "organization",
        required: false,
        maxLength: 150,
      },
      {
        type: "select",
        id: "contact-project-type",
        name: "projectType",
        label: "What do you need help with?",
        required: true,
        defaultOption: {
          label: "Select a project type",
          value: "",
          disabled: true,
        },
        options: [
          { label: "Brand strategy and identity", value: "brand" },
          { label: "Creative campaign", value: "campaign" },
          { label: "Website or digital experience", value: "digital" },
          { label: "Content and social", value: "content" },
          { label: "Media and performance", value: "performance" },
          { label: "Integrated project", value: "integrated" },
          { label: "Something else", value: "other" },
        ],
      },
      {
        type: "select",
        id: "contact-budget",
        name: "budget",
        label: "Estimated budget",
        required: false,
        defaultOption: {
          label: "Select a range",
          value: "",
          disabled: true,
        },
        options: [
          { label: "Under $10,000", value: "under-10k" },
          { label: "$10,000–$25,000", value: "10k-25k" },
          { label: "$25,000–$50,000", value: "25k-50k" },
          { label: "$50,000–$100,000", value: "50k-100k" },
          { label: "Over $100,000", value: "over-100k" },
          { label: "Not defined yet", value: "undefined" },
        ],
      },
      {
        type: "select",
        id: "contact-timeline",
        name: "timeline",
        label: "Target timeline",
        required: false,
        defaultOption: {
          label: "Select a timeline",
          value: "",
          disabled: true,
        },
        options: [
          { label: "As soon as possible", value: "asap" },
          { label: "Within 1–2 months", value: "1-2-months" },
          { label: "Within 3–6 months", value: "3-6-months" },
          { label: "More than 6 months", value: "over-6-months" },
          { label: "Still exploring", value: "exploring" },
        ],
      },
      {
        type: "textarea",
        id: "contact-details",
        name: "details",
        label: "Tell us about the project",
        required: true,
        helperText:
          "Include the challenge, priorities, audience, existing materials, and what success should look like.",
        minLength: 20,
        maxLength: 2000,
        rows: 8,
      },
      {
        type: "checkbox",
        id: "contact-consent",
        name: "consent",
        label:
          "I understand that this form is currently a non-submitting interface preview.",
        required: true,
      },
    ],
    expectations: {
      eyebrow: "What Happens Next",
      headline: "A clear first conversation before any proposal.",
      steps: [
        {
          title: "We review the context",
          description:
            "We look at the challenge, priorities, timeline, internal team, and the information already available.",
        },
        {
          title: "We clarify the right starting point",
          description:
            "A short conversation helps determine whether the need is strategic, creative, digital, performance-focused, or integrated.",
        },
        {
          title: "We define the next step",
          description:
            "When there is a suitable fit, the next step may be a focused workshop, discovery phase, or scoped proposal.",
        },
      ],
      alternativeContactHeadline: "Prefer another way to begin?",
      alternativeContactCopy:
        "Approved email, phone, office, and booking information will be added before launch. Until then, this page intentionally avoids publishing placeholder contact details.",
    },
  },
  vi: {
    hero: {
      eyebrow: "Liên hệ",
      headline: "Hãy chia sẻ điều bạn đang muốn thay đổi.",
      supportingCopy:
        "Hãy cho chúng tôi biết bài toán, bối cảnh và hướng mà dự án cần tiến tới. Những thông tin này giúp chúng tôi hiểu liệu mình có phải là đội ngũ phù hợp và cuộc trao đổi nên bắt đầu như thế nào.",
      secondaryStatement:
        "Bạn không cần chuẩn bị một bản brief hoàn chỉnh. Một vấn đề, ưu tiên hoặc tham vọng rõ ràng là đủ để bắt đầu.",
    },
    formSection: {
      eyebrow: "Thông tin dự án",
      headline: "Bắt đầu từ những thông tin cần thiết.",
      supportingCopy:
        "Biểu mẫu hiện chỉ là phần giao diện nền tảng và chưa gửi dữ liệu. Hệ thống tiếp nhận an toàn sẽ được kết nối trước khi ra mắt.",
      requiredIndicatorText: "Bắt buộc",
      optionalIndicatorText: "Không bắt buộc",
      submitLabel: "Chuẩn bị nội dung",
      previewMessage:
        "Nội dung của bạn đã sẵn sàng để kiểm tra. Chức năng gửi sẽ được kích hoạt trước khi ra mắt.",
    },
    fields: [
      {
        type: "input",
        id: "contact-name",
        name: "name",
        label: "Tên của bạn",
        inputType: "text",
        autoComplete: "name",
        required: true,
        maxLength: 100,
      },
      {
        type: "input",
        id: "contact-email",
        name: "email",
        label: "Email công việc",
        inputType: "email",
        autoComplete: "email",
        required: true,
        maxLength: 254,
      },
      {
        type: "input",
        id: "contact-company",
        name: "company",
        label: "Công ty hoặc tổ chức",
        inputType: "text",
        autoComplete: "organization",
        required: false,
        maxLength: 150,
      },
      {
        type: "select",
        id: "contact-project-type",
        name: "projectType",
        label: "Bạn cần hỗ trợ về lĩnh vực nào?",
        required: true,
        defaultOption: {
          label: "Chọn loại dự án",
          value: "",
          disabled: true,
        },
        options: [
          { label: "Chiến lược và nhận diện thương hiệu", value: "brand" },
          { label: "Chiến dịch sáng tạo", value: "campaign" },
          { label: "Website hoặc trải nghiệm số", value: "digital" },
          { label: "Nội dung và mạng xã hội", value: "content" },
          { label: "Media và hiệu quả", value: "performance" },
          { label: "Dự án tích hợp", value: "integrated" },
          { label: "Nhu cầu khác", value: "other" },
        ],
      },
      {
        type: "select",
        id: "contact-budget",
        name: "budget",
        label: "Ngân sách dự kiến",
        required: false,
        defaultOption: {
          label: "Chọn khoảng ngân sách",
          value: "",
          disabled: true,
        },
        options: [
          { label: "Dưới $10,000", value: "under-10k" },
          { label: "$10,000–$25,000", value: "10k-25k" },
          { label: "$25,000–$50,000", value: "25k-50k" },
          { label: "$50,000–$100,000", value: "50k-100k" },
          { label: "Trên $100,000", value: "over-100k" },
          { label: "Chưa xác định", value: "undefined" },
        ],
      },
      {
        type: "select",
        id: "contact-timeline",
        name: "timeline",
        label: "Thời gian dự kiến",
        required: false,
        defaultOption: {
          label: "Chọn thời gian",
          value: "",
          disabled: true,
        },
        options: [
          { label: "Sớm nhất có thể", value: "asap" },
          { label: "Trong 1–2 tháng", value: "1-2-months" },
          { label: "Trong 3–6 tháng", value: "3-6-months" },
          { label: "Trên 6 tháng", value: "over-6-months" },
          { label: "Đang tìm hiểu", value: "exploring" },
        ],
      },
      {
        type: "textarea",
        id: "contact-details",
        name: "details",
        label: "Chia sẻ về dự án",
        required: true,
        helperText:
          "Hãy chia sẻ bài toán, ưu tiên, đối tượng, tài liệu hiện có và hình dung về kết quả mong muốn.",
        minLength: 20,
        maxLength: 2000,
        rows: 8,
      },
      {
        type: "checkbox",
        id: "contact-consent",
        name: "consent",
        label:
          "Tôi hiểu rằng biểu mẫu hiện chỉ là bản xem trước giao diện và chưa gửi dữ liệu.",
        required: true,
      },
    ],
    expectations: {
      eyebrow: "Bước tiếp theo",
      headline: "Một cuộc trao đổi rõ ràng trước khi xây dựng đề xuất.",
      steps: [
        {
          title: "Chúng tôi xem xét bối cảnh",
          description:
            "Chúng tôi tìm hiểu bài toán, ưu tiên, thời gian, đội ngũ nội bộ và những thông tin đã có.",
        },
        {
          title: "Chúng tôi làm rõ điểm bắt đầu phù hợp",
          description:
            "Một cuộc trao đổi ngắn giúp xác định nhu cầu thuộc chiến lược, sáng tạo, kỹ thuật số, hiệu quả hay cần mô hình tích hợp.",
        },
        {
          title: "Chúng tôi xác định bước tiếp theo",
          description:
            "Khi hai bên phù hợp, bước tiếp theo có thể là workshop tập trung, giai đoạn khám phá hoặc một đề xuất phạm vi công việc.",
        },
      ],
      alternativeContactHeadline: "Bạn muốn bắt đầu theo cách khác?",
      alternativeContactCopy:
        "Email, số điện thoại, văn phòng và liên kết đặt lịch đã được phê duyệt sẽ được bổ sung trước khi ra mắt. Hiện tại trang này chủ động không hiển thị thông tin liên hệ tạm thời.",
    },
  },
} as const satisfies LocalizedContent<ContactPageContent>;

export function getContactContent(locale: Locale) {
  return CONTACT_CONTENT[locale];
}
