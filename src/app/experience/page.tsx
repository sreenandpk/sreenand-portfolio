import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/json-ld';
import { experienceData } from '@/data/experience';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export const metadata = constructMetadata({
  title: 'Professional Experience Timeline',
  description:
    'Career history, engineering roles, technical achievements, and backend/full-stack responsibilities of Sreenand P K.',
  path: '/experience',
});

export default function ExperiencePage() {
  const webPageSchema = generateWebPageSchema(
    'Professional Experience',
    metadata.description as string,
    '/experience'
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Experience', item: '/experience' },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Career Record
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-100 sm:text-5xl">
            Professional Experience Timeline
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Software development history, core technical contributions, and system responsibilities.
          </p>
        </div>

        <div className="space-y-8 pt-4">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/40">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-emerald-500 bg-neutral-950" />
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-100">{exp.role}</h2>
                    <p className="text-sm font-medium text-emerald-400 font-mono mt-0.5">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 bg-neutral-800/80 px-3 py-1 rounded border border-neutral-700/50 shrink-0 self-start sm:self-auto">
                    {exp.startDate} — {exp.endDate || 'Present'}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-xs font-mono font-semibold uppercase text-neutral-400 mb-2">
                      Key Technical Contributions
                    </h3>
                    <ul className="space-y-1.5 text-xs text-neutral-300 list-disc list-inside">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
