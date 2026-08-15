import { localesConfig, supportedLocales } from '../config/locales.config.ts';
import { uiTranslations_en } from './ui/en.ts';
import { uiTranslations_de } from './ui/de.ts';
import { uiTranslations_fr } from './ui/fr.ts';
import { uiTranslations_es } from './ui/es.ts';
import { uiTranslations_pt } from './ui/pt.ts';
import { uiTranslations_it } from './ui/it.ts';
import { uiTranslations_nl } from './ui/nl.ts';
import { uiTranslations_pl } from './ui/pl.ts';
import { uiTranslations_sv } from './ui/sv.ts';
import { uiTranslations_da } from './ui/da.ts';
import { uiTranslations_no } from './ui/no.ts';
import { uiTranslations_fi } from './ui/fi.ts';
import { uiTranslations_is } from './ui/is.ts';
import { uiTranslations_cs } from './ui/cs.ts';
import { uiTranslations_sk } from './ui/sk.ts';
import { uiTranslations_hu } from './ui/hu.ts';
import { uiTranslations_ro } from './ui/ro.ts';
import { uiTranslations_bg } from './ui/bg.ts';
import { uiTranslations_el } from './ui/el.ts';
import { uiTranslations_uk } from './ui/uk.ts';
import { uiTranslations_ru } from './ui/ru.ts';
import { uiTranslations_tr } from './ui/tr.ts';
import { uiTranslations_id } from './ui/id.ts';
import { uiTranslations_ms } from './ui/ms.ts';
import { uiTranslations_vi } from './ui/vi.ts';
import { uiTranslations_th } from './ui/th.ts';
import { uiTranslations_zh } from './ui/zh.ts';
import { uiTranslations_ja } from './ui/ja.ts';
import { uiTranslations_ko } from './ui/ko.ts';
import { uiTranslations_ar } from './ui/ar.ts';
import { uiTranslations_hi } from './ui/hi.ts';
import { uiTranslations_bn } from './ui/bn.ts';
import { uiTranslations_ta } from './ui/ta.ts';
import { uiTranslations_te } from './ui/te.ts';
import { uiTranslations_mr } from './ui/mr.ts';
import { uiTranslations_gu } from './ui/gu.ts';
import { uiTranslations_kn } from './ui/kn.ts';
import { uiTranslations_ml } from './ui/ml.ts';
import { uiTranslations_pa } from './ui/pa.ts';
import { uiTranslations_ur } from './ui/ur.ts';

import { calculatorTranslations } from './ui/calculators.ts';
import { calculatorGuides } from './ui/guides.ts';

// Master English Dictionary
export const masterDictionary: Record<string, string> = { ...uiTranslations_en, ...(calculatorTranslations['en'] || {}), ...calculatorGuides };

// Registered Localized Dictionaries for all 40 supported locales
const localizedDictionaries: Record<string, Record<string, string>> = {
  en: { ...uiTranslations_en, ...(calculatorTranslations['en'] || {}), ...calculatorGuides },
  de: { ...uiTranslations_de, ...(calculatorTranslations['de'] || {}) },
  fr: { ...uiTranslations_fr, ...(calculatorTranslations['fr'] || {}) },
  es: { ...uiTranslations_es, ...(calculatorTranslations['es'] || {}) },
  pt: { ...uiTranslations_pt, ...(calculatorTranslations['pt'] || {}) },
  it: { ...uiTranslations_it, ...(calculatorTranslations['it'] || {}) },
  nl: { ...uiTranslations_nl, ...(calculatorTranslations['nl'] || {}) },
  pl: { ...uiTranslations_pl, ...(calculatorTranslations['pl'] || {}) },
  sv: { ...uiTranslations_sv, ...(calculatorTranslations['sv'] || {}) },
  da: { ...uiTranslations_da, ...(calculatorTranslations['da'] || {}) },
  no: { ...uiTranslations_no, ...(calculatorTranslations['no'] || {}) },
  fi: { ...uiTranslations_fi, ...(calculatorTranslations['fi'] || {}) },
  is: { ...uiTranslations_is, ...(calculatorTranslations['is'] || {}) },
  cs: { ...uiTranslations_cs, ...(calculatorTranslations['cs'] || {}) },
  sk: { ...uiTranslations_sk, ...(calculatorTranslations['sk'] || {}) },
  hu: { ...uiTranslations_hu, ...(calculatorTranslations['hu'] || {}) },
  ro: { ...uiTranslations_ro, ...(calculatorTranslations['ro'] || {}) },
  bg: { ...uiTranslations_bg, ...(calculatorTranslations['bg'] || {}) },
  el: { ...uiTranslations_el, ...(calculatorTranslations['el'] || {}) },
  uk: { ...uiTranslations_uk, ...(calculatorTranslations['uk'] || {}) },
  ru: { ...uiTranslations_ru, ...(calculatorTranslations['ru'] || {}) },
  tr: { ...uiTranslations_tr, ...(calculatorTranslations['tr'] || {}) },
  id: { ...uiTranslations_id, ...(calculatorTranslations['id'] || {}) },
  ms: { ...uiTranslations_ms, ...(calculatorTranslations['ms'] || {}) },
  vi: { ...uiTranslations_vi, ...(calculatorTranslations['vi'] || {}) },
  th: { ...uiTranslations_th, ...(calculatorTranslations['th'] || {}) },
  zh: { ...uiTranslations_zh, ...(calculatorTranslations['zh'] || {}) },
  ja: { ...uiTranslations_ja, ...(calculatorTranslations['ja'] || {}) },
  ko: { ...uiTranslations_ko, ...(calculatorTranslations['ko'] || {}) },
  ar: { ...uiTranslations_ar, ...(calculatorTranslations['ar'] || {}) },
  hi: { ...uiTranslations_hi, ...(calculatorTranslations['hi'] || {}) },
  bn: { ...uiTranslations_bn, ...(calculatorTranslations['bn'] || {}) },
  ta: { ...uiTranslations_ta, ...(calculatorTranslations['ta'] || {}) },
  te: { ...uiTranslations_te, ...(calculatorTranslations['te'] || {}) },
  mr: { ...uiTranslations_mr, ...(calculatorTranslations['mr'] || {}) },
  gu: { ...uiTranslations_gu, ...(calculatorTranslations['gu'] || {}) },
  kn: { ...uiTranslations_kn, ...(calculatorTranslations['kn'] || {}) },
  ml: { ...uiTranslations_ml, ...(calculatorTranslations['ml'] || {}) },
  pa: { ...uiTranslations_pa, ...(calculatorTranslations['pa'] || {}) },
  ur: { ...uiTranslations_ur, ...(calculatorTranslations['ur'] || {}) },
};

