import React from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { author } = siteConfig;

  return (
    <section className="py-12 sm:py-20 border-b border-neutral-800/80">
      <div className="max-w-4xl">
        <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono font-medium text-emerald-400 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>Available for Engineering Roles & Consulting</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-100 sm:text-6xl lg:text-7xl">
          {author.name}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-semibold text-emerald-400 font-mono">
          {author.title}
        </p>

        <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
          {author.bio} Specialize in designing high-throughput REST APIs, asynchronous task workers, microservices backends, and production Retrieval-Augmented Generation (RAG) AI applications.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
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
