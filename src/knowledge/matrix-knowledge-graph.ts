import { reduceTo22 } from '../engines/destiny-matrix-engine';

export interface MatrixKnowledgeContext {
  centerArcana: number;
  moneyArcana: number;
  loveArcana: number;
  karmicTail: number;
  heartChakra: number;
  archetypeTitle: string;
  archetypeDescription: string;
  loveResonanceScore: number;
  moneyResonanceScore: number;
  careerResonanceScore: number;
  spiritualResonanceScore: number;
  energyBalanceScore: number;
}

export class MatrixKnowledgeGraphEngine {
  public static evaluate(centerArcana: number, moneyArcana: number, loveArcana: number, karmicTail: number, heartChakra: number): MatrixKnowledgeContext {
    let archetypeTitle = "The Strategic Visionary & Master Builder";
    let archetypeDescription = "You possess a powerful synthesis of strategic foresight, creative ambition, and deep emotional resilience.";

    if (centerArcana === 7 || centerArcana === 8) {
      archetypeTitle = "The Strategic Leader & Authority";
      archetypeDescription = "Driven by high ambition, structural mastery, and executive triumph.";
    } else if (centerArcana === 3 || centerArcana === 6) {
      archetypeTitle = "The Creative Harmony Weaver";
      archetypeDescription = "Governed by aesthetic passion, unconditional love, and magnetic self-expression.";
    } else if (centerArcana === 1 || centerArcana === 5) {
      archetypeTitle = "The Pioneer Teacher & Innovator";
      archetypeDescription = "Original thinker bridging divine inspiration into traditional educational structures.";
    } else if (centerArcana === 11 || centerArcana === 12) {
      archetypeTitle = "The Compassionate Alchemist & Visionary";
      archetypeDescription = "Transforming obstacles into spiritual breakthroughs through gentle authority.";
    }

    const loveResonanceScore = reduceTo22(loveArcana + heartChakra) * 4 + 10;
    const moneyResonanceScore = reduceTo22(moneyArcana + centerArcana) * 4 + 12;
    const careerResonanceScore = reduceTo22(centerArcana + moneyArcana) * 4 + 15;
    const spiritualResonanceScore = reduceTo22(karmicTail + centerArcana) * 4 + 14;
    const energyBalanceScore = Math.round((loveResonanceScore + moneyResonanceScore + careerResonanceScore + spiritualResonanceScore) / 4);

    return {
      centerArcana,
      moneyArcana,
      loveArcana,
      karmicTail,
      heartChakra,
      archetypeTitle,
      archetypeDescription,
      loveResonanceScore: Math.min(loveResonanceScore, 98),
      moneyResonanceScore: Math.min(moneyResonanceScore, 96),
      careerResonanceScore: Math.min(careerResonanceScore, 99),
      spiritualResonanceScore: Math.min(spiritualResonanceScore, 95),
      energyBalanceScore: Math.min(energyBalanceScore, 97)
    };
  }
}
