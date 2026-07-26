import Link from "next/link";

type Locale = "en" | "vi";

const labels = {
  en: {
    statement: "A temporary creative and digital agency site shell.",
    mainNavigation: "Footer main navigation",
    socialLinks: "Social links",
    privacy: "Privacy",
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    team: "Team",
    contact: "Contact",
    copyright: "All rights reserved.",
  },
  vi: {
    statement: "Khung website tạm thời cho agency sáng tạo và kỹ thuật số.",
    mainNavigation: "Điều hướng chính ở chân trang",
    socialLinks: "Liên kết mạng xã hội",
    privacy: "Quyền riêng tư",
    home: "Trang chủ",
    about: "Giới thiệu",
    services: "Dịch vụ",
    projects: "Dự án",
    team: "Đội ngũ",
    contact: "Liên hệ",
    copyright: "Đã đăng ký bản quyền.",
  },
} as const;

function getNavigationItems(locale: Locale) {
  const copy = labels[locale];

  return [
    { href: `/${locale}`, label: copy.home },
    { href: `/${locale}/about`, label: copy.about },
    { href: `/${locale}/services`, label: copy.services },
    { href: `/${locale}/projects`, label: copy.projects },
    { href: `/${locale}/team`, label: copy.team },
    { href: `/${locale}/contact`, label: copy.contact },
  ];
}

export function SiteFooter({ locale }: Readonly<{ locale: Locale }>) {
  const copy = labels[locale];
  const navigationItems = getNavigationItems(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
            CHARM MEDIA
          </p>
          <p className="mt-3 max-w-sm text-sm text-[var(--color-text-secondary)]">
            {copy.statement}
          </p>
          {/* Placeholder contact only; not final agency contact information. */}
          <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
            hello@example.com
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label={copy.mainNavigation}>
            <ul className="grid gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="text-sm text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
                  href={`/${locale}/privacy`}
                >
                  {copy.privacy}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={copy.socialLinks}>
            {/* Placeholder social labels only; not final agency social links. */}
            <ul className="grid gap-2 text-sm text-[var(--color-text-secondary)]">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-[var(--color-border-default)] px-4 py-4 text-center text-xs text-[var(--color-text-secondary)] sm:px-6 lg:px-8">
        © {year} CHARM MEDIA. {copy.copyright}
      </div>
    </footer>
  );
}
