# Bar Moon Contracting Website — AI Coder Rule Set v3.0 FINAL

Use this as `RULES.md` in the GitHub repo.

This rule set is the final build blueprint for a static, GitHub-hosted Bar Moon Contracting website. The goal is a professional, fast, locally optimized contractor website that is easy for Google to crawl, easy for customers to trust, aligned with Google Business Profile, and structured clearly enough for AI-assisted search systems to understand.

---

## 0. Owner Confirmations Required Before Publishing

The coder must not publish the live site until the owner confirms the following:

1. Final business name to use everywhere:
   - Bar Moon Contracting
   - Bar Moon Contracting LLC
   - or another exact legal/public name

2. Final phone number.

3. Final address/service-area decision:
   - public address displayed on the site and Google Business Profile,
   - or service-area business with address hidden where appropriate.

4. Business hours:
   - exact hours,
   - by appointment,
   - or call/text for availability.

5. Final Google Business Profile category:
   - likely `General Contractor`,
   - with only a few accurate secondary categories if needed.

6. Form destination:
   - email address receiving quote requests,
   - form provider,
   - spam protection method.

7. Real reviews, photos, project examples, insurance/licensing language, and any claims that need owner approval.

If these are not confirmed, use placeholders clearly marked `TODO: OWNER CONFIRM`.

---

## 1. Non-Negotiable Mission

Build a static, GitHub-hosted website for Bar Moon Contracting that helps homeowners, businesses, churches, and facility managers in Central Texas quickly understand:

- who Bar Moon is,
- what services it provides,
- where it works,
- why it can be trusted,
- how to request a quote with minimal friction.

The site must be optimized for Google Search, Google Business Profile, Google Maps, and AI-assisted search experiences by using clear entity information, structured data, helpful original content, crawlable pages, local relevance, strong internal linking, real proof, and trust signals.

Do not promise rankings. Do not use spammy SEO tactics. Do not create fake reviews. Do not keyword-stuff. Do not create doorway-style city pages. Build according to durable search fundamentals: useful content, clean architecture, accurate business information, crawlability, speed, accessibility, and real-world trust.

---

## 2. Business Context to Preserve

**Business name:** Bar Moon Contracting / Bar Moon Contracting LLC  
**Location:** Temple, Texas / Central Texas  
**Known address:** 5819 Alexandria Dr, Temple, TX 76502 — verify before publish  
**Known phone:** (254) 581-3808 — verify before publish  
**Critical:** The site, Google Business Profile, schema, footer, contact page, and citations must use one canonical NAP.

**Service areas:** Temple, Belton, Salado, Killeen, Harker Heights, Copperas Cove, Jarrell, Bell County, and Central Texas.

**Brand position:** Five-generation Central Texas legacy. Texas grit with modern precision. Straightforward, local, honest, clear, and quality-focused.

**Core brand lines to use or adapt:**

- Texas Craftsmanship. Built to Last. Rooted in Integrity.
- Texas roots. Honest work. Exceptional craftsmanship.
- We show up, communicate clearly, and do the work right.
- Clear scope. Honest communication. Craftsmanship built to last.

**Primary services:**

- General contracting
- Custom homes and major builds
- Home renovations
- Kitchen and bath remodeling
- Flooring and layout changes
- Drywall and repair work
- Storm damage and punch-list repairs
- Outdoor living: decks, patios, hardscapes, grading, drainage
- Fencing
- Painting
- Concrete
- Mini-split HVAC / comfort upgrades where applicable
- Low-voltage or electrical coordination where applicable
- Commercial, church, and facility work where relevant

**Tone:** Professional, warm, straightforward, durable. No hype. No “#1 contractor” claims. No fake scarcity. No unsupported guarantees. Confidence should come from clarity, process, local experience, and real workmanship.

---

## 3. Technical Stack Rules

**Preferred stack:** Astro + Tailwind CSS + MDX/content collections.

**Hosting:** GitHub Pages static deployment.

**Avoid:**

- WordPress
- bloated page builders
- heavy client-side JavaScript
- unnecessary animation libraries
- dependency-heavy templates
- JavaScript-only SEO content

**Required repo structure:**

```text
/
├── .github/workflows/deploy.yml       [if using GitHub Actions]
├── public/
│   ├── images/
│   ├── robots.txt
│   └── favicon assets
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── README.md
└── RULES.md
```

