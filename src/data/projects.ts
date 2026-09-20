import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    slug: 'rag-knowledge-retrieval-engine',
    title: 'RAG Knowledge Retrieval Engine',
    shortDescription:
      'High-throughput Retrieval-Augmented Generation (RAG) system engineered for semantic document querying and LLM contextual grounding.',
    fullDescription:
      'Designed and implemented an enterprise-grade Retrieval-Augmented Generation (RAG) backend engine capable of ingesting heterogeneous technical documentation, generating semantic embeddings, performing hybrid vector searches, and augmenting LLM response accuracy.',
    problem:
      'Large technical knowledge bases suffer from low accuracy and slow query times when relying solely on traditional keyword search or vanilla LLM prompting, leading to contextual hallucinations.',
    solution:
      'Built a modular Python/FastAPI microservice leveraging pgvector in PostgreSQL for vector storage, Redis for semantic response caching, and a dense-sparse hybrid retriever for low-latency document synthesis.',
    architectureDescription:
      'The architecture comprises a Document Ingestion Pipeline (chunking & token normalization), an Embedding Generator, a Dual Retriever (Dense Vector Similarity + BM25 Sparse Keyword Matching), a Re-ranking Pipeline, and a Streaming FastAPI Response Gateway.',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'Docker',
      'RAG',
      'LLM Applications',
      'AI Engineering',
    ],
    keyDecisions: [
      'Selected pgvector over separate vector databases to reduce operational complexity and enable unified ACID transactional guarantees.',
      'Implemented Redis semantic cache to bypass LLM inference latency for recurring queries, achieving sub-50ms response times for cached questions.',
      'Utilized chunk overlap strategies and hybrid reciprocal rank fusion (RRF) to optimize retrieval context precision.',
    ],
    challenges: [
      'Managing embedding generation memory footprints during parallel document ingestion streams.',
      'Mitigating retrieval noise across dense document clusters without degrading retrieval recall.',
    ],
    githubUrl: 'https://github.com/sreenandpk',
    featured: true,
    publishedAt: '2025-11-15',
  },
  {
    slug: 'event-driven-microservices-platform',
    title: 'Event-Driven Microservices Platform',
    shortDescription:
      'Scalable backend system built with Python, Django, FastAPI, Redis queue workers, and containerized deployment on Kubernetes.',
    fullDescription:
      'Engineered a distributed microservices platform featuring async task queues, event streaming, isolated database schemas per service, and automated CI/CD deployment pipelines.',
    problem:
      'Monolithic monolithic backends face performance bottlenecks under heavy peak traffic, impeding deployment frequency and resource isolation.',
    solution:
      'Decomposed monolithic business domains into decoupled Django and FastAPI microservices communicating asynchronously via Redis pub/sub and RabbitMQ messaging.',
    architectureDescription:
      'Services are isolated within Docker containers orchestrated by Kubernetes. PostgreSQL serves as the relational data store with read-replicas, while Redis manages session persistence and distributed locks.',
    technologies: [
      'Python',
      'Django',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'Microservices',
      'CI/CD',
    ],
    keyDecisions: [
      'Implemented API Gateway pattern for unified authentication, rate limiting, and request routing across microservices.',
      'Adopted database-per-service pattern with eventual consistency via event publishing.',
    ],
    challenges: [
      'Handling distributed transactions across microservice boundaries cleanly using saga execution patterns.',
    ],
    githubUrl: 'https://github.com/sreenandpk',
    featured: true,
    publishedAt: '2025-08-20',
  },
  {
    slug: 'nextjs-seo-geo-portfolio-engine',
    title: 'SEO/AEO/GEO High-Performance Web Engine',
    shortDescription:
      'Modern frontend web application engineered with Next.js App Router, React Server Components, TypeScript, and JSON-LD entity graph schemas.',
    fullDescription:
      'A production-grade web application engineered for maximum Core Web Vitals score, machine readability for AI answer engines (AEO/GEO), and zero unnecessary client-side JavaScript overhead.',
    problem:
      'Conventional client-rendered web applications suffer from slow initial render (LCP), poor search indexability, and lack machine-understandable structured metadata for Generative Search engines.',
    solution:
      'Implemented a React Server Components (RSC) architecture with centralized site metadata, structured JSON-LD entity graphs (Person, WebSite, SoftwareApplication, BlogPosting), and semantic HTML layout.',
    architectureDescription:
      'Built using Next.js 16 App Router, TypeScript strict typing, Tailwind CSS v4, dynamic sitemap generation, dynamic robots.txt, and zero heavy external animation dependencies.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Testing',
      'CI/CD',
    ],
    keyDecisions: [
      'Leveraged 100% Server Components for data-heavy pages to deliver static HTML pre-rendering with zero runtime overhead.',
      'Centralized identity and project datasets to decouple UI presentation from underlying content schema.',
    ],
    challenges: [
      'Balancing rich visual design aesthetics with strict Core Web Vitals performance thresholds.',
    ],
    githubUrl: 'https://github.com/sreenandpk',
    featured: true,
    publishedAt: '2026-02-10',
  },
];
