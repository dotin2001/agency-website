# Accessibility

Accessibility is a continuous product requirement and is not yet fully implemented.

## Semantic HTML

- Use semantic landmarks, headings, lists, links, buttons, forms, and sections.
- Preserve logical heading order.
- Do not use non-interactive elements for interactive behavior.

## Keyboard navigation

- All navigation, forms, menus, galleries, sliders, modals, and CTAs must be keyboard usable.
- Keyboard order should match visual and reading order.
- Escape, arrow, tab, and enter behavior should follow expected patterns where relevant.

## Visible focus states

- Every interactive element needs a visible focus state.
- Focus states must not rely on color alone.
- Focus indicators should remain visible in light and dark themes.

## Color contrast

- Text, controls, icons, and state indicators must meet accessible contrast requirements.
- Gold on light or dark surfaces must be checked before use.
- Error and success states must not depend on color alone.

## Alternative text

- Meaningful images need descriptive alt text.
- Decorative images should use empty alt text.
- Project media must describe content and context, not just file names.

## Forms

- Inputs need explicit labels.
- Validation messages must be clear, associated with fields, and available to assistive technology.
- Required fields must be communicated accessibly.
- Error summaries should be considered for longer forms.

## Navigation and menus

- Main navigation, footer navigation, locale switcher, and mobile menus must be screen-reader and keyboard accessible.
- Active route and expanded menu states should be communicated.
- Touch and pointer targets must remain easy to activate.

## Sliders and galleries

- Important content must not be available only through inaccessible carousel behavior.
- Controls need labels and keyboard support.
- Autoplay should be avoided or controllable.
- Current slide or gallery state should be announced when appropriate.

## Reduced motion

- Respect `prefers-reduced-motion`.
- Motion must not be required to understand content.
- Scroll-driven, page transition, and 3D motion need static or simplified alternatives.

## Screen-reader behavior

- Maintain meaningful document order.
- Avoid duplicate or hidden content that creates confusing announcements.
- Use ARIA only when native HTML is insufficient.
- Dynamic updates should be announced only when useful.

## 3D canvas fallback content

- Canvas experiences need equivalent HTML content.
- WebGL failure, reduced-motion, and mobile fallbacks must preserve narrative meaning.
- Canvas controls must not trap focus.

## Touch target sizing

- Interactive targets should be large enough for touch use.
- Spacing must prevent accidental activation.
- Mobile navigation and form controls need intentional sizing.

## Verification expectations

- Review semantic structure during implementation.
- Test keyboard-only navigation.
- Check focus visibility, contrast, labels, and alt text.
- Test reduced-motion behavior.
- Use automated accessibility tools as support, not as the only verification.
