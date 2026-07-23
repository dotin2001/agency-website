# Design System

Design tokens and theme primitives are planned and not yet implemented in code.

## Brand personality

- Modern.
- Creative.
- Premium.
- Cinematic.
- Clear enough for business evaluation and expressive enough to signal creative quality.

## Primary colors

- Gold: `rgb(213, 187, 110)`.
- Deep navy: `rgb(10, 16, 26)`.

## Planned semantic color tokens

- `background`: page and section backgrounds.
- `foreground`: primary text and icons.
- `surface`: panels, cards, forms, and navigation surfaces.
- `surface-muted`: secondary surfaces.
- `border`: structural dividers and component borders.
- `accent`: gold-led brand emphasis.
- `accent-foreground`: text or icon color on accent surfaces.
- `muted`: secondary text.
- `success`, `warning`, `danger`: form and system feedback.
- `focus`: visible keyboard focus indicators.

## Theme direction

- Dark theme: deep navy-led, cinematic, high contrast, restrained gold accents.
- Light theme: editorial, clean, warm-neutral surfaces with controlled gold accents.
- Themes should share semantic tokens so components do not hard-code theme colors.

## Typography principles

- Strong editorial hierarchy.
- Short, confident headings.
- Readable body copy across Vietnamese and English.
- Avoid decorative type that weakens accessibility or localization.
- Preserve line length and rhythm on mobile.

## Spacing principles

- Use a consistent spacing scale.
- Give narrative sections room to breathe.
- Keep operational UI such as navigation and forms compact and predictable.
- Reduce spacing intentionally on mobile instead of simply shrinking desktop layouts.

## Grid principles

- Use responsive grids that support editorial storytelling and case-study scanning.
- Prefer clear alignment and rhythm over decorative asymmetry.
- Keep form and navigation layouts stable across breakpoints.

## Responsive breakpoint principles

- Mobile layouts must be intentionally designed first for reading and conversion.
- Tablet layouts should avoid cramped desktop compositions.
- Desktop layouts may use more cinematic composition and larger media.
- Wide screens should preserve readable text widths.

## Border, radius, layering, and elevation

- Use borders and surfaces to clarify hierarchy.
- Keep radius restrained unless brand direction later requires otherwise.
- Prefer depth through contrast, spacing, and layering before heavy shadows.
- Avoid stacked card-in-card layouts.

## Component states

- Components need default, hover, focus-visible, active, disabled, loading, error, and success states where relevant.
- Focus states must be visible and consistent.
- Interactive states must not depend on color alone.

## Accessibility and contrast

- Text and interactive elements must meet accessible contrast requirements.
- Gold accents need contrast checks before use as text or button backgrounds.
- Reduced-motion and keyboard navigation must be supported.
- Components must work with longer Vietnamese and English strings.

## Token-first rule

Use semantic design tokens before one-off values. New visual values need a clear purpose and should become tokens only when reused.
