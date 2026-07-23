# Sitemap

All routes in this document are planned and not implemented unless a later step states otherwise.

## Planned routes

### `/[locale]`

- Purpose: localized homepage and primary brand narrative.
- Primary content: hero, challenge, approach, selected work, team preview, client stories, and contact CTA.
- Primary CTA: start a project.

### `/[locale]/about`

- Purpose: explain the agency story, values, approach, and credibility.
- Primary content: positioning, philosophy, capabilities overview, team preview, and proof points.
- Primary CTA: meet the team or start a project.

### `/[locale]/services`

- Purpose: describe service areas and how the agency works with clients.
- Primary content: service categories, process, engagement types, and fit criteria.
- Primary CTA: discuss a project.

### `/[locale]/projects`

- Purpose: present selected work and help visitors find relevant case studies.
- Primary content: featured projects, filters or categories if needed later, project summaries, and outcomes.
- Primary CTA: view a case study.

### `/[locale]/projects/[slug]`

- Purpose: tell a complete project story.
- Primary content: opening, challenge, insight, creative concept, execution, impact, and next story.
- Primary CTA: start a similar project.

### `/[locale]/team`

- Purpose: introduce the people behind the work.
- Primary content: team profiles, roles, values, working style, and hiring or collaboration notes if needed.
- Primary CTA: start a conversation.

### `/[locale]/contact`

- Purpose: convert qualified visitors into inquiries.
- Primary content: project inquiry form, contact details, expected response timing, and qualifying prompts.
- Primary CTA: submit inquiry.

### `/[locale]/privacy`

- Purpose: provide privacy and data handling information.
- Primary content: privacy policy, data collection notes, analytics disclosure when implemented, and contact details.
- Primary CTA: contact the agency with privacy questions.

## Main navigation

- Work: `/[locale]/projects`
- Services: `/[locale]/services`
- About: `/[locale]/about`
- Team: `/[locale]/team`
- Contact: `/[locale]/contact`

## Footer navigation

- Projects.
- Services.
- About.
- Team.
- Contact.
- Privacy.
- Locale switcher.

## Planned locale behavior

- Vietnamese and English are planned.
- Locale prefixes are planned for primary routes.
- Default locale is undecided.
- Locale detection, routing, dictionaries, metadata, and fallback behavior are not implemented yet.

## Planned 404 behavior

- Unknown routes should show a localized not-found experience when localization is implemented.
- The page should offer links back to the homepage, projects, and contact route.
- The route should avoid heavy motion or 3D and should respect reduced-motion preferences.

## Route status

The sitemap defines planned product routes only. The current implemented scaffold route is the default homepage from the Next.js starter.
