---
name: Learning Hub IA
description: Piattaforma di formazione gamificata per il personale scolastico italiano su AI, GDPR e AI Act
colors:
  primary: "#0071E3"
  primary-light: "#47A1FF"
  primary-dark: "#0058B0"
  accent: "#248A3D"
  accent-dark-mode: "#34C759"
  warning: "#FF9500"
  danger: "#FF3B30"
  info: "#5AC8FA"
  bg-light: "#E2E8F0"
  bg-dark: "#000000"
  text-primary: "#0F172A"
  text-secondary: "#334155"
  text-muted: "#64748B"
  text-light: "#F5F5F7"
typography:
  display:
    fontFamily: "'Outfit', 'Inter', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Outfit', 'Inter', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "'Outfit', 'Inter', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#ffffff"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.bg-light}"
    textColor: "{colors.text-primary}"
  nav-item-active:
    backgroundColor: "#6366f114"
    textColor: "{colors.primary-light}"
    padding: "10px 24px"
  input-default:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "11px 16px"
  quiz-option-correct:
    backgroundColor: "#22c55e1a"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
    padding: "14px 19px"
  quiz-option-wrong:
    backgroundColor: "#ef44441a"
    textColor: "{colors.danger}"
    rounded: "{rounded.md}"
    padding: "14px 19px"
---

# Design System: Learning Hub IA

## 1. Overview

**Creative North Star: "La Sala Formazione"**

This is a professional development room that has been digitised and given teeth. The physical analogy is precise: school staff enter the interface the way they enter a training session — with a professional register, aware that this counts for their record. The design honours that register. It is not a game. It uses game mechanics to serve a serious institutional goal. Every surface should feel like somewhere you can work, not somewhere you play.

The palette stays in translucent layered glass: not because glass looks sophisticated, but because it communicates that the interface has depth, that progress lives in layers, that learning accumulates beneath the surface. The glass is load-bearing, not decorative. Surfaces that do not need to communicate depth do not get glass treatment. The background mesh of radial gradients (blue, pink, green, purple) is the ambient layer the glass surfaces reveal through 40px of blur — remove the mesh and glass becomes meaningless grey.

The tone rejects two failure modes by name. It is not a generic LMS: no Moodle-grey tables, no modal-first workflows, no pagination-as-default for everything. It is equally not a consumer product: no mascots, no unsolicited celebration animations, no casual copy that would embarrass a school administrator using it at their desk. "Professionale, chiaro, motivante" is the exact constraint: professional enough to be taken seriously, clear enough to serve non-technical users, motivating enough to reach the end.

**Key Characteristics:**
- Translucent glass surfaces used structurally, not decoratively, above a four-colour ambient mesh
- Two-tone accent system: Blu Formazione for actions and navigation, Verde Accreditamento exclusively for completion and validation
- Dual theme: light is the office default (slate-blue background), dark follows `prefers-color-scheme`
- Gamification signals (XP bar, progress fills, status badges) are always visible but never the loudest element on screen
- Dense normative content served in slide-paged units with explicit navigation; no infinite scroll
- Italian-language UI throughout; voice is "knowledgeable colleague," not textbook

## 2. Colors: La Tavolozza Istituzionale

A Restrained strategy with two named accents and a tinted-neutral base. Primary and accent each own a distinct semantic role and do not compete.

### Primary
- **Blu Formazione** (`#0071E3` / `oklch(54% 0.22 254)`): The action color. Primary buttons, active navigation states, interactive focus rings, XP bar gradient start. Reads as trusted, digital, institutional. In dark mode only, lightens to `{colors.primary-light}` for contrast on the black surface.
- **Blu Formazione Chiaro** (`#47A1FF` / `oklch(70% 0.17 252)`): Dark-mode primary surfaces, links in content, active nav text. Never used as a button background in light mode.
- **Blu Formazione Scuro** (`#0058B0` / `oklch(43% 0.19 255)`): Button hover and pressed gradient endpoint. Signals state change without introducing a new color.

### Secondary
- **Verde Accreditamento** (`#248A3D` light / `#34C759` dark / `oklch(51% 0.13 148)` light / `oklch(74% 0.18 149)` dark): The completion color. Appears when something has been earned, passed, or validated: quiz-correct states, module-completed badges, XP bar gradient end, the accent button for certificate completion. Its scarcity is load-bearing — when Verde appears, the learner knows something was achieved.

### Tertiary
- **Arancione Scadenza** (`#FF9500` / `oklch(74% 0.18 65)`): Warning states, the login security reminder. Signals attention, not alarm. Never on interactive primary actions.
- **Rosso Errore** (`#FF3B30` / `oklch(58% 0.24 27)`): Danger states, quiz-wrong feedback, error messages. High chroma at the red hue; used only at boundaries and failures.
- **Azzurro Info** (`#5AC8FA` / `oklch(80% 0.10 213)`): Informational context only (the alunni module category icon, info chips). Passive; never used on interactive elements.

