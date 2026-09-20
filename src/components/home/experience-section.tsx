import React from 'react';
import { experienceData } from '@/data/experience';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

export function ExperienceSection() {
  return (
    <section className="py-12 sm:py-16 border-b border-neutral-800/80">
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
                <h3 className="text-xl font-bold text-neutral-100">{exp.role}</h3>
                <p className="text-sm font-medium text-emerald-400 font-mono">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700/50 shrink-0 self-start sm:self-auto">
                {exp.startDate} — {exp.endDate || 'Present'}
              </span>
            </div>

            <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
              {exp.description}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5 text-xs text-neutral-400 list-disc list-inside">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}

            <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
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
