---
name: agency-quality
description: Use when verifying project quality or release readiness through linting, type checking, builds, tests, accessibility, responsive, SEO, performance, browser, motion fallback, 3D fallback, or release checks.
---

# Agency Quality

## Purpose

Verify project quality and release readiness.

## When to use

- Linting.
- Type checking.
- Builds.
- Tests.
- Accessibility review.
- Responsive review.
- SEO review.
- Performance review.
- Browser review.
- Motion fallback review.
- 3D fallback and performance review.
- Release verification.

## When not to use

- As a replacement for implementation skills.
- To make broad product or architecture changes.
- For unrelated refactoring.

## Required documents

- `AGENTS.md`.
- `.codex/project.md`.
- `docs/testing.md`.
- `docs/accessibility.md`.
- `docs/performance.md`.
- `docs/seo.md`.
- `docs/deployment.md`.
- Task-specific docs for the affected area.

## Working rules

- Start with the smallest relevant verification.
- Run broader checks only when scope requires them.
- Do not claim a check was performed unless it actually was.
- Separate blocking failures from non-blocking warnings.
- Do not silently fix unrelated issues.
- Preserve a clear record of commands and outcomes.
- Report environmental limitations honestly.
- Coordinate with specialist skills when fixes are needed.

## Verification layers

- ESLint.
- TypeScript.
- Production build.
- Unit and component tests when available.
- End-to-end tests when available.
- Accessibility.
- Responsive.
- SEO.
- Performance.
- Browser compatibility.
- Reduced motion.
- 3D fallback and lifecycle.

## Release checklist

- No blocking lint or type errors.
- Production build passes.
- Relevant tests pass.
- Critical routes verified.
- Accessibility risks reported.
- Responsive risks reported.
- Performance risks reported.
- SEO requirements reviewed.
- Environment variables documented.
- Deployment and rollback requirements reviewed.

## Final report

- Scope.
- Commands run.
- Passed checks.
- Failed checks.
- Warnings.
- Files changed, if any.
- Anything not tested.
- Release readiness result.