### Neutral
- **Grigio Carta Velata** (`#E2E8F0` / `oklch(93% 0.01 247)`): The light-mode page background. Blue-grey, not warm, not white — it reads as institutional paper. Tinted toward the primary hue at minimum chroma (0.01).
- **Ardesia Testo** (`#0F172A` / `oklch(16% 0.03 265)`): Primary text in light mode. Near-black with a blue undertone; never pure black.
- **Ardesia Secondario** (`#334155` / `oklch(35% 0.02 253)`): Secondary text, body copy inside cards and content areas.
- **Ardesia Attenuato** (`#64748B` / `oklch(53% 0.02 252)`): Labels, metadata, timestamps, progress text, muted state.
- **Bianco Ghiaccio** (`#F5F5F7` / `oklch(97% 0.005 265)`): Primary text in dark mode. Apple's near-white; not `#ffffff`.
- **Fondale Scuro** (`#000000`): Dark-mode page background as currently specified. For new dark-mode surfaces, `#0A0A0F` (near-black with minimal blue tint) is preferred over pure `#000000`.

### Named Rules
**The Verde Solo Rule.** Verde Accreditamento appears exclusively in completion, validation, and success contexts. Never use it on primary buttons, decorative highlights, or informational elements. When it appears, it means something was earned.

**The Doppio Tema Rule.** Light mode is the office default; dark mode follows `prefers-color-scheme`. Every component must specify both. A component that only works in light mode is unfinished.

**The Mesh Dependency Rule.** Glass surfaces (`backdrop-filter: blur(40px)`) are only meaningful when the background mesh exists beneath them. In print, in iframe embeds, or in any context where the mesh is absent, glass cards must fall back to an opaque tinted background.

## 3. Typography

**Display Font:** Outfit (with Inter, system-ui fallback)
**Body Font:** Inter (with -apple-system, BlinkMacSystemFont, Segoe UI fallback)

**Character:** Outfit at display sizes carries the voice of the platform: forward, confident, readable at a glance. Inter carries everything else: labels, body copy, navigation, buttons, any surface where legibility under density matters more than character. The pairing works because Outfit is reserved, not scattered.

### Hierarchy
- **Display** (Outfit 800, `2.25rem`, line-height 1.3, `−0.02em` tracking): Welcome headings and major dashboard titles. One per view. Never in sidebars or compact contexts.
- **Headline** (Outfit 700, `1.5rem`, line-height 1.3): Quiz headings, area-view main titles. Outfit at this size still reads as heading, not UI element.
- **Title** (Outfit 700, `1.15rem`, line-height 1.3): Section titles with dividers, admin table headers. The smallest Outfit size.
- **Body** (Inter 400, `0.95rem`, line-height 1.7): Markdown content, card descriptions, quiz feedback. Container max-width `900px` keeps line length at approximately 70–75ch. Color: `{colors.text-secondary}` for content paragraphs, `{colors.text-primary}` for emphasis via `strong`.
- **UI Text** (Inter 500–600, `0.85rem`, line-height 1.5): Navigation items, button text, form inputs, breadcrumbs, dropdown items. The workhorse of the interface.
- **Label** (Inter 700, `0.65–0.7rem`, line-height 1, `0.08–0.12em` letter-spacing, uppercase): XP bar labels, module status badges, section category caps, card metadata. Uppercase + tight weight + wide tracking separates label from content visually without needing a different color.

### Named Rules
**The Outfit-Above-Title Rule.** Outfit is used only for display, headline, and title levels. All interactive elements — buttons, navigation items, inputs, labels, status badges — use Inter. Mixing Outfit into UI controls creates visual noise and breaks the heading/control hierarchy.

**The Label Caps Rule.** Labels use uppercase + wide letter-spacing (`0.08–0.12em`) + maximum weight (700). This is how the system separates metadata from content. Lowercasing a label or reducing its weight creates ambiguity between content and metadata at a glance.

## 4. Elevation

The system uses ambient soft shadows combined with glass surfaces (`backdrop-filter: blur(40px)`). Depth is communicated through three simultaneous mechanisms: shadow (diffuse, not sharp), translucency (the blur revealing the mesh beneath), and border (the glass rim that catches light). Components are not flat — they float above the animated mesh background at distinct vertical distances.

Shadows are ambient-style with very low opacity. They are not structural outlines; they are physical depth cues. The system does not use sharp drop shadows (`box-shadow: 0 2px 4px rgba(0,0,0,0.5)`): those belong to a different aesthetic register entirely.

