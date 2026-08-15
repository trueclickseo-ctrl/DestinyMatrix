import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const MARCH_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Being born on March 1 connects your personal journey to Arcana 1 (The Magician). Opening the month of March—the gateway of late-winter thaw and emerging spring vitality—March 1 endows you with an inventive spark, artistic eloquence, and the drive to launch original creative platforms.",
    vignetteTitle: "The Spring Awakening Pioneer: Pitching Sustainable Design Apps",
    vignetteScenario: "As early spring approaches, a March 1 software architect presents a visionary eco-tracking app. Their enthusiastic demonstration and clear technical roadmap convince venture partners to fund the initial launch.",
    birthArchetypeContent: "March 1 individuals carry the vibrant mental spark of Arcana 1 (The Magician) combined with Pisces fluid artistic intuition. You possess an instinct for sensing emerging trends, using articulate communication and creative imagination to turn raw ideas into profitable realities.",
    highFrequencyExpression: "Expressing constructive alignment, you excel at creative innovation, rapid skill acquisition, captivating presentation, and founding original digital platforms.",
    shadowChallenges: "Under shadow influence, March 1 can manifest as emotional restlessness, scattering energy across incomplete projects, or using charm to obscure operational details.",
    vocationAndFinance: "Thrives as a digital product founder, creative director, app architect, media producer, or venture catalyst. Wealth expands through monetizing original digital intellectual property.",
    reflectionQuestions: [
      "Am I focusing my creative spark on one high-impact launch or scattering it across too many ideas?",
      "How can I ground my visionary imagination into practical daily execution steps?",
      "What original project am I ready to introduce to the market this week?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 1 and how does it pair with Arcana 1?",
        answer: "March 1 falls under Pisces (Water sign). Pisces emotional depth and artistic imagination paired with The Magician's active initiation creates a visionary creative founder."
      },
      {
        question: "How does March 1 differ from January 1 and February 1?",
        answer: "January 1 carries Capricorn earth structure, February 1 carries Aquarius air innovation, while March 1 carries Pisces water intuition and early spring emergence."
      },
      {
        question: "What is the financial secret for March 1 birthdays?",
        answer: "Securing intellectual property rights for original digital platforms before public release."
      },
      {
        question: "Which Arcana complements March 1 best?",
        answer: "Arcana 19 (The Sun) amplifies March 1's creative joy and public visibility."
      }
    ],
    imageBrief: "Artistic illustration of a visionary figure holding a glowing wand above a thawing stream where early spring flowers bloom, color palette of emerald green, seafoam blue, and gold."
  },
  2: {
    snippetAnswer: "Being born on March 2 links your birth code to Arcana 2 (The High Priestess). Resting in early March, March 2 grants a quiet intuitive radar, profound empathetic perception, and an instinct for reading unspoken oceanic and human emotional currents.",
    vignetteTitle: "The Intuitive Marine Biologist: Reading Subtle Oceanic Tide Shifts",
    vignetteScenario: "Monitoring coastal waters, a March 2 marine biologist detects subtle temperature shifts before automated sensors register the change. Their early advisory protects local marine sanctuaries from environmental damage.",
    birthArchetypeContent: "March 2 individuals embody the sacred intuitive depth of Arcana 2 (The High Priestess) fused with Pisces oceanic empathy. You perceive hidden underlying motivations, holding space for quiet observation and trusting inner wisdom over noisy public opinions.",
    highFrequencyExpression: "In harmonious alignment, you demonstrate perceptive marine research skills, quiet psychological insight, discreet advisory work, and uncovering obscured oceanic patterns.",
    shadowChallenges: "When ungrounded, you may fall into social withdrawal, passive secrecy, emotional vulnerability to external noise, or suppressing authentic observations.",
    vocationAndFinance: "Performs brilliantly in oceanographic research, depth psychology, archivist work, confidential consulting, and marine conservation. Financial stability grows through specialized research contracts.",
    reflectionQuestions: [
      "Am I honoring my quiet intuitive hunches before taking major business or personal steps?",
      "Where in my life am I withholding clear communication out of fear of conflict?",
      "How can I create daily quiet time to listen to my inner wisdom?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 2?",
        answer: "March 2 is Pisces (Water sign), creating an alignment between Pisces' intuitive oceanic depth and The High Priestess's quiet inner wisdom."
      },
      {
        question: "How does March 2 differ from January 2 and February 2?",
        answer: "January 2 carries Capricorn grounding, February 2 carries double-2 Aquarius sensitivity, while March 2 carries Pisces water empathy and marine research focus."
      },
      {
        question: "What is the financial advice for March 2?",
        answer: "Monetize specialized confidential research and private advisory expertise."
      },
      {
        question: "Which Arcana complements March 2?",
        answer: "Arcana 18 (The Moon) deepens March 2's intuitive dream research and psychological insight."
      }
    ],
    imageBrief: "Mystical symbolist painting of a veiled figure sitting peacefully beside an ocean bay under a crescent moon, color palette of deep teal, seafoam, and pearl white."
  },
  3: {
    snippetAnswer: "Being born on March 3 connects your life vibration to Arcana 3 (The Empress). Resting in early March, March 3 bestows a fertile creative imagination, aesthetic grace, and a natural gift for cultivating botanical beauty, artistic projects, and thriving spaces.",
    vignetteTitle: "The Botanical Curator: Breeding Rare Spring Orchid Varieties",
    vignetteScenario: "Designing a public spring conservatory exhibit, a March 3 botanist curates a stunning orchid display. Their artistic eye for color harmony attracts thousands of visitors and wins international horticultural awards.",
    birthArchetypeContent: "March 3 individuals channel the fertile beauty of Arcana 3 (The Empress) through Pisces artistic imagination. You possess a natural talent for design, hospitality, and nurturing living plants and creative projects into vibrant maturity.",
    highFrequencyExpression: "In active light, you demonstrate floral design mastery, botanical conservation, environmental aesthetics, and cultivating warm community spaces.",
    shadowChallenges: "When out of balance, you may experience aesthetic vanity, possessive control over creative projects, or indulgence in luxury without discipline.",
    vocationAndFinance: "Thrives in botanical curation, greenhouse management, spatial aesthetic design, luxury brand curation, and floral artistry. Prosperity expands through horticultural enterprise.",
    reflectionQuestions: [
      "How can I bring more sensory richness and organic beauty into my living space?",
      "Am I supporting my collaborators' growth without trying to control their creative process?",
      "What artistic endeavor am I ready to manifest into the world today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 3?",
        answer: "March 3 is Pisces, infusing The Empress's classic creative fertility with deep artistic imagination and fluid grace."
      },
      {
        question: "How does March 3 differ from January 3 and February 3?",
        answer: "January 3 carries Capricorn structure, February 3 carries Aquarius style, while March 3 carries Pisces botanical artistry and fluid design."
      },
      {
        question: "What is the primary money engine for March 3?",
        answer: "Investing in high-end design, botanical conservation, luxury consumer goods, and hospitality."
      },
      {
        question: "Which Arcana complements March 3?",
        answer: "Arcana 4 (The Emperor) offers structural backing to hold Arcana 3's abundant creative flow."
      }
    ],
    imageBrief: "Lush botanical painting showing an elegant figure crowned with spring blossoms inside a sunlit glass conservatory, color palette of emerald green, champagne gold, and orchid pink."
  },
  4: {
    snippetAnswer: "Being born on March 4 links your life vibration to Arcana 4 (The Emperor). March 4 imparts a commanding executive capacity, practical discipline, and the ability to build enduring real-world institutions during early spring transition.",
    vignetteTitle: "The Civic Restoration Architect: Rebuilding Heritage Urban Centers",
    vignetteScenario: "Leading a city restoration project, a March 4 urban architect combines historic preservation with modern eco-engineering. Their clear governance and budgetary discipline deliver a revitalized civic square under budget.",
    birthArchetypeContent: "March 4 individuals combine the sovereign authority of Arcana 4 (The Emperor) with Pisces compassionate vision. You construct solid organizational structures that protect community heritage while fostering sustainable growth.",
    highFrequencyExpression: "Operating constructively, you demonstrate heritage urban planning skills, clear municipal governance, structural reliability, and building protective community frameworks.",
    shadowChallenges: "In shadow, you might exhibit stubborn resistance to urban modernization, micro-managing junior engineers, or cold emotional distance.",
    vocationAndFinance: "Excels as a municipal urban architect, historic restoration director, civil engineer, legal compliance officer, and infrastructure executive. Wealth builds through civic equity compounding.",
    reflectionQuestions: [
      "Am I leading with empowering clarity or imposing rigid control?",
      "Where in my organization or personal life can I create more efficient systems?",
      "What enduring structure am I building to serve future generations?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 4?",
        answer: "March 4 is Pisces, blending emotional empathy and artistic vision with The Emperor's pragmatic structural leadership."
      },
      {
        question: "How does March 4 differ from January 4 and February 4?",
        answer: "January 4 emphasizes Capricorn institutional law, February 4 emphasizes Aquarius tech reform, while March 4 emphasizes Pisces community restoration and civic infrastructure."
      },
      {
        question: "What is the key to career advancement for March 4?",
        answer: "Demonstrating operational reliability while executing complex community construction projects."
      },
      {
        question: "What shadow habit should March 4 watch for?",
        answer: "Becoming overly defensive when unexpected schedule changes occur."
      }
    ],
    imageBrief: "Commanding architectural graphic showing a dignified figure seated on a stone throne overlooking a historic city square in spring bloom, color palette of bronze, slate grey, and moss green."
  },
  5: {
    snippetAnswer: "Being born on March 5 connects your personal frequency to Arcana 5 (The Hierophant). Positioned in early March, March 5 grants an intellectual hunger for wisdom, visionary teaching talent, and an instinct for translating ancient sacred manuscripts into modern accessible lessons.",
    vignetteTitle: "The Manuscript Translator: Unlocking Ancient Wisdom Archives",
    vignetteScenario: "Translating a rare medieval philosophical text, a March 5 scholar reveals lost ethical frameworks. Their commentary bridges historical wisdom with modern ethical dilemmas, gaining acclaim across academic circles.",
    birthArchetypeContent: "March 5 individuals channel the master teacher frequency of Arcana 5 (The Hierophant) through Pisces philosophical depth. You respect fundamental spiritual and academic truths, using your eloquence to educate and elevate human understanding.",
    highFrequencyExpression: "In high vibrational alignment, you excel at ancient text translation, academic publishing, ethical philosophy, and inspiring educational leadership.",
    shadowChallenges: "Under shadow friction, you may slip into dogmatic academic elitism, preaching unlived theories, or rigid intellectual stubbornness.",
    vocationAndFinance: "Suited for ancient language translation, university chair positions, philosophical authorship, ethics committee leadership, and educational publishing. Revenue grows through scholarly licensing.",
    reflectionQuestions: [
      "Am I teaching from lived experience and uncompromised integrity?",
      "Where can I modernize my knowledge base to stay ahead of evolving academic trends?",
      "What core truth am I called to communicate to my community?"
    ],
    faqItems: [
      {
        question: "What zodiac sign governs March 5?",
        answer: "Pisces governs March 5, bringing deep spiritual intuition and philosophical empathy to The Hierophant's teaching mission."
      },
      {
        question: "How does March 5 differ from January 5 and February 5?",
        answer: "January 5 carries Capricorn discipline, February 5 carries Aquarius tech innovation, while March 5 carries Pisces philosophical depth and manuscript translation."
      },
      {
        question: "What is the primary financial path for March 5?",
        answer: "Monetizing educational publishing, translation rights, academic courses, and keynote lectures."
      },
      {
        question: "Which Arcana complements March 5?",
        answer: "Arcana 17 (The Star) amplifies March 5's inspirational teaching vision."
      }
    ],
    imageBrief: "Inspiring artwork of an enlightened scholar examining ancient illuminated scrolls in a quiet cathedral library, color palette of deep sapphire blue, gold, and parchment ivory."
  },
  6: {
    snippetAnswer: "Being born on March 6 links your birth vibration to Arcana 6 (The Lovers). Resting in early March, March 6 endows you with an elevated aesthetic sensitivity, relational charm, and a talent for guiding couples and creative partners through spring realignments.",
    vignetteTitle: "The Vernal Relationship Counselor: Guiding Couples into Spring Renewal",
    vignetteScenario: "Leading a relationship retreat in early spring, a March 6 therapist uses empathetic listening to help co-founders heal long-standing communication rifts, creating a renewed collaborative contract.",
    birthArchetypeContent: "March 6 individuals channel the relational harmony of Arcana 6 (The Lovers) with Pisces emotional depth. You seek deep authenticity in love, business, and art, refusing superficial compromises that betray your values.",
    highFrequencyExpression: "Expressing light frequency, you bring compassionate relationship counseling, emotional conflict resolution, artistic partnership harmony, and magnetic personal integrity.",
    shadowChallenges: "In shadow states, you might experience relationship codependency, difficulty choosing between competing options, or seeking approval at the expense of personal boundaries.",
    vocationAndFinance: "Excels as a relationship counselor, marital mediator, creative alliance manager, aesthetic curator, and conflict resolution specialist. Income expands through partnership advisory retains.",
    reflectionQuestions: [
      "Am I making choices based on my core internal values or seeking external validation?",
      "Where in my key relationships can I establish clearer, healthier boundaries?",
      "How can I bring greater artistic harmony into my everyday environment?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 6?",
        answer: "March 6 is Pisces, giving deep emotional empathy and artistic imagination to The Lovers' pursuit of harmony."
      },
      {
        question: "How does March 6 differ from January 6 and February 6?",
        answer: "January 6 carries Capricorn grounding, February 6 carries Aquarius social vision, while March 6 carries Pisces relational empathy and emotional healing."
      },
      {
        question: "What is the key decision-making rule for March 6?",
        answer: "Align your choices with your authentic heart values rather than over-analyzing public opinions."
      },
      {
        question: "Which careers suit March 6 best?",
        answer: "Relationship counseling, brand partnerships, fashion curation, and conflict resolution."
      }
    ],
    imageBrief: "Elegant artwork depicting two figures standing under a blossoming spring archway holding a golden balance, color palette of blush rose, champagne gold, and ocean teal."
  },
  7: {
    snippetAnswer: "Being born on March 7 connects your personal vibration to Arcana 7 (The Chariot). Positioned in early March, March 7 bestows intense determination, strategic focus, and a talent for guiding ocean vessels and complex maritime expeditions across challenging waters.",
    vignetteTitle: "The Ocean Racing Captain: Guiding Sailing Fleets Across Stormy Seas",
    vignetteScenario: "Captain of an offshore sailing crew, a March 7 navigator reads weather patterns flawlessly. Navigating through a sudden ocean gale, they steer the vessel to victory in an international regatta.",
    birthArchetypeContent: "March 7 individuals embody the forward momentum of Arcana 7 (The Chariot) fused with Pisces oceanic navigation. You combine competitive willpower with intuitive maritime rhythm, overcoming environmental challenges with steady focus.",
    highFrequencyExpression: "In active mastery, you demonstrate ocean racing navigation, decisive maritime leadership, mastering environmental variables, and driving teams to victorious finishes.",
    shadowChallenges: "When off track, you might suffer from aggressive driving habits, impatience with slow crew members, or risking physical exhaustion through continuous competitive pressure.",
    vocationAndFinance: "Ideal for ocean racing captains, maritime expedition leaders, naval logistics officers, offshore racing directors, and sports vessel operators. Financial growth follows competitive victories.",
    reflectionQuestions: [
      "Am I pacing my energy drive with necessary physical rest and recovery?",
      "How can I lead my team toward victory without sacrificing emotional empathy?",
      "What major project milestone am I committed to conquering this month?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 7?",
        answer: "March 7 is Pisces, infusing The Chariot's drive with oceanic intuition, maritime rhythm, and fluid adaptability."
      },
      {
        question: "How does March 7 differ from January 7 and February 7?",
        answer: "January 7 relies on Capricorn stamina, February 7 relies on Aquarius clean tech, while March 7 relies on Pisces maritime navigation and ocean expedition leadership."
      },
      {
        question: "What is the primary strength of March 7?",
        answer: "Your unshakeable ability to navigate through chaotic environmental storms to reach your destination."
      },
      {
        question: "How can March 7 avoid burnout?",
        answer: "Schedule mandatory quiet recovery breaks between major project sprints."
      }
    ],
    imageBrief: "Dynamic maritime illustration showing a majestic sailing vessel navigating stormy ocean waves under a starlit night sky, color palette of deep cobalt blue, silver, and gold."
  },
  8: {
    snippetAnswer: "Being born on March 8 links your birth vibration to Arcana 8 (Justice). Resting in early March, March 8 endows you with an acute sense of systemic cause-and-effect, legal integrity, objective balance, and human rights advocacy.",
    vignetteTitle: "The Human Rights Advocate: Auditing Global Labor Standards",
    vignetteScenario: "Investigating international manufacturing supply chains, a March 8 auditor uncovers labor violations. Their rigorous report enforces fair wage standards, securing compensation for thousands of workers.",
    birthArchetypeContent: "March 8 individuals channel the objective balance of Arcana 8 (Justice) through Pisces compassionate human advocacy. You possess a sharp intellect that cuts through bias, standing up for human dignity, fair contracts, and systemic truth.",
    highFrequencyExpression: "Constructive light alignment brings international labor auditing, human rights advocacy, transparent legal mediation, and rectifying institutional imbalances.",
    shadowChallenges: "Shadow patterns show up as harsh perfectionist criticism, score-keeping in personal relationships, cold legalism, or neglecting self-care.",
    vocationAndFinance: "Suited for global labor auditors, human rights attorneys, international policy compliance leads, fair-trade advocates, and contract mediators. Wealth accumulates through ethical advocacy.",
    reflectionQuestions: [
      "Am I applying objective fairness to myself as well as to others?",
      "Where in my life am I experiencing the direct consequences of past decisions?",
      "What business contract or personal boundary needs clear alignment today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 8?",
        answer: "March 8 is Pisces, bringing universal compassion and human rights empathy to Arcana 8's legal precision."
      },
      {
        question: "How does March 8 differ from January 8 and February 8?",
        answer: "January 8 focuses on Capricorn institutional law, February 8 focuses on Aquarius bio-ethics, while March 8 focuses on Pisces human rights and global labor standards."
      },
      {
        question: "What is the financial rule for March 8?",
        answer: "Ensure all business contracts are completely transparent and legally binding."
      },
      {
        question: "Which Arcana complements March 8?",
        answer: "Arcana 11 (Strength) provides compassionate resilience to balance Justice's strict objectivity."
      }
    ],
    imageBrief: "Symmetrical modern art of a dignified figure holding glowing scales and a clear crystal sword over a blue globe, color palette of deep crimson, steel grey, and white marble."
  },
  9: {
    snippetAnswer: "Being born on March 9 connects your life path to Arcana 9 (The Hermit). Approaching mid-March, March 9 bestows deep intellectual autonomy, solitary research talent, and an instinct for coastal storm tracking and meteorological analysis.",
    vignetteTitle: "The Coastal Meteorologist: Tracking Extreme Ocean Weather",
    vignetteScenario: "Stationed at a remote coastal observatory, a March 9 meteorologist analyzes satellite data. Predicting a sudden storm surge hours before automated models, their warning saves coastal shipping fleets.",
    birthArchetypeContent: "March 9 individuals carry the guiding light of Arcana 9 (The Hermit) into the realm of oceanography and weather science. You require periodic quiet solitude to process complex data and illuminate critical insights for community safety.",
    highFrequencyExpression: "Operating in high frequency, you excel in coastal meteorological research, satellite storm forecasting, solitary scientific writing, and sharing life-saving environmental findings.",
    shadowChallenges: "In shadow, you may experience cynical isolation, withholding research insights out of distrust, or brooding over past scientific mistakes.",
    vocationAndFinance: "Ideal for coastal meteorologists, marine climatologists, atmospheric data scientists, environmental authors, and solitary researchers. Financial rewards follow niche scientific expertise.",
    reflectionQuestions: [
      "Am I making regular quiet time for deep reflection away from digital distractions?",
      "How can I share my accumulated wisdom without feeling overwhelmed by social demands?",
      "What specialized domain am I called to master deeply?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 9?",
        answer: "March 9 is Pisces, blending oceanic intuition and deep emotional sensitivity with The Hermit's contemplative search for truth."
      },
      {
        question: "Why does March 9 need solitude?",
        answer: "Solitude allows March 9 to clear mental noise and receive their most brilliant creative and analytical breakthroughs."
      },
      {
        question: "Which careers suit March 9 best?",
        answer: "Meteorology, oceanography, data science, technical writing, and academic research."
      },
      {
        question: "How can March 9 prevent emotional isolation?",
        answer: "Schedule regular intentional check-ins with trusted peers who share your research passions."
      }
    ],
    imageBrief: "Mystical digital painting of a solitary lighthouse keeper holding a glowing star lantern atop a stormy cliff, color palette of midnight navy, gold, and ocean foam white."
  },
  10: {
    snippetAnswer: "Being born on March 10 links your birth frequency to Arcana 10 (Wheel of Fortune). Closing the first decade of March, March 10 grants an intuitive rhythm for agricultural futures, seasonal market timing, and effortless adaptability.",
    vignetteTitle: "The Commodities Forecast Trader: Timing Agricultural Crop Cycles",
    vignetteScenario: "Analyzing global spring weather patterns, a March 10 commodities trader anticipates a shift in grain harvests. By hedging futures contracts early, they secure major returns for their investment fund.",
    birthArchetypeContent: "March 10 individuals embody the dynamic rhythm of Arcana 10 (Wheel of Fortune) fused with Pisces intuitive foresight. You possess an instinct for sensing economic and seasonal turning points before they manifest in public markets.",
    highFrequencyExpression: "In active light, you demonstrate agricultural commodities trading foresight, seasonal market cycle timing, financial flexibility, and riding economic waves successfully.",
    shadowChallenges: "When out of balance, you may succumb to financial speculation, anxiety over short-term market fluctuations, or failing to establish solid administrative backbones.",
    vocationAndFinance: "Excels in agricultural futures trading, grain market analysis, seasonal commodities investment, macro economic forecasting, and fund management. Wealth grows through timing market cycles.",
    reflectionQuestions: [
      "Am I flowing adaptively with recent changes or resisting necessary growth?",
      "How can I use current high momentum to build lasting security for the future?",
      "What repeating cycle am I ready to evolve beyond today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 10?",
        answer: "March 10 is Pisces, giving deep intuitive foresight and fluid adaptability to Wheel of Fortune's cyclical timing."
      },
      {
        question: "How does March 10 relate to Arcana 1 (The Magician)?",
        answer: "10 reduces to 1 (1+0=1), blending Arcana 10's cycle timing with Arcana 1's active creative initiation."
      },
      {
        question: "What is the financial superpower of March 10?",
        answer: "An innate sense for seasonal market timing—knowing precisely when to enter and exit commodity cycles."
      },
      {
        question: "What shadow trap should March 10 avoid?",
        answer: "Relying solely on speculative luck without building stable administrative structures."
      }
    ],
    imageBrief: "Symbolic graphic of a luminous golden wheel turning above a spring landscape with blossoming fields under a starry galaxy, color palette of gold, deep green, and bronze."
  },
  11: {
    snippetAnswer: "Being born on March 11 activates Master Number 11 frequency under Arcana 11 (Strength). Approaching mid-March, March 11 endows you with extraordinary inner resilience, passionate vitality, and the power to lead wildlife conservation and apex predator rehabilitation.",
    vignetteTitle: "The Wildlife Conservationist: Rehabilitating Apex Predators",
    vignetteScenario: "Leading a wilderness sanctuary team, a March 11 conservationist uses calm physical composure to rescue an injured snow leopard. Their patient rehabilitation returns the majestic predator to the wild.",
    birthArchetypeContent: "March 11 individuals carry the master energy of Arcana 11 (Strength) with Pisces empathetic bond with nature. You possess an immense reservoir of physical, mental, and intuitive stamina, mastering wild situations through gentleness rather than force.",
    highFrequencyExpression: "Demonstrating master alignment, you excel at apex predator conservation, quiet animal communication, physical rehabilitation, and leading wilderness sanctuaries.",
    shadowChallenges: "Under shadow pressure, you might experience repressed frustration, over-working to compensate for team gaps, or internal anxiety spiking physical tension.",
    vocationAndFinance: "Ideal for wildlife sanctuary directors, apex predator conservationists, veterinary surgeons, wilderness rehabilitation leads, and physical therapists. Prosperity expands through long-term sanctuary grants.",
    reflectionQuestions: [
      "Where can I apply quiet inner strength rather than trying to force an outcome?",
      "Am I honoring my physical energy reserves with adequate rest and recovery?",
      "What intense challenge am I ready to transform into creative victory today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 11?",
        answer: "March 11 is Pisces, giving deep empathetic intuition and natural connection to wildlife to Arcana 11's intense vitality."
      },
      {
        question: "Is March 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, amplifying spiritual intuition, charisma, and inner endurance."
      },
      {
        question: "Which careers suit March 11 best?",
        answer: "Wildlife conservation, physical therapy, crisis management, sports leadership, and executive coaching."
      },
      {
        question: "How can March 11 maintain high performance?",
        answer: "Balance intense physical or mental effort with regular nervous system regulation practices."
      }
    ],
    imageBrief: "Inspiring artwork of a calm figure wearing a crown of spring leaves gently taming a golden leopard in a lush forest, color palette of warm gold, forest green, and white."
  },
  12: {
    snippetAnswer: "Being born on March 12 links your life vibration to Arcana 12 (The Hanged Man). Moving through mid-March, March 12 grants a unique capacity for surrealist artistic expression, deep sacrifice for high ideals, and viewing problems upside down to discover hidden solutions.",
    vignetteTitle: "The Surrealist Sculptor: Inverting Gravitational Forms",
    vignetteScenario: "Creating a monumental bronze sculpture for a city gallery, a March 12 artist suspends heavy metallic waves from the ceiling. The upside-down installation captivates art critics worldwide.",
    birthArchetypeContent: "March 12 individuals embody the visionary surrender of Arcana 12 (The Hanged Man) fused with Pisces artistic imagination. You do not view the world through rigid conventional lenses, excelling at yielding short-term ego gains for lasting artistic truth.",
    highFrequencyExpression: "In high creative light, you bring inverted perspective sculpture, surrealist visual installations, sacrificial artistic dedication, and transformative perspective shifts.",
    shadowChallenges: "Shadow states manifest as feeling victimized by art patrons, lingering in creative indecision, martyr complex, or stalling out of fear of public critique.",
    vocationAndFinance: "Suited for surrealist sculptors, gallery installation artists, film perspective editors, non-profit creative directors, and contemplative authors. Financial success comes through unique gallery art sales.",
    reflectionQuestions: [
      "What current challenge requires me to change my perspective rather than force action?",
      "Am I sacrificing my well-being out of a false sense of obligation?",
      "What alternative angle can I explore to solve a long-standing problem today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 12?",
        answer: "March 12 is Pisces, blending deep fluid imagination with The Hanged Man's unconventional artistic insight."
      },
      {
        question: "What is the core spiritual lesson for March 12?",
        answer: "Learning that surrendering rigid ego control opens the path to genuine creative breakthroughs."
      },
      {
        question: "Which careers suit March 12 best?",
        answer: "Surrealist art, film editing, non-profit leadership, photography, and holistic healing."
      },
      {
        question: "How can March 12 avoid the martyr trap?",
        answer: "Set clear healthy boundaries and ensure your sacrifices serve an authentic creative purpose."
      }
    ],
    imageBrief: "Mystical symbolist painting of a figure suspended gracefully beneath a glowing halo tree overlooking a serene spring ocean bay, color palette of lavender, gold, and ocean blue."
  },
  13: {
    snippetAnswer: "Being born on March 13 connects your personal path to Arcana 13 (Transformation / Death). Resting in mid-March, March 13 endows you with a powerful ability to release obsolete systems, lead waste recovery innovations, and facilitate profound rebirth.",
    vignetteTitle: "The Waste Recovery Pioneer: Converting Ocean Plastics Into Clean Fuel",
    vignetteScenario: "Faced with accumulating industrial waste, a March 13 engineer invents a chemical recycling process that converts ocean plastics into high-efficiency clean fuel, building a multi-million-dollar green enterprise.",
    birthArchetypeContent: "March 13 individuals carry the potent rebirth frequency of Arcana 13 (Transformation). You are not intimidated by ending outdated cycles; you recognize that clearing away dead matter is essential for vibrant spring growth.",
    highFrequencyExpression: "Operating in high light, you excel in ocean plastic upcycling, industrial waste recovery engineering, environmental rebirth models, and systematic recycling innovation.",
    shadowChallenges: "When uncentered, you may fear letting go of outdated legacy projects, experience destructive mood swings, or resist necessary operational transitions.",
    vocationAndFinance: "Ideal for plastic recovery engineers, circular economy founders, environmental remediation directors, upcycling executives, and waste-to-energy pioneers. Wealth expands through circular economy equity.",
    reflectionQuestions: [
      "What obsolete habit or project am I ready to release to create space for fresh growth?",
      "How can I support my team through major transitions with calm reassurance?",
      "Where in my life is a door closing so a far greater one can open?"
    ],
    faqItems: [
      {
        question: "Is March 13 an unlucky birthday in numerology?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), a powerful symbol of rebirth, renewal, and positive environmental evolution."
      },
      {
        question: "What zodiac sign is March 13?",
        answer: "March 13 is Pisces, giving intuitive depth and ecological consciousness to Arcana 13's transformative power."
      },
      {
        question: "What is the financial key for March 13?",
        answer: "Acquiring undervalued or waste assets, recycling them into high-value clean resources."
      },
      {
        question: "Which Arcana complements March 13?",
        answer: "Arcana 19 (The Sun) brings radiant joy and light to illuminate Arcana 13's rebirth process."
      }
    ],
    imageBrief: "Striking artwork showing a golden phoenix rising from ocean spray into a starlit spring sky, color palette of deep emerald green, gold, and ocean night blue."
  },
  14: {
    snippetAnswer: "Being born on March 14 links your life vibration to Arcana 14 (Temperance). Falling on Pi Day (3.14), March 14 bestows a rare gift for mathematical balance, algorithmic precision, emotional moderation, and blending complex data into harmonious systems.",
    vignetteTitle: "The Pi Day Algorithmic Analyst: Balancing Complex Data Equations",
    vignetteScenario: "Celebrating Pi Day, a March 14 mathematician publishes an elegant algorithmic formula that balances load distribution across global server networks, preventing data crashes during peak traffic.",
    birthArchetypeContent: "March 14 individuals embody the harmonious synthesis of Arcana 14 (Temperance). Born on Pi Day (3.14), you possess an innate mind for mathematical proportion, emotional self-regulation, and bringing order out of chaotic data.",
    highFrequencyExpression: "In harmonious mastery, you demonstrate Pi Day algorithmic design, server load balancing, mathematical moderation, and synthesising chaotic data into elegant equations.",
    shadowChallenges: "Shadow patterns show up as avoiding necessary operational confrontations, passive intellectual apathy, or over-analyzing simple life choices.",
    vocationAndFinance: "Excels as a Pi Day algorithmic mathematician, server load engineer, quantitative data analyst, mathematical systems designer, and balance consultant. Wealth builds through algorithmic tech patents.",
    reflectionQuestions: [
      "Where in my life can I practice greater patience and emotional moderation?",
      "Am I avoiding an important conversation under the guise of keeping the peace?",
      "What complex data problem can I solve with mathematical elegance today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 14?",
        answer: "March 14 is Pisces, blending deep intuitive fluid grace with Arcana 14's mathematical and emotional precision."
      },
      {
        question: "What significance does Pi Day (3.14) hold for a March 14 birthday?",
        answer: "It highlights your innate numerical affinity, mathematical talent, and gift for bringing sacred proportion into systems."
      },
      {
        question: "Which careers suit March 14 best?",
        answer: "Quantitative data science, algorithmic financial modeling, music production, diplomacy, and mathematics."
      },
      {
        question: "How can March 14 maintain emotional balance?",
        answer: "Practice daily moderation in work and rest, avoiding extreme analytical stress spikes."
      }
    ],
    imageBrief: "Harmonious painting of a winged figure pouring liquid light between two golden vessels inscribed with mathematical glyphs under a starry sky, color palette of lavender, rose gold, and deep blue."
  },
  15: {
    snippetAnswer: "Being born on March 15 connects your birth code to Arcana 15 (The Devil). Approaching the Spring Equinox threshold, March 15 grants charismatic influence, sharp investigative insight, and the power to expose monopolistic supply controls and liberate organizations.",
    vignetteTitle: "The Corporate Whistleblower: Exposing Hidden Monopolistic Controls",
    vignetteScenario: "Auditing a international trade conglomerate, a March 15 investigator uncovers hidden price-fixing agreements. Their courageous disclosure breaks up the monopoly, restoring fair market competition.",
    birthArchetypeContent: "March 15 individuals carry the magnetic intensity of Arcana 15 (The Devil). You possess a sharp eye for material leverage, hidden power dynamics, and financial dependencies, using your influence to liberate rather than control.",
    highFrequencyExpression: "Operating in ethical courage, you excel at antitrust investigation, unmasking corporate price-fixing, breaking up market monopolies, and restoring transparent economic competition.",
    shadowChallenges: "Under shadow influence, you might be tempted by insider leverage, manipulative corporate control, or getting tangled in secretive financial games.",
    vocationAndFinance: "Performs brilliantly as an antitrust corporate whistleblower, cartel investigator, forensic auditor, competition law attorney, and market integrity lead. Prosperity follows high-stakes antitrust disclosures.",
    reflectionQuestions: [
      "Am I using my magnetic influence to empower others or to gain subtle control?",
      "What material attachment or toxic habit am I ready to release today?",
      "How can I bring honesty to a hidden corporate or personal shadow?"
    ],
    faqItems: [
      {
        question: "Does Arcana 15 mean a March 15 birthday is negative?",
        answer: "Not at all. In Destiny Matrix, Arcana 15 represents deep psychological insight, charisma, and the power to break free from material traps."
      },
      {
        question: "What zodiac sign is March 15?",
        answer: "March 15 is Pisces, giving deep emotional empathy and intuitive perception to Arcana 15's intense magnetism."
      },
      {
        question: "What is the financial key for March 15?",
        answer: "Mastering material resources without letting wealth or power compromise your personal integrity."
      },
      {
        question: "Which Arcana complements March 15?",
        answer: "Arcana 14 (Temperance) provides calming moderation to balance Arcana 15's intense drive."
      }
    ],
    imageBrief: "Dramatic symbolist artwork showing a figure holding a golden torch that illuminates a shadowy hall, breaking iron chains with light, color palette of rich burgundy, gold, and obsidian."
  },
  16: {
    snippetAnswer: "Being born on March 16 links your life code to Arcana 16 (The Tower). Positioned near mid-March, March 16 bestows a fearless capacity to dismantle structural flaws, detect volcanic and seismic risks, and rebuild unshakeable foundations after sudden shifts.",
    vignetteTitle: "The Volcanologist: Warning Communities Before Seismic Eruptions",
    vignetteScenario: "Analyzing seismic sensors near an active volcano, a March 16 volcanologist detects subtle magma shifts. Issuing an early evacuation warning, they save thousands of lives before the eruption occurs.",
    birthArchetypeContent: "March 16 individuals embody the awakening lightning of Arcana 16 (The Tower). You possess an instinct for detecting false assumptions and fragile structures, using truth to break down dangerous illusions so enduring safety can stand.",
    highFrequencyExpression: "In active light alignment, you excel at volcanological seismic prediction, early eruption evacuation warnings, structural flaw audits, and building indestructible post-crisis foundations.",
    shadowChallenges: "When ungrounded, you might create unnecessary panic during minor tremors, lash out destructive criticism, or resist necessary evacuation protocols.",
    vocationAndFinance: "Performs outstandingly as a volcanologist, seismic risk scientist, early warning system architect, geological crisis advisor, and structural auditor. Income grows through specialized hazard advisory contracts.",
    reflectionQuestions: [
      "What fragile assumption or outdated system am I ready to dismantle in my business or life?",
      "How can I deliver difficult truths with constructive compassion rather than destruction?",
      "What rock-solid foundation am I building to withstand future storms?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 16?",
        answer: "March 16 is Pisces, infusing The Tower's awakening spark with deep emotional empathy and intuitive awareness."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is liberating you from false limitations so you build real strength."
      },
      {
        question: "Which careers suit March 16 best?",
        answer: "Volcanology, structural engineering, crisis management, risk auditing, and transformational coaching."
      },
      {
        question: "How can March 16 navigate unexpected change?",
        answer: "Focus on what is truly permanent—your inner core values—and rebuild adaptively from there."
      }
    ],
    imageBrief: "Striking graphic of a golden tower struck by a bolt of starlight, revealing a crystal foundation beneath, color palette of electric blue, gold, and deep charcoal."
  },
  17: {
    snippetAnswer: "Being born on March 17 connects your spiritual vibration to Arcana 17 (The Star). Falling on St. Patrick's Day, March 17 grants inspirational vision, artistic originality, unwavering hope, and a talent for celebrating celestial mythology and green eco-innovations.",
    vignetteTitle: "The Eco-Mythology Artist: Celebrating Celestial Green Traditions",
    vignetteScenario: "On St. Patrick's Day, a March 17 artist unveils a monumental mural celebrating celestial green mythologies and clean energy futures. The artwork inspires a citywide green canopy planting initiative.",
    birthArchetypeContent: "March 17 individuals channel the celestial guidance of Arcana 17 (The Star). Born on St. Patrick's Day, you possess an innate gift for inspiring hope, celebrating nature's green rebirth, and guiding communities toward a brighter future.",
    highFrequencyExpression: "Expressing radiant light, you bring St. Patrick's Day eco-mural artistry, celestial folklore celebration, environmental hope, and inspiring public green initiatives.",
    shadowChallenges: "In shadow, you may fall into unrealistic daydreaming without practical planting action, feeling detached from daily reality, or losing hope during winter cycles.",
    vocationAndFinance: "Thrives as a St. Patrick's Day mural artist, eco-mythology illustrator, urban canopy director, celestial folklorist, and public art coordinator. Prosperity grows through public mural commissions.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to manifest my long-term visionary goals?",
      "How can I share my authentic creative gifts to inspire hope in my community?",
      "What aspirational dream am I called to dedicate my energy to today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 17?",
        answer: "March 17 is Pisces, creating a deep emotional alignment between Pisces' artistic imagination and Arcana 17's celestial starlight."
      },
      {
        question: "What significance does St. Patrick's Day hold for a March 17 birthday?",
        answer: "It reinforces your innate mission to celebrate nature's green renewal, inspire hope, and illuminate creative mythology."
      },
      {
        question: "Which careers suit March 17 best?",
        answer: "Environmental art, clean technology, media broadcasting, non-profit leadership, and motivational speaking."
      },
      {
        question: "How can March 17 ground big dreams?",
        answer: "Partner with practical execution specialists who help translate visions into concrete steps."
      }
    ],
    imageBrief: "Breathtaking artwork depicting a graceful figure pouring emerald starlight from two golden urns onto lush spring hills, color palette of emerald green, gold, and celestial white."
  },
  18: {
    snippetAnswer: "Being born on March 18 links your birth vibration to Arcana 18 (The Moon). Resting near the end of Pisces season, March 18 endows you with a rich subconscious imagination, lucid dream intuition, and the power to navigate psychological mysteries.",
    vignetteTitle: "The Lucid Dream Researcher: Mapping Subconscious Sleep States",
    vignetteScenario: "Directing a sleep research laboratory, a March 18 neuroscientist conducts groundbreaking studies on lucid dreaming. Their published findings offer new therapeutic protocols for post-traumatic healing.",
    birthArchetypeContent: "March 18 individuals carry the profound depth of Arcana 18 (The Moon) at the peak of Pisces water intuition. You navigate the realm of dreams, psychological healing, and subconscious symbols with master creative artistry.",
    highFrequencyExpression: "In active light, you demonstrate lucid dream research, subconscious mapping, neuro-sleep lab direction, trauma healing protocols, and rich symbolic authorship.",
    shadowChallenges: "Under shadow stress, you might succumb to irrational nocturnal anxieties, sleep deprivation confusion, escaping into ungrounded fantasies, or self-deception.",
    vocationAndFinance: "Ideal for neuroscience sleep lab directors, lucid dream researchers, REM theta therapists, psychological fiction authors, and dream analysts. Wealth grows through specialized sleep research patents.",
    reflectionQuestions: [
      "Am I listening to my intuitive dreams or allowing baseless fears to dictate choices?",
      "How can I channel my rich emotional imagination into creative projects?",
      "What subconscious fear am I ready to face with conscious understanding today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 18?",
        answer: "March 18 is Pisces at its peak intuitive water frequency, granting extraordinary dream lucidity and emotional perception."
      },
      {
        question: "How does Arcana 18 influence March 18 birthdays?",
        answer: "It grants deep imaginative creativity, dream research talent, and an innate understanding of human subconscious psychology."
      },
      {
        question: "Which careers fit March 18 best?",
        answer: "Neuroscience sleep research, depth psychology, filmmaking, fiction writing, and holistic healing."
      },
      {
        question: "How can March 18 clear mental fog?",
        answer: "Engage in daily grounding walks in nature and maintain a written dream journal."
      }
    ],
    imageBrief: "Atmospheric symbolist painting showing a full silver moon reflecting in a calm ocean path flanked by two stone towers, color palette of silver, deep teal, and twilight navy."
  },
  19: {
    snippetAnswer: "Being born on March 19 connects your core frequency to Arcana 19 (The Sun). Resting right before the Spring Equinox, March 19 bestows radiant warmth, joyful vitality, solar engineering talent, and an instinct for spreading optimism everywhere you go.",
    vignetteTitle: "The Solar Thermal Engineer: Installing High-Efficiency Desert Energy Arrays",
    vignetteScenario: "Designing a massive solar thermal grid in a desert region, a March 19 engineer brings clean renewable power to remote rural towns, earning national energy innovation honors.",
    birthArchetypeContent: "March 19 individuals channel the triumphant clarity of Arcana 19 (The Sun). You radiate warmth, childlike joy, and generosity, inspiring confidence in others and bringing solar innovation into full public light.",
    highFrequencyExpression: "Operating in radiant light, you bring desert solar thermal grid engineering, renewable power infrastructure, energetic warmth, and illuminating rural communities.",
    shadowChallenges: "In shadow, you may suffer from solar thermal burnout, demanding constant applause for public projects, or hiding exhaustion behind cheerful facades.",
    vocationAndFinance: "Excels as a solar thermal grid engineer, desert solar array director, renewable utility executive, solar technology developer, and green energy chairman. Prosperity follows major utility contracts.",
    reflectionQuestions: [
      "Am I letting my authentic joy shine without needing external validation?",
      "How can I use my success to illuminate opportunities for young people?",
      "What creative project am I ready to bring into full public light today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 19?",
        answer: "March 19 sits on the Pisces-Aries threshold, blending Pisces emotional depth with The Sun's radiant solar vitality."
      },
      {
        question: "How does March 19 differ from January 19 and February 19?",
        answer: "January 19 carries Capricorn earth, February 19 carries Pisces water, while March 19 carries Equinox solar thermal engineering and radiant energy innovation."
      },
      {
        question: "What is the financial superpower of March 19?",
        answer: "A magnetic presence that attracts clean energy investments and public visibility."
      },
      {
        question: "Which Arcana complements March 19?",
        answer: "Arcana 21 (The World) expands March 19's radiant joy onto a global stage."
      }
    ],
    imageBrief: "Radiant tarot-style artwork of a triumphant figure riding a white horse beneath a brilliant golden sun with sunflowers blooming below, color palette of warm gold, amber, and sky blue."
  },
  20: {
    snippetAnswer: "Being born on March 20 links your birth vibration to Arcana 20 (Judgement). Positioned precisely at the Spring Equinox threshold, March 20 endows you with a high spiritual calling, profound intuitive awakenings, and the ability to orchestrate major personal and community rebirths.",
    vignetteTitle: "The Equinox Harmonizer: Unifying International Cultural Choirs",
    vignetteScenario: "On the exact day of the Spring Equinox, a March 20 musical director conducts an international vocal assembly. Their inspiring arrangement bridges cultural traditions, earning a global broadcast standing ovation.",
    birthArchetypeContent: "March 20 individuals embody the awakening call of Arcana 20 (Judgement) sitting right at the astronomical Equinox transition. You possess an instinct for discerning life purpose, recognizing that past cycles prepare you for higher evolutionary leaps.",
    highFrequencyExpression: "In high spiritual alignment, you excel at Spring Equinox choral conducting, international vocal harmony, awakening cultural lineages, and inspiring global broadcasts.",
    shadowChallenges: "Shadow patterns include harsh self-judgment over past mistakes, lingering resentment toward family, or delaying your artistic calling.",
    vocationAndFinance: "Ideal for Spring Equinox choral directors, international choir conductors, vocal arrangement masters, cultural broadcast producers, and heritage audio directors. Financial rewards come from global broadcasts.",
    reflectionQuestions: [
      "What past experience am I called to forgive so I can step into my true purpose?",
      "Am I listening to my quiet inner calling or suppressing it out of fear?",
      "How can I bring healing and understanding to my family lineage today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 20?",
        answer: "March 20 sits on the Pisces-Aries cusp (Spring Equinox), blending Pisces intuitive depth with Aries fiery initiation energy."
      },
      {
        question: "What significance does the Spring Equinox hold for a March 20 birthday?",
        answer: "It marks the precise balance of day and night, amplifying Arcana 20's theme of spiritual rebirth, awakening, and fresh life cycles."
      },
      {
        question: "Which careers suit March 20 best?",
        answer: "Musical conducting, documentary media, family therapy, spiritual coaching, and historical preservation."
      },
      {
        question: "How can March 20 overcome self-judgment?",
        answer: "Practice self-forgiveness and view past mistakes as necessary stepping stones for spiritual wisdom."
      }
    ],
    imageBrief: "Inspiring symbolist painting showing an angel sounding a golden horn at sunrise on the Spring Equinox as flowers burst into bloom, color palette of golden yellow, lavender, and spring green."
  },
  21: {
    snippetAnswer: "Being born on March 21 connects your life path to Arcana 21 (The World). Opening Aries season right after the Equinox, March 21 grants a global perspective, a talent for completing major long-term cycles, and launching borderless international trade ventures.",
    vignetteTitle: "The Global Trade Pioneer: Launching International Eco-Marketplaces",
    vignetteScenario: "Launching a borderless digital trade platform on March 21, an Aries entrepreneur connects artisanal eco-producers across four continents, creating a thriving fair-trade global supply chain.",
    birthArchetypeContent: "March 21 individuals channel the holistic completion of Arcana 21 (The World) with Aries fiery initiation. You are a citizen of the world who thinks on a global scale, excelling at bringing complex international ventures to successful completion.",
    highFrequencyExpression: "In active global mastery, you bring borderless fair-trade platform founding, international eco-marketplaces, cross-continental supply chains, and Aries pioneer market expansion.",
    shadowChallenges: "Under shadow stress, you may delay launching out of global perfectionism, feel ungrounded without a home base, or struggle to finalize complex trade contracts.",
    vocationAndFinance: "Excels as an international eco-trade platform founder, cross-border commerce director, global supply chain pioneer, trade envoy, and international market expansion lead. Wealth accelerates through international equity.",
    reflectionQuestions: [
      "What major multi-year project am I ready to bring to full completion?",
      "How can I expand my vision to encompass a broader international market?",
      "Where in my life can I celebrate the full journey I have completed so far?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 21?",
        answer: "March 21 is the opening day of Aries (Fire sign), infusing Arcana 21's global completion with bold pioneer energy."
      },
      {
        question: "How does March 21 differ from January 21 and February 21?",
        answer: "January 21 carries Aquarius air networks, February 21 carries Pisces water empathy, while March 21 carries Aries fire initiation and global market leadership."
      },
      {
        question: "What is the financial engine for March 21?",
        answer: "Building international digital trade platforms and cross-border commercial alliances."
      },
      {
        question: "Which Arcana complements March 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new global cycles."
      }
    ],
    imageBrief: "Regal symbolist illustration of a figure dancing within a wreath of golden laurel leaves holding twin wands over a globe, color palette of crimson, gold, and vibrant cobalt blue."
  },
  22: {
    snippetAnswer: "Being born on March 22 connects your birth code to Arcana 22 (The Fool / 0) and Master Number 22. Opening early Aries season, March 22 endows you with a rare capacity for visionary wilderness climbs, leaps of faith, and building monumental pioneering ventures.",
    vignetteTitle: "The Wilderness Expedition Pioneer: Leading Mountain Climbs",
    vignetteScenario: "Leading an unmapped mountain expedition in early spring, a March 22 climber guides their team across high glaciers. Reaching an unclimbed peak, they map a new wilderness trail for international mountaineers.",
    birthArchetypeContent: "March 22 individuals carry Arcana 22 (The Fool) with Master 22 master-builder capacity and Aries fiery courage. You embrace life with open wonder, unafraid to take bold leaps into uncharted territory.",
    highFrequencyExpression: "In master light frequency, you excel at pioneering unmapped wilderness routes, high-glacier mountaineering leadership, fearless leaps of faith, and building master-scale expedition ventures.",
    shadowChallenges: "In shadow, you might make impulsive physical leaps without safety ropes, abandon teams mid-expedition out of boredom, or flee routine responsibilities.",
    vocationAndFinance: "Ideal for alpine expedition leaders, mountaineering pioneers, wilderness adventure directors, master scale adventure founders, and extreme terrain guides. Prosperity grows through high-end expedition ventures.",
    reflectionQuestions: [
      "What bold leap of faith am I called to take to expand my personal freedom?",
      "Am I balancing my adventurous spirit with practical ground strategy?",
      "Where in my life am I ready to release past baggage and start completely fresh?"
    ],
    faqItems: [
      {
        question: "Why is March 22 a special date in numerology?",
        answer: "March 22 carries Master Number 22 (Master Builder) paired with Arcana 22 (The Fool) and Aries fire energy, granting capacity for monumental leaps into new frontiers."
      },
      {
        question: "What zodiac sign is March 22?",
        answer: "March 22 is Aries (Fire sign), adding courageous pioneer initiative to The Fool's jump into the unknown."
      },
      {
        question: "Which careers fit March 22 best?",
        answer: "Wilderness expedition guiding, startup incubation, eco-adventure travel, and pioneering original ventures."
      },
      {
        question: "How can March 22 avoid reckless mistakes?",
        answer: "Ground your bold leaps with thorough safety audits and trusted execution partners."
      }
    ],
    imageBrief: "Inspiring painting of an adventurous figure standing at a high mountain cliff at sunrise with a small dog, looking out at a vast spring valley, color palette of gold, crimson, and Sky blue."
  },
  23: {
    snippetAnswer: "Being born on March 23 connects your personal frequency to Arcana 5 (The Hierophant), derived from compound digits 2 (Intuition) and 3 (Expression). Resting in early Aries season, March 23 blends fiery public speaking with visionary leadership manuals.",
    vignetteTitle: "The Visionary Speaker: Authoring Pioneering Leadership Manuals",
    vignetteScenario: "Keynote speaker at a global leadership summit, a March 23 author presents a groundbreaking manual on ethical innovation. Their passionate speech inspires executives to overhaul corporate governance.",
    birthArchetypeContent: "March 23 individuals express Arcana 5 through Aries fiery drive and compound 2+3 communicative flair. Unlike quieter dates, your teaching style is energetic, bold, and focused on empowering people to act with integrity.",
    highFrequencyExpression: "In active public expression, you demonstrate energetic keynote leadership, publishing pioneering ethical manuals, captivating audience motivation, and transforming corporate governance.",
    shadowChallenges: "Under shadow stress, you might drift into aggressive public lecturing, changing principles for audience applause, or over-promising manual results.",
    vocationAndFinance: "Thrives as a keynote summit speaker, executive leadership author, corporate governance mentor, publishing founder, and masterclass director. Revenue grows through speaking fees and book sales.",
    reflectionQuestions: [
      "Am I sharing my authentic truth with clarity and empowering respect?",
      "How can I balance my passionate communication with active listening?",
      "What pioneering leadership manual am I called to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 23?",
        answer: "March 23 is Aries (Fire sign), infusing The Hierophant's teaching mission with bold charisma and passionate leadership."
      },
      {
        question: "How does March 23 differ from March 5?",
        answer: "March 5 carries Pisces water philosophical depth, while March 23 carries Aries fire drive, public speaking, and compound 2+3 charisma."
      },
      {
        question: "What is the financial engine for March 23?",
        answer: "Monetizing keynote speaking engagements, executive leadership books, and digital masterclasses."
      },
      {
        question: "Which Arcana complements March 23?",
        answer: "Arcana 19 (The Sun) amplifies March 23's public presence and keynote charisma."
      }
    ],
    imageBrief: "Vibrant illustration of a dynamic speaker standing at a podium bathed in warm golden light before an attentive audience, color palette of crimson, gold, and royal violet."
  },
  24: {
    snippetAnswer: "Being born on March 24 connects your personal vibration to Arcana 6 (The Lovers), derived from compound digits 2 (Diplomacy) and 4 (Structural Order). Positioned in early Aries season, March 24 endows you with a talent for co-production alliances and creative brand contracts.",
    vignetteTitle: "The Creative Co-Production Director: Structuring Media Alliances",
    vignetteScenario: "Structuring an international film co-production deal, a March 24 executive bridges two major studios. By establishing clear profit-sharing rules (4) and artistic freedom (6), they produce an award-winning feature.",
    birthArchetypeContent: "March 24 individuals channel Arcana 6 through Aries active drive and compound 2+4 structural precision. You build solid commercial contracts that allow creative partnerships and business alliances to flourish long-term.",
    highFrequencyExpression: "In active structural harmony, you bring film co-production negotiation, media alliance contracts, profit-sharing equity design, and balancing creative artistic freedom.",
    shadowChallenges: "Shadow patterns show up as overly cautious legal delay, letting rigid contracts stifle creative spark, or hesitation during studio partnership deadlocks.",
    vocationAndFinance: "Ideal for film co-production executives, entertainment contract attorneys, studio alliance directors, media deal strategists, and brand partnership heads. Wealth expands through co-production royalties.",
    reflectionQuestions: [
      "Am I building relationships on clear mutual agreements or unspoken expectations?",
      "How can I combine emotional warmth with solid practical boundaries?",
      "What collaborative project am I ready to formalize into a long-term contract?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 24?",
        answer: "March 24 is Aries, bringing passionate initiative and competitive drive to Arcana 6's partnership focus."
      },
      {
        question: "How does March 24 differ from March 6?",
        answer: "March 6 carries Pisces water emotional counseling, while March 24 carries Aries fire drive, media co-productions, and compound 2+4 contract structure."
      },
      {
        question: "What is the financial key for March 24?",
        answer: "Structuring legally sound co-production and brand partnership agreements."
      },
      {
        question: "Which Arcana complements March 24?",
        answer: "Arcana 4 (The Emperor) reinforces March 24's demand for structural clarity in alliances."
      }
    ],
    imageBrief: "Warm graphic depicting two hands signing a golden contract over a architectural design model, color palette of crimson, gold, and slate grey."
  },
  25: {
    snippetAnswer: "Being born on March 25 links your life frequency to Arcana 7 (The Chariot), derived from compound digits 2 (Sensitivity) and 5 (Adaptability). Positioned in early Aries season, March 25 endows you with a fiery drive to pilot disaster relief flights to remote regions.",
    vignetteTitle: "The Relief Pilot: Flying Medical Supplies to Remote Island Communities",
    vignetteScenario: "When a tropical storm cuts off remote islands, a March 25 disaster relief pilot flies emergency medical teams through high winds, dropping critical supplies directly to isolated hospitals.",
    birthArchetypeContent: "March 25 individuals channel Arcana 7 through Aries fiery courage and compound 2+5 adaptability. You drive toward ambitious targets with high speed, overcoming physical obstacles to deliver vital aid.",
    highFrequencyExpression: "In active courageous drive, you excel at emergency relief flight piloting, storm zone medical transport, rapid air logistics navigation, and overcoming extreme weather barriers.",
    shadowChallenges: "Under shadow stress, you might take reckless flight risks in bad weather, suffer from severe exhaustion, or react angrily to ground delays.",
    vocationAndFinance: "Performs brilliantly as an emergency relief pilot, medical airlift director, humanitarian aviation captain, disaster transport coordinator, and search-and-rescue pilot. Financial rewards grow through specialized flight contracts.",
    reflectionQuestions: [
      "Am I channeling my intense drive toward a purpose that truly honors my emotional values?",
      "How can I protect my personal energy while serving high humanitarian goals?",
      "What obstacle am I called to navigate with compassionate determination today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 25?",
        answer: "March 25 is Aries (Fire sign), giving intense courageous drive and rapid aviation speed to Arcana 7."
      },
      {
        question: "How does March 25 differ from March 7?",
        answer: "March 7 relies on Pisces ocean sailing navigation, while March 25 relies on Aries aviation, high-speed disaster relief, and emergency transport."
      },
      {
        question: "What is the health key for March 25?",
        answer: "Schedule strict physical downtime between high-intensity relief flights to avoid nervous burnout."
      },
      {
        question: "Which Arcana complements March 25?",
        answer: "Arcana 11 (Strength) provides physical stamina to support Arcana 7's rapid execution."
      }
    ],
    imageBrief: "Dynamic aviation illustration showing a emergency aircraft flying through golden sunrise clouds over remote islands, color palette of crimson, gold, and sky blue."
  },
  26: {
    snippetAnswer: "Being born on March 26 connects your birth code to Arcana 8 (Justice), derived from compound digits 2 (Intuition) and 6 (Ethics). Positioned in early Aries season, March 26 grants a razor-sharp intellect for bio-ethics auditing and gene therapy trials.",
    vignetteTitle: "The Genetic Ethics Officer: Auditing Gene Therapy Trial Compliance",
    vignetteScenario: "Reviewing a breakthrough CRISPR trial, a March 26 bio-ethics officer enforces strict patient safety protocols. Their audit ensures international compliance, paving the way for safe commercial gene therapies.",
    birthArchetypeContent: "March 26 individuals channel Arcana 8 through Aries intellectual courage and compound 2+6 ethical awareness. You possess an instinct for detecting bias in scientific data, advocating for genetic safety, clear regulations, and ethical accountability.",
    highFrequencyExpression: "In active legal precision, you demonstrate CRISPR trial ethics auditing, genetic therapy compliance, objective bio-tech regulation, and protecting patient safety.",
    shadowChallenges: "When off balance, you may slip into rigid perfectionism in research labs, hyper-critical analysis of colleagues, or emotional aloofness during clinical trials.",
    vocationAndFinance: "Ideal for genetic ethics officers, CRISPR trial auditors, biotech regulatory lawyers, clinical trial compliance leads, and bio-policy strategists. Wealth grows through high-level biotech compliance retains.",
    reflectionQuestions: [
      "Am I applying objective fairness to myself as well as to others?",
      "Where in my life am I experiencing the direct consequences of past decisions?",
      "What business contract or personal boundary needs clear alignment today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 26?",
        answer: "March 26 is Aries, bringing courageous intellectual independence to Arcana 8's legal precision."
      },
      {
        question: "How does March 26 differ from March 8?",
        answer: "March 8 focuses on Pisces human rights labor standards, while March 26 focuses on Aries biotech gene therapy ethics and trial compliance."
      },
      {
        question: "What is the financial rule for March 26?",
        answer: "Maintain absolute regulatory compliance in all biotech and healthcare investments."
      },
      {
        question: "Which Arcana complements March 26?",
        answer: "Arcana 11 (Strength) provides compassionate resilience to balance Justice's strict objectivity."
      }
    ],
    imageBrief: "Symmetrical modern artwork showing a golden DNA strand flanked by crystal scales and a sword, color palette of deep crimson, steel grey, and white marble."
  },
  27: {
    snippetAnswer: "Being born on March 27 links your personal vibration to Arcana 9 (The Hermit), derived from compound digits 2 (Intuition) and 7 (Analytical Focus). Positioned in early Aries season, March 27 endows you with a talent for high-altitude mountain astronomy and exoplanet discovery.",
    vignetteTitle: "The Mountain Observatory Astronomer: Discovering Exoplanet Systems",
    vignetteScenario: "Working in isolation at a high-altitude mountain observatory, a March 27 astronomer processes deep-space telescopic data. They discover a Earth-sized exoplanet in a habitable star zone.",
    birthArchetypeContent: "March 27 individuals carry Arcana 9 into the realm of high-altitude astrophysics and solitary observation. You thrive in high quiet environments, combining Aries pioneer curiosity with deep analytical focus to uncover cosmic truths.",
    highFrequencyExpression: "In active light, you demonstrate high-altitude observatory astronomy, exoplanet deep-space discovery, solitary astrophysical data processing, and illuminating celestial truths.",
    shadowChallenges: "Shadow states show up as cold intellectual detachment, impatience with non-scientific colleagues, or withdrawing into isolated mountain observatories out of social frustration.",
    vocationAndFinance: "Excels as a high-altitude astronomer, deep-space astrophysicist, exoplanet research director, space data scientist, and observatory leader. Income expands through space agency research grants.",
    reflectionQuestions: [
      "Am I using my quiet solitude to recharge my spirit or to isolate from loved ones?",
      "How can I translate my deep inner insights into accessible wisdom for others?",
      "What quiet creative pursuit am I called to dedicate myself to today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 27?",
        answer: "March 27 is Aries, blending bold pioneer curiosity with The Hermit's contemplative search for truth."
      },
      {
        question: "How does March 27 differ from March 9?",
        answer: "March 9 carries Pisces ocean storm tracking, while March 27 carries Aries high-altitude mountain astronomy and exoplanet research."
      },
      {
        question: "Why does March 27 thrive in mountain environments?",
        answer: "High-altitude clear air allows March 27 to focus without urban digital and social interference."
      },
      {
        question: "Which Arcana complements March 27?",
        answer: "Arcana 17 (The Star) deepens March 27's affinity for celestial astronomy and starlight research."
      }
    ],
    imageBrief: "Mystical portrait of an astronomer with a telescope under a brilliant starry galaxy atop a mountain peak, color palette of deep midnight blue, gold, and starlight white."
  },
  28: {
    snippetAnswer: "Being born on March 28 connects your life path to Arcana 10 (Wheel of Fortune), derived from compound digits 2 (Strategy) and 8 (Executive Power). Positioned in early Aries season, March 28 grants an intuitive rhythm for funding solar grid and climate tech ventures.",
    vignetteTitle: "The Solar Grid Venture Capitalist: Funding Next-Gen Renewable Grids",
    vignetteScenario: "Anticipating a major shift in clean energy policy, a March 28 venture capitalist directs seed capital into solar grid storage startups. The fund captures record Q1 returns as global adoption surges.",
    birthArchetypeContent: "March 28 individuals embody the fluid momentum of Arcana 10 (Wheel of Fortune) fused with Aries bold enterprise drive and compound 2+8 executive power. You possess a knack for funding emerging climate technologies at key macroeconomic inflection points.",
    highFrequencyExpression: "In active financial light, you bring solar grid venture capital funding, renewable storage seed investment, macroeconomic cycle timing, and scaling clean tech startups.",
    shadowChallenges: "When uncentered, you may engage in speculative clean-tech gambling, become anxious during temporary market dips, or over-leverage venture funds.",
    vocationAndFinance: "Ideal for solar grid venture capitalists, renewable energy seed investors, climate tech fund managers, clean tech directors, and green venture partners. Wealth accelerates through early equity stakes.",
    reflectionQuestions: [
      "Am I trusting life's natural economic cycles or trying to force immediate financial timing?",
      "How can I use current high momentum to fund enduring eco-friendly ventures?",
      "What recurring financial pattern am I ready to master today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 28?",
        answer: "March 28 is Aries (Fire sign), giving bold pioneer drive and executive ambition to Arcana 10's cyclical financial timing."
      },
      {
        question: "How does March 28 differ from March 10?",
        answer: "March 10 carries Pisces agricultural commodities trading, while March 28 carries Aries solar grid venture capital and compound 2+8 executive power."
      },
      {
        question: "What is the financial rule for March 28?",
        answer: "Invest early in scalable clean energy infrastructure before public market surges."
      },
      {
        question: "Which Arcana complements March 28?",
        answer: "Arcana 21 (The World) expands March 28's venture fund onto a global international stage."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over solar grid arrays under a starlit sky, color palette of gold, crimson, and deep cyan."
  },
  29: {
    snippetAnswer: "Being born on March 29 activates the rare Master Number 11 frequency under Arcana 11 (Strength), derived from compound digits 2 (Sensitivity) and 9 (Universal Compassion). Positioned in early Aries season, March 29 endows you with extraordinary physical stamina and emergency trauma surgery mastery.",
    vignetteTitle: "The Trauma Surgery Chief: Orchestrating High-Intensity Operating Rooms",
    vignetteScenario: "Chief of trauma surgery during a major municipal emergency, a March 29 surgeon maintains absolute composure. Leading a multi-disciplinary team through back-to-back operations, they save dozens of critical patients.",
    birthArchetypeContent: "March 29 individuals embody Master 11 potential under Arcana 11 (Strength) with Aries fiery courage and compound 2+9 humanitarian empathy. You possess intense stamina, performing with steady hands and clear mind under life-or-death pressure.",
    highFrequencyExpression: "Operating in master light, you excel in emergency trauma surgery orchestration, back-to-back surgical crisis leadership, steady physical composure under pressure, and saving critical lives.",
    shadowChallenges: "Under extreme stress, you may suffer severe nervous exhaustion, sudden anger bursts at surgical nurses, or physical collapse from refusing rest.",
    vocationAndFinance: "Performs with mastery as a chief of trauma surgery, emergency surgical director, acute care medical director, trauma team captain, and surgical professor. Financial rewards follow high-level surgical leadership.",
    reflectionQuestions: [
      "How can I protect my physical and emotional stamina while managing high-stress emergencies?",
      "Am I allowing Master 11 inspiration to move through me without over-taxing my nervous system?",
      "What intense crisis am I called to master with calm fortitude today?"
    ],
    faqItems: [
      {
        question: "Why is March 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and heroic emergency leadership."
      },
      {
        question: "What zodiac sign is March 29?",
        answer: "March 29 is Aries (Fire sign), adding courageous action and calm surgical focus to Arcana 11's intense physical strength."
      },
      {
        question: "How does March 29 differ from March 11?",
        answer: "March 11 carries Pisces wildlife conservation, while March 29 carries Aries emergency trauma surgery and high-intensity medical leadership."
      },
      {
        question: "What is the health key for March 29?",
        answer: "Regular nervous system regulation, grounding downtime, and strict sleep hygiene between emergency shifts."
      }
    ],
    imageBrief: "Inspiring artwork of a calm figure in surgical garments gently taming a golden lion under a halo of starlight, color palette of medical teal, gold, and pure white."
  },
  30: {
    snippetAnswer: "Being born on March 30 connects your personal frequency to Arcana 3 (The Empress), derived from compound digits 3 (Creative Expression) and 0 (Universal Potential). Resting late in March, March 30 bestows abundant creative fertility, agricultural innovation, and growing thriving enterprises.",
    vignetteTitle: "The Vertical Farming Pioneer: Scaling Organic Urban Agriculture",
    vignetteScenario: "A March 30 agritech founder transforms abandoned industrial warehouses into thriving vertical hydroponic farms. Their innovative model supplies fresh organic produce to local city groceries year-round.",
    birthArchetypeContent: "March 30 individuals channel the fertile majesty of Arcana 3 (The Empress) with Aries fiery enthusiasm. You possess an instinct for growth, whether cultivating organic food systems, nurturing artistic ventures, or scaling consumer lifestyle brands.",
    highFrequencyExpression: "In active fertile light, you demonstrate vertical hydroponic farming innovation, urban agritech scaling, organic crop enterprise growth, and commercial food abundance.",
    shadowChallenges: "In shadow, you may experience possessive financial control over farms, over-spending on greenhouse technology, or impatience when crops mature slowly.",
    vocationAndFinance: "Ideal for vertical agritech founders, urban hydroponic entrepreneurs, organic agricultural CEOs, sustainable food supply heads, and greenhouse innovation directors. Wealth expands through commercial agritech equity.",
    reflectionQuestions: [
      "How can I bring more natural beauty and sustainable growth into my living environment?",
      "Am I allowing my team the freedom to grow without micro-managing their work?",
      "What fertile enterprise am I ready to cultivate and harvest this season?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 30?",
        answer: "March 30 is Aries (Fire sign), bringing passionate drive and pioneering spirit to The Empress's creative fertility."
      },
      {
        question: "How does March 30 differ from January 3 and February 3?",
        answer: "January 3 carries Capricorn structure, February 3 carries Aquarius style, while March 30 carries Aries fire drive and agritech innovation."
      },
      {
        question: "What is the primary money engine for March 30?",
        answer: "Investing in sustainable agriculture, organic consumer products, real estate, and lifestyle design."
      },
      {
        question: "Which Arcana complements March 30?",
        answer: "Arcana 4 (The Emperor) provides structural stability to support Arcana 3's fertile expansion."
      }
    ],
    imageBrief: "Rich botanical painting showing a regal figure crowned with flowers surrounded by lush vertical hydroponic crops and golden sunlight, color palette of emerald green, golden yellow, and warm terra cotta."
  },
  31: {
    snippetAnswer: "Being born on March 31 connects your life path to Arcana 4 (The Emperor), derived from compound digits 3 (Creativity) and 1 (Initiation). Closing the month of March at the Q1 financial milestone, March 31 endows you with formidable executive leadership, structural discipline, and institutional governance.",
    vignetteTitle: "The Turnaround CEO: Restructuring Q1 Operations for Maximum Efficiency",
    vignetteScenario: "Stepping into a struggling tech firm at the close of Q1, a March 31 executive overhauls operational workflows. By establishing transparent financial metrics and clear accountability, they return the company to profit within two quarters.",
    birthArchetypeContent: "March 31 individuals embody the sovereign authority of Arcana 4 (The Emperor) combined with compound 3+1 creative leadership. You excel at taking chaotic situations, establishing clear rules, and building resilient corporate institutions.",
    highFrequencyExpression: "In active executive mastery, you bring Q1 corporate turnaround leadership, operational workflow restructuring, financial governance clarity, and restoring profitability.",
    shadowChallenges: "Under shadow stress, you might resort to severe corporate austerity layoffs, stubborn refusal to listen to vice presidents, or cold micromanagement.",
    vocationAndFinance: "Thrives as a turnaround Chief Executive Officer, corporate restructuring director, Q1 financial governance chairman, operational audit head, and corporate recovery executive. Wealth accumulates through corporate turnaround equity.",
    reflectionQuestions: [
      "Am I leading with empowering clarity or imposing rigid control?",
      "Where in my organization can I streamline systems to support long-term growth?",
      "What enduring financial foundation am I establishing for the future?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is March 31?",
        answer: "March 31 is Aries, adding bold pioneer initiative and competitive fire to The Emperor's executive authority."
      },
      {
        question: "How does March 31 differ from January 4, February 4, and March 4?",
        answer: "March 31 carries Aries fire energy, compound 3+1 creative initiation, and Q1 executive financial milestone focus."
      },
      {
        question: "What is the financial superpower of March 31?",
        answer: "Rigorous corporate governance, Q1 budget optimization, and long-term equity compounding."
      },
      {
        question: "Which Arcana complements March 31?",
        answer: "Arcana 8 (Justice) reinforces March 31's legal compliance and financial accuracy."
      }
    ],
    imageBrief: "Commanding artwork showing a dignified leader seated on a golden stone throne overlooking a prosperous modern metropolis at sunrise, color palette of crimson, gold, and slate grey."
  }
};

