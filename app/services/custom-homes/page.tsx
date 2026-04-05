// app/services/custom-homes/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CustomHomesPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden pt-20">
        {/* Gradient-only hero — swap for a real image when available */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-deep-blue to-primary" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("/images/Layered Circle/BMC_Layered_Circle_Dist_01.png")', backgroundSize: '420px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            Custom Home Building
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Your Dream Home,<br />
            <span className="text-gold-primary">Built the Texas Way</span>
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-4">
            At Bar Moon Contracting, a custom home isn&apos;t just a building&mdash;it&apos;s the next chapter of your family&apos;s story.
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto italic">
            We don&apos;t build houses. We craft legacies: one beam, one conversation, one dream at a time.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Opening prose ─────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            Imagine waking up every day in a home that feels like it was always meant to be yours&mdash;every room shaped around the way you live, the way you gather, the way you want to grow old in Central Texas.
          </p>
          <p className="text-lg text-deep-blue font-medium italic">
            That&apos;s the promise of true custom home building.
          </p>
        </div>
      </section>

      {/* ── Why Custom ────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Custom Over Production Homes?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Most homes today are built on a schedule, not a vision. They come with pre-selected floor plans, cookie-cutter finishes, and compromises you didn&apos;t sign up for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Every Square Foot Is Intentional',
                text: 'Designed for your lifestyle, not someone else\u2019s spec sheet. You choose the view lines, the morning light, the height of the countertops.',
              },
              {
                title: 'You Decide Where Life Happens',
                text: 'Where the family gathers, where quiet moments happen, where memories are made\u2014all shaped by your vision.',
              },
              {
                title: 'Nothing Feels "Close Enough"',
                text: 'Every room feels exactly right\u2014because it was built for you. No compromises, no settling.',
              },
              {
                title: 'Built for Texas, Built for Generations',
                text: 'Wide porches that invite neighbors over, tall ceilings that make the sky feel close, materials that stand up to Texas heat and heart.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-blue/60 border border-gold-primary/15 rounded-xl p-8 hover:border-gold-primary/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gold-primary mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 mt-12 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve spent five generations learning what Central Texas families really need in a forever home&mdash;spaces that age gracefully with you.
          </p>
        </div>
      </section>

      {/* ── The Bar Moon Difference ───────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Bar Moon Difference
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We don&apos;t hand you a catalog and ask you to pick. We sit down, really listen, and build until the plan feels like home before a single nail is driven.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Texas-Born Craftsmanship',
                text: 'Five generations of know-how in framing, masonry, millwork, and finishes that endure.',
              },
              {
                title: 'Uncompromising Integrity',
                text: 'We only use materials and tradespeople we\u2019d trust in our own homes.',
              },
              {
                title: 'True Collaboration',
                text: 'Unlimited design revisions until it\u2019s perfect\u2014because your family deserves nothing less.',
              },
              {
                title: 'Transparent Pricing',
                text: 'Detailed estimates upfront, no hidden fees, realistic schedules you can count on.',
              },
              {
                title: 'Legacy-Level Detail',
                text: 'Custom cabinetry, hand-poured counters, wide-plank flooring, and outdoor connections that make Texas living effortless.',
              },
              {
                title: 'Relationship That Lasts',
                text: 'We\u2019re here long after the keys change hands\u2014for any future projects or questions.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-deep-blue rounded-xl p-7 border border-white/5 hover:border-gold-primary/30 transition-all duration-300"
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

      {/* ── Pull quote ────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-accent pl-6 md:pl-10">
            <p className="text-2xl md:text-3xl font-light text-white leading-snug italic mb-4">
              &ldquo;A custom home isn&apos;t a luxury&mdash;it&apos;s a once-in-a-lifetime investment in how you live, love, and gather.&rdquo;
            </p>
            <cite className="text-accent/70 text-sm uppercase tracking-wider not-italic">
              Bar Moon Contracting
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Your Journey ──────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-deep-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Your Custom Home Journey
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-deep-blue/20" />

            {[
              {
                step: '01',
                title: 'Discovery & Vision',
                text: 'We meet, walk your land (or talk through your existing lot), and listen to your must-haves, nice-to-haves, and dreams.',
              },
              {
                step: '02',
                title: 'Design & Refinement',
                text: 'Our team creates initial concepts. We iterate together until every line drawing feels like \u201cyou.\u201d',
              },
              {
                step: '03',
                title: 'Detailed Planning',
                text: 'Full architectural drawings, structural engineering, material selections, and a fixed-price agreement you can trust.',
              },
              {
                step: '04',
                title: 'Build with Care',
                text: 'We manage every phase\u2014foundation to final trim\u2014with weekly updates, photo progress, and open communication.',
              },
              {
                step: '05',
                title: 'Handover & Beyond',
                text: 'Final walkthrough, keys, and a relationship that lasts. We\u2019re here for any future projects or questions.',
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex gap-6 md:gap-8 mb-12 last:mb-0">
                {/* Step number circle */}
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-light-neutral border-2 border-deep-blue flex items-center justify-center shrink-0">
                  <span className="text-deep-blue font-bold text-sm md:text-base">{item.step}</span>
                </div>
                {/* Content */}
                <div className="pt-2 md:pt-3">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Writing Your<br />
            <span className="text-gold-primary">Family&apos;s Next Chapter?</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4 max-w-xl mx-auto">
            If you&apos;re ready to stop compromising and start building something that will outlast you, we&apos;re ready to listen.
          </p>
          <p className="text-gray-400 mb-10">
            Contact us today for a no-pressure conversation. Let&apos;s talk about the home your family has always deserved.
          </p>
          <Link
            href="/contact?service=custom-homes"
            className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-xl hover:scale-105"
          >
            Let&apos;s Talk About Your Home
          </Link>
        </div>
      </section>

      {/* ── Sign-off logo ─────────────────────────────────── */}
      <section className="py-12 bg-dark-blue">
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
