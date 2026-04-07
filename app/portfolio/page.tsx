import Breadcrumbs from '../components/Breadcrumbs';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Elegant Custom Residence',
    image: '/images/portfolio/custom-home-example-1.jpg',
    alt: 'Modern custom home exterior',
    description: "A bespoke modern home designed for spacious living and entertaining, tailored to the client's unique lifestyle in Central Texas.",
    service: { label: 'Custom Homes', href: '/services/custom-homes' },
  },
  {
    title: 'Full Home Renovation',
    image: '/images/portfolio/renovation-example-1.jpg',
    alt: 'Kitchen renovation before and after',
    description: 'Transformed an outdated property into a contemporary living space with a focus on updated kitchen and bathrooms.',
    service: { label: 'Home Renovations', href: '/services/home-renovations' },
  },
  {
    title: 'Outdoor Living Oasis',
    image: '/images/portfolio/outdoor-living-example-1.jpg',
    alt: 'Landscaped backyard patio',
    description: 'Created a stunning backyard extension featuring a custom patio, outdoor kitchen, and professional landscaping for year-round enjoyment.',
    service: { label: 'Outdoor Living', href: '/services/outdoor-living' },
  },
];

export default function PortfolioPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Our Projects' }
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-primary">Our Project Portfolio</h1>
        <p className="mb-8 text-gray-700 italic">Showcasing the quality and craftsmanship Bar Moon Contracting brings to every project.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {portfolioItems.map((item, i) => (
            <div key={i} className="portfolio-item border border-gray-200 rounded-lg overflow-hidden bg-gray-50 shadow-sm flex flex-col">
              <div className="relative w-full h-48">
                <Image src={item.image} alt={item.alt} fill className="object-cover" />
              </div>
              <div className="portfolio-item-content p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gold-primary">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                <a href={item.service.href} className="service-link inline-block mt-auto bg-gold-primary hover:bg-gold-secondary text-primary font-bold py-2 px-4 rounded transition-colors text-sm">{item.service.label}</a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-gray-400 italic">(Portfolio content will be populated soon. This is a structural placeholder.)</p>
      </main>
  );
}
