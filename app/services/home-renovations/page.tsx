// app/services/home-renovations/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

// Placeholder for image paths - you'll need to provide actual images
// e.g., in the public/images/services/ folder

export default function HomeRenovationsPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">

      {/* Hero Section for Renovations */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden py-16 px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/services/renovations-hero.jpg" // Placeholder image for renovations
            alt="Bar Moon Contracting Home Renovation"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Home Renovations
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Transform Your Living Space with Expert Craftsmanship
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Whether you are looking to simply update your space, completely renovate a room, or give the entire house a fresh start, we have the experience and knowledge to accomplish any project on time and on budget. We bring proven skill and honest communication to every renovation.
          </p>
        </div>
      </section>

      {/* Services Specialties Section */}
      <section className="py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Our Renovation Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Specialty 1: Kitchen Remodels */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Kitchen Remodels</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Kitchens and bathrooms are the most used — and most complex — spaces in a home. Poor layouts, outdated finishes, and rushed remodels often lead to daily frustration and costly fixes down the road. We specialize in kitchen and bathroom remodels that improve function, flow, and durability. From layout adjustments and fixture placement to cabinetry, countertops, tile, and finishes, we manage the details that matter. Our approach focuses on clear planning, coordinated trades, and workmanship that holds up to everyday use. The result is a space that works better, looks intentional, and adds real long-term value to your home.
              </p>
              <Link href="/services/kitchen-bath-remodels" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
              Learn More About Kitchens
            </Link>
            </div>

            {/* Specialty 2: Bathroom Remodels */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Bathroom Remodels</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Your bathroom should be a sanctuary that balances functionality with relaxation. Outdated fixtures, inefficient layouts, or poor design can turn this essential space into a daily challenge. We specialize in complete bathroom remodels designed to optimize space, enhance durability, and create a peaceful retreat. From thoughtful fixture placement and updated cabinetry to modern tiling and finishes, we handle every detail with precision. Our focus is on meticulous planning, coordinated trades, and the highest standard of workmanship, ensuring your new bathroom is not only beautiful but also highly functional and built to last. The result is a refreshed, efficient space that adds comfort and long-term value to your home.
              </p>
              <Link href="/services/kitchen-bath-remodels" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
              Learn More About Bathrooms
            </Link>
            </div>

            {/* Specialty 3: Flooring */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Flooring</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Flooring sets the tone for your entire home — and improper installation can cause problems you’ll notice every day. Uneven surfaces, poor transitions, and premature wear are often the result of rushed prep work. We install and replace flooring with careful attention to subfloor conditions, transitions, and long-term performance. Whether you’re updating a single room or the entire home, we ensure clean lines, proper leveling, and materials installed the right way. Our goal is flooring that feels solid underfoot, looks seamless between spaces, and stands up to daily life.
              </p>
              <Link href="/services/flooring" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
              Learn More About Flooring
            </Link>
            </div>

            {/* Specialty 4: Floor Plan Adjustments */}
            <div className="bg-dark-blue p-10 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-6 text-gold-primary">Floor Plan Adjustments</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Sometimes a home doesn’t need more space — it needs better use of the space you already have. Awkward layouts, unused rooms, and outdated configurations can limit how your home functions. We handle room adjustments and interior modifications with a construction-informed approach. Whether it’s opening up a space, redefining a room’s purpose, or making targeted layout changes, we focus on improvements that feel natural, balanced, and well-planned. Every adjustment is made with structure, flow, and long-term value in mind — so the change feels intentional, not improvised.
              </p>
              <Link href="/services/floor-plan-adjustments" className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
              Learn More About Layouts
            </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Placeholder for other sections and footer */}
    </main>
  );
}
