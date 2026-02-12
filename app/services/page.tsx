// app/services/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased pt-20">

      {/* Hero Section for Services Overview */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden py-16 px-8 bg-deep-blue">
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Our Services
          </h1>
          <h2 className="text-2xl lg:text-3xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Expert Solutions for Your Home and Property in Central Texas
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            From custom home builds to essential repairs, Bar Moon Contracting delivers quality craftsmanship and honest service on every project.
          </p>
        </div>
      </section>

      {/* Services Listing Section - Staggered Layout */}
      <section className="py-20 px-8 bg-dark-blue">
        <div className="max-w-6xl mx-auto">
          
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

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-deep-blue text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gold-primary">Ready to Start Your Project?</h2>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your vision. We're here to build something exceptional with you.
        </p>
        <Link href="/contact" className="inline-block bg-gold-primary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gold-secondary text-xl">
          Get in Touch
        </Link>
      </section>

    </main>
  );
}
