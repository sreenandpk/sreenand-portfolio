import { ArticleItem } from '@/types/portfolio';

export const articlesData: ArticleItem[] = [
  {
    slug: 'building-production-rag-systems-fastapi-pgvector',
    title: 'Production RAG with FastAPI & pgvector',
    description:
      'A deep dive into chunking strategies, dense vector indexing, hybrid retrieval with BM25, and semantic Redis caching for low-latency AI applications.',
    publishedAt: '2025-12-10',
    readingTimeMinutes: 8,
    tags: ['Python', 'FastAPI', 'RAG', 'PostgreSQL', 'AI Engineering'],
  },
  {
    slug: 'scaling-django-microservices-redis-docker',
    title: 'Scaling Django Microservices with Redis & Docker',
    description:
      'Best practices for decoupling heavy background processing, configuring database connection pools, and containerizing Django applications.',
    publishedAt: '2025-09-18',
    readingTimeMinutes: 10,
    tags: ['Python', 'Django', 'Microservices', 'Redis', 'Docker'],
  },
  {
    slug: 'optimizing-nextjs-app-router-core-web-vitals',
    title: 'Next.js App Router & Core Web Vitals',
    description:
      'How to leverage React Server Components, JSON-LD entity graphs, and zero-JS interactive patterns to achieve maximum performance and search visibility.',
    publishedAt: '2026-01-25',
    readingTimeMinutes: 6,
    tags: ['Next.js', 'React', 'TypeScript', 'SEO', 'GEO'],
  },
];
