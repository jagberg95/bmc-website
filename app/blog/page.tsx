import { posts } from './posts';
import Link from 'next/link';
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Blog' }
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Insights from Bar Moon Contracting</h1>
        <div className="mb-8 p-4 border-l-4 border-gold-primary bg-gray-50">
          <p>Explore the latest industry news, project spotlights, and helpful advice from the Bar Moon Contracting team. Discover how our Texas craftsmanship, built on integrity, creates lasting value for your home.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog List */}
          <div className="flex-1">
            <ul className="blog-post-list">
              {posts.map(post => (
                <li key={post.slug} className="mb-8 pb-6 border-b border-gray-200">
                  <article>
                    <h3 className="text-xl font-semibold mb-1">
                      <Link href={`/blog/${post.slug}`} className="text-gold-primary hover:underline">{post.title}</Link>
                    </h3>
                    <div className="text-xs text-gray-500 mb-2">By Bar Moon Contracting | Published: {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <p className="mb-2">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="text-primary hover:underline text-sm font-medium">Read More &rarr;</Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
          {/* Sidebar: Recent Posts */}
          <aside className="w-full lg:w-72">
            <div className="recent-posts-widget bg-gray-100 rounded-lg p-5">
              <h4 className="font-bold mb-3 text-gray-700">Recent Blog Posts</h4>
              <ul>
                {posts.slice(0, 5).map(post => (
                  <li key={post.slug} className="mb-2">
                    <Link href={`/blog/${post.slug}`} className="text-gold-primary hover:underline text-sm">{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
  );
}
