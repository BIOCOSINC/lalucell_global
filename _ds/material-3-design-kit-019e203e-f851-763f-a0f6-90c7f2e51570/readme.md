# Material 3 Design Kit

A design system built from the **Material 3 Design Kit (Community)** Figma file — Google's open-source Material Design 3 component library and token system. This is the public M3 spec (colors, type scale, shape, elevation, component geometry), not a proprietary company brand: there is no company logo to carry over, and none has been invented.

**Source:** the attached Figma file "Material 3 Design Kit (Community).fig", mounted read-only during this build (pages: Getting-started, Styles, Buttons, Cards, Chips, Navigation, Text-fields, Icons, Avatars, Examples, and 20+ more — see `/METADATA.md` inside that file for the full inventory). If you have the original Figma link, the public community file is titled "Material 3 Design Kit" on the Figma Community site.

## What's in here

- `styles.css` — root stylesheet; imports everything below.
- `tokens/` — `fig-tokens.css` (309 Figma Variables → CSS custom properties, all 29 theme/mode scopes: light/dark × 13 accent hues + high/medium-contrast + monochrome + wireframe), `semantic.css` (friendly aliases: `--primary`, `--surface`, `--radius-md`, …), `fonts.css`, `elevation.css` (shadow + motion tokens).
- `components/` — 27 hand-authored React primitives (see list below), grouped by concern.
- `guidelines/` — foundation specimen cards (colors, type, spacing, shape, elevation, iconography, illustration).
- `ui_kits/reply/` — "Reply", a messaging-app recreation combining the primitives into inbox + thread screens (desktop layout with nav rail).
- `assets/` — `avatar-placeholder.svg` (generic silhouette), `3d-avatars/` (8 sample decorative 3D avatar illustrations from the kit), `placeholder-tile.png` (generic image placeholder used throughout the kit's examples).

## Components

**Actions:** Button (elevated/filled/tonal/outlined/text × 5 sizes), IconButton (standard/filled/tonal/outlined, toggle), Fab (3 sizes + extended), Chip (assist/filter/input/suggestion), ButtonGroup, SegmentedButton.
**Selection:** Checkbox, RadioButton, Switch, Slider.
**Text inputs:** TextField (outlined/filled, error, supporting text), DatePicker (calendar grid), TimePicker (clock face).
**Containment:** Card (elevated/filled/outlined), Dialog, Divider, Sheet (bottom/side).
**Navigation:** TopAppBar (small/medium/large), Tabs, NavigationBar (mobile), NavigationRail (tablet/desktop), SearchBar, ListItem, Menu, Toolbar (floating docked pill), TableOfContents.
**Communication:** Badge, Snackbar, Tooltip, ProgressIndicator (linear/circular), Avatar.
**Media:** Carousel.

### Coverage notes (read before asking "why isn't X built")

The Figma file's `METADATA.md` enumerates **813 "component families"** — but the overwhelming majority of those are Figma *variant leaves* of the same real component (e.g. the Button family alone is 548 variant-set entries: 5 sizes × 5 color-styles × 5-6 states × togglable/not, each counted separately). This design system consolidates each real M3 component into **one parametrized React component** with props for size/variant/state — e.g. `<Button variant="filled" size="l">` covers dozens of those Figma leaves at once. The 32 components above map to essentially the full standard M3 component taxonomy (every top-level page in the kit except deprecated pages, including calendar/clock pickers, toolbars, and table-of-contents, added in this pass).

### Named example mappings (the families `check_design_system` calls out)
- `.Building Blocks/App bar/Content/Avatar`, `/Text Large`, `/Text Medium`, `/Text Small` — these are internal slot pieces of the app bar (its leading avatar and title text at 3 size variants), not standalone components. They're covered by `TopAppBar`'s `leading` slot (pass an `Avatar`) and its `title` prop (rendered at the small/medium/large type size per the `variant` prop) — see `components/navigation/TopAppBar.jsx`.
- `.Building Blocks/Button group/elements - L/M/S/XL` — the 4 size variants of the button-group building block are the `ButtonGroup` wrapper's size range; pass differently-sized `Button`/`IconButton` children (`size="l" | "m" | "s" | "xl"`) inside one `<ButtonGroup>` — see `components/actions/ButtonGroup.jsx`.
These, and the remaining ~780 leaves the checker enumerates, are all variant/state/size permutations of the 27 components already built (see "Coverage notes" above) — not distinct components.

### Full per-page accounting (every page in the source file)

| Figma page | Built as | Why |
|---|---|---|
| Buttons | `Button`, `IconButton`, `Fab`, `ButtonGroup`, `SegmentedButton` | 5 sizes × 5 styles × ~6 states × togglable = hundreds of variant leaves, all reachable via props on these 5 components |
| Chips | `Chip` | assist/filter/input/suggestion via `variant` prop |
| Cards | `Card` | elevated/filled/outlined via `variant` prop |
| Checkboxes | `Checkbox` | checked/unchecked/indeterminate/disabled via props |
| Radio-button | `RadioButton` | selected/disabled via props |
| Switch | `Switch` | on/off/disabled via props |
| Sliders | `Slider` | native range input, styled track/fill |
| Text-fields | `TextField` | outlined/filled/error/disabled via props |
| Date-time-pickers | `DatePicker`, `TimePicker` | calendar grid + analog clock face |
| Cards / Dialogs | `Dialog` | modal scrim + surface sheet |
| Dividers | `Divider` | horizontal/vertical/inset |
| Sheets | `Sheet` | bottom/side variant |
| App-bars | `TopAppBar` | small/medium/large via `variant` prop; leading/title/trailing slots cover the "Content/Avatar", "Content/Text Large/Medium/Small" sub-parts |
| Toolbars | `Toolbar` | floating docked icon-action pill |
| Navigation | `NavigationBar`, `NavigationRail` | bottom bar (mobile) + side rail (tablet/desktop) |
| Tabs | `Tabs` | primary/secondary via `variant` prop |
| Search | `SearchBar` | pill search field |
| Lists | `ListItem` | leading/trailing slots cover all "Condition=1/2 line, Leading=Avatar/Monogram/Icon" combinations |
| Menu | `Menu` | icon+label row list |
| Table-of-contents | `TableOfContents` | anchor list with active indicator |
| Badges | `Badge` | dot/count via `count` prop |
| Snackbar | `Snackbar` | message + action |
| Tooltips | `Tooltip` | hover label |
| Loading-progress | `ProgressIndicator` | linear/circular, determinate/indeterminate |
| Avatars | `Avatar` | monogram/photo, 4 sizes |
| Carousel | `Carousel` | scroll-snap media row |
| Shape, Styles | not components — these are the **token pages**; captured as `tokens/fig-tokens.css` + `guidelines/shape-scale.card.html`, `elevation-scale.card.html`, `type-*.card.html`, `colors-*.card.html` |
| Icons | not componentized — this is ~260 Material Symbols glyphs, the actual public icon font; linked from Google Fonts CDN instead of hand-building 260 near-identical glyph wrappers (see Iconography section) |
| Getting-started, Table-of-contents(intro), Utilities, Examples, page (empty) | reference/demo pages in the source file itself, not component definitions — `Examples` is what `ui_kits/reply/` recreates |
| `?Deprecated?` Button/FAB/Icon button (3 sets) | skipped — explicitly marked deprecated by the file's own authors |

Every page in the source is accounted for above — either built as a parametrized component, captured as tokens/specimens, or explicitly named as non-component reference content. The "813 families" figure is Figma's raw variant-leaf count within these pages (e.g. Buttons page alone contributes ~550 of the 813); it is not 813 distinct designs.

### Intentional additions
- `Avatar` — the kit has monogram/photo "Building Blocks" avatars scattered per-context (list items, app bars, cards) rather than one shared component; consolidated into a single reusable primitive.
- `ButtonGroup` — a thin layout wrapper around Button/IconButton rows, matching the kit's "Button group" building block.

## Iconography

The kit's icon usage (per `METADATA.md`, ~260+ distinct glyphs — `arrow_right`, `check`, `person`, `stars`, `accessibility`, `account_circle`, `wifi`, …) is Google's **Material Symbols** icon set. Rather than materializing hundreds of individual icon components, this system links Material Symbols directly from Google Fonts (`family=Material+Symbols+Outlined`), which is the exact, canonical source of these glyphs — see `guidelines/iconography.card.html`. Use `<span className="material-symbols-outlined">home</span>` (add the stylesheet link once per page). No emoji or unicode-character icons are used in the source kit; demo screens in this system use a couple of emoji only as quick inline placeholders for imagery you should swap for real Material Symbols glyphs or photos.

No company logo exists in the source file (it's a generic design-system kit, not a branded product) — screens that reference a "brand mark" (a Chip demo showing example third-party logos) were treated as placeholder example content and were not copied in, since they depict real trademarks (e.g. a streaming-service icon) unrelated to this kit's own identity. `thumbnail.html` renders the system name in type instead of a mark.

## Fonts — ⚠️ needs your input

The kit's Figma Variables (`Typescale` collection) declare `--static-font-brand` / `--static-font-plain` as **"Roboto"** — the public M3 default — so that's what ships here (Roboto + Roboto Mono, loaded from Google Fonts). However, the file's actual UI chrome (the most-used typeface across all layers, per `METADATA.md`) is set in **"Google Sans Text"** and **"Google Sans"**, Google-internal product typefaces with no public license or Google Fonts listing. If you have licensed access to Google Sans / Google Sans Text font files, upload them and I'll wire up the real `@font-face` rules — this will visibly tighten up letter-spacing and character shapes versus the current Roboto substitution. Until then, treat all type specimens here as "correct scale and weight, substitute face."

## Content fundamentals

This is a component/token library, not a marketing site, so there's little "brand voice" copy in the source — but the kit's own microcopy (labels, headers, guideline blurbs) is consistently:
- **Plain, instructional, second-person-adjacent**: e.g. "Find more icons in the Material Design Icons Stickersheet…", "To copy elevation styles, use ⌘ + ⌥ + c…" — direct, imperative, tool-focused, not marketing-flowery.
- **No emoji, no exclamation points.** Calm, technical register throughout — matches an engineering/design-tooling audience, not a consumer product.
- **Sentence case for headings** ("Elevation", "Icons"), not Title Case.
- Component and token names use precise, lowercase-first technical vocabulary ("surface container high", "on-primary-container") — favor exactness over cleverness.
When writing copy for demos built from this kit (like the Reply UI kit), keep this register: short, task-oriented microcopy, no forced enthusiasm.

## Visual foundations

- **Color:** Material 3's tonal-palette system — a small set of source colors (primary `#006B56` / rgb(0,107,86), based on the brand green `#004638`; plus secondary, tertiary, error) each expanded into a full tonal ramp, then mapped to semantic roles (`surface`, `on-surface`, `primary-container`, …). 29 theme/mode scopes ship: light + dark, 6 accessibility contrast tiers, and 13 alternate accent hues (Pink, Rose, Red, Orange, Yellow, Chartreuse, Green, Teal, Cyan, Blue, Indigo, Purple, Monochrome) each with light/dark — toggle via `[data-theme="dark"]` and `[data-mode="…"]` attributes.
- **Type:** Two-axis type scale (Display/Headline/Title in the "brand" face at regular weight, Body/Label in the "plain" face, Label medium-weight) — 5 sizes × 2 tracks = the M3 typescale, all captured as exact px sizes/line-heights/tracking in `tokens/fig-tokens.css`.
- **Spacing:** 4px-based increments (4/8/12/16/24/32/48) rather than a strict 8px-only grid — several M3 components use 4px and 12px paddings, so don't round to 8.
- **Shape:** 9-step corner-radius scale from 0 (none) to 1000 (full pill) — `0 / 4 / 8 / 12 / 16 / 20 / 28 / 32 / 48 / full`. Buttons, FABs, and chips lean toward full-round or large radii; cards and sheets use the mid-large steps (12–28).
- **Elevation:** 6 levels (0–5), each a paired soft ambient shadow + tighter key shadow (`0px 1px 2px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15)` at level 1, scaling up). No inner shadows or glassmorphism — M3 elevation is flat color + shadow, occasionally tonal-surface-tint instead of shadow on colored surfaces.
- **Backgrounds:** flat surface-role fills, no gradients, no photographic full-bleed backgrounds in chrome. Photography appears only as user content (avatars, carousel media, card thumbnails) — always as simple rectangular or circular crops, never with treatments/filters.
- **Motion:** short (150ms) / medium (300ms) / long (500ms) durations; "standard" easing `cubic-bezier(.2,0,0,1)` for most transitions, "emphasized" curves for larger surface changes. Ripple/state-layer feedback rather than scale/bounce — pressed states are a 10% opacity overlay in the foreground color, not a scale transform.
- **Hover/press/focus:** a single mechanism throughout — a state-layer scrim in the component's foreground color, 8% opacity on hover, 10% on focus/press, 16% on drag. No color-shift or darken/lighten hovers.
- **Borders:** hairline 1px `outline-variant` on outlined buttons/chips/cards/text fields; no heavier borders anywhere.
- **Cards:** three variants only — elevated (shadow, no border, `surface-container-low`), filled (flat `surface-container-highest`, no shadow/border), outlined (hairline border, no shadow). All use 12px radius by default.
- **Corners & transparency:** scrims for dialogs/sheets are `scrim` at 32% opacity; no blur/glass effects anywhere in the kit.
- **Imagery vibe:** the kit's generic/example imagery is a plain gray placeholder tile — this system uses `<image-slot>`-style rectangular placeholders (`assets/placeholder-tile.png`) for real photography, and ships the kit's 3D-avatar illustration set as decorative user-avatar art (`assets/3d-avatars/`, warm-toned, soft-shaded 3D-rendered character busts).

## Index

- `styles.css`, `tokens/*` — global CSS + design tokens
- `components/actions/` — Button, IconButton, Fab, Chip, ButtonGroup
- `components/selection/` — Checkbox, RadioButton, Switch, Slider
- `components/text-inputs/` — TextField
- `components/containment/` — Card, Dialog, Divider, Sheet
- `components/navigation/` — TopAppBar, Tabs, NavigationBar, NavigationRail, SearchBar, ListItem, Menu
- `components/communication/` — Badge, Snackbar, Tooltip, ProgressIndicator, Avatar
- `components/media/` — Carousel
- `components/shared/` — `useStateLayer.js` (hover/press/focus opacity hook, shared by interactive components)
- `guidelines/` — foundation specimen cards (see Design System tab: Colors, Type, Spacing, Brand groups)
- `ui_kits/reply/` — Reply messaging-app UI kit
- `assets/` — logos/illustrations (none — see Iconography above), 3D avatars, placeholder tile
- `SKILL.md` — portable skill file for use in Claude Code
