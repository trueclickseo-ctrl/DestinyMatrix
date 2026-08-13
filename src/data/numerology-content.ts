export interface NumberMeaningDetail {
  number: number;
  title: string;
  archetype: string;
  summary: string;
  strengths: string[];
  challenges: string[];
  vocationAdvice: string;
  relationshipAdvice: string;
  misconceptions: string;
}

export interface NumerologyConcept {
  slug: string;
  name: string;
  category: string;
  icon?: string;
  shortDescription: string;
  intro: string;
  calculatorSlug?: string;
  relatedConcepts: string[];
}

export const NUMEROLOGY_CONCEPTS: Record<string, NumerologyConcept> = {
  'life-path-number': {
    slug: 'life-path-number',
    name: 'Life Path Number',
    category: 'Core Numbers',
    shortDescription: 'The central blueprint of your journey, calculated from your full date of birth. Reveals your primary life purpose, key lessons, and evolutionary trajectory.',
    intro: 'Your Life Path Number is considered the most foundational calculation in classical Pythagorean numerology. Derived by reducing your complete day, month, and year of birth down to a single digit or master number, it outlines the core opportunities, challenges, and lessons you are designed to encounter.',
    calculatorSlug: 'calculators/life-path-number/',
    relatedConcepts: ['destiny-number', 'soul-urge-number', 'personal-year'],
  },
  'destiny-number': {
    slug: 'destiny-number',
    name: 'Destiny (Expression) Number',
    category: 'Core Numbers',
    shortDescription: 'Calculated from every letter in your full legal birth name. Outlines your natural talents, physical potential, and overall life expression.',
    intro: 'The Destiny Number (often called the Expression Number) reveals the tools and talents you were born with. While your Life Path Number reveals what you are here to learn, your Destiny Number illuminates how you express those lessons in the physical world through your work and creative output.',
    calculatorSlug: 'calculators/destiny-number/',
    relatedConcepts: ['life-path-number', 'soul-urge-number', 'personality-number'],
  },
  'soul-urge-number': {
    slug: 'soul-urge-number',
    name: 'Soul Urge (Heart’s Desire) Number',
    category: 'Core Numbers',
    shortDescription: 'Derived from the vowels in your full name. Maps your inner desires, private motivations, and emotional fulfillment needs.',
    intro: 'Your Soul Urge Number reflects the quiet cravings of your spirit—what genuinely satisfies your soul regardless of external approval. Calculated strictly from the vowels of your birth name, it explains your deepest romantic longings, spiritual values, and private motivations.',
    calculatorSlug: 'calculators/soul-urge-number/',
    relatedConcepts: ['personality-number', 'destiny-number', 'life-path-number'],
  },
  'personality-number': {
    slug: 'personality-number',
    name: 'Personality Number',
    category: 'Core Numbers',
    shortDescription: 'Calculated from the consonants of your full name. Represents your outer persona, initial presentation, and first impression.',
    intro: 'The Personality Number acts as your emotional cloak—the outer boundary you present to the world. Mapped from the consonants of your birth name, it shows how acquaintances perceive you before gaining access to your deeper Soul Urge.',
    calculatorSlug: 'calculators/personality-number/',
    relatedConcepts: ['soul-urge-number', 'destiny-number'],
  },
  'birthday-number': {
    slug: 'birthday-number',
    name: 'Birthday Number',
    category: 'Sub-Numbers',
    shortDescription: 'The single day of the month on which you were born. Highlights specific innate abilities and modifier traits.',
    intro: 'Your Birthday Number is the day of the month you were born (1 through 31). It acts as a specialized modifier to your Life Path Number, providing unique talents, behavioral tendencies, and immediate tools.',
    calculatorSlug: 'calculators/life-path-number/',
    relatedConcepts: ['life-path-number', 'pinnacle-number'],
  },
  'maturity-number': {
    slug: 'maturity-number',
    name: 'Maturity Number',
    category: 'Sub-Numbers',
    shortDescription: 'The sum of your Life Path and Destiny numbers. Unfolds during the second half of life as your ultimate maturity goal.',
    intro: 'The Maturity Number comes into full force between ages 35 and 50. By combining your Life Path and Destiny vibrations, it indicates the ultimate direction of your mature years and long-term legacy.',
    calculatorSlug: 'calculators/life-path-number/',
    relatedConcepts: ['life-path-number', 'destiny-number'],
  },
  'balance-number': {
    slug: 'balance-number',
    name: 'Balance Number',
    category: 'Sub-Numbers',
    shortDescription: 'Calculated from the initials of your full name. Guidance on how to regain emotional stability during stressful crises.',
    intro: 'Your Balance Number provides guidance during turbulent moments. It reveals how you naturally react to emotional pressure and offers a constructive pathway for restoring internal harmony.',
    calculatorSlug: 'calculators/destiny-number/',
    relatedConcepts: ['personality-number', 'challenge-number'],
  },
  'karmic-debt-number': {
    slug: 'karmic-debt-number',
    name: 'Karmic Debt Number',
    category: 'Karmic Cycles',
    shortDescription: 'Special compound numbers (13, 14, 16, 19) representing specific lessons and obligations carried into this lifetime.',
    intro: 'In Pythagorean numerology, Karmic Debt Numbers (13/4, 14/5, 16/7, 19/1) signal specific lessons that demand conscious discipline, accountability, and spiritual refinement to master.',
    calculatorSlug: 'calculators/life-path-number/',
    relatedConcepts: ['life-path-number', 'challenge-number'],
  },
  'challenge-number': {
    slug: 'challenge-number',
    name: 'Challenge Number',
    category: 'Karmic Cycles',
    shortDescription: 'Derived by subtracting birth date digits. Identifies specific psychological hurdles to overcome during life stages.',
    intro: 'Challenge Numbers point to internal friction and recurring psychological hurdles. Recognizing your specific challenges empowers you to convert weaknesses into pillars of resilience.',
    calculatorSlug: 'calculators/life-path-number/',
    relatedConcepts: ['pinnacle-number', 'life-path-number'],
  },
  'pinnacle-number': {
    slug: 'pinnacle-number',
    name: 'Pinnacle Number',
    category: 'Life Cycles',
    shortDescription: 'Four distinct chronological eras in your life journey, governing main developmental themes.',
    intro: 'Pinnacle Numbers divide your life span into four distinct developmental periods. Each Pinnacle represents a major learning environment and specific growth opportunities.',
    calculatorSlug: 'calculators/life-path-number/',
    relatedConcepts: ['personal-year', 'challenge-number'],
  },
  'personal-year': {
    slug: 'personal-year',
    name: 'Personal Year Cycle',
    category: 'Predictive Cycles',
    shortDescription: 'Your annual 9-year cycle vibration, running from birthday to birthday or calendar year. Outlines key seasonal themes.',
    intro: 'The Personal Year Cycle runs on an enduring 9-year loop. Understanding your current year’s vibration helps you align decisions with cosmic momentum—whether to plant seeds, take action, or harvest results.',
    calculatorSlug: 'calculators/personal-year/',
    relatedConcepts: ['personal-month', 'life-path-number'],
  },
  'personal-month': {
    slug: 'personal-month',
    name: 'Personal Month Cycle',
    category: 'Predictive Cycles',
    shortDescription: 'Monthly sub-vibration refining your Personal Year theme for tactical short-term timing.',
    intro: 'The Personal Month vibration refines the broader theme of your Personal Year. It offers month-by-month tactical timing for business moves, travel, relationship shifts, and inner reflection.',
    calculatorSlug: 'calculators/personal-year/',
    relatedConcepts: ['personal-year', 'personal-day'],
  },
  'personal-day': {
    slug: 'personal-day',
    name: 'Personal Day Rhythm',
    category: 'Predictive Cycles',
    shortDescription: 'Daily numerical frequency guiding short-term micro-decisions, focus, and energy management.',
    intro: 'Your Personal Day frequency offers daily energetic weather reports. It guides micro-decisions, meetings, artistic work, or resting moments based on daily numbers.',
    calculatorSlug: 'calculators/personal-year/',
    relatedConcepts: ['personal-month', 'personal-year'],
  },
  'name-numerology': {
    slug: 'name-numerology',
    name: 'Name Numerology Matrix',
    category: 'Methodologies',
    shortDescription: 'The ancient art of translating alphabetic letter values into numerical vibrations using the Pythagorean grid.',
    intro: 'Name Numerology relies on assigning numerical values (1 through 9) to letters of the alphabet. Your legal name acts as an energetic signature shaping your public potential and self-expression.',
    calculatorSlug: 'calculators/destiny-number/',
    relatedConcepts: ['destiny-number', 'business-numerology'],
  },
  'business-numerology': {
    slug: 'business-numerology',
    name: 'Business & Brand Numerology',
    category: 'Methodologies',
    shortDescription: 'Applying numerical principles to corporate brand titles, product lines, launch dates, and domain names.',
    intro: 'Business Numerology evaluates brand names, corporate incorporation dates, and product titles to ensure commercial alignment, brand resonance, and optimal market positioning.',
    calculatorSlug: 'calculators/destiny-number/',
    relatedConcepts: ['name-numerology', 'destiny-number'],
  },
};

