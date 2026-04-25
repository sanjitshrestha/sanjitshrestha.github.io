# Sanjit Shrestha — Engineering Portfolio Design System

A precision-engineered visual identity for **Sanjit Shrestha**, a Software Architect & Engineer based in Bhaktapur, Nepal, with 6+ years of experience in Java, Spring Boot, microservices, AWS, and team leadership. This system rebrands his existing portfolio (sanjitshrestha.github.io) into a more advanced, mature, technically-credible direction — moving away from the previous Bootstrap "developer-with-rainbow-gradients-and-emoji" aesthetic into something that feels like Linear, Vercel, or a high-end engineering documentation site.

---

## Sources

- **Codebase (read-only mount):** `sanjitshrestha.github.io/` — original portfolio (Bootstrap 4, jQuery, AOS, custom CSS). Hero, About, Experience, Skills, Projects, Contact sections. ~1,730 lines `index.html`.
- **Resume PDF:** `sanjitshrestha.github.io/Sanjit Shrestha CV 2026.pdf` — copied to `assets/`.
- **Original logo:** `sanjitshrestha.github.io/images/logo.svg` (kept at `assets/original-logo.svg` for reference; **superseded** by the new mark).
- **Profile photo:** `sanjitshrestha.github.io/images/sanjit.jpg`.

---

## Index of this design system

| File / folder | Purpose |
|---|---|
| `colors_and_type.css` | Color tokens, type scale, semantic CSS vars, font imports |
| `assets/` | Logo (mark, light, lockup), profile photo, original logo, CV |
| `preview/` | Cards rendered in the Design System tab — colors, type, components |
| `ui_kits/portfolio/` | High-fidelity React recreation of the rebranded portfolio |
| `SKILL.md` | Cross-compatible skill manifest for Claude / Claude Code |

---

## Brand essence

> **The discipline of an engineer. The clarity of a writer. No theatrics.**

This identity reads as a senior architect's portfolio — quiet confidence, evidence over performance. We treat code, systems, and architecture as serious craft. The visual language borrows from **technical schematics, monospaced documentation, and editorial print** rather than from "developer-startup" tropes (gradients, neon, terminal glow, emoji).

---

## Content fundamentals

**Voice.** First-person plural avoided. Sanjit speaks in **first-person singular ("I")** when reflecting, and in **declarative third-person** when describing systems and outcomes. Sentences are short. Claims are quantified.

- ✅ "I architect payment systems that move $1M+ per month."
- ✅ "Designed and led the migration of a monolithic billing engine to 14 Spring Boot services."
- ❌ "Let's code together!" / "Building the future, one line at a time"
- ❌ Excited exclamations, "rockstar", "ninja", "passionate about clean code"

**Casing.** Sentence case for everything, except technical proper nouns (Java, Spring Boot, AWS, Kubernetes). Section headers are sentence case ("Selected work", not "SELECTED WORK"). Eyebrows / labels in **UPPERCASE MONO** with wide tracking, used sparingly as section markers — `01 / WORK`, `STATUS · ACTIVE`.

**Tone.** Calm, precise, slightly understated. We never sell; we describe and let scale do the talking. We name technologies plainly without "expert in" / "passionate about" qualifiers — listing them next to a metric implies the expertise.

**Numbers do the heavy lifting.** Replace adjectives with figures wherever possible. "Scalable system" → "10K active users, 1M+ tx/month, 99.9% uptime". Use the mono font for all numerals in stats and metrics.

**Emoji.** **Never.** Replaced by mono labels, schematic icons, or simply nothing.

**Examples.**

- Bio (old): *"I'm a passionate Software Architect with 6+ years of experience transforming complex business requirements into elegant, scalable software solutions, including delivery for Big4 enterprise initiatives."*
- Bio (new): *"Software Architect, six years in. I design backend systems that pay people, move freight, and stay up. Currently leading delivery for Big4 engagements at SyanSoft Technologies in Bhaktapur."*

- Section header (old): *"🛠️ Technical Arsenal"*
- Section header (new): *`02 / STACK` — Tools I reach for first*

---

## Visual foundations

**Color.** A **monochromatic neutral palette** (cool gray, very lightly tinted toward blue) plus **one signal accent: a saturated engineer's green** (`--signal-500: #00a352`) used only for active states, status indicators, key data points, and a single strategic highlight per page. Two functional secondary accents (amber for "in progress", crimson for "error", azure for inline link) appear at most once or twice per surface. **No multi-stop gradients.** No purple. No neon.

**Type.**
- **Display & body:** Inter (sans-serif) — calibrated, neutral, technically-leaning. 
- **Mono:** JetBrains Mono — code, numerals in metrics, eyebrows, labels.
- **Editorial accent:** Newsreader (serif) — used only for hero display headlines and pull quotes, to inject editorial weight against the otherwise sans/mono system.

Type scale is anchored at 16px body and follows a major-third (1.25) progression to 88px. Numerals in stat blocks always use mono with `font-variant-numeric: tabular-nums`.

**Spacing.** 4px grid, with a generous resting density. Vertical rhythm leans on **64px and 96px** between sections. Cards have **24–32px** internal padding. Whitespace is the dominant element on every screen.

**Backgrounds.** Solid `--bg-canvas` (white) and `--bg-surface` (very pale gray). **No full-bleed photography.** Imagery is restricted to the profile photo and abstract schematic illustrations (dot grids, hairline diagrams, monospace ASCII-art figures rendered in SVG). One acceptable texture: a **2px dot grid** at 5% opacity used as a behind-hero pattern.

