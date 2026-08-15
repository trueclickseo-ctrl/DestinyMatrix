import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const FEBRUARY_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Being born on February 1 connects your life journey to Arcana 1 (The Magician). As the doorway to February—the season of Imbolc and late-winter emergence—February 1 endows you with an inventive spark, strategic mental clarity, and the drive to pioneer fresh solutions.",
    vignetteTitle: "The Late-Winter Innovator: Sparking Breakthrough Systems in Stagnant Operations",
    vignetteScenario: "When a creative team hits an midwinter slump, a February 1 innovator introduces a revolutionary digital workflow. By combining creative vision with technical precision, they re-energize the entire department and double project output.",
    birthArchetypeContent: "February 1 individuals carry the vibrant mental spark of Arcana 1 (The Magician) combined with the visionary air-and-earth blend of early February. You refuse to let outdated methods dictate your direction, using your persuasive speech and sharp intelligence to manifest original ideas.",
    highFrequencyExpression: "Operating at high frequency, you excel at creative problem solving, rapid skill acquisition, articulate presentation, and turning abstract ideas into functional prototypes.",
    shadowChallenges: "In shadow, February 1 can manifest as mental restless anxiety, scattered focus across too many starting projects, or using intellectual superiority to manipulate conversations.",
    vocationAndFinance: "Thrives as a tech innovator, product designer, media director, software engineer, or venture catalyst. Wealth flows when you patent original solutions and launch independent digital products.",
    reflectionQuestions: [
      "Am I focusing my creative energy on one high-impact project or scattering it across too many initiatives?",
      "How can I use my persuasive communication to empower my team rather than dominate discussions?",
      "What groundbreaking idea am I ready to build into a physical prototype this week?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 1 and how does it pair with Arcana 1?",
        answer: "February 1 falls under Aquarius (Air sign). Aquarius visionary social intellect paired with The Magician's creative initiation creates a brilliant pioneer of human progress."
      },
      {
        question: "How does February 1 differ from January 1 in Destiny Matrix?",
        answer: "While January 1 carries Capricorn earth structure and New Year initiation, February 1 carries Aquarius air innovation and late-winter emergence."
      },
      {
        question: "What is the financial secret for February 1 birthdays?",
        answer: "Monetizing early-stage technological innovations and securing intellectual property rights before public release."
      },
      {
        question: "Which Arcana complements February 1 best?",
        answer: "Arcana 17 (The Star) provides long-term inspirational vision to support Arcana 1's active creative spark."
      }
    ],
    imageBrief: "Futuristic tarot-style artwork of a visionary figure holding a glowing crystalline orb at twilight in a snowy landscape where snowdrops bloom, color palette of electric aqua, violet, and silver."
  },
  2: {
    snippetAnswer: "Being born on February 2 links your birth frequency to Arcana 2 (The High Priestess). Falling on Candlemas / Imbolc, February 2 carries double number 2 sensitivity, granting an exceptionally powerful intuitive radar, deep emotional perception, and a talent for uncovering hidden truths.",
    vignetteTitle: "The Intuitive Sentinel: Detecting Unspoken Market Signals",
    vignetteScenario: "Before financial metrics reveal a shift, a February 2 analyst notices subtle consumer behavioral nuances. Advising their executive board to pivot early, they protect the company from a major market downturn.",
    birthArchetypeContent: "February 2 individuals embody the sacred intuitive depth of Arcana 2 (The High Priestess). The double 2 numerical vibration amplifies your receptivity, making you a master of reading unspoken dynamics, subtle energy shifts, and psychological undercurrents.",
    highFrequencyExpression: "High frequency yields profound empathetic listening, diplomatic wisdom, strategic discretion, and trusting your quiet inner voice above external noise.",
    shadowChallenges: "Shadow patterns include emotional withdrawal, passive-aggressive secrecy, over-sensitivity to negative environments, or doubting your intuitive insights.",
    vocationAndFinance: "Ideal roles include depth psychologist, confidential researcher, archivist, strategic advisor, and holistic healer. Wealth expands through private advisory work and steady long-term investments.",
    reflectionQuestions: [
      "Am I trusting my subtle intuitive feelings when making business or personal decisions?",
      "Where in my life am I holding back honest expression out of fear of emotional conflict?",
      "How can I set healthier boundaries to protect my sensitive energy field?"
    ],
    faqItems: [
      {
        question: "What zodiac sign governs February 2?",
        answer: "February 2 is an Aquarius date, blending airy intellectual independence with The High Priestess's deep receptive intuition."
      },
      {
        question: "Why is February 2 considered a special numerical birthday?",
        answer: "Because of the double 2 vibration (02/02), which amplifies intuitive perception, diplomatic balance, and energetic sensitivity."
      },
      {
        question: "What career suits February 2 best?",
        answer: "Private consulting, strategic research, psychology, holistic wellness, and confidential analysis."
      },
      {
        question: "How can February 2 avoid emotional exhaustion?",
        answer: "Practice daily energetic cleansing and spend quiet time alone near water or in nature."
      }
    ],
    imageBrief: "Mystical symbolist painting of a veiled figure sitting quietly beside a mirrored lake under a starlit winter sky, color palette of indigo, silver, and soft moonlight blue."
  },
  3: {
    snippetAnswer: "Being born on February 3 connects your personal code to Arcana 3 (The Empress). Positioned in early February, February 3 bestows a fertile creative vision, warm expressive charm, and an instinct for cultivating beauty, artistic projects, and thriving communities.",
    vignetteTitle: "The Aesthetic Director: Curating Transformative Brand Experiences",
    vignetteScenario: "Assigned to revamp a cold corporate brand, a February 3 creative director introduces organic textures, warm color palettes, and humanized messaging, turning a clinical product into a beloved lifestyle brand.",
    birthArchetypeContent: "February 3 individuals channel the fertile beauty of Arcana 3 (The Empress) with Aquarius artistic original style. You possess a natural gift for design, hospitality, and nurturing talent in those around you.",
    highFrequencyExpression: "High frequency manifests as abundant creativity, warm generosity, spatial design mastery, and growing flourishing economic ecosystems.",
    shadowChallenges: "Shadow manifestations include vanity, possessive emotional control, over-indulgence, or procrastination under the guise of waiting for perfection.",
    vocationAndFinance: "Excels as a creative director, luxury brand strategist, landscape designer, fashion editor, and hospitality entrepreneur. Prosperity expands through aesthetic and consumer products.",
    reflectionQuestions: [
      "How can I bring more sensory richness and organic beauty into my living space?",
      "Am I supporting my collaborators' growth without trying to control their creative process?",
      "What artistic endeavor am I ready to manifest into the world today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 3?",
        answer: "February 3 is in Aquarius, giving a unique visionary twist to The Empress's classic creative fertility."
      },
      {
        question: "What is the primary money engine for February 3?",
        answer: "Investing in high-end design, luxury consumer goods, interior architecture, and creative media."
      },
      {
        question: "How does February 3 differ from January 3?",
        answer: "January 3 carries Capricorn structural grounding, whereas February 3 carries Aquarius visionary innovation and progressive style."
      },
      {
        question: "Which Arcana complements February 3?",
        answer: "Arcana 4 (The Emperor) offers structural discipline to hold Arcana 3's abundant creative flow."
      }
    ],
    imageBrief: "Lush artistic illustration of a graceful figure surrounded by winter flora and golden light inside a glass greenhouse, color palette of emerald green, champagne gold, and soft violet."
  },
  4: {
    snippetAnswer: "Being born on February 4 links your life vibration to Arcana 4 (The Emperor). February 4 imparts a formidable executive capacity, systemic discipline, and the ability to turn visionary Aquarius concepts into sustainable, next-generation housing and tech infrastructure.",
    vignetteTitle: "The Eco-Infrastructure Developer: Building Next-Generation Sustainable Cities",
    vignetteScenario: "While others debate abstract theories on sustainable housing, a February 4 developer creates a modular eco-building company. Their clear governance and strict operational standards make sustainable homes affordable and scalable.",
    birthArchetypeContent: "February 4 individuals blend the sovereign leadership of Arcana 4 (The Emperor) with mid-winter Aquarius forward-thinking environmental consciousness. You construct modern organizational frameworks designed to withstand economic shifts.",
    highFrequencyExpression: "At high frequency, you act as an empowering executive, establishing modular systems, guiding green urban development, and mentoring emerging technical leaders.",
    shadowChallenges: "Shadow expressions include rigid dogmatism, stubborn refusal to listen to alternative viewpoints, micro-managing, or emotional coldness.",
    vocationAndFinance: "Ideal roles include Chief Operations Officer, urban planner, structural engineer, legal consultant, and corporate director. Wealth accumulates through real estate and solid equity holdings.",
    reflectionQuestions: [
      "Am I leading with empowering clarity or imposing rigid control?",
      "Where in my organization or personal life can I create more efficient systems?",
      "What enduring structure am I building to serve future generations?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 4?",
        answer: "February 4 is Aquarius, blending progressive visionary thinking with The Emperor's pragmatic structural leadership."
      },
      {
        question: "What is the key to career advancement for February 4?",
        answer: "Demonstrating operational reliability while implementing innovative modern systems."
      },
      {
        question: "How does February 4 differ from January 4?",
        answer: "January 4 emphasizes traditional Capricorn institutional authority, while February 4 emphasizes progressive Aquarius system reform."
      },
      {
        question: "What shadow habit should February 4 watch for?",
        answer: "Becoming overly inflexible when unexpected changes disrupt planned schedules."
      }
    ],
    imageBrief: "Commanding architectural artwork showing a dignified figure seated on a metallic throne overlooking a modern sustainable skyline, color palette of steel blue, copper, and dark slate."
  },
  5: {
    snippetAnswer: "Being born on February 5 connects your spiritual vibration to Arcana 5 (The Hierophant). Approaching mid-February, February 5 grants an intellectual hunger for truth, visionary teaching ability, and a talent for bridging traditional wisdom with modern progressive ideas.",
    vignetteTitle: "The Modern Educationalist: Revolutionizing Learning Frameworks",
    vignetteScenario: "A February 5 university professor redesigns a traditional curriculum by introducing interactive digital workshops and real-world ethics case studies. Enrollment doubles as students flock to learn practical wisdom.",
    birthArchetypeContent: "February 5 individuals channel the master teacher frequency of Arcana 5 (The Hierophant). You respect fundamental truths while challenging obsolete dogmas, using your intellectual eloquence to educate and inspire.",
    highFrequencyExpression: "High frequency yields inspiring mentorship, published philosophical works, ethical advocacy, and creating educational platforms that transform mindsets.",
    shadowChallenges: "Shadow patterns include intellectual snobbery, preaching values you do not practice, rigid adherence to new dogmas, or fear of unconventional ideas.",
    vocationAndFinance: "Excels as a professor, author, executive coach, educational platform founder, and ethics director. Revenue expands through publishing, speaking engagements, and course creation.",
    reflectionQuestions: [
      "Am I teaching from lived experience and uncompromised integrity?",
      "Where can I modernize my knowledge base to stay ahead of evolving industry trends?",
      "What core truth am I called to communicate to my community?"
    ],
    faqItems: [
      {
        question: "What zodiac sign governs February 5?",
        answer: "Aquarius governs February 5, bringing visionary social reform and original thinking to The Hierophant's educational mission."
      },
      {
        question: "How does February 5 differ from January 5?",
        answer: "January 5 carries traditional Capricorn discipline, whereas February 5 carries Aquarius progressive innovation and open-minded inquiry."
      },
      {
        question: "What is the primary financial path for February 5?",
        answer: "Monetizing educational media, book publishing, accredited training programs, and keynote lectures."
      },
      {
        question: "Which Arcana complements February 5?",
        answer: "Arcana 17 (The Star) amplifies February 5's inspirational teaching vision."
      }
    ],
    imageBrief: "Inspiring artwork of an enlightened teacher holding a glowing quill and scroll under a starry vault of knowledge, color palette of deep sapphire blue, gold, and ivory white."
  },
  6: {
    snippetAnswer: "Being born on February 6 links your personal birth code to Arcana 6 (The Lovers). Resting near mid-February, February 6 endows you with an elevated aesthetic sensitivity, relational magnetic charm, and the courage to make authentic value-driven choices.",
    vignetteTitle: "The Relational Mediator: Realigning Partnerships Around Authentic Values",
    vignetteScenario: "When co-founders reach an impasse over company strategy, a February 6 advisor steps in. By identifying shared core values rather than personal egos, they realign the leadership team around a unified mission.",
    birthArchetypeContent: "February 6 individuals express Arcana 6 through progressive Aquarius open-mindedness. You curate human connections and brand collaborations based on shared social ideals rather than superficial convention.",
    highFrequencyExpression: "High frequency yields magnetic artistic taste, mediating commercial deadlocks, fostering collaborative co-working alliances, and creating visually harmonious brand identities.",
    shadowChallenges: "Shadow expressions include codependency, chronic hesitation when making major decisions, seeking external approval, or over-idealizing partners.",
    vocationAndFinance: "Ideal roles include relationship counselor, brand strategist, fashion curator, diplomatic envoy, and interior designer. Wealth grows through high-value business partnerships.",
    reflectionQuestions: [
      "Am I making choices based on my core internal values or seeking external validation?",
      "Where in my key relationships can I establish clearer, healthier boundaries?",
      "How can I bring greater artistic harmony into my everyday environment?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 6?",
        answer: "February 6 is Aquarius, infusing The Lovers' pursuit of harmony with intellectual objectivity and progressive ideals."
      },
      {
        question: "How does February 6 differ from January 6?",
        answer: "January 6 carries Capricorn practical grounding, while February 6 carries Aquarius social vision and mid-February relational warmth."
      },
      {
        question: "What is the key decision-making rule for February 6?",
        answer: "Align your choices with your authentic heart values rather than over-analyzing social opinions."
      },
      {
        question: "Which careers suit February 6 best?",
        answer: "Brand partnerships, executive coaching, luxury fashion curation, and conflict resolution."
      }
    ],
    imageBrief: "Elegant artwork depicting two figures holding a glowing balance under a starry archway, color palette of blush pink, gold, and deep indigo blue."
  },
  7: {
    snippetAnswer: "Being born on February 7 connects your core vibration to Arcana 7 (The Chariot). Positioned in mid-February, February 7 bestows intense determination, strategic focus, and an innate capacity to drive ambitious tech supply chain projects.",
    vignetteTitle: "The Tech Logistics Pioneer: Revolutionizing Clean Supply Chains",
    vignetteScenario: "Facing supply chain bottlenecks, a February 7 logistics director launches an AI-driven routing protocol. Overcoming technical hurdles in weeks, they streamline delivery times by 40% while cutting carbon emissions.",
    birthArchetypeContent: "February 7 individuals channel Arcana 7 into technological momentum and sustainable transit networks. You combine Aquarius analytical innovation with competitive drive to overcome systemic roadblocks.",
    highFrequencyExpression: "At high frequency, you excel at automated system logistics, electric transport engineering, turnaround project management, and driving teams across ambitious finish lines.",
    shadowChallenges: "Shadow patterns include aggressive impatience, road rage, steamrolling over team input, or risking physical burnout from unyielding work stress.",
    vocationAndFinance: "Excels as a logistics director, startup founder, automotive innovator, project turnaround specialist, and competitive athlete. Prosperity expands through rapid execution.",
    reflectionQuestions: [
      "Am I pacing my energy drive with necessary physical rest and recovery?",
      "How can I lead my team toward victory without sacrificing emotional empathy?",
      "What major project milestone am I committed to conquering this month?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 7?",
        answer: "February 7 is Aquarius, combining technological innovation and strategic intellect with The Chariot's competitive drive."
      },
      {
        question: "How does February 7 differ from January 7?",
        answer: "January 7 relies on Capricorn stamina, while February 7 leverages Aquarius innovation and clean technological strategy."
      },
      {
        question: "What is the primary strength of February 7?",
        answer: "Your unshakeable ability to stay focused on long-term targets despite temporary setbacks."
      },
      {
        question: "How can February 7 avoid burnout?",
        answer: "Schedule non-negotiable recovery breaks between major project sprints."
      }
    ],
    imageBrief: "Dynamic modern illustration showing a streamlined vehicle speeding along a luminous track beneath a night sky filled with stars, color palette of electric cobalt, silver, and gold."
  },
  8: {
    snippetAnswer: "Being born on February 8 links your birth vibration to Arcana 8 (Justice). Resting in mid-February, February 8 endows you with an acute sense of systemic cause-and-effect, legal integrity, objective balance, and environmental ethics.",
    vignetteTitle: "The Bio-Ethics Auditor: Guarding Scientific Compliance",
    vignetteScenario: "Brought in to review a biotech firm's research protocols, a February 8 auditor insists on absolute compliance transparency. Their rigorous report ensures ethical safety, earning international regulatory approval.",
    birthArchetypeContent: "February 8 individuals channel the objective balance of Arcana 8 (Justice). You possess a razor-sharp intellect that cuts through bias, advocating for systemic fairness, clear contracts, and ethical accountability.",
    highFrequencyExpression: "High frequency yields legal mastery, objective corporate governance, systemic problem-solving, and righting structural imbalances.",
    shadowChallenges: "Shadow expressions include harsh perfectionist judgment, score-keeping in relationships, legalistic inflexibility, or suppressing emotional warmth.",
    vocationAndFinance: "Ideal roles include corporate compliance lawyer, bio-ethics chair, financial auditor, policy strategist, and contract negotiator. Wealth builds through legally sound investments.",
    reflectionQuestions: [
      "Am I applying objective fairness to myself as well as to others?",
      "Where in my life am I experiencing the direct consequences of past decisions?",
      "What business contract or personal boundary needs clear alignment today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 8?",
        answer: "February 8 is Aquarius, bringing progressive social justice and intellectual objectivity to Arcana 8's legal precision."
      },
      {
        question: "How does February 8 differ from January 8?",
        answer: "January 8 focuses on Capricorn institutional law, while February 8 focuses on Aquarius bio-ethics, environmental regulation, and systemic reform."
      },
      {
        question: "What is the financial rule for February 8?",
        answer: "Maintain flawless documentation and ensure every transaction is completely transparent."
      },
      {
        question: "Which Arcana complements February 8?",
        answer: "Arcana 11 (Strength) provides compassionate resilience to balance Justice's strict objectivity."
      }
    ],
    imageBrief: "Symmetrical modern art of a dignified figure holding glowing scales and a clear crystal sword, color palette of deep crimson, steel grey, and white marble."
  },
  9: {
    snippetAnswer: "Being born on February 9 connects your personal destiny to Arcana 9 (The Hermit). Positioned in mid-February, February 9 endows you with an analytical research mindset, technological autonomy, and a drive to discover empirical scientific truths.",
    vignetteTitle: "The Deep-Space Data Analyst: Uncovering Signal Anomalies in Quiet Study",
    vignetteScenario: "While tech media chases short-term hypes, a February 9 data scientist spends months in quiet isolation analyzing long-term climate models. Their published study provides groundbreaking predictive accuracy.",
    birthArchetypeContent: "February 9 individuals embody Arcana 9 through deep-tech astrophysics, climate modelling, and software research. You thrive in calm solitude, filtering out noise to code elegant software frameworks and solve complex empirical problems.",
    highFrequencyExpression: "High frequency produces groundbreaking climate modelling, deep astronomical research, software architecture mastery, and illuminating scientific truths for humanity.",
    shadowChallenges: "In shadow, February 9 can lean into aloof intellectual cynicism, over-analyzing emotional situations, or shying away from collaborative teamwork.",
    vocationAndFinance: "Thrives as an astrophysics researcher, climate model architect, cybersecurity auditor, and technical whitepaper author. Financial gain builds through proprietary software tools.",
    reflectionQuestions: [
      "Am I making regular quiet time for deep reflection away from digital distractions?",
      "How can I share my accumulated wisdom without feeling overwhelmed by social demands?",
      "What specialized domain am I called to master deeply?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 9?",
        answer: "February 9 is Aquarius, blending visionary scientific curiosity with The Hermit's contemplative search for truth."
      },
      {
        question: "Why does February 9 need solitude?",
        answer: "Solitude allows February 9 to clear mental noise and receive their most brilliant creative and analytical breakthroughs."
      },
      {
        question: "Which careers suit February 9 best?",
        answer: "Scientific research, data analytics, software architecture, astronomy, and academic writing."
      },
      {
        question: "How can February 9 prevent emotional isolation?",
        answer: "Schedule intentional check-ins with trusted peers who share your intellectual passion."
      }
    ],
    imageBrief: "Mystical digital painting of a solitary figure carrying a star lantern atop a snowy observatory tower looking out at nebulas, color palette of midnight navy, gold, and starlight white."
  },
  10: {
    snippetAnswer: "Being born on February 10 links your birth frequency to Arcana 10 (Wheel of Fortune). Closing the first decade of February, February 10 grants an intuitive rhythm for market cycles, technological trend forecasting, and effortless adaptability.",
    vignetteTitle: "The Trend Forecast Strategist: Navigating Market Volatility",
    vignetteScenario: "Recognizing early shifts in consumer tech behavior, a February 10 venture capital advisor recommends pivoting investments into renewable energy storage. The fund captures massive returns as the broader market follows.",
    birthArchetypeContent: "February 10 individuals embody the fluid momentum of Arcana 10 (Wheel of Fortune). Combined with Aquarius forward-thinking vision, you possess a knack for riding emerging trends and turning unexpected disruptions into lucrative opportunities.",
    highFrequencyExpression: "Constructive high frequency yields effortless adaptability, riding positive economic timing, venture forecasting, and trusting life's natural growth cycles.",
    shadowChallenges: "Shadow manifestations include fatalistic passivity, gambling with resources, anxiety during temporary downturns, or failing to build solid operational foundations.",
    vocationAndFinance: "Ideal roles include trend forecaster, venture capitalist, stock trader, tech marketer, and event producer. Wealth builds through multi-cycle investment strategies.",
    reflectionQuestions: [
      "Am I flowing adaptively with recent changes or resisting necessary growth?",
      "How can I use current high momentum to build lasting security for the future?",
      "What repeating cycle am I ready to evolve beyond today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 10?",
        answer: "February 10 is Aquarius, giving progressive vision and technological foresight to Wheel of Fortune's cyclical luck."
      },
      {
        question: "How does February 10 relate to Arcana 1 (The Magician)?",
        answer: "10 reduces to 1 (1+0=1), blending Arcana 10's cycle timing with Arcana 1's active creative initiation."
      },
      {
        question: "What is the financial superpower of February 10?",
        answer: "An innate sense for market timing—knowing precisely when to enter and exit economic cycles."
      },
      {
        question: "What shadow trap should February 10 avoid?",
        answer: "Relying solely on speculative luck without building stable administrative structures."
      }
    ],
    imageBrief: "Symbolic graphic of a luminous futuristic wheel turning above a calm ocean under a starry galaxy, color palette of gold, deep cyan, and bronze."
  },
  11: {
    snippetAnswer: "Being born on February 11 activates Master Number 11 frequency under Arcana 11 (Strength). Entering mid-February, February 11 endows you with extraordinary inner resilience, passionate vitality, and the power to tame difficult situations through calm spiritual fortitude.",
    vignetteTitle: "The High-Performance Coach: Empowering Elite Talent Under Pressure",
    vignetteScenario: "Coaching a sports team through a grueling championship finals, a February 11 mentor uses quiet emotional composure to soothe anxiety. Re-focused and steady, the team executes flawlessly to claim the championship.",
    birthArchetypeContent: "February 11 individuals express Arcana 11 through Aquarius social reform and group motivation. You lead high-intensity teams by empowering each individual's unique talents rather than imposing top-down pressure.",
    highFrequencyExpression: "High frequency shows in quiet athletic coaching, crisis intervention leadership, guiding high-stress startups, and channeling passionate energy into social advocacy.",
    shadowChallenges: "Shadow patterns include suppressing anger until it explodes, over-working to prove capability, or letting inner anxiety paralyze your voice.",
    vocationAndFinance: "Excels as a high-performance coach, crisis director, physical therapist, athletic director, and executive leader. Wealth expands through sustained long-term execution.",
    reflectionQuestions: [
      "Where can I apply quiet inner strength rather than trying to force an outcome?",
      "Am I honoring my physical energy reserves with adequate rest and recovery?",
      "What intense challenge am I ready to transform into creative victory today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 11?",
        answer: "February 11 is Aquarius, giving visionary social focus and intellectual discipline to Arcana 11's intense vitality."
      },
      {
        question: "Is February 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, amplifying spiritual intuition, charisma, and inner endurance."
      },
      {
        question: "Which careers suit February 11 best?",
        answer: "High-performance coaching, crisis management, physical therapy, sports leadership, and executive consulting."
      },
      {
        question: "How can February 11 maintain high performance?",
        answer: "Balance intense physical or mental effort with regular nervous system regulation practices."
      }
    ],
    imageBrief: "Inspiring artwork of a calm figure wearing a crown of stars gently taming a golden lion, color palette of warm gold, forest green, and shimmering white."
  },
  12: {
    snippetAnswer: "Being born on February 12 links your life vibration to Arcana 12 (The Hanged Man). Moving through mid-February, February 12 grants a unique capacity for unconventional perspective, deep sacrifice for high ideals, and seeing solutions that others miss.",
    vignetteTitle: "The Avant-Garde Designer: Inverting Industry Paradigms",
    vignetteScenario: "Faced with a traditional architectural constraint, a February 12 designer flips the structural layout upside down. Their unconventional design maximizes natural light and heat efficiency, winning top international architectural honors.",
    birthArchetypeContent: "February 12 individuals embody the visionary surrender of Arcana 12 (The Hanged Man). You do not view the world through conventional lenses; you excel at pausing, looking from a different angle, and yielding short-term ego gains for long-term wisdom.",
    highFrequencyExpression: "At high frequency, you are an original creative thinker, selfless humanitarian, master innovator, and catalyst for shift in perspective.",
    shadowChallenges: "Shadow patterns include feeling victimized by circumstances, chronic martyrdom, indecision, or staying stuck in limbo out of fear of commitment.",
    vocationAndFinance: "Ideal roles include avant-garde artist, innovation strategist, humanitarian director, film editor, and holistic therapist. Financial growth comes from unique non-traditional models.",
    reflectionQuestions: [
      "What current challenge requires me to change my perspective rather than force action?",
      "Am I sacrificing my well-being out of a false sense of obligation?",
      "What alternative angle can I explore to solve a long-standing problem today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 12?",
        answer: "February 12 is Aquarius, blending progressive social ideals with The Hanged Man's unconventional insight."
      },
      {
        question: "What is the core spiritual lesson for February 12?",
        answer: "Learning that letting go of control often opens the path to genuine breakthrough solutions."
      },
      {
        question: "Which careers suit February 12 best?",
        answer: "Creative arts, non-profit leadership, innovation design, photography, and holistic healing."
      },
      {
        question: "How can February 12 avoid the martyr trap?",
        answer: "Set clear healthy boundaries and ensure your sacrifices serve an authentic purpose rather than approval."
      }
    ],
    imageBrief: "Mystical symbolist painting of a figure suspended gracefully beneath a glowing halo tree, looking out over a peaceful winter valley, color palette of lavender, gold, and deep indigo."
  },
  13: {
    snippetAnswer: "Being born on February 13 connects your personal path to Arcana 13 (Transformation / Death). Resting in mid-February, February 13 endows you with a powerful ability to release obsolete patterns, lead deep structural reorganizations, and facilitate profound rebirth.",
    vignetteTitle: "The Transformation Specialist: Turning Failing Firms Into Agile Ventures",
    vignetteScenario: "Brought in to manage a struggling legacy media company, a February 13 restructuring expert cuts obsolete operations and pivots entirely to digital streaming, returning the company to multi-million-dollar profitability.",
    birthArchetypeContent: "February 13 individuals carry the potent rebirth frequency of Arcana 13 (Transformation). You are not intimidated by ending cycles; you recognize that clearing away dead weight is essential for new organic growth.",
    highFrequencyExpression: "High frequency manifests as courage under major transitions, organizational restructuring mastery, psychological rebirth, and driving evolution.",
    shadowChallenges: "Shadow expressions include fear of letting go of past security, destructive emotional outbursts, resisting inevitable change, or brooding over past losses.",
    vocationAndFinance: "Excels as a turnaround consultant, corporate restructuring agent, crisis counselor, waste recovery pioneer, and transformational author. Wealth grows through revitalizing distressed assets.",
    reflectionQuestions: [
      "What obsolete habit or project am I ready to release to create space for fresh growth?",
      "How can I support my team through major transitions with calm reassurance?",
      "Where in my life is a door closing so a far greater one can open?"
    ],
    faqItems: [
      {
        question: "Is February 13 an unlucky birthday in numerology?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), a powerful symbol of rebirth, renewal, and positive structural evolution."
      },
      {
        question: "What zodiac sign is February 13?",
        answer: "February 13 is Aquarius, giving progressive vision and intellectual courage to Arcana 13's transformative power."
      },
      {
        question: "What is the financial key for February 13?",
        answer: "Acquiring undervalued or distressed assets, restructuring them, and unlocking hidden value."
      },
      {
        question: "Which Arcana complements February 13?",
        answer: "Arcana 19 (The Sun) brings radiant joy and warmth to illuminate Arcana 13's rebirth process."
      }
    ],
    imageBrief: "Striking artwork showing a phoenix rising from golden embers into a clear starlit winter sky, color palette of deep crimson, gold, and night sky violet."
  },
  14: {
    snippetAnswer: "Being born on February 14 links your life vibration to Arcana 14 (Temperance). Falling on Valentine's Day, February 14 bestows a natural gift for emotional alchemy, diplomatic moderation, artistic synthesis, and blending opposing forces into harmonious balance.",
    vignetteTitle: "The Cultural Alchemist: Blending Diverse Traditions Into Harmonious Media",
    vignetteScenario: "Curating a global music festival on Valentine's Day, a February 14 producer mixes traditional folk melodies with modern electronic synthesisers, creating a groundbreaking sound experience that delights international audiences.",
    birthArchetypeContent: "February 14 individuals embody the harmonious synthesis of Arcana 14 (Temperance). Born on Valentine's Day, you possess an innate sensitivity for love, art, and bringing conflicting viewpoints into peaceful resolution.",
    highFrequencyExpression: "At high frequency, you excel at conflict mediation, artistic fusion, emotional self-regulation, and creating balanced ecosystems in work and relationships.",
    shadowChallenges: "Shadow patterns include avoiding necessary conflicts through superficial politeness, emotional apathy, over-indulgence under stress, or compromising your core values.",
    vocationAndFinance: "Ideal roles include diplomatic envoy, music producer, holistic nutritionist, relationship counselor, and brand harmonizer. Wealth expands through collaborative joint ventures.",
    reflectionQuestions: [
      "Where in my life can I practice greater patience and emotional moderation?",
      "Am I avoiding an important conversation under the guise of keeping the peace?",
      "What two opposing ideas can I blend into a creative synthesis today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 14?",
        answer: "February 14 is Aquarius, blending progressive social harmony and intellectual balance with Arcana 14's emotional alchemy."
      },
      {
        question: "What significance does Valentine's Day hold for a February 14 birthday?",
        answer: "It reinforces your innate mission to foster authentic relational balance, emotional peace, and artistic harmony."
      },
      {
        question: "Which careers suit February 14 best?",
        answer: "Diplomacy, music production, holistic health, event curation, and relationship counseling."
      },
      {
        question: "How can February 14 maintain emotional balance?",
        answer: "Practice daily moderation in work and rest, avoiding extreme stress spikes."
      }
    ],
    imageBrief: "Harmonious painting of a serene winged figure pouring glowing liquid between two golden vessels under a twilight sky, color palette of soft amethyst, rose gold, and sky blue."
  },
  15: {
    snippetAnswer: "Being born on February 15 connects your birth code to Arcana 15 (The Devil). Approaching the Aquarius-Pisces cusp, February 15 grants charismatic influence, deep psychological insight, and the power to liberate yourself and others from material attachments and shadow traps.",
    vignetteTitle: "The Recovery Strategist: Liberating Clients From Subconscious Traps",
    vignetteScenario: "A February 15 therapist helps corporate executives recognize their toxic workaholic addictions. By unveiling the hidden fears driving their behavior, they guide them toward healthy work-life balance.",
    birthArchetypeContent: "February 15 individuals carry the magnetic intensity of Arcana 15 (The Devil). You possess a sharp eye for hidden motives, material leverage, and psychological dependencies, choosing to use your influence to liberate rather than control.",
    highFrequencyExpression: "High frequency yields magnetic leadership, psychological mastery, financial acumen, freeing others from unhealthy habits, and transforming shadow energy into light.",
    shadowChallenges: "Shadow patterns include manipulative control, obsession with wealth or power, falling into addictive habits, or playing on others' vulnerabilities.",
    vocationAndFinance: "Excels in addiction counseling, corporate negotiations, forensic psychology, high-stakes finance, and investigative media. Prosperity builds through ethical financial mastery.",
    reflectionQuestions: [
      "Am I using my magnetic influence to empower others or to gain subtle control?",
      "What material attachment or toxic habit am I ready to release today?",
      "How can I bring honesty to a hidden psychological shadow?"
    ],
    faqItems: [
      {
        question: "Does Arcana 15 mean a February 15 birthday is negative?",
        answer: "Not at all. In Destiny Matrix, Arcana 15 represents deep psychological insight, charisma, and the power to break free from limitations."
      },
      {
        question: "What zodiac sign is February 15?",
        answer: "February 15 is Aquarius, giving intellectual independence and social consciousness to Arcana 15's intense magnetism."
      },
      {
        question: "What is the financial key for February 15?",
        answer: "Mastering material resources without letting money or status control your personal integrity."
      },
      {
        question: "Which Arcana complements February 15?",
        answer: "Arcana 14 (Temperance) provides calming moderation to balance Arcana 15's intense drive."
      }
    ],
    imageBrief: "Dramatic symbolist artwork showing a figure holding a golden torch that illuminates a shadowy hall, breaking iron chains with light, color palette of rich burgundy, gold, and obsidian."
  },
  16: {
    snippetAnswer: "Being born on February 16 links your life code to Arcana 16 (The Tower). Positioned near mid-February, February 16 bestows a fearless capacity to dismantle illusion, expose structural flaws, and build unshakeable foundations after unexpected disruptions.",
    vignetteTitle: "The Structural Safety Whistleblower: Exposing Flaws to Save Lives",
    vignetteScenario: "Reviewing engineering blueprints for a high-rise, a February 16 auditor discovers a severe foundation defect. Despite corporate pressure, they halt construction, forcing a complete redesign that prevents future catastrophic failure.",
    birthArchetypeContent: "February 16 individuals embody the awakening lightning of Arcana 16 (The Tower). You possess an instinct for detecting false claims and fragile structures, using truth to break down dangerous illusions so enduring truth can stand.",
    highFrequencyExpression: "Constructive high frequency yields courageous truth-telling, crisis management leadership, rebuilding solid structures, and driving breakthrough awakenings.",
    shadowChallenges: "Shadow expressions include destructive rage, creating unnecessary chaos out of boredom, clinging to falling structures out of fear, or harsh cynicism.",
    vocationAndFinance: "Ideal roles include structural engineer, crisis management consultant, investigative reporter, risk auditor, and transformational coach. Wealth grows through rebuilding resilient systems.",
    reflectionQuestions: [
      "What fragile assumption or outdated system am I ready to dismantle in my business or life?",
      "How can I deliver difficult truths with constructive compassion rather than destruction?",
      "What rock-solid foundation am I building to withstand future storms?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 16?",
        answer: "February 16 is Aquarius, infusing The Tower's awakening spark with intellectual clarity and social reform."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is liberating you from false limitations so you build real strength."
      },
      {
        question: "Which careers suit February 16 best?",
        answer: "Engineering audit, crisis counseling, investigative journalism, structural architecture, and risk management."
      },
      {
        question: "How can February 16 navigate unexpected change?",
        answer: "Focus on what is truly permanent—your inner core values—and rebuild adaptively from there."
      }
    ],
    imageBrief: "Striking graphic of a golden tower struck by a bolt of starlight, revealing a crystal foundation beneath, color palette of electric blue, gold, and deep charcoal."
  },
  17: {
    snippetAnswer: "Being born on February 17 connects your spiritual vibration to Arcana 17 (The Star). Positioned late in Aquarius season, February 17 grants inspirational vision, artistic originality, unwavering hope, and a natural ability to guide communities toward a brighter future.",
    vignetteTitle: "The Renewable Energy Visionary: Securing Grants for Clean Tech",
    vignetteScenario: "Presenting a futuristic solar-grid proposal to global investors, a February 17 scientist paints such an inspiring, clear vision of clean energy access that they secure full capital funding on the spot.",
    birthArchetypeContent: "February 17 individuals channel the celestial guidance of Arcana 17 (The Star). You are a natural visionary who sees possibilities long before others, radiating hope and inspiring humanity with your authentic artistic and intellectual gifts.",
    highFrequencyExpression: "High frequency manifests as visionary leadership, inspiring art and music, unfailing optimism, and guiding others toward their highest potential.",
    shadowChallenges: "Shadow patterns include unrealistic daydreaming without practical follow-through, feeling alienated from daily reality, or losing hope during temporary setbacks.",
    vocationAndFinance: "Excels as a clean-tech researcher, visionary artist, astronomer, non-profit founder, media host, and motivational speaker. Wealth flows through innovative creative platforms.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to manifest my long-term visionary goals?",
      "How can I share my authentic creative gifts to inspire hope in my community?",
      "What aspirational dream am I called to dedicate my energy to today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 17?",
        answer: "February 17 is Aquarius, creating a natural alignment between Aquarius's star-like visionary intellect and Arcana 17's celestial inspiration."
      },
      {
        question: "What is the primary spiritual gift of February 17?",
        answer: "An unshakeable inner faith and the ability to illuminate hope for others in dark times."
      },
      {
        question: "Which careers suit February 17 best?",
        answer: "Renewable energy, visionary art, media broadcasting, astrology, and social activism."
      },
      {
        question: "How can February 17 ground their big dreams?",
        answer: "Partner with practical execution specialists who help translate visions into concrete steps."
      }
    ],
    imageBrief: "Breathtaking artwork depicting a graceful maiden pouring starlight from two urns onto land and water under an eight-pointed golden star, color palette of midnight blue, starlight white, and aquamarine."
  },
  18: {
    snippetAnswer: "Being born on February 18 links your birth vibration to Arcana 18 (The Moon). Sitting right on the Aquarius-Pisces cusp, February 18 endows you with a rich subconscious imagination, acute intuitive radar, and the power to navigate psychological mysteries.",
    vignetteTitle: "The Psychological Novelist: Crafting Subconscious Plot Masterpieces",
    vignetteScenario: "Drawing from vivid dreams and deep psychological study, a February 18 writer publishes a mystery novel that captures the bestseller list, praised for its uncanny insight into human emotional complexity.",
    birthArchetypeContent: "February 18 individuals carry the profound depth of Arcana 18 (The Moon). Positioned at the threshold of Pisces season, you navigate the realm of dreams, intuition, and hidden emotions with artistic and psychological mastery.",
    highFrequencyExpression: "At high frequency, you excel in artistic storytelling, psychological healing, intuitive analysis, and illuminating hidden truths out of shadow.",
    shadowChallenges: "Shadow expressions include getting lost in irrational anxiety, fear of the unknown, self-deception, or escaping reality through unhealthy fantasy.",
    vocationAndFinance: "Ideal roles include psychological fiction author, film director, dream analyst, hypnotherapist, and creative photographer. Wealth expands through imaginative media.",
    reflectionQuestions: [
      "Am I listening to my intuitive dreams or allowing baseless fears to dictate choices?",
      "How can I channel my rich emotional imagination into creative projects?",
      "What subconscious fear am I ready to face with conscious understanding today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 18?",
        answer: "February 18 sits on the Aquarius-Pisces cusp, blending Aquarius intellectual depth with Pisces intuitive emotional sensitivity."
      },
      {
        question: "How does Arcana 18 influence February 18 birthdays?",
        answer: "It grants deep imaginative creativity, dream lucidity, and an innate understanding of human psychology."
      },
      {
        question: "Which careers fit February 18 best?",
        answer: "Creative writing, filmmaking, psychology, photography, and holistic healing arts."
      },
      {
        question: "How can February 18 clear mental fog?",
        answer: "Engage in daily grounding walks in nature and maintain a written dream journal."
      }
    ],
    imageBrief: "Atmospheric symbolist painting showing a full silver moon reflecting in a calm ocean path flanked by two stone towers, color palette of silver, deep teal, and twilight navy."
  },
  19: {
    snippetAnswer: "Being born on February 19 connects your core frequency to Arcana 19 (The Sun). Transitioning into Pisces season, February 19 bestows radiant warmth, joyful vitality, creative leadership, and a talent for illuminating growth and optimism everywhere you go.",
    vignetteTitle: "The Solar Entrepreneur: Championing Youth Innovation Incubators",
    vignetteScenario: "Launching a youth technology academy, a February 19 mentor brings such infectious enthusiasm and generous support that corporate sponsors flock to fund scholarships, empowering hundreds of young creators.",
    birthArchetypeContent: "February 19 individuals channel the triumphant clarity of Arcana 19 (The Sun). You radiate authenticity, childlike joy, and generosity, inspiring confidence in others and bringing success into clear visibility.",
    highFrequencyExpression: "High frequency yields radiant optimism, successful creative ventures, empowering mentorship, leadership warmth, and financial prosperity.",
    shadowChallenges: "Shadow patterns include egocentric vanity, seeking constant public applause, burnout from over-committing, or masking deep sadness behind forced smiles.",
    vocationAndFinance: "Excels as a creative director, youth program founder, public speaker, entertainment producer, and solar energy pioneer. Wealth expands through high-visibility enterprises.",
    reflectionQuestions: [
      "Am I letting my authentic joy shine without needing external validation?",
      "How can I use my success to illuminate opportunities for young people?",
      "What creative project am I ready to bring into full public light today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 19?",
        answer: "February 19 is the opening day of Pisces (Water sign), blending Pisces emotional warmth with The Sun's radiant solar vitality."
      },
      {
        question: "How does February 19 differ from January 19?",
        answer: "January 19 carries Capricorn earth discipline, while February 19 carries Pisces emotional empathy and joyful solar creativity."
      },
      {
        question: "What is the financial superpower of February 19?",
        answer: "A magnetic personal presence that attracts high-value investments and media visibility."
      },
      {
        question: "Which Arcana complements February 19?",
        answer: "Arcana 21 (The World) expands February 19's radiant joy onto an international stage."
      }
    ],
    imageBrief: "Radiant tarot-style artwork of a triumphant figure riding a white horse beneath a brilliant golden sun with sunflowers blooming below, color palette of warm gold, amber, and Sky blue."
  },
  20: {
    snippetAnswer: "Being born on February 20 links your birth frequency to Arcana 20 (Judgement). Resting in early Pisces, February 20 endows you with a high spiritual calling, ancestral insight, clear discernment, and the ability to orchestrate major life awakenings.",
    vignetteTitle: "The Lineage Researcher: Reconnecting Lost Heritage Archives",
    vignetteScenario: "Using historical databases and genetic mapping, a February 20 historian restores an erased ancestral archive. Their work reunites estranged families and restores legal land titles to historic communities.",
    birthArchetypeContent: "February 20 individuals embody the awakening trumpet of Arcana 20 (Judgement). You possess an acute inner hearing for life purpose, recognizing that past lessons exist to propel you into higher spiritual evolution.",
    highFrequencyExpression: "At high frequency, you excel at clear life evaluation, family healing, spiritual awakening, historical research, and calling others to their true destiny.",
    shadowChallenges: "Shadow expressions include harsh self-criticism, lingering in past regrets, judging family members unfairly, or resisting your spiritual calling.",
    vocationAndFinance: "Ideal roles include genealogy researcher, family therapist, estate lawyer, spiritual coach, and documentary historian. Wealth grows through heritage preservation and systemic legal work.",
    reflectionQuestions: [
      "What past experience am I called to forgive so I can step into my true purpose?",
      "Am I listening to my quiet inner calling or suppressing it out of fear?",
      "How can I bring healing and understanding to my family lineage today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 20?",
        answer: "February 20 is Pisces, infusing Arcana 20's spiritual awakening with deep emotional empathy and intuitive understanding."
      },
      {
        question: "What does Arcana 20 mean for a February 20 birthday?",
        answer: "It signifies a major life mission centered on spiritual awakening, family lineage healing, and answering a higher calling."
      },
      {
        question: "Which careers suit February 20 best?",
        answer: "Genealogy, family counseling, legal estate planning, documentary media, and spiritual coaching."
      },
      {
        question: "How can February 20 overcome self-judgment?",
        answer: "Practice radical self-compassion and view past mistakes as necessary stepping stones for wisdom."
      }
    ],
    imageBrief: "Inspiring symbolist painting showing an angel sounding a golden horn above a quiet sea as figures rise into radiant light, color palette of golden yellow, pearl white, and seafoam green."
  },
  21: {
    snippetAnswer: "Being born on February 21 connects your life path to Arcana 21 (The World). Resting in early Pisces, February 21 grants a global perspective, a talent for completing major long-term cycles, and bringing international unity to creative and humanitarian endeavors.",
    vignetteTitle: "The Global Envoy: Finalizing International Environmental Treaties",
    vignetteScenario: "Leading a multinational delegation, a February 21 diplomat bridges cultural divides between Eastern and Western delegates, securing a historic global ocean protection pact.",
    birthArchetypeContent: "February 21 individuals channel the holistic completion of Arcana 21 (The World). You are a natural citizen of the world who thinks beyond local boundaries, excelling at bringing projects to full fruition and connecting global communities.",
    highFrequencyExpression: "High frequency yields international success, masterful project completion, cross-cultural communication, and broad humanitarian impact.",
    shadowChallenges: "Shadow patterns include fear of finalizing projects, feeling ungrounded without a sense of home, perfectionist delay, or resisting broad visibility.",
    vocationAndFinance: "Excels as an international diplomat, global trade consultant, travel author, cross-border technology founder, and environmental director. Wealth expands through international markets.",
    reflectionQuestions: [
      "What major cycle or long-term project am I ready to bring to full completion?",
      "How can I expand my vision to embrace a broader global perspective?",
      "Where in my life can I celebrate how far I have traveled on my personal journey?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 21?",
        answer: "February 21 is Pisces, bringing universal empathy, artistic imagination, and oceanic depth to Arcana 21's global completion."
      },
      {
        question: "How does February 21 differ from January 21?",
        answer: "January 21 carries Aquarius intellectual networks, while February 21 carries Pisces universal emotional connection and global harmony."
      },
      {
        question: "What is the financial secret for February 21?",
        answer: "Expanding business operations internationally and offering cross-border digital services."
      },
      {
        question: "Which Arcana complements February 21?",
        answer: "Arcana 10 (Wheel of Fortune) brings smooth cyclical timing to support Arcana 21's global reach."
      }
    ],
    imageBrief: "Regal symbolist illustration of a figure dancing within a wreath of golden laurel leaves surrounded by the four sacred guardians, color palette of royal purple, gold, and deep ocean blue."
  },
  22: {
    snippetAnswer: "Being born on February 22 connects your birth code to Arcana 22 (The Fool / 0) and Master Number 22. Resting in early Pisces, February 22 endows you with a rare capacity for visionary leap-of-faith risks, borderless creative freedom, and building grand dreams from scratch.",
    vignetteTitle: "The Visionary Incubator: Launching Nomadic Tech Sanctuaries",
    vignetteScenario: "Stepping away from a secure corporate vice-presidency, a February 22 founder launches a global network of eco-nomadic co-working incubators, inspiring thousands of remote founders to work sustainably worldwide.",
    birthArchetypeContent: "February 22 individuals carry the pure potential of Arcana 22 (The Fool) combined with Master 22 master-builder energy. You walk life with open wonder, unafraid to start fresh and trust the universe when embarking on uncharted journeys.",
    highFrequencyExpression: "At high frequency, you demonstrate unshakeable trust in life, pioneering original ventures, infinite creative adaptability, and inspiring others to embrace freedom.",
    shadowChallenges: "Shadow patterns include reckless foolish risk-taking, avoiding commitment, ungrounded naivety, or escaping responsibility when challenges arise.",
    vocationAndFinance: "Ideal roles include startup founder, innovation incubator director, travel pioneer, experimental artist, and adventure guide. Wealth grows through high-upside innovative ventures.",
    reflectionQuestions: [
      "What bold leap of faith am I called to take to expand my personal freedom?",
      "Am I balancing my adventurous spirit with practical ground strategy?",
      "Where in my life am I ready to release past baggage and start completely fresh?"
    ],
    faqItems: [
      {
        question: "Why is February 22 a special date in numerology?",
        answer: "February 22 carries the double 22 frequency—the Master Builder number in numerology—paired with Arcana 22 (The Fool), granting potential for monumental visionary leaps."
      },
      {
        question: "What zodiac sign is February 22?",
        answer: "February 22 is Pisces, infusing The Fool's open jump into the unknown with deep intuitive trust and artistic imagination."
      },
      {
        question: "Which careers fit February 22 best?",
        answer: "Venture incubation, startup founding, eco-tourism, digital nomad ventures, and experimental art."
      },
      {
        question: "How can February 22 avoid reckless mistakes?",
        answer: "Ground your bold leaps with thorough risk audits and trusted legal/financial advisors."
      }
    ],
    imageBrief: "Inspiring painting of an adventurous figure standing at a mountain edge at sunrise with a small white dog, gazing at a rainbow over a valley, color palette of gold, turquoise, and coral pink."
  },
  23: {
    snippetAnswer: "Being born on February 23 connects your personal frequency to Arcana 5 (The Hierophant), derived from compound digits 2 (Sensitivity) and 3 (Creative Charm). Resting late in February near the Pisces transition threshold, February 23 blends empathetic wisdom with captivating storytelling.",
    vignetteTitle: "The Compassionate Guide: Healing Relational Divides Through Shared Truths",
    vignetteScenario: "During a sensitive community council meeting, a February 23 facilitator uses poetic storytelling (3) and active empathetic listening (2) to articulate an ethical compromise (5) that unites opposing factions.",
    birthArchetypeContent: "February 23 individuals express Arcana 5 through a deeply empathetic and artistic lens. Unlike early February 5 birthdays, your teaching style is emotional, intuitive, and deeply attuned to human feeling.",
    highFrequencyExpression: "In high frequency, you act as an inspiring mentor, empathetic mediator, gifted writer, and creator of healing educational spaces.",
    shadowChallenges: "Shadow traps include emotional manipulation, altering your message to gain audience approval, or feeling overburdened by others' emotional demands.",
    vocationAndFinance: "Thrives in holistic counseling, literary publishing, creative workshop leadership, and family mediation. Wealth grows through books, podcasts, and advisory services.",
    reflectionQuestions: [
      "Am I sharing my authentic truth even when it feels uncomfortable?",
      "How can I balance my deep emotional empathy with healthy professional boundaries?",
      "What creative message of healing am I ready to publish?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 23?",
        answer: "February 23 falls under Pisces (Water sign), infusing The Hierophant's wisdom with profound emotional empathy and artistic imagination."
      },
      {
        question: "How does February 23 differ from February 5?",
        answer: "February 5 is an Aquarius air date focused on intellectual innovation, while February 23 is a Pisces water date focused on emotional wisdom and compound 2/3 creativity."
      },
      {
        question: "What is the financial secret for February 23?",
        answer: "Building authentic personal brand affinity through inspiring storytelling, books, and private retreats."
      },
      {
        question: "Which Arcana complements February 23 best?",
        answer: "Arcana 18 (The Moon) deepens February 23's intuitive emotional storytelling."
      }
    ],
    imageBrief: "Atmospheric artistic depiction of a wise counselor seated beside a quiet ocean tide under a glowing crescent moon, color palette of ocean teal, pearl, and soft lavender."
  },
  24: {
    snippetAnswer: "Being born on February 24 connects your personal vibration to Arcana 6 (The Lovers), derived from compound digits 2 (Intuition) and 4 (Structural Order). Positioned in late February, February 24 bestows a talent for building lasting emotional contracts and stable creative partnerships.",
    vignetteTitle: "The Partnership Architect: Structuring Sustainable Creative Alliances",
    vignetteScenario: "Drafting a co-production agreement between two international film studios, a February 24 mediator balances artistic freedom (6) with clear financial safeguards (4), resulting in a multi-award winning film partnership.",
    birthArchetypeContent: "February 24 individuals channel Arcana 6 through a practical, grounded framework. Unlike earlier Arcana 6 dates, you do not rely solely on romantic sentiment; you build stable structures that allow long-term love and business partnerships to thrive.",
    highFrequencyExpression: "High frequency yields enduring romantic relationships, solid commercial alliances, exquisite structural design, and diplomatic equilibrium.",
    shadowChallenges: "Shadow patterns include excessive caution in love, sacrificing personal desires to maintain superficial stability, or fear of emotional intimacy.",
    vocationAndFinance: "Ideal roles include partnership strategist, family law attorney, interior architect, wedding designer, and corporate mediator. Wealth grows through stable joint ventures.",
    reflectionQuestions: [
      "Am I building relationships on clear mutual agreements or unspoken expectations?",
      "How can I combine emotional warmth with solid practical boundaries?",
      "What collaborative project am I ready to formalize into a long-term contract?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 24?",
        answer: "February 24 is Pisces, bringing rich emotional intuition and compassionate warmth to Arcana 6's relational focus."
      },
      {
        question: "How does February 24 differ from February 6?",
        answer: "February 6 carries Aquarius air intellect, while February 24 carries Pisces water empathy combined with compound 2+4 structural grounding."
      },
      {
        question: "What is the financial key for February 24?",
        answer: "Forming legally solid, long-term commercial partnerships with trusted co-founders."
      },
      {
        question: "Which Arcana complements February 24?",
        answer: "Arcana 4 (The Emperor) reinforces February 24's demand for structural stability in partnerships."
      }
    ],
    imageBrief: "Warm architectural artwork depicting two hands meeting over a blueprint of a beautiful garden courtyard, color palette of rose gold, sage green, and warm cream."
  },
  25: {
    snippetAnswer: "Being born on February 25 links your life frequency to Arcana 7 (The Chariot), derived from compound digits 2 (Sensitivity) and 5 (Adaptive Freedom). Positioned late in February, February 25 endows you with a compassionate drive to lead humanitarian missions across challenging terrain.",
    vignetteTitle: "The Humanitarian Logistics Chief: Delivering Relief to Remote Regions",
    vignetteScenario: "When a natural disaster cuts off remote mountain villages, a February 25 relief coordinator mobilizes amphibious supply fleets (7). Combining rapid logistics with deep local empathy (2+5), they deliver emergency medical care within 24 hours.",
    birthArchetypeContent: "February 25 individuals channel Arcana 7 through a deeply empathetic and adaptable lens. You drive toward ambitious targets not for personal glory, but to overcome obstacles that stand between communities and vital resources.",
    highFrequencyExpression: "At high frequency, you demonstrate compassionate leadership, rapid crisis logistics, intuitive strategic execution, and mastering conflicting environmental conditions.",
    shadowChallenges: "Shadow expressions include emotional burnout, driving yourself to exhaustion out of savior complex, unchanneled restlessness, or sudden direction changes.",
    vocationAndFinance: "Excels as a humanitarian relief director, oceanic expedition leader, mobile medical pioneer, and emergency response specialist. Wealth builds through mission-driven enterprises.",
    reflectionQuestions: [
      "Am I channeling my intense drive toward a purpose that truly honors my emotional values?",
      "How can I protect my personal energy while serving high humanitarian goals?",
      "What obstacle am I called to navigate with compassionate determination today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 25?",
        answer: "February 25 is Pisces, infusing The Chariot's drive with oceanic empathy, intuitive wisdom, and universal compassion."
      },
      {
        question: "How does February 25 differ from February 7?",
        answer: "February 7 relies on Aquarius clean technological logistics, while February 25 relies on Pisces humanitarian empathy and compound 2+5 adaptability."
      },
      {
        question: "What is the health key for February 25?",
        answer: "Schedule regular water therapy, quiet nature retreats, and strict recovery downtime between missions."
      },
      {
        question: "Which Arcana complements February 25?",
        answer: "Arcana 18 (The Moon) deepens February 25's intuitive navigation in unknown environments."
      }
    ],
    imageBrief: "Inspiring maritime illustration showing a courageous vessel navigating starry ocean waves toward a glowing beacon, color palette of deep sea teal, silver, and radiant gold."
  },
  26: {
    snippetAnswer: "Being born on February 26 connects your birth code to Arcana 8 (Justice), derived from compound digits 2 (Diplomacy) and 6 (Harmonious Values). Positioned late in February, February 26 grants an intuitive gift for bio-ethics, environmental justice, and restoring natural balance.",
    vignetteTitle: "The Bio-Ethics Chair: Establishing Fair Ocean Conservation Protocols",
    vignetteScenario: "Presiding over an international marine ethics board, a February 26 scholar drafts a balanced agreement (8) that protects ocean biodiversity while allowing local coastal communities sustainable fishing rights.",
    birthArchetypeContent: "February 26 individuals channel Arcana 8 through a deeply compassionate and systemic lens. You understand that true justice is not cold legalism, but a living balance that honors human dignity, environmental integrity, and karmic truth.",
    highFrequencyExpression: "High frequency yields ethical legal advocacy, bio-environmental balance, fair dispute resolution, and protecting vulnerable ecosystems.",
    shadowChallenges: "Shadow patterns include holding silent emotional grudges, feeling overly responsible for world injustices, legalistic rigidity, or suppressing personal needs.",
    vocationAndFinance: "Ideal roles include bio-ethics chair, environmental lawyer, ocean conservation strategist, human rights mediator, and policy auditor. Wealth expands through ethical green ventures.",
    reflectionQuestions: [
      "Where in my life can I restore living balance between head intellect and heart compassion?",
      "Am I releasing past emotional debts rather than keeping silent score?",
      "What ethical standard am I called to champion in my community today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 26?",
        answer: "February 26 is Pisces, giving oceanic empathy and deep intuitive wisdom to Arcana 8's legal precision."
      },
      {
        question: "How does February 26 differ from February 8?",
        answer: "February 8 focuses on Aquarius corporate tech compliance, while February 26 focuses on Pisces bio-ethics, ocean conservation, and relational harmony."
      },
      {
        question: "What is the financial engine for February 26?",
        answer: "Investing in sustainable green technology, eco-friendly real estate, and ethical funds."
      },
      {
        question: "Which Arcana complements February 26?",
        answer: "Arcana 14 (Temperance) enhances February 26's natural capacity for diplomatic synthesis."
      }
    ],
    imageBrief: "Poetic artwork depicting a figure holding scales submerged in a calm ocean tide under a starlit sky, color palette of aquamarine, emerald green, and silver."
  },
  27: {
    snippetAnswer: "Being born on February 27 links your personal vibration to Arcana 9 (The Hermit), derived from compound digits 2 (Intuition) and 7 (Analytical Focus). Resting late in February, February 27 endows you with a profound talent for marine research, solitary artistic creation, and intuitive wisdom.",
    vignetteTitle: "The Deep-Sea Biologist: Mapping Unexplored Ocean Trenches",
    vignetteScenario: "Spending months aboard a solitary research vessel, a February 27 marine biologist documents dozens of undiscovered deep-sea species. Their published findings revolutionize marine biology research worldwide.",
    birthArchetypeContent: "February 27 individuals carry the lantern of Arcana 9 (The Hermit) deep into the intuitive waters of late February. You possess a quiet, contemplative mind that finds peace in solitude, synthesizing complex data with profound inner knowing.",
    highFrequencyExpression: "At high frequency, you excel in deep scientific research, poetic literature, spiritual study, intuitive analysis, and illuminating hidden mysteries.",
    shadowChallenges: "Shadow expressions include melancholic isolation, fear of social engagement, withholding your insights out of insecurity, or brooding over emotional wounds.",
    vocationAndFinance: "Excels as a marine biologist, solitary poet, depth psychologist, oceanographer, and spiritual researcher. Revenue expands through specialized niche publishing and expert consulting.",
    reflectionQuestions: [
      "Am I using my quiet solitude to recharge my spirit or to isolate from loved ones?",
      "How can I translate my deep inner insights into accessible wisdom for others?",
      "What quiet creative pursuit am I called to dedicate myself to today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 27?",
        answer: "February 27 is Pisces, blending oceanic depth, emotional intuition, and artistic sensitivity with The Hermit's contemplative search."
      },
      {
        question: "How does February 27 differ from February 9?",
        answer: "February 9 carries Aquarius air data science, while February 27 carries Pisces oceanic biology, poetic literature, and compound 2+7 intuitive research."
      },
      {
        question: "Why does February 27 thrive in quiet environments?",
        answer: "Quiet environments allow February 27 to tune into subtle intuitive frequencies that are obscured by noisy social settings."
      },
      {
        question: "Which Arcana complements February 27?",
        answer: "Arcana 18 (The Moon) deepens February 27's natural gift for exploring subconscious and oceanic depths."
      }
    ],
    imageBrief: "Atmospheric illustration of a cloaked researcher holding a glowing pearl lantern at the edge of a quiet ocean bay under a starry sky, color palette of deep ocean indigo, pearl white, and gold."
  },
  28: {
    snippetAnswer: "Being born on February 28 connects your life path to Arcana 10 (Wheel of Fortune), derived from compound digits 2 (Receptivity) and 8 (Executive Power). Positioned at the culmination of February, February 28 grants an intuitive rhythm for financial cycles and climate tech investments.",
    vignetteTitle: "The Climate Tech Investor: Funding Next-Generation Energy Grids",
    vignetteScenario: "At the close of February financial quarters, a February 28 venture strategist redirects capital into ocean-energy tech. The market turns dramatically in their favor, generating record returns while advancing global decarbonization.",
    birthArchetypeContent: "February 28 individuals embody the dynamic rhythm of Arcana 10 (Wheel of Fortune) fused with Pisces intuitive foresight and compound 2+8 executive ambition. You possess a knack for sensing economic turning points before they manifest publicly.",
    highFrequencyExpression: "High frequency yields effortless market timing, visionary venture capital investment, financial adaptability, and leveraging momentum for sustainable progress.",
    shadowChallenges: "Shadow patterns include anxiety during slow market cycles, financial gambling, resisting necessary transitions, or over-committing resources.",
    vocationAndFinance: "Ideal roles include climate tech investor, financial market strategist, sustainability economist, and venture capital chair. Wealth accelerates through multi-cycle equity holdings.",
    reflectionQuestions: [
      "Am I trusting life's natural economic cycles or trying to force immediate financial timing?",
      "How can I use current high momentum to fund enduring eco-friendly ventures?",
      "What recurring financial pattern am I ready to master today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is February 28?",
        answer: "February 28 is Pisces, giving deep intuitive foresight and universal empathy to Arcana 10's cyclical financial timing."
      },
      {
        question: "How does February 28 differ from February 10?",
        answer: "February 10 carries Aquarius tech forecasting, while February 28 carries Pisces ocean/climate funding and compound 2+8 executive power."
      },
      {
        question: "What is the financial rule for February 28?",
        answer: "Invest in high-impact sustainable technologies that ride long-term macroeconomic cycles."
      },
      {
        question: "Which Arcana complements February 28?",
        answer: "Arcana 21 (The World) expands February 28's financial ventures onto a global stage."
      }
    ],
    imageBrief: "Regal symbolic illustration of a golden wheel turning above a calm ocean with stars reflecting in the water, color palette of gold, deep cyan, and bronze."
  },
  29: {
    snippetAnswer: "Being born on February 29 activates the rare Master Number 11 frequency under Arcana 11 (Strength), derived from compound digits 2 (Intuition) and 9 (Universal Compassion). Occurring only on leap years, February 29 endows you with extraordinary spiritual resilience, rare visionary perspective, and the power to master life's greatest challenges.",
    vignetteTitle: "The Leap Year Catalyst: Turning Rare Adversity Into Historic Triumph",
    vignetteScenario: "Faced with a once-in-a-decade crisis that threatens an entire industry sector, a February 29 leader steps into the breach. Combining rare intuitive foresight (2) with selfless dedication (9), they forge a groundbreaking recovery framework (11) that saves thousands of jobs.",
    birthArchetypeContent: "February 29 individuals possess a unique, rare destiny code governed by Master 11 and Arcana 11 (Strength). Born on the quadrennial leap day, you exist outside ordinary rhythm, granting you an uncanny ability to see beyond conventional limitations.",
    highFrequencyExpression: "At constructive high frequency, you demonstrate quiet heroic endurance, spiritual illumination, effortless charisma, and transforming intense pressure into monumental achievement.",
    shadowChallenges: "Shadow patterns include feeling isolated by your unique nature, intense inner tension, sudden emotional outbursts, or withdrawing from society out of feeling misunderstood.",
    vocationAndFinance: "Excels as a pioneer in emergency medicine, high-stakes crisis leadership, visionary inventions, human rights advocacy, and high-performance coaching. Financial expansion flows through rare specialized ventures.",
    reflectionQuestions: [
      "How can I honor the rare unique gift of my birth code without feeling isolated?",
      "Where in my life can I apply gentle inner fortitude instead of defensive force?",
      "What monumental goal am I ready to commit to during this leap cycle?"
    ],
    faqItems: [
      {
        question: "What makes a February 29 birthday unique in Destiny Matrix?",
        answer: "February 29 only occurs on leap years. It carries the Master 11 frequency (2+9=11) and Arcana 11 (Strength), granting extraordinary spiritual power and unique perspective."
      },
      {
        question: "What zodiac sign is February 29?",
        answer: "February 29 is Pisces (Water sign), adding mystical intuition and universal compassion to Arcana 11's intense spiritual strength."
      },
      {
        question: "How does February 29 differ from February 11?",
        answer: "February 11 is an Aquarius date focused on intellectual innovation, while February 29 is a rare Pisces leap day carrying compound 2+9 universal empathy."
      },
      {
        question: "What is the primary spiritual advice for leap year birthdays?",
        answer: "Embrace your rare destiny path and use your intuitive power to serve high humanitarian ideals."
      }
    ],
    imageBrief: "Majestic symbolic illustration of a golden lion crowned with glowing stars emerging from a serene waterfall at dawn, color palette of radiant gold, violet, and deep indigo."
  }
};

