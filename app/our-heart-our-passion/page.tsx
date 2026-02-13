'use client';

import Link from 'next/link';

export default function OurHeartPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section */}
      <section className="relative py-20 px-8 bg-deep-blue text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Our Heart – Our Passion
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            We believe that doing honest work with care and intention still matters—and always will.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Building With Purpose */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gold-primary">Building With Purpose, Responsibility, and Care</h2>
            <p className="text-lg leading-relaxed mb-4">
              Construction is more than materials and measurements. It's responsibility. It's stewardship. It's the understanding that what we build impacts families, livelihoods, and futures.
            </p>
            <p className="text-lg leading-relaxed">
              We see every project as a trust—one that should be handled with care, honesty, and excellence. Whether it's a small repair or a full custom build, we treat your home like it's our own, focusing on lasting value, safety, and peace of mind.
            </p>
          </div>

          {/* Rooted in Central Texas */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gold-primary">Rooted in Central Texas, Guided by Principle</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our family has been part of this community for generations. This is home. That history carries a responsibility to act with integrity, treat people fairly, and leave things better than we found them.
            </p>
            <p className="text-lg leading-relaxed">
              When you build in your own backyard, your word matters. We hold ourselves to a higher standard—not just industry rules, but what's right, even when it's harder.
            </p>
          </div>

          {/* Stewardship Through Quality */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gold-primary">Stewardship Through Quality</h2>
            <p className="text-lg leading-relaxed mb-4">
              Quality isn't an upgrade; it's good stewardship. That means:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 ml-4 mb-4">
              <li>Using materials suited to Central Texas conditions</li>
              <li>Building for long-term performance and durability</li>
              <li>Being transparent about costs, scope, and expectations</li>
              <li>Taking full responsibility for the work we put our name on</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Doing things right the first time honors both you and the craft itself.
            </p>
          </div>

          {/* Serving Through Skill */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gold-primary">Serving Through Skill</h2>
            <p className="text-lg leading-relaxed mb-4">
              Strong craftsmanship and ethical practices go hand in hand. A healthy business lets us serve consistently, stand behind our work, and keep improving.
            </p>
            <p className="text-lg leading-relaxed">
              Our goal isn't just finishing projects—it's creating real value: solutions that last, spaces that work beautifully, and results you can rely on.
            </p>
          </div>

          {/* Work That Reflects */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gold-primary">Work That Reflects What We Stand For</h2>
            <p className="text-lg leading-relaxed mb-4">
              No cutting corners. No overselling. No leaving problems for someone else. Just honest work, clear communication, and accountability for the outcome.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              At the end of the day, our work is a reflection of our values, our discipline, and our respect for the people we serve.
            </p>
            <p className="text-xl font-semibold text-gold-secondary italic">
              That's why we do what we do.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
            Let's Build Together
          </Link>
        </div>
      </section>
    </main>
  );
}