**Required scripts:**

```bash
npm run dev
npm run build
npm run preview
npm run check
```

**GitHub Pages requirements:**

- Configure the correct production `site` URL.
- Configure the correct `base` path if deploying from a project repo instead of a custom domain.
- All canonical URLs must resolve correctly in production.
- No broken image paths, CSS paths, JS paths, or internal links.
- Static output must be buildable and deployable without a server.

---

## 4. SEO Architecture Rules

**Minimum launch pages, Phase 1:**

1. `/` — Homepage
2. `/services/` — Services overview
3. `/services/general-contracting-temple-tx/`
4. `/services/home-renovations-temple-tx/`
5. `/services/kitchen-bath-remodeling-temple-tx/`
6. `/services/outdoor-living-decks-patios-central-texas/`
7. `/services/fencing-concrete-repairs-central-texas/` — split further in Phase 2 if content depth justifies
8. `/projects/`
9. `/about/`
10. `/get-quote/` — high-intent lead generation landing page
11. `/contact/`
12. `/service-areas/`
13. `/privacy-policy/`

**On-page rules:**

- One H1 per page.
- Natural heading hierarchy.
- Unique title tag and meta description per page.
- Primary search intent per page.
- Local language used naturally, never stuffed.
- Strong internal linking between services, projects, quote page, service areas, and contact.
- Every service page must answer:
  - what the service is,
  - who it is for,
  - what problems it solves,
  - what Bar Moon handles,
  - process,
  - local considerations such as Texas heat, clay soil, storms, drainage, materials, and project planning,
  - FAQs,
  - clear next step.

---

## 4A. Website Sitemap & URL Architecture

This is the definitive website structure. Follow it exactly for crawlability, topical authority, and ease of maintenance.

### Primary Navigation

Simple and consistent:

**Home | Services | Projects | About | Service Areas | Get Quote | Contact**

Mobile nav must include:

- visible “Request a Free Quote” CTA,
- click-to-call option,
- clear services link.

### Human-Readable Site Tree

```text
/
├── /services/
│   ├── /services/general-contracting-temple-tx/
│   ├── /services/home-renovations-temple-tx/
│   ├── /services/kitchen-bath-remodeling-temple-tx/
│   ├── /services/outdoor-living-decks-patios-central-texas/
│   ├── /services/fencing-concrete-repairs-central-texas/
│   ├── /services/custom-homes-central-texas/                    [Phase 2 if enough content]
│   ├── /services/commercial-church-facility-work-central-texas/  [Phase 2 if enough content]
│   └── /services/painting-flooring-repairs-central-texas/        [Phase 2 if enough content]
├── /projects/
│   ├── /projects/decks-patios/                                  [Phase 2]
│   ├── /projects/renovations/                                   [Phase 2]
│   └── /projects/commercial-facility-work/                       [Phase 2]
├── /about/
├── /service-areas/
│   ├── /service-areas/temple-tx/                                 [Phase 2 only if unique content]
│   ├── /service-areas/belton-tx/                                 [Phase 2 only if unique content]
│   ├── /service-areas/killeen-tx/                                [Phase 2 only if unique content]
│   ├── /service-areas/salado-tx/                                 [Phase 2 only if unique content]
│   ├── /service-areas/harker-heights-tx/                         [Phase 2 only if unique content]
│   ├── /service-areas/copperas-cove-tx/                          [Phase 2 only if unique content]
│   └── /service-areas/jarrell-tx/                                [Phase 2 only if unique content]
├── /resources/
│   ├── /resources/how-to-read-a-contractors-estimate/            [Phase 2]
│   ├── /resources/remodel-planning-central-texas/                [Phase 2]
│   └── /resources/deck-patio-planning-central-texas/             [Phase 2]
├── /get-quote/
├── /contact/
├── /privacy-policy/
├── /sitemap.xml
└── /robots.txt
```

### Page Purpose & Content Depth Map

Use this map as the build blueprint. Every page must have a clear job, a clear search intent, and enough useful content to avoid thin-page risk.

