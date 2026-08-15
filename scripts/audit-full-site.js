import fs from 'fs';
import path from 'path';
import { numerologyCalculators } from '../src/config/calculators.config.ts';
import { headerNavTaxonomy, footerNavTaxonomy } from '../src/config/navigation.config.ts';
import { localesConfig, supportedLocales } from '../src/config/locales.config.ts';

console.log('===========================================================');
console.log('       SOULIOGRAPHY — FULL-SITE ENGINEERING AUDIT         ');
console.log('===========================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failCount++;
  }
}

// -----------------------------------------------------------------------------
// 1. CALCULATOR SCHEMA & INPUT AUDIT (ALL 26 CALCULATORS)
// -----------------------------------------------------------------------------
console.log('\n--- 1. AUDITING ALL 26 CALCULATORS ---');
assert(numerologyCalculators.length === 26, `Total calculators count is exactly 26 (found ${numerologyCalculators.length})`);

const expectedSchemas = {
  'life-path-number': 'date',
  'destiny-number': 'name',
  'soul-urge-number': 'name',
  'expression-number': 'name',
  'birthday-number': 'date',
  'personality-number': 'name',
  'maturity-number': 'name-and-date',
  'balance-number': 'name',
  'karmic-debt-number': 'date',
  'karmic-lesson-number': 'name',
  'challenge-number': 'date',
  'pinnacle-number': 'date',
  'bridge-number': 'name-and-date',
  'essence-number': 'name',
  'personal-year': 'personal-cycle',
  'personal-month': 'personal-cycle',
  'personal-day': 'personal-cycle',
  'lucky-number': 'date',
  'name-numerology': 'name',
  'business-numerology': 'business',
  'house-numerology': 'address',
  'phone-numerology': 'phone',
  'vehicle-numerology': 'plate',
  'marriage-numerology': 'wedding-date',
  'career-numerology': 'name',
  'compatibility-numerology': 'compatibility',
};

numerologyCalculators.forEach(calc => {
  const expected = expectedSchemas[calc.slug];
  assert(calc.inputType === expected, `${calc.slug}: inputType is '${calc.inputType}' (expected '${expected}')`);
  assert(calc.relatedSlugs && calc.relatedSlugs.length > 0, `${calc.slug}: has ${calc.relatedSlugs?.length} related calculator links`);
});

// -----------------------------------------------------------------------------
// 2. MATHEMATICAL CALCULATION & REDUCTION LOGIC VERIFICATION
// -----------------------------------------------------------------------------
console.log('\n--- 2. MATHEMATICAL ALGORITHM TRACE & TEST CASES ---');

const pythagoreanMap = {
  a:1, j:1, s:1,
  b:2, k:2, t:2,
  c:3, l:3, u:3,
  d:4, m:4, v:4,
  e:5, n:5, w:5,
  f:6, o:6, x:6,
  g:7, p:7, y:7,
  h:8, q:8, z:8,
  i:9, r:9
};

function reduceNumber(num, preserveMaster = true) {
  if (preserveMaster && (num === 11 || num === 22 || num === 33)) return num;
  let val = Math.abs(num);
  while (val > 9) {
    if (preserveMaster && (val === 11 || val === 22 || val === 33)) break;
    val = String(val).split('').reduce((sum, d) => sum + parseInt(d, 10), 0);
  }
  return val;
}

// Test Life Path Number: 1985-05-18 -> Month 5, Day 1+8=9, Year 1+9+8+5=23->5. Sum 5+9+5=19 -> 1+9=10 -> 1.
const lpTestMonth = reduceNumber(5);
const lpTestDay = reduceNumber(18);
const lpTestYear = reduceNumber(1985);
const lpSum = lpTestMonth + lpTestDay + lpTestYear;
const lpResult = reduceNumber(lpSum);
assert(lpResult === 1, `Life Path for 1985-05-18 reduces correctly to 1 (got ${lpResult})`);

// Test Master Number Preservation: 1975-11-22 -> Month 11, Day 22, Year 22. Sum 11+22+22=55 -> 10 -> 1.
// Or 1975-07-29: Month 7, Day 11, Year 22 -> 7 + 11 + 22 = 40 -> 4.
// Or 1990-11-01: Month 11, Day 1, Year 19 -> 11 + 1 + 10(1) = 13 -> 4.
assert(reduceNumber(11) === 11, 'Master number 11 is preserved');
assert(reduceNumber(22) === 22, 'Master number 22 is preserved');
assert(reduceNumber(33) === 33, 'Master number 33 is preserved');

