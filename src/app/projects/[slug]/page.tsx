import React from 'react';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateProjectSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { projectsData } from '@/data/projects';
import { CaseStudyView } from '@/components/projects/case-study-view';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return constructMetadata({ title: 'Project Not Found' });

  return constructMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectSchema = generateProjectSchema(project);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Projects', item: '/projects' },
    { name: project.title, item: `/projects/${project.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[projectSchema, breadcrumbSchema]} />
      <CaseStudyView project={project} />
    </>
  );
}