| URL | Primary Intent | Minimum Content Depth | Main CTA | Structured Data |
|---|---|---|---|---|
| `/` | Brand + local contractor trust | Hero, services grid, trust bar, process teaser, testimonials if real, local service-area mention, and quote/call CTA | Request a Free Quote | LocalBusiness, Organization, WebSite |
| `/services/` | Services overview | Grid of all services with short benefits, links to each service page, local service-area context, and quote CTA | Choose a Service / Get Quote | ItemList, BreadcrumbList |
| `/services/general-contracting-temple-tx/` | General contractor + location | 800+ useful words: intro/problem, what Bar Moon handles, process, local considerations, FAQs, photos when available, quote CTA | Request Quote | Service, FAQPage |
| `/services/home-renovations-temple-tx/` | Home renovations + location | 800+ useful words: renovation types, planning notes, scope/cost/timeline factors, process, FAQs, photos when available | Plan My Renovation | Service, FAQPage |
| `/services/kitchen-bath-remodeling-temple-tx/` | Kitchen/bath remodeling + location | 800+ useful words: common remodel goals, layout/finish considerations, process, FAQs, photos when available | Request Remodel Quote | Service, FAQPage |
| `/services/outdoor-living-decks-patios-central-texas/` | Outdoor living + Central Texas | 800+ useful words: decks, patios, hardscapes, drainage/weather considerations, process, FAQs, photos when available | Start Outdoor Project | Service, FAQPage |
| `/services/fencing-concrete-repairs-central-texas/` | Fencing, concrete, and repairs | 800+ useful words or split into separate pages in Phase 2 if each service has enough depth | Request a Free Quote | Service, FAQPage |
| `/projects/` | Social proof | Gallery, project summaries, before/after photos, scope notes, city/service tags, links to relevant services | View Services / Get Quote | CollectionPage |
| `/about/` | Trust and story | Local legacy, values, work philosophy, owner/family context where approved, insurance notes, contact CTA | Work With Us | AboutPage, Organization |
| `/service-areas/` | Location clarity | Service areas list, service-area explanation, map/GBP link when available, links to city pages only if built | Find Service Near Me | LocalBusiness, BreadcrumbList |
| `/get-quote/` | Lead generation | Full landing page treatment from Section 8 with short form, trust signals, and “what happens next” section | Submit Quote Request | ContactPage, LocalBusiness |
| `/contact/` | NAP + direct contact | Full verified NAP, phone, service area, contact options, map/GBP link, quote CTA | Call / Quote | ContactPage, LocalBusiness |
| `/privacy-policy/` | Trust and compliance | Simple privacy explanation for form submissions, analytics, and contact handling | Return to Quote Form | WebPage |
| `/service-areas/[city]-tx/` | Phase 2 local relevance | Only if unique: 600+ useful words, local proof, services, nearby projects, photos, FAQs, quote CTA | Request Quote | Service, LocalBusiness, FAQPage |

### Internal Linking Strategy

Build a clear topic cluster. Services are the main hubs. City pages are supporting spokes only when justified by unique content.

Required internal links:

- Homepage links to the top five service pages, `/service-areas/`, `/projects/`, `/about/`, `/get-quote/`, and `/contact/`.
- Services overview links to every service page.
- Every service page links to:
  - `/get-quote/`
  - `/contact/`
  - `/services/`
  - at least two related service pages
  - one relevant project or resource page when available.
- `/service-areas/` links to the most important service pages and to city pages only if those city pages exist.
- City pages, if created, link back to relevant service pages, quote form, and nearby project examples.
- Resource articles link to the service pages they support and to `/get-quote/`.
- Footer appears sitewide and includes verified NAP, top services, service areas, quote CTA, contact, and privacy policy.

Example internal linking patterns:

```text
Homepage
→ Services Overview
→ Home Renovations page
→ Kitchen & Bath page
→ Quote page

Homepage
→ Service Areas
→ Belton page
→ Outdoor Living page
→ Projects page
→ Quote page
```

### Technical XML Sitemap Rules

Generate `/sitemap.xml` automatically at build time.

The XML sitemap must include:

- all indexable pages,
- correct canonical production URLs,
- accurate `lastmod` values where available,
- no draft pages,
- no duplicate URLs,
- no query-string URLs,
- no form-success or thank-you pages unless intentionally indexable.

After launch, submit the sitemap in Google Search Console and request indexing for the homepage, top service pages, quote page, contact page, and service-area hub.

### Town-Specific Page Rules

Use one canonical homepage. Do not create different homepages for each town.

