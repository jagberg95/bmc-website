// app/services/home-repairs/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeRepairsPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section for Home Repairs */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16 px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/repairs-hero.jpg" // Placeholder image for home repairs
            alt="Bar Moon Contracting Home Repair Services"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Home Repairs
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Reliable Solutions for Your Home's Needs
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Not every project requires a full renovation — but every repair still deserves to be done correctly. We provide professional home repair services that focus on fixing problems at the source, not just covering them up.
          </p>
        </div>
      </section>

      {/* Home Repairs Details Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Expert Home Repair Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* General Repair Philosophy */}
            <div className="md:col-span-2 bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Serving With Skill and Responsibility</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Not every project requires a full renovation — but every repair still deserves to be done correctly. We provide professional home repair services that focus on fixing problems at the source, not just covering them up. From wear and tear to storm damage and aging materials, we approach repairs with the same standards we bring to larger construction projects: clear communication, proper methods, and work built to last. Homeowners trust us when they want repairs handled efficiently, responsibly, and without shortcuts.
              </p>
            </div>

            {/* Specific Repair Types */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Small Electrical Repair</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Small Plumbing Repair</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Drywall Repair and Patching</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Interior and Exterior Trim Repair</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Door and Window Adjustments or Replacement</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Flooring Repairs and Replacements</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Fence and Gate Repairs</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Siding and Exterior Surface Repairs</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Minor Framing and Structural Repairs</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Rot, Water Damage, and Storm-Related Repairs</h3>
            </div>
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gold-primary">Hardware, Fixtures, and Finish Repairs</h3>
            </div>

          </div>
        </div>
        {/* CTA Button for Home Repairs */}
        <div className="mt-16 text-center">
          <Link href="/contact" legacyBehavior>
            <a className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
              Request a Repair Service
            </a>
          </Link>
        </div>
      </section>

      {/* Placeholder for footer etc. */}
    </main>
  );
}
