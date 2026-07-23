---
name: agency-frontend-nextjs
description: Use when implementing or reviewing Next.js App Router frontend work, layouts, pages, route segments, React components, TypeScript, or Server and Client Component boundaries.
---

# Agency Frontend Next.js

## Purpose

Implement and review Next.js frontend work.

## When to use

- App Router.
- Layouts.
- Pages.
- Route segments.
- React components.
- TypeScript.
- Server and Client Components.
- Loading and error states.
- Frontend data boundaries.
- Reusable component architecture.

## When not to use

- Motion-only tasks.
- 3D-only tasks.
- Content-only tasks.
- Final quality review without frontend implementation.

## Required documents

- `AGENTS.md`.
- `.codex/project.md`.
- `docs/architecture.md`.
- `docs/sitemap.md` when routes change.
- `docs/accessibility.md`.
- `docs/performance.md`.
- `docs/testing.md`.

## Working rules

- Preserve the root-level `app/` structure.
- Use Server Components by default.
- Add `"use client"` only when required.
- Keep client boundaries narrow.
- Prefer composition and reusable primitives.
- Keep page components focused.
- Separate UI from motion and 3D logic.
- Keep responsive and accessibility behavior explicit.
- Avoid dependency additions unless justified.

## Implementation checklist

- Inspect existing route and component structure.
- Confirm whether the task belongs in a Server or Client Component.
- Handle loading, empty, and error states when relevant.
- Update route or architecture docs when required.
- Avoid unrelated redesigns.

## Verification checklist

- Run the smallest relevant commands.
- Use lint and TypeScript checks when frontend code changes.
- Run build when routes, layouts, or production behavior change.
- Report browser or responsive checks only when actually performed.

## Final report

- Summary.
- Files changed.
- Architecture decisions.
- Verification.
- Issues.
- Anything not tested.
