'use client';
import Link from 'next/link';

export default function ServicesPage() {
  const items = [
    { slug: 'custom-homes', title: 'Custom Homes' },
    { slug: 'home-renovations', title: 'Home Renovations' },
    { slug: 'outdoor-living', title: 'Outdoor Living' },
    { slug: 'home-repairs', title: 'Home Repairs' },
  ];
  return (
    <main className="bg-dark-blue text-light-neutral min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gold-primary mb-6">Services</h1>
      <p className="mb-6">Explore our service categories. Click to learn more about each offering.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <li key={it.slug} className="bg-deep-blue border border-gold-secondary rounded-lg p-6">
            <Link href={`/services/${it.slug}`} className="font-semibold text-white hover:text-gold-primary">{it.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
