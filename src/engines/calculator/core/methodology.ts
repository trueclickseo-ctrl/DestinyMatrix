import type { MethodologyRecord } from './types';

export const METHODOLOGY_REGISTRY: Record<string, MethodologyRecord> = {
  'destiny-matrix': {
    calculatorId: 'destiny-matrix',
    name: 'Destiny Matrix Chart Engine',
    system: 'Natalia Ladini 22 Arcana Matrix of Destiny Framework (mid-2000s)',
    methodologyVersion: '1.0',
    status: 'VERIFIED_WITH_METHODOLOGY_NOTE',
    reductionRule: 'If value > 22, sum digits repeatedly until 1 <= value <= 22.',
    masterNumberPolicy: 'Preserves 1-22 Major Arcana numbers.',
    edgeCasePolicy: 'Zeros or invalid inputs fallback to Arcana 1.',
    disclosures: [
      'Destiny Matrix calculations are based on the 22 Arcana system popularized in the mid-2000s by Natalia Ladini.',
      'The chart and 7 Chakra energy table represent esoteric self-reflection correspondences, not scientific or medical diagnoses.',
    ],
    sources: [
      'Natalia Ladini Matrix of Destiny Method (2006)',
      '22 Major Arcana Tarot System Correspondences',
    ],
  },
  'life-path-number': {
    calculatorId: 'life-path-number',
    name: 'Life Path Number Engine',
    system: 'Pythagorean Numerology (Period Reduction Method)',
    methodologyVersion: '1.0',
    status: 'VERIFIED_WITH_METHODOLOGY_NOTE',
    reductionRule: 'Month, Day, and Year are reduced separately before summing to preserve intermediate Master Numbers (11, 22). The final total is reduced to 1-9 or Master Numbers 11, 22, 33.',
    masterNumberPolicy: 'Preserves 11, 22, 33 at intermediate and final stages.',
    edgeCasePolicy: 'Leap years (Feb 29) and century bounds are parsed using strict Gregorian calendar validation.',
    disclosures: [
      'Different numerology traditions calculate Life Path numbers using either period reduction or raw digit summing. Souliography uses the classical period-reduction method to honor intermediate master numbers.',
    ],
    sources: [
      'Pythagorean Numerology Standard Reference',
      'Matthew Oliver Goodwin, Numerology: The Complete Guide',
    ],
  },
  'destiny-number': {
    calculatorId: 'destiny-number',
    name: 'Destiny / Expression Number Engine',
    system: 'Pythagorean English Alphabet Transliteration',
    methodologyVersion: '1.0',
    status: 'VERIFIED_WITH_METHODOLOGY_NOTE',
    reductionRule: 'All letter values in full legal name (A=1...Z=8) are summed and reduced to 1-9 or Master Numbers 11, 22, 33.',
    masterNumberPolicy: 'Preserves 11, 22, 33.',
    edgeCasePolicy: 'Accented characters are normalized to base Latin equivalents. Non-Latin characters display an informative methodology notice.',
    disclosures: [
      'Standard Pythagorean name numerology is designed for the Latin alphabet. Accented letters are normalized; non-Latin scripts display an explicit methodology note.',
    ],
    sources: [
      'Pythagorean Name Numerology Mapping System',
    ],
  },
  'soul-urge-number': {
    calculatorId: 'soul-urge-number',
    name: 'Soul Urge (Heart Desire) Engine',
    system: 'Pythagorean Vowels Numerology',
    methodologyVersion: '1.0',
    status: 'VERIFIED_WITH_METHODOLOGY_NOTE',
    reductionRule: 'Vowel letter values (A, E, I, O, U, and Y when acting as a vowel) are summed and reduced to 1-9 or 11, 22, 33.',
    masterNumberPolicy: 'Preserves 11, 22, 33.',
    edgeCasePolicy: 'Y is treated as a vowel when not adjacent to another vowel in the same syllable.',
    disclosures: [
      'Soul Urge calculates the vibration of vowel sounds in your birth name.',
    ],
    sources: [
      'Pythagorean Vowel Analysis Standard',
    ],
  },
  'personality-number': {
    calculatorId: 'personality-number',
    name: 'Personality Number Engine',
    system: 'Pythagorean Consonants Numerology',
    methodologyVersion: '1.0',
    status: 'VERIFIED_WITH_METHODOLOGY_NOTE',
    reductionRule: 'Consonant letter values are summed and reduced to 1-9 or 11, 22, 33.',
    masterNumberPolicy: 'Preserves 11, 22, 33.',
    edgeCasePolicy: 'Consonants exclude standard vowels and vocalic Y.',
    disclosures: [
      'Personality Number calculates the outer persona projected to others via consonant vibrations.',
    ],
    sources: [
      'Pythagorean Consonant Analysis Standard',
    ],
  },
  'personal-year': {
    calculatorId: 'personal-year',
    name: 'Personal Year Engine',
    system: 'Pythagorean Cycle Numerology',
    methodologyVersion: '1.0',
    status: 'VERIFIED_WITH_METHODOLOGY_NOTE',
    reductionRule: 'Birth Month + Birth Day + Target Year digit sum, reduced to 1-9 or 11, 22.',
    masterNumberPolicy: 'Preserves 11, 22.',
    edgeCasePolicy: 'Calculated relative to specific calendar year transits.',
    disclosures: [
      'Personal Year maps annual 9-year evolutionary cycles.',
    ],
    sources: [
      'Pythagorean Annual Transit Cycles',
    ],
  },
  'compatibility': {
    calculatorId: 'compatibility',
    name: 'Compatibility Matrix Engine',
    system: 'Natalia Ladini Dual Matrix Interaction',
    methodologyVersion: '1.0',
    status: 'VERIFIED_WITH_METHODOLOGY_NOTE',
    reductionRule: 'Corresponding matrix nodes of Partner A and Partner B are combined and reduced via reduceTo22(Node_A + Node_B).',
    masterNumberPolicy: 'Preserves 1-22 Arcana.',
    edgeCasePolicy: 'Requires valid birth dates for both partners.',
    disclosures: [
      'Compatibility Matrix compares energy alignment and potential friction between two charts.',
    ],
    sources: [
      'Natalia Ladini Relationship Compatibility Framework',
    ],
  },
};