### Shadow Vocabulary
- **Ambient** (`0 4px 12px rgba(0,0,0,0.05)`): Resting state for cards, containers, and the sidebar. Barely perceptible; signals containment, not height.
- **Hover** (`0 12px 32px rgba(0,0,0,0.10)`): Active and hovered states. Applied on card hover and focusable container focus. Signals the element has responded to the user.
- **Float** (`0 24px 64px rgba(0,0,0,0.15)`): Login card, user dropdown, any surface that overlays the app shell. The highest layer in the system.
- **Glow** (`0 0 40px rgba(0,113,227,0.25)`): Primary-color luminance halo. Used on the XP bar fill and primary button. Not a containment shadow; a radiant state signal.

### Named Rules
**The Flat-at-Rest Rule.** Shadows respond to state, not category. Non-interactive surfaces (stat values, breadcrumbs, progress text, section labels) carry no shadow at rest. Shadow on a static element implies interactivity.

**The Glass-on-Mesh Rule.** Glass surfaces are meaningful only when the background mesh is rendered beneath them (the animated four-colour radial gradient on `body::before`). In any context where the mesh is absent, replace glass with an opaque tinted surface.

## 5. Components

### Buttons
Glass-free, solid, color-carried. Buttons do not participate in the glass system — they are solid action signals on top of it.

- **Shape:** Gently curved (16px / `{rounded.md}`)
- **Primary:** Linear gradient `{colors.primary}` to `{colors.primary-dark}`, white text, `10px 24px` padding. Carries a glow shadow (`0 4px 16px rgba(0,113,227,0.25)`). `transform: scale(0.97)` on active. Hover extends the glow (`0 6px 24px rgba(99,102,241,0.35)`).
- **Accent:** Linear gradient `{colors.accent}` to `{colors.accent-dark}`, white text. Same padding and radius. Used to confirm module completion or advance to the certificate — the single screen where Verde Accreditamento appears on an action element.
- **Ghost:** Transparent background, `{colors.text-secondary}` text, `1px solid {colors.border}`. On hover: `{colors.surface-hover}` fill, `{colors.text-primary}` text, border brightens. The default secondary and tertiary action shape.
- **Transitions:** 200ms `cubic-bezier(0.25, 1, 0.5, 1)` on all state properties. No bounce, no spring.

### Module Cards
The load-bearing component of the dashboard. Grid-laid, glass-surfaced, category-differentiated by icon tint.

- **Shape:** 24px radius (`{rounded.lg}`)
- **Background:** Glass (`rgba(255,255,255,0.25)` + 40px blur in light mode; `rgba(30,30,30,0.35)` in dark mode)
- **Border:** 1px glass rim (`rgba(255,255,255,0.5)` light / `rgba(255,255,255,0.12)` dark). On hover: brightens to `rgba(255,255,255,0.8)` / `rgba(255,255,255,0.3)`.
- **Internal Padding:** `1.5rem`
- **Category Icon:** 44px square, 16px radius, category-specific tinted background. This is the only place where the tertiary colors (info, warning, secondary shades) appear as background fills.
- **Top Accent Strip:** 3px gradient line (`{colors.primary}` to `{colors.accent}`) revealed on hover via `::before opacity: 0 → 1`. Invisible at rest. Not a side stripe; a full-width top border.
- **Elevation:** Ambient shadow at rest; hover shadow + `translateY(-2px)` on hover. Transition: 400ms.

### Sidebar Navigation
Fixed left panel, 280px wide, glass-surfaced, full-height.

- **Container:** Glass background and blur matching module cards. `border-right` glass rim.
- **Nav Item Default:** `0.6rem 1.5rem` padding, `0.85rem` Inter 500, `{colors.text-secondary}`. Left border space is 3px wide but transparent at rest — it is a reserved slot, not a decorative stripe.
- **Nav Item Hover:** Text shifts to `{colors.text-primary}`, `{colors.surface-hover}` background tint, left border becomes `rgba(99,102,241,0.3)` — a pre-active hint.
- **Nav Item Active:** `{colors.primary-light}` text, `rgba(99,102,241,0.08)` background tint, left border `{colors.primary}` at full opacity. The 3px border is the active state indicator; it is invisible in every other state.
- **XP Bar:** 6px height, `{colors.primary}` to `{colors.accent}` gradient fill, `0 0 12px rgba(0,113,227,0.4)` glow. Width transitions at 600ms. Represents progress-to-next-level.

### Text Inputs
Field identity comes from the border, not the fill. Transparent background throughout.

- **Default:** Transparent background, `1px solid {colors.border}`, 16px radius, `0.65rem 1rem` padding, `0.85rem` Inter 400.
- **Focus:** Border switches to `{colors.primary}`. Login form adds `0 0 0 3px rgba(0,113,227,0.25)` focus ring. No fill change.
- **Placeholder:** `{colors.text-muted}`.
- **Disabled:** `opacity: 0.6`, `cursor: not-allowed`. No background change.

