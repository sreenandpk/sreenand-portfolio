import { Skill } from '@/types/portfolio';

export const skillsData: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', featured: true },
  { name: 'TypeScript', category: 'Languages', featured: true },

  // Backend
  { name: 'Django', category: 'Backend', featured: true },
  { name: 'FastAPI', category: 'Backend', featured: true },
  { name: 'Microservices', category: 'Backend', featured: true },

  // Frontend
  { name: 'React', category: 'Frontend', featured: true },
  { name: 'Next.js', category: 'Frontend', featured: true },

  // Database & Storage
  { name: 'PostgreSQL', category: 'Database & Storage', featured: true },
  { name: 'Redis', category: 'Database & Storage', featured: true },

  // DevOps & Cloud
  { name: 'Docker', category: 'DevOps & Cloud', featured: true },
  { name: 'Kubernetes', category: 'DevOps & Cloud', featured: true },
  { name: 'AWS', category: 'DevOps & Cloud', featured: true },
  { name: 'Azure', category: 'DevOps & Cloud', featured: true },

  // AI & Machine Learning
  { name: 'AI Engineering', category: 'AI & Machine Learning', featured: true },
  { name: 'LLM Applications', category: 'AI & Machine Learning', featured: true },
  { name: 'RAG (Retrieval-Augmented Generation)', category: 'AI & Machine Learning', featured: true },

  // Architecture & Practices
  { name: 'Testing', category: 'Architecture & Practices', featured: true },
  { name: 'CI/CD', category: 'Architecture & Practices', featured: true },
];
