import React from 'react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-800/80 bg-neutral-950 py-8 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm">
          © {currentYear} {siteConfig.name}. Engineered for performance, SEO, AEO & GEO.
        </p>
        <div className="flex space-x-6 text-sm">
          {siteConfig.author.socials.github && (
            <a
              href={siteConfig.author.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
            >
              GitHub
            </a>
          )}
          {siteConfig.author.socials.linkedin && (
            <a
              href={siteConfig.author.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
