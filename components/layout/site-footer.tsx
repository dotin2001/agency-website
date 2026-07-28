import Link from "next/link";
import type {
  SiteBrandContent,
  SiteFooterContent,
} from "@/lib/content/site";
import type { CallToActionContent } from "@/lib/content/types";

type FooterNavigationItem = Readonly<{
  href: string;
  label: string;
}>;

export function SiteFooter({
  brand,
  content,
  homeLink,
  legalLinks,
  navigationItems,
}: Readonly<{
  brand: SiteBrandContent;
  content: SiteFooterContent;
  homeLink: CallToActionContent;
  legalLinks: readonly CallToActionContent[];
  navigationItems: readonly FooterNavigationItem[];
}>) {
  const year = new Date().getFullYear();
  const footerNavigationItems = [homeLink, ...navigationItems];

  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-bg-page)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
            {brand.name}
          </p>
          <p className="mt-3 max-w-sm text-sm text-[var(--color-text-secondary)]">
            {content.statement}
          </p>
          {/* Placeholder contact only; not final agency contact information. */}
          <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
            {content.placeholderContact}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label={content.mainNavigationLabel}>
            <ul className="grid gap-3">
              {footerNavigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="motion-interactive text-sm text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] hover:text-[var(--color-text-primary)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="motion-interactive text-sm text-[var(--color-text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] hover:text-[var(--color-text-primary)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={content.socialLinksLabel}>
            {/* Placeholder social labels only; not final agency social links. */}
            <ul className="grid gap-3 text-sm text-[var(--color-text-secondary)]">
              {content.socialLabels.map((label) => (
                <li
                  className="w-fit rounded-full border border-[var(--color-border-default)] px-3 py-1.5"
                  key={label}
                >
                  {label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-[var(--color-border-default)] px-4 py-4 text-center text-xs text-[var(--color-text-secondary)] sm:px-6 lg:px-8">
        © {year} {brand.name}. {content.copyrightText}
      </div>
    </footer>
  );
}
