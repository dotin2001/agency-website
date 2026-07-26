# Content Model

These are CMS-ready planning models, not implemented schemas.

## Bilingual modeling convention

The content model should support Vietnamese and English without selecting a CMS-specific schema. Shared fields should remain outside locale blocks, while translated fields should live inside locale-specific blocks such as `content.en` and `content.vi`, or in equivalent linked locale entries.

Supported locales:

- `en`
- `vi`

General shape:

```yaml
id: content-id
type: content-type
status: draft
sortOrder: 10
sharedMedia:
  hero: asset-reference
relationships:
  relatedProjects:
    - project-id
content:
  en:
    title: English title
    description: English description
  vi:
    title: Tiêu đề tiếng Việt
    description: Mô tả tiếng Việt
translationStatus:
  en: complete
  vi: needs-review
```

Rules:

- Keep shared IDs, status, dates, sort order, media, relationships, metrics, email, phone, social URLs, and technical configuration outside locale blocks.
- Keep titles, labels, headlines, descriptions, body copy, CTAs, captions, alt text, role labels, testimonials, SEO text, Open Graph text, and language-dependent accessibility labels inside locale blocks.
- Validate required localized content for both supported locales before publishing finished public pages.
- Missing optional localized content must not break the page.
- Do not implement a schema, CMS, localization runtime, or content files in this step.

## Projects

The planned Project model is CMS-ready documentation only. No schema, CMS, route, data file, or gallery implementation exists yet. Required fields may vary by project type, and missing optional content must not break the page.

### Identity

- `projectId`: stable shared project ID.
- `title`: localized project title or shared approved project name, depending on final editorial convention.
- `slug`: stable URL slug; shared versus localized project slugs remains unresolved.
- `client`: linked or plain client name.
- `industry`: industry or category.
- `year`: project year.
- `services`: related services or service tags.
- `locale`: active content locale when using normalized locale entries.
- `translationCompletenessStatus`: completeness and approval state for each locale.

### Opening

- `shortStatement`: one concise project statement for listings and the case-study opening.
- `overview`: short project overview.
- `heroMedia`: primary case-study opening media.
- `projectRole`: agency role on the project.
- `collaborators`: collaborators, partners, or production contributors when approved.

### Challenge

- `businessContext`: client, market, or business context.
- `problem`: communication, brand, campaign, or experience problem.
- `objective`: project objective.
- `audienceContext`: audience background or behavior context.
- `constraints`: market, timeline, channel, budget, production, or technical constraints.

### Insight

- `insightStatement`: concise strategic insight.
- `supportingContext`: research evidence, behavioral observation, cultural context, or rationale.

### Strategy

- `strategicApproach`: selected strategic response.
- `priorityAudience`: main audience or segment.
- `direction`: communication or experience direction.
- `successCriteria`: desired indicators of success when available.

### Creative concept

- `conceptName`: name of the central idea.
- `conceptExplanation`: explanation of the idea and why it fits.
- `keyMessage`: primary message or narrative line.
- `visualDirection`: visual concept and art direction notes.
- `designSystem`: typography, color, layout, component, or brand system notes.
- `motionDirection`: planned motion language when relevant.
- `threeDDirection`: planned 3D role when relevant.

### Execution

- `executionOverview`: summary of how the concept was produced.
- `deliverables`: list of key outputs.
- `gallery`: repeatable image or media entries.
- `video`: optional video asset, embed, poster, transcript, and caption data.
- `websiteMedia`: website, landing page, product, or digital experience screenshots and recordings.
- `campaignMedia`: social, OOH, print, paid media, content, or campaign assets.
- `behindTheScenesMedia`: process, production, or making-of media when approved.

Gallery entries should include:

