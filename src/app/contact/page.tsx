import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = constructMetadata({
  title: 'Contact Sreenand P K',
  description:
    'Direct contact channels, phone, and professional profile links for Sreenand P K - Full Stack Developer & AI / Generative AI Engineer.',
  path: '/contact',
});

export default function ContactPage() {
  const { author } = siteConfig;
  const webPageSchema = generateWebPageSchema('Contact Sreenand P K', metadata.description as string, '/contact');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Contact', item: '/contact' },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Get In Touch
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-100 sm:text-5xl">
            Contact {author.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Interested in discussing engineering opportunities, backend architectural design, or Generative AI / RAG system development?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <Card className="space-y-4 border-emerald-500/30">
            <h2 className="text-xl font-bold text-neutral-100">Direct Profiles & Links</h2>
            <p className="text-sm text-neutral-300">
              Connect through social channels or explore public repositories:
            </p>
            <div className="flex flex-col gap-3 pt-2">
              {author.socials.github && (
                <Button href={author.socials.github} variant="outline" className="justify-start font-mono text-xs sm:text-sm">
                  GitHub: {author.socials.github}
                </Button>
              )}
              {author.socials.linkedin && (
                <Button href={author.socials.linkedin} variant="outline" className="justify-start font-mono text-xs sm:text-sm">
                  LinkedIn Profile
                </Button>
              )}
              {author.socials.instagram && (
                <Button href={author.socials.instagram} variant="outline" className="justify-start font-mono text-xs sm:text-sm">
                  Instagram Profile
                </Button>
              )}
            </div>
          </Card>

          <Card className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-100">Direct Contact</h2>
            <p className="text-sm text-neutral-300">
              {author.title} experienced in Python, Django, FastAPI, React, Next.js, PostgreSQL, Docker, Kubernetes, AWS, and RAG systems.
            </p>

            {author.socials.phone && (
              <div className="pt-2">
                <a
                  href={`tel:${author.socials.phone}`}
                  className="inline-flex items-center space-x-2 font-mono text-sm font-semibold text-emerald-400 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Phone: {author.socials.phoneFormatted || author.socials.phone}</span>
                </a>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
