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

Typography is planned only. Do not install fonts, add `next/font`, create CSS variables, or implement typography classes in this step.

### Typography roles

Use a two-role font system:

- Display font: expressive headlines for cinematic and editorial moments.
- Sans-serif text font: body, UI, metadata, captions, forms, and long-form reading.

Final fonts are unresolved. Font selection must provide full Vietnamese character support, strong English support, suitable variable-font options where practical, acceptable web performance, clear licensing, only necessary weights, readable punctuation and numerals, and no dependence on a display font for essential UI.

### Display typography

Use for homepage hero, project openings, major storytelling statements, and section transitions.

- Role: bold editorial presence with strong contrast against body text.
- Size direction: largest type in the system, scaled down intentionally on smaller screens.
- Line-height direction: tight enough for display impact but generous enough for Vietnamese diacritics.
- Weight direction: strong weights only where readability holds.
- Tracking direction: default or slightly controlled tracking; avoid tight tracking that harms Vietnamese readability.
- Responsive behavior: reduce size and line length on mobile; avoid overflow and avoid manual line breaks unless editorially required.
- Usage rule: do not use display typography for long paragraphs or dense UI.

### Heading typography

- `h1`: page title or project opening title; strongest semantic page heading, usually one per page.
- `h2`: major section heading for homepage chapters, case-study sections, and primary page sections.
- `h3`: subsection heading for grouped content, service blocks, project details, and team or proof modules.
- `h4`: compact heading for cards, metadata groups, form sections, and supporting modules.

Heading rules:

- Preserve semantic heading order; visual scale must not replace document structure.
- Keep expected line length controlled, especially for Vietnamese headings.
- Use spacing to clarify section relationships rather than relying only on size.
- Mobile headings should wrap naturally and reduce scale intentionally.
- Avoid hardcoded line breaks that only work in one locale.

### Body typography

- Large body or lead text: introductory statements, section leads, and short editorial explanations.
- Standard body text: paragraphs, case-study narrative, service descriptions, and general content.
- Compact body text: supporting details where density is needed, but not for long reading.

Body rules:

- Prioritize readability over atmosphere.
- Keep line length controlled.
- Use line-height that supports Vietnamese and English diacritics.
- Keep paragraph spacing consistent.
- Avoid overly small text.
- Avoid uppercase for long body content.

### UI typography

Use for buttons, navigation, labels, form fields, tabs, filters, and utility text.

- Role: concise, readable, consistent interaction language.
- Size direction: compact but comfortably readable.
- Line-height direction: stable enough for controls and form fields.
- Weight direction: medium emphasis for actions and labels; avoid thin weights.
- Tracking direction: normal by default; uppercase only when intentional and accessible.
- Responsive behavior: labels must remain clear in both Vietnamese and English and must not require hover-only context.

### Caption and metadata typography

Use for project industry, year, services, image captions, client roles, helper text, and validation messages.

- Role: visually secondary but readable.
- Size direction: smaller than body text but not so small that captions or validation messages become difficult to read.
- Line-height direction: enough for multi-line captions and form helper text.
- Weight direction: regular or medium depending on contrast and density.
- Tracking direction: normal by default; overline treatment may use controlled spacing only for short labels.
- Responsive behavior: captions stay close to related media and metadata wraps without truncating important context.

### Planned type tokens

The type scale is planned and subject to visual testing. Exact pixel values are not selected in this step.

- `type-display-xl`: hero and major opening statements; largest fluid display size, tight-but-readable line-height, strong weight, normal or controlled tracking, significant mobile reduction.
- `type-display-lg`: section transitions and project openings; large fluid display size, readable line-height, strong weight, normal tracking, mobile reduction.
- `type-heading-1`: page-level `h1`; large heading size, balanced line-height, bold or semibold weight, normal tracking, wraps naturally.
- `type-heading-2`: major section `h2`; clear section scale, comfortable line-height, semibold or bold weight, normal tracking, responsive reduction.
- `type-heading-3`: subsection `h3`; medium heading scale, readable line-height, semibold weight, normal tracking, stable across responsive layouts.
- `type-heading-4`: compact `h4`; small heading scale, readable line-height, medium or semibold weight, normal tracking.
- `type-body-lg`: lead copy; larger body size, generous line-height, regular or medium weight, normal tracking.
- `type-body-md`: standard body; default reading size, comfortable line-height, regular weight, normal tracking.
- `type-body-sm`: compact body; smaller reading size, still accessible, regular weight, normal tracking.
- `type-ui-md`: buttons, navigation, form controls, tabs, and filters; compact size, stable line-height, medium weight, normal tracking.
- `type-ui-sm`: utility labels and dense controls; small but readable size, stable line-height, medium or regular weight, normal tracking.
- `type-caption`: captions, helper text, validation text, and metadata; secondary size, readable line-height, regular weight, normal tracking.
- `type-overline`: short metadata labels only; small size, controlled line-height, medium weight, careful tracking, not for long phrases.

### Fluid typography

- Display and major heading sizes may use fluid scaling.
- Body and UI text should remain within controlled accessible ranges.
- Use `clamp()` only when implemented intentionally.
- Mobile text must not feel like a compressed desktop scale.
- Large text must avoid overflow in Vietnamese.
- Headings should wrap naturally without manual line breaks unless editorially required.

### Typography localization rules

- Vietnamese diacritics must render correctly.
- Long Vietnamese headings must be tested.
- English and Vietnamese may require different line breaks.
- Do not hardcode line breaks solely for one locale.
- Avoid typefaces with weak Vietnamese glyph support.
- Preserve correct punctuation and quotation marks per locale.
- Do not reduce Vietnamese font size only to force matching layouts.

### Typography accessibility rules

- Body text must remain comfortably readable.
- Zoom to 200% must not break content.
- Headings must follow semantic order.
- Visual scale must not replace semantic heading structure.
- Text should not be embedded in images when HTML text can be used.
- Focus and validation text must remain readable.
- Avoid low-contrast thin weights.
- Avoid motion that makes text difficult to read.

### Typography performance rules

- Prefer self-hosted or framework-optimized font loading.
- Load only required families, weights, and styles.
- Prefer variable fonts when they reduce total payload.
- Define fallback stacks.
- Minimize layout shift.
- Preload only critical font files.
- Do not load decorative fonts for unused sections.

### Open typography decisions

- Final display font.
- Final body/UI font.
- Exact type scale.
- Exact line-height values.
- Exact weight set.
- Whether the display font is used in Vietnamese.
- Whether both themes use identical weight choices.

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
