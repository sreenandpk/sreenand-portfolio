import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = constructMetadata({
  title: 'About Sreenand P K',
  description:
    'Full Stack Developer & AI / Generative AI Engineer specializing in Python, Django, FastAPI, React, Next.js, TypeScript, PostgreSQL, Docker, and RAG systems.',
  path: '/about',
});

export default function AboutPage() {
  const { author } = siteConfig;
  const webPageSchema = generateWebPageSchema('About Sreenand P K', metadata.description as string, '/about');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about' },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Professional Profile
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-100 sm:text-5xl">
            About {author.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-emerald-400 font-mono">
            {author.title}
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4 text-neutral-300 leading-relaxed text-base sm:text-lg">
          <p>
            I am a software engineer focused on building robust full-stack applications, scalable backend microservices, and practical AI systems. My background spans the entire software development lifecycle—from relational data modeling and API architecture to responsive user interfaces and cloud deployments.
          </p>
          <p>
            In my work with Generative AI and Large Language Models, I specialize in Retrieval-Augmented Generation (RAG) architectures, dense vector search with PostgreSQL (pgvector), semantic caching via Redis, and streaming responses for interactive applications.
          </p>
        </section>

        {/* Core Competencies Matrix */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-100">Engineering Philosophy & Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-bold text-neutral-100 text-lg">Backend Precision</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Designing explicit database schemas, async request handling in FastAPI/Django, and asynchronous queue processing with Redis.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-neutral-100 text-lg">Machine Readability & Performance</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Building web applications engineered for strict Core Web Vitals performance, machine indexability (GEO/AEO), and semantic accessibility.
              </p>
            </Card>
          </div>
        </section>

        {/* Career & Contact Links */}
        <section className="border-t border-neutral-800 pt-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-neutral-100">Looking to collaborate?</h3>
            <p className="text-sm text-neutral-400">Review my technical projects or contact me directly.</p>
          </div>
          <div className="flex gap-3">
            <Button href="/projects" variant="primary">
              Explore Projects
            </Button>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
