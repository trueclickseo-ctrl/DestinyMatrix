import fs from 'fs';
import path from 'path';
import { localesConfig } from '../src/config/locales.config.ts';
import { numerologyCalculators } from '../src/config/calculators.config.ts';
import { MAJOR_ARCANA_DATABASE } from '../src/data/arcana.ts';
import { getAllBirthdayProfiles } from '../src/data/birthdays.ts';
import { NUMEROLOGY_NUMBER_DETAILS } from '../src/data/numerology-content.ts';

const supportedLocales = Object.keys(localesConfig);
const birthdays = getAllBirthdayProfiles();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

console.log(`[URL Inventory] Calculating expected public URL inventory for ${supportedLocales.length} locales...`);

const inventory = [];

for (const loc of supportedLocales) {
  // Homepage
  inventory.push(`/${loc}/`);

  // Hubs
  inventory.push(`/${loc}/numerology/`);
  inventory.push(`/${loc}/calculators/`);
  inventory.push(`/${loc}/destiny-matrix/arcana/`);
  inventory.push(`/${loc}/destiny-matrix/birthdays/`);
  inventory.push(`/${loc}/guides/`);
  inventory.push(`/${loc}/privacy/`);
  inventory.push(`/${loc}/terms/`);
  inventory.push(`/${loc}/report/`);

  // Calculators (26)
  for (const calc of numerologyCalculators) {
    inventory.push(`/${loc}/calculators/${calc.slug}/`);
  }

  // Arcana Pages (22)
  for (let i = 1; i <= 22; i++) {
    const entry = MAJOR_ARCANA_DATABASE[i] || MAJOR_ARCANA_DATABASE[1];
    const slugName = entry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    inventory.push(`/${loc}/destiny-matrix/arcana/${i}-${slugName}/`);
  }

  // Birthday Pages (366)
  for (const b of birthdays) {
    inventory.push(`/${loc}/destiny-matrix/birthdays/${b.slug}/`);
  }

  // Numerology Concept Pages (12 numbers)
  for (const num of numbers) {
    inventory.push(`/${loc}/numerology/life-path-number/${num}/`);
  }
}

// Add root URL
inventory.unshift('/');

const testsDir = path.resolve(process.cwd(), 'tests');
if (!fs.existsSync(testsDir)) fs.mkdirSync(testsDir, { recursive: true });

const inventoryData = {
  timestamp: new Date().toISOString(),
  totalSupportedLocales: supportedLocales.length,
  routeBreakdownPerLocale: {
    homepage: 1,
    hubs: 8,
    calculators: numerologyCalculators.length,
    arcana: 22,
    birthdays: birthdays.length,
    numerologyNumbers: numbers.length,
    totalPerLocale: 1 + 8 + numerologyCalculators.length + 22 + birthdays.length + numbers.length,
  },
  totalExpectedUrls: inventory.length,
  urls: inventory,
};

fs.writeFileSync(path.join(testsDir, 'generated-url-inventory.json'), JSON.stringify(inventoryData, null, 2));

console.log(`==================================================`);
console.log(`EXHAUSTIVE GENERATED URL INVENTORY SUMMARY`);
console.log(`Supported Locales: ${supportedLocales.length}`);
console.log(`Routes Per Locale: ${inventoryData.routeBreakdownPerLocale.totalPerLocale}`);
console.log(`Total Expected Public URLs: ${inventory.length}`);
console.log(`Inventory saved to: tests/generated-url-inventory.json`);
console.log(`==================================================`);