// Content version tracking for future stale translation detection
export const translationVersions: Record<string, Record<string, number>> = {
  en: Object.keys(masterDictionary).reduce((acc, key) => ({ ...acc, [key]: 1 }), {}),
};

// Register additional locale dictionary dynamically
export function registerLocaleDictionary(locale: string, dict: Record<string, string>, versionMap?: Record<string, number>) {
  localizedDictionaries[locale] = { ...dict };
  if (versionMap) {
    translationVersions[locale] = { ...versionMap };
  }
}

// Global audit tracker for missing keys
const missingKeysTracker: Record<string, Set<string>> = {};
supportedLocales.forEach(loc => {
  missingKeysTracker[loc] = new Set();
});

// Translation lookup function
export function t(key: string, locale: string = 'en'): string {
  const targetDict = localizedDictionaries[locale];
  
  if (targetDict && targetDict[key] !== undefined && targetDict[key] !== '') {
    return targetDict[key];
  }

  // Check calculatorTranslations directly
  const calcDict = calculatorTranslations[locale] || calculatorTranslations['en'];
  if (calcDict && calcDict[key] !== undefined && calcDict[key] !== '') {
    return calcDict[key];
  }

  // Fallback to Master English
  if (masterDictionary[key] !== undefined && masterDictionary[key] !== '') {
    return masterDictionary[key];
  }

  // Fallback to calculatorTranslations English
  if (calculatorTranslations['en']?.[key]) {
    return calculatorTranslations['en'][key];
  }

  // Record missing key for non-English locales
  if (locale !== 'en') {
    if (!missingKeysTracker[locale]) {
      missingKeysTracker[locale] = new Set();
    }
    missingKeysTracker[locale].add(key);
  }

  // Formatting Fallback: If key starts with "calc.", convert dot notation to human text instead of leaking raw key
  if (key.startsWith('calc.')) {
    const parts = key.split('.');
    const calcName = parts[1] || '';
    const field = parts[2] || '';
    const formattedName = calcName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    if (field === 'title') return `${formattedName} Calculator`;
    if (field === 'desc') return `Calculate your ${formattedName} and explore core numerical vibrations.`;
  }

  return key;
}

// Helper to check if a specific key is translated in a locale
export function isKeyTranslated(key: string, locale: string): boolean {
  if (locale === 'en') return true;
  const targetDict = localizedDictionaries[locale];
  return Boolean(targetDict && targetDict[key] !== undefined && targetDict[key] !== '');
}

export interface LocaleAuditSummary {
  locale: string;
  name: string;
  nativeName: string;
  dir: string;
  totalMasterKeys: number;
  translatedKeys: number;
  missingKeysCount: number;
  missingKeysList: string[];
  completionPercentage: number;
  staleKeysCount: number;
  status: 'PASS' | 'WARN' | 'FAIL';
}

// Complete audit reporter for all 40 locales
export function getFullMultilingualAudit(): Record<string, LocaleAuditSummary> {
  const totalMasterKeys = Object.keys(masterDictionary).length;
  const auditResult: Record<string, LocaleAuditSummary> = {};

  supportedLocales.forEach(loc => {
    const dict = localizedDictionaries[loc] || {};
    const missingList: string[] = [];
    let translatedCount = 0;
    let staleCount = 0;

    Object.keys(masterDictionary).forEach(key => {
      if (dict[key] !== undefined && dict[key] !== '') {
        translatedCount++;
        const masterVer = translationVersions['en']?.[key] || 1;
        const targetVer = translationVersions[loc]?.[key] || 1;
        if (targetVer < masterVer) {
          staleCount++;
        }
      } else {
        missingList.push(key);
      }
    });

    const completionPercentage = Math.round((translatedCount / totalMasterKeys) * 100);
    let status: 'PASS' | 'WARN' | 'FAIL' = 'PASS';
    if (completionPercentage < 50) {
      status = 'FAIL';
    } else if (completionPercentage < 100) {
      status = 'WARN';
    }

    auditResult[loc] = {
      locale: loc,
      name: localesConfig[loc]?.name || loc,
      nativeName: localesConfig[loc]?.nativeName || loc,
      dir: localesConfig[loc]?.dir || 'ltr',
      totalMasterKeys,
      translatedKeys: translatedCount,
      missingKeysCount: missingList.length,
      missingKeysList: missingList,
      completionPercentage,
      staleKeysCount: staleCount,
      status,
    };
  });

  return auditResult;
}
