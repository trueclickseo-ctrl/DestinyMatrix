export const DESTINY_MATRIX_METHODOLOGY_EXPLANATION = {
  title: 'How Is Your Destiny Matrix Chart Calculated?',
  systemName: 'Natalia Ladini 22 Arcana Matrix of Destiny System',
  summary: 'The Destiny Matrix (also known as Matrix of Destiny) is a visual energy chart built entirely from your birth date. It maps your core vibrations into a central octagram (eight-pointed star) using the 22 Major Arcana framework.',
  reductionRule: 'Reduction to 22 Arcana: Any sum greater than 22 is reduced by adding its individual digits together until the value is between 1 and 22. For example, 25 becomes 2 + 5 = 7, and 29 becomes 2 + 9 = 11.',
  positions: [
    { name: 'Position A (Personal Purpose / Left)', formula: 'Day of Birth reduced to 1–22' },
    { name: 'Position B (Talent / Top)', formula: 'Month of Birth (1–12)' },
    { name: 'Position C (Karmic Past / Right)', formula: 'Sum of Birth Year digits reduced to 1–22' },
    { name: 'Position D (Foundation / Bottom)', formula: 'Position A + Position B + Position C (reduced to 1–22)' },
    { name: 'Center E (Heart / Comfort Zone)', formula: 'Position A + Position B + Position C + Position D (reduced to 1–22)' },
    { name: 'Money Line', formula: 'Center E + Position C (reduced to 1–22)' },
    { name: 'Love Line', formula: 'Center E + Position D (reduced to 1–22)' },
    { name: 'Karmic Tail', formula: 'Position D + Center E (reduced to 1–22)' },
  ],
  disclaimer: 'Methodology note: Calculations follow Natalia Ladini\'s 22 Arcana Matrix of Destiny framework developed in the mid-2000s. Chart interpretations serve as self-reflection tools and are not medical, legal, or physical advice.',
};
