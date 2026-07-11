# Restructure Notes - Media & Hero Decisions

**Context:** During the full restructure to follow RULES.md v3 (Astro stack, exact sitemap/URLs from Section 4A, Phase 1 pages, content depth, etc.) while preserving the original visual style, colors, halo effects, header behavior, and professional "Texas grit + modern" feel.

## Hero Section
- **Why the video hero?** This was **not a change**. The original Next.js site already used a prominent HeroVideo component with `/videos/hero-background.mp4` (plus other videos like kitchen scrub). 
- We preserved it exactly because:
  - It matches the visual identity rules (sturdy, warm, professional contractor aesthetic).
  - RULES emphasize keeping the same style and look/feel.
  - Video creates immediate impact and trust (shows real work in progress).
  - Homepage hero recommendation in RULES is high-level ("Central Texas Contracting..."); the existing video delivers that without generic stock.
- In the Astro version we kept the same video + overlay + CTA pattern for continuity.

## Images / Media
- **Not removed or lost** — the full set of images remains in `public/images/` (including all the original project shots, logos, etc.).
- **Why it appears reduced right now:**
  - Original site had images scattered across **non-compliant pages** (e.g. `/our-process`, `/our-heart-our-passion`, old `/portfolio`, `/subcontractors`, blog, etc.).
  - RULES.md Section 4A defines a strict sitemap and Phase 1 pages only. We had to align URLs (e.g. `/services/home-renovations-temple-tx/` instead of the old `/services/home-renovations`) and navigation (Home | Services | Projects | About | Service Areas | Get Quote | Contact).
  - Old pages and their media are being consolidated or replaced:
    - Old portfolio/media → moving into new `/projects/` (as per rules).
    - Service-specific images → being mapped to the exact new service page slugs.
    - Extra "our process / heart" images → will go into expanded About or new resource-style pages in Phase 2.
  - Homepage mosaic now uses a curated set of the strongest representative images from the original collection to match the "services grid" + trust signals required on home.
- **RULES guidance we followed:**
  - "Prioritize real project photos, before/after images, jobsite detail shots"
  - "No generic hardhat stock when better options exist"
  - Content must meet minimum depth (800+ words on service pages) and feel like real Central Texas work.
  - Phase 1 is foundation first; full photo integration + before/after happens as we expand content depth.
- All original media is still available and will be re-used in the correct new locations as we complete the Phase 1 pages and content.

This is intentional sequencing to follow the rules architecture first, then enrich with the existing visual assets. Let me know which images/sections you want restored or expanded next (e.g. more mosaic tiles, specific project shots into /projects/, timeline elements into About, etc.). We can bring them back quickly while staying compliant.
