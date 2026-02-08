# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Logopedist (speech-language pathologist) Nicole Genova in Italy. Built with Next.js 16 using the Pages Router.

**Site URL**: `https://www.logopedistanicolegenova.it`

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (includes sitemap generation via postbuild)
npm run start    # Start production server
npm run lint     # Run ESLint (currently has minor issue with next lint)
```

Node engine requirement: >=22.13.0

## Architecture

### Tech Stack
- **Next.js 16.1.6** with Pages Router (not App Router) - NOT affected by CVE-2025-66478
- **React 18.3.1**
- **Tailwind CSS 3.4.19** for styling
- **Headless UI 1.7.19** for accessible UI primitives (Dialog, Switch)
- **React-Leaflet/Leaflet** for OpenStreetMap integration
- **next-seo 6.8.0** + **next-sitemap 4.2.3** for SEO optimization
- **ESLint 9.39.2** with eslint-config-next 16.1.6

### Project Structure
- `src/pages/` - Page components (file-based routing)
- `src/components/` - Reusable components (Layout, Header, Footer, OSMap, ContactForm, Approach, ImageCarousel)
- `src/styles/globals.css` - Global styles + Tailwind imports
- `middleware.ts` - HTTPS redirect enforcement

### Key Patterns

**Layout Wrapper**: All pages use the `Layout` component which provides Header, Footer, and gradient background (`from-[#FFB4A9] to-[#7DD3D3]` - coral/teal smorzati).

**SEO Configuration** (`_app.js`):
- Global `DefaultSeo` with canonical URLs
- OpenGraph tags with og:image (`/pictures/nicole.jpeg`)
- LocalBusiness JSON-LD schema (Schema.org) for Google
- Site serves two locations: Vasto (CH) and Montenero di Bisaccia (CB)

**Map Component**: `OSMap.js` displays two clinic locations with mobile detection for native map app redirects.

**Carousels**:
- `ImageCarousel.js` - Homepage carousel (3 images, 3s interval)
- `Approach.js` - Has inline carousel (2 images, 10s interval)

**Security**: HTTPS middleware redirects with HSTS header (2-year max-age, preload enabled).

### Icon Libraries
The project uses multiple icon libraries: Heroicons (`@heroicons/react`), FontAwesome, Lucide React, and React Icons.

## SEO Details

- **Sitemap**: Auto-generated at build via next-sitemap
- **Priorities**: home (1.0) > treatments/myAproach (0.9) > whoIam (0.8) > contacts (0.6)
- **Schema.org**: LocalBusiness with addresses, service types, area served
- **Images**: All have descriptive Italian alt text for accessibility/SEO

## Notes

- ContactForm currently has no backend integration (form action="#")
- TypeScript is only used in middleware; rest of codebase is JavaScript
- Colors were softened from original logo colors for better UX (Feb 2026)
- `coming_soon.js` has same gradient, update if changing colors
