// app/services/outdoor-living/landscape-design/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandscapeDesignPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden pt-20 pb-12 px-8 bg-deep-blue">
        <div className="absolute inset-0">
          <Image src="/images/services/outdoor-living-hero.jpg" alt="Landscape Design" layout="fill" objectFit="cover" quality={90} priority className="opacity-50"/>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-gold-primary">Landscape Design</h1>
          <p className="text-lg font-semibold text-gold-secondary mb-4">Great Outdoor Spaces Start with a Solid Plan</p>
          <p className="text-lg lg:text-xl leading-relaxed">Clear, practical designs that account for grading, drainage, plant placement, hardscape integration, and how everything connects to your home and lifestyle. Built around your space, goals, and Central Texas conditions.</p>
        </div>
      </section>
      <section className="py-16 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert text-white/90 space-y-6">
          <p>
            Most landscaping problems start with a bad plan&mdash;or no plan at all. Homeowners are often left guessing: where things should go, what will actually survive the Texas heat, and how the landscape will function over time.
          </p>
          <p>
            Our landscaping and outdoor design services eliminate that uncertainty. We create clear, practical designs that account for grading, drainage, plant placement, hardscape integration, and how everything connects to your home and lifestyle. The goal isn&apos;t just to make it look good on day one&mdash;it&apos;s to ensure it works, grows, and holds up for years.
          </p>
          <p>
            We help clients avoid common mistakes like overcrowded plants that outgrow their space, poor water flow leading to pooling or erosion, high-maintenance layouts that demand constant upkeep, and designs that don&apos;t match the property&apos;s sun exposure, soil, or budget.
          </p>
          <p>
            Every plan is custom-built around your space, your goals, and real Central Texas conditions&mdash;drought-tolerant natives, smart irrigation where needed, proper slopes for drainage, and layouts that feel natural and inviting. You get detailed drawings, material recommendations, and a clear vision before a shovel hits the ground.
          </p>
          <p>
            If you want a landscape or outdoor area that makes sense, fits your property perfectly, and won&apos;t need to be redone later, design is where it starts&mdash;and we make sure it&apos;s done right.
          </p>
        </div>
      </section>
      <section className="py-8 px-8 text-center bg-dark-blue">
        <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105 mr-4">
          Get Started
        </Link>
        <Link href="/services/outdoor-living" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">
          Back to Outdoor Living
        </Link>
      </section>
    </main>
  );
}