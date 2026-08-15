export interface NavItem {
  key: string;
  href: string; // Relative path without locale, e.g. 'numerology/' or ''
  children?: NavItem[];
}

export const headerNavTaxonomy: NavItem[] = [
  {
    key: 'nav.home',
    href: '',
  },
  {
    key: 'nav.numerology',
    href: 'numerology/',
    children: [
      { key: 'nav.numerologyOverview', href: 'numerology/' },
      { key: 'nav.lifePathNumber', href: 'numerology/life-path-number/' },
      { key: 'nav.destinyNumber', href: 'numerology/destiny-number/' },
      { key: 'nav.soulUrgeNumber', href: 'numerology/soul-urge-number/' },
      { key: 'nav.personalityNumber', href: 'numerology/personality-number/' },
      { key: 'nav.personalYear', href: 'numerology/personal-year/' },
      { key: 'nav.essenceNumber', href: 'numerology/essence-number/' },
    ],
  },
  {
    key: 'nav.destinyMatrix',
    href: '',
    children: [
      { key: 'nav.destinyMatrixEngine', href: '' },
      { key: 'nav.arcanaLibrary', href: 'destiny-matrix/arcana/' },
      { key: 'nav.birthdayProfiles', href: 'destiny-matrix/birthdays/' },
    ],
  },
  {
    key: 'nav.calculators',
    href: 'calculators/',
    children: [
      { key: 'nav.allCalculators', href: 'calculators/' },
      { key: 'nav.lifePathCalc', href: 'calculators/life-path-number/' },
      { key: 'nav.destinyCalc', href: 'calculators/destiny-number/' },
      { key: 'nav.soulUrgeCalc', href: 'calculators/soul-urge-number/' },
      { key: 'nav.vehicleCalc', href: 'calculators/vehicle-numerology/' },
      { key: 'nav.personalYearCalc', href: 'calculators/personal-year/' },
      { key: 'nav.compatibilityCalc', href: 'calculators/compatibility-numerology/' },
    ],
  },
  {
    key: 'nav.arcana',
    href: 'destiny-matrix/arcana/',
  },
  {
    key: 'nav.birthdays',
    href: 'destiny-matrix/birthdays/',
  },
  {
    key: 'nav.guides',
    href: 'guides/',
  },
];

export interface FooterColumn {
  titleKey: string;
  items: { key: string; href: string }[];
}

export const footerNavTaxonomy: FooterColumn[] = [
  {
    titleKey: 'footer.destinySection',
    items: [
      { key: 'nav.destinyMatrixEngine', href: '' },
      { key: 'nav.arcanaLibrary', href: 'destiny-matrix/arcana/' },
      { key: 'nav.birthdayProfiles', href: 'destiny-matrix/birthdays/' },
      { key: 'nav.guides', href: 'guides/' },
    ],
  },
  {
    titleKey: 'footer.numerologySection',
    items: [
      { key: 'nav.numerologyOverview', href: 'numerology/' },
      { key: 'nav.lifePathNumber', href: 'numerology/life-path-number/' },
      { key: 'nav.destinyNumber', href: 'numerology/destiny-number/' },
      { key: 'nav.soulUrgeNumber', href: 'numerology/soul-urge-number/' },
      { key: 'nav.personalityNumber', href: 'numerology/personality-number/' },
      { key: 'nav.karmicDebtNumber', href: 'numerology/karmic-debt-number/' },
    ],
  },
  {
    titleKey: 'footer.specialtyCalc',
    items: [
      { key: 'nav.allCalculators', href: 'calculators/' },
      { key: 'nav.vehicleCalc', href: 'calculators/vehicle-numerology/' },
      { key: 'nav.houseCalc', href: 'calculators/house-numerology/' },
      { key: 'nav.phoneCalc', href: 'calculators/phone-numerology/' },
      { key: 'nav.marriageCalc', href: 'calculators/marriage-numerology/' },
      { key: 'nav.businessCalc', href: 'calculators/business-numerology/' },
      { key: 'nav.compatibilityCalc', href: 'calculators/compatibility-numerology/' },
    ],
  },
  {
    titleKey: 'footer.legal',
    items: [
      { key: 'nav.contact', href: 'contact/' },
      { key: 'nav.terms', href: 'terms/' },
      { key: 'nav.privacy', href: 'privacy/' },
      { key: 'nav.disclaimer', href: 'disclaimer/' },
    ],
  },
];
