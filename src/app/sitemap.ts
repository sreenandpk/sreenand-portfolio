import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { projectsData } from '@/data/projects';
import { articlesData } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/experience',
    '/skills',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: '2026-02-15',
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.publishedAt || '2026-02-15',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articleRoutes = articlesData.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
