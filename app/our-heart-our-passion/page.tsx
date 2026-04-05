
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
// ...existing code...

export default function OurHeartPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">
      {/* Hero Section for Our Heart - Our Passion */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/samantha-amidon-bluebonnet-unsplash.jpg"
            alt="Texas bluebonnets"
            fill
            className="object-cover brightness-[0.3] scale-105"
            priority
          />
        </div>
<<<<<<< HEAD
        <div className="relative z-10 max-w-3xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Bar Moon Contracting
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
            Our Heart &ndash;<br />Our Passion
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-xl text-gray-200 leading-relaxed">
            We believe that doing honest work with care and intention still matters&mdash;and always will.
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Editorial intro: centered prose ──────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Building With Purpose, Responsibility&nbsp;&amp;&nbsp;Care
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Construction is more than materials and measurements. It&rsquo;s responsibility. It&rsquo;s stewardship. It&rsquo;s the understanding that what we build impacts families, livelihoods, and futures.
=======
        <Container className="relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Our Heart Our Passion
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Building With Purpose, Responsibility, and Care
          </h2>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-deep-blue">
        <Container className="prose prose-lg prose-invert">
          <p className="text-lg leading-relaxed mb-8">
            Construction is more than materials and measurements. It’s responsibility. It’s stewardship. It’s the understanding that what we build impacts families, livelihoods, and futures. We believe our work is a trust — one that should be handled with care, honesty, and excellence. Every project represents more than a structure; it represents someone’s investment, safety, and peace of mind. That belief shapes how we approach every job, large or small.
>>>>>>> a6322ba (Apply responsive Container component to all main pages for consistent scaling)
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            We see every project as a trust&mdash;one that should be handled with care, honesty, and excellence. Whether it&rsquo;s a small repair or a full custom build, we treat your home like it&rsquo;s our own, focusing on lasting value, safety, and peace of mind.
          </p>
        </div>
      </section>

      {/* ── Full-bleed image break ───────────────────────────── */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/daniel-mccullough-draftsman-unsplash.jpg"
          alt="Blueprint planning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/40 via-transparent to-dark-blue/40" />
      </section>

      {/* ── Pull-quote + prose: Rooted in Central Texas ──────── */}
      <section className="py-24 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-4xl mx-auto">
          {/* Pull quote */}
          <blockquote className="border-l-4 border-accent pl-6 md:pl-10 mb-12">
            <p className="text-2xl md:text-3xl font-light text-white leading-snug italic">
              &ldquo;When you build in your own backyard, your word matters.&rdquo;
            </p>
          </blockquote>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-8">
              Rooted in Central Texas, Guided by Principle
            </h2>
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              Our family has been part of this community for generations. This is home. That history carries a responsibility to act with integrity, treat people fairly, and leave things better than we found them.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We hold ourselves to a higher standard&mdash;not just industry rules, but what&rsquo;s right, even when it&rsquo;s harder.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Stewardship: 4 value cards ───────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-4">
            Stewardship Through Quality
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Quality isn&rsquo;t an upgrade; it&rsquo;s good stewardship. Doing things right the first time honors both you and the craft itself.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: 'Right Materials', text: 'Selected specifically for Central Texas conditions — heat, clay soils, and weather.', image: '/images/nikkan-navidi-stones-unsplash.jpg' },
            { title: 'Built to Last', text: 'Every decision focuses on long-term performance and durability, not shortcuts.', image: '/images/steven-ungermann-deck2-unsplash.jpg' },
            { title: 'Full Transparency', text: 'Honest about costs, scope, and expectations — no surprises, no hidden fees.', image: '/images/odiseo-castrejon-kitchen-floating-shelves-unsplash.jpg' },
            { title: 'Total Accountability', text: 'We take full responsibility for the work we put our name on. Period.', image: '/images/fraem-gmbh-sod-unsplash.jpg' },
          ].map((card) => (
            <div key={card.title} className="group relative rounded-xl overflow-hidden h-56 md:h-64">
              <Image src={card.image} alt={card.title} fill className="object-cover brightness-[0.3] lg:brightness-[0.4] lg:group-hover:brightness-[0.25] transition-all duration-500 lg:group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
                      {/* Hero Section for Our Heart - Our Passion */}
                      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16">
      {/* ── Full-bleed image break 2 ─────────────────────────── */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/clay-banks-rusticinterior-unsplash.jpg"
          alt="Warm rustic interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/40 via-transparent to-dark-blue/40" />
                        <Container className="relative z-10">
                          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
                            Our Heart Our Passion
                          </h1>
                          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
                            Building With Purpose, Responsibility, and Care
                          </h2>
                        </Container>
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-primary mb-8">
            Work That Reflects What We Stand For
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            No cutting corners. No overselling. No leaving problems for someone else. Just honest work, clear communication, and accountability for the outcome.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-10">
            At the end of the day, our work is a reflection of our values, our discipline, and our respect for the people we serve.
          </p>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-8" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gold-secondary italic leading-snug">
            That&rsquo;s why we do what we do.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-light-neutral text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Build Something That Lasts?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&rsquo;s talk about your project and how we can bring it to life the right way.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-xl hover:scale-105"
          >
            Let&rsquo;s Build Together
          </Link>
        </div>
      </section>
    </main>
  );
}
