# Sitemap

All routes in this document are planned and not implemented unless a later step states otherwise. This step defines route structure only; no route folders, redirects, metadata, UI, or localization runtime are implemented.

## Route strategy

Public routes will use locale-prefixed URLs:

- `/[locale]`
- `/[locale]/about`
- `/[locale]/services`
- `/[locale]/projects`
- `/[locale]/projects/[slug]`
- `/[locale]/team`
- `/[locale]/contact`
- `/[locale]/privacy`

Supported locales:

- `en`
- `vi`

The default locale remains unresolved.

## Main navigation

- Home: `/[locale]`
- About: `/[locale]/about`
- Services: `/[locale]/services`
- Projects: `/[locale]/projects`
- Team: `/[locale]/team`
- Contact: `/[locale]/contact`

Projects should be visually emphasized in the main navigation because selected work is the primary proof path for the agency.

## Footer navigation

- Main navigation links.
- Privacy: `/[locale]/privacy`.
- Social links.
- Contact information.
- Language switcher.
- Copyright.

## Planned routes

### `/[locale]`

- Page purpose: introduce the agency positioning, creative standard, and conversion path.
- Primary content: hero, client challenge, agency approach, selected projects, team preview, client stories, and contact CTA.
- Primary CTA: Start a Project.
- Secondary CTA: Explore Our Work.
- SEO intent: rank and convert for branded, creative agency, digital agency, and Vietnam-focused agency queries.
- Content owner or source: product brief, storytelling doc, selected project content, and agency-provided proof points.
- Current status: planned, not implemented.

### `/[locale]/about`

- Page purpose: explain the agency story, values, working philosophy, and credibility.
- Primary content: positioning context, agency philosophy, capability overview, working values, team preview, and proof points.
- Primary CTA: Meet the Team.
- Secondary CTA: Start a Project.
- SEO intent: support branded research and agency evaluation queries.
- Content owner or source: agency leadership, product brief, brand voice direction, and approved company background.
- Current status: planned, not implemented.

### `/[locale]/services`

- Page purpose: describe what the agency offers and how clients can engage the team.
- Primary content: brand strategy, creative campaigns, digital marketing, social media, content production, website and digital experience development, video, motion, selective 3D, process, and fit criteria.
- Primary CTA: Discuss Your Needs.
- Secondary CTA: View Related Projects.
- SEO intent: capture service-led discovery for creative, digital, brand, content, campaign, and website experience needs.
- Content owner or source: product brief, final service packaging, and agency delivery leads.
- Current status: planned, not implemented.

### `/[locale]/projects`

- Page purpose: present selected work and help visitors find relevant case studies.
- Primary content: featured projects, categories or filters if needed later, project summaries, industries, deliverables, and outcomes.
- Primary CTA: Explore a Case Study.
- Secondary CTA: Start a Project.
- SEO intent: support proof-driven evaluation and project or portfolio discovery.
- Content owner or source: approved case-study content, project media, final proof points, and CMS entries when selected.
- Current status: planned, not implemented.

### `/[locale]/projects/[slug]`

- Page purpose: tell a complete project story from challenge through impact.
- Primary content: opening, client context, challenge, insight, creative concept, execution, deliverables, impact, related projects, and next story.
- Primary CTA: Start a Similar Project.
- Secondary CTA: View Next Project.
- SEO intent: rank for specific project, industry, service, and case-study searches where content is approved.
- Content owner or source: approved case-study source material, project metrics, client approvals, media assets, and CMS entries when selected.
- Current status: planned, not implemented.

### `/[locale]/team`

- Page purpose: introduce the people behind the work and make the agency feel human and credible.
- Primary content: team introduction, roles, working style, collaboration values, and hiring or collaborator notes if needed.
- Primary CTA: Start a Conversation.
- Secondary CTA: View Projects.
- SEO intent: support branded evaluation, hiring research, and trust-building searches.
- Content owner or source: agency leadership, team members, approved bios, and brand voice direction.
- Current status: planned, not implemented.

### `/[locale]/contact`

- Page purpose: convert qualified visitors into project inquiries.
- Primary content: project inquiry form, contact details, qualifying prompts, expected response timing, and alternate contact methods.
- Primary CTA: Submit Project Inquiry.
- SEO intent: support branded contact searches and conversion from organic or referred visitors.
- Content owner or source: agency operations, contact details, inquiry requirements, and privacy guidance.
- Current status: planned, not implemented.

### `/[locale]/privacy`

- Page purpose: explain privacy and data handling expectations.
- Primary content: privacy policy, data collection notes, analytics disclosure when implemented, contact details, and update date.
- Primary CTA: no conversion CTA required.
- SEO intent: satisfy trust, compliance, and branded privacy lookup needs.
- Content owner or source: legal or operations review, privacy requirements, analytics decisions, and deployment behavior.
- Current status: planned, not implemented.

## Planned route behavior

- Root `/` locale resolution or redirect: unresolved; `/` should eventually resolve or redirect according to the selected default locale and detection policy.
- Unsupported locale handling: unsupported locale prefixes should not render public pages; final behavior should be documented before implementation.
- Unknown route handling: unknown routes should show a localized not-found experience when localization is implemented, with links back to home, projects, and contact.
- Project slug handling: project detail pages should resolve only approved project slugs for the active locale; draft or missing case studies should not appear as finished content.
- Locale switcher behavior: preserve the equivalent route when available; if no equivalent exists, use the localized homepage or another documented fallback.
- Canonical URL expectations: each localized public route should have a canonical URL for its active locale after metadata implementation.
- `hreflang` expectations: localized route variants should declare alternates for `en` and `vi` when equivalent content exists.

## Open route decisions

- Default locale.
- Whether project slugs are shared or localized.
- Final redirect behavior from `/`.

## Route status

The sitemap defines planned product routes only. The current implemented scaffold route is still the default homepage from the Next.js starter.
