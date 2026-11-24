---
name: IMA Ethereal Glass
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#43474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777e'
  outline-variant: '#c3c6ce'
  surface-tint: '#49607c'
  primary: '#001428'
  on-primary: '#ffffff'
  primary-container: '#0f2942'
  on-primary-container: '#7991af'
  inverse-primary: '#b0c9e8'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#001714'
  on-tertiary: '#ffffff'
  tertiary-container: '#002e29'
  on-tertiary-container: '#269f93'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#b0c9e8'
  on-primary-fixed: '#011d35'
  on-primary-fixed-variant: '#314863'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '800'
    lineHeight: 4.25rem
    letterSpacing: -0.025em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-lg:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.03em
  stat-counter:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.75rem
    fontWeight: '800'
    lineHeight: 3rem
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system elevates the Indian Medical Association’s institutional heritage into a state-of-the-art, digital-first presence. Moving decisively past legacy portal layouts, it establishes an ethereal, hyper-modern aesthetic anchored in authority, scientific rigor, and public trust.

The visual style blends **Contemporary Glassmorphism** with **Precision Medical Minimalism**:
- **Atmospheric Depth:** Multi-layered translucent panels resting on luminous ambient mesh gradients of clinical cyan, deep indigo, and soft violet, evoking sterile technological sophistication.
- **Micro-Refraction & Edges:** Translucent planes with fine, light-catching inner borders (`rgba(255, 255, 255, 0.25)` or `rgba(15, 41, 66, 0.08)`) and high-diffusion backdrops (`backdrop-filter: blur(16px)` to `blur(24px)`).
- **Institutional Weight:** Deep medical navy anchors the structure, while clinical teal and vital crimson accents convey decisive, life-critical action.
- **Emotional Resonance:** Inspires unshakeable trust among medical practitioners, healthcare policymakers, and the public—projecting vanguard clinical leadership across India.

## Colors

The palette balances authoritative institutionality with clean clinical modernity. Built on a crisp, luminous foundation with rich deep tones, it provides immediate clarity and high-contrast readability across clinical dashboards, public health bulletins, and executive updates.

### Palette Architecture
- **Primary (`#0F2942` - Medical Navy):** Anchors primary brand headers, major navigation bars, executive headings, and deep structural surfaces.
- **Secondary (`#2563EB` - Trust Blue):** Drives primary interactive affordances, active navigation pills, hyperlinks, and metric focus rings.
- **Tertiary (`#0D9488` - Health Teal):** Signals verified status badges, medical schemes, clinical guidelines, and positive metric progressions.
- **Accent Vital (`#E11D48` - Crimson Alert):** Reserved strictly for emergency updates, critical judicial notices, flash alerts, and live public announcements.
- **Neutral Base (`#F8FAFC` - Ethereal Slate):** Underpins canvas backdrops, tinted subtly with layered radial mesh gradients of `#EFF6FF` (Ice Blue) and `#F0FDFA` (Ethereal Mint).

### Glass Tint Tokens
- Surface Ultra-Glass: `rgba(255, 255, 255, 0.70)` with inner border `rgba(255, 255, 255, 0.60)`
- Surface Deep-Glass: `rgba(15, 41, 66, 0.85)` with border `rgba(255, 255, 255, 0.12)`
- Floating Interactive Glass: `rgba(255, 255, 255, 0.85)` with border `rgba(37, 99, 235, 0.18)`

## Typography

The typographic hierarchy couples the crisp, geometric authority of **Plus Jakarta Sans** for headlines and high-impact metrics with the balanced legibility of **Inter** for clinical records, circulars, and administrative notices.

- **Headlines & Executive Statements:** Set in Plus Jakarta Sans with tight tracking (`-0.02em`) to produce a sharp, authoritative posture.
- **Body & Clinical Documentation:** Set in Inter with generous line-heights (`1.5` to `1.75`) to guarantee fatigue-free reading across lengthy gazettes, policy digests, and judicial releases.
- **Metric Counters:** Display counters utilize specialized high-weight styling (`stat-counter`) with tabular numbers (`tnum`) enabled to ensure seamless real-time animated counters.
- **Badges & Notice Tags:** Capitalized or title-cased in `label-md` with elevated tracking (`0.03em`) for immediate scannability on frosted glass cards.

## Layout & Spacing

The system implements a structured **12-column fluid grid** centered within a maximum viewport boundary of `1440px`, ensuring ample breathing room and preventing visual congestion.

### Form Factor Adaptations
- **Desktop (≥ 1024px):** 12-column structure with `1.5rem` (24px) gutters and `3rem` (48px) exterior canvas padding. Leadership rosters and feature cards sit in 3 or 4-column balanced spans.
- **Tablet (768px – 1023px):** Reflows to an 8-column grid with `1.25rem` (20px) gutters. Complex mega-menus collapse into modular off-canvas glass trays.
- **Mobile (< 768px):** 4-column layout with `1rem` (16px) gutters and `1.25rem` (20px) outer edge margins. Tabular notices and counters switch from horizontal multi-column decks to vertically stacked glass panels.

