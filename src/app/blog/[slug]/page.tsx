import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { articlesData } from '@/data/articles';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/badge';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return constructMetadata({ title: 'Article Not Found' });

  return constructMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: article.title, item: `/blog/${article.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-neutral-400">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-200 font-semibold truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="border-b border-neutral-800 pb-8">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            {article.readingTimeMinutes && (
              <span>{article.readingTimeMinutes} min read</span>
            )}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-100 sm:text-4xl leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
            {article.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800/60">
            <div className="text-xs font-mono text-neutral-400">
              Author:{' '}
              <span className="text-emerald-400 font-semibold">{siteConfig.name}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        </header>

        {/* Article Body Placeholder Container for future MDX */}
        <div className="mt-8 space-y-6 text-neutral-300 leading-relaxed text-base">
          <p className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 text-sm text-neutral-400 italic">
            Article body pre-rendered via Server Component. MDX rendering pipeline enabled.
          </p>
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex items-center justify-between">
          <Link
            href="/blog"
            className="font-mono text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            &larr; Back to Articles
          </Link>
        </div>
      </article>
    </>
  );
}
