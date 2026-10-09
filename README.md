# Piyush Bhendarkar — Premium 3D Photography Portfolio

A luxury, cinematic, editorial photography portfolio built for **Piyush Bhendarkar Photography** (Photographer & Visual Storyteller). Features an interactive procedural Three.js 3D camera, champagne-gold and obsidian design tokens, responsive editorial bento grids, a full-screen accessible lightbox, client enquiry workflows, and central configuration architecture.

---

## Brand Identity & Aesthetic Direction

- **Photographer**: Piyush Bhendarkar
- **Brand**: Piyush Bhendarkar Photography
- **Professional Title**: Photographer & Visual Storyteller
- **Demo Location**: Nagpur, Maharashtra, India
- **Tagline**: *"Turning Moments Into Timeless Stories."*
- **Hero Headline**: *"Every Frame Tells A Story."*
- **Visual Palette**: Luxury near-black (`#0a0a0a`), structural surfaces (`#121212`), warm off-white (`#f4efe6`), and champagne-gold (`#d4af37`, `#f3e5ab`).
- **Typography**: Editorial display serif (*Cormorant Garamond*) paired with modern geometric sans (*Plus Jakarta Sans*).

---

## Key Features

1. **Procedural 3D Camera Hero**:
   - Built with Three.js primitives (camera chassis, knurled dial, champagne gold rings, convex glass optical element with reflection, orbital rings, and golden stardust particles).
   - Pointer parallax tracking with smooth spring damping.
   - Pauses rendering when scrolled offscreen via `IntersectionObserver`.
   - Automatic WebGL capability detection with high-performance SVG/CSS fallback.
   - Respects `prefers-reduced-motion` (freezes rotation and disables parallax).
   - Device pixel ratio capped to 1.5x on mobile and 2.0x on desktop.

2. **Curated Numbered Category Cards (01–07)**:
   - 3D interactive cursor tilt with smooth perspective.
   - Dedicated pages for all 7 genres: Weddings, Pre-wedding, Portraits, Fashion, Events, Travel, Commercial.

3. **Gallery Explorer & Dynamic Filtering**:
   - Interactive segmented category filter tabs with dynamic counts.
   - Varied aspect ratio editorial masonry grid.
   - Zero-pill metadata design discipline.

4. **Full-Screen Lightbox**:
   - Complete keyboard controls (Left/Right arrows, Escape to close).
   - Touch swipe gestures on mobile devices.
   - 1.5x zoom toggle.
   - Neighbouring image preloading in memory.
   - Focus trap and returns focus on close.
   - Photographic EXIF camera details & "Sample" attribution badges.

5. **Production-Ready Enquiry Form**:
   - Validated client-side with React Hook Form + Zod.
   - Anti-spam honeypot protection.
   - Package pre-selection from pricing cards.
   - Netlify Forms integration (`data-netlify="true"`) + simulated demo test mode in local development.
   - Secondary direct channels (WhatsApp, direct email, phone call).

6. **Centralized Configuration**:
   - `src/config/site.config.ts`: Single source of truth for photographer bio, packages, services, contacts, and features.
   - `src/config/gallery.config.ts`: Central inventory for every image, dimensions, alt text, captions, and licenses.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Production Build
```bash
npm run build
```
The compiled, optimized production bundle is generated in `/dist`.

### Preview Build
```bash
npm run preview
```

---

## Deployment Instructions

Detailed step-by-step guides for **Netlify** and **Vercel** are available in:
- [`/docs/DEPLOY.md`](./docs/DEPLOY.md)
- [`/docs/CUSTOMIZE.md`](./docs/CUSTOMIZE.md)
- [`/public/CREDITS.md`](./public/CREDITS.md)

---

## Accessibility & Performance Highlights

- **WCAG AA Compliance**: High-contrast champagne gold on dark surfaces (>= 4.5:1 ratio for body text).
- **Zero-Pill Discipline**: Metadata displayed as unboxed typographic text with subtle separators (`·`).
- **Focus Management**: Visible custom champagne gold outline rings on all interactive links, tabs, and form inputs.
- **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` landmarks.
- **SEO & Social Sharing**: Pre-configured JSON-LD (`ProfessionalService` schema), OpenGraph tags, Twitter cards, sitemap, and robots meta.
