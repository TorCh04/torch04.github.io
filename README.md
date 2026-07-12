# torch04.github.io

Personal portfolio site for Nontapat (Tor) Chuenkingkaew — built with Astro 7 and TypeScript.

**Live site:** https://torch04.github.io

---

## Stack

- [Astro 7](https://astro.build) — static site generator, component architecture
- TypeScript — typed data and component props
- Vanilla CSS — custom properties, scoped component styles
- [`@fontsource/inter`](https://fontsource.org/fonts/inter) — self-hosted Inter font
- [`@fortawesome/fontawesome-free`](https://fontawesome.com) — self-hosted icons
- GitHub Actions — automated build and deploy to GitHub Pages

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run check     # TypeScript type-check
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys `dist/` to GitHub Pages.

**Required one-time setup:** In the GitHub repo go to **Settings → Pages → Source** and set it to **GitHub Actions**.

## Project structure

```
src/
├── components/     # Astro components (one per section)
├── data/
│   └── content.ts  # All CV content as typed TypeScript
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── types.ts        # Shared TypeScript interfaces

public/
└── portfolio.js    # Client-side behaviour (scroll reveal, navbar, hamburger)

.github/
└── workflows/
    └── deploy.yml
```

## Adding or updating content

All CV content lives in **`src/data/content.ts`**. Edit the arrays there — the components read from them automatically.

```ts
// Add a project
export const projects: Project[] = [
  {
    title: 'My New Project',
    description: 'What it does.',
    tags: ['Python', 'FastAPI'],
    github: 'https://github.com/TorCh04/new-project',
  },
  // ...
];
```

## Security

- Content Security Policy (CSP) meta tag — no external scripts or fonts allowed
- `rel="noopener noreferrer"` on all external links
- Strict Referrer-Policy and X-Content-Type-Options headers
- Self-hosted fonts and icons (no third-party CDNs)
- Zero npm vulnerabilities (`npm audit`)
