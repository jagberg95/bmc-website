// app/about/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* ── Hero: full-screen with layered text ──────────────── */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tim-arterbury-sunset1--unsplash.jpg"
            alt="Central Texas sunset"
            fill
            className="object-cover brightness-[0.25]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Est. Central Texas
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white tracking-tight leading-[1.1]">
            Howdy from<br />
            <span className="text-gold-primary">Bar Moon Contracting</span>
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            A Central Texas legacy, five generations strong.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Our Story: editorial centered prose ──────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto">
          <p className="text-deep-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            A Century of Building in Central Texas
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            We&apos;re Bar Moon Contracting&mdash;the next chapter in a Central Texas story that&apos;s been unfolding for over a century. Our family has lived, worked, built, and served right here in these hills and heartlands, passing down the values of hard work, honesty, and doing things the right way.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            That legacy isn&apos;t just history; it&apos;s the foundation under every project we take on today.
          </p>
        </div>
      </section>

      {/* ── Full-bleed image break ───────────────────────────── */}
      <section className="relative h-[45vh] overflow-hidden">
        <Image
          src="/images/clay-banks-farmhousebathroom-unsplash.jpg"
          alt="Rustic farmhouse craftsmanship"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/50 via-transparent to-deep-blue/50" />
      </section>

      {/* ── Experience: stats + narrative ─────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '5', label: 'Generations' },
              { number: '12+', label: 'Years Residential' },
              { number: '5+', label: 'Years Commercial' },
              { number: '100%', label: 'Commitment' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-primary mb-1">{stat.number}</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              With 12 years of hands-on residential experience and 5 years tackling commercial builds across multiple states, we bring deep know-how to every job&mdash;whether it&apos;s a thoughtful home repair, a full custom renovation, or something bigger.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We blend old-school Texas grit with modern precision: clear plans, premium materials, coordinated teams, and workmanship that holds up to whatever the weather (or life) throws at it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rooted Here: 2-column image + text ───────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* Image half */}
          <div className="relative min-h-[350px] md:min-h-[450px]">
            <Image
              src="/images/isaac-fellows-pecan-tree-unsplash.jpg"
              alt="Pecan tree in Central Texas"
              fill
              className="object-cover"
            />
          </div>
          {/* Text half */}
          <div className="bg-light-neutral p-10 md:p-14 flex flex-col justify-center">
            <p className="text-deep-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Roots</p>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Rooted Here, Built to Last
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Central Texas isn&apos;t just where we&apos;re from&mdash;it&apos;s who we are. We understand the clay soil, the hot summers, the sudden storms, and the pride folks take in their homes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our work reflects that heritage&mdash;strong, straightforward, and crafted with care. We don&apos;t chase fads; we focus on homes that feel timeless, function beautifully, and tell a story worth keeping.
            </p>
          </div>
        </div>
      </section>

      {/* ── Experience Meets Heart: reversed 2-column ────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* Text half */}
          <div className="bg-primary p-10 md:p-14 flex flex-col justify-center order-2 md:order-1">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Approach</p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience Meets Heart
            </h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Residential projects are personal&mdash;that&apos;s why we treat every home like our own. From small fixes that restore peace of mind to luxury renovations that elevate daily living, we deliver refined results with attention to the details that matter most.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our commercial background adds real-world discipline: managing timelines, budgets, and crews with efficiency and reliability. Homeowners get the best of both worlds&mdash;warm, neighborly service backed by professional-grade execution.
            </p>
          </div>
          {/* Image half */}
          <div className="relative min-h-[350px] md:min-h-[450px] order-1 md:order-2">
            <Image
              src="/images/lotus-design-n-print-kitchen3-unsplash.jpg"
              alt="Bright classic kitchen renovation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Pull-quote interlude ─────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-accent pl-6 md:pl-10">
            <p className="text-2xl md:text-3xl font-light text-white leading-snug italic mb-4">
              &ldquo;When your name&apos;s on it&mdash;and your family&apos;s been here for generations&mdash;only the best will do.&rdquo;
            </p>
            <cite className="text-accent/70 text-sm uppercase tracking-wider not-italic">
              Bar Moon Contracting
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Integrity & Community: 3-column cards ────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Guided by integrity, driven by craftsmanship, committed to Central Texas.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Integrity First',
              text: 'Trust is earned one honest conversation, one clean job site, and one solid warranty at a time. We communicate openly, quote fairly, and never cut corners.',
              image: '/images/naomi-hebert-kitchen1-unsplash.jpg',
            },
            {
              title: 'Craftsmanship Always',
              text: 'Premium materials, precise execution, and attention to details that most people would never notice — but we always do.',
              image: '/images/beks-mu-bathroom-unsplash.jpg',
            },
            {
              title: 'Community Driven',
              text: "We're not just contractors; we're neighbors who care about this place and the people in it. Our reputation is built one relationship at a time.",
              image: '/images/thinh-nguyen-patio2-unsplash.jpg',
            },
          ].map((card) => (
            <div key={card.title} className="group relative rounded-xl overflow-hidden h-72 md:h-80">
              <Image src={card.image} alt={card.title} fill className="object-cover brightness-[0.25] lg:brightness-[0.35] lg:group-hover:brightness-[0.2] lg:group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing statement ────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
          <p className="text-xl leading-relaxed text-primary mb-4">
            Bar Moon Contracting
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-deep-blue italic leading-snug mb-8">
            Built on heritage. Strengthened by experience. Dedicated to excellence.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            We&apos;re ready to build something exceptional with you. Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-xl hover:scale-105"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/subcontractors"
              className="inline-block border-2 border-gold-primary/40 hover:border-gold-primary text-gold-primary font-bold py-4 px-10 rounded-lg transition duration-300 text-lg hover:scale-105"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}