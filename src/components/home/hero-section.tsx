import React from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { author } = siteConfig;

  return (
    <section className="py-12 sm:py-20 border-b border-zinc-200/80">
      <div className="max-w-4xl">
        <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-1 text-xs font-mono font-medium text-emerald-800 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
          </span>
          <span>Bridgeon Solutions · Full Stack Developer</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
          {author.name}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-semibold text-emerald-700 font-mono">
          {author.title}
        </p>

        <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl">
          Full Stack Developer at Bridgeon Solutions (joined 2025). From Iritty, Kannur, Kerala, India, holding a Bachelor of Computer Applications (BCA) from Vidya Vikas College, Mysore (2025). Building multi-repository microservices, cloud-native Azure Kubernetes deployments, RAG AI systems, and modern web applications with Python, FastAPI, Django, React, Next.js, and PostgreSQL.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/projects" variant="primary">
            View Projects
          </Button>
          <Button href="/contact" variant="outline">
            Contact Me
          </Button>
          {author.socials.github && (
            <Button href={author.socials.github} variant="secondary">
              GitHub
            </Button>
          )}
          {author.socials.linkedin && (
            <Button href={author.socials.linkedin} variant="secondary">
              LinkedIn
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