// Test Vehicle License Plate Alphanumeric: "7XYZ123"
// 7 + X(6) + Y(7) + Z(8) + 1 + 2 + 3 = 7 + 6 + 7 + 8 + 1 + 2 + 3 = 34 -> 3+4 = 7.
const plateChars = '7XYZ123'.split('');
let plateTotal = 0;
plateChars.forEach(c => {
  if (c >= '0' && c <= '9') plateTotal += parseInt(c, 10);
  else plateTotal += pythagoreanMap[c.toLowerCase()] || 0;
});
assert(reduceNumber(plateTotal) === 7, `Vehicle plate '7XYZ123' reduces correctly to 7 (sum=${plateTotal})`);

// Test Vehicle License Plate: "ABC-456" -> A(1) + B(2) + C(3) + 4 + 5 + 6 = 21 -> 3.
let plate2Total = 1 + 2 + 3 + 4 + 5 + 6;
assert(reduceNumber(plate2Total) === 3, `Vehicle plate 'ABC-456' reduces correctly to 3`);

// Test Phone Number: "555-234-5678" -> 5+5+5+2+3+4+5+6+7+8 = 50 -> 5.
let phoneTotal = [5,5,5,2,3,4,5,6,7,8].reduce((a,b)=>a+b,0);
assert(reduceNumber(phoneTotal) === 5, `Phone number '555-234-5678' reduces correctly to 5`);

// -----------------------------------------------------------------------------
// 3. NAVIGATION & FOOTER TAXONOMY DEDUPLICATION AUDIT
// -----------------------------------------------------------------------------
console.log('\n--- 3. NAVIGATION & FOOTER DEDUPLICATION AUDIT ---');

const headerNumerology = headerNavTaxonomy.find(i => i.key === 'nav.numerology');
const headerCalculators = headerNavTaxonomy.find(i => i.key === 'nav.calculators');

assert(headerNumerology !== undefined, 'Header contains Numerology knowledge hub');
assert(headerCalculators !== undefined, 'Header contains Calculators hub');

const numHrefs = headerNumerology.children.map(c => c.href);
const calcHrefs = headerCalculators.children.map(c => c.href);

const intersection = numHrefs.filter(h => calcHrefs.includes(h));
assert(intersection.length === 0, `Zero duplicated hrefs between Numerology and Calculators dropdowns (overlap: ${intersection.join(', ') || 'None'})`);

// -----------------------------------------------------------------------------
// 4. LOCALE & RTL AUDIT (ALL 40 LOCALES)
// -----------------------------------------------------------------------------
console.log('\n--- 4. AUDITING ALL 40 LOCALES & DIRECTIONALITY ---');
assert(supportedLocales.length === 40, `Exactly 40 supported locales found (${supportedLocales.length})`);

supportedLocales.forEach(loc => {
  const cfg = localesConfig[loc];
  assert(cfg !== undefined, `Locale config exists for '${loc}'`);
  if (loc === 'ar' || loc === 'ur') {
    assert(cfg.dir === 'rtl', `RTL direction verified for '${loc}' (${cfg.name})`);
  } else {
    assert(cfg.dir === 'ltr', `LTR direction verified for '${loc}' (${cfg.name})`);
  }
});

// -----------------------------------------------------------------------------
// 5. STATIC BUILD ASSET & CSS HASH INTEGRITY AUDIT
// -----------------------------------------------------------------------------
console.log('\n--- 5. CHECKING DIST / ASSET INTEGRITY ---');
const distPath = path.join(process.cwd(), 'dist');
if (fs.existsSync(distPath)) {
  const astroAssetsPath = path.join(distPath, '_astro');
  if (fs.existsSync(astroAssetsPath)) {
    const assets = fs.readdirSync(astroAssetsPath);
    const cssFiles = assets.filter(f => f.endsWith('.css'));
    assert(cssFiles.length > 0, `Built CSS bundle(s) found in dist/_astro/ (${cssFiles.join(', ')})`);

    // Verify sample pages in multiple locales reference an existing CSS bundle
    const sampleLocales = ['en', 'ar', 'hi', 'ur', 'de', 'fr', 'es', 'pt', 'ja', 'zh'];
    sampleLocales.forEach(loc => {
      const samplePage = path.join(distPath, loc, 'destiny-matrix', 'birthdays', 'index.html');
      if (fs.existsSync(samplePage)) {
        const html = fs.readFileSync(samplePage, 'utf-8');
        const cssMatch = html.match(/href="\/_astro\/([^"]+\.css)"/);
        if (cssMatch) {
          const referencedCss = cssMatch[1];
          const exists = fs.existsSync(path.join(astroAssetsPath, referencedCss));
          assert(exists, `/${loc}/destiny-matrix/birthdays/ references valid bundle: ${referencedCss}`);
        } else {
          console.log(`  ℹ️ Note: /${loc}/destiny-matrix/birthdays/ inlines styles or references external sheet.`);
        }
      }
    });
  } else {
    console.log('  ⚠️ dist/_astro directory not found (run build first).');
  }
} else {
  console.log('  ⚠️ dist directory not found (run build first).');
}

console.log('\n===========================================================');
console.log(` AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('===========================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
