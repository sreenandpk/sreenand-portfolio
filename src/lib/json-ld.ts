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

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Sreenand',
    givenName: 'Sreenand',
    jobTitle: author.title,
    description: author.bio,
    url: baseUrl,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    knowsAbout: author.knowsAbout,
    homeLocation: {
      '@type': 'Place',
      name: 'Iritty, Kannur, Kerala, India',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Bridgeon Solutions',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Vidya Vikas College, Mysore',
    },
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
  const normalizedPath = path && path !== '/' ? (path.startsWith('/') ? path : `/${path}`).replace(/\/$/, '') : '';
  const pageUrl = normalizedPath ? `${baseUrl}${normalizedPath}` : `${baseUrl}/`;
  const webpageId = normalizedPath ? `${baseUrl}${normalizedPath}#webpage` : `${baseUrl}/#webpage`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': webpageId,
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
      let cleanItem: string;
      if (item.item.startsWith('http')) {
        cleanItem = item.item;
      } else if (item.item === '/' || item.item === '') {
        cleanItem = `${baseUrl}/`;
      } else {
        const p = item.item.startsWith('/') ? item.item : `/${item.item}`;
        cleanItem = `${baseUrl}${p.replace(/\/$/, '')}`;
      }

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
    '@id': `${projectUrl}#software`,
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
    '@id': `${articleUrl}#article`,
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
