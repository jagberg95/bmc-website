// app/services/outdoor-living/landscape-design/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandscapeDesignPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden py-12 px-8 bg-deep-blue">
        <div className="absolute inset-0">
          <Image src="/images/services/outdoor-living-hero.jpg" alt="Landscape Design" layout="fill" objectFit="cover" quality={90} priority className="opacity-50"/>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary">Landscape Design</h1>
          <p className="text-lg lg:text-xl leading-relaxed">Clear, practical designs that account for grading, drainage, plant placement, and how the landscape connects to your home. Built around your space, goals, and Central Texas conditions.</p>
        </div>
      </section>
      <section className="py-16 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert text-white/90">
          <p>Our landscaping design services eliminate uncertainty and focus on long-term performance and beauty.</p>
          <p>CT life-ready planning to ensure the landscape survives the Texas heat and time.</p>
        </div>
      </section>
      <section className="py-8 px-8 text-center">
        <Link href="/services/outdoor-living" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
              Back to Outdoor Living
            </Link>
      </section>
    </main>
  );
}
