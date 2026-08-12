import fs from 'fs';
import path from 'path';

function findHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const JS_KEYWORD_EXCLUSIONS = new Set([
  'form.addEventListener',
  'form.reset',
  'form.submit',
  'form.action',
  'form.method',
  'form.target',
  'section.classList',
  'section.querySelector',
  'hero.querySelector',
  'howto.querySelector',
]);

function runTranslationAudit() {
  const distDir = path.resolve(process.cwd(), 'dist');
  console.log(`[Translation Audit] Scanning HTML files in ${distDir}...`);
  const htmlFiles = findHtmlFiles(distDir);
  console.log(`[Translation Audit] Found ${htmlFiles.length} HTML files.`);

  let totalIssues = 0;
  const issueFiles = [];

  // Pattern matching raw unrendered keys (e.g. calc.essence.title, calc.lifePath.desc, nav.home)
  const keyPattern = /\b(calc|nav|form|result|brand|explainer|concept|howto|includes|sidebar|faq|section|hero)\.[a-zA-Z0-9\.]+\b/g;

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    // Strip out <script> tags to avoid matching inline JS method calls like form.addEventListener
    const contentWithoutScripts = content.replace(/<script[\s\S]*?<\/script>/gi, '');

    const matches = contentWithoutScripts.match(keyPattern);
    if (matches && matches.length > 0) {
      const filteredMatches = matches.filter(m => !JS_KEYWORD_EXCLUSIONS.has(m));
      if (filteredMatches.length > 0) {
        const uniqueMatches = Array.from(new Set(filteredMatches));
        console.error(`❌ [Translation Error] ${file}`);
        console.error(`   Found raw unrendered translation keys: ${uniqueMatches.join(', ')}`);
        totalIssues += uniqueMatches.length;
        issueFiles.push(file);
      }
    }
  }

  if (totalIssues > 0) {
    console.error(`\n🚨 [BUILD QUALITY GATE FAILED] ${totalIssues} unresolved translation keys detected across ${issueFiles.length} files!`);
    process.exit(1);
  } else {
    console.log(`\n✅ [BUILD QUALITY GATE PASSED] 0 raw translation keys found across all ${htmlFiles.length} generated pages.`);
  }
}

runTranslationAudit();
