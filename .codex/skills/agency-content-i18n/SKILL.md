---
name: agency-content-i18n
description: Use when implementing or reviewing Vietnamese and English content, locale routes, translation keys, localized metadata, content models, CMS-ready content structures, locale switcher behavior, or SEO content localization.
---

# Agency Content i18n

## Purpose

Implement and review content structure, localization, and bilingual content behavior.

## When to use

- Vietnamese and English content.
- Locale routes.
- Translation keys.
- Localized metadata.
- Content models.
- CMS-ready content structures.
- Locale switcher behavior.
- SEO content localization.

## When not to use

- Frontend layout-only work.
- Motion-only work.
- 3D-only work.
- Final quality review without content or localization changes.

## Required documents

- `AGENTS.md`.
- `.codex/project.md`.
- `docs/content-model.md`.
- `docs/localization.md`.
- `docs/sitemap.md`.
- `docs/seo.md`.
- `docs/accessibility.md`.
- `docs/testing.md`.

## Working rules

- Keep content separated from presentation.
- Preserve Vietnamese and English editorial quality.
- Avoid word-for-word marketing translation.
- Keep locale-specific metadata complete.
- Keep slugs and route behavior aligned with localization decisions.
- Use fallback behavior only when documented.
- Keep content structures CMS-ready without premature CMS coupling.
- Update relevant docs when content or locale behavior changes.

## Implementation checklist

- Inspect existing content structures.
- Confirm which fields are shared and which are locale-specific.
- Confirm route and slug behavior.
- Handle missing translations and fallback behavior.
- Check metadata and `hreflang` implications.
- Keep language-switch behavior predictable.
- Avoid hardcoding content inside unrelated UI components.

## Verification checklist

- Run lint and TypeScript for code changes.
- Run build when locale routes or metadata change.
- Verify both languages only when actually performed.
- Verify missing-content fallback only when actually performed.
- Report editorial review only when actually performed.

## Final report

- Summary.
- Files changed.
- Content or localization decisions.
- Verification.
- Open translation decisions.
- Anything not tested.
