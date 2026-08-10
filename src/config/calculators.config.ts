export interface CalculatorConfig {
  id: string;
  slug: string;
  pillar: string;
  icon: string;
  inputType: 'date' | 'name' | 'address' | 'phone' | 'plate' | 'compatibility';
  titleKey: string;
  descKey: string;
}

export const numerologyCalculators: CalculatorConfig[] = [
  { id: 'life-path-number', slug: 'life-path-number', pillar: 'numerology', icon: '✨', inputType: 'date', titleKey: 'calc.lifePath.title', descKey: 'calc.lifePath.desc' },
  { id: 'destiny-number', slug: 'destiny-number', pillar: 'numerology', icon: '🌌', inputType: 'name', titleKey: 'calc.destiny.title', descKey: 'calc.destiny.desc' },
  { id: 'soul-urge-number', slug: 'soul-urge-number', pillar: 'numerology', icon: '💖', inputType: 'name', titleKey: 'calc.soulUrge.title', descKey: 'calc.soulUrge.desc' },
  { id: 'expression-number', slug: 'expression-number', pillar: 'numerology', icon: '🔮', inputType: 'name', titleKey: 'calc.expression.title', descKey: 'calc.expression.desc' },
  { id: 'birthday-number', slug: 'birthday-number', pillar: 'numerology', icon: '🎂', inputType: 'date', titleKey: 'calc.birthday.title', descKey: 'calc.birthday.desc' },
  { id: 'personality-number', slug: 'personality-number', pillar: 'numerology', icon: '🎭', inputType: 'name', titleKey: 'calc.personality.title', descKey: 'calc.personality.desc' },
  { id: 'maturity-number', slug: 'maturity-number', pillar: 'numerology', icon: '🌳', inputType: 'date', titleKey: 'calc.maturity.title', descKey: 'calc.maturity.desc' },
  { id: 'balance-number', slug: 'balance-number', pillar: 'numerology', icon: '⚖️', inputType: 'name', titleKey: 'calc.balance.title', descKey: 'calc.balance.desc' },
  { id: 'karmic-debt-number', slug: 'karmic-debt-number', pillar: 'numerology', icon: '🔗', inputType: 'date', titleKey: 'calc.karmicDebt.title', descKey: 'calc.karmicDebt.desc' },
  { id: 'karmic-lesson-number', slug: 'karmic-lesson-number', pillar: 'numerology', icon: '📖', inputType: 'name', titleKey: 'calc.karmicLesson.title', descKey: 'calc.karmicLesson.desc' },
  { id: 'challenge-number', slug: 'challenge-number', pillar: 'numerology', icon: '🏔️', inputType: 'date', titleKey: 'calc.challenge.title', descKey: 'calc.challenge.desc' },
  { id: 'pinnacle-number', slug: 'pinnacle-number', pillar: 'numerology', icon: '👑', inputType: 'date', titleKey: 'calc.pinnacle.title', descKey: 'calc.pinnacle.desc' },
  { id: 'bridge-number', slug: 'bridge-number', pillar: 'numerology', icon: '🌉', inputType: 'name', titleKey: 'calc.bridge.title', descKey: 'calc.bridge.desc' },
  { id: 'essence-number', slug: 'essence-number', pillar: 'numerology', icon: '🌿', inputType: 'name', titleKey: 'calc.essence.title', descKey: 'calc.essence.desc' },
  { id: 'personal-year', slug: 'personal-year', pillar: 'numerology', icon: '📅', inputType: 'date', titleKey: 'calc.personalYear.title', descKey: 'calc.personalYear.desc' },
  { id: 'personal-month', slug: 'personal-month', pillar: 'numerology', icon: '🌙', inputType: 'date', titleKey: 'calc.personalMonth.title', descKey: 'calc.personalMonth.desc' },
  { id: 'personal-day', slug: 'personal-day', pillar: 'numerology', icon: '☀️', inputType: 'date', titleKey: 'calc.personalDay.title', descKey: 'calc.personalDay.desc' },
  { id: 'lucky-number', slug: 'lucky-number', pillar: 'numerology', icon: '🍀', inputType: 'date', titleKey: 'calc.luckyNumber.title', descKey: 'calc.luckyNumber.desc' },
  { id: 'name-numerology', slug: 'name-numerology', pillar: 'numerology', icon: '✍️', inputType: 'name', titleKey: 'calc.nameNumerology.title', descKey: 'calc.nameNumerology.desc' },
  { id: 'business-numerology', slug: 'business-numerology', pillar: 'numerology', icon: '💼', inputType: 'name', titleKey: 'calc.businessNumerology.title', descKey: 'calc.businessNumerology.desc' },
  { id: 'house-numerology', slug: 'house-numerology', pillar: 'numerology', icon: '🏡', inputType: 'address', titleKey: 'calc.houseNumerology.title', descKey: 'calc.houseNumerology.desc' },
  { id: 'phone-numerology', slug: 'phone-numerology', pillar: 'numerology', icon: '📱', inputType: 'phone', titleKey: 'calc.phoneNumerology.title', descKey: 'calc.phoneNumerology.desc' },
  { id: 'vehicle-numerology', slug: 'vehicle-numerology', pillar: 'numerology', icon: '🚗', inputType: 'plate', titleKey: 'calc.vehicleNumerology.title', descKey: 'calc.vehicleNumerology.desc' },
  { id: 'marriage-numerology', slug: 'marriage-numerology', pillar: 'numerology', icon: '💍', inputType: 'date', titleKey: 'calc.marriageNumerology.title', descKey: 'calc.marriageNumerology.desc' },
  { id: 'career-numerology', slug: 'career-numerology', pillar: 'numerology', icon: '🚀', inputType: 'name', titleKey: 'calc.careerNumerology.title', descKey: 'calc.careerNumerology.desc' },
  { id: 'compatibility-numerology', slug: 'compatibility-numerology', pillar: 'numerology', icon: '💞', inputType: 'compatibility', titleKey: 'calc.compatibilityNumerology.title', descKey: 'calc.compatibilityNumerology.desc' },
];
