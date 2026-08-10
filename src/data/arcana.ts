export interface ArcanaEncyclopediaEntry {
  number: number;
  name: string;
  archetype: string;
  meaning: string;
  positiveExpression: string;
  shadowExpression: string;
  careerGuidance: string;
  loveCompatibility: string;
  moneyChannel: string;
  spiritualLesson: string;
  chakraConnection: string;
  dailyWisdom: string;
}

export const MAJOR_ARCANA_DATABASE: Record<number, ArcanaEncyclopediaEntry> = {
  1: {
    number: 1,
    name: "The Magician",
    archetype: "The Visionary Creator & Master Manifestor",
    meaning: "Arcana 1 represents raw creative willpower, active leadership, pioneering courage, and the ability to bridge ideas into physical reality.",
    positiveExpression: "Resourceful, confident, high initiative, decisive action, independent spirit.",
    shadowExpression: "Manipulation, impatience, arrogance, over-dominance, ego clashes.",
    careerGuidance: "Thrives in independent leadership, tech innovation, entrepreneurial founders, strategic consulting.",
    loveCompatibility: "Resonates best with grounding numbers (4, 6, 8) that offer stability to their fast creative drive.",
    moneyChannel: "Financial flow comes from original ideas, personal branding, and quick execution.",
    spiritualLesson: "Learning that true power comes from alignment with divine will rather than ego coercion.",
    chakraConnection: "Crown & Third Eye (Vision & Higher Intent)",
    dailyWisdom: "Focus your intent today — you hold all the tools required to shape your current environment."
  },
  2: {
    number: 2,
    name: "The High Priestess",
    archetype: "The Intuitive Mystic & Sacred Diplomat",
    meaning: "Arcana 2 carries the vibration of deep subconscious wisdom, esoteric secrets, subtle perception, and peaceful mediation.",
    positiveExpression: "Intuitive, gentle, highly empathetic, patient, peacemaker, deep listener.",
    shadowExpression: "Secretive, passive-aggressive, indecisive, emotional isolation, codependency.",
    careerGuidance: "Excels in psychology, intuitive counseling, diplomacy, artistic research, and healing arts.",
    loveCompatibility: "Pairs harmoniously with expressive, protective partners who honor their quiet wisdom.",
    moneyChannel: "Wealth flows through passive income, strategic partnerships, and intuitive investments.",
    spiritualLesson: "Trusting internal guidance over outer noise and keeping sacred boundaries.",
    chakraConnection: "Third Eye & Heart (Subtle Sight & Compassion)",
    dailyWisdom: "Silence holds the answer today. Pause and listen to your internal signal."
  },
  3: {
    number: 3,
    name: "The Empress",
    archetype: "The Mother of Abundance & Creative Beauty",
    meaning: "Arcana 3 is the ultimate frequency of fertility, material elegance, artistic beauty, growth, and unconditional care.",
    positiveExpression: "Abundant mindset, artistic flair, nurturing nature, aesthetic refinement, generous spirit.",
    shadowExpression: "Extravagance, possessiveness, vanity, smothering care, financial carelessness.",
    careerGuidance: "Ideal for interior design, luxury brands, hospitality, fashion, art direction, and fertility care.",
    loveCompatibility: "High synergy with protective, structured numbers (4, 7, 8) that build stable foundations.",
    moneyChannel: "Abundance multiplies when creating beautiful experiences, luxury products, or artistic works.",
    spiritualLesson: "Receiving with grace and recognizing that abundance is a natural birthright.",
    chakraConnection: "Heart & Sacral (Creation & Pure Delight)",
    dailyWisdom: "Nurture your creations today — beauty and growth follow focused attention."
  },
  4: {
    number: 4,
    name: "The Emperor",
    archetype: "The Master Architect & Sovereign Ruler",
    meaning: "Arcana 4 embodies structural mastery, discipline, stability, executive order, and protective leadership.",
    positiveExpression: "Organized, dependable, protective, strategic, unwavering stability.",
    shadowExpression: "Rigidity, stubbornness, controlling behavior, micromanagement, emotional distance.",
    careerGuidance: "Excels in corporate executive roles, construction, engineering, law enforcement, and financial management.",
    loveCompatibility: "Harmonizes with intuitive, nurturing partners (2, 3, 6) who soften their structured focus.",
    moneyChannel: "Prosperity is built through long-term real estate, systematic investments, and business equity.",
    spiritualLesson: "True sovereignty is built on service and protecting the vulnerable, not rigid control.",
    chakraConnection: "Root & Solar Plexus (Grounding & Authority)",
    dailyWisdom: "Build strong foundations today — lasting achievements require order and discipline."
  },
  5: {
    number: 5,
    name: "The Hierophant",
    archetype: "The Sacred Mentor & Master Teacher",
    meaning: "Arcana 5 carries the energy of spiritual tradition, higher wisdom, moral integrity, education, and mentorship.",
    positiveExpression: "Wise mentor, ethical leader, seeker of truth, inspiring educator, dedicated guide.",
    shadowExpression: "Dogmatism, narrow-mindedness, insistence on conformity, spiritual pride.",
    careerGuidance: "Thrives in academia, spiritual counseling, ethics boards, authorship, and institutional leadership.",
    loveCompatibility: "Best aligned with partners (7, 9, 11) who share deep intellectual and spiritual values.",
    moneyChannel: "Wealth manifests through teaching, publishing, certified programs, and trusted advisory roles.",
    spiritualLesson: "Discovering the living teacher within yourself rather than relying solely on external dogma.",
    chakraConnection: "Throat & Crown (Sacred Voice & Divine Truth)",
    dailyWisdom: "Share your wisdom generously, but keep an open mind to new perspectives."
  },
  6: {
    number: 6,
    name: "The Lovers",
    archetype: "The Harmonizer of Sacred Choice & Unity",
    meaning: "Arcana 6 represents emotional resonance, relational alchemy, values alignment, and sacred decision-making.",
    positiveExpression: "Compassionate, relational, discerning, unifying, harmonizing contrasting views.",
    shadowExpression: "Indecision, codependency, superficial romance, fear of commitment.",
    careerGuidance: "Ideal for relationship therapy, mediation, brand partnerships, public relations, and art curation.",
    loveCompatibility: "Deep connection with romantic, open-hearted numbers (2, 3, 9) seeking true soul intimacy.",
    moneyChannel: "Financial success prospers through co-founding ventures, collaborative deals, and aesthetic design.",
    spiritualLesson: "Making choices rooted in soul integrity rather than temporary external approval.",
    chakraConnection: "Heart & Solar Plexus (Love & Will Alignment)",
    dailyWisdom: "Choose from your heart today — alignment with your core values opens effortless paths."
  },
  7: {
    number: 7,
    name: "The Chariot",
    archetype: "The Victorious Strategist & Conqueror",
    meaning: "Arcana 7 represents victorious motion, focused discipline, overcoming obstacles, speed, and strategic triumph.",
    positiveExpression: "High focus, athletic resilience, goal-driven, victorious mindset, strong willpower.",
    shadowExpression: "Aggression, burnout, reckless speed, ruthless competitiveness, emotional detachment.",
    careerGuidance: "Excels in corporate executive leadership, sports management, logistics, engineering, and trial law.",
    loveCompatibility: "Thrives with supportive, emotionally grounded partners who celebrate their milestones.",
    moneyChannel: "Money is generated through ambitious targets, expansion, travel, and scaled projects.",
    spiritualLesson: "Mastering outer momentum while keeping inner peace centered in the heart.",
    chakraConnection: "Solar Plexus & Crown (Willpower & Direction)",
    dailyWisdom: "Keep your eyes fixed on the horizon — speed must be guided by clear purpose."
  },
  8: {
    number: 8,
    name: "Justice",
    archetype: "The Arbiter of Karmic Balance & Moral Truth",
    meaning: "Arcana 8 governs karmic equilibrium, cause-and-effect, legal truth, objectivity, and systemic fairness.",
    positiveExpression: "Fair, objective, highly analytical, ethical, restorer of equilibrium.",
    shadowExpression: "Harsh judgment, cynicism, legal obsession, bias, emotional coldness.",
    careerGuidance: "Thrives in jurisprudence, auditing, judiciary, compliance, dispute resolution, and forensics.",
    loveCompatibility: "Pairs well with honest, transparent partners (1, 4, 11) who value mutual accountability.",
    moneyChannel: "Wealth accumulates through clear contracts, balanced balance sheets, and ethical investments.",
    spiritualLesson: "Recognizing that every action carries an energetic harvest; integrity is ultimate protection.",
    chakraConnection: "Third Eye & Solar Plexus (Discernment & Karma)",
    dailyWisdom: "Act with total honesty today — the universe reflects back your exact energetic output."
  },
  9: {
    number: 9,
    name: "The Hermit",
    archetype: "The Wise Contemplative & Beacon of Light",
    meaning: "Arcana 9 represents deep introspection, spiritual maturity, inner beacon light, self-mastery, and solitude.",
    positiveExpression: "Deeply wise, introspective, self-reliant, guiding light, serene clarity.",
    shadowExpression: "Isolation, loneliness, misanthropy, paranoia, hoarding knowledge.",
    careerGuidance: "Excels in research, philosophy, solitude writing, archive preservation, and spiritual coaching.",
    loveCompatibility: "Resonates with independent, peaceful partners (2, 5, 7) who honor solitary reflection time.",
    moneyChannel: "Abundance comes from specialized expertise, published masterworks, and quiet consulting.",
    spiritualLesson: "Carrying your internal lantern into dark places to light the path for others.",
    chakraConnection: "Crown & Third Eye (Inner Illumination)",
    dailyWisdom: "Withdraw into quiet contemplation for a moment today — your inner guide is speaking."
  },
  10: {
    number: 10,
    name: "Wheel of Fortune",
    archetype: "The Catalyst of Cosmic Cycles & Serendipity",
    meaning: "Arcana 10 embodies dynamic shifts, cosmic timing, luck, adaptation to cycles, and rapid evolutionary turns.",
    positiveExpression: "Adaptable, fortunate, trusting in timing, opportunistic, resilient through change.",
    shadowExpression: "Gambling tendencies, feeling victim to fate, anxiety over flux, passivity.",
    careerGuidance: "Thrives in financial trading, trend forecasting, event management, entertainment, and innovation.",
    loveCompatibility: "High chemistry with adventurous, flexible partners (5, 7, 17) who embrace life's twists.",
    moneyChannel: "Flow comes from catching emerging trends, early adoption, and diversified asset rotation.",
    spiritualLesson: "Remaining centered at the quiet hub of the wheel while external circumstances turn.",
    chakraConnection: "Sacral & Crown (Flow & Universal Rhythms)",
    dailyWisdom: "Welcome change today — every shift in momentum brings unexpected blessings."
  },
  11: {
    number: 11,
    name: "Strength",
    archetype: "The Master of Inner Courage & Gentle Power",
    meaning: "Arcana 11 holds master spiritual strength, taming animalistic instincts with compassion, resilience, and endurance.",
    positiveExpression: "Unshakable resilience, gentle authority, emotional maturity, passionate drive, bravery.",
    shadowExpression: "Suppression of emotions, angry outbursts, physical exhaustion, pride.",
    careerGuidance: "Ideal for leadership coaching, crisis management, physical therapy, wildlife conservation.",
    loveCompatibility: "Pairs well with sensitive, loyal partners who honor their quiet power.",
    moneyChannel: "Financial success comes from endurance, handling high-stakes responsibility, and grit.",
    spiritualLesson: "Real strength is gentleness in action, not forceful domination.",
    chakraConnection: "Solar Plexus & Heart (Tamed Fire & Passion)",
    dailyWisdom: "Meet resistance with calm breath — gentleness dissolves rigid obstacles."
  },
  12: {
    number: 12,
    name: "The Hanged Man",
    archetype: "The Visionary Altruist & Paradigm Shifter",
    meaning: "Arcana 12 represents seeing the world from a unique reversed angle, voluntary sacrifice, surrender, and deep wisdom.",
    positiveExpression: "Altruistic, out-of-the-box thinker, empathetic healer, patient, profound perspective.",
    shadowExpression: "Victim mentality, martyrdom, inability to say no, feeling stuck, delayed action.",
    careerGuidance: "Excels in creative innovation, psychological therapy, non-profit foundations, and art film.",
    loveCompatibility: "Complements decisive, empowering partners who prevent self-sacrifice patterns.",
    moneyChannel: "Prosperity comes through unconventional ideas, service to others, and patient timing.",
    spiritualLesson: "Surrendering control unlocks divine clarity and unexpected breakthroughs.",
    chakraConnection: "Crown & Throat (New Vision & Higher Truth)",
    dailyWisdom: "Shift your point of view today — an apparent delay is serving a deeper revelation."
  },
  13: {
    number: 13,
    name: "Transformation (Death)",
    archetype: "The Alchemist of Rebirth & Metamorphosis",
    meaning: "Arcana 13 is the frequency of radical renewal, closing obsolete chapters, profound metamorphosis, and rebirth.",
    positiveExpression: "Transformative, courageous, releasing old burdens, regenerative, visionary renewer.",
    shadowExpression: "Fear of change, stubborn clinging to dead situations, grief paralysis, destruction.",
    careerGuidance: "Ideal for turnaround consultancy, crisis restructuring, grief counseling, bio-recycling, and surgery.",
    loveCompatibility: "Thrives with resilient, emotionally deep partners (8, 11, 16) capable of mutual growth.",
    moneyChannel: "Revenues generate by buying underperforming assets, transforming them, and creating new value.",
    spiritualLesson: "Understanding that endings are simply fertile soil for magnificent new beginnings.",
    chakraConnection: "Root & Sacral (Primal Renewal & Release)",
    dailyWisdom: "Let go of what no longer serves your soul — space must be cleared for new life."
  },
  14: {
    number: 14,
    name: "Temperance",
    archetype: "The Sacred Alchemist & Master Weaver",
    meaning: "Arcana 14 brings equilibrium, artful synthesis, moderation, emotional healing, and divine timing.",
    positiveExpression: "Balanced, harmonious, peaceful mediator, integrative thinker, patient healer.",
    shadowExpression: "Imbalance, procrastination, compromise of principles, passive stagnation.",
    careerGuidance: "Excels in holistic health, pharmacy, diplomatic relations, sound therapy, and culinary chemistry.",
    loveCompatibility: "Deep harmony with peaceful, emotionally balanced partners (2, 6, 9) seeking serene warmth.",
    moneyChannel: "Wealth builds steadily through balanced portfolios, steady compounding, and calm execution.",
    spiritualLesson: "Blending contrasting elements into a higher spiritual synthesis through patience.",
    chakraConnection: "Heart & Solar Plexus (Inner Harmony)",
    dailyWisdom: "Practice moderation and grace today — balance is the secret key to peace."
  },
  15: {
    number: 15,
    name: "The Devil",
    archetype: "The Master of Shadow & Material Potential",
    meaning: "Arcana 15 represents unmasking subconscious illusions, mastering material energy, intense passion, and liberation from fear.",
    positiveExpression: "Charismatic, highly perceptive of motives, material master, passionate, uninhibited.",
    shadowExpression: "Addiction, codependency, material greed, manipulation, feeling trapped by fear.",
    careerGuidance: "Thrives in high-stakes finance, talent management, psychology, investigative journalism, and sales.",
    loveCompatibility: "Pairs best with grounded, self-possessed partners (4, 8, 11) who maintain strong personal boundaries.",
    moneyChannel: "Abundance unlocks when using high influence ethically and overcoming subconscious money blocks.",
    spiritualLesson: "Recognizing that true freedom occurs when you illuminate and integrate your shadow.",
    chakraConnection: "Root & Solar Plexus (Material Vitality & Power)",
    dailyWisdom: "Examine any hidden fears today — awareness instantly breaks the illusion of limitation."
  },
  16: {
    number: 16,
    name: "The Tower",
    archetype: "The Catalyst of Awakening & Radical Truth",
    meaning: "Arcana 16 represents sudden breakthroughs, dismantling false structures, liberation from illusion, and rapid awakening.",
    positiveExpression: "Truth-teller, groundbreaker, resilient, liberating, builder of authentic foundations.",
    shadowExpression: "Chaos, sudden anger, destruction without purpose, resisting necessary truth.",
    careerGuidance: "Excels in disaster response, cybersecurity disruption, revolutionary tech, structural engineering, and therapy.",
    loveCompatibility: "Compatible with authentic, resilient partners (7, 13, 20) who value raw truth above illusions.",
    moneyChannel: "Rebuilds wealth stronger by eliminating inefficient business models and pioneering breakthroughs.",
    spiritualLesson: "False structures crumble so that genuine, unshakeable truth can take root.",
    chakraConnection: "Root & Crown (Breakthrough & Divine Awakening)",
    dailyWisdom: "Embrace sudden insights today — breaking down artificial barriers releases authentic energy."
  },
  17: {
    number: 17,
    name: "The Star",
    archetype: "The Beacon of Hope & Inspiring Visionary",
    meaning: "Arcana 17 carries the pure vibration of inspiration, creative genius, spiritual hope, cosmic connection, and talent.",
    positiveExpression: "Inspiring, creative, optimistic, gifted artist, beacon of hope, authentic presence.",
    shadowExpression: "Unrealistic fantasy, imposter syndrome, detachment from daily duties, cynicism.",
    careerGuidance: "Ideal for astronomy, creative arts, media broad-casting, brand ambassador roles, and astrology.",
    loveCompatibility: "Harmonizes with uplifting, supportive partners (3, 6, 19) who encourage their big dreams.",
    moneyChannel: "Wealth flows through public visibility, artistic expression, intellectual property, and fame.",
    spiritualLesson: "Trusting your unique guiding light and sharing your gifts without fear of judgment.",
    chakraConnection: "Third Eye & Heart (Cosmic Hope & Inspiration)",
    dailyWisdom: "Let your authentic light shine today — your hope inspires everyone around you."
  },
  18: {
    number: 18,
    name: "The Moon",
    archetype: "The Subconscious Navigator & Mystical Artist",
    meaning: "Arcana 18 governs depth perception, subconscious imagery, dreamwork, intuition, and navigating mystery.",
    positiveExpression: "Deeply imaginative, intuitive, artistically gifted, empathetic, dreamweaver.",
    shadowExpression: "Anxiety, self-deception, fear of the unknown, moodiness, escapism.",
    careerGuidance: "Excels in creative fiction, film directing, dream analysis, hypnosis, poetry, and subconscious healing.",
    loveCompatibility: "Pairs harmoniously with grounding, reassuring partners (2, 4, 14) who offer safety to their sensitivity.",
    moneyChannel: "Prosperity stems from turning deep emotional & subconscious insights into compelling art and media.",
    spiritualLesson: "Transforming mystery and shadow into radiant creative expression.",
    chakraConnection: "Third Eye & Sacral (Subconscious Intuition & Art)",
    dailyWisdom: "Honor your intuition and dreams today — subconscious clarity is emerging."
  },
  19: {
    number: 19,
    name: "The Sun",
    archetype: "The Luminary of Radiant Joy & Vitality",
    meaning: "Arcana 19 is the highest vibration of joyful success, vitality, warmth, leadership, clarity, and abundance.",
    positiveExpression: "Radiant, generous, joyful leader, uplifting presence, magnetic vitality.",
    shadowExpression: "Burnout, vanity, overwhelming intensity, demands for attention.",
    careerGuidance: "Thrives in public speaking, performing arts, youth education, executive leadership, and wellness.",
    loveCompatibility: "Deep warmth with joyful, creative partners (1, 3, 17) who share enthusiastic energy.",
    moneyChannel: "Abundance multiplies exponentially when sharing success, mentoring others, and leading openly.",
    spiritualLesson: "Radiating unconditional warmth while keeping ego humble before the source of life.",
    chakraConnection: "Solar Plexus & Heart (Radiant Joy & Vitality)",
    dailyWisdom: "Spread warmth and joy today — your positive energy lights up the entire room."
  },
  20: {
    number: 20,
    name: "Judgment",
    archetype: "The Herald of Soul Vocation & Rebirth",
    meaning: "Arcana 20 represents answering your higher soul calling, ancestral healing, spiritual rebirth, and karmic awakening.",
    positiveExpression: "Awakened, purposeful, ancestral healer, clear vocation, transformative caller.",
    shadowExpression: "Self-doubt, ignoring inner calling, dwelling in past regrets, judgmental attitude.",
    careerGuidance: "Excels in ancestral research, vocational coaching, systemic therapy, community organizing, and law.",
    loveCompatibility: "Complements purposeful partners (5, 8, 21) who support soul missions and lifelong growth.",
    moneyChannel: "Prosperity unfolds when aligning your career with your highest spiritual purpose and legacy.",
    spiritualLesson: "Answering the call of your soul and stepping fearlessly into your true identity.",
    chakraConnection: "Crown & Throat (Soul Call & Voice of Purpose)",
    dailyWisdom: "Listen for your higher calling today — it is time to step into your full purpose."
  },
  21: {
    number: 21,
    name: "The World",
    archetype: "The Master of Global Integration & Completion",
    meaning: "Arcana 21 represents cosmic completion, global horizons, wholeness, international resonance, and master achievement.",
    positiveExpression: "Global vision, fulfilled, holistic thinker, accomplished, expansive communicator.",
    shadowExpression: "Fear of expanding beyond comfort, unfinished projects, feeling trapped in old loops.",
    careerGuidance: "Thrives in international relations, global commerce, environmental advocacy, publishing, and travel.",
    loveCompatibility: "High synergy with open-minded, worldly partners (7, 10, 22) who love global adventures.",
    moneyChannel: "Wealth flows from international markets, digital scale, cross-border partnerships, and broad platforms.",
    spiritualLesson: "Celebrating completion while standing ready at the doorway of a vast new cycle.",
    chakraConnection: "All Chakras Integrated (Wholeness & Cosmic Unity)",
    dailyWisdom: "Celebrate your accomplishments today — you have reached a major milestone of growth."
  },
  22: {
    number: 22,
    name: "The Fool",
    archetype: "The Infinite Explorer & Innocent Visionary",
    meaning: "Arcana 22 (or 0) embodies pure potential, unburdened trust, leaps of faith, fresh starts, and divine freedom.",
    positiveExpression: "Faithful, unburdened, joyful explorer, open-minded, courageous beginner.",
    shadowExpression: "Recklessness, naivety, lack of foresight, escaping responsibility.",
    careerGuidance: "Ideal for breakthrough startup innovation, adventure travel, experimental art, and trailblazing ventures.",
    loveCompatibility: "Pairs well with supportive, grounding partners (1, 6, 17) who cherish their spontaneous spirit.",
    moneyChannel: "Abundance opens up through bold leaps into untried markets and trusting unproven ideas.",
    spiritualLesson: "Stepping off the cliff of expectation with absolute trust in the universe.",
    chakraConnection: "Crown & Sacral (Pure Potential & Joyful Adventure)",
    dailyWisdom: "Take a leap of faith today — the universe supports your fresh start."
  }
};

