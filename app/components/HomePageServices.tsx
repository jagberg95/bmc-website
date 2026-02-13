'use client';

import Link from 'next/link';

const SERVICES = [
  {
    slug: 'custom-homes',
    title: 'Custom Homes',
    description: 'Design and build your dream home from the ground up with Central Texas integrity.',
    link: '/services/custom-homes',
  },
  {
    slug: 'home-renovations',
    title: 'Home Renovations',
    description: 'Modernize your living space with expert renovations, from kitchens to full floor plans.',
    link: '/services/home-renovations',
  },
  {
    slug: 'outdoor-living',
    title: 'Outdoor Living Spaces',
    description: 'Decks, patios, and landscapes designed to create your perfect outdoor oasis.',
    link: '/services/outdoor-living',
  },
  {
    slug: 'home-repairs',
    title: 'Reliable Home Repairs',
    description: 'Honest, high-quality repairs for electrical, plumbing, drywall, and more.',
    link: '/services/home-repairs',
  },
];

export default function HomePageServices() {
  return (
    <section className="py-20 px-4 md:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12 uppercase tracking-widest">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="group relative bg-deep-blue border border-white/10 rounded-lg p-6 overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl hover:bg-[#15234d]"
            >
              <div className="relative z-10 flex flex-col h-full">
                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                   {service.title}
                 </h3>
                 <p className="text-gray-300 mb-6 flex-grow leading-relaxed group-hover:text-white transition-colors duration-300">
                   {service.description}
                 </p>
                 <Link
                   href={service.link}
                   className="inline-block self-start text-sm font-bold text-accent uppercase tracking-wider border-b-2 border-transparent group-hover:border-accent transition-all duration-300"
                 >
                   Learn More &rarr;
                 </Link>
              </div>
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
