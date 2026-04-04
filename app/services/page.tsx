'use client';

<<<<<<< HEAD
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
=======

import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';

export default function ServicesPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased pt-20">

      {/* Hero Section for Services Overview */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden py-16 bg-deep-blue">
        <Container className="relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Our Services
          </h1>
          <h2 className="text-2xl lg:text-3xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Expert Solutions for Your Home and Property in Central Texas
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            From custom home builds to essential repairs, Bar Moon Contracting delivers quality craftsmanship and honest service on every project.
          </p>
        </Container>
      </section>

      {/* Services Listing Section - Staggered Layout */}
      <section className="py-20 bg-dark-blue">
        <Container className="max-w-6xl">
          
          {/* Row 1: Custom Homes (Large) */}
          <div className="mb-12">
            <div className="bg-deep-blue p-10 lg:p-16 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-gold-primary">Custom Homes</h3>
                  <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                    Building your dream home from the ground up with Central Texas integrity and unmatched craftsmanship. From concept to completion, we design and build homes that reflect your lifestyle and stand the test of time.
                  </p>
                  <Link href="/services/custom-homes" className="inline-block bg-gold-primary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-secondary text-xl">
                    Plan Your Dream Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Home Renovations & Outdoor Living (Side by Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Home Renovations */}
            <div className="bg-deep-blue p-8 lg:p-12 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300 flex flex-col">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gold-primary">Home Renovations</h3>
              <p className="text-lg mb-8 leading-relaxed flex-grow">
                Transform your living space with expert renovations. From kitchen and bathroom remodels to flooring and floor plan adjustments, we have the experience to accomplish any project on time and on budget.
              </p>
              <Link href="/services/home-renovations" className="inline-block bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary text-lg self-start">
                Explore Renovation Ideas
              </Link>
            </div>

            {/* Outdoor Living Spaces */}
            <div className="bg-deep-blue p-8 lg:p-12 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300 flex flex-col">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gold-primary">Outdoor Living Spaces</h3>
              <p className="text-lg mb-8 leading-relaxed flex-grow">
                Design and build stunning decks, patios, and landscapes. Whether you love to host or just want a place to relax, we create your perfect outdoor living area that blends seamlessly with your home.
              </p>
              <Link href="/services/outdoor-living" className="inline-block bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary text-lg self-start">
                Design Your Outdoor Oasis
              </Link>
            </div>
          </div>

          {/* Row 3: Home Repairs (Full Width, Different Style) */}
          <div className="mb-12">
            <div className="bg-dark-blue p-10 lg:p-16 rounded-lg shadow-xl border-4 border-gold-primary hover:shadow-gold-primary transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-gold-primary">Reliable Home Repairs</h3>
                  <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                    Not every project requires a full renovation — but every repair deserves to be done correctly. From small electrical and plumbing to drywall, flooring, and storm damage, we fix problems at the source with the same standards we bring to larger projects.
                  </p>
                  <Link href="/services/home-repairs" className="inline-block bg-gold-primary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-secondary text-xl">
                    Request Repair Service
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-deep-blue text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gold-primary">Ready to Start Your Project?</h2>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your vision. We're here to build something exceptional with you.
>>>>>>> a6322ba (Apply responsive Container component to all main pages for consistent scaling)
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
