import { siteConfig } from '@/config/site';
import { BreadcrumbItem, ProjectItem, ArticleItem } from '@/types/portfolio';

function getBaseUrl(): string {
  return siteConfig.url.replace(/\/$/, '');
}

export function generatePersonSchema() {
  const baseUrl = getBaseUrl();
  const { author } = siteConfig;
  const sameAs: string[] = [];

  if (author.socials.github && author.socials.github.startsWith('http')) {
    sameAs.push(author.socials.github);
  }
  if (author.socials.linkedin && author.socials.linkedin.startsWith('http')) {
    sameAs.push(author.socials.linkedin);
  }
  if (author.socials.instagram && author.socials.instagram.startsWith('http')) {
    sameAs.push(author.socials.instagram);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: author.name,
    givenName: author.givenName,
    familyName: author.familyName,
    jobTitle: author.title,
    description: author.bio,
    url: baseUrl,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    knowsAbout: author.knowsAbout,
  };
}

export function generateWebSiteSchema() {
  const baseUrl = getBaseUrl();
  const { name, description } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: name,
    description: description,
    author: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: 'en-US',
  };
}

export function generateWebPageSchema(title: string, description: string, path: string) {
  const baseUrl = getBaseUrl();
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const pageUrl = `${baseUrl}${cleanPath}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    author: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: 'en-US',
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const cleanItem = item.item.startsWith('http')
        ? item.item
        : `${baseUrl}${item.item.startsWith('/') ? item.item : `/${item.item}`}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: cleanItem,
      };
    }),
  };
}

export function generateProjectSchema(project: ProjectItem) {
  const baseUrl = getBaseUrl();
  const projectUrl = `${baseUrl}/projects/${project.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${projectUrl}/#software`,
    name: project.title,
    description: project.shortDescription,
    url: projectUrl,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    author: {
      '@id': `${baseUrl}/#person`,
    },
    codeRepository: project.githubUrl,
    keywords: project.technologies.join(', '),
  };
}

export function generateArticleSchema(article: ArticleItem) {
  const baseUrl = getBaseUrl();
  const articleUrl = `${baseUrl}/blog/${article.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}/#article`,
    headline: article.title,
    description: article.description,
    url: articleUrl,
    datePublished: article.publishedAt,
    author: {
      '@id': `${baseUrl}/#person`,
    },
    publisher: {
      '@id': `${baseUrl}/#person`,
    },
    keywords: article.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };
}
