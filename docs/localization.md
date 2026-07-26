# Localization

Localization is planned and not implemented. Do not install or implement an i18n library, create locale routes, or create CMS schemas until the relevant implementation step.

## Language support

- Supported locales are planned as `en` and `vi`.
- Vietnamese and English should receive native-quality editorial treatment.
- Default locale remains an open decision.
- Source-of-truth language remains an open decision.

## Content categories

### Shared fields

Shared fields normally remain identical across locales and should live outside locale-specific content blocks:

- Internal ID.
- Content type.
- Publication status.
- Sort order.
- Dates.
- Media assets.
- Relationships.
- Numeric metrics.
- Contact email.
- Phone number.
- Social URLs.
- Technical configuration.

### Locale-specific fields

Locale-specific fields require separate Vietnamese and English values:

- Title.
- Navigation label.
- Short label.
- Headline.
- Subheadline.
- Description.
- Body content.
- CTA label.
- Image alt text when language-dependent.
- Captions.
- Testimonial text.
- Role labels.
- Service descriptions.
- Project narrative.
- SEO title.
- SEO description.
- Open Graph text.
- Accessibility labels when visible or language-dependent.

## Planned content shape

Use a CMS-neutral structure that keeps shared fields outside locale blocks and translated fields inside locale-specific blocks. A locale-keyed shape is acceptable:

```yaml
id: project-identity
type: project
status: published
sortOrder: 10
media:
  hero: asset-reference
relationships:
  services:
    - brand-strategy
metrics:
  - labelKey: reach
    value: 120000
content:
  en:
    title: Project Name
    headline: English headline
    description: English description
    seoTitle: English SEO title
  vi:
    title: Ten du an
    headline: Tieu de tieng Viet
    description: Mo ta tieng Viet
    seoTitle: Tieu de SEO tieng Viet
```

An equivalent normalized locale-entry model is also acceptable if it keeps shared records and localized records clearly linked. The final CMS choice should determine the exact implementation.

Implementation expectations:

- Keep shared fields outside locale blocks.
- Keep translated fields inside locale-specific blocks.
- Avoid duplicating media and relationships unnecessarily.
- Validate that required content exists for both supported locales before publication.
- Track translation completeness by content type and route.

## Planned route strategy

- Public product routes are planned under `/{locale}`.
- Planned examples: `/vi`, `/en`, `/vi/projects/[slug]`, `/en/projects/[slug]`.
- Supported locales are `en` and `vi`.
- Default locale remains unresolved.
- Root redirect behavior remains unresolved.

## Slug strategy options

The final project slug strategy is unresolved. Two future strategies are acceptable.

### 1. Shared slug

Examples:

- `/en/projects/project-name`
- `/vi/projects/project-name`

Benefits:

- Simpler CMS relationships between locale variants.
- Easier analytics comparison across locales.
- Lower redirect and migration complexity.
- Easier internal linking between translated versions.

Risks:

- Vietnamese URLs may feel less natural when slugs are English.
- SEO relevance may be weaker for Vietnamese project searches.
- Editorial teams may need guidance when project names differ by market.

Canonical implications:

- Each locale still needs its own canonical URL.
- `hreflang` alternates should connect the matching `en` and `vi` routes.

Redirect implications:

- Fewer slug redirects are needed because both locales share the same project slug.
- Legacy or renamed slugs still need explicit redirects.

CMS implications:

- One shared slug can live outside locale blocks.
- Locale content remains inside `content.en` and `content.vi`.

### 2. Localized slug

Examples:

- `/en/projects/project-name`
- `/vi/projects/ten-du-an`

Benefits:

- URLs can read naturally in each language.
- Vietnamese search relevance may improve for project and industry terms.
- Editorial teams can adapt project naming for each locale.

Risks:

- More complex CMS linking between locale variants.
- More redirect rules are required when either locale slug changes.
- Analytics and reporting need a stable shared project ID.

Canonical implications:

- Each localized slug needs its own locale-specific canonical URL.
- `hreflang` alternates must map equivalent content across different slugs.

Redirect implications:

- Slug changes require locale-specific redirects.
- Root or locale fallback redirects must avoid sending users to the wrong language version.

CMS implications:

- Slugs need locale-specific fields or linked localized entries.
- CMS preview must show whether both locale slugs are complete and approved.

## Content fallback policy

- Navigation and critical UI labels must exist in both languages.
- Missing required page content should fail validation rather than silently mixing languages.
- Optional content may be omitted when absent.
- Automatic fallback to another language should be limited and explicitly documented.
- User-facing pages must not mix Vietnamese and English unintentionally.
- CMS preview should clearly show incomplete translations.
- Missing alt text must not fall back to empty text unless the image is decorative.
- Case studies may remain unpublished in a locale until reviewed.
- Global labels can use controlled fallback only when approved and documented.

## Editorial rules

- Do not translate marketing copy word-for-word.
- Preserve meaning, tone, rhythm, and CTA intent.
- Vietnamese and English may differ in sentence structure and length.
- Headlines may be adapted rather than directly translated.
- Verified facts, metrics, dates, and names must stay consistent.
- Proper nouns should follow the approved brand convention.
- Avoid unexplained English jargon in Vietnamese content.
- Avoid awkward literal Vietnamese translations in English content.
- CTAs should sound natural in the active language.

## Content ownership

- Strategy and positioning: agency leadership or brand owner.
- Vietnamese copy: Vietnamese content owner.
- English copy: English editor or approved translator.
- Project facts and metrics: project owner.
- SEO metadata: content and SEO owner.
- Final publication approval: designated project owner.

These are generic ownership roles only; named people are not defined in this step.

## Metadata localization

- Page titles and descriptions must be localized.
- Open Graph title and description must be localized.
- Image alt text and captions should be localized when language-dependent.
- Locale-specific canonical URLs are required when metadata is implemented.
- `hreflang` should connect matching `en` and `vi` pages when localized routing is implemented.
- The `x-default` decision remains open.
- Generated sitemap output must include locale variants when routes exist.
- Metadata should not silently fall back to the wrong language.
- Translated pages must preserve factual consistency.
- SEO copy should be written for each language instead of mechanically translated.

## Locale switcher behavior

- The switcher should preserve the equivalent route when available.
- If no equivalent route exists, send users to the localized homepage or a documented fallback.
- The control must be keyboard accessible and clear on mobile.
- The switcher should not expose incomplete localized pages as finished content.

## Date and number formatting

- Format dates, numbers, and ranges according to the active locale.
- Avoid hard-coded date and number strings in reusable UI.
- Case-study years may remain numeric when appropriate.
- Numeric metrics should remain factually identical across locales, with localized labels, units, and explanatory context.

## CMS localization expectations

- CMS selection must support localized fields or localized entries.
- Editors need a clear way to identify missing translations.
- SEO and media alt text should be localizable.
- Publishing workflow should prevent incomplete localized routes from appearing as finished content.
- Preview should show shared fields, locale-specific fields, and translation completeness status clearly.
