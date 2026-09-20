import React from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import { SectionHeading } from '@/components/ui/section-heading';

export function ProjectsPreview() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="py-12 sm:py-16 border-b border-neutral-800/80">
      <SectionHeading
        title="Selected Projects"
        description="Architecture, technical decisions, and implementation case studies."
        actionText="View All Projects"
        actionHref="/projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