export const NUMEROLOGY_NUMBER_DETAILS: Record<number, NumberMeaningDetail> = {
  1: {
    number: 1,
    title: "The Independent Pioneer & Visionary Leader",
    archetype: "Individual Will & Active Initiative",
    summary: "Vibration 1 represents the initial spark of creation, self-reliance, pioneering courage, and executive drive. It is the frequency of fresh starts and original leadership.",
    strengths: ["High initiative", "Decisive problem-solving", "Self-motivation", "Original vision"],
    challenges: ["Impatience with slow progress", "Difficulty delegating", "Over-reliance on ego"],
    vocationAdvice: "Thrives in independent leadership, startup ventures, innovative technology, and strategic consulting where personal autonomy is honored.",
    relationshipAdvice: "Seeks authentic partners who respect their independent projects while offering a calm, grounding presence.",
    misconceptions: "Number 1 is often mistaken for selfish individualism, but at its highest expression, it creates pathbreaking opportunities that benefit the entire community."
  },
  2: {
    number: 2,
    title: "The Diplomatic Harmonizer & Empathetic Peacemaker",
    archetype: "Cooperation & Subtle Intuitive Strength",
    summary: "Vibration 2 carries the frequency of gentle mediation, partnership, emotional sensitivity, and intuitive perception. It governs the alchemy of collaboration.",
    strengths: ["Diplomatic tact", "Active listening", "Deep empathy", "Intuitive discernment"],
    challenges: ["Over-sensitivity to criticism", "Conflict avoidance", "Hesitation under pressure"],
    vocationAdvice: "Excels in psychology, mediation, diplomatic relations, human resources, and creative team partnerships.",
    relationshipAdvice: "Thrives in gentle, communicative relationships built on mutual trust, quiet intimacy, and emotional safety.",
    misconceptions: "Number 2 is sometimes viewed as passive, but its quiet diplomacy and emotional intelligence often resolve complex issues that brute force cannot."
  },
  3: {
    number: 3,
    title: "The Expressive Catalyst & Joyful Communicator",
    archetype: "Creative Self-Expression & Radiant Inspiration",
    summary: "Vibration 3 embodies artistic flair, optimistic communication, social charisma, and expressive alchemy. It brings lightness and imaginative vision.",
    strengths: ["Artistic brilliance", "Magnetic communication", "Uplifting optimism", "Creative versatility"],
    challenges: ["Scattered focus across too many projects", "Superficiality under stress", "Mood volatility"],
    vocationAdvice: "Ideal for creative writing, public speaking, performing arts, brand storytelling, and media production.",
    relationshipAdvice: "Flourishes with partners who celebrate their expressive joy while helping them maintain practical focus.",
    misconceptions: "Number 3 is not merely lighthearted entertainment; its creative expression often delivers profound truths in accessible ways."
  },
  4: {
    number: 4,
    title: "The Master Architect & Systematic Foundation",
    archetype: "Discipline, Order & Practical Wisdom",
    summary: "Vibration 4 represents structural stability, methodical effort, unwavering loyalty, and practical foundation-building. It is the pillar of endurance.",
    strengths: ["Unshakable dependability", "Systematic organization", "Practical wisdom", "Perseverance"],
    challenges: ["Rigidity against unexpected change", "Workaholism", "Excessive caution"],
    vocationAdvice: "Thrives in engineering, construction management, financial auditing, corporate compliance, and legal architecture.",
    relationshipAdvice: "Pairs best with loyal, honest partners who honor commitments and build stable home environments.",
    misconceptions: "Number 4 is not boring or unimaginative; its methodical discipline builds the very structures that allow creative dreams to endure."
  },
  5: {
    number: 5,
    title: "The Dynamic Explorer & Versatile Agent of Change",
    archetype: "Freedom, Curiosity & Adaptive Energy",
    summary: "Vibration 5 carries the energy of personal freedom, sensory exploration, rapid adaptation, and resourcefulness through life's transits.",
    strengths: ["High adaptability", "Courageous curiosity", "Resourcefulness", "Versatile skills"],
    challenges: ["Restlessness", "Impulsive decisions", "Difficulty sticking to routine"],
    vocationAdvice: "Excels in travel journalism, event production, international sales, marketing innovation, and crisis response.",
    relationshipAdvice: "Seeks open-minded, adventurous partners who cherish personal growth and freedom within mutual trust.",
    misconceptions: "Number 5 is not irresponsible flightiness; its adaptability allows rapid problem-solving during unpredictable circumstances."
  },
  6: {
    number: 6,
    title: "The Nurturing Guardian & Master Harmonizer",
    archetype: "Responsibility, Care & Domestic Harmony",
    summary: "Vibration 6 represents unconditional care, family stewardship, aesthetic elegance, and community responsibility. It is the heart of sanctuary.",
    strengths: ["Deep compassion", "Healing presence", "Protective care", "Aesthetic eye"],
    challenges: ["Self-sacrifice", "Interfering out of concern", "Perfectionist expectations"],
    vocationAdvice: "Ideal for healthcare, counseling, interior design, social advocacy, education, and hospitality management.",
    relationshipAdvice: "Thrives in warm, family-oriented relationships where caring acts are reciprocated with genuine gratitude.",
    misconceptions: "Number 6 is not restricted to home life; its protective harmony extends to managing teams and building healthy organizations."
  },
  7: {
    number: 7,
    title: "The Mystic Scholar & Philosophical Seeker",
    archetype: "Introspection, Wisdom & Analytical Depth",
    summary: "Vibration 7 embodies deep intellectual analysis, spiritual contemplation, quiet research, and seeking underlying universal truths.",
    strengths: ["Analytical clarity", "Intuitive wisdom", "Spiritual insight", "Perceptive research"],
    challenges: ["Social isolation", "Over-cynicism", "Emotional detachment"],
    vocationAdvice: "Excels in scientific research, philosophy, archive preservation, software development, and spiritual scholarship.",
    relationshipAdvice: "Requires thoughtful partners who respect solitary study time and enjoy deep, meaningful intellectual conversations.",
    misconceptions: "Number 7 is not cold or distant; its quiet reflection allows it to see underlying truths that others overlook."
  },
  8: {
    number: 8,
    title: "The Power Strategist & Executive Master",
    archetype: "Authority, Material Mastery & Karmic Balance",
    summary: "Vibration 8 commands material stewardship, executive authority, strategic vision, and karmic balance. It bridges ambition with ethical responsibility.",
    strengths: ["Executive mastery", "Financial vision", "Resilience under pressure", "Strategic efficiency"],
    challenges: ["Workaholism", "Material stress", "Over-controlling tendencies"],
    vocationAdvice: "Thrives in corporate leadership, real estate development, venture capital, high-stakes negotiation, and judiciary management.",
    relationshipAdvice: "Pairs well with self-possessed partners who maintain strong personal boundaries and support career milestones.",
    misconceptions: "Number 8 is not solely focused on money; true 8 energy masters material resources in service of a larger purpose."
  },
  9: {
    number: 9,
    title: "The Universal Humanitarian & Wise Sage",
    archetype: "Completion, Global Compassion & Spiritual Wisdom",
    summary: "Vibration 9 represents the culmination of all previous single digits, embodying universal empathy, artistic mastery, and selfless service to humanity.",
    strengths: ["Universal empathy", "Broad perspective", "Selfless generosity", "Artistic vision"],
    challenges: ["Emotional overload from others' problems", "Difficulty letting go", "Over-idealism"],
    vocationAdvice: "Ideal for international non-profits, environmental advocacy, publishing, artistic masterworks, and philanthropic leadership.",
    relationshipAdvice: "Deep connection with open-hearted, purposeful partners who share global values and soul alignment.",
    misconceptions: "Number 9 is not impractical martyrdom; its broad vision creates systemic solutions for community well-being."
  },
  11: {
    number: 11,
    title: "The Master Intuitive & Spiritual Illuminator",
    archetype: "Master Visionary & Higher Intuition",
    summary: "Master Number 11 carries a high-frequency intuitive signal, bridging deep subconscious illumination with practical inspiration.",
    strengths: ["Heightened intuition", "Inspirational presence", "Visionary foresight", "Spiritual charisma"],
    challenges: ["Nervous tension", "Imposter syndrome", "Over-sensitivity to environmental energy"],
    vocationAdvice: "Thrives in visionary leadership, spiritual teaching, breakthrough innovation, intuitive counseling, and creative media.",
    relationshipAdvice: "Requires gentle, grounding partners who offer emotional stability and honor their intense intuitive insights.",
    misconceptions: "Master Number 11 is not guaranteed automatic success; it requires lifetime discipline to channel high energy constructively."
  },
  22: {
    number: 22,
    title: "The Master Builder & Transcendent Architect",
    archetype: "Master Practicality & Global Scale",
    summary: "Master Number 22 combines the intuitive vision of 11 with the grounded discipline of 4, turning vast visionary concepts into physical reality.",
    strengths: ["Global vision", "Master organizing capacity", "Enduring legacy building", "Practical genius"],
    challenges: ["Enormous internal pressure", "Fear of failure on large scale", "Overwhelming responsibility"],
    vocationAdvice: "Excels in large-scale infrastructure, global enterprise, international diplomacy, environmental restoration, and legacy projects.",
    relationshipAdvice: "Pairs best with supportive, resilient partners who understand the demands of major long-term missions.",
    misconceptions: "Master Number 22 is not just about personal prestige; its true purpose is constructing enduring systems that serve generations."
  },
  33: {
    number: 33,
    title: "The Master Teacher & Universal Healer",
    archetype: "Master Compassion & Spiritual Stewardship",
    summary: "Master Number 33 represents the highest frequency of selfless service, universal healing, and uplifting mentorship.",
    strengths: ["Unconditional compassion", "Spiritual wisdom", "Transformative healing presence", "Selfless stewardship"],
    challenges: ["Overwhelming emotional empathy", "Neglecting personal needs", "Taking on world burdens"],
    vocationAdvice: "Ideal for master teaching, holistic healing institutions, global humanitarian leadership, and spiritual mentorship.",
    relationshipAdvice: "Flourishes with deeply compassionate, grounded partners who offer unconditional love and domestic peace.",
    misconceptions: "Master Number 33 is extremely rare in core numerology calculations; its frequency demands total personal humility and devotion to service."
  }
};
