export interface MatrixNode {
  val: number;
  label: string;
  description: string;
}

export interface YearCycle {
  age: number;
  arcana: number;
  theme: string;
}

export function reduceTo22(val: number): number {
  let num = Math.abs(val);
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export class DestinyMatrixEngine {
  public static calculate(dobString: string, nameString: string = 'Kashif') {
    const parts = (dobString || '1995-07-15').split('-');
    const y = parseInt(parts[0] || '1995', 10);
    const m = parseInt(parts[1] || '7', 10);
    const d = parseInt(parts[2] || '15', 10);

    const dayA = reduceTo22(d);
    const monthB = reduceTo22(m);
    const yearSum = y.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
    const yearC = reduceTo22(yearSum);
    const bottomD = reduceTo22(dayA + monthB + yearC);
    const centerE = reduceTo22(dayA + monthB + yearC + bottomD);

    const topLeft = reduceTo22(dayA + monthB);
    const topRight = reduceTo22(monthB + yearC);
    const bottomRight = reduceTo22(yearC + bottomD);
    const bottomLeft = reduceTo22(bottomD + dayA);

    const moneyLine = reduceTo22(centerE + yearC);
    const loveLine = reduceTo22(centerE + bottomD);
    const karmicTail = reduceTo22(bottomD + centerE);

    // Numerology
    const lifePath = reduceTo22(dayA + monthB + yearC);
    const soulNum = monthB;
    const personalityNum = reduceTo22(dayA + centerE);

    const cleanName = (nameString || 'Kashif').toLowerCase().replace(/[^a-z]/g, '') || 'kashif';
    const letterMap: Record<string, number> = { a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:1,k:2,l:3,m:4,n:5,o:6,p:7,q:8,r:9,s:1,t:2,u:3,v:4,w:5,x:6,y:7,z:8 };
    let nSum = 0;
    for (let i = 0; i < cleanName.length; i++) nSum += letterMap[cleanName[i]] || 0;
    const expressionNum = reduceTo22(nSum);

    // Timeline 0 to 90 years
    const timeline: YearCycle[] = [];
    for (let age = 0; age <= 90; age++) {
      const cycleArcana = reduceTo22(centerE + age + (d % 22));
      timeline.push({
        age,
        arcana: cycleArcana,
        theme: `Age ${age} Transition Frequency: Arcana ${cycleArcana}`
      });
    }

    return {
      dayA,
      monthB,
      yearC,
      bottomD,
      centerE,
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
      moneyLine,
      loveLine,
      karmicTail,
      lifePath,
      soulNum,
      personalityNum,
      expressionNum,
      timeline
    };
  }
}
