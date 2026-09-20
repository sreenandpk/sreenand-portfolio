import React from 'react';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema } from '@/lib/json-ld';
import { HeroSection } from '@/components/home/hero-section';
import { FocusSection } from '@/components/home/focus-section';
import { ProjectsPreview } from '@/components/home/projects-preview';
import { ExperienceSection } from '@/components/home/experience-section';
import { SkillsSection } from '@/components/home/skills-section';
import { ArticlesPreview } from '@/components/home/articles-preview';
import { ContactSection } from '@/components/home/contact-section';

export const metadata = constructMetadata({
  path: '/',
});

export default function HomePage() {
  const webPageSchema = generateWebPageSchema(
    siteConfig.name,
    siteConfig.description,
    '/'
  );

  return (
    <>
      <JsonLd data={webPageSchema} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-4">
        <HeroSection />
        <FocusSection />
        <ProjectsPreview />
        <ExperienceSection />
        <SkillsSection />
        <ArticlesPreview />
        <ContactSection />
      </div>
    </>
  );
}
