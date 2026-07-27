# The High Pass Chronicles — Standalone Website

This package is a separate, responsive static website for **The High Pass Chronicles** by **R. Keith Parker**. It does not link the series into the Black Lantern Cycle website and does not present Black Lantern content.

## Included

- `index.html` — full one-page website
- `styles.css` — responsive Gothic design system
- `script.js` — searchable/filterable 13-book catalog, book-detail modal, mobile menu, reveal effects, and structured data
- `assets/high-pass-mark.svg` — original High Pass emblem
- `assets/high-pass-landscape.svg` — original mountain-road hero artwork
- `assets/high-pass-social-card.svg` — Open Graph/social-sharing image

## Website sections

1. Hero and series promise
2. “Where Should You Begin?” reader paths
3. Searchable 13-book Amazon catalog
4. Series-order clarification
5. World and supernatural-law pillars
6. Author biography
7. Reader FAQ
8. Mailing-list section

## Before public launch

1. Connect the newsletter form to the mailing-list provider you choose. The preview form does not store addresses.
2. Add the final public website URL to the Open Graph metadata and JSON-LD if your host requires absolute URLs.
3. Add verified Goodreads, BookBub, Facebook, and privacy-policy links once available.
4. Optionally replace the stylized catalog cards with official cover images. The current treatment is intentionally self-contained and does not depend on external image hosting.
5. Confirm Amazon subtitle/series-number metadata after any KDP corrections.

## Preview locally

Open `index.html` in a browser. For best results, serve the folder through a simple local web server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Suggested public address

`high-pass-chronicles.keithparker1901.chatgpt.site`

This address is a recommendation only; the files in this package have not been published to a host.
