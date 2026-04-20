---
name: dispatch-design
description: |
  Use this skill to generate well-branded interfaces and assets for Dispatch — a curated AI-powered daily news digest by Aaron Mompié. Contains essential design guidelines, colors, typography, fonts, assets, and UI kit components for prototyping.
  
  The brand is **cool, editorial, and boldly minimal** — a news publication for the AI era. Sharp typography, confident layouts, and a restrained palette that lets content breathe. Trustworthy but never stuffy. Professional with occasional playful warmth.
  
  Typography hierarchy: Instrument Serif for display headlines and editorial accents. Archivo for body text and UI elements. JetBrains Mono for timestamps and technical indicators.
  
  Visual north star: A premium editorial experience that feels like The New Yorker meets Notion — intelligent, quiet confidence, content-first.
  
  Key constraints: No emoji in headlines or serious content. No gradients on text. No pure black/white — use the surface/text color system. Sharp/angular shape language — minimal rounding. Snappy, purposeful animations only.

user-invocable: true
---

# Dispatch Design System — Agent Skill

## Overview

This skill enables you to design interfaces for Dispatch — an AI-curated daily news digest service. The design system emphasizes editorial minimalism, sharp typography, and content-first layouts.

## Key Files to Read

When working with this design system, read these files in order:

1. **`README.md`** — Product context, content fundamentals, visual foundations, iconography
2. **`colors_and_type.css`** — All CSS variables; ALWAYS use these, never hard-code hex values
3. **`ui_kits/dispatch/index.html`** — Reference implementation with complete screen prototypes

## Design Principles

### Typography
- **Instrument Serif** — Display headlines, editorial accents, brand moments. Conveys authority.
- **Archivo** — Body text, UI elements, navigation. Highly legible variable sans-serif.
- **JetBrains Mono** — Timestamps, metadata, technical indicators.

### Colors
- **Surfaces** — White to cool gray (#ffffff to #0a0c10)
- **Text** — Near-black primary (#0a0c10), cool gray secondary (#5b6470)
- **Primary accent** — Deep editorial blue (#1a3a5c) for trust
- **Secondary accent** — Warm orange (#f26522) for CTAs

### Shape Language
- **Sharp/angular** — Minimal rounding (0-8px max)
- Cards: 8px radius
- Inputs: 4px radius
- Pills/badges: 999px radius (only exception)

### Animation
- **Snappy and minimal** — Every motion has purpose
- Entry: `cubic-bezier(0.16, 1, 0.3, 1)`, 350ms
- Interaction: `cubic-bezier(0.22, 0.61, 0.36, 1)`, 150-220ms
- Press feedback: 100ms or less

### Content Voice
- Direct and confident
- Second-person active
- Minimal emoji — only for warmth, never in headlines
- Title Case for headers, sentence case for body

## Common Patterns

### Story Card
```html
<article class="story-card">
  <div class="story-meta">
    <span class="source">The Guardian</span>
    <span class="dot">·</span>
    <span class="time">3 min</span>
  </div>
  <h2 class="story-title">Headline in Instrument Serif</h2>
  <p class="story-summary">Summary in Archivo...</p>
  <a class="read-more" href="#">Read more →</a>
</article>
```

### Navigation
- Sticky header with glassmorphism on scroll
- Logo left, nav center/right
- Mobile: hamburger menu with sheet overlay

### Reading Experience
- Single column, 720px max-width
- Generous line-height (1.65)
- Section breaks with subtle dividers

## What to Avoid

- ❌ Emoji in headlines or serious content
- ❌ Gradients on text
- ❌ Pure black (#000) or pure white (#fff)
- ❌ Excessive border radius (no 24px+ cards)
- ❌ Decorative/unnecessary animations
- ❌ Rounded buttons (use 8px or pill shape only)
- ❌ Filled icons (use Lucide outline style)
- ❌ Hand-drawn or organic shapes

## Icon System

**Lucide Icons** via CDN:
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

Common icons for Dispatch:
- `Menu`, `X` — Navigation
- `Search`, `Filter` — Actions
- `Bookmark`, `Share` — Story actions
- `Check`, `AlertCircle`, `Info` — Status
- `BookOpen`, `Eye` — Reading
- `Calendar`, `Clock` — Meta

Stroke: 1.5px | Sizes: 14/16/20/24px

## CSS Variable Reference

Always use CSS custom properties:

```css
/* Colors */
var(--surface-0)  /* White background */
var(--surface-1)  /* Soft background */
var(--text-0)     /* Primary text */
var(--text-1)     /* Secondary text */
var(--primary)    /* Accent blue */
var(--accent)     /* CTA orange */

/* Typography */
var(--font-display)  /* Instrument Serif */
var(--font-body)     /* Archivo */
var(--font-mono)     /* JetBrains Mono */

/* Spacing (4px grid) */
var(--sp-4)   /* 16px */
var(--sp-6)   /* 24px */
var(--sp-12)  /* 48px */

/* Shadows */
var(--sh-sm)  /* Cards at rest */
var(--sh-md)  /* Cards hover */

/* Animation */
var(--ease-editorial)   /* Entry animations */
var(--ease-snappy)      /* Interactions */
var(--duration-normal)  /* 220ms */
```

## When Invoked Without Direction

If the user invokes `/dispatch-design` without specific guidance:

1. Ask what they want to build:
   - Marketing page component?
   - Story card design?
   - Navigation pattern?
   - Complete screen prototype?
   - Email template?

2. Ask about context:
   - Target audience segment?
   - Content type (serious news, tech, culture)?
   - Platform (web, email, mobile)?

3. Generate appropriate artifacts:
   - Static HTML preview files for review
   - Production-ready components with proper CSS
   - Copy actual Dispatch copy patterns, not lorem ipsum

## Asset Paths

- Fonts: Reference Google Fonts CDN
  - Archivo: `https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900`
  - Instrument Serif: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1`
  - JetBrains Mono: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500`
- Icons: Lucide via CDN
- Placeholder images: Use gradient or abstract patterns, not generic stock photos

## Content Patterns

**Headlines:**
- "Your morning briefing, curated and delivered"
- "What you need to know today — without the noise"
- "8 stories. 5 minutes. Everything that matters."

**CTAs:**
- "Get Dispatch" (primary)
- "Learn more" (secondary)
- "Start reading" (accent)

**Meta:**
- "3 min read"
- "8 sources curated"
- "Delivered daily at 7:00 AM"

---

Remember: Dispatch is news, reimagined. Design with editorial confidence and quiet sophistication.
