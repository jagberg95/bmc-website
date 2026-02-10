// app/privacy-policy/page.tsx
'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">
      <section className="relative py-16 px-8 bg-deep-blue text-center">
        <h1 className="text-5xl font-bold text-gold-primary">Privacy Policy</h1>
        <p className="mt-4 text-lg text-white/80">Overview of data collection and usage for Bar Moon Contracting</p>
      </section>
      <section className="py-16 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert text-white/90">
          <p>This Privacy Policy describes how Bar Moon Contracting LLC collects, uses, stores, and protects personal information... (content provided externally). This placeholder ensures page structure is ready for final content.</p>
          <p>For any requests regarding your data, contact us through the form on the contact page.</p>
        </div>
      </section>
      <section className="py-8 px-8 text-center">
        <Link href="/" legacyBehavior>
          <a className="inline-block bg-gold-primary text-dark-blue font-bold py-3 px-6 rounded-lg">Back to Home</a>
        </Link>
      </section>
    </main>
  );
}
