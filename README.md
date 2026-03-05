# Gallery Website Prototype

Static implementation of the *studio333* prototype provided by Rasa.

## Stack
- Pure HTML + CSS (no build tools)
- Google Fonts: Cormorant Garamond + Inter
- Placeholder imagery sourced from Unsplash

## Getting Started
```bash
# from repo root
python3 -m http.server 8000
# visit http://127.0.0.1:8000
```

Alternatively, open `gallery.html` or `contact.html` directly in a browser. (`index.html` simply redirects to `gallery.html`.)

## Development Notes
- Entry point: `gallery.html` (main experience) + `contact.html`. `index.html` is a lightweight redirect for hosts that require it.
- Shared styles live in `styles.css`; no build pipeline. `gallery.js` powers the carousel interactions.
- Local artwork lives in `assets/` (cropped + balanced JPEGs).
- Optional helper script `process-images.js` (Node + Jimp) crops/normalizes any new artwork. Run `npm install` once, then `node process-images.js` after dropping new files into `assets/`.
- By default the script expects `art-1.jpg` through `art-4.jpg`; add filenames there if you introduce new pieces.

## Preview
`preview.png` captures the original single-page layout and remains for reference. Current multi-page previews live in `index-preview.png`, `gallery-preview.png`, and `contact-preview.png`.
