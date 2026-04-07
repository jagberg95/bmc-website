// app/subcontractors/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const TRADES = [
  { title: 'Electrical', desc: 'Licensed electricians for residential and light commercial rough-in, panel work, and finish wiring.' },
  { title: 'Plumbing', desc: 'Licensed plumbers for new construction, remodel rough-in, fixture installation, and water/sewer lines.' },
  { title: 'Framing', desc: 'Experienced framers for custom homes, additions, and structural modifications. Precision and speed matter.' },
  { title: 'HVAC', desc: 'Licensed HVAC technicians for system design, installation, ductwork, and post-construction commissioning.' },
  { title: 'Concrete & Foundation', desc: 'Flatwork, pier and beam, slab-on-grade, driveways, and retaining walls — engineered for Texas clay.' },
  { title: 'Roofing', desc: 'Shingle, metal, and tile roofing crews for new builds and tear-off/replacements.' },
  { title: 'Drywall & Finishing', desc: 'Hang, tape, mud, and texture crews. Level 4 and 5 finishes. Patch and repair specialists welcome.' },
  { title: 'Painting', desc: 'Interior and exterior painting crews. Prep work, primer, finish coats, and specialty finishes.' },
  { title: 'Flooring', desc: 'Hardwood, LVP, tile, and carpet installation. Subfloor prep and moisture testing experience preferred.' },
  { title: 'Landscaping & Hardscape', desc: 'Grading, drainage, irrigation, plantings, retaining walls, patios, and outdoor living construction.' },
  { title: 'Insulation', desc: 'Spray foam, batt, and blown-in insulation for new construction and retrofits.' },
  { title: 'Fencing & Exterior', desc: 'Wood, metal, and composite fencing. Gates, pergolas, and exterior carpentry.' },
];

const EXPECTATIONS = [
  { title: 'Reliability', desc: 'Show up when you say you will. Communicate proactively if anything changes. We do the same.' },
  { title: 'Quality Work', desc: 'We hold every trade to the same standard we hold ourselves — clean, precise, built to last.' },
  { title: 'Proper Licensing & Insurance', desc: 'Current licenses, general liability, and workers\u2019 comp where required. Non-negotiable.' },
  { title: 'Professionalism', desc: 'Clean job sites, respectful communication with homeowners, and pride in the finished product.' },
  { title: 'Fair & Transparent Pricing', desc: 'Competitive bids with clear line items. No surprise change orders or hidden costs.' },
  { title: 'Safety First', desc: 'OSHA-compliant practices, proper PPE, and a zero-tolerance policy for shortcuts.' },
];

const BENEFITS = [
  'Consistent, steady work pipeline across Central Texas',
  'Fair pay — we don\u2019t squeeze margins at your expense',
  'Clear scopes of work and realistic timelines',
  'Respectful, organized job sites',
  'Long-term partnership, not one-and-done projects',
  'A general contractor who answers the phone',
];

