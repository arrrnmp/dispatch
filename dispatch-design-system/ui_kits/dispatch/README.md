# Dispatch — UI Kit

Interactive prototypes for the three core Dispatch flows. Built with vanilla HTML/CSS/JS using design tokens from `colors_and_type.css`.

## Screens

| File | Flow | Description |
|------|------|-------------|
| `index.html` | Daily digest | Landing experience with lead story, sectioned headlines, and summaries |
| `topic.html` | Topic drill-down | Deep coverage of a single category (Tech) with source links and AI commentary |
| `archive.html` | Archive/history | Browse past editions by date, search, and filter by category |

## Usage

Open any `.html` file directly in a browser. All styles are in `styles.css`, which imports `../../colors_and_type.css` and Google Fonts.

## Navigation

All three screens share a sticky top nav with cross-links:
- **Today** links to `index.html`
- **Topics** links to `topic.html`
- **Archive** links to `archive.html`

## Interactive Elements

- **Archive**: Filter chips toggle active state, calendar strip highlights selected day
- **Topic**: Tab navigation between sub-categories (visual only)
- **Digest**: Hover states on story items reveal save/share action buttons

## Dependencies

- Google Fonts CDN (Instrument Serif, Archivo, JetBrains Mono)
- No JavaScript frameworks
- No build step required
