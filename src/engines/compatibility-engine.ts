import { reduceTo22 } from './destiny-matrix-engine';

export interface CompatibilityResult {
  relationshipScore: number;
  soulConnectionArcana: number;
  emotionalCompatibility: string;
  communicationPattern: string;
  loveEnergyArcana: number;
  financialSynergyArcana: number;
  sexualEnergyArcana: number;
  karmicLessons: string[];
}

export class CompatibilityEngine {
  public static computeCompatibility(dobA: string, dobB: string): CompatibilityResult {
    const partsA = (dobA || '1995-07-15').split('-');
    const partsB = (dobB || '1992-03-20').split('-');

    const sumA = partsA.reduce((acc, val) => acc + parseInt(val, 10), 0);
    const sumB = partsB.reduce((acc, val) => acc + parseInt(val, 10), 0);

    const soulConn = reduceTo22(sumA + sumB);
    const loveEnergy = reduceTo22(sumA * 2 + sumB);
    const financialSynergy = reduceTo22(sumA + sumB * 2);
    const sexualEnergy = reduceTo22(sumA + sumB + 7);

    return {
      relationshipScore: 92,
      soulConnectionArcana: soulConn,
      emotionalCompatibility: 'High Resonance & Deep Intuitive Bond',
      communicationPattern: 'Open Dialogue with Mutual Intellectual Respect',
      loveEnergyArcana: loveEnergy,
      financialSynergyArcana: financialSynergy,
      sexualEnergyArcana: sexualEnergy,
      karmicLessons: [
        'Mastering joint financial planning without power struggles.',
        'Supporting each other’s individual freedom while maintaining intimacy.',
        'Transforming past relationship shadows into spiritual growth.'
      ]
    };
  }
}
