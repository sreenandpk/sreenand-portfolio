import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { skillsData } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export const metadata = constructMetadata({
  title: 'Detailed Technical Skills & Technology Matrix',
  description:
    'Complete technical skills breakdown for Sreenand P K covering Python, Django, FastAPI, React, Next.js, PostgreSQL, Redis, Docker, Kubernetes, AWS, and RAG/LLM AI Engineering.',
  path: '/skills',
});

export default function SkillsPage() {
  const webPageSchema = generateWebPageSchema(
    'Technical Skills Matrix',
    metadata.description as string,
    '/skills'
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Skills', item: '/skills' },
  ]);

  const categories = Array.from(new Set(skillsData.map((s) => s.category)));

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Technology Stack
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-100 sm:text-5xl">
            Detailed Technical Skills Matrix
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Categorized overview of programming languages, backend frameworks, frontend engines, cloud infrastructure, and AI engineering stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {categories.map((category) => {
            const categorySkills = skillsData.filter((s) => s.category === category);
            return (
              <Card key={category}>
                <h2 className="text-lg font-bold text-neutral-100 font-mono border-b border-neutral-800 pb-3 mb-4 flex items-center justify-between">
                  <span>{category}</span>
                  <span className="text-xs font-normal text-emerald-400">
                    {categorySkills.length} Technologies
                  </span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge key={skill.name}>{skill.name}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
