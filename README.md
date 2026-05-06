# Kash Faje Portfolio Site

A React + TypeScript + Vite portfolio experience for photographer and educator Kash Faje.

## What this site includes

- Immersive homepage hero with animated gallery-backed visuals
- Portfolio galleries across travel, portraiture, and cinematic stills
- Publications and long-form media features
- Workshop listings and detail pages
- Contact and bio pages for bookings and collaborations

## Tech stack

- React 19
- TypeScript
- Vite 8
- React Router
- Tailwind CSS

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

This project uses Vite 8 and requires Node.js `20.19+` or `22.12+`.

## SEO and social sharing setup

The project includes baseline SEO and sharing support:

- Open Graph and Twitter Card metadata in `index.html`
- Route-aware client metadata updates in `src/components/common/SiteSeo.tsx`
- Favicon and browser icon set generated from `src/assets/logo.jpg` into `public/`
- `robots.txt`, `sitemap.xml`, and `site.webmanifest`

If your production domain is not `https://88studio-alpha.vercel.app`, update these files:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## Build for production

```bash
npm run build
```
