import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
// ...existing code...

      {/* Services Listing Section - Staggered Layout */}
      <section className="py-20 bg-dark-blue">
        <Container className="max-w-6xl">
          
          {/* Row 1: Custom Homes (Large) */}
          <div className="mb-12">
            <div className="bg-deep-blue p-10 lg:p-16 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-gold-primary">Custom Homes</h3>
                  <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                    Building your dream home from the ground up with Central Texas integrity and unmatched craftsmanship. From concept to completion, we design and build homes that reflect your lifestyle and stand the test of time.
                  </p>
                  <Link href="/services/custom-homes" className="inline-block bg-gold-primary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-secondary text-xl">
                    Plan Your Dream Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Home Renovations & Outdoor Living (Side by Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Home Renovations */}
            <div className="bg-deep-blue p-8 lg:p-12 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300 flex flex-col">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gold-primary">Home Renovations</h3>
              <p className="text-lg mb-8 leading-relaxed flex-grow">
                Transform your living space with expert renovations. From kitchen and bathroom remodels to flooring and floor plan adjustments, we have the experience to accomplish any project on time and on budget.
              </p>
              <Link href="/services/home-renovations" className="inline-block bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary text-lg self-start">
                Explore Renovation Ideas
              </Link>
            </div>

            {/* Outdoor Living Spaces */}
            <div className="bg-deep-blue p-8 lg:p-12 rounded-lg shadow-xl border-2 border-gold-secondary hover:shadow-gold-primary transition-shadow duration-300 flex flex-col">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gold-primary">Outdoor Living Spaces</h3>
              <p className="text-lg mb-8 leading-relaxed flex-grow">
                Design and build stunning decks, patios, and landscapes. Whether you love to host or just want a place to relax, we create your perfect outdoor living area that blends seamlessly with your home.
              </p>
              <Link href="/services/outdoor-living" className="inline-block bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary text-lg self-start">
                Design Your Outdoor Oasis
              </Link>
            </div>
          </div>

          {/* Row 3: Home Repairs (Full Width, Different Style) */}
          <div className="mb-12">
            <div className="bg-dark-blue p-10 lg:p-16 rounded-lg shadow-xl border-4 border-gold-primary hover:shadow-gold-primary transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-gold-primary">Reliable Home Repairs</h3>
                  <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                    Not every project requires a full renovation — but every repair deserves to be done correctly. From small electrical and plumbing to drywall, flooring, and storm damage, we fix problems at the source with the same standards we bring to larger projects.
                  </p>
                  <Link href="/services/home-repairs" className="inline-block bg-gold-primary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-secondary text-xl">
                    Request Repair Service
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-deep-blue text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gold-primary">Ready to Start Your Project?</h2>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your vision. We're here to build something exceptional with you.
        </p>
      </section>

      {/* Mosaic Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] sm:auto-rows-[260px] gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative rounded-xl overflow-hidden ${
                /* Only apply multi-span on lg+ where we have 4 columns */
                service.span.replace(/col-span-2/g, 'sm:col-span-2 lg:col-span-2').replace(/row-span-2/g, 'sm:row-span-2 lg:row-span-2')
              }`}
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay — always visible with gradient + text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content — always visible on mobile, hover-reveal description on desktop */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  {service.tagline}
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <span className="mt-3 inline-block self-start bg-accent/90 text-primary font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
