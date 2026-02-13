'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="bg-primary text-white font-sans antialiased min-h-screen">
      <section className="py-20 px-8 bg-primary text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2">Terms of Service</h1>
        <p className="text-gray-300">Effective Date: February 12, 2026</p>
      </section>
      <section className="py-16 px-8 max-w-4xl mx-auto prose prose-lg prose-invert">
        <h2 className="text-accent">1. Acceptance of Terms</h2>
        <p>By accessing or using the Bar Moon Contracting LLC website (&quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Site.</p>
        {/* ... (rest of plain text content) ... */}
        <p className="mt-12 text-sm text-gray-400">&copy; 2026 Bar Moon Contracting LLC. All rights reserved.</p>
      </section>
      <section className="py-8 px-8 text-center">
        <Link href="/" className="inline-block bg-accent hover:bg-gold text-primary font-bold py-3 px-6 rounded-lg transition-colors">
          Back to Home
        </Link>
      </section>
    </main>
  );
}
