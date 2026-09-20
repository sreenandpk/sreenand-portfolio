import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { articlesData } from '@/data/articles';
import { ArticleCard } from '@/components/blog/article-card';

export const metadata = constructMetadata({
  title: 'Engineering Writing & Thought Leadership',
  description:
    'Technical articles, architectural deep dives, and software guides written by Sreenand on Full Stack Development, Microservices, and AI Engineering.',
  path: '/blog',
});

export default function BlogPage() {
  const webPageSchema = generateWebPageSchema(
    'Engineering Writing & Thought Leadership',
    metadata.description as string,
    '/blog'
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Publications
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Engineering Articles & Writing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
            Technical writing on RAG system architecture, Python microservices, database optimizations, and Next.js performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {articlesData.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
