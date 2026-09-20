import React from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CaseStudyViewProps {
  project: ProjectItem;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-zinc-500">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/projects" className="hover:text-emerald-700 transition-colors">
              Projects
            </Link>
          </li>
          <li>/</li>
          <li className="text-zinc-900 font-semibold truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </li>
        </ol>
      </nav>

      {/* Header & Title */}
      <header className="border-b border-zinc-200/80 pb-8">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Technical Case Study
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl leading-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Metadata Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-200/80 text-xs font-mono text-zinc-500">
          {project.publishedAt && (
            <div>Published: {project.publishedAt}</div>
          )}
          <div className="flex gap-3">
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" className="text-xs py-1 px-3">
                GitHub Repository
              </Button>
            )}
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" className="text-xs py-1 px-3">
                Live System
              </Button>
            )}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </header>

      {/* Main Content Body */}
      <div className="mt-10 space-y-12 text-zinc-700 leading-relaxed">
        {/* Full Overview */}
        {project.fullDescription && (
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-sans">
              System Overview
            </h2>
            <p className="text-base text-zinc-700">{project.fullDescription}</p>
          </section>
        )}

        {/* Problem */}
        {project.problem && (
          <section className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs">
            <h2 className="text-xl font-bold text-emerald-700 mb-2 font-mono flex items-center gap-2">
              <span>01.</span>
              <span>The Engineering Problem</span>
            </h2>
            <p className="text-sm text-zinc-600">{project.problem}</p>
          </section>
        )}

        {/* Solution */}
        {project.solution && (
          <section className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs">
            <h2 className="text-xl font-bold text-emerald-700 mb-2 font-mono flex items-center gap-2">
              <span>02.</span>
              <span>The Technical Solution</span>
            </h2>
            <p className="text-sm text-zinc-600">{project.solution}</p>
          </section>
        )}

        {/* Architecture */}
        {project.architectureDescription && (
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-sans">
              System Architecture
            </h2>
            <p className="text-base text-zinc-700">
              {project.architectureDescription}
            </p>
          </section>
        )}

        {/* Key Decisions */}
        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-sans">
              Key Engineering Decisions & Tradeoffs
            </h2>
            <ul className="space-y-3">
              {project.keyDecisions.map((decision, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 rounded-lg border border-zinc-200/80 bg-white p-4 shadow-xs"
                >
                  <span className="font-mono text-emerald-700 text-sm font-bold shrink-0">
                    [{idx + 1}]
                  </span>
                  <span className="text-sm text-zinc-700">{decision}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-sans">
              Technical Challenges Overcome
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 rounded-lg border border-zinc-200/80 bg-white p-4 shadow-xs"
                >
                  <span className="font-mono text-amber-700 text-sm font-bold shrink-0">
                    !
                  </span>
                  <span className="text-sm text-zinc-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-zinc-200/80 flex items-center justify-between">
        <Link
          href="/projects"
          className="font-mono text-sm text-emerald-700 hover:text-emerald-800 transition-colors"
        >
          &larr; Back to All Projects
        </Link>
        <Link
          href="/contact"
          className="font-mono text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          Discuss Architecture &rarr;
        </Link>
      </div>
    </article>
  );
}
