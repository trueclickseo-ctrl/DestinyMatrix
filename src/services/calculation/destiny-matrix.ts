export interface ChakraRow {
  name: string;
  sanskrit: string;
  physics: number;
  energy: number;
  emotions: number;
  colorClass: string;
}

export interface DetailedMatrixResult {
  dayArcana: number; // A (Left / Personal Purpose)
  monthArcana: number; // B (Top / Talent)
  yearArcana: number; // C (Right / Karmic Past)
  bottomArcana: number; // D (Bottom / Foundation)
  centerArcana: number; // E (Heart / Comfort Zone)
  moneyArcana: number;
  loveArcana: number;
  karmicTailArcana: number;
  
  // Outer diagonal nodes
  topRightArcana: number;
  bottomRightArcana: number;
  bottomLeftArcana: number;
  topLeftArcana: number;

  // Numerology Core Numbers
  soulNumber: number;
  personalityNumber: number;
  expressionNumber: number;
  lifePathNumber: number;

  // 7 Chakras
  chakras: ChakraRow[];

  // Core Pattern Headline & Text
  corePatternHeadline: string;
  corePatternText: string;
}

export function reduceTo22(val: number): number {
  let num = Math.abs(val);
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export function parseDob(dobStr: string) {
  if (!dobStr) return { day: 15, month: 7, year: 1995 };
  
  // Split by hyphen, slash, or dot
  const parts = dobStr.split(/[-/.]/);
  if (parts.length !== 3) {
    return { day: 15, month: 7, year: 1995 };
  }
  
  const p0 = parseInt(parts[0], 10);
  const p1 = parseInt(parts[1], 10);
  const p2 = parseInt(parts[2], 10);
  
  if (isNaN(p0) || isNaN(p1) || isNaN(p2)) {
    return { day: 15, month: 7, year: 1995 };
  }
  
  let day = 15;
  let month = 7;
  let year = 1995;
  
  if (p0 > 31) {
    // Format: YYYY-MM-DD
    year = p0;
    month = p1;
    day = p2;
  } else if (p2 > 31) {
    // Format: DD-MM-YYYY or MM-DD-YYYY (assume Day first)
    day = p0;
    month = p1;
    year = p2;
  } else {
    // Two digit year or ambiguous, assume Day first
    day = p0;
    month = p1;
    year = p2 < 100 ? (p2 > 30 ? 1900 + p2 : 2000 + p2) : p2;
  }
  
  // Clamp values
  day = Math.max(1, Math.min(31, day));
  month = Math.max(1, Math.min(12, month));
  if (year < 100) year = 2000 + year;
  
  return { day, month, year };
}

export function calculateDetailedDestinyMatrix(dobString: string, nameString: string = 'Kashif'): DetailedMatrixResult {
  const { day, month, year } = parseDob(dobString);


  // 1. Core 4 Corners
  const dayArcana = reduceTo22(day);
  const monthArcana = reduceTo22(month);

  const yearSum = year.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  const yearArcana = reduceTo22(yearSum);

  const bottomArcana = reduceTo22(dayArcana + monthArcana + yearArcana);
  const centerArcana = reduceTo22(dayArcana + monthArcana + yearArcana + bottomArcana);

  // 2. Diagonals (Ancestral Lines)
  const topLeftArcana = reduceTo22(dayArcana + monthArcana);
  const topRightArcana = reduceTo22(monthArcana + yearArcana);
  const bottomRightArcana = reduceTo22(yearArcana + bottomArcana);
  const bottomLeftArcana = reduceTo22(bottomArcana + dayArcana);

  // 3. Money & Love Channels
  const moneyArcana = reduceTo22(centerArcana + yearArcana);
  const loveArcana = reduceTo22(centerArcana + bottomArcana);
  const karmicTailArcana = reduceTo22(bottomArcana + centerArcana);

  // 4. Numerology Core Numbers
  const lifePathNumber = reduceTo22(dayArcana + monthArcana + yearArcana);
  const soulNumber = monthArcana;
  const personalityNumber = reduceTo22(dayArcana + centerArcana);
  
  // Calculate expression number from name
  const cleanName = nameString.toLowerCase().replace(/[^a-z]/g, '') || 'kashif';
  const letterMap: Record<string, number> = { a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:1,k:2,l:3,m:4,n:5,o:6,p:7,q:8,r:9,s:1,t:2,u:3,v:4,w:5,x:6,y:7,z:8 };
  let nameSum = 0;
  for (let i = 0; i < cleanName.length; i++) {
    nameSum += letterMap[cleanName[i]] || 0;
  }
  const expressionNumber = reduceTo22(nameSum);

  // 5. Compute 7 Chakras (Physics, Energy, Emotions)
  const crownPhysics = monthArcana;
  const crownEnergy = dayArcana;
  const crownEmotions = reduceTo22(crownPhysics + crownEnergy);

  const thirdEyePhysics = reduceTo22(monthArcana + centerArcana);
  const thirdEyeEnergy = reduceTo22(dayArcana + centerArcana);
  const thirdEyeEmotions = reduceTo22(thirdEyePhysics + thirdEyeEnergy);

  const throatPhysics = reduceTo22(monthArcana + thirdEyePhysics);
  const throatEnergy = reduceTo22(dayArcana + thirdEyeEnergy);
  const throatEmotions = reduceTo22(throatPhysics + throatEnergy);

  const heartPhysics = centerArcana;
  const heartEnergy = centerArcana;
  const heartEmotions = reduceTo22(heartPhysics + heartEnergy);

  const solarPlexusPhysics = reduceTo22(centerArcana + bottomArcana);
  const solarPlexusEnergy = reduceTo22(centerArcana + yearArcana);
  const solarPlexusEmotions = reduceTo22(solarPlexusPhysics + solarPlexusEnergy);

  const sacralPhysics = reduceTo22(bottomArcana + solarPlexusPhysics);
  const sacralEnergy = reduceTo22(yearArcana + solarPlexusEnergy);
  const sacralEmotions = reduceTo22(sacralPhysics + sacralEnergy);

  const rootPhysics = bottomArcana;
  const rootEnergy = yearArcana;
  const rootEmotions = reduceTo22(rootPhysics + rootEnergy);

  const chakras: ChakraRow[] = [
    { name: 'Crown', sanskrit: 'Sahasrara', physics: crownPhysics, energy: crownEnergy, emotions: crownEmotions, colorClass: 'text-purple-600' },
    { name: 'Third eye', sanskrit: 'Ajna', physics: thirdEyePhysics, energy: thirdEyeEnergy, emotions: thirdEyeEmotions, colorClass: 'text-indigo-600' },
    { name: 'Throat', sanskrit: 'Vishuddha', physics: throatPhysics, energy: throatEnergy, emotions: throatEmotions, colorClass: 'text-sky-600' },
    { name: 'Heart', sanskrit: 'Anahata', physics: heartPhysics, energy: heartEnergy, emotions: heartEmotions, colorClass: 'text-emerald-600' },
    { name: 'Solar plexus', sanskrit: 'Manipura', physics: solarPlexusPhysics, energy: solarPlexusEnergy, emotions: solarPlexusEmotions, colorClass: 'text-amber-500' },
    { name: 'Sacral', sanskrit: 'Swadhisthana', physics: sacralPhysics, energy: sacralEnergy, emotions: sacralEmotions, colorClass: 'text-orange-500' },
    { name: 'Root', sanskrit: 'Muladhara', physics: rootPhysics, energy: rootEnergy, emotions: rootEmotions, colorClass: 'text-rose-600' },
  ];

  // Core Pattern Synthesis
  const corePatternHeadline = `You tend to begin with perspective, then use compassionate mastery to move choice into real life.`;
  const corePatternText = `Center energy ${centerArcana} makes perspective your starting response. Life Path ${lifePathNumber} asks that response to grow toward compassionate mastery. Together they create a two-step rhythm: first find the inner signal, then test whether it can become a sustainable direction.`;

  return {
    dayArcana,
    monthArcana,
    yearArcana,
    bottomArcana,
    centerArcana,
    moneyArcana,
    loveArcana,
    karmicTailArcana,
    topRightArcana,
    bottomRightArcana,
    bottomLeftArcana,
    topLeftArcana,
    soulNumber,
    personalityNumber,
    expressionNumber,
    lifePathNumber,
    chakras,
    corePatternHeadline,
    corePatternText,
  };
}
