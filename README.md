# AlwaysPasha

Premium personal portfolio for Pasha — AI Builder, Automation Developer, Web Developer, and part-time photographer. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

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
│   ├── globals.css      # Tailwind base + design tokens (colors, spacing rhythm)
│   ├── layout.tsx        # Fonts, metadata, root HTML shell
│   └── page.tsx          # Assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav, mobile menu, CTA
│   ├── Hero.tsx           # Headline, blob, aperture motif, CTAs
│   ├── About.tsx          # Intro + four role cards
│   ├── Projects.tsx       # Project cards (image, tags, links)
│   ├── Skills.tsx         # Skills grid
│   ├── Contact.tsx        # Email / LinkedIn / GitHub + CTA
│   ├── Footer.tsx         # Copyright + credit
│   ├── Aperture.tsx       # Shared signature icon (camera-iris motif)
│   └── Button.tsx         # Shared CTA button
└── public/
```

## Design notes

- **Palette:** pure monochrome — near-black `#0A0A0A` ink on white, with
  grayscale surface/border/muted tones. No color accent anywhere.
- **Type:** Space Grotesk for display headings, Inter for body/UI text.
- **Signature motif:** a rotating aperture-blade icon used as the eyebrow icon,
  hero backdrop, and project placeholder — a visual nod to Pasha being both a
  builder and a photographer.
- **Signature interaction:** small circular marks (skills, contact channels)
  and the primary button invert from solid black to hollow white on hover —
  the one recurring piece of motion-as-feedback in an otherwise quiet, static
  layout.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset "Next.js" is auto-detected — no extra config needed.
4. Deploy.
