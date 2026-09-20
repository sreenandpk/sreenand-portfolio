import { ArticleItem } from '@/types/portfolio';

export const articlesData: ArticleItem[] = [
  {
    slug: 'building-production-rag-systems-fastapi-pgvector',
    title: 'Architecting Production-Grade RAG Systems with FastAPI and pgvector',
    description:
      'A deep dive into chunking strategies, dense vector indexing, hybrid retrieval with BM25, and semantic Redis caching for low-latency AI applications.',
    publishedAt: '2025-12-10',
    readingTimeMinutes: 8,
    tags: ['Python', 'FastAPI', 'RAG', 'PostgreSQL', 'AI Engineering'],
  },
  {
    slug: 'scaling-django-microservices-redis-docker',
    title: 'Scaling Django Microservices with Async Redis Queues and Docker',
    description:
      'Best practices for decoupling heavy background processing, configuring database connection pools, and containerizing Django applications.',
    publishedAt: '2025-09-18',
    readingTimeMinutes: 10,
    tags: ['Python', 'Django', 'Microservices', 'Redis', 'Docker'],
  },
  {
    slug: 'optimizing-nextjs-app-router-core-web-vitals',
    title: 'Optimizing Next.js App Router for Core Web Vitals and Machine Search (GEO)',
    description:
      'How to leverage React Server Components, JSON-LD entity graphs, and zero-JS interactive patterns to achieve maximum performance and search visibility.',
    publishedAt: '2026-01-25',
    readingTimeMinutes: 6,
    tags: ['Next.js', 'React', 'TypeScript', 'SEO', 'GEO'],
  },
];
