import fs from 'fs';
import path from 'path';

console.log('--- Starting Automated Production SEO / AEO / GEO Build Checks ---');

let hasErrors = false;

const baseDir = process.cwd();

// 1. Check sitemap.xml exists or is generated
const sitemapTsPath = path.join(baseDir, 'src', 'app', 'sitemap.ts');
if (!fs.existsSync(sitemapTsPath)) {
  console.error('FAIL: src/app/sitemap.ts does not exist.');
  hasErrors = true;
} else {
  console.log('PASS: sitemap.ts verified.');
}

// 2. Check robots.ts exists
const robotsTsPath = path.join(baseDir, 'src', 'app', 'robots.ts');
if (!fs.existsSync(robotsTsPath)) {
  console.error('FAIL: src/app/robots.ts does not exist.');
  hasErrors = true;
} else {
  console.log('PASS: robots.ts verified.');
}

// 3. Inspect siteConfig.ts for canonical URL hygiene and Vercel domain
const siteConfigPath = path.join(baseDir, 'src', 'config', 'site.ts');
if (fs.existsSync(siteConfigPath)) {
  const content = fs.readFileSync(siteConfigPath, 'utf8');
  if (content.includes('sreenandpk.dev') || content.includes('seo-aeo-geo-website-nine.vercel.app')) {
    console.error('FAIL: Obsolete domain detected in siteConfig.ts.');
    hasErrors = true;
  } else if (!content.includes('sreenand-pk-portfolio.vercel.app')) {
    console.error('FAIL: Canonical production domain sreenand-pk-portfolio.vercel.app not found in siteConfig.ts.');
    hasErrors = true;
  } else {
    console.log('PASS: Centralized site configuration production origin verified.');
  }
}

// 4. Verify JSON-LD helper exports
const jsonLdPath = path.join(baseDir, 'src', 'lib', 'json-ld.ts');
if (fs.existsSync(jsonLdPath)) {
  const content = fs.readFileSync(jsonLdPath, 'utf8');
  if (
    content.includes('generatePersonSchema') &&
    content.includes('generateWebSiteSchema') &&
    content.includes('generateProjectSchema') &&
    content.includes('generateArticleSchema')
  ) {
    console.log('PASS: All required JSON-LD schema generators verified.');
  } else {
    console.error('FAIL: Missing required JSON-LD schema generators in src/lib/json-ld.ts.');
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('--- SEO Build Audit Failed ---');
  process.exit(1);
} else {
  console.log('--- All Automated SEO / AEO / GEO Checks Passed Successfully ---');
}
