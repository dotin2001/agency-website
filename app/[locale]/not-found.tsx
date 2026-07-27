import { ButtonLink } from "@/components/ui/button-link";
import { getSiteContent } from "@/lib/content/site";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

function prefixLocale(href: string) {
  return href === "/" ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${href}`;
}

export default function LocaleNotFound() {
  const content = getSiteContent(DEFAULT_LOCALE).notFound;
  const primaryCta = {
    ...content.primaryCta,
    href: prefixLocale(content.primaryCta.href),
  };

  return (
    <main>
      <h1>{content.headline}</h1>
      <p>{content.supportingCopy}</p>
      <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
    </main>
  );
}