- `id`: stable entry identifier.
- `type`: image, video, motion, website, social, campaign, 3D, or behind-the-scenes.
- `src`: media source or CMS asset reference.
- `alt`: descriptive alternative text for meaningful media.
- `caption`: visible caption or context.
- `credit`: photographer, studio, collaborator, or source credit when required.
- `width` and `height`: intrinsic dimensions for layout stability.
- `poster`: poster image for video, motion, or 3D previews.
- `reducedMotionFallback`: static fallback for animated media.
- `order`: display order.

### Impact

- `metrics`: repeatable metric entries.
- `metricSource`: source, measurement period, or approval context for metrics when needed.
- `qualitativeOutcomes`: non-metric outcomes, audience response, client response, or business value.
- `testimonial`: linked or embedded testimonial.
- `awards`: awards or recognition when approved.
- `press`: press coverage or external references.
- `disclosureStatus`: verified metrics available, qualitative only, results not disclosed, or pending approval.

Metric entries should include:

- `label`: metric name.
- `value`: metric value.
- `unit`: percent, count, currency, ranking, duration, or other unit.
- `context`: what the metric measures and the period or channel it covers.
- `source`: analytics, client report, platform data, internal measurement, or other approved source.
- `verified`: whether the metric is verified for publication.
- `displayNote`: short public note such as "results not disclosed" when needed.

### Relationships

- `relatedProjects`: manually selected related project references.
- `relatedServices`: related service references.
- `nextProject`: preferred next project for case-study navigation.

### SEO

- `seoTitle`: localized SEO title.
- `seoDescription`: localized SEO description.
- `openGraphImage`: case-study social image.
- `canonicalSettings`: canonical URL behavior for the route.
- `localizedMetadata`: localized title, description, Open Graph, image alt text, and future `hreflang` metadata.

### Project modeling rules

- Do not invent metrics, client names, awards, press, industries, or results.
- Distinguish verified metrics from qualitative outcomes.
- Use transparent disclosure states when results are unavailable or cannot be published.
- Keep all meaningful media accessible through alt text, captions, transcripts, or equivalent HTML content.
- Keep optional media, motion, video, and 3D fields progressive so missing content does not block publishing.
- Shared project identity, media, relationships, numeric metrics, and metric source records should remain outside locale content when they are identical across languages.
- Project narrative, captions, alt text, CTA labels, SEO metadata, Open Graph text, and accessibility labels should be localized.
- Translation completeness must indicate whether `en` and `vi` are complete, in review, missing, or intentionally unpublished.

## Services

Shared fields:

- `id`: stable internal ID.
- `slug`: route slug or service key.
- `status`: publication status.
- `order`: display order.
- `relatedProjects`: related project references.
- `media`: shared service media if used.

Locale-specific fields:

- `title`: localized service title.
- `summary`: localized short summary.
- `description`: localized service description.
- `deliverables`: localized deliverable labels and descriptions.
- `processNotes`: localized process or engagement notes.
- `cta`: localized CTA label and accessible label.
- `seo`: localized title, description, Open Graph text, and image alt text.
- `translationCompletenessStatus`: status for `en` and `vi`.

## Team members

Shared fields:

- `id`: stable internal ID.
- `slug`: stable profile slug if team profiles are implemented.
- `portrait`: shared portrait media.
- `socialLinks`: shared social URLs.
- `order`: display order.
- `status`: publication status.

Locale-specific fields:

- `nameDisplay`: localized display name only where needed by brand convention.
- `role`: localized role label.
- `bio`: localized biography.
- `quote`: localized quote or working statement.
- `portraitAlt`: localized portrait alt text when language-dependent.
- `seo`: localized metadata if team profile routes exist later.
- `translationCompletenessStatus`: status for `en` and `vi`.

## Testimonials

Shared fields:

- `id`: stable internal ID.
- `personName`: client or speaker name.
- `company`: company name.
- `relatedProject`: related project reference.
- `originalLanguage`: original testimonial language.
- `translationApprovalStatus`: approval status for translated quote usage.
- `status`: publication status.

