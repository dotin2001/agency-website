import type { Metadata } from "next";
import { TeamCollaborationSection } from "@/components/sections/team/team-collaboration-section";
import { TeamHeroSection } from "@/components/sections/team/team-hero-section";
import { TeamRosterSection } from "@/components/sections/team/team-roster-section";
import { getTeamContent } from "@/lib/content/team";
import type { Locale } from "@/lib/i18n/locales";
import {
  buildLocalizedMetadata,
  getPrimaryRouteMetadataTitle,
} from "@/lib/seo/metadata";

type TeamPageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

function prefixLocale(locale: Locale, href: string) {
  return `/${locale}${href}`;
}

export async function generateMetadata({
  params,
}: TeamPageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const content = getTeamContent(currentLocale);

  return buildLocalizedMetadata({
    description: content.hero.supportingCopy,
    locale: currentLocale,
    routePath: "/team",
    title: getPrimaryRouteMetadataTitle(currentLocale, "team"),
  });
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const content = getTeamContent(currentLocale);

  return (
    <>
      <TeamHeroSection
        content={content.hero}
        rolePreview={[
          {
            discipline: content.roster.roles[0].discipline,
            displayName: content.roster.roles[0].displayName,
          },
          {
            discipline: content.roster.roles[2].discipline,
            displayName: content.roster.roles[2].displayName,
          },
          {
            discipline: content.roster.roles[4].discipline,
            displayName: content.roster.roles[4].displayName,
          },
        ]}
      />
      <TeamRosterSection content={content.roster} />
      <TeamCollaborationSection
        content={content.collaboration}
        primaryCtaHref={prefixLocale(
          currentLocale,
          content.collaboration.primaryCta.href,
        )}
        secondaryCtaHref={prefixLocale(
          currentLocale,
          content.collaboration.secondaryCta.href,
        )}
      />
    </>
  );
}
