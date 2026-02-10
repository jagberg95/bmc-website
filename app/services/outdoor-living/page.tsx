// app/services/outdoor-living/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OutdoorLivingPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section for Outdoor Living */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16 px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/outdoor-living-hero.jpg" // Placeholder for a relevant image
            alt="Bar Moon Contracting Outdoor Living Spaces"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Landscape & Patio Design
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Creating Stunning Outdoor Spaces for Central Texas Living
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Specializing in landscape and deck design, Bar Moon Contracting is dedicated to creating stunning outdoor spaces. With a focus on quality craftsmanship and attention to detail, we bring your vision to life. From concept to completion, our team ensures superior results that exceed expectations. Ask us how we can make your outdoor space your favorite space.
          </p>
        </div>
      </section>

      {/* Outdoor Living Specialties Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Your Outdoor Oasis Awaits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Specialty 1: Deck Services */}
            <div className="md:col-span-2 bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Deck Services</h3>
              <p className="text-lg mb-8 leading-relaxed">
                We can build your next deck for you, specializing in both Natural Wood and Composite materials to create your dream Deck.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                <strong className="text-gold-secondary">If your Deck needs Repair:</strong> We have the expertise to repair broken or damaged decks, transforming your outdoor space into a place to enjoy the great Texas weather.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Decks are an investment and deserve to be protected. In the harsh Texas weather, it's important to stay on top of the finish. To prevent expensive repairs and maintenance, they should be refinished every 3-5 years. Whether they need a new coat of paint, or a full sand down and re-stain, we can protect your deck and keep it looking beautiful for years to come.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                No matter what your deck needs are, we stand with you to create your deck, and keep it looking beautiful and extend the life of your deck.
              </p>
              <Link href="/services/outdoor-living/decks-patios" legacyBehavior> {/* Placeholder for a dedicated page */}
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Design Your Dream Deck
                </a>
              </Link>
            </div>

            {/* Specialty 2: Installation and Repair Services (Landscaping) */}
            <div className="md:col-span-2 bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Installation and Repair Services: Building It Right</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Tired of fixing the same landscaping problems? Let's build it right. If your yard holds water after rain, plants keep dying, or hardscapes shift and crack over time, the problem usually isn't maintenance — it's how the landscape was built in the first place.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We help homeowners solve the issues that cause landscapes to fail. From poor drainage and uneven grading to storm damage and worn-out installations, we repair and rebuild outdoor spaces with construction-level planning and attention to detail. That means proper slope away from your home, stable bases under walkways and patios, and plant placement that actually works in Central Texas heat.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Many of our projects start where others left off — correcting rushed installs, fixing water problems, and restoring landscapes that never performed the way they should have. We don't guess, and we don't apply quick cosmetic fixes. We identify the problem, build the solution correctly, and deliver results that last. If you want a landscape that drains properly, holds up over time, and looks better year after year, we're here to help.
              </p>
              <Link href="/services/outdoor-living/landscaping" legacyBehavior> {/* Placeholder for a dedicated page */}
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Explore Landscape Solutions
                </a>
              </Link>
            </div>

            {/* Specialty 3: Custom Landscaping Design Services */}
             <div className="md:col-span-2 bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Landscape Design Services</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Most landscaping problems start with a bad plan — or no plan at all. Homeowners are often left guessing: where things should go, what will actually survive the Texas heat, and how the landscape will function over time.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Our landscaping design services eliminate that uncertainty. We create clear, practical designs that account for grading, drainage, plant placement, and how the landscape connects to your home. The goal isn't just to make it look good on day one — it's to ensure it works, grows, and holds up for years.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We help clients avoid common mistakes like overcrowded plants, poor water flow, high-maintenance layouts, and designs that don't match the property or budget. Every plan is built around your space, your goals, and Central Texas conditions, so you know exactly what you're getting before work begins.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                If you want a landscape that makes sense, fits your property, and won't need to be redone later, design is where it starts — and we make sure it's done right.
              </p>
              <Link href="/services/outdoor-living/landscaping" legacyBehavior> {/* Placeholder for a dedicated page */}
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Explore Landscape Design
                </a>
              </Link>
            </div>

          </div>
        </div>
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link href="/contact" legacyBehavior>
            <a className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
              Ask Us About Your Outdoor Project
            </a>
          </Link>
        </div>
      </section>

      {/* Placeholder for footer etc. */}
    </main>
  );
}
