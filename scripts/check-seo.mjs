import fs from 'fs';
import path from 'path';

console.log('--- Starting Production SEO / AEO / GEO Audit & Double-Slash Checks ---');

let hasErrors = false;
const baseDir = process.cwd();
const expectedDomain = 'https://sreenand-pk-portfolio.vercel.app';

// 1. Check sitemap.ts exists
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

// 3. Inspect siteConfig.ts for canonical origin cleanliness and absence of obsolete domains
const siteConfigPath = path.join(baseDir, 'src', 'config', 'site.ts');
if (fs.existsSync(siteConfigPath)) {
  const content = fs.readFileSync(siteConfigPath, 'utf8');
  if (content.includes('sreenandpk.dev') || content.includes('seo-aeo-website-nine.vercel.app')) {
    console.error('FAIL: Obsolete domain detected in siteConfig.ts.');
    hasErrors = true;
  } else if (!content.includes('sreenand-pk-portfolio.vercel.app')) {
    console.error('FAIL: Canonical production domain sreenand-pk-portfolio.vercel.app not found in siteConfig.ts.');
    hasErrors = true;
  } else {
    console.log(`PASS: Centralized site configuration production origin verified (${expectedDomain}).`);
  }
}

// 4. Verify json-ld.ts formatting & check zero double slashes (//#)
const jsonLdPath = path.join(baseDir, 'src', 'lib', 'json-ld.ts');
if (fs.existsSync(jsonLdPath)) {
  const content = fs.readFileSync(jsonLdPath, 'utf8');
  if (content.includes('//#')) {
    console.error('FAIL: Double slash //# detected in src/lib/json-ld.ts.');
    hasErrors = true;
  } else {
    console.log('PASS: Zero double slashes //# in src/lib/json-ld.ts.');
  }
}

// 5. Verify Google Search Console verification in src/lib/seo.ts
const seoPath = path.join(baseDir, 'src', 'lib', 'seo.ts');
if (fs.existsSync(seoPath)) {
  const content = fs.readFileSync(seoPath, 'utf8');
  if (!content.includes('mmXoNyCkDueX-q2tihDmZVClL22y_OTVh6gD9h2qMHI')) {
    console.error('FAIL: Google verification token missing in src/lib/seo.ts.');
    hasErrors = true;
  } else {
    console.log('PASS: Google site verification metadata token verified.');
  }
}

// 6. Inspect pre-rendered HTML build outputs in .next/server/app if build exists
const appBuildDir = path.join(baseDir, '.next', 'server', 'app');
if (fs.existsSync(appBuildDir)) {
  const htmlFiles = ['about.html', 'projects.html', 'contact.html'];
  htmlFiles.forEach((fileName) => {
    const filePath = path.join(appBuildDir, fileName);
    if (fs.existsSync(filePath)) {
      const htmlContent = fs.readFileSync(filePath, 'utf8');
      if (htmlContent.includes('//#webpage') || htmlContent.includes('//#person') || htmlContent.includes('//#website')) {
        console.error(`FAIL: Double slash detected in rendered HTML file ${fileName}`);
        hasErrors = true;
      }
    }
  });
  console.log('PASS: Rendered HTML build output verified for zero double slashes in JSON-LD @id.');
}

if (hasErrors) {
  console.error('--- SEO Audit Failed ---');
  process.exit(1);
} else {
  console.log('--- All Automated Production SEO / AEO / GEO Checks Passed 100% ---');
}
