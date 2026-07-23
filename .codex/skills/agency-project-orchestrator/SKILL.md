---
name: agency-project-orchestrator
description: Use when a task affects multiple project areas such as frontend architecture, design system, motion, 3D, content/localization, quality, or documentation.
---

# Agency Project Orchestrator

## Purpose

Coordinate tasks that affect multiple project areas.

## When to use

Use for cross-cutting tasks involving two or more of:

- Frontend architecture.
- Design system.
- Motion.
- 3D.
- Content/localization.
- Quality.
- Documentation.

## When not to use

- Small task isolated to one specialist area.

## Required documents

- `AGENTS.md`.
- `.codex/project.md`.
- `docs/architecture.md`.
- Relevant task-specific docs.

## Working method

- Identify affected systems.
- Select the specialist skills required.
- Define implementation order.
- Keep scope limited.
- Prevent duplicate work.
- Keep docs synchronized.
- Combine verification results.

## Boundaries

- Does not replace specialist implementation skills.
- Must not perform unrelated refactors.
- Must not install dependencies without justification.

## Verification

- Run the smallest relevant checks from each affected area.
- Escalate to full verification only when required.

## Final report

- Scope.
- Skills used.
- Files changed.
- Verification.
- Issues.
- Anything not tested.
