import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = constructMetadata({
  title: 'About Sreenand',
  description:
    'Full Stack Developer & AI / Generative AI Engineer profile for Sreenand, specializing in Python, Django, FastAPI, React, Next.js, and RAG systems.',
  path: '/about',
});

export default function AboutPage() {
  const { author } = siteConfig;
  const webPageSchema = generateWebPageSchema('About Sreenand', metadata.description as string, '/about');
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
            Sreenand is a Full Stack Developer and AI / Generative AI Engineer. Joined Bridgeon Solutions in 2025 and currently works as a Full Stack Developer, working across full-stack web development, backend systems, cloud infrastructure, microservices, and AI/LLM applications.
          </p>
          <p>
            From Iritty, Kannur, Kerala, India. Earned a Bachelor of Computer Applications (BCA) degree from Vidya Vikas College, Mysore in 2025.
          </p>
          <p>
            In Generative AI and LLM engineering, Sreenand specializes in Retrieval-Augmented Generation (RAG) architectures, dense vector search with PostgreSQL (pgvector), semantic caching via Redis, and streaming responses for interactive applications.
          </p>
        </section>

        {/* Profile Details Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h2 className="text-xs font-mono font-semibold uppercase text-emerald-400">Current Role</h2>
            <p className="mt-2 text-lg font-bold text-neutral-100">{author.company?.role}</p>
            <p className="text-sm font-mono text-neutral-300">{author.company?.name}</p>
            <p className="mt-2 text-xs text-neutral-400">Joined {author.company?.joinedYear} — Present</p>
          </Card>

          <Card>
            <h2 className="text-xs font-mono font-semibold uppercase text-emerald-400">Education</h2>
            <p className="mt-2 text-lg font-bold text-neutral-100">{author.education?.degree}</p>
            <p className="text-sm font-mono text-neutral-300">{author.education?.institution}</p>
            <p className="mt-2 text-xs text-neutral-400">Graduated {author.education?.graduationYear}</p>
          </Card>

          <Card>
            <h2 className="text-xs font-mono font-semibold uppercase text-emerald-400">Hometown</h2>
            <p className="mt-2 text-lg font-bold text-neutral-100">Iritty, Kannur</p>
            <p className="text-sm font-mono text-neutral-300">Kerala, India</p>
            <p className="mt-2 text-xs text-neutral-400">From Iritty, Kannur, Kerala, India</p>
          </Card>
        </section>

        {/* Engineering Philosophy & Approach */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-100">Engineering Approach & Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-bold text-neutral-100 text-lg">Backend & Cloud Systems</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Building asynchronous REST APIs, microservices backends, and containerized deployments with Python, Django, FastAPI, PostgreSQL, Redis, Docker, Kubernetes, AWS, and Azure.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-neutral-100 text-lg">Frontend & AI Engineering</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Crafting modern user interfaces in React, Next.js, and TypeScript alongside Retrieval-Augmented Generation (RAG) vector retrieval systems and LLM applications.
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
