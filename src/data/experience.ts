import { ExperienceItem } from '@/types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-bridgeon-solutions',
    role: 'Full Stack Developer',
    company: 'Bridgeon Solutions',
    location: 'Kerala, India',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Joined Bridgeon Solutions in 2025 and currently work as a Full Stack Developer, building scalable web applications, microservices backends, and AI/LLM integrations.',
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
      'Kubernetes',
      'AWS',
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
];
