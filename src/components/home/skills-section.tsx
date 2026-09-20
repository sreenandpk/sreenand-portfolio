import React from 'react';
import { skillsData } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

export function SkillsSection() {
  const categories = Array.from(new Set(skillsData.map((s) => s.category)));

  return (
    <section className="py-12 sm:py-16 border-b border-zinc-200/80">
      <SectionHeading
        title="Technical Skills Matrix"
        description="Categorized technical stack and engineering proficiencies."
        actionText="Detailed Skills Overview"
        actionHref="/skills"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const categorySkills = skillsData.filter((s) => s.category === category);
          return (
            <Card key={category}>
              <h3 className="text-base font-bold text-zinc-900 font-mono border-b border-zinc-200/80 pb-2 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {categorySkills.map((skill) => (
                  <Badge key={skill.name}>{skill.name}</Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
