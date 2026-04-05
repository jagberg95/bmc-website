// app/services/outdoor-living/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OutdoorLivingPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* -- Hero -------------------------------------------- */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-deep-blue to-primary" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("/images/Layered Circle/BMC_Layered_Circle_Dist_01.png")', backgroundSize: '420px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            Outdoor Living
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Decks, Patios &amp;<br />
            <span className="text-gold-primary">Landscape Design</span>
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-4">
            Your backyard, built right and made to enjoy&mdash;with Central Texas in mind.
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto italic">
            We turn outdoor spaces into the places you actually want to spend time.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* -- Intro prose ------------------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            Whether it&apos;s grilling with family, relaxing under the stars, or just stepping out for some fresh air&mdash;we build outdoor spaces that make every moment better.
          </p>
          <p className="text-lg text-deep-blue font-medium italic">
            From concept sketches to final cleanup, no guesswork, no quick fixes.
          </p>
        </div>
      </section>

      {/* -- Design Services --------------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Outdoor Oasis Awaits
            </h2>
          </div>

          {/* Design Services — full width feature */}
          <div className="bg-dark-blue/60 border border-gold-primary/15 rounded-xl p-10 mb-8 hover:border-gold-primary/40 transition-all duration-300">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                <span className="text-gold-primary text-lg">&#9670;</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold-primary mb-1">Design Services</h3>
                <p className="text-gold-secondary text-sm font-medium">Great Outdoor Spaces Start with a Solid Plan</p>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Most landscaping problems start with a bad plan&mdash;or no plan at all. Our landscaping and outdoor design services eliminate that uncertainty. We create clear, practical designs that account for grading, drainage, plant placement, hardscape integration, and how everything connects to your home and lifestyle.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We help clients avoid common mistakes: overcrowded plants, poor water flow, high-maintenance layouts, and designs that don&apos;t match the property&apos;s sun exposure, soil, or budget.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every plan is custom-built around your space, your goals, and real Central Texas conditions&mdash;drought-tolerant natives, smart irrigation, proper slopes, and layouts that feel natural and inviting. Detailed drawings, material recommendations, and a clear vision before a shovel hits the ground.
            </p>
            <Link href="/services/outdoor-living/landscape-design" className="inline-block bg-gold-secondary hover:bg-gold-primary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Explore Landscape Design
            </Link>
          </div>

          {/* Landscape + Deck — 2 column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Landscape Services */}
            <div className="bg-dark-blue/60 border border-gold-primary/15 rounded-xl p-8 hover:border-gold-primary/40 transition-all duration-300 flex flex-col">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-gold-primary text-sm">&#9670;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-primary mb-1">Landscape Services</h3>
                  <p className="text-gold-secondary text-xs font-medium">Build It Right the First Time</p>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4 text-sm">
                Central Texas yards face real challenges: heavy clay soil, poor natural drainage, extreme heat, and sudden downpours. We don&apos;t slap on cosmetic patches&mdash;we fix root causes.
              </p>
              <ul className="text-gray-300 text-sm leading-relaxed space-y-2 mb-6 list-none">
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>Proper grading and drainage away from your foundation</li>
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>Stable bases for patios, walkways, and retaining walls</li>
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>Drought-tolerant natives and heat-resistant varieties</li>
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>Storm damage repairs and landscape rebuilds</li>
              </ul>
              <div className="mt-auto">
                <span className="inline-block bg-gray-600/30 text-gray-400 font-semibold py-2.5 px-5 rounded-lg text-sm cursor-default">
                  Detailed Page Coming Soon
                </span>
              </div>
            </div>

            {/* Deck Services */}
            <div className="bg-dark-blue/60 border border-gold-primary/15 rounded-xl p-8 hover:border-gold-primary/40 transition-all duration-300 flex flex-col">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-gold-primary text-sm">&#9670;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-primary mb-1">Deck Services</h3>
                  <p className="text-gold-secondary text-xs font-medium">Build It, Repair It, Protect It</p>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4 text-sm">
                Texas evenings are made for decks. We specialize in both natural wood and composite materials&mdash;guiding you on what fits your lifestyle, budget, and exposure.
              </p>
              <ul className="text-gray-300 text-sm leading-relaxed space-y-2 mb-6 list-none">
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>New builds: simple platforms to multi-level designs</li>
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>Repairs: damaged boards, loose railings, storm wear</li>
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>Refinishing: stain, seal, and UV protection</li>
                <li className="flex items-start gap-2"><span className="text-gold-primary mt-1">&#8226;</span>Code-compliant footings for expansive soils</li>
              </ul>
              <div className="mt-auto">
                <span className="inline-block bg-gray-600/30 text-gray-400 font-semibold py-2.5 px-5 rounded-lg text-sm cursor-default">
                  Detailed Page Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Texas-specific expertise ------------------------ */}
      <section className="py-24 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Built for Texas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We Build for the Climate, Not Against It
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Clay Soil Expertise', text: 'We understand expansive soils and build foundations and hardscapes that stay stable.' },
              { title: 'Drainage Planning', text: 'Every project accounts for water flow\u2014protecting your home, foundation, and landscape.' },
              { title: 'Heat-Hardy Materials', text: 'UV-resistant finishes, drought-tolerant plants, and composites built for triple-digit summers.' },
              { title: 'Storm-Ready Builds', text: 'Proper anchoring, elevated structures, and materials that handle sudden Central Texas weather.' },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-deep-blue rounded-xl p-6 border border-white/5 hover:border-gold-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold-primary/20 transition">
                  <span className="text-gold-primary font-bold text-sm">&#10003;</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Pull quote -------------------------------------- */}
      <section className="py-16 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-accent pl-6 md:pl-10">
            <p className="text-2xl md:text-3xl font-light text-white leading-snug italic mb-4">
              &ldquo;Let us help make your outdoor space your favorite room in the house.&rdquo;
            </p>
            <cite className="text-accent/70 text-sm uppercase tracking-wider not-italic">
              Bar Moon Contracting
            </cite>
          </blockquote>
        </div>
      </section>

      {/* -- CTA --------------------------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Enjoy<br />
            <span className="text-primary">Your Backyard?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether it&apos;s a new deck, a landscape overhaul, or a full outdoor living area&mdash;let&apos;s talk about what you&apos;re dreaming of.
          </p>
          <Link
            href="/contact?service=outdoor-living"
            className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-xl hover:scale-105"
          >
            Ask Us About Your Outdoor Project
          </Link>
        </div>
      </section>

      {/* -- Sign-off logo ----------------------------------- */}
      <section className="py-12 bg-deep-blue">
        <div className="flex justify-center">
          <div className="relative w-24 h-24 opacity-30">
            <Image
              src="/images/Layered Circle/BMC_Layered_Circle_Dist_01.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
