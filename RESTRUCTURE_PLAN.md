# Bar Moon Contracting — Website Restructure Plan (Following RULES.md v3.0)

**Goal:** Fully restructure the site to follow the AI Coder Rule Set v3.0 FINAL while preserving the exact current visual style, colors, typography feel, and professional contractor aesthetic.

## Key Decisions

- **Stack:** Migrate to Astro + Tailwind (as explicitly preferred in Section 3 of RULES.md). Static output for GitHub Pages.
- **Design:** Keep 100% of the current look and feel:
  - Color palette (primary #101d43, accent #d6ad30 / gold, light-neutral #E2E1DD, dark-blue, deep-blue)
  - Header behavior (auto-hide on scroll, services dropdown, mobile menu)
  - Halo-hover effects on cards
  - Mosaic service tiles with image overlays
  - Video hero elements where they fit
  - Overall typography, spacing, and "Texas grit with modern precision" tone
- **URL Architecture:** Follow Section 4A exactly.
- **Phased approach:** Follow the Phased Build Plan in the rules (start with Phase 1 foundation).

## Exact Target Structure (from RULES.md 4A)

Primary Nav: Home | Services | Projects | About | Service Areas | Get Quote | Contact

### Phase 1 Pages (Minimum Launch)

1. `/` — Homepage
2. `/services/` — Services overview
3. `/services/general-contracting-temple-tx/`
4. `/services/home-renovations-temple-tx/`
5. `/services/kitchen-bath-remodeling-temple-tx/`
6. `/services/outdoor-living-decks-patios-central-texas/`
7. `/services/fencing-concrete-repairs-central-texas/`
8. `/projects/`
9. `/about/`
10. `/get-quote/` (high-intent lead gen page with specific form rules)
11. `/contact/`
12. `/service-areas/`
13. `/privacy-policy/`

Additional required:
- Proper sitemap.xml
- robots.txt
- Full structured data (LocalBusiness, Service, FAQPage, etc.)
- Working quote form (static-friendly + honeypot)

## Current State Summary (Audit)

- **Current Stack:** Next.js 16 + React + Tailwind v4
- **Current URLs:** Close but not matching (e.g. /services/home-renovations vs required /services/home-renovations-temple-tx/)
- **Visuals:** Good foundation — dark navy + gold accents + light neutral sections. We will keep this pixel-perfect.
- **Gaps vs Rules:**
  - No dedicated /get-quote/ landing page with required form spec
  - Service URLs and some content depth do not match
  - Navigation does not include "Projects", "Service Areas", "Get Quote" as primary
  - Stack not Astro/static
  - Some client-heavy patterns (we'll minimize)

## Work Plan

### Phase 0 — Setup & Design Lock (Current)
- Document exact colors and components from current site
- Create Astro project setup (or Astro + Tailwind in this repo)
- Port design tokens + Header + Footer with identical look

### Phase 1 — Foundation Pages
- Homepage
- Services overview + the 5 core service pages with required content depth
- /about/
- /projects/
- /contact/
- /get-quote/ (follow Section 8 exactly)
- /service-areas/
- /privacy-policy/

### Technical Requirements (always)
- Canonical URLs
- JSON-LD structured data
- sitemap.xml + robots.txt
- Accessible, fast, minimal JS
- Follow all red flags in Section 14

## Design Tokens (Locked)

From current site (tailwind.config + globals.css):

- primary: #101d43
- accent / gold-primary: #D6AD30
- gold-secondary: #A18D32
- dark-blue: #061535
- deep-blue: #092866
- light-neutral: #E2E1DD
- Body text on dark: light-neutral
- Headings/links: gold-primary

We will hardcode these early in the Astro project so the feel stays identical.

## Next Immediate Actions

1. Set up Astro environment.
2. Port visual system (Header, Footer, halo effects, color classes).
3. Create the new route structure.
4. Begin content migration + expansion to meet "800+ useful words" + local considerations where needed.

All future changes will be measured against the full RULES.md checklist (Section 13 self-check).

**Status:** Planning complete. Ready to begin implementation.
