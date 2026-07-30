# AlwaysPasha

Premium, minimal personal portfolio for Pasha — SAP Security, AI Automation,
Cloud Technologies, Business Systems, and Photography. Built with Next.js 16
(App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
alwayspasha/
├── app/
│   ├── globals.css      # Tailwind base + design tokens, glass-card & gradient-text utilities
│   ├── layout.tsx        # Inter font, SEO metadata, root HTML shell
│   └── page.tsx          # Assembles the six homepage sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu (UI chrome, not a page section)
│   ├── Hero.tsx           # Headline, gradient blobs, grid backdrop, entrance animation
│   ├── Expertise.tsx      # Five glassmorphism cards (AI, SAP Security, Cloud, Business, Photography)
│   ├── Gallery.tsx        # Masonry photo grid with lazy loading + keyboard-accessible lightbox
│   ├── About.tsx          # Bio + profile image
│   ├── Contact.tsx        # Validated contact form with animated send state
│   ├── Footer.tsx         # Minimal copyright line
│   ├── Reveal.tsx         # Scroll-triggered fade-in wrapper (IntersectionObserver, no extra deps)
│   └── Aperture.tsx       # Shared aperture-iris signature motif (security ⨯ photography)
└── public/
```

## Design notes

- **Palette:** near-black `#09090B` background, `#111827` glass cards,
  hairline `rgba(255,255,255,0.08)` borders, and a purple → blue
  (`#7C3AED → #2563EB`) gradient used for headline accents, buttons, and glow.
- **Type:** Inter throughout, leaning on weight and tracking rather than
  multiple families to keep the page quiet and premium.
- **Signature motif:** a rotating aperture-blade icon (see `Aperture.tsx`)
  appears once in the Hero as a quiet nod to Pasha being both a security/AI
  builder and a photographer — the one deliberately "extra" visual element.
- **Motion:** staggered fade-ins on load (Hero) and on scroll (`Reveal.tsx`
  everywhere else), card hover-lift, image hover-zoom, and button hover-glow.
  `prefers-reduced-motion` is respected globally.

## Swapping in your own photos

`components/Gallery.tsx` and `components/About.tsx` currently use
[picsum.photos](https://picsum.photos) placeholders. To use real photos:

1. Drop your images into `/public/photos/`.
2. In `Gallery.tsx`, replace each `src={\`https://picsum.photos/seed/...\`}`
   with `src="/photos/your-file.jpg"`.
3. Update the `alt` text for each photo.
4. If you keep using an external image host instead, add its domain to
   `images.remotePatterns` in `next.config.ts`.

## Wiring up the contact form

The form in `Contact.tsx` validates client-side and simulates a send so the
UI is fully functional out of the box. To actually deliver messages, replace
the `setTimeout` in `handleSubmit` with a call to your provider of choice
(a Next.js API route + [Resend](https://resend.com), 
[Formspree](https://formspree.io), etc).

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset "Next.js" is auto-detected — no extra config needed.
4. Deploy.
