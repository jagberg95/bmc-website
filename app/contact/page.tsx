'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState('');

  useEffect(() => {
    const step = searchParams.get('step');
    const service = searchParams.get('service');
    if (step) {
      setSubject(`Question about Process Step ${step}`);
    } else if (service) {
      setSubject(`Inquiry about ${service.replace('-', ' ')}`);
    }
  }, [searchParams]);

  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent (mock)!'); }}>
      {/* ... (inputs: name, email, phone, subject, message) ... */}
      <button type="submit" className="bg-gold-primary hover:bg-gold-secondary text-dark-blue font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl w-full">
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">
        {/* ... (hero section code) ... */}
      <section className="py-20 px-8 bg-dark-blue">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gold-primary">Get In Touch</h3>
            {/* ... (contact info block) ... */}
          </div>
          {/* Contact Form */}
          <div className="bg-deep-blue p-8 rounded-lg shadow-xl border border-gold-secondary">
            <h3 className="text-2xl font-bold mb-6 text-gold-primary">Send Us a Message</h3>
            <Suspense fallback={<div className="text-white">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
