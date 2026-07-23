# AGENTS.md

## Required context

- Read `.codex/project.md` when it exists.
- Read `docs/architecture.md` and task-specific docs when they exist.
- Inspect the current implementation before editing.

## Skill routing

Planned project skills:

- `agency-project-orchestrator`
- `agency-frontend-nextjs`
- `agency-design-system`
- `agency-motion`
- `agency-threejs`
- `agency-content-i18n`
- `agency-quality`

Use a skill only after its `SKILL.md` exists.

## Working rules

- Make the smallest safe change.
- Keep changes scoped to the request.
- Do not rewrite unrelated files.
- Do not redesign UI unless requested.
- Do not add dependencies without justification.
- Preserve the root-level `app/` architecture.
- Use Server Components by default.
- Keep Client Component boundaries narrow.
- Separate UI, motion, and 3D responsibilities.
- Respect responsive, accessibility, and reduced-motion requirements.
- Never commit secrets or `.env` files.
- Do not commit or push unless requested.

## Documentation synchronization

- Update relevant docs when routes, architecture, content, localization, design, motion, 3D, testing, or deployment behavior changes.

## Verification and reporting

- Run the smallest relevant verification.
- Report files changed, verification results, issues, and anything not tested.
