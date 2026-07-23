# Localization

Localization is planned and not implemented. Do not install or implement an i18n library until the relevant implementation step.

## Language support

- Vietnamese is planned.
- English is planned.
- Both languages should receive native-quality editorial treatment.

## Planned route strategy

- Public product routes are planned under `/{locale}`.
- Planned examples: `/vi`, `/en`, `/vi/projects/[slug]`, `/en/projects/[slug]`.
- Default locale remains an open decision.

## Translation ownership

- Marketing copy should be written or reviewed by fluent speakers.
- Strategic positioning, CTAs, case-study claims, and testimonials require extra review.
- Source-of-truth language is an open decision.

## Content fallback policy

- Avoid silently showing the wrong language for core marketing content.
- Missing localized content should use an explicit fallback rule.
- Case studies may remain unpublished in a locale until reviewed.
- Global labels can use controlled fallback only when approved.

## Metadata localization

- Page titles, descriptions, Open Graph metadata, image alt text, and structured content should be localized.
- SEO copy should be written for each language instead of mechanically translated.

## `hreflang`

- Locale variants should declare alternate links when localization routing is implemented.
- Each localized route should point to equivalent route variants when available.
- Fallback or default language behavior must be documented when chosen.

## Locale switcher behavior

- The switcher should preserve the equivalent route when available.
- If no equivalent route exists, send users to the localized homepage or a documented fallback.
- The control must be keyboard accessible and clear on mobile.

## URL principles

- Use stable, readable locale-prefixed URLs.
- Slug localization is an open decision.
- Avoid mixing language content within a single route unless clearly intentional.

## Date and number formatting

- Format dates, numbers, and ranges according to the active locale.
- Avoid hard-coded date and number strings in reusable UI.
- Case-study years may remain numeric when appropriate.

## Editorial quality

- Do not use word-for-word marketing translation.
- Preserve intent, tone, cultural nuance, and clarity in both Vietnamese and English.
- CTAs should sound natural in the active language.

## CMS localization expectations

- CMS selection must support localized fields or localized entries.
- Editors need a clear way to identify missing translations.
- SEO and media alt text should be localizable.
- Publishing workflow should prevent incomplete localized routes from appearing as finished content.
