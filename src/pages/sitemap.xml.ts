export async function GET() {
  const pages = [
    '',
    '/services',
    '/services/general-contracting-temple-tx',
    '/services/home-renovations-temple-tx',
    '/services/kitchen-bath-remodeling-temple-tx',
    '/services/outdoor-living-decks-patios-central-texas',
    '/services/fencing-concrete-repairs-central-texas',
    '/services/custom-homes-central-texas',
    '/projects',
    '/about',
    '/faq',
    '/get-quote',
    '/blog',
    '/blog/how-to-read-a-contractors-estimate',
    '/blog/how-to-choose-a-general-contractor',
    '/service-areas',
    '/subcontractors',
    '/terms-of-service',
    '/privacy-policy',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url><loc>https://barmooncontracting.com${page}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}