export default function SubcontractorsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Subcontractor Partnerships — Bar Moon Contracting',
    description: 'Bar Moon Contracting is seeking skilled subcontractors in Central Texas. Electricians, plumbers, framers, HVAC, concrete, drywall, roofers, painters, and more.',
    url: 'https://barmooncontracting.com/subcontractors',
    mainEntity: {
      '@type': 'Organization',
      name: 'Bar Moon Contracting LLC',
      url: 'https://barmooncontracting.com',
      areaServed: {
        '@type': 'Place',
        name: 'Central Texas',
      },
    },
  };

  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-deep-blue to-primary" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("/images/Layered Circle/BMC_Layered_Circle_Dist_01.png")', backgroundSize: '420px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            Subcontractor Partnerships
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Build With Us,<br />
            <span className="text-gold-primary">Grow With Us</span>
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-4">
            Bar Moon Contracting is building a network of skilled, dependable subcontractors across Central Texas. If you take pride in your trade, we want to talk.
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto italic">
            Good partnerships start with mutual respect, clear expectations, and a handshake that means something.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Why Partner With Bar Moon ─────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Partner With Bar Moon?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            We know that the best work comes from people who are treated right. That means fair pay, organized projects, and a GC who respects your time and expertise.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;re not looking for the cheapest bid&mdash;we&apos;re looking for the right partners. Skilled professionals who care about craftsmanship, show up prepared, and take ownership of their work.
          </p>
        </div>
      </section>

      {/* ── What You Get ─────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">The Partnership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You Can Expect From Us
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {BENEFITS.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-primary mt-2 flex-shrink-0" />
                <p className="text-gray-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Expect ───────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-deep-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Standards</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Look For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We hold ourselves to a high standard, and we look for partners who do the same.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPECTATIONS.map((item) => (
              <div key={item.title} className="bg-deep-blue border border-gold-primary/15 rounded-xl p-6 hover:border-gold-primary/40 transition-all duration-300">
                <h3 className="text-lg font-bold text-gold-primary mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-accent pl-6 md:pl-10">
            <p className="text-2xl md:text-3xl font-light text-white leading-snug italic mb-4">
              &ldquo;We don&apos;t just hire subs&mdash;we build relationships. When your name&apos;s next to ours on a project, that means something.&rdquo;
            </p>
            <cite className="text-accent/70 text-sm uppercase tracking-wider not-italic">
              Bar Moon Contracting
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Trades We Work With ───────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-deep-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">Current Needs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trades We Work With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re always open to connecting with quality tradespeople. Here are the trades we partner with most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRADES.map((trade) => (
              <div key={trade.title} className="bg-deep-blue border border-gold-primary/15 rounded-xl p-6 hover:border-gold-primary/40 hover:shadow-[0_0_15px_rgba(214,173,48,0.15)] transition-all duration-300">
                <h3 className="text-lg font-bold text-gold-primary mb-2">{trade.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{trade.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Get Started ────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Next Steps</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How to Get Started
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Reach Out', desc: 'Send us a message through our contact form or give us a call. Let us know your trade, experience, and service area.' },
              { step: '02', title: 'Introduction Meeting', desc: 'We\u2019ll set up a time to talk \u2014 in person over coffee or a quick phone call. We want to learn about your crew, your work, and what matters to you.' },
              { step: '03', title: 'Verification', desc: 'We\u2019ll verify licensing, insurance, and references. This protects both of us and the homeowners we serve.' },
              { step: '04', title: 'Trial Project', desc: 'We start with a smaller scope project to see how we work together. No pressure \u2014 just a chance to build trust on both sides.' },
              { step: '05', title: 'Ongoing Partnership', desc: 'If the fit is right, you\u2019re part of the Bar Moon network. Steady work, fair treatment, and a partnership built to last.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5 md:gap-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-primary font-bold text-sm md:text-base">{item.step}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Partner Up?
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            We&apos;re always looking for quality tradespeople who share our values. If you take pride in your work and want to be part of a team that does the same, let&apos;s connect.
          </p>
          <p className="text-base text-gray-500 mb-10 italic">
            Call us or send a message&mdash;we&apos;ll get back to you within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=subcontractor-inquiry"
              className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-lg hover:scale-105"
            >
              Send Us a Message
            </Link>
            <a
              href="tel:+12545813808"
              className="inline-block border-2 border-gold-primary/50 hover:border-gold-primary text-gold-primary font-bold py-4 px-10 rounded-lg transition duration-300 text-lg hover:scale-105"
            >
              Call 254-581-3808
            </a>
          </div>
        </div>
      </section>

      {/* ── Logo sign-off ────────────────────────────────── */}
      <section className="py-12 bg-dark-blue flex justify-center">
        <Image
          src="/images/Layered Circle/BMC_Layered_Circle_Dist_01.png"
          alt="Bar Moon Contracting"
          width={80}
          height={80}
          className="object-contain opacity-30"
        />
      </section>
    </main>
  );
}
