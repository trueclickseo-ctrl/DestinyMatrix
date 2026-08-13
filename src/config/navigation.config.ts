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
      { key: 'nav.lifePathNumber', href: 'calculators/life-path-number/' },
      { key: 'nav.destinyNumber', href: 'calculators/destiny-number/' },
      { key: 'nav.soulUrgeNumber', href: 'calculators/soul-urge-number/' },
      { key: 'nav.personalityNumber', href: 'calculators/personality-number/' },
      { key: 'nav.personalYear', href: 'calculators/personal-year/' },
      { key: 'nav.essenceNumber', href: 'calculators/essence-number/' },
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
      { key: 'nav.personalYearCalc', href: 'calculators/personal-year/' },
      { key: 'nav.essenceCalc', href: 'calculators/essence-number/' },
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
      { key: 'nav.lifePathNumber', href: 'calculators/life-path-number/' },
      { key: 'nav.destinyNumber', href: 'calculators/destiny-number/' },
      { key: 'nav.soulUrgeNumber', href: 'calculators/soul-urge-number/' },
      { key: 'nav.personalityNumber', href: 'calculators/personality-number/' },
      { key: 'nav.personalYear', href: 'calculators/personal-year/' },
      { key: 'nav.essenceNumber', href: 'calculators/essence-number/' },
    ],
  },
  {
    titleKey: 'nav.calculators',
    items: [
      { key: 'nav.allCalculators', href: 'calculators/' },
      { key: 'nav.lifePathCalc', href: 'calculators/life-path-number/' },
      { key: 'nav.destinyCalc', href: 'calculators/destiny-number/' },
      { key: 'nav.soulUrgeCalc', href: 'calculators/soul-urge-number/' },
      { key: 'nav.personalYearCalc', href: 'calculators/personal-year/' },
      { key: 'nav.essenceCalc', href: 'calculators/essence-number/' },
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
