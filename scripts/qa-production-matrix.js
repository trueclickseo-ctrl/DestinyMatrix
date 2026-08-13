import fs from 'fs';
import path from 'path';

const testLocales = [
  'en', 'de', 'fr', 'es', 'pt', 'it', 'nl', 'pl', 'sv', 'da', 
  'no', 'fi', 'is', 'cs', 'sk', 'hu', 'ro', 'bg', 'el', 'uk', 
  'ru', 'tr', 'id', 'ms', 'vi', 'th', 'zh', 'ja', 'ko', 'ar', 
  'hi', 'bn', 'ta', 'te', 'mr', 'gu', 'kn', 'ml', 'pa', 'ur'
];

const sampleRouteTypes = [
  '',
  'numerology/',
  'calculators/',
  'guides/',
  'destiny-matrix/arcana/',
  'destiny-matrix/birthdays/'
];

async function runProductionQACrawl() {
  console.log(`\n==================================================`);
  console.log(`SOULIOGRAPHY LIVE PRODUCTION QA CRAWLER`);
  console.log(`Testing ${testLocales.length} Locales x ${sampleRouteTypes.length} Route Families (Total: ${testLocales.length * sampleRouteTypes.length} URLs)`);
  console.log(`Target Host: https://souliography.com/`);
  console.log(`==================================================\n`);

  const results = [];
  let totalPass = 0;
  let totalFail = 0;

  for (const loc of testLocales) {
    for (const route of sampleRouteTypes) {
      const url = `https://souliography.com/${loc}/${route}`;
      try {
        const res = await fetch(url, { redirect: 'manual' });
        const status = res.status;

        if (status !== 200) {
          totalFail++;
          results.push({
            url,
            status,
            htmlLang: 'FAIL',
            css: 'FAIL',
            canonical: 'FAIL',
            hreflang: 'FAIL',
            translation: 'FAIL',
            navigation: 'FAIL',
            footer: 'FAIL',
            result: 'FAIL',
            error: `HTTP status ${status}`
          });
          console.error(`❌ [HTTP FAIL ${status}] ${url}`);
          continue;
        }

        const html = await res.text();

        // 1. Check HTML lang & dir
        const langMatch = html.match(/<html[^>]*lang=["']([^"']+)["']/i);
        const htmlLang = langMatch ? langMatch[1] : 'MISSING';
        const langPass = htmlLang === loc;

        // 2. Check CSS Assets
        const cssMatches = [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/g)].map(m => m[1]);
        let cssPass = cssMatches.length > 0;
        if (cssPass) {
          // Verify first stylesheet status
          const firstCss = cssMatches[0].startsWith('http') ? cssMatches[0] : new URL(cssMatches[0], url).toString();
          const cssRes = await fetch(firstCss);
          if (cssRes.status !== 200 || !cssRes.headers.get('content-type')?.includes('css')) {
            cssPass = false;
          }
        }

        // 3. Check Canonical
        const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
        const canonical = canonicalMatch ? canonicalMatch[1] : '';
        const canonicalPass = canonical === url || canonical === `${url}/` || `${canonical}/` === url;

        // 4. Check Hreflang
        const hasHreflang = html.includes('hreflang="en"') && html.includes('hreflang="x-default"');

        // 5. Check English Fallback leakage on non-English locales
        let translationPass = true;
        if (loc !== 'en') {
          if (html.includes('Comprehensive reference library for classical Pythagorean') ||
              html.includes('Pythagorean Reference Hub') ||
              html.includes('What Is Pythagorean Numerology?') ||
              html.includes('Explore Knowledge Hubs')) {
            translationPass = false;
          }
        }

        // 6. Check Navigation and Footer
        const navPass = html.includes('Souliography') && html.includes('<header');
        const footerPass = html.includes('<footer');

        const isPass = langPass && cssPass && canonicalPass && hasHreflang && translationPass && navPass && footerPass;

        if (isPass) {
          totalPass++;
          console.log(`✅ [PASS] ${url}`);
        } else {
          totalFail++;
          console.error(`❌ [QA FAIL] ${url} | Lang: ${langPass}, CSS: ${cssPass}, Canon: ${canonicalPass}, Trans: ${translationPass}`);
        }

        results.push({
          url,
          status,
          htmlLang: langPass ? 'PASS' : `FAIL (${htmlLang})`,
          css: cssPass ? 'PASS' : 'FAIL',
          canonical: canonicalPass ? 'PASS' : `FAIL (${canonical})`,
          hreflang: hasHreflang ? 'PASS' : 'FAIL',
          translation: translationPass ? 'PASS' : 'FAIL (English fallback detected)',
          navigation: navPass ? 'PASS' : 'FAIL',
          footer: footerPass ? 'PASS' : 'FAIL',
          result: isPass ? 'PASS' : 'FAIL'
        });

      } catch (err) {
        totalFail++;
        console.error(`❌ [ERROR] ${url}: ${err.message}`);
        results.push({ url, status: 0, result: 'FAIL', error: err.message });
      }
    }
  }

  // Generate machine-readable JSON
  const testsDir = path.resolve(process.cwd(), 'tests');
  if (!fs.existsSync(testsDir)) fs.mkdirSync(testsDir, { recursive: true });
  fs.writeFileSync(
    path.join(testsDir, 'production-url-matrix.json'),
    JSON.stringify({ timestamp: new Date().toISOString(), totalTested: results.length, totalPass, totalFail, results }, null, 2)
  );

  // Generate Markdown report
  const docsDir = path.resolve(process.cwd(), 'docs');
  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

  const mdLines = [
    `# SOULIOGRAPHY PRODUCTION URL MATRIX REPORT`,
    ``,
    `**Audit Date**: ${new Date().toISOString()}`,
    `**Target Host**: https://souliography.com/`,
    `**Total Tested**: ${results.length}`,
    `**Passed**: ${totalPass}`,
    `**Failed**: ${totalFail}`,
    ``,
    `| URL | Status | Lang | CSS | Canonical | Hreflang | Translation | Nav | Footer | Result |`,
    `|---|---|---|---|---|---|---|---|---|---|`
  ];

  results.forEach(r => {
    mdLines.push(`| ${r.url} | ${r.status} | ${r.htmlLang} | ${r.css} | ${r.canonical} | ${r.hreflang} | ${r.translation} | ${r.navigation} | ${r.footer} | **${r.result}** |`);
  });

  fs.writeFileSync(path.join(docsDir, 'PRODUCTION_URL_MATRIX.md'), mdLines.join('\n'));

  console.log(`\n==================================================`);
  console.log(`SUMMARY: ${totalPass} PASSED, ${totalFail} FAILED out of ${results.length} URLs.`);
  console.log(`Reports saved to tests/production-url-matrix.json and docs/PRODUCTION_URL_MATRIX.md`);
  console.log(`==================================================\n`);

  if (totalFail > 0) {
    process.exit(1);
  }
}

runProductionQACrawl();
