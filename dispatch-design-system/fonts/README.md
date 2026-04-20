# Fonts

Dispatch uses three font families, all loaded via Google Fonts CDN. No local font files are bundled.

## Font Stack

| Token | Font | Fallback | Usage |
|-------|------|----------|-------|
| `--font-display` | Instrument Serif (italic) | Georgia, Times New Roman, serif | Headlines, section titles, logo wordmark |
| `--font-body` | Archivo (variable 100-900) | system-ui, -apple-system, sans-serif | Body text, UI labels, metadata |
| `--font-mono` | JetBrains Mono (400, 500) | SF Mono, Fira Code, Consolas, monospace | Timestamps, source counts, data |

## Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Notes

- Instrument Serif has no weight variations — it is used exclusively at 400 weight, italic style preferred
- Archivo supports the full variable weight range (100-900); weights used in this system: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- JetBrains Mono is used at 400 (regular) and 500 (medium) only
- If self-hosting is required, woff2 files can be downloaded from Google Fonts
