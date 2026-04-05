
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
// ...existing code...

export default function OurHeartPage() {
  return (
    <>
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
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              We see every project as a trust&mdash;one that should be handled with care, honesty, and excellence. Whether it&rsquo;s a small repair or a full custom build, we treat your home like it&rsquo;s our own, focusing on lasting value, safety, and peace of mind.
            </p>
          </Container>
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
                  <Container className="relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
                      Our Heart, Our Passion
                    </h1>
                    <h2 className="text-2xl lg:text-3xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
                      Building Dreams, Creating Legacies
                    </h2>
                  </Container>
                </section>

                {/* Story Section */}
                <section className="py-20 bg-dark-blue">
                  <Container className="max-w-4xl">
                    <h2 className="text-3xl font-bold text-gold-primary mb-6">Our Story</h2>
                    <p className="text-lg text-gray-200 leading-relaxed mb-8">
                      Founded by a team of passionate builders, Bar Moon Contracting was born from a desire to bring honesty, quality, and artistry back to the construction industry. We&apos;re not just contractors&mdash;we&apos;re craftsmen, dreamers, and neighbors who care deeply about the communities we serve.
                    </p>
                    <h3 className="text-2xl font-semibold text-gold-secondary mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-200 leading-relaxed mb-8">
                      To create beautiful, lasting spaces that reflect the unique vision and needs of every client. We approach each project with heart, treating your home as if it were our own.
                    </p>
                    <h3 className="text-2xl font-semibold text-gold-secondary mb-4">Our Values</h3>
                    <ul className="list-disc list-inside text-lg text-gray-200 space-y-2 mb-8">
                      <li><span className="font-bold text-gold-primary">Integrity:</span> We do what we say, every time.</li>
                      <li><span className="font-bold text-gold-primary">Craftsmanship:</span> Details matter. We never cut corners.</li>
                      <li><span className="font-bold text-gold-primary">Community:</span> We build relationships, not just structures.</li>
                      <li><span className="font-bold text-gold-primary">Passion:</span> We love what we do, and it shows in our work.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-gold-secondary mb-4">Why Choose Us?</h3>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      When you choose Bar Moon Contracting, you&apos;re choosing a partner who listens, cares, and delivers. Let&apos;s build something extraordinary together.
                    </p>
                  </Container>
                </section>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
