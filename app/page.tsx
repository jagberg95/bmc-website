// app/page.tsx
'use client'; // Necessary for client-side interactivity

import Image from 'next/image';
import Link from 'next/link'; // Used for internal page navigation or external links

export default function HomePage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Placeholder for your hero image. Ensure you have an image named 'hero-custom-home.jpg' in the /public/images/ folder. */}
          <Image
            src="/images/hero-custom-home.jpg"
            alt="Bar Moon Contracting Custom Home"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority // Preload image for faster display
            className="opacity-50" // Slightly dim the image for text contrast
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl px-8 py-16 flex flex-col items-center justify-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Welcome to Bar Moon Contracting
          </h1>
          <h2 className="text-3xl lg:text-5xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Texas Craftsmanship Meets Lasting Integrity
          </h2>
          <p className="text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl text-shadow-sm">
            At Bar Moon Contracting, we believe a custom home should reflect the people who live in it—strong, honest, beautifully built, and made to endure. We don’t just build or repair homes; we build trust, offering a seamless, high-end experience grounded in local Central Texas expertise. From premium materials to refined, detail-focused workmanship, our team delivers results that elevate your home and enhance the way you live. Whether you’re planning your dream custom home or undertaking a significant renovation, Bar Moon Contracting is your partner for luxury construction, thoughtful design, and reliable service, built on a legacy you can believe in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Link to Contact Section */}
            <Link href="#contact" legacyBehavior>
              <a className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
                Discuss Your Custom Home Vision
              </a>
            </Link>
            {/* Link to Services Section */}
            <Link href="#services" legacyBehavior>
              <a className="bg-gold-secondary hover:bg-gold-primary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl border-2 border-gold-primary hover:border-gold-secondary transform hover:scale-105">
                Explore Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder Sections - Replace with your actual content later */}
      {/* These are here to ensure smooth scrolling and represent where other sections would go */}
      <section id="about" className="relative h-screen flex items-center justify-center bg-dark-blue py-16 px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gold-primary tracking-tight drop-shadow-lg">About Bar Moon Contracting</h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Rooted in Central Texas for five generations, Bar Moon Contracting is built on a legacy of integrity, craftsmanship, and community. With over 12 years of residential construction experience and 5 years of commercial work across multiple states, we bring broad expertise and a deep understanding of what quality truly means. Our mission is simple: deliver premium, lasting results while treating every home as if it were our own. From small repairs to full-scale custom builds, we combine proven skill, honest communication, and Texas pride to give homeowners a construction partner they can trust. Bar Moon Contracting defines where tradition, craftsmanship, and modern excellence come together.
          </p>
          <Link href="#contact" legacyBehavior>
            <a className="mt-12 bg-gold-secondary hover:bg-gold-primary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
              Learn About Our Legacy
            </a>
          </Link>
        </div>
      </section>

      <section id="why-we-do" className="relative h-screen flex items-center justify-center bg-deep-blue py-16 px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gold-primary tracking-tight drop-shadow-lg">Our Commitment to Excellence</h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            We believe true construction creates lasting value — not just structures, but enduring spaces built on trust, stability, and pride. Rooted right here in Central Texas, our work is guided by integrity, purpose, and an unwavering commitment to doing things the right way, every time.
          </p>
          {/* Consider an image here related to trust, foundation, or quality materials */}
        </div>
      </section>

      <section id="services" className="relative py-20 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-gold-primary tracking-tight drop-shadow-lg">Comprehensive Services for Your Texas Home</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Custom Homes */}
            <div className="bg-deep-blue p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4 text-gold-primary">Custom Homes</h3>
              <p className="text-lg mb-6 leading-relaxed">
                 Bringing your unique vision to life. From concept to completion, we design and build custom homes in Central Texas that reflect your lifestyle, honor our Texas heritage, and stand the test of time. Experience the peace of mind that comes with unparalleled craftsmanship and dedicated service.
              </p>
              <Link href="#contact" legacyBehavior>
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Plan Your Dream Home
                </a>
              </Link>
            </div>

            {/* Service 2: Home Renovations */}
            <div className="bg-deep-blue p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4 text-gold-primary">Home Renovations</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Whether you are looking to simply update your space, completely renovate a room, or give the entire house a fresh start, we have the experience and knowledge to accomplish any project on time and on budget. We bring proven skill and honest communication to every renovation.
              </p>
              <Link href="#contact" legacyBehavior>
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Explore Renovation Ideas
                </a>
              </Link>
            </div>

            {/* Service 3: Outdoor Living */}
            <div className="bg-deep-blue p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4 text-gold-primary">Outdoor Living Spaces</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Let us design and build your next deck or patio. Whether you love to host, are a master of the grill, or just want a place for you to relax and enjoy, let us work with you to create your perfect outdoor living area, seamlessly blending with your home and Central Texas lifestyle.
              </p>
              <Link href="#contact" legacyBehavior>
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Design Your Outdoor Oasis
                </a>
              </Link>
            </div>
            
            {/* Service 4: Home Repair */}
            <div className="bg-deep-blue p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4 text-gold-primary">Reliable Home Repairs</h3>
              <p className="text-lg mb-6 leading-relaxed">
                From basic touch-ups to complex repairs, Bar Moon Contracting is here to ensure your home is always functioning at its best. We provide timely, honest, and expert solutions to keep your property in top condition.
              </p>
              <Link href="#contact" legacyBehavior>
                <a className="bg-gold-secondary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gold-primary">
                  Request a Repair Appointment
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-8 bg-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gold-primary tracking-tight drop-shadow-lg">Let's Build Your Vision</h2>
          <p className="text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Ready to discuss your custom home, renovation, or repair needs? Get in touch with us today.
          </p>
          {/* Basic form structure - actual submission would need a backend/service */}
          <div className="bg-dark-blue p-8 rounded-lg shadow-xl max-w-lg mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gold-primary">Contact Us</h3>
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-dark-neutral border-2 border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-lg" />
              <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-dark-neutral border-2 border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-lg" />
              <input type="text" placeholder="Subject" className="p-4 rounded-lg bg-dark-neutral border-2 border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-lg" />
              <textarea placeholder="Message" rows={5} className="p-4 rounded-lg bg-dark-neutral border-2 border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-lg"></textarea>
              <button type="submit" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue py-12 px-8 text-center text-gray-400 text-sm border-t-2 border-gold-secondary">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
          <div className="flex space-x-4">
            <Link href="#" legacyBehavior><a className="hover:text-gold-primary transition duration-200">Privacy Policy</a></Link>
            <Link href="#" legacyBehavior><a className="hover:text-gold-primary transition duration-200">Terms of Service</a></Link>
          </div>
          <p>© 2026 Bar Moon Contracting LLC. Powered by Next.js and your vision.</p>
          {/* Social Media Icons - Placeholder */}
          <div className="flex space-x-4 mt-4">
            {/* Add links to your social media here */}
            <a href="#" className="hover:text-gold-primary transition duration-200">FB</a>
            <a href="#" className="hover:text-gold-primary transition duration-200">TW</a>
            <a href="#" className="hover:text-gold-primary transition duration-200">IG</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
