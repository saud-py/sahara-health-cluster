# Sahara Health Cluster

Website for **Sahara Health Cluster** — Eye, Dental and General Medical Centre, Amruthalli, Bangalore – 560092.

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Deployed on Netlify.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run typecheck  # TypeScript check
npm run build      # production build (what Netlify runs)
npm run start      # serve the production build
```

## Project structure

```
public/
  favicon.svg
  images/                  clinic photos, location QR, hero brand visual
src/
  app/                     routes and generated files only
    layout.tsx             <head> metadata, structured data, analytics
    page.tsx               home page (assembles the sections)
    globals.css
    sitemap.ts, robots.ts, manifest.ts
    icon.tsx, apple-icon.tsx, opengraph-image.tsx   generated PNGs
  components/
    layout/                SiteHeader, SiteFooter, MobileActionBar, Analytics
    sections/              Hero, About, Services, WhyChooseUs, AppointmentCTA,
                           Location, FAQ, ContactDetails
    brand/                 Logo, BrandMark (placeholder mark)
    icons/                 line icons
  config/
    clinic.ts              ← clinic details: phones, address, services, assets
    site.ts                SEO text, site URL, Google Ads / GA4 settings
    navigation.ts          menu links
  lib/utils.ts
netlify.toml               build settings and headers
.env.example               environment variables for Netlify
```

## Updating content

- **Clinic details** (phone numbers, address, services, directions link, email, opening hours): edit `src/config/clinic.ts`. Email and opening hours stay hidden until filled in.
- **Search title / description:** `src/config/site.ts`.

## Netlify environment variables

Set these in Netlify → Site configuration → Environment variables (all optional — see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Custom domain once confirmed (otherwise Netlify's URL is used) |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads tag ID (`AW-…`) |
| `NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL` | Conversion label for phone-call clicks |
| `NEXT_PUBLIC_GOOGLE_ADS_DIRECTIONS_LABEL` | Conversion label for Get Directions clicks |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 ID (`G-…`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console verification token |

## Pending from the clinic

- Standalone logo file (header, footer and favicon use a placeholder mark — see `src/components/brand/`)
- Email address, opening hours and custom domain
