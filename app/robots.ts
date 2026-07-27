import type { MetadataRoute } from "next";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";

function getSiteOrigin() {
  const metadata = buildLocalizedMetadata({
    description: "",
    locale: "en",
    routePath: "/",
    title: "",
  });
  const canonical = metadata.alternates?.canonical;
  const canonicalUrl =
    canonical instanceof URL ? canonical : new URL(String(canonical));

  return canonicalUrl.origin;
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${getSiteOrigin()}/sitemap.xml`,
  };
}
