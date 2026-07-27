import type { MetadataRoute } from "next";
import { PROJECT_SLUGS } from "@/lib/content/projects";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n/locales";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";

type SitemapRoute = Readonly<{
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  path: string;
  priority: number;
}>;

const staticRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/team", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
] as const satisfies readonly SitemapRoute[];

function getAbsoluteUrl(locale: Locale, routePath: string) {
  const metadata = buildLocalizedMetadata({
    description: "",
    locale,
    routePath,
    title: "",
  });
  const canonical = metadata.alternates?.canonical;

  return canonical instanceof URL ? canonical.toString() : String(canonical);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedStaticRoutes = SUPPORTED_LOCALES.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: getAbsoluteUrl(locale, route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  );

  const localizedProjectRoutes = SUPPORTED_LOCALES.flatMap((locale) =>
    PROJECT_SLUGS.map((slug) => ({
      url: getAbsoluteUrl(locale, `/projects/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...localizedStaticRoutes, ...localizedProjectRoutes];
}
