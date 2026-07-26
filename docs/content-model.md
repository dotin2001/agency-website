# Content Model

These are CMS-ready planning models, not implemented schemas.

## Projects

The planned Project model is CMS-ready documentation only. No schema, CMS, route, data file, or gallery implementation exists yet. Required fields may vary by project type, and missing optional content must not break the page.

### Identity

- `title`: project title.
- `slug`: stable URL slug; whether slugs are shared or localized remains unresolved.
- `client`: linked or plain client name.
- `industry`: industry or category.
- `year`: project year.
- `services`: related services or service tags.
- `locale`: active content locale.

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
