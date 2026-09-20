import React from 'react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

export function FocusSection() {
  const focusAreas = [
    {
      title: 'Full-Stack Web Applications',
      description:
        'Building responsive, performant user interfaces with Next.js, React, and TypeScript backed by robust Python APIs.',
    },
    {
      title: 'Backend Engineering',
      description:
        'Designing high-throughput asynchronous web backends, REST APIs, and microservices using Python, FastAPI, and Django.',
    },
    {
      title: 'AI / LLM Applications & RAG',
      description:
        'Architecting vector search retrieval pipelines (pgvector), semantic caching (Redis), and LLM contextual integration.',
    },
    {
      title: 'Distributed Systems & Microservices',
      description:
        'Structuring decoupled microservices architectures with event queues, relational databases, and session persistence.',
    },
    {
      title: 'Cloud & DevOps Infrastructure',
      description:
        'Containerizing workloads with Docker and Kubernetes, managing cloud deployments on AWS & Azure, and automating CI/CD.',
    },
    {
      title: 'Quality, Testing & Performance',
      description:
        'Enforcing code reliability through automated unit testing, static linting, and Core Web Vitals performance optimization.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-zinc-200/80">
      <SectionHeading
        title="Technical Engineering Focus"
        description="Core domain specializations across full-stack development, cloud architecture, and AI engineering."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((area) => (
          <Card key={area.title}>
            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
              <span className="text-emerald-700 font-mono text-sm">#</span>
              <span>{area.title}</span>
            </h3>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              {area.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
