export interface CharacterAnalysis {
  char: string;
  value: number;
  isVowel: boolean;
  isConsonant: boolean;
  isSupportedLatin: boolean;
}

export interface NameAnalysisResult {
  rawName: string;
  characters: CharacterAnalysis[];
  vowelSum: number;
  consonantSum: number;
  totalSum: number;
  hasNonLatinCharacters: boolean;
  unsupportedChars: string[];
}

const PYTHAGOREAN_MAP: Record<string, number> = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
};

const STANDARD_VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

/**
 * Normalizes diacritics and accented Latin characters (e.g., José -> Jose, Müller -> Muller).
 */
export function normalizeLatinString(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Evaluates whether 'y' functions as a vowel in a given name context.
 * Rule: 'y' is considered a vowel when it is not adjacent to another vowel in the same syllable.
 */
export function isYVowel(cleanName: string, index: number): boolean {
  if (cleanName[index] !== 'y') return false;
  const prev = cleanName[index - 1];
  const next = cleanName[index + 1];
  const prevIsVowel = prev ? STANDARD_VOWELS.has(prev) : false;
  const nextIsVowel = next ? STANDARD_VOWELS.has(next) : false;
  return !prevIsVowel && !nextIsVowel;
}

/**
 * Parses and analyzes a name according to Pythagorean numerology mapping.
 */
export function analyzeName(fullName: string): NameAnalysisResult {
  const rawName = fullName || '';
  const normalized = normalizeLatinString(rawName.toLowerCase());
  const cleanName = normalized.replace(/[^a-z]/g, '');
  
  const characters: CharacterAnalysis[] = [];
  const unsupportedChars: string[] = [];
  let vowelSum = 0;
  let consonantSum = 0;
  let totalSum = 0;
  let hasNonLatin = false;

  for (let i = 0; i < rawName.length; i++) {
    const rawChar = rawName[i];
    if (/\s|[-'.]/.test(rawChar)) continue;

    const normChar = normalizeLatinString(rawChar.toLowerCase());
    const val = PYTHAGOREAN_MAP[normChar];

    if (val !== undefined) {
      const isVowelChar = STANDARD_VOWELS.has(normChar) || (normChar === 'y' && isYVowel(cleanName, cleanName.indexOf('y')));
      const isConsonantChar = !isVowelChar;

      characters.push({
        char: rawChar,
        value: val,
        isVowel: isVowelChar,
        isConsonant: isConsonantChar,
        isSupportedLatin: true,
      });

      totalSum += val;
      if (isVowelChar) vowelSum += val;
      if (isConsonantChar) consonantSum += val;
    } else {
      hasNonLatin = true;
      if (!unsupportedChars.includes(rawChar)) {
        unsupportedChars.push(rawChar);
      }
      characters.push({
        char: rawChar,
        value: 0,
        isVowel: false,
        isConsonant: false,
        isSupportedLatin: false,
      });
    }
  }

  return {
    rawName,
    characters,
    vowelSum,
    consonantSum,
    totalSum,
    hasNonLatinCharacters: hasNonLatin,
    unsupportedChars,
  };
}
