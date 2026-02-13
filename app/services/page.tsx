'use client';

import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
  {
    slug: 'custom-homes',
    title: 'Custom Homes',
    tagline: 'Your Dream, Built from the Ground Up',
    description:
      'Design and build your dream home in Central Texas with five generations of craftsmanship, premium materials, and transparent budgeting from concept to key handoff.',
    image: '/images/herve-customhome-unsplash.jpg',
    span: 'col-span-2 row-span-2',  // large tile
  },
  {
    slug: 'home-renovations',
    title: 'Upgrades & Renovations',
    tagline: 'Transform Your Space, Elevate Your Life',
    description:
      'From kitchen remodels to whole-house transformations — clear planning, quality materials, and workmanship built to last.',
    image: '/images/christian-mackie-kitchen2-unsplash.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    slug: 'outdoor-living',
    title: 'Outdoor Living',
    tagline: 'Your Backyard, Built Right',
    description:
      'Decks, patios, landscape design and hardscapes made for Texas living — accounting for clay soils, heat, and drainage.',
    image: '/images/point3d-commercial-imaging-ltd-patio-unsplash.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    slug: 'home-repairs',
    title: 'Home Repairs',
    tagline: 'Done Right, the First Time',
    description:
      'Honest, high-quality repairs for electrical, plumbing, drywall, storm damage and more — fixed at the source, not patched over.',
    image: '/images/sasun-bughdaryan-handyman-unsplash.jpg',
    span: 'col-span-2 row-span-1',  // wide tile
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-dark-blue text-light-neutral min-h-screen relative overflow-hidden">
      {/* Watermark logo */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]"
        aria-hidden="true"
      >
        <Image
          src="/images/Icon/BMC_Icon_Navy.png"
          alt=""
          width={800}
          height={800}
          className="object-contain select-none"
          priority={false}
        />
      </div>

      {/* Header */}
      <section className="pt-28 pb-12 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gold-primary mb-4 tracking-tight">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          From custom builds to quick repairs, we bring Texas craftsmanship to every project.
          Click a service to learn more.
        </p>
      </section>

      {/* Mosaic Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative rounded-xl overflow-hidden ${service.span}`}
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Default overlay — title always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              {/* Hover overlay — darker with full text */}
              <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 md:p-8">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                  {service.tagline}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-4">
                  {service.description}
                </p>
                <span className="inline-block bg-accent hover:bg-gold text-primary font-bold text-sm uppercase tracking-wider py-2 px-5 rounded-lg transition-colors duration-200">
                  Learn More &rarr;
                </span>
              </div>

              {/* Default title (bottom-left) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
                <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {service.title}
                </h2>
                <p className="text-accent text-sm font-medium mt-1">{service.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
