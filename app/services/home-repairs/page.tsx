// app/services/home-repairs/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeRepairsPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-deep-blue to-primary" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("/images/Layered Circle/BMC_Layered_Circle_Dist_01.png")', backgroundSize: '420px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            Home Repairs
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Home Repairs<br />
            <span className="text-gold-primary">Done Right, the First Time</span>
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-4">
            Not every issue needs a full renovation, but every repair deserves to be done correctly.
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto italic">
            Because a small fix today prevents a big headache tomorrow.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Intro prose ───────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            We fix problems at the source&mdash;not just patch them over&mdash;using the same standards we bring to custom builds: clear communication, proper methods, and work built to last.
          </p>
          <p className="text-lg text-deep-blue font-medium italic">
            From normal wear and tear to storm damage and aging materials, homeowners trust us for efficient, responsible repairs without shortcuts.
          </p>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-deep-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">What We Fix</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Home Repair Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Professional-grade repairs for every part of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Small Electrical Repairs', desc: 'Outlets, switches, fixtures, and wiring issues handled safely and to code.' },
              { title: 'Small Plumbing Repairs', desc: 'Leaks, faucets, toilet repairs, and minor pipe work done right.' },
              { title: 'Drywall Repair & Patching', desc: 'Holes, cracks, water damage patches\u2014seamless finishes every time.' },
              { title: 'Interior & Exterior Trim', desc: 'Crown molding, baseboards, window casings, and fascia restored or replaced.' },
              { title: 'Doors & Windows', desc: 'Adjustments, replacements, weatherstripping, and hardware upgrades.' },
              { title: 'Flooring Repairs', desc: 'Squeaky boards, cracked tiles, damaged planks\u2014fixed without replacing the whole floor.' },
              { title: 'Fence & Gate Repairs', desc: 'Leaning posts, broken pickets, sagging gates\u2014sturdy again.' },
              { title: 'Siding & Exterior Surfaces', desc: 'Storm damage, rotting boards, peeling paint\u2014your home\u2019s first impression, restored.' },
              { title: 'Minor Framing & Structural', desc: 'Sagging floors, door frame damage, and load-bearing concerns assessed and repaired.' },
              { title: 'Water & Storm Damage', desc: 'Rot, mold remediation, and storm-related repairs handled promptly and thoroughly.' },
              { title: 'Hardware & Fixtures', desc: 'Cabinet hardware, towel bars, shelving, light fixtures\u2014the details that make a home feel right.' },
              { title: 'General Handyman Work', desc: 'If it\u2019s broken, worn out, or not working right\u2014give us a call.' },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-dark-blue/60 rounded-xl p-6 border border-white/5 hover:border-gold-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold-primary/20 transition">
                  <span className="text-gold-primary font-bold text-sm">&#9670;</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why BMC for Repairs ────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-dark-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Trust Us With Your Repairs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'Fix the Source, Not the Symptom', text: 'We diagnose the root cause so the same problem doesn\u2019t come back.' },
              { title: 'Clear, Fair Quotes', text: 'We assess, explain what\u2019s needed, and give you an honest price before starting.' },
              { title: 'Builder-Level Quality', text: 'Same standards we use on custom homes, applied to every repair\u2014no matter the size.' },
              { title: 'Respect for Your Home', text: 'Clean work areas, careful attention, and we leave your space better than we found it.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-deep-blue border border-gold-primary/15 rounded-xl p-8 hover:border-gold-primary/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gold-primary mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
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
              &ldquo;Every repair, big or small, gets the same care and integrity we bring to a full build.&rdquo;
            </p>
            <cite className="text-accent/70 text-sm uppercase tracking-wider not-italic">
              Bar Moon Contracting
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-light-neutral">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get That<br />
            <span className="text-primary">Repair Handled?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
            Give us a call&mdash;we&apos;ll assess, provide a clear plan and fair quote, and take care of it so you can enjoy your home again.
          </p>
          <Link
            href="/contact?service=home-repairs"
            className="inline-block bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 text-xl hover:scale-105"
          >
            Request a Repair Service
          </Link>
        </div>
      </section>

      {/* ── Sign-off logo ─────────────────────────────────── */}
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