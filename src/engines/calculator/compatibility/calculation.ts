import { calculateDestinyMatrixNodes, type DestinyMatrixNodes } from '../destiny-matrix/calculation';
import { reduceTo22 } from '../core/reduction';
import type { CalculationBreakdownStep } from '../core/types';

export interface CompatibilityMatrixResult {
  partnerADob: string;
  partnerBDob: string;
  partnerANodes: DestinyMatrixNodes;
  partnerBNodes: DestinyMatrixNodes;
  combinedNodes: {
    unionPurpose: number;      // A_A + A_B
    unionTalent: number;       // B_A + B_B
    unionKarmic: number;       // C_A + C_B
    unionFoundation: number;   // D_A + D_B
    unionCenter: number;       // E_A + E_B
    unionLoveLine: number;     // Love_A + Love_B
    unionMoneyLine: number;    // Money_A + Money_B
  };
  breakdown: CalculationBreakdownStep[];
  isValid: boolean;
  error?: string;
}

/**
 * Pure calculation engine for Destiny Matrix Relationship Compatibility.
 * Combines corresponding matrix nodes of Partner A and Partner B, reduced to 1-22 Arcana.
 */
export function calculateCompatibilityMatrix(dobA: string, dobB: string): CompatibilityMatrixResult {
  const matrixA = calculateDestinyMatrixNodes(dobA);
  const matrixB = calculateDestinyMatrixNodes(dobB);

  if (!matrixA.isValid || !matrixB.isValid) {
    return {
      partnerADob: dobA, partnerBDob: dobB,
      partnerANodes: matrixA.nodes, partnerBNodes: matrixB.nodes,
      combinedNodes: { unionPurpose: 1, unionTalent: 1, unionKarmic: 1, unionFoundation: 1, unionCenter: 1, unionLoveLine: 1, unionMoneyLine: 1 },
      breakdown: [], isValid: false, error: 'Please enter valid birth dates for both partners.',
    };
  }

  const nodesA = matrixA.nodes;
  const nodesB = matrixB.nodes;

  const unionPurpose = reduceTo22(nodesA.dayArcana + nodesB.dayArcana).final;
  const unionTalent = reduceTo22(nodesA.monthArcana + nodesB.monthArcana).final;
  const unionKarmic = reduceTo22(nodesA.yearArcana + nodesB.yearArcana).final;
  const unionFoundation = reduceTo22(nodesA.bottomArcana + nodesB.bottomArcana).final;
  const unionCenter = reduceTo22(nodesA.centerArcana + nodesB.centerArcana).final;
  const unionLoveLine = reduceTo22(nodesA.loveArcana + nodesB.loveArcana).final;
  const unionMoneyLine = reduceTo22(nodesA.moneyArcana + nodesB.moneyArcana).final;

  const breakdown: CalculationBreakdownStep[] = [
    { label: 'Union Purpose Arcana', operation: `Partner A (${nodesA.dayArcana}) + Partner B (${nodesB.dayArcana}) = ${nodesA.dayArcana + nodesB.dayArcana}`, result: unionPurpose },
    { label: 'Union Talent Arcana', operation: `Partner A (${nodesA.monthArcana}) + Partner B (${nodesB.monthArcana}) = ${nodesA.monthArcana + nodesB.monthArcana}`, result: unionTalent },
    { label: 'Union Center Synergy', operation: `Partner A Center (${nodesA.centerArcana}) + Partner B Center (${nodesB.centerArcana}) = ${nodesA.centerArcana + nodesB.centerArcana}`, result: unionCenter },
    { label: 'Union Love Line Synergy', operation: `Partner A Love (${nodesA.loveArcana}) + Partner B Love (${nodesB.loveArcana}) = ${nodesA.loveArcana + nodesB.loveArcana}`, result: unionLoveLine },
  ];

  return {
    partnerADob: dobA,
    partnerBDob: dobB,
    partnerANodes: nodesA,
    partnerBNodes: nodesB,
    combinedNodes: {
      unionPurpose,
      unionTalent,
      unionKarmic,
      unionFoundation,
      unionCenter,
      unionLoveLine,
      unionMoneyLine,
    },
    breakdown,
    isValid: true,
  };
}
