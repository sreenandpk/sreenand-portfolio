import { SiteConfig } from '@/types/portfolio';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sreenand-pk-portfolio.vercel.app'
).replace(/\/$/, '');

export const siteConfig: SiteConfig = {
  name: 'Sreenand',
  defaultTitle: 'Sreenand | Full Stack & AI / Generative AI Engineer',
  titleTemplate: '%s | Sreenand',
  description:
    'Portfolio of Sreenand - Full Stack & AI Engineer specializing in Python, Django, FastAPI, React, Next.js, TypeScript, LLMs, and cloud architecture.',
  url: siteUrl,
  ogImage: `${siteUrl}/og-image.jpg`,
  author: {
    name: 'Sreenand',
    givenName: 'Sreenand',
    familyName: '',
    title: 'Full Stack Developer & AI / Generative AI Engineer',
    tagline: 'Engineering robust full-stack applications and Generative AI systems.',
    bio: 'Full Stack Developer at Bridgeon Solutions (joined 2025). From Iritty, Kannur, Kerala, India, holding a BCA from Vidya Vikas College, Mysore (2025).',
    location: 'Iritty, Kannur, Kerala, India',
    company: {
      name: 'Bridgeon Solutions',
      role: 'Full Stack Developer',
      joinedYear: 2025,
    },
    education: {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Vidya Vikas College, Mysore',
      graduationYear: 2025,
      location: 'Mysore',
    },
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
