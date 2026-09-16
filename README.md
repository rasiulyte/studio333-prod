# studio333 — Production Website

Art gallery website for **studio333** by Rasa. Live at [studio333gallery.com](https://studio333gallery.com).

## Pages

| Page | File | Description |
|------|------|-------------|
| Gallery | `gallery.html` | Carousel of 34 works, inquire overlay, multi-work picker |
| Featured | `featured.html` | Bis on Main — Bellevue exhibition |
| Contact | `contact.html` | Instagram and email |
| Share | `qr.html` | QR code linking to the gallery |
| Redirect | `index.html` | Redirects root URL to gallery |

## Inquiries

Inquire forms post to Azure Function `https://st333inqfn29.azurewebsites.net/api/inquire` (EMAIL_TO: dana@studio333gallery.com). After send, `_next` returns to `https://www.studio333gallery.com/gallery.html`.

Originals currently available: art 5, 12, 14, 15, 18, 22, 23, 25–28 (`availability.js`). Everything else: original sold; giclée still available.

Bis wall order in the gallery: Twilight Passage, then Golden Veil, then the remaining works.

## Stack

- Pure HTML5 / CSS3 / Vanilla JS — no frameworks, no build tools
- Google Fonts: Cormorant Garamond (headings) + Inter (body)
- Deployed on Render as a static site

## Assets

- `assets/art-01.jpg` — `art-34.jpg`
- `assets/framed/art-07.jpg`, `art-08.jpg` — framed Bis works
- `assets/bis/Bis_1.jpg` — Bis on Main exhibition photo
- `assets/QR/qr-code-new.png` — QR code linking to studio333gallery.com

## Local Preview

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```
