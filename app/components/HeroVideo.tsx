'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroVideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Poster image as full hero background, flipped horizontally */}
      <Image
        src="/images/aubrey-odom-farmhouse-unsplash.jpg"
        alt="Central Texas home by Bar Moon Contracting"
        fill
        priority
        quality={90}
        className="object-cover scale-x-[-1]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Left-aligned overlay text */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start z-10 px-4 sm:px-8 md:px-16">
        <div className="bg-primary/70 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg max-w-lg text-left shadow-2xl border border-white/10">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-3 md:mb-4 leading-tight">
            Welcome to Bar Moon Contracting
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-accent/90 mb-2 md:mb-3 tracking-wide uppercase">
            Texas Craftsmanship. Built to Last. Rooted in Integrity.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 md:mb-6 leading-relaxed">
            From quick repairs and home upgrades to full renovations and custom builds&mdash;we deliver honest, quality work using top-notch materials, thoughtful planning, and straightforward communication. Your project stays on time, on budget, and better than you imagined.
          </p>
          <div className="text-xs sm:text-sm md:text-base text-gray-100 mb-4 md:mb-6 leading-relaxed space-y-1">
            <p className="font-semibold">Texas strong.</p>
            <p className="font-semibold">Family honest.</p>
            <p className="font-semibold">Craftsmanship you can count on.</p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-gold text-primary font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-colors duration-300 text-base sm:text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}