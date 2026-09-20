import { SiteConfig } from '@/types/portfolio';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sreenand-pk-portfolio.vercel.app'
).replace(/\/$/, '');

export const siteConfig: SiteConfig = {
  name: 'Sreenand P K',
  defaultTitle: 'Sreenand P K | Full Stack & AI / Generative AI Engineer',
  titleTemplate: '%s | Sreenand P K',
  description:
    'Portfolio of Sreenand P K - Full Stack & AI Engineer specializing in Python, Django, FastAPI, React, Next.js, TypeScript, LLMs, and cloud architecture.',
  url: siteUrl,
  ogImage: `${siteUrl}/og-image.jpg`,
  author: {
    name: 'Sreenand P K',
    givenName: 'Sreenand',
    familyName: 'P K',
    title: 'Full Stack Developer & AI / Generative AI Engineer',
    tagline: 'Engineering robust full-stack applications and Generative AI systems.',
    bio: 'Software engineer experienced across Python, Web Development, Cloud Services, Microservices, and AI/LLM applications.',
    websiteUrl: siteUrl,
    socials: {
      github: 'https://github.com/sreenandpk',
      linkedin: 'https://www.linkedin.com/in/sreenand-p-k-3842b936b/',
      phone: '+919539379577',
      phoneFormatted: '+91 95393 79577',
    },
    knowsAbout: [
      'Python',
      'Django',
      'FastAPI',
      'React',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure',
      'Microservices',
      'Software Testing',
      'CI/CD',
      'Retrieval-Augmented Generation (RAG)',
      'LLM Applications',
      'AI Engineering',
    ],
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Skills', href: '/skills' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};
