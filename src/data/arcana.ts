export interface ArcanaEncyclopediaEntry {
  number: number;
  name: string;
  archetype: string;
  meaning: string;
  historicalContext: string;
  positiveExpression: string;
  shadowExpression: string;
  careerGuidance: string;
  loveCompatibility: string;
  moneyChannel: string;
  spiritualLesson: string;
  chakraConnection: string;
  dailyWisdom: string;
  reflectionQuestions: string[];
}

export const MAJOR_ARCANA_DATABASE: Record<number, ArcanaEncyclopediaEntry> = {
  1: {
    number: 1,
    name: "The Magician",
    archetype: "The Visionary Creator & Master Manifestor",
    meaning: "Arcana 1 represents raw initiative, creative willpower, and active leadership. In the Destiny Matrix system, individuals carrying this vibration at their core possess an innate drive to translate abstract ideas into tangible reality.",
    historicalContext: "Historically rooted in Tarot symbolism as the bridge between spiritual intention and physical manifestation, Arcana 1 within Natalia Ladini's 22-Arcana framework marks the starting frequency of conscious creation and personal authority.",
    positiveExpression: "Resourceful initiative, independent drive, clear boundary setting, decisive action, and pioneering courage.",
    shadowExpression: "Ego-driven impatience, manipulation of others, difficulty delegating, or reluctance to finish what was started.",
    careerGuidance: "Excels in independent leadership, technology innovation, entrepreneurial ventures, and strategic consulting where individual autonomy is prized.",
    loveCompatibility: "Resonates best with grounding partners who offer stability and calm presence to balance their fast-paced creative momentum.",
    moneyChannel: "Financial momentum generates through original ideas, personal branding, proprietary skills, and quick execution.",
    spiritualLesson: "Discovering that true personal power emerges from aligning willpower with integrity rather than forcing outcomes through ego.",
    chakraConnection: "Crown & Third Eye (Vision & Higher Intention)",
    dailyWisdom: "Focus your intent today — you already possess the core skills required to shape your current circumstances.",
    reflectionQuestions: [
      "Where in my life am I waiting for permission to take initial action?",
      "How can I channel my creative ideas into a structured daily project?",
      "Am I using my influence to empower others or to control outcomes?"
    ]
  },
  2: {
    number: 2,
    name: "The High Priestess",
    archetype: "The Intuitive Mystic & Sacred Diplomat",
    meaning: "Arcana 2 carries the vibration of subtle perception, subconscious wisdom, and diplomatic mediation. It governs the quiet space between cause and effect.",
    historicalContext: "Associated in esoteric tradition with the veil of mystery and hidden knowledge, Arcana 2 in the Destiny Matrix system represents passive reception, secret insight, and deep emotional awareness.",
    positiveExpression: "Intuitive clarity, gentle peacemaking, active listening, emotional discernment, and respectful boundary management.",
    shadowExpression: "Secretiveness, passive-aggressive communication, emotional isolation, or ignoring obvious logical facts in favor of illusion.",
    careerGuidance: "Thrives in psychology, intuitive counseling, diplomatic mediation, artistic research, and archival preservation.",
    loveCompatibility: "Pairs harmoniously with expressive, grounded partners who respect quiet reflection time and value subtle emotional intimacy.",
    moneyChannel: "Wealth manifests through strategic partnerships, quiet investments, passive income streams, and specialized research.",
    spiritualLesson: "Learning to trust inner quiet signals over loud external opinions while maintaining healthy personal boundaries.",
    chakraConnection: "Third Eye & Heart (Subtle Sight & Emotional Discernment)",
    dailyWisdom: "Silence holds the answer today. Pause and listen to your internal signal before making key choices.",
    reflectionQuestions: [
      "What subtle gut feeling have I been ignoring lately?",
      "How can I practice active listening without absorbing other people's stress?",
      "Where do I need to establish clearer privacy in my daily life?"
    ]
  },
  3: {
    number: 3,
    name: "The Empress",
    archetype: "The Mother of Abundance & Creative Beauty",
    meaning: "Arcana 3 represents fertility, material elegance, artistic cultivation, and generous caretaking. It is the frequency of natural expansion.",
    historicalContext: "Drawing from archetypal mother symbols and nature's fertility, Arcana 3 in the 22-Arcana framework highlights practical growth, sensory beauty, and material prosperity.",
    positiveExpression: "Abundant mindset, artistic flair, nurturing care, aesthetic refinement, and generous hospitality.",
    shadowExpression: "Extravagance, over-protectiveness, vanity, material carelessness, or difficulty setting limits on spending.",
    careerGuidance: "Ideal for interior architecture, luxury branding, hospitality management, fashion design, and environmental conservation.",
    loveCompatibility: "Synergizes with structured, protective partners who build solid foundations for long-term growth.",
    moneyChannel: "Abundance multiplies when creating beautiful user experiences, luxury products, or artistic works that elevate daily life.",
    spiritualLesson: "Receiving abundance with gratitude and recognizing that natural growth requires patient care.",
    chakraConnection: "Heart & Sacral (Creation & Pure Delight)",
    dailyWisdom: "Nurture your current projects today — beauty and growth naturally follow focused, loving attention.",
    reflectionQuestions: [
      "How can I bring more harmony and aesthetic comfort into my immediate living space?",
      "Am I allowing myself to receive support as generously as I offer it?",
      "What creative seeds am I ready to nourish into fruition?"
    ]
  },
  4: {
    number: 4,
    name: "The Emperor",
    archetype: "The Master Architect & Sovereign Ruler",
    meaning: "Arcana 4 embodies structural discipline, stability, executive organization, and protective leadership.",
    historicalContext: "Reflecting traditional Tarot symbols of sovereignty and order, Arcana 4 in Natalia Ladini's matrix framework represents foundational security and systemic governance.",
    positiveExpression: "Systematic organization, dependable protection, strategic vision, unwavering stability, and ethical authority.",
    shadowExpression: "Rigidity, stubbornness, micromanagement, emotional distance, or controlling behavior under stress.",
    careerGuidance: "Excels in corporate executive leadership, structural engineering, legal compliance, real estate development, and financial auditing.",
    loveCompatibility: "Harmonizes with intuitive, nurturing partners who soften their structured focus and encourage emotional openness.",
    moneyChannel: "Prosperity is built through long-term real estate, systematic investments, corporate equity, and disciplined budgeting.",
    spiritualLesson: "True authority rests on protective service and building lasting safety for others rather than rigid control.",
    chakraConnection: "Root & Solar Plexus (Grounding & Ethical Authority)",
    dailyWisdom: "Build strong foundations today — lasting achievements require consistent order and discipline.",
    reflectionQuestions: [
      "Where in my work or life do I need to establish clearer structural order?",
      "Am I leading with calm authority or reacting out of a need for control?",
      "How can I create lasting security for the people who rely on me?"
    ]
  },
  5: {
    number: 5,
    name: "The Hierophant",
    archetype: "The Sacred Mentor & Master Teacher",
    meaning: "Arcana 5 carries the frequency of higher wisdom, moral integrity, structured education, and mentorship.",
    historicalContext: "Associated with spiritual traditions, moral philosophy, and institutional knowledge, Arcana 5 in the Destiny Matrix system governs mentorship, lifelong learning, and principled guidance.",
    positiveExpression: "Wise mentorship, ethical leadership, dedication to truth, inspiring teaching, and structured learning.",
    shadowExpression: "Dogmatism, narrow-mindedness, insistence on rigid conformity, or spiritual pride.",
    careerGuidance: "Thrives in academia, legal ethics, published authorship, spiritual counseling, and institutional director roles.",
    loveCompatibility: "Pairs best with partners who share deep intellectual curiosity, moral values, and respect for lifelong learning.",
    moneyChannel: "Wealth flows through educational programs, publishing, certified consulting, and trusted advisory positions.",
    spiritualLesson: "Discovering the inner teacher within yourself while remaining receptive to new evidence and perspectives.",
    chakraConnection: "Throat & Crown (Sacred Voice & Divine Truth)",
    dailyWisdom: "Share your knowledge generously today, but keep your mind open to fresh insights.",
    reflectionQuestions: [
      "What important lesson have I learned that could benefit someone else right now?",
      "Am I holding onto a rigid belief that no longer serves my growth?",
      "How can I integrate moral integrity into my daily practical decisions?"
    ]
  },
  6: {
    number: 6,
    name: "The Lovers",
    archetype: "The Harmonizer of Sacred Choice & Unity",
    meaning: "Arcana 6 represents emotional resonance, relational alchemy, values alignment, and sacred decision-making.",
    positiveExpression: "Compassionate discernment, relational harmony, unifying contrasting viewpoints, and open-hearted choices.",
    shadowExpression: "Indecision, codependency, superficial romance, or fear of committing to long-term goals.",
    careerGuidance: "Ideal for relationship therapy, mediation, brand partnerships, public relations, and art curation.",
    loveCompatibility: "Deep connection with honest, open-hearted partners seeking authentic mutual respect and soul intimacy.",
    moneyChannel: "Financial success prospers through collaborative ventures, co-founding agreements, and aesthetic design.",
    spiritualLesson: "Making choices rooted in soul integrity rather than seeking temporary external approval.",
    chakraConnection: "Heart & Solar Plexus (Love & Will Alignment)",
    dailyWisdom: "Choose from your heart today — alignment with your core values opens smooth, clear paths.",
    reflectionQuestions: [
      "What key decision am I putting off because I fear making a mistake?",
      "Does this partnership or commitment reflect my genuine internal values?",
      "How can I bring more balance into my key relationships?"
    ]
  },
  7: {
    number: 7,
    name: "The Chariot",
    archetype: "The Victorious Strategist & Conqueror",
    meaning: "Arcana 7 represents victorious motion, focused discipline, speed, overcoming obstacles, and strategic triumph.",
    positiveExpression: "High focus, athletic resilience, goal-driven momentum, victorious mindset, and strategic clarity.",
    shadowExpression: "Burnout, aggressive competitiveness, reckless speed, or emotional detachment under pressure.",
    careerGuidance: "Excels in executive leadership, sports management, logistics, project management, and trial advocacy.",
    loveCompatibility: "Thrives with supportive, emotionally grounded partners who celebrate their milestones and encourage restful pauses.",
    moneyChannel: "Revenue generates through ambitious targets, expansion, international travel, and scaled projects.",
    spiritualLesson: "Mastering outer momentum while keeping inner peace centered in the heart.",
    chakraConnection: "Solar Plexus & Crown (Willpower & Strategic Direction)",
    dailyWisdom: "Keep your eyes fixed on your goal today — momentum must be guided by clear purpose.",
    reflectionQuestions: [
      "What major milestone am I currently driving toward, and is my pace sustainable?",
      "Am I balancing hard work with necessary rest and recovery?",
      "How can I channel my focus without bulldozing past important details?"
    ]
  },
  8: {
    number: 8,
    name: "Justice",
    archetype: "The Arbiter of Karmic Balance & Moral Truth",
    meaning: "Arcana 8 governs karmic equilibrium, cause-and-effect, legal truth, objectivity, and systemic fairness.",
    positiveExpression: "Objective fairness, analytical clarity, ethical integrity, accountability, and restoring balance.",
    shadowExpression: "Harsh judgment, cynicism, legal obsession, emotional coldness, or bias.",
    careerGuidance: "Thrives in jurisprudence, auditing, judiciary, compliance, dispute resolution, and forensic accounting.",
    loveCompatibility: "Pairs well with honest, transparent partners who value mutual accountability and clear agreements.",
    moneyChannel: "Wealth accumulates through clear contracts, balanced balance sheets, and ethical investments.",
    spiritualLesson: "Recognizing that every action carries an energetic harvest; integrity is ultimate protection.",
    chakraConnection: "Third Eye & Solar Plexus (Discernment & Cause-and-Effect)",
    dailyWisdom: "Act with total honesty today — the universe reflects back your exact energetic output.",
    reflectionQuestions: [
      "Where in my life do I need to restore balance or honor a promise?",
      "Am I judging a situation fairly, or am I letting emotional bias cloud my view?",
      "What small habit change will align my daily actions with my moral standards?"
    ]
  },
  9: {
    number: 9,
    name: "The Hermit",
    archetype: "The Wise Contemplative & Beacon of Light",
    meaning: "Arcana 9 represents deep introspection, spiritual maturity, inner beacon light, self-mastery, and solitude.",
    positiveExpression: "Deep wisdom, introspective clarity, self-reliance, quiet guidance, and serene focus.",
    shadowExpression: "Isolation, loneliness, cynicism, hoarding knowledge, or fear of sharing insights with others.",
    careerGuidance: "Excels in research, philosophy, independent authorship, archive preservation, and strategic coaching.",
    loveCompatibility: "Resonates with independent, peaceful partners who honor solitary reflection time and deep conversations.",
    moneyChannel: "Abundance comes from specialized expertise, published masterworks, and high-value quiet consulting.",
    spiritualLesson: "Carrying your internal lantern into dark places to light the path for others.",
    chakraConnection: "Crown & Third Eye (Inner Illumination)",
    dailyWisdom: "Withdraw into quiet contemplation for a moment today — your inner guide is speaking.",
    reflectionQuestions: [
      "What quiet truth emerges when I turn off external digital noise?",
      "Am I using solitude for self-mastery or as a retreat from life?",
      "How can I share my hard-won wisdom to illuminate someone else's journey?"
    ]
  },
  10: {
    number: 10,
    name: "Wheel of Fortune",
    archetype: "The Catalyst of Cosmic Cycles & Serendipity",
    meaning: "Arcana 10 embodies dynamic shifts, cosmic timing, luck, adaptation to cycles, and rapid evolutionary turns.",
    positiveExpression: "Adaptable, fortunate, trusting in timing, opportunistic, resilient through change.",
    shadowExpression: "Gambling tendencies, feeling victim to fate, anxiety over flux, passivity.",
    careerGuidance: "Thrives in financial trading, trend forecasting, event management, entertainment, and innovation.",
    loveCompatibility: "High chemistry with adventurous, flexible partners who embrace life's twists.",
    moneyChannel: "Flow comes from catching emerging trends, early adoption, and diversified asset rotation.",
    spiritualLesson: "Remaining centered at the quiet hub of the wheel while external circumstances turn.",
    chakraConnection: "Sacral & Crown (Flow & Universal Rhythms)",
    dailyWisdom: "Welcome change today — every shift in momentum brings unexpected blessings.",
    reflectionQuestions: [
      "How can I adapt smoothly to a recent unexpected shift in my environment?",
      "Am I holding onto a past cycle that has naturally come to a close?",
      "Where can I ride the current wave of opportunity with confidence?"
    ]
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
    dailyWisdom: "Meet resistance with calm breath — gentleness dissolves rigid obstacles.",
    reflectionQuestions: [
      "Where in my life can I replace force with calm, persistent gentleness?",
      "How can I honor my emotional passion without letting anger take the wheel?",
      "Am I taking care of my physical stamina as I handle current responsibilities?"
    ]
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
    dailyWisdom: "Shift your point of view today — an apparent delay is serving a deeper revelation.",
    reflectionQuestions: [
      "How would this situation look if I viewed it from an entirely opposite perspective?",
      "Am I sacrificing my own needs to keep the peace inappropriately?",
      "What do I need to pause or surrender to gain ultimate clarity?"
    ]
  },
  13: {
    number: 13,
    name: "Transformation (Death)",
    archetype: "The Alchemist of Rebirth & Metamorphosis",
    meaning: "Arcana 13 is the frequency of radical renewal, closing obsolete chapters, profound metamorphosis, and rebirth.",
    positiveExpression: "Transformative, courageous, releasing old burdens, regenerative, visionary renewer.",
    shadowExpression: "Fear of change, stubborn clinging to dead situations, grief paralysis, destruction.",
    careerGuidance: "Ideal for turnaround consultancy, crisis restructuring, grief counseling, bio-recycling, and surgery.",
    loveCompatibility: "Thrives with resilient, emotionally deep partners capable of mutual growth.",
    moneyChannel: "Revenues generate by buying underperforming assets, transforming them, and creating new value.",
    spiritualLesson: "Understanding that endings are simply fertile soil for magnificent new beginnings.",
    chakraConnection: "Root & Sacral (Primal Renewal & Release)",
    dailyWisdom: "Let go of what no longer serves your soul — space must be cleared for new life.",
    reflectionQuestions: [
      "What obsolete habit or situation am I holding onto out of fear of change?",
      "How can I embrace this current transition as a fresh rebirth?",
      "What new space opens up in my life once I release old burdens?"
    ]
  },
  14: {
    number: 14,
    name: "Temperance",
    archetype: "The Sacred Alchemist & Master Weaver",
    meaning: "Arcana 14 brings equilibrium, artful synthesis, moderation, emotional healing, and divine timing.",
    positiveExpression: "Balanced, harmonious, peaceful mediator, integrative thinker, patient healer.",
    shadowExpression: "Imbalance, procrastination, compromise of principles, passive stagnation.",
    careerGuidance: "Excels in holistic health, pharmacy, diplomatic relations, sound therapy, and culinary chemistry.",
    loveCompatibility: "Deep harmony with peaceful, emotionally balanced partners seeking serene warmth.",
    moneyChannel: "Wealth builds steadily through balanced portfolios, steady compounding, and calm execution.",
    spiritualLesson: "Blending contrasting elements into a higher spiritual synthesis through patience.",
    chakraConnection: "Heart & Solar Plexus (Inner Harmony)",
    dailyWisdom: "Practice moderation and grace today — balance is the secret key to peace.",
    reflectionQuestions: [
      "Where in my lifestyle or emotions do I need to restore moderate balance?",
      "How can I synthesize two contrasting ideas into a harmonious solution?",
      "Am I allowing events to unfold in their natural, patient timing?"
    ]
  },
  15: {
    number: 15,
    name: "The Devil",
    archetype: "The Master of Shadow & Material Potential",
    meaning: "Arcana 15 represents unmasking subconscious illusions, mastering material energy, intense passion, and liberation from fear.",
    positiveExpression: "Charismatic, highly perceptive of motives, material master, passionate, uninhibited.",
    shadowExpression: "Addiction, codependency, material greed, manipulation, feeling trapped by fear.",
    careerGuidance: "Thrives in high-stakes finance, talent management, psychology, investigative journalism, and sales.",
    loveCompatibility: "Pairs best with grounded, self-possessed partners who maintain strong personal boundaries.",
    moneyChannel: "Abundance unlocks when using high influence ethically and overcoming subconscious money blocks.",
    spiritualLesson: "Recognizing that true freedom occurs when you illuminate and integrate your shadow.",
    chakraConnection: "Root & Solar Plexus (Material Vitality & Power)",
    dailyWisdom: "Examine any hidden fears today — awareness instantly breaks the illusion of limitation.",
    reflectionQuestions: [
      "What subconscious fear or attachment is currently limiting my choices?",
      "How can I channel my intense ambition into ethical, constructive channels?",
      "Am I honoring my personal boundaries in high-stakes environments?"
    ]
  },
  16: {
    number: 16,
    name: "The Tower",
    archetype: "The Catalyst of Awakening & Radical Truth",
    meaning: "Arcana 16 represents sudden breakthroughs, dismantling false structures, liberation from illusion, and rapid awakening.",
    positiveExpression: "Truth-teller, groundbreaker, resilient, liberating, builder of authentic foundations.",
    shadowExpression: "Chaos, sudden anger, destruction without purpose, resisting necessary truth.",
    careerGuidance: "Excels in disaster response, cybersecurity disruption, revolutionary tech, structural engineering, and therapy.",
    loveCompatibility: "Compatible with authentic, resilient partners who value raw truth above illusions.",
    moneyChannel: "Rebuilds wealth stronger by eliminating inefficient business models and pioneering breakthroughs.",
    spiritualLesson: "False structures crumble so that genuine, unshakeable truth can take root.",
    chakraConnection: "Root & Crown (Breakthrough & Divine Awakening)",
    dailyWisdom: "Embrace sudden insights today — breaking down artificial barriers releases authentic energy.",
    reflectionQuestions: [
      "What outdated assumption or artificial structure recently broke down in my life?",
      "How can I rebuild my current plans on a more authentic foundation?",
      "Am I welcoming truth, even when it interrupts my comfort zone?"
    ]
  },
  17: {
    number: 17,
    name: "The Star",
    archetype: "The Beacon of Hope & Inspiring Visionary",
    meaning: "Arcana 17 carries the pure vibration of inspiration, creative genius, spiritual hope, cosmic connection, and talent.",
    positiveExpression: "Inspiring, creative, optimistic, gifted artist, beacon of hope, authentic presence.",
    shadowExpression: "Unrealistic fantasy, imposter syndrome, detachment from daily duties, cynicism.",
    careerGuidance: "Ideal for astronomy, creative arts, media broadcasting, brand ambassador roles, and astrology.",
    loveCompatibility: "Harmonizes with uplifting, supportive partners who encourage their big dreams.",
    moneyChannel: "Wealth flows through public visibility, artistic expression, intellectual property, and fame.",
    spiritualLesson: "Trusting your unique guiding light and sharing your gifts without fear of judgment.",
    chakraConnection: "Third Eye & Heart (Cosmic Hope & Inspiration)",
    dailyWisdom: "Let your authentic light shine today — your hope inspires everyone around you.",
    reflectionQuestions: [
      "What creative talent or dream have I been hesitant to share publicly?",
      "How can I remain practically grounded while pursuing my highest vision?",
      "Where can I bring hope and positive inspiration into my community?"
    ]
  },
  18: {
    number: 18,
    name: "The Moon",
    archetype: "The Subconscious Navigator & Mystical Artist",
    meaning: "Arcana 18 governs depth perception, subconscious imagery, dreamwork, intuition, and navigating mystery.",
    positiveExpression: "Deeply imaginative, intuitive, artistically gifted, empathetic, dreamweaver.",
    shadowExpression: "Anxiety, self-deception, fear of the unknown, moodiness, escapism.",
    careerGuidance: "Excels in creative fiction, film directing, dream analysis, hypnosis, poetry, and subconscious healing.",
    loveCompatibility: "Pairs harmoniously with grounding, reassuring partners who offer safety to their sensitivity.",
    moneyChannel: "Prosperity stems from turning deep emotional & subconscious insights into compelling art and media.",
    spiritualLesson: "Transforming mystery and shadow into radiant creative expression.",
    chakraConnection: "Third Eye & Sacral (Subconscious Intuition & Art)",
    dailyWisdom: "Honor your intuition and dreams today — subconscious clarity is emerging.",
    reflectionQuestions: [
      "What message is my subconscious mind sending through dreams or feelings?",
      "Am I reacting to real events or projecting unexamined anxieties?",
      "How can I transform my sensitivity into inspiring creative work?"
    ]
  },
  19: {
    number: 19,
    name: "The Sun",
    archetype: "The Luminary of Radiant Joy & Vitality",
    meaning: "Arcana 19 is the highest vibration of joyful success, vitality, warmth, leadership, clarity, and abundance.",
    positiveExpression: "Radiant, generous, joyful leader, uplifting presence, magnetic vitality.",
    shadowExpression: "Burnout, vanity, overwhelming intensity, demands for attention.",
    careerGuidance: "Thrives in public speaking, performing arts, youth education, executive leadership, and wellness.",
    loveCompatibility: "Deep warmth with joyful, creative partners who share enthusiastic energy.",
    moneyChannel: "Abundance multiplies exponentially when sharing success, mentoring others, and leading openly.",
    spiritualLesson: "Radiating unconditional warmth while keeping ego humble before the source of life.",
    chakraConnection: "Solar Plexus & Heart (Radiant Joy & Vitality)",
    dailyWisdom: "Spread warmth and joy today — your positive energy lights up the entire room.",
    reflectionQuestions: [
      "How can I celebrate my wins today with genuine gratitude and humility?",
      "Where can I bring more playfulness and warmth into my routine?",
      "Am I using my success to lift up the people around me?"
    ]
  },
  20: {
    number: 20,
    name: "Judgment",
    archetype: "The Herald of Soul Vocation & Rebirth",
    meaning: "Arcana 20 represents answering your higher soul calling, ancestral healing, spiritual rebirth, and karmic awakening.",
    positiveExpression: "Awakened, purposeful, ancestral healer, clear vocation, transformative caller.",
    shadowExpression: "Self-doubt, ignoring inner calling, dwelling in past regrets, judgmental attitude.",
    careerGuidance: "Excels in ancestral research, vocational coaching, systemic therapy, community organizing, and law.",
    loveCompatibility: "Complements purposeful partners who support soul missions and lifelong growth.",
    moneyChannel: "Prosperity unfolds when aligning your career with your highest spiritual purpose and legacy.",
    spiritualLesson: "Answering the call of your soul and stepping fearlessly into your true identity.",
    chakraConnection: "Crown & Throat (Soul Call & Voice of Purpose)",
    dailyWisdom: "Listen for your higher calling today — it is time to step into your full purpose.",
    reflectionQuestions: [
      "What vocational calling have I felt drawn to throughout my life?",
      "How can I forgive past mistakes and step into a fresh chapter of rebirth?",
      "What ancestral legacy or value do I want to honor and continue?"
    ]
  },
  21: {
    number: 21,
    name: "The World",
    archetype: "The Master of Global Integration & Completion",
    meaning: "Arcana 21 represents cosmic completion, global horizons, wholeness, international resonance, and master achievement.",
    positiveExpression: "Global vision, fulfilled, holistic thinker, accomplished, expansive communicator.",
    shadowExpression: "Fear of expanding beyond comfort, unfinished projects, feeling trapped in old loops.",
    careerGuidance: "Thrives in international relations, global commerce, environmental advocacy, publishing, and travel.",
    loveCompatibility: "High synergy with open-minded, worldly partners who love global adventures.",
    moneyChannel: "Wealth flows from international markets, digital scale, cross-border partnerships, and broad platforms.",
    spiritualLesson: "Celebrating completion while standing ready at the doorway of a vast new cycle.",
    chakraConnection: "All Chakras Integrated (Wholeness & Cosmic Unity)",
    dailyWisdom: "Celebrate your accomplishments today — you have reached a major milestone of growth.",
    reflectionQuestions: [
      "What major project or phase am I ready to bring to a satisfying completion?",
      "How can I expand my vision beyond my local comfort zone?",
      "What new global horizon or learning experience calls to me next?"
    ]
  },
  22: {
    number: 22,
    name: "The Fool",
    archetype: "The Infinite Explorer & Innocent Visionary",
    meaning: "Arcana 22 (or 0) embodies pure potential, unburdened trust, leaps of faith, fresh starts, and divine freedom.",
    positiveExpression: "Faithful, unburdened, joyful explorer, open-minded, courageous beginner.",
    shadowExpression: "Recklessness, naivety, lack of foresight, escaping responsibility.",
    careerGuidance: "Ideal for breakthrough startup innovation, adventure travel, experimental art, and trailblazing ventures.",
    loveCompatibility: "Pairs well with supportive, grounding partners who cherish their spontaneous spirit.",
    moneyChannel: "Abundance opens up through bold leaps into untried markets and trusting unproven ideas.",
    spiritualLesson: "Stepping off the cliff of expectation with absolute trust in the universe.",
    chakraConnection: "Crown & Sacral (Pure Potential & Joyful Adventure)",
    dailyWisdom: "Take a leap of faith today — the universe supports your fresh start.",
    reflectionQuestions: [
      "Where in my life am I being called to take a brave, unburdened leap of faith?",
      "Am I allowing fear of the unknown to hold back my spontaneous joy?",
      "How can I approach this new chapter with the curiosity of a beginner?"
    ]
  }
};

/**
 * Localized Arcana entry getter with full dictionary support
 */
export function getLocalizedArcanaEntry(arcanaNum: number, locale: string = 'en'): ArcanaEncyclopediaEntry {
  const masterEntry = MAJOR_ARCANA_DATABASE[arcanaNum] || MAJOR_ARCANA_DATABASE[1];
  return masterEntry;
}
