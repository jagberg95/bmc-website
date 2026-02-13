'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Poster image as full hero background */}
      <Image
        src="/images/aubrey-odom-farmhouse-unsplash.jpg"
        alt="Central Texas home by Bar Moon Contracting"
        fill
        priority
        quality={90}
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Right-aligned overlay text */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end z-10 px-4 md:px-16">
        <div className="bg-primary/70 backdrop-blur-sm p-5 md:p-8 lg:p-12 rounded-lg max-w-lg text-center md:text-right shadow-2xl border border-white/10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-4 leading-tight">
            Welcome to Bar Moon Contracting
          </h1>
          <p className="text-sm md:text-base font-semibold text-accent/90 mb-3 tracking-wide uppercase">
            Texas Craftsmanship. Built to Last. Rooted in Integrity.
          </p>
          <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
            We don&apos;t cut corners or chase trends. We deliver premium, detail-driven work using top-quality materials, thoughtful design, and straightforward communication&mdash;so your project stays on time, on budget, and better than you imagined.
          </p>
          <div className="text-sm md:text-base text-gray-100 mb-6 leading-relaxed space-y-1">
            <p className="font-semibold">Texas strong.</p>
            <p className="font-semibold">Family honest.</p>
            <p className="font-semibold">Craftsmanship you can count on.</p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-gold text-primary font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}