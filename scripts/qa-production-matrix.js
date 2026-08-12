import fs from 'fs';
import path from 'path';

const testLocales = ['en', 'de', 'fr', 'es', 'pt', 'ar'];

const sampleRouteTypes = [
  '',
  'numerology/',
  'calculators/',
  'calculators/essence-number/',
  'calculators/life-path-number/',
  'destiny-matrix/arcana/',
  'destiny-matrix/arcana/1-the-magician/',
  'destiny-matrix/birthdays/',
  'destiny-matrix/birthdays/february-5/',
  'guides/',
];

function auditUrlMatrix() {
  const distDir = path.resolve(process.cwd(), 'dist');
  console.log(`[Production URL Matrix QA] Crawling ${distDir}...`);

  const results = [];
  let totalPass = 0;
  let totalFail = 0;

  for (const loc of testLocales) {
    for (const route of sampleRouteTypes) {
      const relPath = path.join(loc, route, 'index.html');
      const fullPath = path.join(distDir, relPath);

      const url = `https://souliography.com/${loc}/${route}`;

      if (!fs.existsSync(fullPath)) {
        console.error(`❌ [404 Fail] File missing: ${relPath}`);
        totalFail++;
        results.push({ url, status: 404, htmlLang: 'FAIL', css: 'FAIL', translation: 'FAIL', result: 'FAIL' });
        continue;
      }

      const content = fs.readFileSync(fullPath, 'utf-8');

      // Check lang attribute
      const langMatch = content.match(/<html[^>]*lang=["']([^"']+)["']/i);
      const htmlLang = langMatch ? langMatch[1] : 'MISSING';
      const langPass = htmlLang === loc;

      // Check CSS inclusion
      const cssPass = content.includes('.css') || content.includes('<style');

      // Check translation keys
      const keyPattern = /\b(calc|nav|form|result)\.[a-zA-Z0-9\.]+\b/g;

      // Exclude JS script content
      const contentNoScript = content.replace(/<script[\s\S]*?<\/script>/gi, '');
      const keyMatches = contentNoScript.match(keyPattern) || [];
      const translationPass = keyMatches.length === 0;

      // Check Header & Footer presence
      const navPass = content.includes('Souliography') && content.includes('<header');
      const footerPass = content.includes('<footer');

      const isPass = langPass && cssPass && translationPass && navPass && footerPass;

      if (isPass) {
        totalPass++;
      } else {
        totalFail++;
        console.error(`❌ [QA Fail] ${url} - Lang: ${langPass}, CSS: ${cssPass}, Trans: ${translationPass}`);
      }

      results.push({
        url,
        status: 200,
        htmlLang: langPass ? 'PASS' : `FAIL (${htmlLang})`,
        css: cssPass ? 'PASS' : 'FAIL',
        translation: translationPass ? 'PASS' : `FAIL (${keyMatches.join(', ')})`,
        navigation: navPass ? 'PASS' : 'FAIL',
        footer: footerPass ? 'PASS' : 'FAIL',
        result: isPass ? 'PASS' : 'FAIL',
      });
    }
  }

  // Save JSON report
  const testsDir = path.resolve(process.cwd(), 'tests');
  if (!fs.existsSync(testsDir)) fs.mkdirSync(testsDir, { recursive: true });
  
  fs.writeFileSync(
    path.join(testsDir, 'production-url-matrix.json'),
    JSON.stringify({ timestamp: new Date().toISOString(), totalTested: results.length, totalPass, totalFail, results }, null, 2)
  );

  console.log(`\n==================================================`);
  console.log(`PRODUCTION URL MATRIX QA SUMMARY`);
  console.log(`Total URLs Tested: ${results.length}`);
  console.log(`Passed: ${totalPass}`);
  console.log(`Failed: ${totalFail}`);
  console.log(`==================================================\n`);

  if (totalFail > 0) {
    process.exit(1);
  }
}

auditUrlMatrix();
