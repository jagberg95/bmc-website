'use client';

import Link from 'next/link';

export default function OurHeartPage() {
  return (
    <main className="bg-dark-blue text-light-neutral min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gold-primary mb-6">Our Heart, Our Passion</h1>
      <p className="mb-6 max-w-2xl">This is a placeholder page for the Our Heart, Our Passion section. Add your story, values, and mission here to inspire your visitors and share what drives Bar Moon Contracting.</p>
      <Link href="/" className="inline-block bg-gold-primary text-dark-blue font-bold py-3 px-6 rounded-lg shadow-md">Back to Home</Link>
    </main>
  );
}
