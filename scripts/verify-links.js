import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  console.error('❌ Error: dist/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

console.log('===========================================================');
console.log('      SOULIOGRAPHY — AUTOMATED FULL SITE LINK AUDIT       ');
console.log('===========================================================\n');

function getAllHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Found ${htmlFiles.length} HTML files in dist/ to audit.`);

let totalLinksChecked = 0;
let totalMetaChecked = 0;
let doubleLocaleErrors = [];
let deadLinkErrors = [];
let sampleBirthdayChecked = 0;
let sampleArcanaChecked = 0;

// Set of all valid paths in dist
const validPaths = new Set();

// Register all HTML files as valid paths
for (const file of htmlFiles) {
  let relPath = path.relative(distDir, file).replace(/\\/g, '/');
  // Handle index.html -> /
  if (relPath === 'index.html') {
    validPaths.add('/');
  } else if (relPath.endsWith('/index.html')) {
    const dirRoute = '/' + relPath.replace(/\/index\.html$/, '/');
    validPaths.add(dirRoute);
    validPaths.add(dirRoute.slice(0, -1)); // without trailing slash
  } else {
    const route = '/' + relPath;
    validPaths.add(route);
    if (route.endsWith('.html')) {
      validPaths.add(route.replace(/\.html$/, '/'));
      validPaths.add(route.replace(/\.html$/, ''));
    }
  }
}

// Also register static assets in dist (images, scripts, styles, sitemap, etc.)
function registerAssets(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      registerAssets(fullPath);
    } else {
      const relPath = '/' + path.relative(distDir, fullPath).replace(/\\/g, '/');
      validPaths.add(relPath);
    }
  }
}
registerAssets(distDir);

console.log(`Registered ${validPaths.size} total valid routes and static assets.`);

// Regex patterns
const hrefRegex = /href=["']([^"']+)["']/g;
const doubleLocaleRegex = /\/([a-z]{2})\/([a-z]{2})\//i;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const fileRelPath = '/' + path.relative(distDir, file).replace(/\\/g, '/');
  
  if (fileRelPath.includes('/destiny-matrix/birthdays/')) {
    sampleBirthdayChecked++;
  }
  if (fileRelPath.includes('/destiny-matrix/arcana/')) {
    sampleArcanaChecked++;
  }

  let match;
  hrefRegex.lastIndex = 0;

  while ((match = hrefRegex.exec(content)) !== null) {
    const rawHref = match[1];

    // Check for double-locale patterns (e.g. /en/en/, /de/de/, /fr/en/)
    if (doubleLocaleRegex.test(rawHref)) {
      doubleLocaleErrors.push({
        sourceFile: fileRelPath,
        href: rawHref
      });
    }

    // Filter internal links
    if (
      rawHref.startsWith('http://') ||
      rawHref.startsWith('https://')
    ) {
      if (rawHref.includes('souliography.com')) {
        totalLinksChecked++;
        try {
          const urlObj = new URL(rawHref);
          if (doubleLocaleRegex.test(urlObj.pathname)) {
            doubleLocaleErrors.push({
              sourceFile: fileRelPath,
              href: rawHref
            });
          }
          const cleanPath = urlObj.pathname;
          const normalized = cleanPath.endsWith('/') ? cleanPath : cleanPath + '/';
          const unslashed = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
          if (!validPaths.has(cleanPath) && !validPaths.has(normalized) && !validPaths.has(unslashed)) {
            deadLinkErrors.push({
              sourceFile: fileRelPath,
              href: rawHref,
              cleanPath
            });
          }
        } catch (e) {
          // ignore invalid URLs
        }
      }
    } else if (rawHref.startsWith('/')) {
      totalLinksChecked++;
      // Strip query parameters and hash anchors
      const cleanPath = rawHref.split('?')[0].split('#')[0];
      if (cleanPath && cleanPath !== '') {
        const normalized = cleanPath.endsWith('/') ? cleanPath : cleanPath + '/';
        const unslashed = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
        if (!validPaths.has(cleanPath) && !validPaths.has(normalized) && !validPaths.has(unslashed)) {
          deadLinkErrors.push({
            sourceFile: fileRelPath,
            href: rawHref,
            cleanPath
          });
        }
      }
    }
  }
}

// Parse and audit all sitemap XML files in dist
const sitemapFiles = fs.readdirSync(distDir).filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));
for (const smFile of sitemapFiles) {
  const smPath = path.join(distDir, smFile);
  const sitemapContent = fs.readFileSync(smPath, 'utf-8');
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    totalMetaChecked++;
    const loc = match[1];
    if (doubleLocaleRegex.test(loc)) {
      doubleLocaleErrors.push({ sourceFile: `/${smFile}`, href: loc });
    }
    if (loc.includes('souliography.com')) {
      try {
        const urlObj = new URL(loc);
        const cleanPath = urlObj.pathname;
        const normalized = cleanPath.endsWith('/') ? cleanPath : cleanPath + '/';
        const unslashed = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
        if (!validPaths.has(cleanPath) && !validPaths.has(normalized) && !validPaths.has(unslashed)) {
          deadLinkErrors.push({
            sourceFile: `/${smFile}`,
            href: loc,
            cleanPath
          });
        }
      } catch (_) {}
    }
  }
}

console.log('\n--- AUDIT RESULTS SUMMARY ---');
console.log(`Total HTML files audited: ${htmlFiles.length}`);
console.log(`Birthday pages checked: ${sampleBirthdayChecked}`);
console.log(`Arcana pages checked: ${sampleArcanaChecked}`);
console.log(`Total internal links checked: ${totalLinksChecked}`);
console.log(`Total sitemap XML files audited: ${sitemapFiles.length} (${sitemapFiles.join(', ')})`);
console.log(`Total sitemap <loc> entries checked: ${totalMetaChecked}`);
console.log(`Double-locale URLs found: ${doubleLocaleErrors.length}`);
console.log(`Dead internal links found: ${deadLinkErrors.length}`);

if (doubleLocaleErrors.length > 0) {
  console.error('\n❌ DOUBLE-LOCALE ERRORS DETECTED:');
  doubleLocaleErrors.slice(0, 20).forEach(e => console.error(`  - In [${e.sourceFile}]: ${e.href}`));
  if (doubleLocaleErrors.length > 20) console.error(`  ... and ${doubleLocaleErrors.length - 20} more.`);
}

if (deadLinkErrors.length > 0) {
  console.error('\n❌ DEAD INTERNAL LINKS DETECTED:');
  deadLinkErrors.slice(0, 20).forEach(e => console.error(`  - In [${e.sourceFile}]: ${e.href} (resolved path '${e.cleanPath}' missing)`));
  if (deadLinkErrors.length > 20) console.error(`  ... and ${deadLinkErrors.length - 20} more.`);
}

if (doubleLocaleErrors.length === 0 && deadLinkErrors.length === 0) {
  console.log('\n✅ AUDIT PASSED: 0 broken internal links (0 HTTP 4xx/5xx/missing targets) & 0 double-locale URLs!');
  process.exit(0);
} else {
  console.error('\n❌ AUDIT FAILED: Fix the broken links/double-locale URLs above.');
  process.exit(1);
}
