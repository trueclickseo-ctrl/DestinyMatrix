import { calculateLifePath } from './calculation';

export interface GoldenTestVector {
  dob: string;
  expectedDay: number;
  expectedMonth: number;
  expectedYear: number;
  expectedMonthReduced: number;
  expectedDayReduced: number;
  expectedYearReduced: number;
  expectedLifePath: number;
  expectedIsMaster: boolean;
  description: string;
}

export const LIFE_PATH_GOLDEN_VECTORS: GoldenTestVector[] = [
  {
    dob: '1995-02-05',
    expectedDay: 5,
    expectedMonth: 2,
    expectedYear: 1995,
    expectedMonthReduced: 2,
    expectedDayReduced: 5,
    expectedYearReduced: 6, // 1+9+9+5 = 24 -> 6
    expectedLifePath: 4,    // 2+5+6 = 13 -> 4
    expectedIsMaster: false,
    description: 'Standard single-digit date (Feb 5, 1995 -> 4)',
  },
  {
    dob: '1900-01-01',
    expectedDay: 1,
    expectedMonth: 1,
    expectedYear: 1900,
    expectedMonthReduced: 1,
    expectedDayReduced: 1,
    expectedYearReduced: 1, // 1+9+0+0 = 10 -> 1
    expectedLifePath: 3,    // 1+1+1 = 3
    expectedIsMaster: false,
    description: 'Turn of century boundary date (Jan 1, 1900 -> 3)',
  },
  {
    dob: '2000-02-29',
    expectedDay: 29,
    expectedMonth: 2,
    expectedYear: 2000,
    expectedMonthReduced: 2,
    expectedDayReduced: 11, // 2+9 = 11 (Master Day)
    expectedYearReduced: 2,  // 2+0+0+0 = 2
    expectedLifePath: 6,     // 2+11+2 = 15 -> 6
    expectedIsMaster: false,
    description: 'Leap year Feb 29 date with Master Day 11',
  },
  {
    dob: '1999-11-22',
    expectedDay: 22,
    expectedMonth: 11,
    expectedYear: 1999,
    expectedMonthReduced: 11, // Master Month 11
    expectedDayReduced: 22,   // Master Day 22
    expectedYearReduced: 1,   // 1+9+9+9 = 28 -> 10 -> 1
    expectedLifePath: 7,      // 11+22+1 = 34 -> 7
    expectedIsMaster: false,  // 34 -> 7
    description: 'Double Master Number date (Nov 22, 1999)',
  },
  {
    dob: '1975-06-18',
    expectedDay: 18,
    expectedMonth: 6,
    expectedYear: 1975,
    expectedMonthReduced: 6,
    expectedDayReduced: 9,   // 1+8 = 9
    expectedYearReduced: 22, // 1+9+7+5 = 22 (Master Year)
    expectedLifePath: 1,     // 6+9+22 = 37 -> 10 -> 1
    expectedIsMaster: false,
    description: 'Master Year date (June 18, 1975)',
  },
];

export function runLifePathUnitTests(): { passed: number; failed: number; errors: string[] } {
  let passed = 0;
  let failed = 0;
  const errors: string[] = [];

  for (const vector of LIFE_PATH_GOLDEN_VECTORS) {
    const res = calculateLifePath(vector.dob);
    let ok = true;

    if (res.lifePathNumber !== vector.expectedLifePath) {
      errors.push(`[${vector.dob}] Expected Life Path ${vector.expectedLifePath}, got ${res.lifePathNumber}`);
      ok = false;
    }
    if (res.monthReduced !== vector.expectedMonthReduced) {
      errors.push(`[${vector.dob}] Expected Month Reduced ${vector.expectedMonthReduced}, got ${res.monthReduced}`);
      ok = false;
    }
    if (res.dayReduced !== vector.expectedDayReduced) {
      errors.push(`[${vector.dob}] Expected Day Reduced ${vector.expectedDayReduced}, got ${res.dayReduced}`);
      ok = false;
    }
    if (res.yearReduced !== vector.expectedYearReduced) {
      errors.push(`[${vector.dob}] Expected Year Reduced ${vector.expectedYearReduced}, got ${res.yearReduced}`);
      ok = false;
    }

    if (ok) {
      passed++;
    } else {
      failed++;
    }
  }

  return { passed, failed, errors };
}
