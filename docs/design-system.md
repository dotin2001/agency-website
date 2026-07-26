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

## Semantic color system

The color system is planned only. Do not create CSS variables, theme runtime, or component styles in this step. Raw brand colors are anchors for the system, not direct replacements for every UI state.

### Brand tokens

- `color-brand-primary`: main gold-led brand accent.
- `color-brand-primary-hover`: hover state for brand-accented interactive elements.
- `color-brand-primary-active`: active or pressed state for brand-accented interactive elements.
- `color-brand-on-primary`: text or icon color used on brand-primary surfaces.
- `color-brand-muted`: low-emphasis brand tint for subtle highlights, dividers, or supporting details.

### Background tokens

- `color-bg-page`: base page background.
- `color-bg-section`: section background used for narrative pacing.
- `color-bg-elevated`: elevated surfaces such as navigation, panels, cards, forms, and drawers.
- `color-bg-inverse`: inverse background for high-contrast sections.

### Text tokens

- `color-text-primary`: main body and heading text.
- `color-text-secondary`: supporting text.
- `color-text-muted`: low-emphasis text that still needs readable contrast.
- `color-text-inverse`: text used on inverse or dark surfaces.
- `color-text-brand`: brand-accented text where contrast is verified.
- `color-text-disabled`: disabled text or inactive labels.

### Border tokens

- `color-border-default`: standard dividers and component boundaries.
- `color-border-subtle`: low-emphasis structural borders.
- `color-border-strong`: high-emphasis borders for selected, active, or prominent elements.
- `color-border-focus`: border color paired with visible focus treatment.

### Interactive tokens

- `color-link-default`: default text link color.
- `color-link-hover`: hover state for links.
- `color-button-primary-bg`: primary button background.
- `color-button-primary-text`: primary button text.
- `color-button-secondary-bg`: secondary button background.
- `color-button-secondary-text`: secondary button text.
- `color-control-hover`: hover state for controls, icon buttons, and menu items.
- `color-control-active`: selected or pressed control state.
- `color-control-disabled`: disabled control surface or indicator.

### Status tokens

- `color-success`: success accent.
- `color-success-surface`: success background or subtle surface.
- `color-success-text`: success text.
- `color-warning`: warning accent.
- `color-warning-surface`: warning background or subtle surface.
- `color-warning-text`: warning text.
- `color-error`: error accent.
- `color-error-surface`: error background or subtle surface.
- `color-error-text`: error text.
- `color-info`: informational accent.
- `color-info-surface`: informational background or subtle surface.
- `color-info-text`: informational text.

### Overlay and media tokens

- `color-overlay-soft`: light overlay for media legibility or layered UI.
- `color-overlay-strong`: stronger overlay for modals, menus, or high-contrast media treatment.
- `color-media-scrim`: project media scrim used only when text must sit over imagery.
- `color-selection`: selected text or selected UI range highlight.
- `color-focus-ring`: visible keyboard focus ring.

## Light theme direction

- Use a warm off-white or neutral page background.
- Use deep navy as the primary text direction.
- Use gold selectively for emphasis, links, focus, and primary interaction.
- Elevated surfaces should be distinguishable through subtle tonal changes, borders, and spacing, not heavy shadows.
- Borders should remain visible but subtle.
- Project media should remain visually dominant; UI color should frame media rather than compete with it.

## Dark theme direction

- Use deep navy as the primary background family.
- Use light neutral text for primary content.
- Keep gold as the main accent.
- Create surface depth through subtle tonal changes, borders, and controlled contrast.
- Avoid pure black as the default for all backgrounds.
- Avoid excessive glow effects.
- Preserve readable contrast around project media and 3D content.

## Provisional brand mapping

This mapping is planned and subject to visual contrast testing:

- Primary accent: Gold, `rgb(213, 187, 110)`, informs `color-brand-primary`, link emphasis, and primary interaction direction.
- Primary dark background: Deep navy, `rgb(10, 16, 26)`, informs dark theme page and inverse background tokens.
- Primary text in light mode: Deep navy informs `color-text-primary` for light theme.
- Inverse text: a light neutral, not yet finalized, should pair with deep navy and dark elevated surfaces.
- Focus and interaction direction: gold may influence focus and interaction tokens, but focus rings must remain visible in both themes and may need additional contrast support.

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

- Body text and essential controls must meet WCAG contrast expectations.
- Gold text on light backgrounds requires contrast verification before use.
- Text and interactive elements must meet accessible contrast requirements.
- Color must not be the only indicator of state.
- Focus rings must remain visible in both light and dark themes.
- Disabled states must still be identifiable through text, opacity, iconography, or state labels as appropriate.
- Status colors require text or icon support.
- Transparent overlays must be tested over real project media.
- Gold accents need contrast checks before use as text or button backgrounds.
- Reduced-motion and keyboard navigation must be supported.
- Components must work with longer Vietnamese and English strings.

Do not claim exact contrast ratios until they have been tested.

## Color usage rules

- Components consume semantic tokens, not raw color values.
- Page sections must not invent new colors without design-system review.
- Raw brand colors may be used only through approved tokens.
- Project-specific campaign colors may appear inside project media, but must not redefine the global UI.
- Motion and 3D lighting must not reduce text readability.
- Gradients should be limited and purposeful.
- Glow should be rare and must not become the default premium effect.
- New visual values need a clear purpose and should become tokens only when reused.

## Open color decisions

- Exact neutral palette.
- Exact status colors.
- Final light-theme page background.
- Final dark-theme surface scale.
- Whether gold has one or multiple tonal steps.
- Project-specific accent override policy.
