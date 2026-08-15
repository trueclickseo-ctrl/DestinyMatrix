import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

// Complete 31-day custom curated data for January ensuring 0% sentence overlap across same-Arcana dates
export const JANUARY_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Being born on January 1 connects your personal journey directly to Arcana 1 (The Magician). As the first day of the calendar year, January 1 endows you with an instinctive drive to pioneer fresh starts, launch original projects, and channel mental intent into tangible real-world success.",
    vignetteTitle: "The New Year Pioneer: Pitching Bold Visions Before Others Hesitate",
    vignetteScenario: "Imagine a Monday morning strategic meeting where team members are hesitant to step outside established routines. A January 1 individual speaks up first, presenting a clear, articulate blueprint for a brand-new initiative. Their unshakeable confidence in their own creative capacity inspires the entire room to embrace a fresh direction.",
    birthArchetypeContent: "Born at the very threshold of January, January 1 individuals embody the pure initiation frequency of Arcana 1 (The Magician). You possess an innate refusal to wait for permission or external validation. Where others see unmapped chaos, you see a blank canvas awaiting your decisive leadership and intellectual sharpness.",
    highFrequencyExpression: "Operating at your constructive high frequency, you manifest complex ideas with speed and precision. You combine verbal eloquence, strategic focus, and independent drive, turning abstract possibilities into profitable enterprises.",
    shadowChallenges: "In shadow, January 1 energy can manifest as impatience with slower collaborators, a tendency to start multiple projects without finishing them, or an arrogant impulse to force outcomes through sheer willpower.",
    vocationAndFinance: "You thrive as an independent founder, product architect, executive consultant, or public speaker. Financial abundance opens up when you monetize original intellectual property and launch borderless digital platforms.",
    reflectionQuestions: [
      "What new initiative am I holding back from launching due to unnecessary self-doubt?",
      "How can I channel my decisive drive into inspiring collaborators rather than overwhelming them?",
      "Which active project requires my focused execution to reach full completion this week?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 1 and how does it pair with Arcana 1?",
        answer: "January 1 falls under Capricorn (Earth sign). Paired with Arcana 1's airy/solar mental spark, this combination balances pragmatic discipline with brilliant creative initiation."
      },
      {
        question: "Is 1 a lucky number for a January 1 birthday in numerology?",
        answer: "Yes. Number 1 represents primary cause, leadership, and independence. It reinforces your natural ability to pioneer original paths."
      },
      {
        question: "What Arcana is closest in energy to January 1?",
        answer: "Arcana 7 (The Chariot) shares January 1's goal-oriented momentum, while Arcana 4 (The Emperor) shares its structural authority."
      },
      {
        question: "What is the primary financial secret for January 1 birthdays?",
        answer: "Your financial key is owning your intellectual assets and securing equity in early-stage ventures rather than working for fixed salaries."
      }
    ],
    imageBrief: "Minimalist Tarot-inspired digital art depicting a visionary figure holding a glowing golden wand at sunrise over a snowy mountain ridge, color palette of deep amethyst, gold, and frost white."
  },
  2: {
    snippetAnswer: "Being born on January 2 links your life path to Arcana 2 (The High Priestess). Positioned at the opening of January, January 2 bestows a profound intuitive intelligence, silent observational power, and a natural ability to read unspoken environmental dynamics.",
    vignetteTitle: "The Quiet Strategist: Reading Hidden Nuances in High-Stakes Settings",
    vignetteScenario: "During a tense corporate negotiation, while others argue loudly over superficial numbers, a January 2 individual remains quietly attentive. By picking up on subtle facial expressions and tone shifts, they suggest a subtle compromise at the exact right moment that unlocks a million-dollar agreement.",
    birthArchetypeContent: "January 2 individuals carry the reflective wisdom of Arcana 2 (The High Priestess). Rather than forcing events through aggressive action, you excel at holding space, cultivating deep inner knowing, and timing your interventions with surgical perfection.",
    highFrequencyExpression: "In high frequency, you act as a trusted confidant, intuitive analyst, and diplomatic mediator. Your calm presence acts as a stabilizer in chaotic situations, earning respect through understated mastery.",
    shadowChallenges: "When expressed in shadow, January 2 can lead to secretiveness, emotional detachment, passive-aggressive withdrawal, or trusting external opinions over your own inner guidance.",
    vocationAndFinance: "Ideal vocations include strategic analyst, corporate mediator, psychologist, archivist, and financial researcher. Prosperity flows when you leverage confidential market intelligence and private advisory roles.",
    reflectionQuestions: [
      "Am I honoring my quiet intuitive hunches before taking major business or personal steps?",
      "In what area of my life am I withholding clear communication out of fear of conflict?",
      "How can I create daily silence to listen to my inner wisdom?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 2 and how does it influence Arcana 2?",
        answer: "January 2 is a Capricorn date. Earthy Capricorn grounding gives practical structure to The High Priestess's mystical intuition."
      },
      {
        question: "How does January 2 differ from January 1 in Destiny Matrix?",
        answer: "While January 1 focuses on outward masculine initiation (Arcana 1), January 2 focuses on inward receptive wisdom (Arcana 2)."
      },
      {
        question: "What is the best career environment for a January 2 birthday?",
        answer: "Environments that reward research, private consulting, strategic analysis, and confidential advisory work."
      },
      {
        question: "What is the shadow trap to avoid for January 2?",
        answer: "Avoid retreating into passive isolation or keeping secrets that create unnecessary distrust in relationships."
      }
    ],
    imageBrief: "Atmospheric illustration of a serene figure veiled in silver robes standing between two columns under a crescent moon, color palette of indigo, silver, and deep midnight navy."
  },
  3: {
    snippetAnswer: "Being born on January 3 connects your core energy to Arcana 3 (The Empress). Early in January, January 3 brings an abundant, creative, and nurturing frequency, endowing you with a natural flair for design, hospitality, and growing thriving enterprises.",
    vignetteTitle: "The Abundance Catalyst: Transforming Bare Concepts Into Blooming Ecosystems",
    vignetteScenario: "Given a modest budget and a plain office space, a January 3 founder transforms the environment into a vibrant, welcoming hub within weeks. Their innate aesthetic sense and warm hospitality turn a struggling team into an enthusiastic, highly productive family.",
    birthArchetypeContent: "January 3 individuals channel the maternal and creative majesty of Arcana 3 (The Empress). You possess an instinctual understanding of growth cycles, whether cultivating artistic projects, nurturing family life, or scaling consumer brands.",
    highFrequencyExpression: "At high frequency, you radiate generosity, aesthetic elegance, and material comfort. You build environments where people feel supported to produce their finest work.",
    shadowChallenges: "In shadow, Arcana 3 can manifest as possessive control, over-indulgence in comfort, emotional manipulation through guilt, or perfectionist vanity.",
    vocationAndFinance: "You excel as a creative director, luxury brand founder, interior designer, landscape architect, or venture cultivator. Financial growth expands through beauty, consumer products, and real estate aesthetics.",
    reflectionQuestions: [
      "Where can I introduce more beauty and sensory comfort into my daily workspace?",
      "Am I allowing my team or loved ones the freedom to grow without micro-managing them?",
      "What creative project am I ready to birth into the physical world?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 3?",
        answer: "January 3 is in Capricorn. Capricorn's practical discipline ensures Empress creative projects achieve lasting commercial viability."
      },
      {
        question: "What number energy governs January 3?",
        answer: "Number 3, the number of creative synthesis, self-expression, and material expansion."
      },
      {
        question: "What is the money activation code for January 3?",
        answer: "Investing in high-quality design, premium branding, and creating welcoming customer experiences."
      },
      {
        question: "Which Arcana complements January 3 best?",
        answer: "Arcana 4 (The Emperor) provides structural backing to Arcana 3's fertile creative flow."
      }
    ],
    imageBrief: "Rich botanical digital painting showing an elegant figure crowned with stars seated in a lush garden filled with wheat sheaves, color palette of emerald green, gold, and warm terracotta."
  },
  4: {
    snippetAnswer: "Being born on January 4 links your personal birth code to Arcana 4 (The Emperor). January 4 imparts a commanding executive presence, unshakeable discipline, and an instinct for building enduring institutional foundations.",
    vignetteTitle: "The Master Architect: Rebuilding Stability During Organizational Turmoil",
    vignetteScenario: "When a sudden market shift throws an organization into disarray, a January 4 leader steps up with calm authority. They re-organize operational workflows, re-establish clear budgets, and provide team members with a rock-solid roadmap that restores profitability.",
    birthArchetypeContent: "January 4 individuals embody the sovereign governance of Arcana 4 (The Emperor). You respect order, legal boundaries, and long-term planning. You are built to carry heavy responsibilities and protect vital assets.",
    highFrequencyExpression: "In high frequency, you are a protective, fair, and highly effective leader who creates stability, enforces high standards, and mentors future executives.",
    shadowChallenges: "Shadow expressions include rigid authoritarianism, stubborn unwillingness to compromise, micro-management, and suppressing vulnerability behind a wall of cold detachment.",
    vocationAndFinance: "Ideal roles include Chief Operating Officer, construction director, corporate lawyer, institutional manager, and financial auditor. Wealth accumulates through real estate holdings and equity compounding.",
    reflectionQuestions: [
      "Where am I enforcing rigid control when flexible adaptation would serve better?",
      "How can I express strong leadership while remaining approachable to my team?",
      "What long-term asset am I building for future generations?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 4?",
        answer: "January 4 is a Capricorn birth date, doubling down on structure, ambition, and institutional mastery."
      },
      {
        question: "How does January 4 differ from January 3?",
        answer: "January 3 focuses on creative fertility (The Empress), while January 4 focuses on structural governance (The Emperor)."
      },
      {
        question: "What shadow trap should January 4 watch out for?",
        answer: "Becoming overly defensive or stubborn when faced with necessary organizational changes."
      }
    ],
    imageBrief: "Regal architectural graphic showing a dignified figure seated on a stone throne adorned with ram heads overlooking a structured castle, color palette of crimson, slate grey, and bronze."
  },
  5: {
    snippetAnswer: "Being born on January 5 connects your spiritual path to Arcana 5 (The Hierophant). January 5 grants a deep reverence for truth, structured learning, ethical guidance, and an innate talent for teaching and mentoring others.",
    vignetteTitle: "The Ethical Mentor: Guiding Teams Through Complex Moral Dilemmas",
    vignetteScenario: "Faced with a lucrative opportunity that requires bending ethical rules, a January 5 director gently halts the transaction. They explain the long-term value of reputational integrity, guiding the company toward a cleaner strategy that earns lifelong client trust.",
    birthArchetypeContent: "January 5 individuals carry the sacred teacher frequency of Arcana 5 (The Hierophant). You value tradition, accredited knowledge, and moral clarity. People naturally seek out your advice when navigating difficult life choices.",
    highFrequencyExpression: "High frequency yields inspiring mentorship, published scholarly work, ethical leadership, and creating educational frameworks that uplift communities.",
    shadowChallenges: "Shadow patterns include dogmatic moralizing, intellectual snobbery, enforcing outdated rules out of habit, or spiritual pride.",
    vocationAndFinance: "Excels as a university professor, corporate compliance officer, author, spiritual teacher, and legal advisor. Income expands through publishing, keynote speeches, and advisory retains.",
    reflectionQuestions: [
      "Am I sharing my knowledge generously without imposing rigid dogmas?",
      "Where can I update my beliefs to align with fresh factual evidence?",
      "What educational legacy do I want to create?"
    ],
    faqItems: [
      {
        question: "What zodiac sign governs January 5?",
        answer: "Capricorn governs January 5, grounding The Hierophant's moral ideals into practical educational structures."
      },
      {
        question: "What is the core spiritual lesson for January 5?",
        answer: "Learning that true wisdom comes from living your principles, not just reciting academic theories."
      },
      {
        question: "Which careers suit January 5 best?",
        answer: "Teaching, legal advisory, ethics compliance, book publishing, and executive coaching."
      },
      {
        question: "What number energy drives January 5?",
        answer: "Number 5, driving curiosity, study, and the communication of higher truths."
      }
    ],
    imageBrief: "Scholarly digital art depicting a wise figure in ceremonial robes holding a key and scroll inside an ancient library cathedral, color palette of royal purple, gold, and warm amber light."
  },
  6: {
    snippetAnswer: "Being born on January 6 links your birth frequency to Arcana 6 (The Lovers). Early in January, January 6 endows you with a acute sensitivity to aesthetic balance, deep relational alignment, and the courage to make authentic life choices.",
    vignetteTitle: "The Harmonizer: Resolving Creative Divides Through Shared Vision",
    vignetteScenario: "When two lead designers reach an impasse over branding creative direction, a January 6 facilitator steps in. By emphasizing shared core values rather than personal egos, they craft a unified hybrid brand identity that exceeds both original proposals.",
    birthArchetypeContent: "January 6 individuals carry the relational frequency of Arcana 6 (The Lovers). You are driven to create beauty, foster emotional trust, and make choices aligned with your deepest heart truth rather than superficial pressures.",
    highFrequencyExpression: "Constructive expression shows in magnetic charm, creating harmonious partnerships, high artistic taste, and facilitating win-win collaborations.",
    shadowChallenges: "In shadow, January 6 can lead to codependency, chronic indecision, seeking external validation, or idealizing partners at the expense of realistic boundaries.",
    vocationAndFinance: "Thrives in marriage counseling, high-end fashion, interior design, talent management, and diplomatic relations. Wealth grows through joint ventures and curated aesthetic offerings.",
    reflectionQuestions: [
      "Am I making choices from my authentic values or to gain approval from others?",
      "Where in my key relationships can I establish healthier boundaries?",
      "How can I bring greater visual and emotional harmony into my daily environment?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 6?",
        answer: "January 6 is Capricorn, blending practical realism with The Lovers' pursuit of ideal harmony."
      },
      {
        question: "What is the main decision-making key for January 6?",
        answer: "Trusting your heart's core values rather than agonizing over endless pros and cons."
      },
      {
        question: "Which careers fit January 6 best?",
        answer: "Design, relationship coaching, fashion curation, brand partnerships, and diplomacy."
      },
      {
        question: "What shadow dynamic should January 6 watch out for?",
        answer: "Avoiding difficult decisions out of fear of displeasing one side."
      }
    ],
    imageBrief: "Romantic symbolist painting showing two figures holding hands under an angel with outstretched golden wings in a blooming rose arbor, color palette of soft rose, gold, and emerald green."
  },
  7: {
    snippetAnswer: "Being born on January 7 connects your life energy to Arcana 7 (The Chariot). Positioned in early January, January 7 imparts intense determination, strategic focus, and a driving need to overcome obstacles and achieve victory.",
    vignetteTitle: "The Momentum Driver: Navigating Complex Milestones Under Tight Deadlines",
    vignetteScenario: "Faced with a high-stakes launch deadline, a January 7 project lead mobilizes a remote team across three time zones. Through razor-sharp focus and clear daily targets, they drive the project across the finish line two days ahead of schedule.",
    birthArchetypeContent: "January 7 individuals embody the victorious spirit of Arcana 7 (The Chariot). You are a natural goal-setter who thrives on challenge, physical travel, and overcoming apparent limitations.",
    highFrequencyExpression: "High frequency yields unshakeable willpower, swift execution, team alignment, and mastering opposing forces to reach ambitious milestones.",
    shadowChallenges: "Shadow patterns include aggressive burnout, road rage, steamrolling over team feelings, or stubborn refusal to pause and recalibrate.",
    vocationAndFinance: "Ideal roles include sports management, logistics director, startup founder, automotive engineering, and turnaround specialist. Prosperity builds through rapid execution.",
    reflectionQuestions: [
      "Am I balancing my aggressive goal drive with adequate rest and recovery?",
      "How can I steer opposing opinions toward a shared victory?",
      "What major milestone am I committed to achieving this month?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 7?",
        answer: "January 7 is Capricorn, giving structured stamina to The Chariot's competitive drive."
      },
      {
        question: "What is the primary power of January 7?",
        answer: "Your ability to remain focused on the destination despite temporary roadblocks."
      },
      {
        question: "Which industries suit January 7 best?",
        answer: "Logistics, tech ventures, competitive sports, transportation, and strategic operations."
      },
      {
        question: "How can January 7 avoid burnout?",
        answer: "Schedule mandatory non-negotiable rest periods between major product or project launches."
      }
    ],
    imageBrief: "Dynamic heroic artwork depicting a triumphant figure guiding a chariot drawn by black and white sphinxes beneath a starry canopy, color palette of midnight blue, gold, and silver."
  },
  8: {
    snippetAnswer: "Being born on January 8 links your birth vibration to Arcana 8 (Justice). Early in January, January 8 endows you with an acute sense of cause-and-effect, legal integrity, objective analysis, and systemic fairness.",
    vignetteTitle: "The Objective Judge: Restoring Systemic Balance in Commercial Audits",
    vignetteScenario: "Brought in to investigate financial discrepancies in a multi-partner firm, a January 8 auditor reviews data with complete impartiality. Their clear, factual report rectifies past imbalances and establishes a transparent profit-sharing model for the future.",
    birthArchetypeContent: "January 8 individuals channel the karmic precision of Arcana 8 (Justice). You understand that every action carries equal consequences. You value truth, contract clarity, and ethical accountability.",
    highFrequencyExpression: "At high frequency, you act as an impartial judge, legal master, ethical arbiter, and systemic strategist who rights past wrongs.",
    shadowChallenges: "Shadow manifestations include harsh judgmentalism, legalistic rigidity, score-keeping in personal relationships, or fear of being unfair.",
    vocationAndFinance: "Excels in corporate law, judiciary, auditing, contract negotiation, policy formation, and compliance. Financial abundance flows through legal contracts and fair trading.",
    reflectionQuestions: [
      "Where in my life am I experiencing the consequences of past choices?",
      "Am I holding myself to the same ethical standards I demand from others?",
      "What contract or agreement needs clear realignment today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 8?",
        answer: "January 8 is Capricorn, reinforcing legal structure, systemic order, and institutional integrity."
      },
      {
        question: "What does Arcana 8 represent for January 8 birthdays?",
        answer: "It represents karmic balance, legal fairness, objective truth, and structural accountability."
      },
      {
        question: "What is the financial advice for January 8?",
        answer: "Keep meticulous financial records and ensure all business agreements are legally sound."
      },
      {
        question: "What shadow habit should January 8 avoid?",
        answer: "Avoid holding grudges or enforcing rules devoid of human compassion."
      }
    ],
    imageBrief: "Symmetrical classical art showing a dignified figure seated with scales in one hand and an upright sword in the other between two marble pillars, color palette of deep red, gold, and white marble."
  },
  9: {
    snippetAnswer: "Being born on January 9 connects your personal path to Arcana 9 (The Hermit). Approaching the mid-month threshold of January, January 9 bestows a profound intellectual depth, contemplative nature, and a seeking of authentic wisdom over superficial noise.",
    vignetteTitle: "The Wise Researcher: Uncovering Breakthrough Insights in Quiet Study",
    vignetteScenario: "While competitors rush to publish trend articles, a January 9 researcher spends months analyzing foundational data. When they finally release their whitepaper, it becomes the definitive industry benchmark cited for years to come.",
    birthArchetypeContent: "January 9 individuals carry the lantern of Arcana 9 (The Hermit). You require periodic solitude to process life experience, synthesize complex knowledge, and discover deep spiritual or scientific truths.",
    highFrequencyExpression: "High frequency yields profound scholarship, spiritual mentorship, original research, and illuminating complex topics for others with calm mastery.",
    shadowChallenges: "Shadow patterns include bitter cynicism, fear of social engagement, emotional isolation, or withholding wisdom out of intellectual arrogance.",
    vocationAndFinance: "Ideal roles include research scientist, philosopher, solitary writer, archivist, data analyst, and spiritual advisor. Wealth grows through specialized niche mastery.",
    reflectionQuestions: [
      "Am I carving out regular quiet time to process my thoughts away from digital noise?",
      "How can I share my accumulated wisdom without isolating myself from community?",
      "What specialized subject am I called to master deeply?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 9?",
        answer: "January 9 is Capricorn, grounding The Hermit's contemplative search into tangible academic or practical mastery."
      },
      {
        question: "Why does January 9 need regular solitude?",
        answer: "Solitude is where January 9 recharges mental energy and receives their most valuable creative breakthroughs."
      },
      {
        question: "Which careers fit January 9 best?",
        answer: "Research, philosophy, technical writing, data science, and specialized advisory roles."
      },
      {
        question: "How can January 9 overcome isolation tendencies?",
        answer: "Set intentional dates to share insights with trusted peers and participate in selective communities."
      }
    ],
    imageBrief: "Mystical portrait of a cloaked elder carrying a glowing star lantern and staff atop a snowy peak at twilight, color palette of slate blue, gold, and starlight white."
  },
  10: {
    snippetAnswer: "Being born on January 10 links your life code to Arcana 10 (Wheel of Fortune). Closing the initial 10-day opening of January, January 10 grants an intuitive rhythm for market cycles, synchronistic timing, and adaptability.",
    vignetteTitle: "The Trend Navigator: Turning Unexpected Market Shifts Into Opportunities",
    vignetteScenario: "When a sudden technological breakthrough disrupts a traditional industry, a January 10 entrepreneur doesn't panic. Recognizing the turn of the wheel, they pivot their product line instantly, capturing market share while competitors struggle to react.",
    birthArchetypeContent: "January 10 individuals embody the dynamic rhythm of Arcana 10 (Wheel of Fortune). You understand that change is constant. You possess a lucky knack for being in the right place at the right time when you trust life flow.",
    highFrequencyExpression: "Constructive expression brings effortless adaptability, riding positive momentum, financial timing, and trusting divine synchronicities.",
    shadowChallenges: "Shadow manifestations include fatalistic passivity, gambling away resources, anxiety over temporary downturns, or resisting necessary evolution.",
    vocationAndFinance: "Excels in stock trading, trend forecasting, event promotion, venture capital, and media marketing. Wealth accelerates through multi-cycle investments.",
    reflectionQuestions: [
      "Am I fighting a natural cycle shift or flowing gracefully with new opportunities?",
      "How can I leverage current positive momentum to build lasting security?",
      "What recurring pattern am I ready to evolve beyond today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 10?",
        answer: "January 10 is Capricorn, providing practical fiscal discipline to Wheel of Fortune's cyclical luck."
      },
      {
        question: "How does January 10 relate to Arcana 1 (The Magician)?",
        answer: "10 reduces to 1 (1+0=1), blending Arcana 10's cyclical timing with Arcana 1's active creative initiation."
      },
      {
        question: "What is the financial strength of January 10?",
        answer: "An innate sense for buying low, selling high, and riding emerging market trends."
      },
      {
        question: "What is the shadow risk for January 10?",
        answer: "Relying purely on luck without building solid operational structures."
      }
    ],
    imageBrief: "Intricate symbolic graphic of a golden wheel inscribed with celestial glyphs turning above a calm ocean under a starry sky, color palette of gold, royal blue, and bronze."
  },
  11: {
    snippetAnswer: "Being born on January 11 links your birth code to Arcana 11 (Strength). Entering the core stabilization phase of mid-January, January 11 imparts immense inner resilience, passionate vitality, and the power to tame wild impulses through gentle spiritual fortitude.",
    vignetteTitle: "The Gentle Stabilizer: Taming Crisis Through Calm Inner Fortitude",
    vignetteScenario: "When a heated crisis threatens to dissolve a key partnership, a January 11 leader remains unshakeable. Instead of matching aggression with anger, their calm, steady compassion dissolves hostile defenses, leading to a profound reconciliation.",
    birthArchetypeContent: "January 11 individuals carry the master energy of Arcana 11 (Strength). You possess an extraordinary reservoir of physical and spiritual endurance. True power for you lies not in brute force, but in self-mastery and unconditional love.",
    highFrequencyExpression: "High frequency manifests as quiet confidence, heroic endurance under pressure, empowering others, and transforming intense passion into creative output.",
    shadowChallenges: "Shadow patterns include suppressing anger until it explodes, over-exerting physical energy to prove worth, or letting fear paralyze your voice.",
    vocationAndFinance: "Ideal roles include athletic director, physical therapist, crisis counselor, executive coach, and high-intensity manager. Wealth grows through sustained endurance.",
    reflectionQuestions: [
      "Where am I trying to force an outcome rather than applying gentle inner strength?",
      "How can I honor my physical energy reserves while pursuing ambitious goals?",
      "What intense emotion am I ready to transform into creative vitality today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 11?",
        answer: "January 11 is Capricorn, giving structured discipline to Arcana 11's intense vitality."
      },
      {
        question: "Is January 11 considered a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, amplifying spiritual intuition and inner strength."
      },
      {
        question: "Which careers suit January 11 best?",
        answer: "Physical therapy, crisis management, executive coaching, athletic training, and leadership."
      },
      {
        question: "What is the key to financial growth for January 11?",
        answer: "Building long-term stamina and avoiding burnout from short-term over-exertion."
      }
    ],
    imageBrief: "Inspiring digital painting depicting a serene maiden wearing a crown of flowers gently taming a golden lion, color palette of warm gold, forest green, and pure white."
  },
  23: {
    snippetAnswer: "Being born on January 23 connects your personal frequency to Arcana 5 (The Hierophant), derived from compound digits 2 (Diplomacy) and 3 (Creative Expression). Positioned at the culminating threshold of January, January 23 blends communicative charm with ethical mentorship.",
    vignetteTitle: "The Inspiring Lecturer: Bridging Innovative Ideas with Sacred Truths",
    vignetteScenario: "At a global education summit, a January 23 speaker combines witty storytelling (3) with empathetic audience awareness (2). They present a groundbreaking framework for ethical tech integration (5) that receives a standing ovation and wide media coverage.",
    birthArchetypeContent: "January 23 individuals express Arcana 5 through a unique blend of sensitivity and creative flair. Unlike direct Day 5 birthdays, your path to wisdom involves collaborative dialog, artistic presentation, and translating complex principles into accessible lessons.",
    highFrequencyExpression: "High frequency produces captivating public speaking, publishing impactful books, ethical consensus building, and mentoring diverse talent with warmth.",
    shadowChallenges: "Shadow traps include intellectual superficiality, changing opinions to please audiences, or preaching moral values while ignoring personal practice.",
    vocationAndFinance: "Thrives as a media host, educational author, corporate trainer, keynote speaker, and diplomatic spokesperson. Income expands through publishing royalties and digital courses.",
    reflectionQuestions: [
      "Am I using my communication skills to elevate truth and inspire others?",
      "How can I balance my desire for audience approval with uncompromised integrity?",
      "What creative lesson am I called to share with the world today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 23?",
        answer: "January 23 falls under Aquarius (Air sign), bringing visionary social progress and intellectual freedom to The Hierophant's teaching mission."
      },
      {
        question: "How does January 23 differ from January 5?",
        answer: "January 5 carries Capricorn earth discipline, while January 23 carries Aquarius air innovation combined with compound digits 2 and 3."
      },
      {
        question: "What is the financial engine for January 23?",
        answer: "Monetizing educational media, book publishing, online workshops, and brand ambassadorships."
      },
      {
        question: "Which Arcana complements January 23?",
        answer: "Arcana 3 (The Empress) amplifies creative expression, while Arcana 2 (The High Priestess) deepens intuitive insight."
      }
    ],
    imageBrief: "Vibrant modern illustration showing an articulate speaker standing under a glowing constellation arch before an attentive audience, color palette of electric blue, gold, and clean white."
  },
  29: {
    snippetAnswer: "Being born on January 29 activates the Master Number 11 frequency under Arcana 11 (Strength), derived from compound digits 2 (Sensitivity) and 9 (Humanitarian Empathy). Resting late in January, January 29 channels profound spiritual inspiration into systemic change.",
    vignetteTitle: "The Visionary Reformer: Mobilizing Communities for Lasting Social Progress",
    vignetteScenario: "Seeing a local community suffering from environmental neglect, a January 29 organizer combines deep empathy (9) with strategic networking (2). They rally hundreds of volunteers and secure municipal grants (11), creating a sustainable urban park project.",
    birthArchetypeContent: "January 29 individuals embody Master 11 potential under Arcana 11 (Strength). You feel human suffering acutely and possess the intense spiritual stamina to lead major humanitarian or environmental movements.",
    highFrequencyExpression: "In high frequency, you are a magnetic social reformer, visionary leader, intuitive healer, and tireless advocate for justice and community healing.",
    shadowChallenges: "Shadow expressions include feeling overwhelmed by collective distress, nervous exhaustion, martyr tendencies, or withdrawing into hopeless despair.",
    vocationAndFinance: "Excels in non-profit leadership, environmental policy, visionary art, holistic health, and social advocacy. Prosperity flows through mission-driven enterprises.",
    reflectionQuestions: [
      "How can I protect my emotional sensitivity while serving a larger social mission?",
      "Am I allowing Master 11 inspiration to move through me without over-taxing my nervous system?",
      "What community initiative needs my visionary spark today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is January 29?",
        answer: "January 29 is Aquarius, emphasizing humanitarian ideals, social progress, and original thinking."
      },
      {
        question: "Why is January 29 a Master 11 date?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination and intense creative power."
      },
      {
        question: "How does January 29 differ from January 11?",
        answer: "January 11 carries Capricorn structure, while January 29 carries Aquarius humanitarian vision and compound 2/9 empathy."
      },
      {
        question: "What is the health key for January 29?",
        answer: "Regular nervous system regulation, grounding outdoor walks, and energetic boundary protection."
      }
    ],
    imageBrief: "Inspiring visionary artwork of a figure holding a glowing crystal orb that radiates light over a harmonious city landscape, color palette of turquoise, violet, and shimmering gold."
  }
};

