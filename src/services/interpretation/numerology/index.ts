export interface NumerologyInterpretation {
  number: number;
  title: Record<string, string>;
  summary: Record<string, string>;
  strengths: Record<string, string[]>;
  weaknesses: Record<string, string[]>;
  vibration: Record<string, string>;
}

export const NUMEROLOGY_DICTIONARY: Record<number, NumerologyInterpretation> = {
  1: {
    number: 1,
    title: { en: 'The Independent Leader & Pioneer', ar: 'القائد المستقل والرواد' },
    summary: {
      en: 'Vibration 1 signifies raw potential, individuality, leadership, and pioneering courage.',
      ar: 'رمزية الرقم 1 تعبر عن القيادة، الاستقلالية، والشجاعة في الابتكار.',
    },
    strengths: { en: ['Pioneering Vision', 'High Ambition', 'Self-Motivation', 'Originality'], ar: ['الرؤية الابتكارية', 'الطموح العالي', 'التحفيز الذاتي', 'الأصالة'] },
    weaknesses: { en: ['Impatience', 'Dominance', 'Self-Reliance Overload'], ar: ['قلة الصبر', 'الهيمنة', 'الإفراط في الاعتماد على الذات'] },
    vibration: { en: 'Sun Energy — Vitality & Creation', ar: 'طاقة الشمس — الحيوية والخلق' },
  },
  2: {
    number: 2,
    title: { en: 'The Harmony Weaver & Diplomat', ar: 'منسق التناغم والدبلوماسي' },
    summary: {
      en: 'Vibration 2 embodies empathy, cooperation, partnership, and subtle intuitive strength.',
      ar: 'يعبر الرقم 2 عن التعاطف، التعاون، والشراكة العاطفية الروحية.',
    },
    strengths: { en: ['Diplomacy', 'Deep Empathy', 'Patience', 'Intuitive Guidance'], ar: ['الدبلوماسية', 'التعاطف العميق', 'الصبر', 'الإلهام الحدسي'] },
    weaknesses: { en: ['Over-Sensitivity', 'Conflict Avoidance', 'Hesitation'], ar: ['الحساسية المفرطة', 'تجنب المواجهة', 'التردد'] },
    vibration: { en: 'Moon Energy — Sensitivity & Intuition', ar: 'طاقة القمر — الحساسية والحدس' },
  },
  3: {
    number: 3,
    title: { en: 'The Creative Catalyst & Communicator', ar: 'المحفز المبدع والمتحدث' },
    summary: {
      en: 'Vibration 3 represents self-expression, joy, artistic talent, and magnetic charisma.',
      ar: 'يرمز الرقم 3 إلى التعبير عن الذات، البهجة، والإبداع الفني والجاذبية.',
    },
    strengths: { en: ['Artistic Brilliance', 'Charisma', 'Optimism', 'Inspiring Speech'], ar: ['الإبداع الفني', 'الجاذبية', 'التفاؤل', 'التأثير الكلامي'] },
    weaknesses: { en: ['Scattered Energy', 'Superficiality', 'Mood Swings'], ar: ['تشتت الطاقة', 'السطحية', 'تقلب المزاج'] },
    vibration: { en: 'Jupiter Energy — Expansion & Joy', ar: 'طاقة المشتري — التوسع والبهجة' },
  },
  4: {
    number: 4,
    title: { en: 'The Master Builder & Foundation', ar: 'البناء الخبير وركيزة الاستقرار' },
    summary: {
      en: 'Vibration 4 stands for stability, systematic work, discipline, and practical wisdom.',
      ar: 'يعبر الرقم 4 عن الاستقرار، العمل المنظم، الانضباط والحكمة العملية.',
    },
    strengths: { en: ['Unshakable Loyalty', 'Systematic Order', 'Practicality', 'Perseverance'], ar: ['الولاء الراسخ', 'النظام', 'الواقعية', 'المثابرة'] },
    weaknesses: { en: ['Rigidity', 'Resistance to Change', 'Over-Cautiousness'], ar: ['الجمود', 'مقاومة التغيير', 'الحذر المفرط'] },
    vibration: { en: 'Earth Energy — Structure & Manifestation', ar: 'طاقة الأرض — البناء والتجسيد' },
  },
  5: {
    number: 5,
    title: { en: 'The Freedom Seeker & Explorer', ar: 'باحث الحرية والمستكشف' },
    summary: {
      en: 'Vibration 5 brings adaptability, love for freedom, adventurous spirit, and versatility.',
      ar: 'يمثل الرقم 5 التكيف، حب الحرية، روح المغامرة والمرونة عالية المستوى.',
    },
    strengths: { en: ['Adaptability', 'Courageous Curiosity', 'Resourcefulness', 'Versatility'], ar: ['التكيف', 'الفضول الشجاع', 'الدهاء', 'تعدد المهارات'] },
    weaknesses: { en: ['Restlessness', 'Impulsiveness', 'Lack of Focus'], ar: ['القلق الدائم', 'الاندفاع', 'ضعف التركيز'] },
    vibration: { en: 'Mercury Energy — Motion & Adaptability', ar: 'طاقة عطارد — الحركة والتكيف' },
  },
  6: {
    number: 6,
    title: { en: 'The Nurturing Guardian & Healer', ar: 'المربي الراعي والشافي' },
    summary: {
      en: 'Vibration 6 represents unconditional love, family responsibility, harmony, and healing.',
      ar: 'يرمز الرقم 6 إلى الحب غير المشروط، المسؤولية العائلية والتناغم الشفائي.',
    },
    strengths: { en: ['Compassion', 'Healing Energy', 'Protective Care', 'Artistic Eye'], ar: ['الرحمة', 'طاقة الشفاء', 'الحماية', 'الذوق الفني'] },
    weaknesses: { en: ['Self-Sacrifice', 'Meddling', 'Perfectionism'], ar: ['التضحية المفرطة', 'التدخل', 'المثالية'] },
    vibration: { en: 'Venus Energy — Harmony & Cosmic Love', ar: 'طاقة الزهرة — التناغم والحب الإلهي' },
  },
  7: {
    number: 7,
    title: { en: 'The Mystic Seeker & Philosopher', ar: 'الباحث الباطني والفيلسوف' },
    summary: {
      en: 'Vibration 7 embodies deep spiritual analysis, wisdom, introspection, and truth-seeking.',
      ar: 'يمثل الرقم 7 التحليل الروحي العميق، الحكمة، والتأمل الباطني في الحقائق.',
    },
    strengths: { en: ['Analytical Mind', 'Intuitive Wisdom', 'Spiritual Insight', 'Perception'], ar: ['العقل التحليلي', 'الحكمة الحدسية', 'البصيرة الروحية', 'الإدراك'] },
    weaknesses: { en: ['Isolation', 'Skepticism', 'Detachment'], ar: ['العزلة', 'التشكيك', 'الانفصال العاطفي'] },
    vibration: { en: 'Neptune Energy — Wisdom & Transcendence', ar: 'طاقة نبتون — الحكمة والسامي' },
  },
  8: {
    number: 8,
    title: { en: 'The Power Strategist & Authority', ar: 'المخطط الاستراتيجي والقوة' },
    summary: {
      en: 'Vibration 8 commands material mastery, executive power, karmic balance, and ambition.',
      ar: 'يعبر الرقم 8 عن التمكن المادي، القوة التنفيذية، والتوازن الكارمي والطموح.',
    },
    strengths: { en: ['Executive Mastery', 'Financial Vision', 'Resilience', 'Karmic Mastery'], ar: ['التمكن التنفيذي', 'الرؤية المالية', 'القدرة على النهوض', 'الاتزان الكارمي'] },
    weaknesses: { en: ['Workaholism', 'Material Stress', 'Control Tendencies'], ar: ['الإدمان على العمل', 'الضغط المادي', 'الرغبة في السيطرة'] },
    vibration: { en: 'Saturn Energy — Mastery & Authority', ar: 'طاقة زحل — التمكن والانضباط' },
  },
  9: {
    number: 9,
    title: { en: 'The Universal Humanitarian & Sage', ar: 'الإنساني العالمي والحكيم' },
    summary: {
      en: 'Vibration 9 represents completion, universal compassion, spiritual wisdom, and selfless service.',
      ar: 'يرمز الرقم 9 إلى الاكتمل، الرحمة العالمية، الحكمة الروحية والخدمة الإنسانية.',
    },
    strengths: { en: ['Universal Empathy', 'Broad Vision', 'Selfless Giving', 'Artistic Mastery'], ar: ['التعاطف الشامل', 'الرؤية الواسعة', 'العطاء', 'الإبداع الفني'] },
    weaknesses: { en: ['Emotional Burden', 'Over-idealism', 'Difficulty Letting Go'], ar: ['الثقل العاطفي', 'المثالية المفرطة', 'صعوبة التخلي'] },
    vibration: { en: 'Cosmic Completion — Universal Love', ar: 'الاكتمال الكوني — الحب الشامل' },
  },
};

export function getNumerologyInterpretation(num: number, locale: string = 'en') {
  const reduced = num > 9 && num !== 11 && num !== 22 && num !== 33 ? (num % 9 || 9) : num;
  const data = NUMEROLOGY_DICTIONARY[reduced] || NUMEROLOGY_DICTIONARY[1];

  return {
    number: num,
    title: data.title[locale] || data.title['en'],
    summary: data.summary[locale] || data.summary['en'],
    strengths: data.strengths[locale] || data.strengths['en'],
    weaknesses: data.weaknesses[locale] || data.weaknesses['en'],
    vibration: data.vibration[locale] || data.vibration['en'],
  };
}