export function getFebruaryProfile(day: number): BirthdayProfileData {
  const custom = FEBRUARY_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `February ${day}`;
  const slug = `february-${day}`;

  const phaseText = day <= 10 ? 'early-winter Imbolc emergence' : day <= 20 ? 'mid-February heart and stabilization phase' : 'late-February pre-spring acceleration';
  const seasonalPhrase = `late-winter reflection and emerging clarity during the ${phaseText} of February`;
  const seasonalContext = `Late-winter transition and emerging clarity mark the ${phaseText} of February.`;
  const dayVibrationNote = `${formattedDate} combines ${seasonalPhrase} with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 31 : day - 1;
  const nextDay = day === 29 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'January 31' : `February ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 31 ? "Month-end consolidation" : "Prior day energy focus",
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
      dateLabel: day === 29 ? 'March 1' : `February ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: "Subsequent integration phase",
      bestFocus: "Expanding into next day's growth",
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} momentum.`
    }
  ];

  return {
    slug,
    month: 'February',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of late-winter February focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
    vignetteTitle: custom?.vignetteTitle || `The ${formattedDate} Catalyst: Navigating ${primaryArcana.name} Energy`,
    vignetteScenario: custom?.vignetteScenario || `In a key moment of decision, someone born on ${formattedDate} steps forward to apply the ${primaryArcana.archetype.toLowerCase()} lessons of Arcana ${primaryArcanaNum}, turning a routine challenge into a major breakthrough.`,
    birthArchetypeContent: custom?.birthArchetypeContent || `Individuals born on ${formattedDate} embody the core qualities of Arcana ${primaryArcanaNum} (${primaryArcana.name}). You possess a natural drive to master your environment, apply structured discipline, and express your authentic talents.`,
    comparisonTable,
    highFrequencyExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenges: custom?.shadowChallenges || primaryArcana.shadowExpression,
    vocationAndFinance: custom?.vocationAndFinance || `${primaryArcana.careerGuidance} ${primaryArcana.moneyChannel}`,
    reflectionQuestions: custom?.reflectionQuestions || [
      `How can I align with the ${phaseText} of February to support my goals?`,
      `In what ways does ${primaryArcana.name} encourage me to express ${primaryArcana.archetype.toLowerCase()} today?`,
      `What specific practice will help me anchor constructive high frequency in my daily routine?`
    ],
    faqItems: custom?.faqItems || [
      {
        question: `What zodiac sign is ${formattedDate}?`,
        answer: day <= 18 ? `${formattedDate} falls under Aquarius (Air sign), bringing visionary innovation and social progress.` : `${formattedDate} falls under Pisces (Water sign), bringing deep intuition, empathy, and artistic vision.`
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
