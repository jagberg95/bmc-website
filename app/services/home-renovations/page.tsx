// app/services/home-renovations/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeRenovationsPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section for Renovations */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16 px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/renovations-hero.jpg"
            alt="Bar Moon Contracting Home Renovation"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Home Upgrades and Renovations
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Specializing in home upgrades and renovations, Bar Moon Contracting is your trusted local general contractor. With a skilled team and generations of Central Texas know-how, we bring top-notch craftsmanship and genuine attention to detail to every project. From kitchen remodels to full-house transformations, we turn your vision into a home you&apos;ll love for years to come. Let&apos;s talk about your project and make it happen.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-200 text-center">
            Explore our comprehensive home renovation services designed to refresh and elevate your indoor spaces&mdash;from smart kitchen and bathroom designs to updated flooring, layout changes, or a complete fresh start. We handle it all with clear planning, quality materials, and workmanship built to last.
          </p>
        </div>
      </section>

      {/* Services Specialties Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Our Renovation Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Specialty 1: Kitchens and Bathrooms */}
            <div className="md:col-span-2 bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Kitchens and Bathrooms</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Kitchens and bathrooms are the heart of daily life&mdash;and often the most complex spaces to get right. Poor layouts, outdated finishes, or rushed remodels lead to frustration and expensive fixes later.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                We specialize in remodels that improve function, flow, and durability. From smart layout adjustments and fixture placement to cabinetry, countertops, tile, and finishes, we manage every detail. Our approach: clear planning, coordinated trades, and workmanship that stands up to everyday use.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                The result? Spaces that work better, look intentional, and add real long-term value to your home.
              </p>
              <Link href="/services/kitchen-bath-remodels" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                Learn More About Kitchens &amp; Bathrooms
              </Link>
            </div>

            {/* Specialty 2: Flooring Installations */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Flooring Installations</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Flooring sets the tone for your entire home&mdash;and improper installation can cause daily annoyances you&apos;ll notice every step. Uneven surfaces, poor transitions, gaps, or premature wear often come from rushed prep.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                We install and replace flooring with careful attention to subfloor conditions, moisture issues (common in Central Texas), material acclimation, and long-term performance. Whether it&apos;s a single room update or whole-house refresh&mdash;hardwood, luxury vinyl plank, tile, laminate, or carpet&mdash;we ensure clean lines, proper leveling, seamless transitions, and a solid feel underfoot.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Our goal: Flooring that looks beautiful, stays quiet and stable, and holds up to Texas life.
              </p>
              <Link href="/services/flooring" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                Learn More About Flooring
              </Link>
            </div>

            {/* Specialty 3: Room Adjustments and Interior Modifications */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Room Adjustments &amp; Interior Modifications</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Sometimes a home doesn&apos;t need more square footage&mdash;it needs better use of what&apos;s already there. Awkward layouts, underused rooms, or outdated flow can limit how your space lives.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We handle interior modifications with a builder&apos;s eye: opening up areas, redefining room purposes, or making targeted layout changes that feel natural and balanced. Every adjustment considers structure, flow, and long-term value&mdash;so the change feels intentional, not improvised.
              </p>
              <Link href="/services/floor-plan-adjustments" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                Learn More About Layouts
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}