Locale-specific fields:

- `quote`: localized testimonial quote when approved.
- `personRole`: localized role label.
- `companyDisplay`: localized company display only when approved convention differs.
- `context`: localized testimonial context when needed.
- `translationCompletenessStatus`: status for `en` and `vi`.

## Clients

Shared fields:

- `id`: stable internal ID.
- `name`: approved client name.
- `logo`: shared logo asset.
- `industry`: shared industry key or category.
- `website`: client website URL.
- `featured`: featured status.
- `relatedProjects`: related project references.
- `status`: publication status.

Locale-specific fields:

- `industryLabel`: localized industry label.
- `logoAlt`: localized logo alt text when language-dependent.
- `description`: localized client description if used.
- `translationCompletenessStatus`: status for `en` and `vi`.

## Global site settings

Shared fields:

- `agencyName`: approved agency name or brand key.
- `socialLinks`: shared social URLs.
- `contactDetails`: shared email, phone, and social links.
- `analyticsSettings`: technical analytics configuration when implemented.
- `themeDefaults`: technical theme configuration when implemented.
- `localeSettings`: supported locale configuration.

Locale-specific fields:

- `siteName`: localized site name presentation when needed.
- `positioningStatement`: localized positioning statement.
- `footerCopy`: localized footer and copyright copy.
- `defaultSeo`: localized title, description, Open Graph text, and fallback social image alt text.
- `globalCtas`: localized CTA labels and accessible labels.
- `contactLabels`: localized labels for contact details.

## Navigation

Shared fields:

- `id`: stable navigation item ID.
- `targetRoute`: route key or href pattern.
- `children`: shared child item relationships.
- `order`: display order.
- `visibility`: visibility rules.
- `externalLinkBehavior`: new tab, rel attributes, and external indicator behavior.

Locale-specific fields:

- `label`: localized navigation label.
- `shortLabel`: localized compact label when needed.
- `accessibleLabel`: localized accessibility label when visible or language-dependent.

## Contact information

Shared fields:

- `email`: shared contact email.
- `phone`: shared phone number.
- `socialLinks`: shared social URLs.
- `contactFormRecipients`: private recipient configuration; never expose unnecessary operational data publicly.
- `privacyContact`: shared privacy contact email or route reference.

Locale-specific fields:

- `officeLabels`: localized labels for office, address, hours, and contact methods.
- `address`: localized address formatting when needed.
- `businessHours`: localized display text for hours.
- `formLabels`: localized form labels.
- `validationMessages`: localized validation messages.
- `consentText`: localized consent text.
- `privacyText`: localized privacy helper text and links.
- `successMessage`: localized confirmation message.
- `errorMessage`: localized form error message.

## SEO metadata

Shared fields:

- `routeKey`: stable route or content key.
- `canonicalSettings`: canonical behavior for the route.
- `openGraphImage`: shared or locale-specific social image asset reference.
- `relationships`: matching locale variants for `hreflang`.

Locale-specific fields:

- `seoTitle`: localized title.
- `seoDescription`: localized description.
- `openGraphTitle`: localized Open Graph title.
- `openGraphDescription`: localized Open Graph description.
- `openGraphImageAlt`: localized Open Graph image alt text when language-dependent.
- `canonicalUrl`: locale-specific canonical URL when implemented.
- `localizedMetadataStatus`: completeness and approval state.

SEO rules:

- Metadata must not silently fall back to the wrong language.
- `hreflang` should connect matching Vietnamese and English pages when implemented.
- `x-default` remains unresolved.
- Sitemap generation must include locale variants once routes exist.
- Translated pages must preserve factual consistency.

## Modeling principles

- Keep content portable across CMS vendors.
- Separate editorial content from visual layout choices.
- Require localized fields where marketing meaning changes by language.
- Keep SEO fields available per route and locale.
- Avoid storing secrets or private operational data in public content models.
