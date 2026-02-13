// app/services/home-renovations/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeRenovationsPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* -- Hero -------------------------------------------- */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-deep-blue to-primary" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("/images/Layered Circle/BMC_Layered_Circle_Dist_01.png")', backgroundSize: '420px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            Upgrades &amp; Renovations
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Refresh, Reimagine,<br />
            <span className="text-gold-primary">Renovate</span>
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            From kitchen remodels to full-house transformations, we turn your vision into a home you&apos;ll love for years to come.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* -- Intro prose ------------------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
            With a skilled team and generations of Central Texas know-how, we bring top-notch craftsmanship and genuine attention to detail to every renovation project.
          </p>
          <p className="text-lg text-gold-secondary font-medium italic">
            Clear planning, quality materials, and workmanship built to last.
          </p>
        </div>
      </section>

      {/* -- Specialties ------------------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Renovation Specialties
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From smart kitchen and bathroom designs to updated flooring, layout changes, or a complete fresh start&mdash;we handle it all.
            </p>
          </div>

          {/* Kitchens & Bathrooms — full width feature */}
          <div className="bg-dark-blue/60 border border-gold-primary/15 rounded-xl p-10 mb-8 hover:border-gold-primary/40 transition-all duration-300">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                <span className="text-gold-primary text-lg">&#9670;</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold-primary mb-1">Kitchens &amp; Bathrooms</h3>
                <p className="text-gold-secondary text-sm font-medium">The Heart of Every Home</p>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Kitchens and bathrooms are the heart of daily life&mdash;and often the most complex spaces to get right. Poor layouts, outdated finishes, or rushed remodels lead to frustration and expensive fixes later.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We specialize in remodels that improve function, flow, and durability. From smart layout adjustments and fixture placement to cabinetry, countertops, tile, and finishes, we manage every detail.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The result? Spaces that work better, look intentional, and add real long-term value to your home.
            </p>
            <span className="inline-block bg-gray-600/30 text-gray-400 font-semibold py-2.5 px-5 rounded-lg text-sm cursor-default">
              Detailed Page Coming Soon
            </span>
          </div>

          {/* Flooring + Layouts — 2 column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-blue/60 border border-gold-primary/15 rounded-xl p-8 hover:border-gold-primary/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-gold-primary text-sm">&#9670;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-primary mb-1">Flooring Installations</h3>
                  <p className="text-gold-secondary text-xs font-medium">The Foundation You Feel Every Day</p>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4 text-sm">
                Flooring sets the tone for your entire home. We install and replace flooring with careful attention to subfloor conditions, moisture issues, material acclimation, and long-term performance.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Hardwood, luxury vinyl plank, tile, laminate, or carpet&mdash;clean lines, proper leveling, seamless transitions, and a solid feel underfoot.
              </p>
              <span className="inline-block bg-gray-600/30 text-gray-400 font-semibold py-2.5 px-5 rounded-lg text-sm cursor-default">
                Detailed Page Coming Soon
              </span>
            </div>

            <div className="bg-dark-blue/60 border border-gold-primary/15 rounded-xl p-8 hover:border-gold-primary/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-gold-primary text-sm">&#9670;</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-primary mb-1">Room Adjustments &amp; Layouts</h3>
                  <p className="text-gold-secondary text-xs font-medium">Better Use of What You Already Have</p>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4 text-sm">
                Sometimes a home doesn&apos;t need more square footage&mdash;it needs better use of what&apos;s already there. Awkward layouts, underused rooms, or outdated flow can limit how your space lives.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                We open up areas, redefine room purposes, and make targeted layout changes that feel natural and balanced&mdash;every adjustment considers structure, flow, and long-term value.
              </p>
              <span className="inline-block bg-gray-600/30 text-gray-400 font-semibold py-2.5 px-5 rounded-lg text-sm cursor-default">
                Detailed Page Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* -- Pull quote -------------------------------------- */}
      <section className="py-16 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-accent pl-6 md:pl-10">
            <p className="text-2xl md:text-3xl font-light text-white leading-snug italic mb-4">
              &ldquo;A renovation isn&apos;t just about updating a space&mdash;it&apos;s about making your home work for the life you live now.&rdquo;
            </p>
            <cite className="text-accent/70 text-sm uppercase tracking-wider not-italic">
              Bar Moon Contracting
            </cite>
          </blockquote>
        </div>
      </section>

      {/* -- Why BMC for Renovations ------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Homeowners Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Clear Planning', text: 'Detailed scope and timeline before work begins\u2014no surprises, no guesswork.' },
              { title: 'Coordinated Trades', text: 'We manage every sub so you deal with one point of contact from start to finish.' },
              { title: 'Quality Materials', text: 'We source materials suited to Central Texas conditions that perform and last.' },
              { title: 'Minimal Disruption', text: 'We work efficiently and keep your home livable during the renovation.' },
              { title: 'Honest Communication', text: 'Weekly updates, realistic expectations, and no hidden costs along the way.' },
              { title: 'Built to Last', text: 'Every finish, fixture, and detail is installed to endure daily use for years.' },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-dark-blue/60 rounded-xl p-7 border border-white/5 hover:border-gold-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold-primary/20 transition">
                  <span className="text-gold-primary font-bold text-sm">&#10003;</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA --------------------------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform<br />
            <span className="text-gold-primary">Your Space?</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether it&apos;s a single room refresh or a whole-house renovation, we&apos;re ready to plan, build, and deliver a result you&apos;ll love.
          </p>
          <Link
            href="/contact?service=home-renovations"
            className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-xl hover:scale-105"
          >
            Let&apos;s Talk Renovations
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
