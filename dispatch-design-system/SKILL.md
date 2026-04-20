---
name: dispatch-design
description: |
  Use this skill to generate well-branded interfaces and assets for Dispatch, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. The brand is editorial, serif-driven, and cool-professional with a playful voice — authoritative like a broadsheet, sharp like a terminal. Created by Aaron Mompié.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand. If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files to read first:

- `README.md` — product context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — all CSS variables; ALWAYS use these, never hard-code hex
- `ui_kits/dispatch/index.html` — reference implementation

Visual north star: Newspaper authority meets terminal precision — Instrument Serif for personality, Archivo for clarity, warm orange for energy, sharp edges for confidence.

Key constraints:
- No emoji in editorial content
- No pure black (#000) or pure white (#fff)
- No pill-shaped buttons (only tag pills get full radius)
- No gradients on backgrounds
- No decorative motion — only functional transitions
- Always use Instrument Serif Italic for display headings
- ALL CAPS + wide tracking for metadata labels
- Maximum 3 typefaces: Instrument Serif, Archivo, JetBrains Mono
