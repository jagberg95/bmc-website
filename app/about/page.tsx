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
            src="/images/about-hero.jpg" // Placeholder for a relevant image (e.g., family, long-standing building)
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
            About Bar Moon Contracting
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            A Central Texas Legacy Built to Last
          </h2>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          <p className="text-lg leading-relaxed mb-8">
            Howdy, Bar Moon Contracting is the continuation of a Central Texas legacy five generations in the making. Rooted here for over a century, our family has built, worked, and served this community with integrity and pride.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">A Texas Legacy Built to Last</h2>
          <p className="text-lg leading-relaxed mb-8">
            Bar Moon Contracting isn’t just a business—it’s the continuation of a Central Texas heritage five generations in the making. Our family has lived, worked, and built within this community for over a century, shaping the land, supporting our neighbors, and passing down the values that define who we are today. Our roots anchor us, but our vision pushes us forward. We believe Central Texas deserves construction and repair services that reflect the region’s character: strong, honest, and undeniably crafted with pride.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Experience That Elevates Every Project</h2>
          <p className="text-lg leading-relaxed mb-8">
            With 12 years of residential construction experience, we understand the unique needs of homeowners—function, beauty, durability, and peace of mind. We’ve completed everything from essential repairs to luxury renovations, always with meticulous attention to detail.
          </p>
          
          <p className="text-lg leading-relaxed mb-8">
            Our 5 years of commercial construction work, performed across multiple states, brings an additional layer of expertise. From managing large-scale operations to coordinating teams and complex timelines, we’ve learned how to deliver precision, efficiency, and reliability at every level. This blend of residential warmth and commercial discipline sets us apart. It allows us to provide homeowners with a refined, professional, and consistently high-quality experience.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Guided by Integrity, Driven by Craftsmanship</h2>
          <p className="text-lg leading-relaxed mb-8">
            Integrity is not just a value—it’s the standard behind every decision we make. Clients trust us because we communicate clearly, operate transparently, and stand behind our work without compromise. Each project is treated like a legacy piece. From premium materials to fine craftsmanship, we focus on doing it right the first time, the Texas way. The result? Homes that last, craftsmanship you can feel, and a construction experience rooted in honesty.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Committed to Central Texas</h2>
          <p className="text-lg leading-relaxed mb-8">
            We know this land, these homes, and the people who take pride in them. Being local isn’t just a point of pride—it's the foundation of our commitment. When you work with Bar Moon Construction, you’re not hiring an outside contractor; you’re partnering with a neighbor who understands the challenges, climate, materials, and culture of Central Texas. Our goal is to continue raising the standard of living here by delivering exceptional work while supporting the community we love.
          </p>

          <p className="text-xl font-semibold mt-12 text-gold-primary border-l-4 border-gold-secondary pl-6 italic">
            Bar Moon Construction — Built on heritage. Strengthened by experience. Dedicated to excellence. This is who we are—and we’re here to build something exceptional with you.
          </p>

          {/* Button to Contact Page */}
          <div className="mt-16 text-center">
            <Link href="/contact" legacyBehavior>
              <a className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
                Let's Build With You
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for footer etc. */}
    </main>
  );
}
