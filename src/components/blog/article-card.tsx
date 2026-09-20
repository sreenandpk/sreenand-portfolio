import React from 'react';
import Link from 'next/link';
import { ArticleItem } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ArticleCardProps {
  article: ArticleItem;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="group hover:border-zinc-300 transition-all">
      <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        {article.readingTimeMinutes && (
          <span>{article.readingTimeMinutes} min read</span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
        <Link
          href={`/blog/${article.slug}`}
          className="focus:outline-none focus:ring-2 focus:ring-emerald-600 rounded"
        >
          {article.title}
        </Link>
      </h3>

      <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
        {article.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {article.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}
