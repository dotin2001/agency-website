# SEO

SEO and analytics requirements are planned. No SEO, analytics, or conversion tracking implementation is added in this step.

## Page metadata

- Each route should define localized title, description, and share metadata.
- Metadata should support the agency positioning, service pages, project listings, and project case studies.

## Canonical URLs

- Canonical URLs should be stable and route-specific.
- Locale behavior and canonical strategy must align when localization is implemented.

## Sitemap

- Generate a sitemap when product routes exist.
- Include localized routes and project case studies when implemented.
- Exclude drafts, incomplete locale variants, and private routes.

## Robots.txt

- Add robots rules when deployment behavior is defined.
- Prevent indexing of preview-only, draft, or internal routes if they exist later.

## Open Graph

- Define title, description, image, URL, and site name per route.
- Use project-specific Open Graph data for case studies.

## Social images

- Plan reusable social image templates.
- Case studies should support custom social images.
- Images need localized text only when the text is embedded intentionally.

## Structured data

- Consider organization, website, breadcrumb, service, and creative work structured data.
- Structured data must match visible page content.

## Project case-study SEO

- Each case study should include a strong title, summary, industry, services, client context, media metadata, and related internal links.
- Claims and results should be accurate and approved.

## Localized metadata and `hreflang`

- Metadata should be written for Vietnamese and English, not mechanically translated.
- Add `hreflang` alternates when localized routing is implemented.
- Define fallback behavior for routes missing a localized equivalent.

## Internal linking

- Link between services, projects, team, and contact routes.
- Case studies should link to related projects and relevant service pages.
- CTAs should support conversion without weakening crawlable structure.

## Image metadata

- Use meaningful alt text and filenames where practical.
- Project images should include context, not generic descriptions.
- Decorative images should remain hidden from assistive technology.

## 404 behavior

- Not-found pages should be index-safe, helpful, and localized when localization exists.
- Provide links to homepage, projects, and contact.

## Analytics event planning

- Planned events may include CTA clicks, project inquiry starts, contact submissions, case-study engagement, locale switch usage, and media interactions.
- Event naming should be consistent and documented before implementation.

## Conversion tracking planning

- Track primary conversions without collecting unnecessary personal data.
- Confirm consent, privacy, and analytics requirements before implementation.
- Validate events in preview before production release.