Use `/service-areas/` as the service-area hub. Add town-specific pages in Phase 2 only when each page has genuine local value.

Town pages may be built for:

- Temple
- Belton
- Killeen
- Salado
- Harker Heights
- Copperas Cove
- Jarrell

Each city page must include:

- H1: “General Contractor Serving [City], TX”
- short local intro,
- services available in that area,
- unique local notes where accurate,
- real nearby project examples if available,
- photos when available,
- FAQs specific to the area,
- links to relevant service pages,
- quote CTA.

Never build thin pages where only the city name changes. If there is not enough unique content for a city page, keep that city listed on `/service-areas/` until real project proof or useful local content exists.

### IP-Based Homepage Personalization Rule

Do not auto-change the homepage or redirect users based on visitor IP.

Reasons:

- IP location can be inaccurate.
- Mobile carriers, VPNs, and browsers can misidentify location.
- Googlebot may not see the same experience as local users.
- Auto-redirects can create indexing confusion.
- Multiple dynamic homepage versions are harder to maintain and can weaken trust.

Allowed personalization:

- Static homepage language: “Serving Temple, Belton, Killeen, and Central Texas.”
- A user-selected town dropdown linking to static, crawlable city pages.
- A small banner such as “Looking for service in Belton? View our Belton service area page.”
- Quote-form city prefill only when the user arrives from a city page or selects a city manually.
- UTM tracking and analytics segmentation.

Never:

- auto-redirect `/` to city pages based on IP,
- show Googlebot different content than users,
- hide city content from normal users,
- rely on JavaScript-only city content for SEO,
- create multiple near-identical homepages with swapped city names.

Best practice: Build one excellent homepage, one strong service-area hub, and a small number of genuinely useful city pages once there is enough local proof to support them.

---

## 5. Google Business Profile and Maps Alignment

The website must support, not fight, the Google Business Profile.

### Pre-launch verification

Confirm:

- exact business name,
- final phone number,
- final address or service-area setup,
- hours or “by appointment,”
- primary category,
- limited accurate secondary categories,
- final website URL,
- official social links if available.

### Website alignment

Footer, contact page, schema, and GBP must share identical canonical NAP and URL.

Contact page must include:

- click-to-call,
- quote CTA,
- service area list,
- Google Map or GBP link once available,
- simple statement of how to request a quote.

Homepage and service pages must reinforce the same core services listed in GBP.

### GBP-ready description

Use on the site and in the README:

> Bar Moon Contracting is a Central Texas general contractor serving Temple, Belton, Killeen, Salado, Harker Heights, Copperas Cove, Jarrell, and surrounding Bell County communities. We handle repairs, renovations, custom projects, outdoor living, fencing, concrete, and facility work with clear communication, honest estimates, and craftsmanship built to last.

### Reviews

- Only display real customer reviews.
- Do not create fake reviews.
- Do not use review schema unless the review text is visible on the page and genuinely belongs to the business.
- Add a review request CTA after project completion, not on the quote form.

---

## 6. Structured Data Rules

Use JSON-LD. Validate before delivery.

### Sitewide schema

Use where appropriate:

- `Organization`
- `LocalBusiness`
- `GeneralContractor`
- `WebSite`
- `BreadcrumbList` on inner pages

### LocalBusiness / GeneralContractor schema must include

- name
- URL
- telephone
- address or service-area logic
- areaServed
- geo only if address is public and verified
- openingHoursSpecification if verified
- sameAs links if official profiles exist
- image/logo
- priceRange if reasonable and not misleading
- hasOfferCatalog or makesOffer where appropriate

### Service pages

Use `Service` schema with:

- provider linked to the main business entity through a consistent `@id`
- areaServed
- serviceType
- page URL
- page description
- FAQPage schema if FAQs are visible on the page

### Blog/resources

Use `Article` or `BlogPosting` with:

- author/publisher as Bar Moon Contracting
- datePublished
- dateModified
- mainEntityOfPage

### Strict schema rules

- Schema must match visible content exactly.
- No hidden claims in schema.
- No fake ratings.
- No schema spam.
- Use one consistent `@id` for the business entity everywhere.
- Validate with Google Rich Results Test and Schema Markup Validator where applicable.

---

## 7. AI Search / Generative Search Rules

Optimize for AI search by doing excellent SEO, not gimmicks.

Content must be:

