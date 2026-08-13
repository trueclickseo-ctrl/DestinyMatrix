export interface LocaleConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  enabled: boolean;
  isDefault?: boolean;
}

export const localesConfig: Record<string, LocaleConfig> = {
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', enabled: true, isDefault: true },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', enabled: true },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', enabled: true },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', enabled: true },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', enabled: true },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr', enabled: true },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr', enabled: true },
  pl: { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr', enabled: true },
  sv: { code: 'sv', name: 'Swedish', nativeName: 'Svenska', dir: 'ltr', enabled: true },
  da: { code: 'da', name: 'Danish', nativeName: 'Dansk', dir: 'ltr', enabled: true },
  no: { code: 'no', name: 'Norwegian', nativeName: 'Norsk', dir: 'ltr', enabled: true },
  fi: { code: 'fi', name: 'Finnish', nativeName: 'Suomi', dir: 'ltr', enabled: true },
  is: { code: 'is', name: 'Icelandic', nativeName: 'Íslenska', dir: 'ltr', enabled: true },
  cs: { code: 'cs', name: 'Czech', nativeName: 'Čeština', dir: 'ltr', enabled: true },
  sk: { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', dir: 'ltr', enabled: true },
  hu: { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', dir: 'ltr', enabled: true },
  ro: { code: 'ro', name: 'Romanian', nativeName: 'Română', dir: 'ltr', enabled: true },
  bg: { code: 'bg', name: 'Bulgarian', nativeName: 'Български', dir: 'ltr', enabled: true },
  el: { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', dir: 'ltr', enabled: true },
  uk: { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', dir: 'ltr', enabled: true },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr', enabled: true },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', enabled: true },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr', enabled: true },
  ms: { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', dir: 'ltr', enabled: true },
  vi: { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', dir: 'ltr', enabled: true },
  th: { code: 'th', name: 'Thai', nativeName: 'ไทย', dir: 'ltr', enabled: true },
  zh: { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr', enabled: true },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr', enabled: true },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr', enabled: true },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', enabled: true },
  hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr', enabled: true },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr', enabled: true },
  ta: { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr', enabled: true },
  te: { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', dir: 'ltr', enabled: true },
  mr: { code: 'mr', name: 'Marathi', nativeName: 'मराठी', dir: 'ltr', enabled: true },
  gu: { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', dir: 'ltr', enabled: true },
  kn: { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', dir: 'ltr', enabled: true },
  ml: { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', dir: 'ltr', enabled: true },
  pa: { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', dir: 'ltr', enabled: true },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl', enabled: true },
};

export const defaultLocale = 'en';
export const supportedLocales = Object.keys(localesConfig).filter(code => localesConfig[code].enabled);

export function getLocaleConfig(code: string): LocaleConfig {
  return localesConfig[code] || localesConfig[defaultLocale];
}
