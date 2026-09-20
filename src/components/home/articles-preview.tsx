import React from 'react';
import { articlesData } from '@/data/articles';
import { ArticleCard } from '@/components/blog/article-card';
import { SectionHeading } from '@/components/ui/section-heading';

export function ArticlesPreview() {
  return (
    <section className="py-12 sm:py-16 border-b border-neutral-800/80">
      <SectionHeading
        title="Technical Writing & Thought Leadership"
        description="Engineering articles establishing technical authority and architectural insights."
        actionText="View All Articles"
        actionHref="/blog"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articlesData.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
