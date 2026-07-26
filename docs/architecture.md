# Architecture

## Current repository structure

- `app/`: root-level Next.js App Router application.
- `app/layout.tsx`: root layout.
- `app/page.tsx`: current scaffold homepage.
- `app/globals.css`: global styles and Tailwind import.
- `public/`: static assets.
- `.codex/project.md`: central project context.
- `AGENTS.md`: root repository instructions.
- `CLAUDE.md`: delegates to `AGENTS.md`.
- `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`: project configuration.

## Root-level App Router convention

The project uses the root-level `app/` directory. Do not move the application into `src/app/` unless explicitly requested in a later architecture decision.

## Planned application structure

Planned source organization will be introduced only when implementation requires it. Future folders may separate route UI, reusable components, content models, providers, motion helpers, 3D scenes, and utilities, but no future source folders are created in this step.

## Planned route ownership

The locale-prefixed route structure below is planned only. Do not create these folders or files in this step; the project currently still has only the scaffold route at `app/page.tsx`.

- `app/[locale]/layout.tsx`: localized route shell, locale validation boundary, shared public navigation, footer, and future localized metadata coordination.
- `app/[locale]/page.tsx`: localized homepage and primary brand narrative.
- `app/[locale]/about/page.tsx`: agency story, values, approach, credibility, and team preview.
- `app/[locale]/services/page.tsx`: service areas, process, engagement types, and related work paths.
- `app/[locale]/projects/page.tsx`: selected projects index, project discovery, and case-study entry points.
- `app/[locale]/projects/[slug]/page.tsx`: project detail story for approved case-study slugs.
- `app/[locale]/team/page.tsx`: team, roles, collaboration style, and people-focused trust content.
- `app/[locale]/contact/page.tsx`: project inquiry flow, contact details, and qualification prompts.
- `app/[locale]/privacy/page.tsx`: privacy and data handling information.

The root `app/page.tsx` remains the current scaffold homepage until a later implementation step decides and builds locale resolution or redirect behavior.

## Rendering boundaries

- Use Server Components by default.
- Use Client Components only for browser APIs, interactivity, animation runtime, 3D runtime, or client state.
- Keep Client Component boundaries narrow and colocated with the behavior that requires them.

## Responsibility separation

- UI: layout, typography, navigation, sections, cards, forms, and reusable primitives.
- Motion: transitions, scroll behavior, reveal timing, reduced-motion support, and choreography.
- 3D: scenes, models, cameras, lighting, controls, fallbacks, and performance limits.
- Content: structured copy, case-study data, localization strings, and CMS-facing models.

## Reusable component principles

- Prefer reusable primitives before duplication.
- Keep components focused and composable.
- Avoid abstractions until they remove real repetition or clarify ownership.
- Preserve accessibility and responsive behavior in shared primitives.

## Coding standards

### Naming

- React components use PascalCase.
- Hooks use `useSomething`.
- Utilities and functions use camelCase.
- Constants use descriptive names.
- Route segments use lowercase.
- Content slugs use lowercase kebab-case.
- Avoid vague names such as `Thing`, `Stuff`, `Data`, `Box`, or `Helper` without context.

### Component structure

- Use Server Components by default.
- Add `"use client"` only when required.
- Keep Client Component boundaries narrow.
- Prefer composition over oversized components.
- Separate page sections, UI primitives, motion, and 3D responsibilities.
- Avoid duplicate markup and logic.
- Keep page files focused on composition.
- Do not create abstractions before they have a real use.

### Styling

- Use Tailwind consistently.
- Prefer documented tokens once implemented.
- Avoid unexplained arbitrary values.
- Keep responsive behavior explicit.
- Avoid inline styles except for genuinely dynamic values.
- Do not use animation to hide layout problems.

## Content and presentation boundaries

Content should be structured separately from presentation so localization, CMS migration, SEO metadata, and route rendering can evolve without rewriting UI components.

## Future provider boundaries

Future providers for theme, locale, analytics, smooth scrolling, motion configuration, or 3D performance settings should be introduced close to the route tree only when the related feature is implemented.

## Future CMS boundary

The CMS is not selected. Future CMS code should be isolated behind content access functions or adapters so route components do not depend directly on vendor-specific APIs.

## Dependency policy

Currently configured dependencies support Next.js, React, TypeScript, Tailwind CSS, and ESLint. Planned dependencies such as Framer Motion, GSAP, ScrollTrigger, Lenis, Three.js, React Three Fiber, Drei, CMS SDKs, and analytics libraries must not be installed until their implementation step and must include justification.

Before adding a dependency:

1. Explain why the platform or existing stack is insufficient.
2. Confirm alignment with project architecture.
3. Review bundle, maintenance, and accessibility impact.
4. Add it only in the implementation step that requires it.
5. Update relevant docs if it changes architecture.

## Architecture decision rules

- Preserve the root-level `app/` architecture.
- Choose the smallest safe change for the current step.
- Keep UI, motion, 3D, and content responsibilities separated.
- Prefer Server Components unless a client boundary is required.
- Treat accessibility, performance, mobile design, and reduced motion as product requirements.
- Update relevant documentation when routes, architecture, content, localization, design, motion, 3D, testing, or deployment behavior changes.

## Current versus planned status

Implemented:

- Next.js scaffold.
- Root-level `app/` App Router structure.
- TypeScript strict mode.
- Tailwind CSS.
- ESLint.
- Repository instructions and central project context.

Planned:

- Production UI.
- Product route implementation.
- Localization runtime.
- Theme runtime.
- Motion system.
- 3D system.
- CMS integration.
- Analytics.
- Production deployment configuration.
