import React from 'react';

type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `https://www.barmooncontracting.com${item.href}` } : {})
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex space-x-2 text-sm breadcrumbs">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              {item.href ? (
                <a href={item.href} className="text-primary hover:underline">{item.name}</a>
              ) : (
                <span className="text-gray-700">{item.name}</span>
              )}
              {i < items.length - 1 && <span className="mx-1">/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
