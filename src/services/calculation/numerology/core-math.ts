/**
 * Pythagorean & Chaldean Letter Mapping Systems
 * Governed by 01_ARCHITECTURE.md & 04_DOMAIN_SPEC.md
 */

export const PYTHAGOREAN_MAP: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9,
};

export const CHALDEAN_MAP: Record<string, number> = {
  a: 1, i: 1, j: 1, q: 1, y: 1,
  b: 2, k: 2, r: 2,
  c: 3, g: 3, l: 3, s: 3,
  d: 4, m: 4, t: 4,
  e: 5, h: 5, n: 5, x: 5,
  u: 6, v: 6, w: 6,
  o: 7, z: 7,
  f: 8, p: 8,
};

export const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'y']);

export function reduceToSingleDigit(num: number, keepMaster: boolean = true): number {
  if (keepMaster && (num === 11 || num === 22 || num === 33)) {
    return num;
  }
  let sum = num;
  while (sum > 9 && (!keepMaster || (sum !== 11 && sum !== 22 && sum !== 33))) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }
  return sum;
}

export function calculateNameScore(
  name: string,
  system: 'pythagorean' | 'chaldean' = 'pythagorean',
  filter?: 'vowels' | 'consonants'
): number {
  const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
  const map = system === 'pythagorean' ? PYTHAGOREAN_MAP : CHALDEAN_MAP;

  let total = 0;
  for (const char of cleanName) {
    const isVowel = VOWELS.has(char);
    if (filter === 'vowels' && !isVowel) continue;
    if (filter === 'consonants' && isVowel) continue;
    total += map[char] || 0;
  }

  return reduceToSingleDigit(total);
}
