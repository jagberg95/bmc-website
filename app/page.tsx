
'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroVideo from './components/HeroVideo';
import HomePageServices from './components/HomePageServices';
import React from 'react';
import { timelineSteps } from './components/timelineSteps'; // Ensure this path is correct
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
    }, { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 });
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Build the 8-step timeline nodes with active state
  const TimelineNodes = timelineSteps.map((step, i) => (
    <TimelineStep
      key={step.step}
      step={step.step}
      title={step.title}
      shortDesc={step.shortDesc}
      detail={step.detail}
      onCTA={() => (window.location.href = `/services/${step.slug ?? 'placeholder'}`)}
      active={i === active}
      data-index={i}
    />
  ));

  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased overflow-hidden">
      <HeroVideo />

      <section id="our-heart-our-passion" className="relative py-16 px-8 bg-dark-blue text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gold-primary mb-4">Our Heart Our Passion</h2>
          <p className="text-lg leading-relaxed mb-6">
            Building with purpose, responsibility, and care. Learn more about the values that drive Bar Moon Contracting.
          </p>
          <Link href="/our-heart-our-passion" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">Our Process</h2>
            <p className="text-lg text-gray-200">Placeholder timeline with 8 steps. Details will be filled in as data comes in.</p>
          </div>

          <div className="space-y-8">
            {TimelineNodes}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-8 bg-dark-blue text-center">
        <HomePageServices />
      </section>

      <section id="contact" className="py-16 px-8 bg-deep-blue text-center">
        <Link href="/contact" className="inline-block bg-gold-primary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
          Let's Talk
        </Link>
      </section>
    </main>
  );
}
