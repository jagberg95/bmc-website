'use client';

import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
  {
    slug: 'home-renovations',
    title: 'Upgrades & Renovations',
    tagline: 'Transform Your Space, Elevate Your Life',
    description:
      'From kitchen remodels to whole-house transformations — clear planning, quality materials, and workmanship built to last.',
    image: '/images/christian-mackie-kitchen2-unsplash.jpg',
    span: 'col-span-2 row-span-2',  // large tile — primary service
  },
  {
    slug: 'home-repairs',
    title: 'Home Repairs',
    tagline: 'Done Right, the First Time',
    description:
      'Honest, high-quality repairs for electrical, plumbing, drywall, storm damage and more — fixed at the source, not patched over.',
    image: '/images/sasun-bughdaryan-handyman-unsplash.jpg',
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
    slug: 'custom-homes',
    title: 'Custom Homes',
    tagline: 'Your Dream, Built from the Ground Up',
    description:
      'Design and build your dream home in Central Texas with five generations of craftsmanship, premium materials, and transparent budgeting from concept to key handoff.',
    image: '/images/herve-customhome-unsplash.jpg',
    span: 'col-span-2 row-span-1',  // wide tile
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-light-neutral text-primary min-h-screen relative overflow-hidden">
      {/* Header */}
      <section className="pt-28 pb-12 px-4 md:px-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight">
          Our Services
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          From quick fixes to full renovations and custom builds, we bring Texas craftsmanship to every project.
          Tap a service to learn more.
        </p>
      </section>

      {/* Mosaic Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] sm:auto-rows-[260px] gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative rounded-xl overflow-hidden ${
                /* Only apply multi-span on lg+ where we have 4 columns */
                service.span.replace(/col-span-2/g, 'sm:col-span-2 lg:col-span-2').replace(/row-span-2/g, 'sm:row-span-2 lg:row-span-2')
              }`}
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay — always visible with gradient + text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content — always visible on mobile, hover-reveal description on desktop */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  {service.tagline}
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <span className="mt-3 inline-block self-start bg-accent/90 text-primary font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
