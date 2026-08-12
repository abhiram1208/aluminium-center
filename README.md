# Aluminium Center — Website

A cinematic, frontend-only single-page site for Aluminium Center, built with
React, Vite, Tailwind CSS, and Framer Motion. The centerpiece is a
scroll-scrubbed hero video (your uploaded wardrobe disassembly clip) — the
product assembles, rotates, and explodes into its components purely from
scroll position. No autoplay, no loop.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Editing content (no code changes needed)

All business-specific content lives in `src/data/`:

- `siteData.js` — business name, address, phone, email, WhatsApp number,
  hours, Google Maps URL, nav links, hero text, "Why Us" points, process steps.
- `services.js` — the 7 services shown in the Services grid.
- `projects.js` — the Works/portfolio gallery items and categories.
- `partners.js` — "In Association With" partner names/logos.
- `images.js` — every image path on the site, in one place.

**Every `[BRACKETED]` value in `siteData.js` and `partners.js` is a
placeholder — replace it with real information before launch.** Nothing
about the business (address, numbers, partner names) was invented.

## Replacing images

Real photography hasn't been supplied yet, so every image slot uses
`<SmartImage>`: it tries to load the file path from `images.js`, and if the
file isn't there yet, it shows a quiet architectural placeholder panel
instead of a broken image icon.

To go live with real photos: save the new file using the exact path already
listed in `src/data/images.js` (e.g. `public/images/shop/shop-01.webp`) —
the corresponding component picks it up automatically. No component edits
required.

Expected image folders (create/populate as photography arrives):

```
public/images/
  hero/        (poster only — video already supplied)
  about/       about-main.webp, about-detail.webp
  shop/        shop-01.webp … shop-06.webp
  services/    wardrobes.webp, kitchens.webp, cabinets.webp, tv-units.webp,
               partitions.webp, doors-windows.webp, custom-interiors.webp
  works/       project-01.webp … project-06.webp
  featured/    featured-project.webp
  contact/     contact-interior.webp
  cta/         final-cta.webp
```

## The hero video

- `public/videos/aluminium-hero-desktop.mp4` and `aluminium-hero-mobile.mp4`
  currently both point at the same clip you uploaded. If you produce a
  separate portrait/vertical cut for mobile later, just replace the
  `-mobile.mp4` file — the component already swaps sources under 768px.
- `public/images/hero/aluminium-hero-poster.jpg` is a frame grabbed directly
  from your video (0:00, fully assembled) so the poster matches the video
  exactly. It has a small "Veo" watermark in the corner from the AI video
  tool that generated the clip — swap in a clean still once you have one,
  or re-export the video without the watermark.
- Scroll math lives in `src/components/Hero.jsx`. It reads the real video
  `duration` after `loadedmetadata` (never hardcoded), and drives
  `video.currentTime` from scroll progress via `requestAnimationFrame`
  rather than React state, so scrubbing stays smooth.
- `prefers-reduced-motion: reduce` is respected: the video is skipped
  entirely and the poster + a simple fade are shown instead.

## Logo

No logo file was supplied with this build, so the navbar/footer currently
use a text-based wordmark (`src/components/Logo.jsx`) as a stand-in. Drop
your real logo file into `public/images/` and swap the contents of
`Logo.jsx` for an `<img>` tag when it's available — it's the only file that
needs to change.

## Connecting the contact form

The enquiry form in `src/components/Contact.jsx` is fully validated
(required fields, email format, phone format) with loading/success/error
states, but has no backend. The submit handler is isolated in one function,
`submitEnquiry()`, near the top of the file — replace its body with a call
to EmailJS, Formspree, or your own API endpoint; the rest of the form is
already wired to it.

## Stack

- React 18 + Vite 5
- Tailwind CSS (tokens defined in `tailwind.config.js`)
- Framer Motion (scroll-linked motion values, viewport reveals, layout
  animation for the Works filter)
- lucide-react for icons

No backend, database, authentication, or CMS — everything is static/frontend.
