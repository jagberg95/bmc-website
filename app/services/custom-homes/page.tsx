// app/services/custom-homes/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CustomHomesPage() {
  return (
    <div className="min-h-screen bg-dark-blue text-light-neutral">
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden bg-deep-blue">
        <div className="absolute inset-0">
          <Image src="/images/services/custom-homes-hero.jpg" alt="Custom Homes Hero" layout="fill" objectFit="cover" quality={90} priority className="opacity-50"/>
        </div>
        <div className="relative z-10 p-6 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gold-primary">Custom Homes</h1>
          <p className="mt-4 text-lg md:text-xl">Design and build your dream home in Central Texas with Bar Moon Contracting. Expert craftsmanship, lasting quality.</p>
        </div>
      </section>
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto prose prose-lg text-white/90">
          <p>Placeholder content for Custom Homes details. Final content to be provided.</p>
        </div>
      </section>
      <section className="py-8 px-8 text-center">
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg">Start Your Project</a>
        </Link>
      </section>
    </div>
  );
}
