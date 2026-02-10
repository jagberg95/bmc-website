// app/services/custom-homes/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CustomHomesPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section for Custom Homes */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16 px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/custom-homes-hero.jpg" // Placeholder image for custom homes
            alt="Bar Moon Contracting Custom Homes"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Custom Homes
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Building Your Dream Home in Central Texas
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Bringing your unique vision to life. From concept to completion, we design and build custom homes in Central Texas that reflect your lifestyle, honor our Texas heritage, and stand the test of time. Experience the peace of mind that comes with unparalleled craftsmanship and dedicated service.
          </p>
        </div>
      </section>

      {/* Custom Homes Details Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Crafting Your Legacy Home</h2>
          <p className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            We understand that building a custom home is one of the most significant investments a family can make. It's a deeply personal journey, and our role is to bring your vision to life with integrity, precision, and a touch of Texas soul.
          </p>

          {/* Placeholder for detailed specialties within custom homes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            
            {/* Specialty 1: Design & Planning */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Design & Planning</h3>
              <p className="text-lg mb-8 leading-relaxed">
                From initial concept sketches to detailed architectural plans, we work collaboratively with you and our design partners to create a home that perfectly matches your lifestyle, needs, and aesthetic preferences. We focus on practical layouts, enduring styles, and maximizing your lot's potential.
              </p>
              <Link href="/contact" legacyBehavior> {/* Link to contact for design consultation */}
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Start Your Design
                </a>
              </Link>
            </div>

            {/* Specialty 2: Material Selection & Sourcing */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Material Selection & Sourcing</h3>
              <p className="text-lg mb-8 leading-relaxed">
                We guide you through selecting the finest materials, from foundational elements to exquisite finishes. Our focus is on sourcing durable, sustainable, and beautiful materials that align with your vision and the unique Central Texas climate, ensuring longevity and aesthetic appeal.
              </p>
              <Link href="/contact" legacyBehavior> {/* Link to contact for material consultation */}
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Explore Materials
                </a>
              </Link>
            </div>

            {/* Specialty 3: Construction & Craftsmanship */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Construction & Craftsmanship</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Our team brings generations of building experience and commercial discipline to every custom home project. We pride ourselves on meticulous techniques, flawless execution, and upholding the highest standards of craftsmanship, ensuring your home is built to last and reflects true Texas quality.
              </p>
              <Link href="/contact" legacyBehavior> {/* Link to contact for construction details */}
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  View Our Workmanship
                </a>
              </Link>
            </div>
            
          </div>
        </div>
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link href="/contact" legacyBehavior>
            <a className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
              Start Your Custom Home Project
            </a>
          </Link>
        </div>
      </section>

      {/* Placeholder for footer etc. */}
    </main>
  );
}
