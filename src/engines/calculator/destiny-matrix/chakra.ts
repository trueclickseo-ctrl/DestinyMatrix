import { reduceTo22 } from '../core/reduction';
import type { DestinyMatrixNodes } from './calculation';

export interface ChakraEnergyRow {
  name: string;
  sanskrit: string;
  physics: number;
  energy: number;
  emotions: number;
  colorClass: string;
}

/**
 * Calculates the 7 Chakra Energy Table from Destiny Matrix nodes.
 * Framework Note: Values represent traditional esoteric energy correspondences within Natalia Ladini's matrix system.
 * Disclosures: These calculations are for self-reflection and spiritual contemplation, NOT medical or physical diagnoses.
 */
export function calculateChakraEnergyTable(nodes: DestinyMatrixNodes): ChakraEnergyRow[] {
  const { dayArcana, monthArcana, yearArcana, bottomArcana, centerArcana } = nodes;

  // 1. Crown (Sahasrara)
  const crownPhysics = monthArcana;
  const crownEnergy = dayArcana;
  const crownEmotions = reduceTo22(crownPhysics + crownEnergy).final;

  // 2. Third Eye (Ajna)
  const thirdEyePhysics = reduceTo22(monthArcana + centerArcana).final;
  const thirdEyeEnergy = reduceTo22(dayArcana + centerArcana).final;
  const thirdEyeEmotions = reduceTo22(thirdEyePhysics + thirdEyeEnergy).final;

  // 3. Throat (Vishuddha)
  const throatPhysics = reduceTo22(monthArcana + thirdEyePhysics).final;
  const throatEnergy = reduceTo22(dayArcana + thirdEyeEnergy).final;
  const throatEmotions = reduceTo22(throatPhysics + throatEnergy).final;

  // 4. Heart (Anahata)
  const heartPhysics = centerArcana;
  const heartEnergy = centerArcana;
  const heartEmotions = reduceTo22(heartPhysics + heartEnergy).final;

  // 5. Solar Plexus (Manipura)
  const solarPlexusPhysics = reduceTo22(centerArcana + bottomArcana).final;
  const solarPlexusEnergy = reduceTo22(centerArcana + yearArcana).final;
  const solarPlexusEmotions = reduceTo22(solarPlexusPhysics + solarPlexusEnergy).final;

  // 6. Sacral (Swadhisthana)
  const sacralPhysics = reduceTo22(bottomArcana + solarPlexusPhysics).final;
  const sacralEnergy = reduceTo22(yearArcana + solarPlexusEnergy).final;
  const sacralEmotions = reduceTo22(sacralPhysics + sacralEnergy).final;

  // 7. Root (Muladhara)
  const rootPhysics = bottomArcana;
  const rootEnergy = yearArcana;
  const rootEmotions = reduceTo22(rootPhysics + rootEnergy).final;

  return [
    { name: 'Crown', sanskrit: 'Sahasrara', physics: crownPhysics, energy: crownEnergy, emotions: crownEmotions, colorClass: 'text-purple-600' },
    { name: 'Third eye', sanskrit: 'Ajna', physics: thirdEyePhysics, energy: thirdEyeEnergy, emotions: thirdEyeEmotions, colorClass: 'text-indigo-600' },
    { name: 'Throat', sanskrit: 'Vishuddha', physics: throatPhysics, energy: throatEnergy, emotions: throatEmotions, colorClass: 'text-sky-600' },
    { name: 'Heart', sanskrit: 'Anahata', physics: heartPhysics, energy: heartEnergy, emotions: heartEmotions, colorClass: 'text-emerald-600' },
    { name: 'Solar plexus', sanskrit: 'Manipura', physics: solarPlexusPhysics, energy: solarPlexusEnergy, emotions: solarPlexusEmotions, colorClass: 'text-amber-500' },
    { name: 'Sacral', sanskrit: 'Swadhisthana', physics: sacralPhysics, energy: sacralEnergy, emotions: sacralEmotions, colorClass: 'text-orange-500' },
    { name: 'Root', sanskrit: 'Muladhara', physics: rootPhysics, energy: rootEnergy, emotions: rootEmotions, colorClass: 'text-rose-600' },
  ];
}
