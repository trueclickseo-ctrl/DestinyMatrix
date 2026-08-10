import fs from 'fs';
import path from 'path';

// Import locales metadata
import { localesConfig, supportedLocales } from '../src/config/locales.config.ts';
import { masterDictionary, getFullMultilingualAudit } from '../src/i18n/index.ts';

console.log('===========================================================');
console.log(' SOULIOGRAPHY MULTILINGUAL TRANSLATION AUDIT (40 LOCALES) ');
console.log('===========================================================\n');

const totalMasterKeys = Object.keys(masterDictionary).length;
console.log(`Master Language (en) Total Keys: ${totalMasterKeys}\n`);

const audit = getFullMultilingualAudit();
const summaryTable = [];

supportedLocales.forEach((code) => {
  const data = audit[code];
  summaryTable.push({
    Locale: code,
    Name: data.name,
    Script: data.dir === 'rtl' ? 'RTL' : 'LTR',
    'Completion %': `${data.completionPercentage}%`,
    'Translated Keys': `${data.translatedKeys}/${totalMasterKeys}`,
    'Missing Keys': data.missingKeysCount,
    'Stale Keys': data.staleKeysCount,
    Status: data.status,
  });
});

console.table(summaryTable);

const totalMissing = Object.values(audit).reduce((sum, item) => sum + item.missingKeysCount, 0);
console.log('\n-----------------------------------------------------------');
console.log(`Total Locales Audited: ${supportedLocales.length}`);
console.log(`Total Missing Keys Across Locales: ${totalMissing}`);
console.log('-----------------------------------------------------------\n');

if (totalMissing > 0) {
  console.log('Audit Summary: Some target locales are using master fallback keys.');
} else {
  console.log('Audit Summary: 100% Translation Coverage achieved across all locales!');
}
