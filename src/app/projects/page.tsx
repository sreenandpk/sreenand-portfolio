import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';

export const metadata = constructMetadata({
  title: 'Projects & Case Studies',
  description:
    'Technical software engineering case studies, system architecture breakdowns, and full-stack project implementations by Sreenand.',
  path: '/projects',
});

export default function ProjectsPage() {
  const webPageSchema = generateWebPageSchema('Projects & Case Studies', metadata.description as string, '/projects');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Projects', item: '/projects' },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Portfolio Work
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Software Projects & Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Technical breakdowns detailing system architecture, engineering problem statements, solutions, trade-offs, and implementation details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
