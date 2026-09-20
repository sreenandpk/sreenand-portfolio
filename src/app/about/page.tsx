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
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Professional Profile
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            About {author.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-emerald-700 font-mono">
            {author.title}
          </p>
        </div>

        {/* Factual Profile Summary */}
        <section className="space-y-4 text-zinc-700 leading-relaxed text-base sm:text-lg border-l-2 border-emerald-600 pl-4 py-1 bg-white rounded-r shadow-xs">
          <p>
            Sreenand is a Full Stack Developer and AI / Generative AI Engineer from Iritty, Kannur, Kerala, India. He graduated with a Bachelor of Computer Applications from Vidya Vikas College, Mysore in 2025 and joined Bridgeon Solutions in 2025 as a Full Stack Developer. His engineering work spans Python, Django, FastAPI, React, Next.js, PostgreSQL, Redis, Docker, Kubernetes, Azure, microservices, RAG, LLM applications, testing, CI/CD, and observability.
          </p>
        </section>

        {/* Profile Identity & Credentials Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h2 className="text-xs font-mono font-semibold uppercase text-emerald-700">Current Role</h2>
            <p className="mt-2 text-lg font-bold text-zinc-900">{author.company?.role}</p>
            <p className="text-sm font-mono text-zinc-700">{author.company?.name}</p>
            <p className="mt-2 text-xs text-zinc-500">Joined {author.company?.joinedYear} — Present</p>
          </Card>

          <Card>
            <h2 className="text-xs font-mono font-semibold uppercase text-emerald-700">Education</h2>
            <p className="mt-2 text-lg font-bold text-zinc-900">{author.education?.degree}</p>
            <p className="text-sm font-mono text-zinc-700">{author.education?.institution}</p>
            <p className="mt-2 text-xs text-zinc-500">Graduated {author.education?.graduationYear}</p>
          </Card>

          <Card>
            <h2 className="text-xs font-mono font-semibold uppercase text-emerald-700">Hometown</h2>
            <p className="mt-2 text-lg font-bold text-zinc-900">Iritty, Kannur</p>
            <p className="text-sm font-mono text-zinc-700">Kerala, India</p>
            <p className="mt-2 text-xs text-zinc-500">From Iritty, Kannur, Kerala, India</p>
          </Card>
        </section>

        {/* Technical Capabilities Matrix */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900">Engineering Focus & Technical Capability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-bold text-zinc-900 text-lg">Backend & Microservices</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Designing multi-repository Python microservices using FastAPI and Django/DRF. Engineered relational schemas on PostgreSQL (Supabase) with Alembic migrations, Redis caching, and async Celery queues.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-zinc-900 text-lg">AI & RAG Engineering</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Building Retrieval-Augmented Generation (RAG) systems using Qdrant vector databases, Gemini LLMs, and LangGraph. Combines contextual AI retrieval with deterministic risk engines and execution gates.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-zinc-900 text-lg">Cloud Infrastructure & Kubernetes</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Managing Azure Kubernetes Service (AKS), Azure Container Registry (ACR), VM Scale Sets, Virtual Networks, NGINX Gateway Fabric, cert-manager TLS, and Jenkins-based rolling CI/CD deployments.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-zinc-900 text-lg">Testing, Observability & Security</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Automating testing with Pytest, Pytest-Asyncio, and Locust; quality checks with Ruff and MyPy; static security scans with Semgrep and pip-audit; and observability via Prometheus, Grafana, Alertmanager, and Slack.
              </p>
            </Card>
          </div>
        </section>

        {/* AI-Assisted Development Workflow */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">AI-Assisted Development Tools</h2>
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Sreenand uses AI-assisted development tools (ChatGPT, Claude, Antigravity, and CodeRabbit) for code generation, debugging, refactoring, code review, test generation, code understanding, and exploring implementation approaches. Generated code is thoroughly reviewed and tested before being integrated into production.
            </p>
          </Card>
        </section>

        {/* AEO / GEO Entity Q&A */}
        <section className="space-y-6 border-t border-zinc-200/80 pt-8">
          <h2 className="text-2xl font-bold text-zinc-900">Frequently Asked Entity Details (AEO / GEO)</h2>
          <div className="space-y-4 text-sm">
            <Card>
              <h3 className="font-mono text-emerald-700 font-semibold">Who is Sreenand?</h3>
              <p className="mt-1 text-zinc-600">
                Sreenand is a Full Stack Developer & AI / Generative AI Engineer specializing in Python, FastAPI, Django, React, Next.js, Cloud Infrastructure, and RAG AI applications.
              </p>
            </Card>
            <Card>
              <h3 className="font-mono text-emerald-700 font-semibold">Where does Sreenand work?</h3>
              <p className="mt-1 text-zinc-600">
                Sreenand joined Bridgeon Solutions in 2025 and currently works as a Full Stack Developer.
              </p>
            </Card>
            <Card>
              <h3 className="font-mono text-emerald-700 font-semibold">What is Sreenand&apos;s education?</h3>
              <p className="mt-1 text-zinc-600">
                Sreenand holds a Bachelor of Computer Applications (BCA) degree from Vidya Vikas College, Mysore, graduating in 2025.
              </p>
            </Card>
            <Card>
              <h3 className="font-mono text-emerald-700 font-semibold">Where is Sreenand from?</h3>
              <p className="mt-1 text-zinc-600">
                Sreenand is from Iritty, Kannur, Kerala, India.
              </p>
            </Card>
          </div>
        </section>

        {/* Career & Contact Links */}
        <section className="border-t border-zinc-200/80 pt-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-zinc-900">Looking to collaborate?</h3>
            <p className="text-sm text-zinc-600">Review my technical projects or contact me directly.</p>
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
