# Testing

Testing systems beyond the current lint, TypeScript, and build commands are planned and not installed in this step.

## Verification layers

- ESLint: code quality and framework rules.
- TypeScript: type safety and route/component typing.
- Production build: Next.js build, static generation, and integration checks.
- Unit tests: utilities, content transforms, and pure logic when introduced.
- Component tests: reusable UI states, forms, and interaction boundaries when tooling exists.
- End-to-end tests: critical journeys such as locale routes, project browsing, and contact conversion.
- Accessibility tests: keyboard navigation, labels, focus, contrast, and reduced-motion behavior.
- Responsive tests: mobile, tablet, desktop, and wide layouts.
- Motion tests: reduced-motion fallbacks, scroll sequence behavior, and interaction clarity.
- 3D fallback tests: WebGL failure, mobile fallback, reduced-motion fallback, and canvas lifecycle.
- Browser tests: representative Chromium, WebKit, and Firefox behavior when tooling exists.
- Performance tests: Core Web Vitals, bundle impact, media loading, motion, and 3D performance.

## Smallest relevant verification first

- Run the narrowest command that proves the current change.
- Documentation-only changes should at least use markdown/diff hygiene checks when requested.
- Code changes should run lint, TypeScript, build, or targeted tests based on risk.

## Full verification

Run broader verification when changes affect:

- Shared architecture or dependencies.
- App Router structure.
- Rendering boundaries.
- Global styles, tokens, layout, or navigation.
- Forms, localization, SEO metadata, analytics, motion, 3D, or deployment behavior.
- Critical user journeys.

## Reporting rules

- Do not claim testing unless it was actually performed.
- Report command names, outcomes, and relevant warnings.
- Report untested areas explicitly.
- Distinguish planned test coverage from implemented test coverage.

## Planned CI direction

- CI should eventually run lint, TypeScript, production build, and relevant automated tests.
- Preview deployments should support manual review and browser checks.
- Accessibility and performance checks should be added when related tooling is selected.

## Current status

- Current scaffold verification has used lint, TypeScript, build, and dev startup in earlier steps.
- No unit, component, end-to-end, accessibility, browser, motion, 3D, or performance test framework is installed yet.
