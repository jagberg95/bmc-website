// app/contact/page.tsx
'use client';

import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased pt-20">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden py-16 px-8 bg-deep-blue">
        <div className="absolute inset-0">
           {/* Placeholder for contact hero image */}
           <Image
            src="/images/contact-hero.jpg" 
            alt="Contact Bar Moon Contracting"
            fill
            quality={90}
            priority
            className="opacity-50 object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gold-primary tracking-tight drop-shadow-lg">
            Let's Connect
          </h1>
          <h2 className="text-2xl lg:text-3xl mb-8 text-gold-secondary font-medium tracking-wide drop-shadow-sm">
            Start Your Project with Bar Moon Contracting
          </h2>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-8 bg-dark-blue">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gold-primary">Get In Touch</h3>
            <p className="text-lg mb-8 leading-relaxed">
              We're here to answer your questions and discuss your construction needs. Whether you're planning a custom home, a renovation, or need reliable repairs, reach out to us today.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gold-secondary mb-2">Service Areas</h4>
                <p className="text-lg">Central Texas and surrounding communities.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gold-secondary mb-2">Email</h4>
                <p className="text-lg">
                  <a href="mailto:barmooncontracting@protonmail.com" className="hover:text-gold-primary transition-colors">
                    barmooncontracting@protonmail.com
                  </a>
                </p>
              </div>

              {/* Add Phone Number if available */}
              {/* 
              <div>
                <h4 className="text-xl font-bold text-gold-secondary mb-2">Phone</h4>
                <p className="text-lg">
                  <a href="tel:+15555555555" className="hover:text-gold-primary transition-colors">
                    (555) 555-5555
                  </a>
                </p>
              </div>
              */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-deep-blue p-8 rounded-lg shadow-xl border border-gold-secondary">
            <h3 className="text-2xl font-bold mb-6 text-gold-primary">Send Us a Message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-gold-secondary">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full p-4 rounded-lg bg-dark-blue border border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-light-neutral" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-gold-secondary">Email</label>
                <input type="email" id="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-dark-blue border border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-light-neutral" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold mb-2 text-gold-secondary">Phone (Optional)</label>
                <input type="tel" id="phone" placeholder="Your Phone Number" className="w-full p-4 rounded-lg bg-dark-blue border border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-light-neutral" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gold-secondary">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about your project..." className="w-full p-4 rounded-lg bg-dark-blue border border-gold-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary text-light-neutral"></textarea>
              </div>
              <button type="submit" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl w-full">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
