import { reduceTo22 } from './destiny-matrix-engine';

export interface ChakraDetail {
  name: string;
  sanskrit: string;
  physics: number;
  energy: number;
  emotions: number;
  healthScore: number;
  balancePercent: number;
  dominantPattern: string;
  blockedPattern: string;
  growthAdvice: string;
  color: string;
}

export class ChakraEngine {
  public static computeChakras(monthB: number, dayA: number, centerE: number, yearC: number, bottomD: number): ChakraDetail[] {
    const crownPhysics = monthB;
    const crownEnergy = dayA;
    const crownEmotions = reduceTo22(crownPhysics + crownEnergy);

    const thirdEyePhysics = reduceTo22(monthB + centerE);
    const thirdEyeEnergy = reduceTo22(dayA + centerE);
    const thirdEyeEmotions = reduceTo22(thirdEyePhysics + thirdEyeEnergy);

    const throatPhysics = reduceTo22(monthB + thirdEyePhysics);
    const throatEnergy = reduceTo22(dayA + thirdEyeEnergy);
    const throatEmotions = reduceTo22(throatPhysics + throatEnergy);

    const heartPhysics = centerE;
    const heartEnergy = centerE;
    const heartEmotions = reduceTo22(heartPhysics + heartEnergy);

    const solarPlexusPhysics = reduceTo22(centerE + bottomD);
    const solarPlexusEnergy = reduceTo22(centerE + yearC);
    const solarPlexusEmotions = reduceTo22(solarPlexusPhysics + solarPlexusEnergy);

    const sacralPhysics = reduceTo22(bottomD + solarPlexusPhysics);
    const sacralEnergy = reduceTo22(yearC + solarPlexusEnergy);
    const sacralEmotions = reduceTo22(sacralPhysics + sacralEnergy);

    const rootPhysics = bottomD;
    const rootEnergy = yearC;
    const rootEmotions = reduceTo22(rootPhysics + rootEnergy);

    return [
      {
        name: 'Crown',
        sanskrit: 'Sahasrara',
        physics: crownPhysics,
        energy: crownEnergy,
        emotions: crownEmotions,
        healthScore: 94,
        balancePercent: 88,
        dominantPattern: 'Higher Spiritual Channel',
        blockedPattern: 'Intellectual Isolation',
        growthAdvice: 'Connect daily meditation with physical action.',
        color: '#9333ea'
      },
      {
        name: 'Third eye',
        sanskrit: 'Ajna',
        physics: thirdEyePhysics,
        energy: thirdEyeEnergy,
        emotions: thirdEyeEmotions,
        healthScore: 89,
        balancePercent: 82,
        dominantPattern: 'Intuitive Clarity',
        blockedPattern: 'Overthinking & Doubts',
        growthAdvice: 'Trust initial inner gut signals before analyzing.',
        color: '#4f46e5'
      },
      {
        name: 'Throat',
        sanskrit: 'Vishuddha',
        physics: throatPhysics,
        energy: throatEnergy,
        emotions: throatEmotions,
        healthScore: 91,
        balancePercent: 85,
        dominantPattern: 'Authentic Voice',
        blockedPattern: 'Swallowing Truth',
        growthAdvice: 'Speak your boundary clearly without fear of conflict.',
        color: '#0284c7'
      },
      {
        name: 'Heart',
        sanskrit: 'Anahata',
        physics: heartPhysics,
        energy: heartEnergy,
        emotions: heartEmotions,
        healthScore: 96,
        balancePercent: 92,
        dominantPattern: 'Unconditional Empathy',
        blockedPattern: 'Emotional Over-Protection',
        growthAdvice: 'Allow vulnerable connections to enrich your heart.',
        color: '#059669'
      },
      {
        name: 'Solar plexus',
        sanskrit: 'Manipura',
        physics: solarPlexusPhysics,
        energy: solarPlexusEnergy,
        emotions: solarPlexusEmotions,
        healthScore: 85,
        balancePercent: 78,
        dominantPattern: 'Willpower & Leadership',
        blockedPattern: 'Control Tendencies',
        growthAdvice: 'Delegate tasks and trust team execution.',
        color: '#d97706'
      },
      {
        name: 'Sacral',
        sanskrit: 'Swadhisthana',
        physics: sacralPhysics,
        energy: sacralEnergy,
        emotions: sacralEmotions,
        healthScore: 88,
        balancePercent: 81,
        dominantPattern: 'Creative Passion',
        blockedPattern: 'Guilt & Scattered Focus',
        growthAdvice: 'Channel passion into consistent artistic projects.',
        color: '#ea580c'
      },
      {
        name: 'Root',
        sanskrit: 'Muladhara',
        physics: rootPhysics,
        energy: rootEnergy,
        emotions: rootEmotions,
        healthScore: 92,
        balancePercent: 86,
        dominantPattern: 'Physical Grounding',
        blockedPattern: 'Financial Anxiety',
        growthAdvice: 'Ground yourself with nature walks and financial structure.',
        color: '#dc2626'
      }
    ];
  }
}