- specific,
- locally relevant,
- easy to quote,
- easy to understand,
- organized with clear headings,
- supported by real project photos when available,
- grounded in genuine contractor experience.

Include a short direct-answer section near the top of key pages.

Example:

> Bar Moon Contracting is a Central Texas general contractor based in Temple, TX, serving homeowners, businesses, churches, and facilities across Bell County with renovations, repairs, outdoor living projects, concrete, fencing, and custom construction.

Build content that answers real questions:

- How do I plan a remodel in Central Texas?
- What should a contractor estimate include?
- When should I repair vs. replace a deck or fence?
- What affects patio, concrete, or outdoor living costs in Bell County?
- What should churches or facility managers ask before hiring a contractor?

If using AI assistance for drafting, edit heavily until it contains real local experience and project insight. Never publish generic filler.

---

## 8. Lead Generation Landing Page & Questionnaire Rules

`/get-quote/` is a dedicated high-intent landing page, not just a form. It should support “free quote” + service + location searches while converting visitors into qualified leads with minimal friction.

### Page-level SEO and trust strategy

**H1:** Get a Free, No-Pressure Quote in Central Texas

**Supporting line:** Tell us what you need. We’ll review the details and follow up with clear next steps.

**Trust line:** Local. Straightforward. No surprises. Five generations of Central Texas craftsmanship.

Add a short “What happens next” micro-section above or beside the form:

1. Tell us about the project.
2. We review the details and follow up.
3. You get clear next steps before moving forward.

Include:

- 2–3 short trust signals,
- recent project teasers if real examples are available,
- internal links to 2–3 relevant service pages,
- link to the About page,
- click-to-call option.

### Form design

Keep it concise: maximum 7 fields.

Required fields in this order:

1. Name
2. Phone
3. Email
4. Project city or ZIP
5. Project type
6. Brief project details
7. Preferred contact method or best time to reach you

Project type options:

- Home renovation or remodel
- Kitchen or bath remodel
- Custom home or major build
- Outdoor living: deck, patio, hardscape
- Fencing
- Concrete
- Painting
- Repairs or handyman work
- Mini-split HVAC or comfort upgrade
- Commercial, church, or facility work
- Other

Optional Phase 2 fields:

- Budget range
- Timeline
- Photo upload

Do not add these until the first form is tested and working.

### Form implementation

Use a static-friendly form handler such as Formspree, Basin, Getform, or equivalent.

Required:

- honeypot spam protection,
- clear success state,
- GA4 event on form submission,
- click-to-call tracking,
- hidden UTM/source fields if practical,
- privacy policy link directly below the form,
- accessible labels,
- large mobile-friendly fields.

Success message:

> Thank you — we received your request. We’ll reach out soon to learn more and talk through next steps. In the meantime, feel free to browse our recent projects or service details.

### Conversion reassurance

Near the submit button, include:

> 100% free. No obligation. We only move forward if the fit is right for both of us.

### GBP synergy

The quote page should reinforce local entity signals through service-area language, internal links, trust signals, and consistent business information. After a successful project, the follow-up process—not the initial quote form—may include a polite request for a Google review.

---

## 9. Conversion Rules

Every page must answer within seconds:

- Why should I trust Bar Moon?
- Does Bar Moon do my kind of project?
- Does Bar Moon serve my area?
- What happens next?
- How do I contact them?

### Required CTA pattern

Primary CTA: Request a Free Quote  
Secondary CTA: Call Bar Moon  
Support CTA: See Our Services or View Projects

### Homepage hero recommendation

**Headline:** Central Texas Contracting Built on Craftsmanship, Clarity, and Integrity.

**Subheadline:** Bar Moon Contracting serves Temple, Belton, Killeen, and surrounding Bell County communities with renovations, repairs, outdoor living, concrete, fencing, and custom construction.

**Primary CTA:** Request a Free Quote  
**Secondary CTA:** Call Bar Moon

### Trust signals

Use throughout the site:

- five-generation Central Texas roots,
- clear estimates,
- no-pressure consultation,
- practical project planning,
- Texas-specific know-how,
- real photos and project examples,
- straightforward communication.

Prefer:

> Clear scope, realistic timelines, and straightforward communication.

Avoid:

> Always on time and always on budget.

Do not use blanket guarantees unless operationally and legally approved.

---

