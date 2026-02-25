
'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroVideo from './components/HeroVideo';
import HomePageServices from './components/HomePageServices';
import ScrollVideo from './components/ScrollVideo';
import React from 'react';
import { timelineSteps } from './components/timelineSteps';
import TimelineStep from './components/TimelineStep';

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
      {/* 1. Hero Video */}
      <HeroVideo />

      {/* 2. Our Services (copied from services page) */}
      <section className="pt-20 pb-16 lg:pb-72 px-4 md:px-8 bg-primary" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-accent mb-4 uppercase tracking-widest">
            Our Services
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base">
            From quick fixes to full renovations and custom builds, we bring Texas craftsmanship to every project.{' '}
            <span className="hidden lg:inline">Hover over a service to learn more.</span>
            <span className="lg:hidden">Tap a service to learn more.</span>
          </p>
          {/* ── Tile grid ─────────────────────────────────────────── */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {/* Upgrades & Renovations */}
              <div className="relative">
                <div className="relative h-full group cursor-pointer">
                  <div className="relative z-10 flex flex-col items-center text-center p-5 md:p-6 rounded-xl min-h-[180px] h-full justify-center border transition-all duration-300 ease-out bg-deep-blue/60 border-gold-primary/20 shadow-[0_0_12px_rgba(214,173,48,0.1)] group-hover:border-accent/50 group-hover:shadow-[0_0_18px_rgba(214,173,48,0.25)]">
                    <h3 className="font-bold text-base md:text-lg mb-2 transition-colors duration-200 text-white group-hover:text-accent">Upgrades & Renovations</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Modernize your living space with expert renovations, from kitchens to full floor plans.</p>
                  </div>
                </div>
              </div>
              {/* Home Repairs */}
              <div className="relative">
                <div className="relative h-full group cursor-pointer">
                  <div className="relative z-10 flex flex-col items-center text-center p-5 md:p-6 rounded-xl min-h-[180px] h-full justify-center border transition-all duration-300 ease-out bg-deep-blue/60 border-gold-primary/20 shadow-[0_0_12px_rgba(214,173,48,0.1)] group-hover:border-accent/50 group-hover:shadow-[0_0_18px_rgba(214,173,48,0.25)]">
                    <h3 className="font-bold text-base md:text-lg mb-2 transition-colors duration-200 text-white group-hover:text-accent">Home Repairs</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Honest, high-quality repairs for electrical, plumbing, drywall, and more.</p>
                  </div>
                </div>
              </div>
              {/* Outdoor Living */}
              <div className="relative">
                <div className="relative h-full group cursor-pointer">
                  <div className="relative z-10 flex flex-col items-center text-center p-5 md:p-6 rounded-xl min-h-[180px] h-full justify-center border transition-all duration-300 ease-out bg-deep-blue/60 border-gold-primary/20 shadow-[0_0_12px_rgba(214,173,48,0.1)] group-hover:border-accent/50 group-hover:shadow-[0_0_18px_rgba(214,173,48,0.25)]">
                    <h3 className="font-bold text-base md:text-lg mb-2 transition-colors duration-200 text-white group-hover:text-accent">Outdoor Living</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Decks, patios, and landscapes designed to create your perfect outdoor oasis.</p>
                  </div>
                </div>
              </div>
              {/* Custom Homes */}
              <div className="relative">
                <div className="relative h-full group cursor-pointer">
                  <div className="relative z-10 flex flex-col items-center text-center p-5 md:p-6 rounded-xl min-h-[180px] h-full justify-center border transition-all duration-300 ease-out bg-deep-blue/60 border-gold-primary/20 shadow-[0_0_12px_rgba(214,173,48,0.1)] group-hover:border-accent/50 group-hover:shadow-[0_0_18px_rgba(214,173,48,0.25)]">
                    <h3 className="font-bold text-base md:text-lg mb-2 transition-colors duration-200 text-white group-hover:text-accent">Custom Homes</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Design and build your dream home from the ground up with Central Texas integrity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Heart - Our Passion (with scroll-scrub video) */}
      <section id="our-heart-our-passion" className="relative py-20 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
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

      {/* 4. Our Process - 7-Step Zigzag Timeline */}
      <section id="our-process" className="py-20 px-4 md:px-8 bg-deep-blue">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">Our Process</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">From first conversation to final walkthrough&mdash;here&apos;s how we handle every project, big or small.</p>
          </div>

          <div className="space-y-10">
            {timelineSteps.map((step, i) => (
              <TimelineStep
                key={step.step}
                step={step.step}
                title={step.title}
                subtitle={step.subtitle}
                shortDesc={step.shortDesc}
                detail={step.detail}
                image={step.image}
                buttons={step.buttons}
                active={i === active}
                even={i % 2 === 1}
                data-index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Us Teaser */}
      <section id="about" className="relative py-20 px-4 md:px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">About Bar Moon Contracting</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-200">
            A Central Texas legacy, five generations strong. We blend old-school Texas grit with modern precision&mdash;clear plans, quality materials, coordinated teams, and workmanship that holds up to whatever life throws at it.
          </p>
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            Whether you&apos;re fixing, upgrading, or building from scratch&mdash;we&apos;re rooted here and ready to help.
          </p>
          <Link href="/about" className="inline-block bg-gold-secondary hover:bg-gold-primary text-dark-blue font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-deep-blue text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Whether you need a quick repair, a kitchen remodel, or something bigger&mdash;we&apos;re here. No pressure, just honest conversation.
          </p>
          <Link href="/contact" className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition-colors duration-300 text-xl">
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}