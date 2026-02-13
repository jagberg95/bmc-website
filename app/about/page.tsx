// app/about/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section for About Us */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16 px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Bar Moon Contracting About Us"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Howdy from Bar Moon Contracting
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            A Central Texas Legacy, Five Generations Strong
          </h2>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          <p className="text-lg leading-relaxed mb-8">
            We&apos;re Bar Moon Contracting&mdash;the next chapter in a Central Texas story that&apos;s been unfolding for over a century. Our family has lived, worked, built, and served right here in these hills and heartlands, passing down the values of hard work, honesty, and doing things the right way. That legacy isn&apos;t just history; it&apos;s the foundation under every project we take on today.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            With 12 years of hands-on residential experience and 5 years tackling commercial builds across multiple states, we bring deep know-how to every job&mdash;whether it&apos;s a thoughtful home repair, a full custom renovation, or something bigger. We blend old-school Texas grit with modern precision: clear plans, premium materials, coordinated teams, and workmanship that holds up to whatever the weather (or life) throws at it.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Rooted Here, Built to Last</h2>
          <p className="text-lg leading-relaxed mb-4">
            Central Texas isn&apos;t just where we&apos;re from&mdash;it&apos;s who we are. We understand the clay soil, the hot summers, the sudden storms, and the pride folks take in their homes. Being local means we build with the region in mind: durable details that stand the test of time, materials suited to our climate, and a commitment to leaving every property better than we found it.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Our work reflects that heritage&mdash;strong, straightforward, and crafted with care. We don&apos;t chase fads; we focus on homes that feel timeless, function beautifully, and tell a story worth keeping.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Experience Meets Heart</h2>
          <p className="text-lg leading-relaxed mb-4">
            Residential projects are personal&mdash;that&apos;s why we treat every home like our own. From small fixes that restore peace of mind to luxury renovations that elevate daily living, we deliver refined results with attention to the details that matter most.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Our commercial background adds real-world discipline: managing timelines, budgets, and crews with efficiency and reliability. It means homeowners get the best of both worlds&mdash;warm, neighborly service backed by professional-grade execution.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Guided by Integrity, Driven by Craftsmanship</h2>
          <p className="text-lg leading-relaxed mb-8">
            We believe trust is earned one honest conversation, one clean job site, and one solid warranty at a time. We communicate openly, quote fairly, stand behind our work, and never cut corners. Because when your name&apos;s on it&mdash;and your family&apos;s been here for generations&mdash;only the best will do.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Committed to Central Texas</h2>
          <p className="text-lg leading-relaxed mb-8">
            We&apos;re not just contractors; we&apos;re neighbors who care about this place and the people in it. Partnering with Bar Moon Contracting means working with folks who know the land, respect the community, and are dedicated to raising the bar for what quality construction looks like here.
          </p>

          <p className="text-xl font-semibold mt-12 text-gold-primary border-l-4 border-gold-secondary pl-6 italic">
            Bar Moon Contracting &mdash; Built on heritage. Strengthened by experience. Dedicated to excellence.
          </p>
          <p className="text-lg leading-relaxed mt-6">
            We&apos;re ready to build something exceptional with you. Let&apos;s talk.
          </p>

          {/* Button to Contact Page */}
          <div className="mt-16 text-center">
            <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}