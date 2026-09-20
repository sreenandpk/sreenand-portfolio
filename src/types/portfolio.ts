export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface PersonProfile {
  name: string;
  givenName: string;
  familyName: string;
  title: string;
  tagline: string;
  bio: string;
  location?: string;
  email?: string;
  websiteUrl: string;
  avatarUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
    phone?: string;
    phoneFormatted?: string;
  };
  knowsAbout: string[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database & Storage' | 'DevOps & Cloud' | 'AI & Machine Learning' | 'Architecture & Practices';
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  problem?: string;
  solution?: string;
  architectureDescription?: string;
  technologies: string[];
  keyDecisions?: string[];
  challenges?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  publishedAt?: string;
}

export interface ArticleItem {
  slug: string;
  title: string;
  description: string;
  content?: string;
  publishedAt: string;
  readingTimeMinutes?: number;
  tags: string[];
  canonicalUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  titleTemplate: string;
  defaultTitle: string;
  description: string;
  url: string;
  ogImage: string;
  author: PersonProfile;
  navItems: NavItem[];
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}
