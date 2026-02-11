// app/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased overflow-hidden">
      {/* Hero Section - solid background (no video) */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-deep-blue">
        {/* Optional skeleton overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 p-6 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gold-primary">Welcome to Bar Moon Contracting</h1>
          <h2 className="text-2xl md:text-4xl mb-6 text-gold-secondary font-medium">Texas Craftsmanship Meets Lasting Integrity</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            We believe a custom home should reflect the people who live in it—strong, honest, beautifully built, and made to endure. We don&apos;t just build or repair homes; we build trust, offering a seamless, high-end experience grounded in local Central Texas expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out text-lg">
              Discuss Your Custom Home Vision
            </Link>
            <Link href="#services" className="bg-gold-secondary hover:bg-gold-primary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out text-lg border-2 border-gold-primary hover:border-gold-secondary">
              Explore Services
            </Link>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gold-primary">We believe that doing honest work with care and intention still matters — and always will.</p>
          </div>
        </div>
      </section>

      {/* Our Heart teaser */}
      <section id="our-heart-our-passion" className="relative py-16 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-primary mb-4">Our Heart Our Passion</h2>
          <p className="text-lg leading-relaxed mb-6">Building with purpose, responsibility, and care. Learn more about the values that drive Bar Moon Contracting.</p>
          <Link href="/our-heart-our-passion" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
            Learn More
          </Link>
        </div>
      </section>

      {/* About Us teaser */}
      <section id="about" className="relative py-16 px-8 bg-deep-blue text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gold-primary mb-4">About Bar Moon Contracting</h2>
          <p className="text-lg leading-relaxed mb-4">Rooted in Central Texas for generations, we deliver integrity, craftsmanship, and trusted partnership in every project.</p>
          <Link href="/about" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
            Learn More
          </Link>
        </div>
      </section>

      {/* Services quick anchor to full overview */}
      <section id="services" className="relative py-16 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-primary mb-6">Services Overview</h2>
          <p className="text-lg leading-relaxed mb-8">Overview of our service categories will appear here with links to dedicated pages.</p>
          <Link href="/services" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
            View All Services
          </Link>
        </div>
      </section>

      {/* Contact teaser */}
      <section id="contact" className="relative py-16 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold-primary mb-4">Let&apos;s Build Your Vision</h2>
          <p className="text-lg mb-6">Ready to discuss your project? Reach out and we&apos;ll start planning together.</p>
          <Link href="/contact" className="bg-gold-primary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
