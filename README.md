# studio333 — Production Website

Luxury art gallery website for **studio333** by Rasa. Live at [studio333gallery.com](https://studio333gallery.com).

## Pages

| Page | File | Description |
|------|------|-------------|
| Gallery | `gallery.html` | Carousel of 21 original artworks |
| Featured | `featured.html` | Bis on Main — Bellevue exhibition |
| Contact | `contact.html` | Private acquisition inquiries |
| Share | `qr.html` | QR code linking to gallery |
| Redirect | `index.html` | Redirects root URL to gallery |

## Stack

- Pure HTML5 / CSS3 / Vanilla JS — no frameworks, no build tools
- Google Fonts: Cormorant Garamond (headings) + Inter (body)
- Deployed on Render as a static site

## Assets

- `assets/art-01.jpg` — `art-21.jpg` — processed artwork images (900×1200px, sRGB, ≤350KB)
- `assets/bis/Bis_1.jpg` — Bis on Main exhibition photo
- `assets/QR/qr-code-new.png` — QR code linking to studio333gallery.com

## Image Processing

Artwork images are processed to 900×1200px portrait format with `#f5f5f3` warm neutral background. To reprocess:

```bash
npm install
node process-images.js
```

Output goes to `assets-processed/`. Copy to `assets/` to deploy.

## Local Preview

Open any HTML file directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Artwork

21 original acrylic, mixed media works on canvas. Available for private acquisition — contact via the site.
