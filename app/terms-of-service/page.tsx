// app/terms-of-service/page.tsx
'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="bg-dark-blue text-light-neutral font-sans antialiased">
      <section className="relative py-16 px-8 bg-deep-blue text-center">
        <h1 className="text-5xl font-bold text-gold-primary">Terms of Service</h1>
        <p className="mt-2 text-lg text-white/80">Overview of terms for using the Bar Moon Contracting site</p>
      </section>
      <section className="py-16 px-8 bg-dark-blue">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert text-white/90">
          <p>These Terms govern the use of the website. By using this site, you agree to these terms...</p>
          <p>Content is provided as-is; consult with us for detailed agreements.</p>
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