**Animation.**
- **Easing:** `cubic-bezier(0.2, 0.7, 0.2, 1)` — a calm, decelerating ease-out. No bounce, no spring overshoot.
- **Durations:** 120ms (hover/state flips), 220ms (most transitions), 420ms (page-level fades).
- **Style:** opacity + 4–8px translate. **Never** scale or rotate UI on hover. Cards do not "lift". A hairline border may shift from `--line-hairline` to `--neutral-700` to indicate hover.
- **Motion budget:** at most **one** continuously-animating element per screen (e.g. a single blinking caret, or a status indicator). The previous portfolio had ~5 simultaneous loops; we cut all of them.

**Hover states.** Solid color flip on text links (no underline animation). Buttons darken background by one step (`--neutral-900` → `--neutral-800` for primary). Cards shift their border from `--line-hairline` to `--neutral-700`; no shadow lift, no transform. Icon buttons: foreground goes from `--fg-secondary` to `--fg-primary`.

**Press states.** Buttons lose 1px of height via `transform: translateY(1px)` and darken by another step. No scale shrink.

**Borders.** **Hairlines everywhere.** 1px `--line-hairline` is the workhorse. Internal section dividers also use 1px. Strong borders (`--line-strong`) appear at the page's outer container. Border radii are restrained: `4px` on inputs/buttons, `6px` on cards, `8px` on the logo lockup, `0` on tables, dividers, and structural blocks.

**Shadows.** **Sparse.** We rely on hairlines, not elevation. The strongest shadow used (`--shadow-lg`) is reserved for floating popovers and the resume download CTA. Default cards: **no shadow** + 1px hairline border.

**Capsules vs. protection gradients.** No protection gradients. We never overlay text on photography that requires a fade-to-dark. Tags use **mono capsules** (pill, hairline border, no fill) rather than colored chips.

**Transparency & blur.** Used in exactly one place: the navigation bar uses `backdrop-filter: blur(12px)` over a 90%-white surface when scrolled. No other glassmorphism.

**Imagery vibe.** Cool, neutral, slightly desaturated when photography appears. Profile photo: black-and-white preferred; if color, slightly muted with raised black point. No bokeh, no warm orange grade.

**Cards.** White surface, 1px `--line-hairline` border, `6px` radius, **no shadow**, 24px internal padding. Hover: border flips to `--neutral-700`. The card is the primary content vessel; we don't nest cards inside cards.

**Layout rules.** 12-column grid, 24px gutter, 1200px max content width. **One fixed element only:** the top navigation. Footers are statically placed. Side sheets (used for project detail) slide from the right. Asymmetric layouts are encouraged for editorial moments (the hero), but content sections snap to the grid.

**Schematic motifs.** Three details that appear consistently and signal "engineering":
1. **Section indices** — `01 /`, `02 /` mono numbers preceding section titles.
2. **Hairline crosshair markers** at corners of feature cards (a 12px L-shape in `--neutral-300` at each corner).
3. **Mono key/value rows** for metadata: ` STATUS    Active ` / ` LOCATION  Bhaktapur, NP ` rendered in two-column mono with the key in `--fg-tertiary`.

---

## Iconography

**Approach.** **Thin-stroke line icons, 1.5px, 24px viewbox, square caps.** No filled icons. No multi-color icons. No emoji as iconography (the original portfolio leaned on ☕🍃☁️🐳 — all removed).

**System.** We adopt **Lucide** (CDN, ESM, or React) as the icon library. Rationale: 1.5px stroke matches our hairline aesthetic, square geometry, MIT-licensed, exhaustive coverage, and a stable API. Loaded from `https://unpkg.com/lucide@latest/dist/umd/lucide.js` for vanilla pages and `lucide-react` in JSX kits.

> **Substitution flag:** the original portfolio used **Icomoon, Ionicons, Open Iconic, and Flaticon** simultaneously (4 different icon fonts). This was inconsistent and bloated. We've **replaced all of them with Lucide**. Original icon fonts are NOT carried into the new system. If Sanjit prefers a different icon set (Phosphor, Heroicons, Tabler), this is the place to tell us.

**Logo.** A new **monogram** lives in `assets/logo-mark.svg` (dark) and `logo-mark-light.svg`. The mark is a geometric S-shape inside square brackets `[ S ]` with a green forward slash (`/`) cutting through — referencing the original `<SanjitShrestha/>` wordmark but at a much higher craft level. The original is preserved at `assets/original-logo.svg` for reference only.

**Status / signal indicators.** A 6px filled dot in `--signal-500` (active), `--amber-500` (in progress), `--neutral-400` (inactive), or `--crimson-500` (down). Always followed by a mono label.

**Unicode chars used as iconography.** Sparingly. `·` for separators, `→` for "leads to / continues", `/` for "namespace" cuts. Never decorative dingbats.

---

## Font substitution flags

The original portfolio loaded **Poppins, Inter, JetBrains Mono** from Google Fonts. We keep **Inter** (body) and **JetBrains Mono** (code/labels) and **drop Poppins** in favor of **Newsreader** (Google Fonts) for editorial display moments. All three load from Google Fonts CDN — no local font files needed. If Sanjit wants self-hosted fonts for performance/privacy, please flag and we'll bundle.

---

## Caveats / open questions

See the project root summary; this README aims to be a clean reference document.