### Quiz Options
Full-border interactive choices, not radio buttons or checkboxes. Each option is a full-width bordered button that holds all three states visually.

- **Default:** `1px solid {colors.border}`, transparent background, `0.85rem 1.2rem` padding, 16px radius.
- **Selected:** `{colors.primary}` border, `rgba(99,102,241,0.10)` tint, `{colors.primary-light}` text.
- **Correct:** `{colors.accent}` border, `rgba(34,197,94,0.10)` tint, `{colors.accent-light}` text. Verde Accreditamento's clearest appearance.
- **Wrong:** `{colors.danger}` border, `rgba(239,68,68,0.10)` tint, `#FCA5A5` text.
- **Option Letter Badge:** 28px circle, `border: 1px solid currentColor`, inherits state color. Changes with the parent option's state.

### XP and Progress System (Signature Component)
The gamification spine. Always visible, never the loudest element on screen.

- **XP Bar (sidebar):** 6px height, gradient fill (`{colors.primary}` to `{colors.accent}`), glow shadow `0 0 12px rgba(0,113,227,0.40)`. Width animated at 600ms ease-out. Accompanied by a label row: user level left, XP value right, uppercase Inter 700 at 0.7rem.
- **Module Progress Bar (card):** 4px height, same gradient fill, no glow. Subtler than the XP bar — it is secondary progress inside a card, not the primary gamification signal.
- **Status Badge Pills:** 100px border-radius (fully round), 0.65rem Inter 700, uppercase. Three states: `not-started` (neutral tint, muted text), `in-progress` (primary glow tint, primary-light text), `completed` (accent glow tint, accent-light text). The `completed` state is Verde Accreditamento's most frequent appearance.

## 6. Do's and Don'ts

### Do:
- **Do** keep the XP bar, module completion badges, and progress fills visible at all times. These gamification signals are load-bearing motivators; they must not be hidden behind tabs, accordions, or "advanced" views.
- **Do** apply glass treatment (`backdrop-filter: blur(40px)` with matching glass border) only to container surfaces that sit directly above the background mesh: sidebar, top header, module cards, slide panels, dropdowns. These are the intended glass surfaces.
- **Do** use Verde Accreditamento (`{colors.accent}`) exclusively for success, completion, and validation states. Quiz correct, module completed, certificate earned — nothing else.
- **Do** respect `prefers-reduced-motion`. All transitions collapse to 0.01ms when the preference is set. The implementation already handles this; preserve it in every new component.
- **Do** cap content line length at the `.content-area` max-width (`900px`). For markdown content at `0.95rem` with line-height 1.7, this keeps reading comfortable at approximately 70–75ch.
- **Do** use uppercase + wide letter-spacing (`0.08–0.12em`) + Inter 700 for all label and metadata text. This is what makes labels visually distinct from content without needing a different color.
- **Do** use the top-accent strip (full-width 3px `::before` gradient on hover) as the card's active signal. It appears on hover and stays invisible at rest.

### Don't:
- **Don't** apply glass surfaces to components that don't sit above the background mesh: inline alerts, inline progress annotations, empty-state messages, print output. Glass without a mesh below it is a grey box.
- **Don't** add gradient text (`-webkit-background-clip: text` with a gradient background) to any new component. The existing logo and stat-value instances are legacy. All new headings and labels use a single solid color from the palette.
- **Don't** build identical card grids: same-sized glass cards, same icon-heading-text structure, repeated without differentiation. The module card grid works because category-specific icon tints differentiate each entry. A flat undifferentiated grid is prohibited.
- **Don't** use Outfit in labels, buttons, navigation items, form controls, or status badges. Outfit is for display, headline, and title levels only. Outfit in a button label is wrong.
- **Don't** let any new screen resemble a generic LMS. If a feature's primary affordance is a data table with no learner-state context (progress, XP, completion status), add the learner's context before shipping. A screen with only a table is Moodle.
- **Don't** let this feel like a consumer product. No mascots, no confetti animations that run without user initiation, no informal copy. The learner is a public-sector professional; the voice is "knowledgeable colleague," not startup.
- **Don't** use side-stripe colored borders (`border-left` or `border-right` greater than 1px as a visual accent) on new cards or callout boxes. The only side border in the system is the 3px nav-item left border, which is invisible at rest and appears only in active state. Any new callout uses background tints or icon anchors instead.
- **Don't** use pure black (`#000000`) as a background in new dark-mode surfaces. If extending the dark theme, use `#0A0A0F` (near-black with a minimal blue tint, `oklch(5% 0.01 265)`) to keep neutrals off the absolute extreme.
