import React from 'react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ContactSection() {
  const { author } = siteConfig;

  return (
    <section className="py-12 sm:py-16">
      <Card className="p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border-zinc-200/80 bg-white shadow-xs">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Let&apos;s Engineer Something Great
          </h2>
          <p className="mt-2 text-sm text-zinc-600 max-w-xl">
            Open to discussing full-stack software development roles, backend microservices architecture, and Generative AI / RAG system design opportunities.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
          {author.socials.github && (
            <Button href={author.socials.github} variant="outline">
              GitHub Profile
            </Button>
          )}
        </div>
      </Card>
    </section>
  );
}
