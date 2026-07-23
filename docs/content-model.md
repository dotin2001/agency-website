# Content Model

These are CMS-ready planning models, not implemented schemas.

## Projects

- `title`: project title.
- `slug`: stable URL slug.
- `client`: linked or plain client name.
- `industry`: industry or category.
- `year`: project year.
- `services`: related services.
- `overview`: short summary.
- `challenge`: client or market problem.
- `insight`: strategic observation.
- `strategy`: strategic response.
- `creativeConcept`: central idea.
- `execution`: deliverables and production details.
- `results`: quantitative or qualitative impact.
- `thumbnail`: project listing image.
- `heroMedia`: case-study opening media.
- `gallery`: supporting images or media.
- `video`: optional video asset or embed.
- `relatedProjects`: manually selected related work.
- `seo`: title, description, image, and share metadata.
- `localeContent`: Vietnamese and English localized fields.

## Services

- `title`.
- `slug`.
- `summary`.
- `description`.
- `deliverables`.
- `processNotes`.
- `relatedProjects`.
- `seo`.
- `localeContent`.

## Team members

- `name`.
- `slug`.
- `role`.
- `bio`.
- `portrait`.
- `socialLinks`.
- `order`.
- `localeContent`.

## Testimonials

- `quote`.
- `personName`.
- `personRole`.
- `company`.
- `relatedProject`.
- `localeContent`.

## Clients

- `name`.
- `logo`.
- `industry`.
- `website`.
- `featured`.
- `relatedProjects`.

## Global site settings

- `agencyName`.
- `positioningStatement`.
- `defaultSeo`.
- `socialLinks`.
- `analyticsSettings`.
- `themeDefaults`.
- `localeSettings`.

## Navigation

- `label`.
- `href`.
- `children`.
- `order`.
- `visibility`.
- `localeContent`.

## Contact information

- `email`.
- `phone`.
- `address`.
- `businessHours`.
- `contactFormRecipients`.
- `socialLinks`.
- `privacyContact`.
- `localeContent`.

## Modeling principles

- Keep content portable across CMS vendors.
- Separate editorial content from visual layout choices.
- Require localized fields where marketing meaning changes by language.
- Keep SEO fields available per route and locale.
- Avoid storing secrets or private operational data in public content models.