export function getMarchProfile(day: number): BirthdayProfileData {
  const custom = MARCH_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `March ${day}`;
  const slug = `march-${day}`;

  const phaseText = day <= 10 ? 'early March spring emergence' : day <= 20 ? 'mid-March Spring Equinox activation phase' : 'late-March Aries fire surge';
  const seasonalPhrase = `early-spring renewal and emerging vitality during the ${phaseText} of March`;
  const seasonalContext = `Early-spring transition and emerging vitality mark the ${phaseText} of March.`;
  const dayVibrationNote = `${formattedDate} combines ${seasonalPhrase} with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 29 : day - 1;
  const nextDay = day === 31 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'February 29' : `March ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 29 ? "Leap cycle integration" : "Prior day energy focus",
      bestFocus: "Integrating earlier momentum",
      keyContrast: `Focuses on Arcana ${prevArcana} foundations before stepping into Day ${day}.`
    },
    {
      dateLabel: formattedDate,
      arcanaNum: primaryArcanaNum,
      arcanaName: primaryArcana.name,
      coreTheme: custom?.vignetteTitle || `${primaryArcana.name} activation`,
      bestFocus: "Current birth date vibration mastery",
      keyContrast: "Your core date code.",
      isCurrentDay: true
    },
    {
      dateLabel: day === 31 ? 'April 1' : `March ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: "Subsequent integration phase",
      bestFocus: "Expanding into next day's growth",
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} momentum.`
    }
  ];

  return {
    slug,
    month: 'March',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of early-spring March focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
    vignetteTitle: custom?.vignetteTitle || `The ${formattedDate} Catalyst: Navigating ${primaryArcana.name} Energy`,
    vignetteScenario: custom?.vignetteScenario || `In a key moment of decision, someone born on ${formattedDate} steps forward to apply the ${primaryArcana.archetype.toLowerCase()} lessons of Arcana ${primaryArcanaNum}, turning a routine challenge into a major breakthrough.`,
    birthArchetypeContent: custom?.birthArchetypeContent || `Individuals born on ${formattedDate} embody the core qualities of Arcana ${primaryArcanaNum} (${primaryArcana.name}). You possess a natural drive to master your environment, apply structured discipline, and express your authentic talents.`,
    comparisonTable,
    highFrequencyExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenges: custom?.shadowChallenges || primaryArcana.shadowExpression,
    vocationAndFinance: custom?.vocationAndFinance || `${primaryArcana.careerGuidance} ${primaryArcana.moneyChannel}`,
    reflectionQuestions: custom?.reflectionQuestions || [
      `How can I align with the ${phaseText} of March to support my goals?`,
      `In what ways does ${primaryArcana.name} encourage me to express ${primaryArcana.archetype.toLowerCase()} today?`,
      `What specific practice will help me anchor constructive high frequency in my daily routine?`
    ],
    faqItems: custom?.faqItems || [
      {
        question: `What zodiac sign is ${formattedDate}?`,
        answer: day <= 20 ? `${formattedDate} falls under Pisces (Water sign), bringing deep intuition, empathy, and artistic vision.` : `${formattedDate} falls under Aries (Fire sign), bringing bold pioneer initiative, courage, and action.`
      },
      {
        question: `What Arcana governs ${formattedDate}?`,
        answer: `${formattedDate} is governed by Arcana ${primaryArcanaNum} (${primaryArcana.name}).`
      },
      {
        question: `What is the financial secret for ${formattedDate}?`,
        answer: `Aligning your work with Arcana ${primaryArcanaNum}'s strengths unlocks consistent financial prosperity.`
      },
      {
        question: `How can I balance shadow challenges for ${formattedDate}?`,
        answer: `Maintain self-awareness and practice regular reflection to transform shadow tendencies into constructive growth.`
      }
    ],
    imageBrief: custom?.imageBrief || `Artistic depiction of Arcana ${primaryArcanaNum} (${primaryArcana.name}) featuring symbolic imagery, gold highlights, and a deep violet background.`,
    internalLinks: [
      {
        label: `Arcana ${primaryArcanaNum} (${primaryArcana.name}) Encyclopedia Guide`,
        href: `/destiny-matrix/arcana/${primaryArcanaNum}-${primaryArcana.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}/`,
        reason: "Deepen your understanding of your primary birth archetype."
      },
      {
        label: "22 Major Arcana Directory",
        href: "/destiny-matrix/arcana/",
        reason: "Explore all 22 Destiny Matrix archetypes."
      },
      {
        label: "Destiny Matrix Calculator",
        href: "/",
        reason: "Calculate your complete birth matrix with 7 Chakra tables."
      }
    ],
    // Backwards compatibility
    seasonalContext,
    dayVibrationNote,
    constructiveExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenge: custom?.shadowChallenges || primaryArcana.shadowExpression,
    careerGuidance: primaryArcana.careerGuidance,
    moneyChannel: primaryArcana.moneyChannel
  };
}