## 10. Content Quality Rules

Content must sound like a real Central Texas contractor, not a generic marketing agency.

Use:

- short paragraphs,
- plain language,
- specific service details,
- clear process steps,
- local context,
- quiet confidence.

Avoid:

- “best in Texas,”
- keyword stuffing,
- fake urgency,
- fake reviews,
- meaningless stock phrases,
- generic AI filler,
- duplicate city pages,
- vague claims.

Every service page must include:

- local intro and customer problem,
- what Bar Moon handles,
- what affects scope/cost/timeline,
- process,
- common mistakes to avoid,
- FAQs,
- strong CTA.

### Estimate philosophy

Include in relevant resource content and link from quote/service pages.

A clear estimate should define:

- scope,
- materials or allowances,
- labor,
- exclusions,
- unknowns or contingencies,
- timeline,
- payment schedule,
- next steps.

---

## 11. Design Rules

### Visual identity

Sturdy, warm, professional, Central Texas, premium but not flashy.

### Suggested palette

- charcoal or deep navy for trust,
- warm off-white background,
- muted tan or stone,
- restrained rust or terracotta accent for CTAs.

### Typography

- readable sans-serif such as Inter or system font,
- 16–18px body text,
- large clear headings,
- high contrast.

### Layout

- mobile-first,
- simple nav,
- strong footer,
- clear service cards,
- visible CTAs,
- click-to-call on mobile.

### Images

Prioritize:

- real project photos,
- before/after images,
- jobsite detail shots,
- finished work,
- local context.

Image requirements:

- WebP/AVIF where practical,
- responsive sizes,
- lazy loading below fold,
- descriptive alt text,
- no generic hardhat stock when better options exist.

### Accessibility

- WCAG AA contrast,
- keyboard navigation,
- visible focus states,
- labels for all form fields,
- no text-in-images unless repeated in HTML,
- adequate tap targets,
- logical heading structure.

---

## 12. Performance Rules

### Targets

- Lighthouse Performance: 95+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- LCP under 2.5s on mobile
- CLS under 0.1
- INP passing
- no oversized hero image
- no render-blocking bloat

### Implement

- optimized images,
- lazy loading below the fold,
- minimal JavaScript,
- minified CSS,
- optimized font loading,
- sitemap,
- robots.txt,
- canonical tags,
- Open Graph tags,
- Twitter/X card tags,
- clean semantic HTML.

---

## 13. Required Self-Checking Workflow

The AI coder must build, test, critique, fix, and report. Never just output code.

After each major phase, run this self-check. Explicitly validate that the architecture matches Section 4A and that all Phase 1 pages meet their minimum content-depth requirements.

### A. Technical Audit

- Does `npm run build` pass with no errors?
- Are all routes generated correctly?
- Are there broken links or images?
- Are images optimized and lazy-loaded?
- Is the site usable without JavaScript?
- Are meta tags, canonicals, robots.txt, and sitemap correct?
- Does the architecture match Section 4A exactly?
- Are the sitemap and internal links using the same canonical URL format?

### B. SEO Audit

- Does each page have one clear search intent?
- Does every page have a unique title and meta description?
- Is the business entity clear and consistent?
- Is NAP identical everywhere?
- Are service areas accurate and natural?
- Is internal linking crawlable?
- Are there thin or duplicate pages?
- Are Section 4A content-depth minimums met?
- Does content help real people first?

### C. Local / GBP Audit

- Does the site match GBP name, phone, service area, and categories exactly?
- Is the business name free of keyword stuffing?
- Is the service-area setup accurate?
- Is the contact page strong enough to support Maps trust?
- Are reviews real and visible if marked up?
- Is the address handled correctly for public-address vs service-area-business setup?

### D. Structured Data Audit

- Does schema match visible content?
- Are there zero fake claims, ratings, or hidden information?
- Is the same business `@id` used consistently?
- Does each service page use Service schema where appropriate?
- Are FAQs visible if FAQPage schema is used?
- Are there zero critical validation errors?

### E. AI Search Audit

- Are direct answers clear near the top of key pages?
- Are services and locations unambiguous?
- Does content contain specific experience and local insight?
- Would an AI answer engine understand who Bar Moon is, what it does, and where it works?
- Is the content unique enough to be cited or summarized accurately?

### F. Conversion Audit

