

'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from './components/Container';
import HeroVideo from './components/HeroVideo';
import ScrollVideo from './components/ScrollVideo';
import React from 'react';
import { timelineSteps } from './components/timelineSteps';
import TimelineStep from './components/TimelineStep';
// ...existing code...

export default function HomePage() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const items = document.querySelectorAll('.timeline-step');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Number((e.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      });
    }, { rootMargin: '-30% 0px -30% 0px', threshold: 0.1 });
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased overflow-hidden">
      {/* ═══ 1. Hero Video ═══════════════════════════════════════ */}
      <HeroVideo />

      {/* Content Overlay */}
      <Container className="relative z-10 py-16 flex flex-col items-center justify-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
          Welcome to Bar Moon Contracting
        </h1>
        <h2 className="text-3xl lg:text-5xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
          Texas Craftsmanship Meets Lasting Integrity
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base">
          From quick fixes to full renovations and custom builds, we bring Texas craftsmanship to every project.{' '}
          <span className="hidden lg:inline">Hover over a service to learn more.</span>
          <span className="lg:hidden">Tap a service to learn more.</span>
        </p>
      </Container>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base">
            From quick fixes to full renovations and custom builds, we bring Texas craftsmanship to every project.{' '}
            <span className="hidden lg:inline">Hover over a service to learn more.</span>
            <span className="lg:hidden">Tap a service to learn more.</span>
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] sm:auto-rows-[280px] gap-5">
            {/* Upgrades & Renovations — large tile */}
            <Link
              href="/services/home-renovations"
              className="halo-hover group relative rounded-xl overflow-hidden sm:col-span-2 lg:col-span-2 sm:row-span-2 lg:row-span-2"
            >
              <Image
                src="/images/christian-mackie-kitchen2-unsplash.jpg"
                alt="Upgrades & Renovations"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  Transform Your Space, Elevate Your Life
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Upgrades &amp; Renovations
                </h3>
                <ul className="text-gray-300 text-sm space-y-1 mb-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Kitchens</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Bathrooms</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Flooring</li>
                </ul>
                <span className="mt-2 inline-block self-start bg-accent/90 text-primary font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg">
                  Learn More &rarr;
                </span>
              </div>
            </Link>

            {/* Home Repairs — standard tile */}
            <Link
              href="/services/home-repairs"
              className="halo-hover group relative rounded-xl overflow-hidden col-span-1 row-span-1"
            >
              <Image
                src="/images/sasun-bughdaryan-handyman-unsplash.jpg"
                alt="Home Repairs"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  Done Right, the First Time
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Home Repairs
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  Honest, high-quality repairs for electrical, plumbing, drywall, storm damage and more.
                </p>
                <span className="mt-3 inline-block self-start bg-accent/90 text-primary font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg">
                  Learn More &rarr;
                </span>
              </div>
            </Link>

            {/* Outdoor Living — standard tile */}
            <Link
              href="/services/outdoor-living"
              className="halo-hover group relative rounded-xl overflow-hidden col-span-1 row-span-1"
            >
              <Image
                src="/images/point3d-commercial-imaging-ltd-patio-unsplash.jpg"
                alt="Outdoor Living"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  Your Backyard, Built Right
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Outdoor Living
                </h3>
                <ul className="text-gray-300 text-sm space-y-1 mb-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Decks</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Patios</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Landscaping</li>
                </ul>
                <span className="mt-2 inline-block self-start bg-accent/90 text-primary font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg">
                  Learn More &rarr;
                </span>
              </div>
            </Link>

            {/* Custom Homes — wide tile */}
            <Link
              href="/services/custom-homes"
              className="halo-hover group relative rounded-xl overflow-hidden sm:col-span-2 lg:col-span-2"
            >
              <Image
                src="/images/herve-customhome-unsplash.jpg"
                alt="Custom Homes"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  Your Dream, Built from the Ground Up
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Custom Homes
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  Design and build your dream home in Central Texas with five generations of craftsmanship, premium materials, and transparent budgeting.
                </p>
                <span className="mt-3 inline-block self-start bg-accent/90 text-primary font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══ 3. Our Heart — Deep Blue bridge ════════════════════ */}
      <section id="our-heart-our-passion" className="relative py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">Our Heart &ndash; Our Passion</h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-200">
              We believe that doing honest work with care and intention still matters&mdash;and always will. Learn more about the values that drive Bar Moon Contracting.
            </p>
            <Link href="/our-heart-our-passion" className="inline-block bg-gold-secondary hover:bg-gold-primary text-dark-blue font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
              Learn More
            </Link>
          </div>
          {/* Scroll-scrub video (portrait / reel format) */}
          <div className="flex-shrink-0 w-full max-w-[320px] md:max-w-[360px]">
            <ScrollVideo src="/videos/grok-blueprint-to-kitchen-scrub.mp4" />
          </div>
        </div>
      </section>

      {/* ═══ 4. Our Process — Dark Blue (primary) ═══════════════ */}
      <section id="our-process" className="py-24 px-4 md:px-8 bg-dark-blue">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">Our Process</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">From first conversation to final walkthrough&mdash;here&apos;s how we handle every project, big or small.</p>
          </div>

          <div className="space-y-10">
            {timelineSteps.map((step, i) => (
              <TimelineStep
                        <Container className="relative z-10">
                          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
                            Custom Homes, Renovations, Repairs
                          </h1>
                          <h2 className="text-2xl lg:text-3xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
                            Central Texas craftsmanship, built on integrity. Your vision, our passion.
                          </h2>
                        </Container>
                      </section>

                      {/* Services Section */}
                      <section className="py-20 bg-dark-blue">
                        <Container className="max-w-6xl">
                          <h2 className="text-3xl font-bold text-gold-primary mb-8">Our Services</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Service cards here */}
                          </div>
                        </Container>
                      </section>
        </div>
      </section>
    </main>
  );
}
