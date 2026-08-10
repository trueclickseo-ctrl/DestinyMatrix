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

// Master English Dictionary
export const masterDictionary: Record<string, string> = { ...uiTranslations_en };

// Registered Localized Dictionaries for all 40 supported locales
const localizedDictionaries: Record<string, Record<string, string>> = {
  en: uiTranslations_en,
  de: uiTranslations_de,
  fr: uiTranslations_fr,
  es: uiTranslations_es,
  pt: uiTranslations_pt,
  it: uiTranslations_it,
  nl: uiTranslations_nl,
  pl: uiTranslations_pl,
  sv: uiTranslations_sv,
  da: uiTranslations_da,
  no: uiTranslations_no,
  fi: uiTranslations_fi,
  is: uiTranslations_is,
  cs: uiTranslations_cs,
  sk: uiTranslations_sk,
  hu: uiTranslations_hu,
  ro: uiTranslations_ro,
  bg: uiTranslations_bg,
  el: uiTranslations_el,
  uk: uiTranslations_uk,
  ru: uiTranslations_ru,
  tr: uiTranslations_tr,
  id: uiTranslations_id,
  ms: uiTranslations_ms,
  vi: uiTranslations_vi,
  th: uiTranslations_th,
  zh: uiTranslations_zh,
  ja: uiTranslations_ja,
  ko: uiTranslations_ko,
  ar: uiTranslations_ar,
  hi: uiTranslations_hi,
  bn: uiTranslations_bn,
  ta: uiTranslations_ta,
  te: uiTranslations_te,
  mr: uiTranslations_mr,
  gu: uiTranslations_gu,
  kn: uiTranslations_kn,
  ml: uiTranslations_ml,
  pa: uiTranslations_pa,
  ur: uiTranslations_ur,
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

  // Record missing key for non-English locales
  if (locale !== 'en') {
    if (!missingKeysTracker[locale]) {
      missingKeysTracker[locale] = new Set();
    }
    missingKeysTracker[locale].add(key);
  }

  // Fallback to Master English
  return masterDictionary[key] || key;
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
