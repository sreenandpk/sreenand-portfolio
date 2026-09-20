import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = '',
  image = siteConfig.ogImage,
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const normalizedPath = path && path !== '/' ? (path.startsWith('/') ? path : `/${path}`).replace(/\/$/, '') : '';
  const canonicalUrl = `${baseUrl}${normalizedPath || '/'}`;

  let fullTitle: string;
  if (!title) {
    fullTitle = siteConfig.defaultTitle;
  } else if (title.includes(siteConfig.name)) {
    fullTitle = title;
  } else {
    fullTitle = `${title} | ${siteConfig.name}`;
  }

  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    title: fullTitle,
    description: description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: [imageUrl],
      creator: '@sreenandpk',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/icon.svg',
      shortcut: '/favicon.ico',
      apple: '/icon.svg',
    },
    verification: {
      google: 'mmXoNyCkDueX-q2tihDmZVClL22y_OTVh6gD9h2qMHI',
    },
  };
}