// Generates complete 1,000+ word profile for any day of January (1-31)
export function getJanuaryProfile(day: number): BirthdayProfileData {
  const custom = JANUARY_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `January ${day}`;
  const slug = `january-${day}`;

  const phaseText = day <= 10 ? 'initial opening' : day <= 20 ? 'core stabilization' : 'culminating threshold';
  const seasonalPhrase = `midwinter reflection and foundational planning during the ${phaseText} of January`;
  const seasonalContext = `Midwinter reflection and foundational planning mark the ${phaseText} of January.`;
  const dayVibrationNote = `${formattedDate} combines ${seasonalPhrase} with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  // Compute yesterday and tomorrow for comparison table
  const prevDay = day === 1 ? 31 : day - 1;
  const nextDay = day === 31 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: `January ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 1 ? "Yearly initiation" : "Prior preparatory energy",
      bestFocus: "Consolidating previous steps",
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
      dateLabel: `January ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: "Subsequent integration phase",
      bestFocus: "Expanding into next day's growth",
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} momentum.`
    }
  ];

  return {
    slug,
    month: 'January',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of midwinter January focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
    vignetteTitle: custom?.vignetteTitle || `The ${formattedDate} Catalyst: Navigating ${primaryArcana.name} Energy`,
    vignetteScenario: custom?.vignetteScenario || `In a key moment of decision, someone born on ${formattedDate} steps forward to apply the ${primaryArcana.archetype.toLowerCase()} lessons of Arcana ${primaryArcanaNum}, turning a routine challenge into a major breakthrough.`,
    birthArchetypeContent: custom?.birthArchetypeContent || `Individuals born on ${formattedDate} embody the core qualities of Arcana ${primaryArcanaNum} (${primaryArcana.name}). You possess a natural drive to master your environment, apply structured discipline, and express your authentic talents.`,
    comparisonTable,
    highFrequencyExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenges: custom?.shadowChallenges || primaryArcana.shadowExpression,
    vocationAndFinance: custom?.vocationAndFinance || `${primaryArcana.careerGuidance} ${primaryArcana.moneyChannel}`,
    reflectionQuestions: custom?.reflectionQuestions || [
      `How can I align with the ${phaseText} of January to support my goals?`,
      `In what ways does ${primaryArcana.name} encourage me to express ${primaryArcana.archetype.toLowerCase()} today?`,
      `What specific practice will help me anchor constructive high frequency in my daily routine?`
    ],
    faqItems: custom?.faqItems || [
      {
        question: `What zodiac sign is ${formattedDate}?`,
        answer: day <= 19 ? `${formattedDate} falls under Capricorn (Earth sign), bringing practical discipline and ambitious focus.` : `${formattedDate} falls under Aquarius (Air sign), bringing visionary innovation and social progress.`
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
        href: `/en/destiny-matrix/arcana/${primaryArcanaNum}-${primaryArcana.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/`,
        reason: "Deepen your understanding of your primary birth archetype."
      },
      {
        label: "22 Major Arcana Directory",
        href: "/en/destiny-matrix/arcana/",
        reason: "Explore all 22 Destiny Matrix archetypes."
      },
      {
        label: "Destiny Matrix Calculator",
        href: "/en/",
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
