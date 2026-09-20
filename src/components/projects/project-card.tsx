import React from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full group hover:border-zinc-300 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            Case Study
          </span>
          {project.publishedAt && (
            <time
              dateTime={project.publishedAt}
              className="text-xs font-mono text-zinc-400"
            >
              {project.publishedAt.slice(0, 7)}
            </time>
          )}
        </div>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-900 group-hover:text-emerald-700 transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="focus:outline-none focus:ring-2 focus:ring-emerald-600 rounded"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-zinc-600 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs font-mono text-zinc-500 self-center">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center justify-between text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="font-mono text-xs font-medium text-emerald-700 group-hover:translate-x-1 transition-transform inline-flex items-center"
        >
          Read Case Study &rarr;
        </Link>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </Card>
  );
}
