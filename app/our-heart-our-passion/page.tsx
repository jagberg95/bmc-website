// app/our-heart-our-passion/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OurHeartPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section for Our Heart - Our Passion */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16 px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/our-heart-hero.jpg" // Placeholder for a relevant image
            alt="Bar Moon Contracting Our Heart Our Passion"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Our Heart Our Passion
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Building With Purpose, Responsibility, and Care
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          <p className="text-lg leading-relaxed mb-8">
            Construction is more than materials and measurements. It’s responsibility. It’s stewardship. It’s the understanding that what we build impacts families, livelihoods, and futures. We believe our work is a trust — one that should be handled with care, honesty, and excellence. Every project represents more than a structure; it represents someone’s investment, safety, and peace of mind. That belief shapes how we approach every job, large or small.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Rooted in Central Texas, Guided by Principle</h2>
          <p className="text-lg leading-relaxed mb-8">
            Our family has been part of Central Texas for generations. This is home. That history carries with it a responsibility to act with integrity, to treat people fairly, and to leave things better than we found them. When you build in your own community, your word matters. We hold ourselves accountable not just to industry standards, but to a higher standard of doing what’s right — even when it’s harder or less convenient.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Stewardship Through Quality</h2>
          <p className="text-lg leading-relaxed mb-8">
            We don’t view quality as an upgrade or a luxury. We see it as good stewardship. That means:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-8 space-y-2">
            <li>Using materials appropriate for the environment and conditions</li>
            <li>Building with long-term performance in mind</li>
            <li>Being transparent about costs, scope, and expectations</li>
            <li>Taking responsibility for the work we put our name on</li>
          </ul>
          <p className="text-lg leading-relaxed mb-8">
            We believe doing things right the first time honors both the client and the work itself.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Serving Through Skill</h2>
          <p className="text-lg leading-relaxed mb-8">
            We believe strong craftsmanship and ethical business practices go hand in hand. Running a healthy business allows us to serve consistently, stand behind our work, and continue improving how we operate. Our goal is not simply to complete projects, but to create real value — solutions that last, spaces that function well, and work that people can rely on. We approach every job with the mindset that our skills are meant to be used well, and in service to others.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gold-primary">Work That Reflects What We Stand For</h2>
          <p className="text-lg leading-relaxed mb-8">
            We don’t believe in cutting corners, overselling, or leaving problems for someone else to fix. We believe in honest work, clear communication, and taking responsibility for the outcome. At the end of the day, we see our work as more than construction. It’s a reflection of our values, our discipline, and our respect for the people we serve. That’s why we do what we do.
          </p>

          {/* Back to Home Link */}
          <div className="mt-16 text-center">
            <Link href="/" legacyBehavior>
              <a className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
