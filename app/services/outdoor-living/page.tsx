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
            src="/images/services/outdoor-living-hero.jpg"
            alt="Bar Moon Contracting Outdoor Living Spaces"
            fill
            quality={90}
            priority
            className="opacity-50 object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Decks, Patios &amp; Landscape Design
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Your Backyard, Built Right and Made to Enjoy
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            At Bar Moon Contracting, we turn outdoor spaces into the places you actually want to spend time&mdash;whether it&apos;s grilling with family, relaxing under the stars, or just stepping out for some fresh air. We specialize in thoughtful landscape design, decks, patios, and full outdoor builds, always with Central Texas in mind: our clay soils, intense heat, sudden storms, and that endless sun.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            From concept sketches to final cleanup, we handle it all with the same integrity and craftsmanship we bring to every home project. No guesswork, no quick fixes&mdash;we plan for drainage, durability, and beauty that holds up year after year.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            Let us help make your outdoor space your favorite room in the house. Ready to get started? Let&apos;s talk about what you&apos;re dreaming of.
          </p>
        </div>
      </section>

      {/* Outdoor Living Specialties Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Your Outdoor Oasis Awaits</h2>

          <div className="grid grid-cols-1 gap-12">

            {/* Design Services */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2 text-gold-primary">Design Services</h3>
              <p className="text-lg font-semibold text-gold-secondary mb-6">Great Outdoor Spaces Start with a Solid Plan</p>
              <p className="text-lg mb-4 leading-relaxed">
                Most landscaping problems start with a bad plan&mdash;or no plan at all. Homeowners are often left guessing: where things should go, what will actually survive the Texas heat, and how the landscape will function over time.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Our landscaping and outdoor design services eliminate that uncertainty. We create clear, practical designs that account for grading, drainage, plant placement, hardscape integration, and how everything connects to your home and lifestyle. The goal isn&apos;t just to make it look good on day one&mdash;it&apos;s to ensure it works, grows, and holds up for years.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                We help clients avoid common mistakes like overcrowded plants that outgrow their space, poor water flow leading to pooling or erosion, high-maintenance layouts that demand constant upkeep, and designs that don&apos;t match the property&apos;s sun exposure, soil, or budget.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Every plan is custom-built around your space, your goals, and real Central Texas conditions&mdash;drought-tolerant natives, smart irrigation where needed, proper slopes for drainage, and layouts that feel natural and inviting. You get detailed drawings, material recommendations, and a clear vision before a shovel hits the ground.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                If you want a landscape or outdoor area that makes sense, fits your property perfectly, and won&apos;t need to be redone later, design is where it starts&mdash;and we make sure it&apos;s done right.
              </p>
              <Link href="/services/outdoor-living/landscape-design" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                Explore Landscape Design
              </Link>
            </div>

            {/* Landscape Services */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2 text-gold-primary">Landscape Services</h3>
              <p className="text-lg font-semibold text-gold-secondary mb-6">Tired of Fixing the Same Yard Problems? Let&apos;s Build It Right the First Time.</p>
              <p className="text-lg mb-4 leading-relaxed">
                If your yard turns into a swamp after every rain, plants keep struggling or dying, hardscapes crack and shift, or everything just looks worn out too soon&mdash;the issue usually isn&apos;t more maintenance. It&apos;s how the landscape was built (or not built) from the start.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Central Texas yards face real challenges: heavy clay soil that holds water and compacts roots, poor natural drainage leading to puddles and erosion, extreme heat and drought stressing plants, and sudden downpours that overwhelm bad grading. We see it all the time&mdash;rushed installs that ignore slope, improper bases under patios/walkways, or plant choices that can&apos;t handle our summers.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                That&apos;s where we come in. We don&apos;t slap on cosmetic changes or quick patches. We dig in to fix the root causes:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4 mb-4">
                <li>Proper grading and drainage to direct water away from your home and foundation</li>
                <li>Stable, well-prepped bases for patios, walkways, and retaining walls that won&apos;t shift or crack</li>
                <li>Soil amendments and smart plant placement suited to Central Texas conditions&mdash;drought-tolerant natives, heat-resistant varieties, and layouts that thrive long-term</li>
                <li>Repairs and rebuilds for storm damage, worn features, or landscapes that never performed right</li>
              </ul>
              <p className="text-lg mb-8 leading-relaxed">
                Many of our projects start by correcting what others overlooked&mdash;fixing pooling water, uneven settling, dying beds, or failing hardscapes. We approach every yard with construction-level planning: clear assessments, honest recommendations, and builds that drain properly, stay stable, and look better with age.
              </p>
              <Link href="/services/outdoor-living/landscaping" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                Explore Landscape Solutions
              </Link>
            </div>

            {/* Deck Services */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2 text-gold-primary">Deck Services</h3>
              <p className="text-lg font-semibold text-gold-secondary mb-6">Build It, Repair It, Protect It&mdash;Decks Made for Texas Weather</p>
              <p className="text-lg mb-4 leading-relaxed">
                Texas evenings are made for decks: good food on the grill, cold drinks, wide skies, and time with the people who matter. Whether you&apos;re dreaming of a new deck for hosting, a cozy spot to unwind, or fixing up an existing one that&apos;s seen better days, we&apos;ve got you covered.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                We specialize in both <strong className="text-gold-secondary">natural wood</strong> (like cedar or treated pine for that classic, warm look) and <strong className="text-gold-secondary">composite</strong> materials (low-maintenance, fade-resistant, and tough against humidity, sun, and storms&mdash;often the smart choice for our climate). We guide you on what fits your lifestyle, budget, and exposure.
              </p>

              <h4 className="text-2xl font-bold mb-4 text-gold-primary">New Deck Builds</h4>
              <p className="text-lg mb-6 leading-relaxed">
                From simple platforms to multi-level designs with built-in seating, railings, lighting, or integrated planters&mdash;we design and build decks that feel like an extension of your home. We focus on solid framing, proper footings (accounting for our expansive soils), code-compliant details, and finishes that enhance your space.
              </p>

              <h4 className="text-2xl font-bold mb-4 text-gold-primary">Deck Repairs</h4>
              <p className="text-lg mb-6 leading-relaxed">
                Damaged boards, loose railings, rotting spots, or storm wear? We assess the issue, repair what can be saved, and replace what needs it&mdash;getting your outdoor space safe and enjoyable again without unnecessary overhauls.
              </p>

              <h4 className="text-2xl font-bold mb-4 text-gold-primary">Deck Refinishing &amp; Protection</h4>
              <p className="text-lg mb-4 leading-relaxed">
                In our intense Texas sun, heat, and occasional heavy rains, decks take a beating. To prevent cracking, fading, warping, or rot&mdash;and avoid expensive full replacements&mdash;regular protection is key.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                We refinish and protect with high-quality stains, seals, or paints:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4 mb-4">
                <li>Full sand-down and re-stain for natural wood to restore color and guard against UV/moisture</li>
                <li>Cleaning, brightening, and fresh sealing for composite to maintain its look and performance</li>
              </ul>
              <p className="text-lg mb-8 leading-relaxed">
                Most wood decks benefit from refinishing every 2&ndash;3 years (or 3&ndash;5 depending on exposure&mdash;full sun speeds it up). We help you stay ahead so your deck stays beautiful and lasts longer.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                No matter if it&apos;s a brand-new build, a repair, or ongoing care, we stand with you to create (and maintain) a deck that stands up to Texas weather and gives you years of great memories.
              </p>
              <Link href="/services/outdoor-living/decks-patios" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                Design Your Dream Deck
              </Link>
            </div>

          </div>
        </div>
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
            Ask Us About Your Outdoor Project
          </Link>
        </div>
      </section>
    </main>
  );
}