- Is the quote form short and low-friction?
- Is the main CTA visible above the fold?
- Is the phone number easy to tap?
- Is “what happens next?” answered clearly?
- Does the site feel trustworthy within five seconds?
- Are there enough proof elements without clutter?

### G. Accessibility Audit

- Are all form fields properly labeled?
- Are contrast ratios strong?
- Is navigation keyboard-friendly?
- Are images described?
- Is heading structure logical?
- Are tap targets large enough on mobile?

### H. Multi-Perspective Critique

Review the finished site as:

1. a homeowner in Temple,
2. a church or facility manager,
3. a commercial client,
4. Googlebot,
5. Google Business Profile / Maps,
6. an AI search system,
7. the business owner maintaining the repo.

For each perspective, list:

- what works well,
- what felt weak,
- what was fixed.

### Final delivery package

The coder must deliver:

- full file tree,
- build instructions,
- deployment instructions,
- SEO checklist,
- structured data checklist,
- self-critique report with weaknesses found and fixes applied,
- list of unresolved owner-confirmation items,
- next recommended Phase 2 improvements.

---

## 14. Red Flags the Coder Must Avoid

Do not:

- guarantee rankings,
- stuff city names,
- create fake reviews or ratings,
- create duplicate thin city pages,
- hide content for search engines only,
- use misleading schema,
- publish an address if it should be hidden,
- use an unverified phone number,
- use irrelevant GBP categories,
- make the form long or burdensome,
- rely primarily on stock photos,
- bury the phone number,
- violate the IP personalization rule in Section 4A,
- launch without sitemap, robots.txt, canonicals, and working form,
- make service or city pages that exist only to capture keywords.

---

## 15. Phased Build Plan

### Phase 1 — Launch Foundation

Build:

- Home
- Services overview
- 5 core service pages
- Projects
- Get Quote
- Contact
- About
- Service Areas
- Privacy Policy
- full schema
- sitemap
- robots.txt
- GA4/Search Console setup placeholders
- working form
- complete self-check report

### Phase 2 — Proof and Depth

Add:

- project subcategories,
- real before/after photos,
- testimonials if real,
- resource articles,
- refined FAQs,
- GBP link and review request process,
- additional service pages where content is deep enough,
- city pages only where unique local content exists.

### Phase 3 — Local Growth

Add:

- city/service case studies from real projects,
- blog/resource content drawn from actual jobs,
- seasonal GBP post ideas,
- ongoing Search Console optimization based on real impressions and clicks,
- page improvements based on actual conversion behavior.

---

## 16. Post-Launch SEO and GBP Checklist

After launch:

1. Verify Google Search Console.
2. Submit `/sitemap.xml`.
3. Request indexing for homepage, top services, quote page, contact page, and service-area hub.
4. Connect GA4.
5. Track quote form submissions and click-to-call events.
6. Confirm Google Business Profile uses the same NAP and website URL.
7. Add real photos to GBP.
8. Add service list to GBP matching the website.
9. Add business description consistent with Section 5.
10. Ask satisfied customers for honest Google reviews after completed work.
11. Publish occasional GBP updates tied to real work, seasonal maintenance, or service reminders.
12. Review Search Console data monthly and improve pages based on real search queries.

---

## 17. Definition of Done

The site is not done until:

- `npm run build` passes cleanly,
- all Phase 1 pages exist,
- all pages are mobile-friendly,
- all CTAs work,
- quote form works,
- NAP is verified and 100% consistent,
- sitemap and robots.txt exist and are correct,
- canonical tags are correct,
- structured data validates with zero critical errors,
- pages are crawlable,
- Lighthouse targets are met or misses are documented and justified,
- content meets Section 4A depth requirements,
- content is helpful, specific, and not thin,
- no fake reviews or unsupported claims are present,
- README contains deployment and post-launch SEO steps,
- self-critique report shows real weaknesses found and fixed.

---

## 18. Final Note to the Coder

Build this like a serious, long-term local business asset, not a template. The finished site should feel instantly trustworthy to a Central Texas homeowner, useful and clear to Google and AI systems, easy for Bar Moon to maintain, and strong enough to compete with professional marketer-built contractor websites.

The goal is not tricks. The goal is clarity, speed, trust, local relevance, technical excellence, and a clean path from search to quote request.

**End of v3.0 FINAL**