Atmospheric spacing enforces `space-2xl` (64px) separation between major portal sections, preserving an uncluttered, modern clinical feel.

## Elevation & Depth

Visual depth is achieved through translucent planar layering, luminous refraction borders, and multi-tier ambient shadows rather than solid flat fills.

### Surface Tiers & Translucency
1. **Tier 0 (Backdrop Canvas):** Luminous neutral base (`#F8FAFC`) populated by soft, organic radial gradients:
   - Primary glow: `radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 40%)`
   - Secondary aura: `radial-gradient(circle at 90% 70%, rgba(13, 148, 136, 0.07) 0%, transparent 45%)`
2. **Tier 1 (Resting Frosted Panels):** Surface fill `rgba(255, 255, 255, 0.65)` layered with `backdrop-filter: blur(16px) saturate(180%)`. Outlined with a continuous 1px micro-border: `rgba(255, 255, 255, 0.5)`. Box shadow: `0 8px 32px 0 rgba(15, 41, 66, 0.06), 0 1px 2px 0 rgba(15, 41, 66, 0.04)`.
3. **Tier 2 (Elevated & Interactive Surfaces):** Surface fill `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(20px)`. Box shadow: `0 16px 40px -4px rgba(15, 41, 66, 0.10), 0 4px 12px 0 rgba(37, 99, 235, 0.05)`. Outer rim receives an intensified light-catching edge `rgba(255, 255, 255, 0.8)`.
4. **Tier 3 (Floating Overlays, Modals, Mega-Nav):** High-density glass fill `rgba(255, 255, 255, 0.92)` or dark medical tint `rgba(15, 41, 66, 0.88)` with `backdrop-filter: blur(24px)`. Shadow: `0 24px 64px -8px rgba(15, 41, 66, 0.22)`.

## Shapes

The design system maintains a modern, balanced shape geometry with **Level 2 (Rounded)** curvature. This eliminates institutional rigidness without feeling playful or casual.

- **Standard Components (`0.5rem` / 8px):** Form fields, input selectors, table rows, and secondary action triggers.
- **Glass Cards & Panels (`rounded-lg` - `1rem` / 16px):** Notice cards, spotlight profiles, metric summary containers, and interactive tiles.
- **Overlays & Major Sections (`rounded-xl` - `1.5rem` / 24px):** Floating banners, executive spotlight showcases, modal sheets, and quick-action hero cards.
- **Pills (`rounded-full`):** Category tags, active navigation tabs, urgent notice flags, and avatar profile rings.

## Components

### 1. Navigation & Action Ribbons
- **Top Utility Ribbon:** Thin translucent glass bar with contact shortcuts and live ministerial updates. Border bottom `rgba(255, 255, 255, 0.15)`.
- **Main Floating Navigation:** Elevated glass capsule hovering over the hero fold. Features integrated typography hierarchy, dropdown flyout menus with subtle 1px divider lines, and a high-contrast primary CTA for member portal authentication.

### 2. Buttons & Triggers
- **Primary Button:** Deep medical navy (`#0F2942`) or vivid trust blue (`#2563EB`) fill with smooth inset highlight `inset 0 1px 0 rgba(255, 255, 255, 0.2)`, white text, 8px radius, with subtle 0.2s glow hover.
- **Frosted Glass Button:** Semi-transparent base `rgba(255, 255, 255, 0.75)`, border `1px solid rgba(255, 255, 255, 0.8)`, text `#0F2942`. On hover: `rgba(255, 255, 255, 0.95)` with subtle translate-y transition.
- **Vital / Alert Button:** Crimson (`#E11D48`) fill for emergency memorandums, legal defense helpline, and critical notices.

### 3. Metric Counters & Statistics
- Frosted micro-panels containing glowing stats (`stat-counter`), paired with dynamic upward trending icons (`#0D9488`). Micro-captions in `label-md` slate gray describe data points such as active verified clinicians and state branches.

### 4. Tabbed Bulletin & Circulars System
- Segmented pill controllers toggling between "Important News", "Legal & Judicial Notices", and "Conferences".
- Rows styled with translucent borders, hover-reveal chevron links, timestamp badges, and download link triggers for PDF communiqués.

### 5. Leadership & Spotlight Cards
- Elevated frosted glass surfaces featuring doctor portrait photography within soft halo vignettes. Displays clinician designations, state chapter affiliations, and official email action buttons in structured hierarchy.

### 6. Verification & Input Fields
- Inputs feature `rgba(255, 255, 255, 0.6)` fills with `1px solid rgba(15, 41, 66, 0.12)`. When focused: sharp blue outer glow `box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2)` and border `#2563EB`.