import type { LocalizedContent, SectionIntroContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/locales";

export type PrivacyHeroContent = SectionIntroContent &
  Readonly<{
    draftStatus: string;
  }>;

export type PrivacyPolicySectionContent = Readonly<{
  body: string;
  heading: string;
}>;

export type PrivacyContentSectionContent = Readonly<{
  finalDisclosure: string;
  headline: string;
  sections: readonly [
    PrivacyPolicySectionContent,
    PrivacyPolicySectionContent,
    PrivacyPolicySectionContent,
    PrivacyPolicySectionContent,
    PrivacyPolicySectionContent,
    PrivacyPolicySectionContent,
    PrivacyPolicySectionContent,
  ];
}>;

export type PrivacyPageContent = Readonly<{
  content: PrivacyContentSectionContent;
  hero: PrivacyHeroContent;
}>;

// Temporary localized Privacy content until reviewed, replaced, or approved by qualified legal counsel.
export const PRIVACY_CONTENT = {
  en: {
    hero: {
      eyebrow: "Privacy",
      headline:
        "A transparent foundation for how this website handles information.",
      supportingCopy:
        "This page describes the current behavior of the website during development. It is a temporary policy foundation, not legal advice, and must be reviewed by qualified legal counsel before launch.",
      draftStatus:
        "Draft foundation. Not legal advice. Must be reviewed and replaced or approved by qualified legal counsel before production launch.",
    },
    content: {
      headline: "Privacy Information",
      sections: [
        {
          heading: "Current Development Status",
          body: "This website is still under development. Some interfaces demonstrate intended future functionality but are not connected to production services.",
        },
        {
          heading: "Project Inquiry Form",
          body: "The project inquiry form is currently a non-submitting interface preview. Information entered into the form is validated in the browser but is not transmitted, stored, emailed, or sent to a customer relationship management system.",
        },
        {
          heading: "Theme Preference",
          body: "The website may store the selected appearance preference in the browser using local storage under the key charm-media-theme. This preference is used only to restore the selected light, dark, or system appearance.",
        },
        {
          heading: "Analytics and Advertising",
          body: "This project does not currently include a project-configured analytics platform, advertising pixel, behavioral profiling system, or remarketing integration. These disclosures must be updated before any such service is enabled.",
        },
        {
          heading: "Third-Party Services",
          body: "No production email delivery, CRM, booking, payment, file-upload, CAPTCHA, or content-management service is currently connected. Future integrations may process information under their own terms and privacy practices.",
        },
        {
          heading: "Data Retention and Security",
          body: "Because the current inquiry form does not submit information, this project does not currently define a production retention period for inquiry data. Retention, access control, deletion, and security procedures must be established before data collection begins.",
        },
        {
          heading: "Policy Updates and Contact Information",
          body: "This draft must be updated when the website’s services, data flows, vendors, or legal requirements change. Approved privacy contact information will be added before launch.",
        },
      ],
      finalDisclosure:
        "Draft policy foundation — not legal advice. Legal review is required before production launch.",
    },
  },
  vi: {
    hero: {
      eyebrow: "Quyền riêng tư",
      headline: "Nền tảng minh bạch về cách website xử lý thông tin.",
      supportingCopy:
        "Trang này mô tả cách website đang hoạt động trong giai đoạn phát triển. Đây chỉ là nội dung chính sách nền tảng tạm thời, không phải tư vấn pháp lý và phải được chuyên gia pháp lý xem xét trước khi ra mắt.",
      draftStatus:
        "Nền tảng dự thảo. Không phải tư vấn pháp lý. Phải được chuyên gia pháp lý xem xét và thay thế hoặc phê duyệt trước khi ra mắt production.",
    },
    content: {
      headline: "Thông tin quyền riêng tư",
      sections: [
        {
          heading: "Trạng thái phát triển hiện tại",
          body: "Website vẫn đang trong quá trình phát triển. Một số giao diện minh họa chức năng dự kiến trong tương lai nhưng chưa được kết nối với dịch vụ production.",
        },
        {
          heading: "Biểu mẫu thông tin dự án",
          body: "Biểu mẫu thông tin dự án hiện chỉ là bản xem trước giao diện và chưa gửi dữ liệu. Thông tin nhập vào được kiểm tra ngay trên trình duyệt nhưng không được truyền đi, lưu trữ, gửi email hoặc chuyển đến hệ thống quản lý quan hệ khách hàng.",
        },
        {
          heading: "Tùy chọn giao diện",
          body: "Website có thể lưu lựa chọn giao diện trong bộ nhớ cục bộ của trình duyệt với khóa charm-media-theme. Tùy chọn này chỉ được sử dụng để khôi phục chế độ sáng, tối hoặc theo hệ thống đã chọn.",
        },
        {
          heading: "Phân tích và quảng cáo",
          body: "Dự án hiện chưa tích hợp nền tảng phân tích, pixel quảng cáo, hệ thống lập hồ sơ hành vi hoặc công cụ remarketing do dự án cấu hình. Nội dung công bố phải được cập nhật trước khi bất kỳ dịch vụ nào như vậy được kích hoạt.",
        },
        {
          heading: "Dịch vụ bên thứ ba",
          body: "Hiện chưa có dịch vụ production nào về gửi email, CRM, đặt lịch, thanh toán, tải tệp, CAPTCHA hoặc quản lý nội dung được kết nối. Các tích hợp trong tương lai có thể xử lý thông tin theo điều khoản và chính sách quyền riêng tư riêng.",
        },
        {
          heading: "Lưu trữ và bảo mật dữ liệu",
          body: "Vì biểu mẫu hiện chưa gửi thông tin, dự án chưa xác định thời hạn lưu trữ production cho dữ liệu liên hệ. Quy trình lưu trữ, kiểm soát truy cập, xóa dữ liệu và bảo mật phải được thiết lập trước khi bắt đầu thu thập dữ liệu.",
        },
        {
          heading: "Cập nhật chính sách và thông tin liên hệ",
          body: "Bản dự thảo này phải được cập nhật khi dịch vụ, luồng dữ liệu, nhà cung cấp hoặc yêu cầu pháp lý của website thay đổi. Thông tin liên hệ về quyền riêng tư đã được phê duyệt sẽ được bổ sung trước khi ra mắt.",
        },
      ],
      finalDisclosure:
        "Nền tảng chính sách dự thảo — không phải tư vấn pháp lý. Cần được xem xét pháp lý trước khi ra mắt production.",
    },
  },
} as const satisfies LocalizedContent<PrivacyPageContent>;

export function getPrivacyContent(locale: Locale) {
  return PRIVACY_CONTENT[locale];
}
