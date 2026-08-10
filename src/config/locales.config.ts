export interface LocaleConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  isDefault?: boolean;
}

export const localesConfig: Record<string, LocaleConfig> = {
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', isDefault: true },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr' },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr' },
  pl: { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr' },
  sv: { code: 'sv', name: 'Swedish', nativeName: 'Svenska', dir: 'ltr' },
  da: { code: 'da', name: 'Danish', nativeName: 'Dansk', dir: 'ltr' },
  no: { code: 'no', name: 'Norwegian', nativeName: 'Norsk', dir: 'ltr' },
  fi: { code: 'fi', name: 'Finnish', nativeName: 'Suomi', dir: 'ltr' },
  is: { code: 'is', name: 'Icelandic', nativeName: 'Íslenska', dir: 'ltr' },
  cs: { code: 'cs', name: 'Czech', nativeName: 'Čeština', dir: 'ltr' },
  sk: { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', dir: 'ltr' },
  hu: { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', dir: 'ltr' },
  ro: { code: 'ro', name: 'Romanian', nativeName: 'Română', dir: 'ltr' },
  bg: { code: 'bg', name: 'Bulgarian', nativeName: 'Български', dir: 'ltr' },
  el: { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', dir: 'ltr' },
  uk: { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', dir: 'ltr' },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  ms: { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', dir: 'ltr' },
  vi: { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', dir: 'ltr' },
  th: { code: 'th', name: 'Thai', nativeName: 'ไทย', dir: 'ltr' },
  zh: { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr' },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr' },
  ta: { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr' },
  te: { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', dir: 'ltr' },
  mr: { code: 'mr', name: 'Marathi', nativeName: 'मराठी', dir: 'ltr' },
  gu: { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', dir: 'ltr' },
  kn: { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', dir: 'ltr' },
  ml: { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', dir: 'ltr' },
  pa: { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', dir: 'ltr' },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl' },
};

export const defaultLocale = 'en';
export const supportedLocales = Object.keys(localesConfig);