// Localized Arcana entry getter
export function getLocalizedArcanaEntry(arcanaNum: number, locale: string = 'en'): ArcanaEncyclopediaEntry {
  const masterEntry = MAJOR_ARCANA_DATABASE[arcanaNum] || MAJOR_ARCANA_DATABASE[1];
  if (locale === 'en') return masterEntry;

  // Localized dictionaries for key target locales
  if (locale === 'de') {
    const deNames: Record<number, string> = {
      1: "Der Magier", 2: "Die Hohepriesterin", 3: "Die Herrscherin", 4: "Der Herrscher", 5: "Der Hohepriester",
      6: "Die Liebenden", 7: "Der Wagen", 8: "Die Kraft / Gerechtigkeit", 9: "Der Eremit", 10: "Das Rad des Schicksals",
      11: "Gerechtigkeit / Stärke", 12: "Der Gehängte", 13: "Der Tod / Transformation", 14: "Die Mäßigkeit", 15: "Der Teufel",
      16: "Der Turm", 17: "Der Stern", 18: "Der Mond", 19: "Die Sonne", 20: "Das Gericht / Wiedergeburt", 21: "Die Welt", 22: "Der Narr"
    };
    return { ...masterEntry, name: deNames[arcanaNum] || masterEntry.name };
  }

  if (locale === 'hi') {
    const hiNames: Record<number, string> = {
      1: "द मैजिशियन (जादुगर)", 2: "द हाई प्रियेस्टेस (उच्च पुजारिन)", 3: "द एम्प्रेस (महारानी)", 4: "द एम्परर (सम्राट)", 5: "द हीरोफेंट (धर्मगुरु)",
      6: "द लवर्स (प्रेमी)", 7: "द चैरियट (रथ)", 8: "द स्ट्रेंथ (शक्ति)", 9: "द हर्मिट (सन्यासी)", 10: "व्हील ऑफ फॉर्च्यून (भाग्य चक्र)",
      11: "जस्टिस (न्याय)", 12: "द हैंग्ड मैन (लटका हुआ मनुष्य)", 13: "डेथ (रूपांतरण)", 14: "टेंपरेंस (संतुलन)", 15: "द डेविल (आकर्षण)",
      16: "द टॉवर (परिवर्तन)", 17: "द स्टार (नक्षत्र)", 18: "द मून (चंद्रमा)", 19: "द सन (सूर्य)", 20: "जजमेंट (पुनर्जन्म)", 21: "द वर्ल्ड (संसार)", 22: "द फूल (साहसी)"
    };
    return { ...masterEntry, name: hiNames[arcanaNum] || masterEntry.name };
  }

  if (locale === 'ar') {
    const arNames: Record<number, string> = {
      1: "الساحر (The Magician)", 2: "كاهنة العليا", 3: "الامبراطورة", 4: "الامبراطور", 5: "الكاهن الأعظم",
      6: "العشاق", 7: "العربة", 8: "القوة", 9: "الناسك", 10: "عجلة الحظ",
      11: "العدالة", 12: "المعلق", 13: "الموت والتحول", 14: "الاعتدال", 15: "الشيطان",
      16: "البرج", 17: "النجمة", 18: "القمر", 19: "الشمس", 20: "البعث والقيامة", 21: "العالم", 22: "الأحمق المغامر"
    };
    return { ...masterEntry, name: arNames[arcanaNum] || masterEntry.name };
  }

  return masterEntry;
}

