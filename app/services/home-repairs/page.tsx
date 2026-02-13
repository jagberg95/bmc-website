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
            src="/images/services/repairs-hero.jpg"
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
            Home Repairs Done Right
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            The First Time
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-medium italic">
            Because a small fix today prevents a big headache tomorrow.
          </p>
        </div>
      </section>

      {/* Home Repairs Details Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">

          {/* Intro philosophy */}
          <div className="mb-16">
            <p className="text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Not every issue needs a full renovation, but every repair deserves to be done correctly. At Bar Moon Contracting, we fix problems at the source&mdash;not just patch them over&mdash;using the same standards we bring to custom builds: clear communication, proper methods, and work built to last.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              From normal wear and tear to storm damage and aging materials, homeowners trust us for efficient, responsible repairs without shortcuts.
            </p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Our Home Repair Services Include</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Small Electrical Repairs</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Small Plumbing Repairs</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Drywall Repair and Patching</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Interior and Exterior Trim Repair</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Door and Window Adjustments or Replacement</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Flooring Repairs and Replacements</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Fence and Gate Repairs</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Siding and Exterior Surface Repairs</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Minor Framing and Structural Repairs</h3>
            </div>
            <div className="bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Rot, Water Damage, and Storm-Related Repairs</h3>
            </div>
            <div className="md:col-span-2 bg-dark-blue p-8 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gold-primary">Hardware, Fixtures, and Finish Repairs</h3>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to get that repair handled the right way? Give us a call&mdash;we&apos;ll assess, provide a clear plan and fair quote, and take care of it so you can enjoy your home again.
            </p>
          </div>
        </div>
        {/* CTA Button for Home Repairs */}
        <div className="mt-8 text-center">
          <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
            Request a Repair Service
          </Link>
        </div>
      </section>
    </main>
  );
}