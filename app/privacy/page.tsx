'use client';
import Link from 'next/link';

export default function PrivacyPage(){
  return (
    <main className="bg-primary text-white font-sans antialiased min-h-screen">
      <section className="py-20 px-8 bg-primary text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2">Privacy Policy</h1>
        <p className="text-gray-300">This is a placeholder privacy policy.</p>
      </section>
      <section className="py-16 px-8 max-w-4xl mx-auto prose prose-lg prose-invert">
        <p>This document outlines how Bar Moon Contracting LLC collects, uses, and protects your data. Placeholder content for the time being.</p>
      </section>
      <section className="py-8 px-8 text-center">
        <Link href="/" className="inline-block bg-gold-primary text-dark-blue font-bold py-3 px-6 rounded-lg">Back to Home</Link>
      </section>
    </main>
  );
}
