import { ExperienceItem } from '@/types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-fullstack-ai-engineer',
    role: 'Full Stack & AI Engineer',
    company: 'Software Engineering & AI Solutions',
    location: 'Remote',
    startDate: '2023-01',
    endDate: 'Present',
    description:
      'Designing and developing scalable full-stack web applications, microservices backends, and Generative AI systems.',
    technologies: [
      'Python',
      'FastAPI',
      'Django',
      'React',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'RAG',
      'LLMs',
    ],
    highlights: [
      'Architected high-throughput REST APIs and async worker pipelines using Python, FastAPI, and Redis queues.',
      'Engineered Retrieval-Augmented Generation (RAG) vector search workflows using PostgreSQL (pgvector) and LLM frameworks.',
      'Built modern, accessible, responsive React & Next.js user interfaces integrated with backend microservices.',
      'Configured containerized application deployments using Docker and Kubernetes.',
    ],
  },
  {
    id: 'exp-backend-developer',
    role: 'Backend Developer',
    company: 'Web Application Development',
    location: 'Remote',
    startDate: '2021-06',
    endDate: '2022-12',
    description:
      'Engineered relational database models, server-side REST APIs, and automated CI/CD deployment workflows.',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
      'Testing',
      'CI/CD',
    ],
    highlights: [
      'Developed core backend services in Django and PostgreSQL with high test coverage and automated linting.',
      'Optimized database query performance, indexing strategies, and multi-tier Redis caching mechanisms.',
      'Setup automated CI/CD pipelines for deployment validation, automated unit testing, and code quality enforcement.',
    ],
  },
];
