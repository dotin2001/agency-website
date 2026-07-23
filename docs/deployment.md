# Deployment

Deployment behavior is planned and not configured in this step.

## Platform direction

- Vercel is the planned deployment platform.
- The project should use preview deployments for review and a production environment for public releases.

## Preview deployments

- Use previews to validate content, responsive behavior, accessibility, metadata, analytics events, motion, and 3D fallbacks before production.
- Preview-only URLs should not be treated as canonical public URLs.

## Production environment

- Production should use approved domain, environment variables, analytics settings, CMS credentials, and monitoring configuration when implemented.
- Production releases should follow a repeatable checklist.

## Environment variables

- Secrets and `.env` files must not be committed.
- Required variables should be documented when integrations are introduced.
- Separate preview and production values where needed.

## Domain and DNS

- Domain selection is pending.
- DNS should be configured only after the production domain is confirmed.
- Canonical URL, sitemap, analytics, and `hreflang` behavior should align with the chosen domain.

## Build verification

- Run the production build before release.
- Resolve build errors before deployment.
- Treat framework warnings as review items even when they do not block deployment.

## Release checklist

- Confirm build passes.
- Confirm key routes render.
- Check mobile and desktop layouts.
- Check accessibility basics and reduced-motion behavior.
- Check metadata, social images, sitemap, and robots rules when implemented.
- Check contact conversion path.
- Check analytics and consent behavior when implemented.
- Confirm no secrets or draft content are exposed.

## Rollback

- Use Vercel rollback or redeploy a known good version if production issues appear.
- Keep release notes clear enough to identify changed behavior.
- Prioritize rollback for broken conversion paths, severe accessibility issues, major performance regressions, or incorrect public content.

## Analytics verification

- Analytics is planned, not implemented.
- When added, verify events in preview before production.
- Confirm primary conversion events, route views, locale behavior, and privacy requirements.

## Sitemap submission

- Submit sitemap to search tools after production routes and domain are live.
- Re-submit or refresh when major route or localization changes ship.

## Post-launch monitoring

- Monitor Core Web Vitals, errors, contact form health, analytics events, indexing status, and user-facing content issues.
- Review performance and accessibility after each major motion, 3D, CMS, or localization release.
