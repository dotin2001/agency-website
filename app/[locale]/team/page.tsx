import { TeamCollaborationSection } from "@/components/sections/team/team-collaboration-section";
import { TeamHeroSection } from "@/components/sections/team/team-hero-section";
import { TeamRosterSection } from "@/components/sections/team/team-roster-section";

type Locale = "en" | "vi";

export default async function TeamPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <TeamHeroSection locale={locale as Locale} />
      <TeamRosterSection locale={locale as Locale} />
      <TeamCollaborationSection locale={locale as Locale} />
    </>
  );
}
