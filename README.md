# AlwaysPasha

Minimal, monochrome editorial portfolio for Pasha — SAP Security, AI
Automation, AWS Cloud, and Photography. Built with Next.js 16 (App Router),
TypeScript, and Tailwind CSS.

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
│   ├── globals.css       # Monochrome light/dark design tokens (CSS variables)
│   ├── layout.tsx         # Inter font, SEO metadata, theme-init script (no flash)
│   └── page.tsx           # Assembles About → Projects → Photography → Contact
├── components/
│   ├── Navbar.tsx          # Sticky nav, two-tone wordmark, theme toggle, mobile menu
│   ├── ThemeToggle.tsx     # Minimal sun/moon light/dark toggle, persisted via localStorage
│   ├── About.tsx           # Primary introduction: heading + photo + bio, education/interests/after hours
│   ├── Projects.tsx        # "Coming soon." placeholder
│   ├── Photography.tsx     # Editorial, asymmetric photo grid (five supplied photographs)
│   ├── Contact.tsx         # Validated contact form (client-side simulated send)
│   ├── Footer.tsx          # Minimal copyright line
│   └── Reveal.tsx          # Scroll-triggered fade-in wrapper (IntersectionObserver)
├── lib/
│   └── theme-script.ts    # Inline script injected in <head> to set theme pre-hydration
└── public/images/          # profile.webp, coffee-bean.webp, sunset.webp, portrait.webp,
                             # architecture.webp, perspective.webp (all watermarked)
```

## Design notes

- **Palette:** strictly black / white / grey, defined as CSS variables in
  `globals.css` (`--bg`, `--ink`, `--muted`, `--line`) and mapped into
  Tailwind (`bg-bg`, `text-ink`, `text-muted`, `border-line`) so both themes
  share one set of utility classes.
- **Dark mode:** class-based (`darkMode: "class"` in `tailwind.config.ts`).
  A small inline script in `app/layout.tsx` reads `localStorage` (falling
  back to `prefers-color-scheme`) and applies the `dark` class before
  hydration, avoiding a flash of the wrong theme.
- **Wordmark:** "AlwaysPasha" is rendered as two `<span>`s — `Always` in the
  primary ink color, `Pasha` in the muted grey — in both themes.
- **Type:** Inter throughout; hierarchy comes from weight, size, and
  tracking rather than color or multiple families.
- **Motion:** a single subtle fade-in-on-scroll (`Reveal.tsx`), respecting
  `prefers-reduced-motion` globally. No decorative animation.

## Photography images

All six images used across the site live in `public/images/` as optimized,
watermarked `.webp` files. The original JPGs are not served publicly.

## Wiring up the contact form

`Contact.tsx` validates client-side and simulates a send so the UI is fully
functional out of the box (this codebase does not currently include a
server-side Resend/API integration). To actually deliver messages, replace
the `setTimeout` in `handleSubmit` with a call to your provider of choice —
a Next.js API route + [Resend](https://resend.com), [Formspree](https://formspree.io),
etc.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset "Next.js" is auto-detected — no extra config needed.
4. Deploy.
