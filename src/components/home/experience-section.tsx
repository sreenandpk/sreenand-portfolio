import React from 'react';
import { experienceData } from '@/data/experience';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

export function ExperienceSection() {
  return (
    <section className="py-12 sm:py-16 border-b border-zinc-200/80">
      <SectionHeading
        title="Professional Experience"
        description="Chronological engineering track record and technical responsibilities."
        actionText="Full Experience Timeline"
        actionHref="/experience"
      />

      <div className="space-y-6">
        {experienceData.map((exp) => (
          <Card key={exp.id}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">{exp.role}</h3>
                <p className="text-sm font-medium text-emerald-700 font-mono">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200/80 shrink-0 self-start sm:self-auto">
                {exp.startDate} — {exp.endDate || 'Present'}
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-700 leading-relaxed">
              {exp.description}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5 text-xs text-zinc-600 list-disc list-inside">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}

            <div className="mt-5 pt-4 border-t border-zinc-200/80 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
