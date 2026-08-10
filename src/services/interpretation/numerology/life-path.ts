export interface LifePathInterpretation {
  number: number;
  title: Record<string, string>;
  summary: Record<string, string>;
  strengths: Record<string, string[]>;
  weaknesses: Record<string, string[]>;
}

export const lifePathInterpretations: Record<number, LifePathInterpretation> = {
  1: {
    number: 1,
    title: {
      en: 'The Leader & Pioneer',
      ar: 'القائد والرواد',
    },
    summary: {
      en: 'Life Path 1 individuals are natural-born leaders, independent, ambitious, and self-motivated. You possess strong determination and love carving your own path.',
      ar: 'أصحاب مسار الحياة 1 هم قادة بالفطرة، ومستقلون، وطموحون، وذوو دوافع ذاتية. تمتلك عزيمة قوية وتحب رسم طريقك الخاص.',
    },
    strengths: {
      en: ['Leadership', 'Innovation', 'Independence', 'Determination'],
      ar: ['القيادة', 'الابتكار', 'الاستقلالية', 'العزيمة'],
    },
    weaknesses: {
      en: ['Impatience', 'Dominance', 'Self-criticism'],
      ar: ['قلة الصبر', 'الهيمنة', 'نقد الذات'],
    },
  },
};

export function getLifePathInterpretation(num: number, locale: string = 'en') {
  const data = lifePathInterpretations[num] || lifePathInterpretations[1];
  return {
    number: data.number,
    title: data.title[locale] || data.title['en'],
    summary: data.summary[locale] || data.summary['en'],
    strengths: data.strengths[locale] || data.strengths['en'],
    weaknesses: data.weaknesses[locale] || data.weaknesses['en'],
  };
}
