import { posts } from '../posts';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title }
        ]} />
        <article className="blog-post">
          <header className="mb-6 pb-4 border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary">{post.title}</h1>
            <div className="text-xs text-gray-500 mb-2">By Bar Moon Contracting | Published: {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            {/* Featured image could go here */}
          </header>
          <div className="blog-post-content prose prose-gold max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <footer className="blog-post-footer mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500">
            <strong>Categories:</strong> {post.categories.map((cat, i) => (
              <span key={cat}>
                {i > 0 && ', '}
                <a href="#" className="text-gold-primary hover:underline">{cat}</a>
              </span>
            ))}
          </footer>
        </article>
      </main>
  );
}
