import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const APRIL_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Being born on April 1 connects your core frequency to Arcana 1 (The Magician). Opening April with Aries fire energy, April 1 endows you with unshakeable pioneer initiative, sharp mental clarity, and the courage to launch original tech and creative enterprises.",
    vignetteTitle: "The April Fool's Innovator: Turning Audacious Ideas into Market Hits",
    vignetteScenario: "On April 1, a software founder launches a radical AI assistant tool initially mistaken for a joke. The tool's instant technical success captures national tech headlines and secures Series-A funding.",
    birthArchetypeContent: "April 1 individuals combine the active initiation of Arcana 1 (The Magician) with Aries pioneering fire. You possess a bold mindset, converting abstract ideas into tangible commercial successes with infectious enthusiasm.",
    highFrequencyExpression: "Operating in high light, you demonstrate pioneering product launches, rapid prototype design, confident public speaking, and inspiring entrepreneurial courage.",
    shadowChallenges: "Under shadow friction, you may become impatient with slow execution, act impulsively without team consultation, or abandon projects after the initial launch excitement wanes.",
    vocationAndFinance: "Excels as a tech startup founder, product strategist, venture innovator, media publisher, and creative director. Wealth grows through founding disruptive enterprises.",
    reflectionQuestions: [
      "Am I sustaining my long-term project execution after the thrill of the initial launch?",
      "How can I channel my pioneer energy to inspire and support my team?",
      "What bold original creation am I ready to introduce to the world today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 1?",
        answer: "April 1 is Aries (Fire sign), infusing The Magician's creative initiation with bold pioneer drive."
      },
      {
        question: "How does April 1 differ from January 1, February 1, and March 1?",
        answer: "April 1 carries Aries fire initiation, April Fool's disruptive innovation, and high-tempo software startup founding."
      },
      {
        question: "What is the financial engine for April 1?",
        answer: "Founding and monetizing original technological platforms and disruptive consumer software."
      },
      {
        question: "Which Arcana complements April 1 best?",
        answer: "Arcana 19 (The Sun) amplifies April 1's radiant visibility and commercial success."
      }
    ],
    imageBrief: "Dynamic illustration of a confident figure standing at a high-tech workshop surrounded by glowing holographic blueprints under Aries spring sunlight, color palette of crimson, gold, and royal violet."
  },
  2: {
    snippetAnswer: "Being born on April 2 links your life path to Arcana 2 (The High Priestess). Positioned in early April, April 2 grants quiet strategic intuition, deep psychological insight, and an instinct for reading subtle organizational dynamics.",
    vignetteTitle: "The Strategic Corporate Advisor: Uncovering Hidden Market Risk",
    vignetteScenario: "Advising a merger board on April 2, a corporate strategist perceives subtle financial inconsistencies overlooked by auditors. Their private counsel saves the client firm from a costly bad acquisition.",
    birthArchetypeContent: "April 2 individuals fuse the reflective wisdom of Arcana 2 (The High Priestess) with Aries strategic focus. You look beyond surface appearances, relying on quiet perceptive discernment to guide complex executive decisions.",
    highFrequencyExpression: "In harmonious mastery, you bring confidential executive advisory, subtle financial risk detection, quiet psychological discernment, and unshakeable inner discretion.",
    shadowChallenges: "When out of alignment, you may suffer from internal anxiety spikes, withholding vital advice out of hesitation, or retreating into secretive isolation.",
    vocationAndFinance: "Ideal for confidential corporate advisors, strategic risk consultants, forensic intelligence analysts, and depth psychologists. Financial rewards come from high-value retainer advisory.",
    reflectionQuestions: [
      "Am I trusting my subtle intuitive warnings before signing major commercial deals?",
      "How can I communicate confidential insights with constructive clarity?",
      "What quiet reflection time do I need to clear my strategic vision today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 2?",
        answer: "April 2 is Aries, giving strategic focus and intellectual drive to The High Priestess's quiet inner wisdom."
      },
      {
        question: "How does April 2 differ from March 2?",
        answer: "March 2 carries Pisces oceanographic research, while April 2 carries Aries corporate risk strategy and executive advisory focus."
      },
      {
        question: "What is the key to success for April 2?",
        answer: "Providing high-value confidential risk analysis to corporate leaders."
      },
      {
        question: "Which Arcana complements April 2?",
        answer: "Arcana 8 (Justice) provides legal backing to support Arcana 2's perceptive insights."
      }
    ],
    imageBrief: "Mystical symbolist painting of a calm figure seated between marble pillars examining a glowing parchment map of star constellations, color palette of midnight blue, silver, and gold."
  },
  3: {
    snippetAnswer: "Being born on April 3 connects your personal frequency to Arcana 3 (The Empress). Resting in early April, April 3 bestows a fertile creative vision, luxury brand flair, and a natural talent for cultivating high-end horticultural and lifestyle design enterprises.",
    vignetteTitle: "The Luxury Landscape Architect: Designing Eco-Resort Conservatories",
    vignetteScenario: "Designing a world-class eco-resort conservatory, an April 3 landscape architect integrates rare native flora with sustainable architecture. Their design wins international environmental design awards.",
    birthArchetypeContent: "April 3 individuals express the fertile majesty of Arcana 3 (The Empress) through Aries energetic drive. You possess an eye for luxury aesthetics, organic beauty, and scaling lifestyle ventures into profitable commercial brands.",
    highFrequencyExpression: "In active light, you demonstrate eco-resort landscape architecture, luxury brand development, environmental aesthetic mastery, and prosperous hospitality leadership.",
    shadowChallenges: "Shadow expressions include luxury over-spending, emotional possessiveness over design projects, or impatience during slow construction phases.",
    vocationAndFinance: "Excels as a luxury landscape architect, eco-resort designer, lifestyle brand founder, hospitality director, and aesthetic curator. Prosperity grows through high-end design contracts.",
    reflectionQuestions: [
      "How can I bring more natural harmony and aesthetic richness into my projects?",
      "Am I balancing my love for luxury with practical financial discipline?",
      "What creative enterprise am I ready to cultivate into a thriving brand today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 3?",
        answer: "April 3 is Aries (Fire sign), bringing passionate energy and executive drive to The Empress's creative fertility."
      },
      {
        question: "How does April 3 differ from March 3?",
        answer: "March 3 carries Pisces ocean botanical curation, while April 3 carries Aries luxury eco-resort landscape architecture and lifestyle branding."
      },
      {
        question: "What is the primary money engine for April 3?",
        answer: "Designing luxury lifestyle and eco-hospitality environments that command premium market value."
      },
      {
        question: "Which Arcana complements April 3?",
        answer: "Arcana 4 (The Emperor) provides structural execution to anchor Arcana 3's aesthetic visions."
      }
    ],
    imageBrief: "Lush architectural painting of a sunlit eco-resort glass conservatory surrounded by spring gardens, color palette of emerald green, golden sunlight, and terracotta."
  },
  4: {
    snippetAnswer: "Being born on April 4 links your life vibration to Arcana 4 (The Emperor). Compound double-4 energy endows April 4 with formidable structural engineering, project management mastery, and building resilient industrial infrastructure.",
    vignetteTitle: "The Industrial Infrastructure Engineer: Building Resilient Transit Networks",
    vignetteScenario: "Directing a major high-speed rail construction project, an April 4 civil engineer coordinates complex logistics across three provinces. Their strict budgetary oversight delivers the transit line ahead of schedule.",
    birthArchetypeContent: "April 4 individuals combine the sovereign governance of Arcana 4 (The Emperor) with double-4 structural discipline and Aries fire leadership. You build indestructible organizational frameworks and large-scale public infrastructure.",
    highFrequencyExpression: "In active executive light, you bring high-speed transit engineering, industrial project management, disciplined budget execution, and building resilient infrastructure.",
    shadowChallenges: "In shadow, you might exhibit stubborn inflexibility, harsh labor management, micro-managing site engineers, or resisting modern digital upgrades.",
    vocationAndFinance: "Ideal for high-speed transit engineers, industrial construction directors, infrastructure project managers, civil defense leads, and operations vice presidents. Wealth builds through heavy industrial equity.",
    reflectionQuestions: [
      "Am I leading my engineering teams with empowering clarity or rigid micro-management?",
      "Where in my operational systems can I build greater long-term resilience?",
      "What enduring industrial foundation am I establishing for the community?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 4?",
        answer: "April 4 is Aries, infusing double-4 structural discipline with bold executive leadership."
      },
      {
        question: "Why is April 4 a double-4 birthday?",
        answer: "Month 4 and Day 4 create double-4 energy, double-anchoring Arcana 4's executive discipline and engineering precision."
      },
      {
        question: "Which careers suit April 4 best?",
        answer: "Industrial civil engineering, high-speed transit construction, infrastructure management, and heavy industry operations."
      },
      {
        question: "How can April 4 maintain leadership balance?",
        answer: "Pair strict project milestones with open communication and team appreciation."
      }
    ],
    imageBrief: "Commanding industrial graphic showing an engineer in protective gear standing over a blueprint of a modern high-speed transit bridge at sunrise, color palette of steel blue, bronze, and gold."
  },
  5: {
    snippetAnswer: "Being born on April 5 connects your core frequency to Arcana 5 (The Hierophant). Resting in early April, April 5 bestows a passion for educational reform, executive mentoring, and authoring modern corporate ethics frameworks.",
    vignetteTitle: "The Educational Reformer: Launching Modern Corporate Ethics Academies",
    vignetteScenario: "Establishing an executive ethics academy on April 5, an educator designs interactive training programs for tech leaders. Their curriculum becomes mandatory training for top international corporations.",
    birthArchetypeContent: "April 5 individuals express the master teacher frequency of Arcana 5 (The Hierophant) with Aries pioneering fire. You excel at taking traditional wisdom and converting it into high-tempo educational platforms that transform corporate mindsets.",
    highFrequencyExpression: "Operating in high alignment, you excel at corporate ethics curriculum design, executive mentoring academies, publishing leadership standards, and inspiring educational reform.",
    shadowChallenges: "Under shadow stress, you may succumb to academic dogmatism, preaching standards you do not live by, or reacting defensively to student critiques.",
    vocationAndFinance: "Thrives as an educational reform founder, executive academy director, corporate ethics chair, leadership author, and university dean. Prosperity flows through academy licensing fees.",
    reflectionQuestions: [
      "Am I teaching from lived experience and personal ethical integrity?",
      "How can I modernize educational models to better serve future leaders?",
      "What core leadership standard am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 5?",
        answer: "April 5 is Aries (Fire sign), bringing energetic drive and pioneer initiative to The Hierophant's educational mission."
      },
      {
        question: "How does April 5 differ from March 5?",
        answer: "March 5 carries Pisces ancient manuscript translation, while April 5 carries Aries corporate ethics academies and educational reform."
      },
      {
        question: "What is the financial model for April 5?",
        answer: "Licensing corporate ethics training curricula and running executive leadership academies."
      },
      {
        question: "Which Arcana complements April 5?",
        answer: "Arcana 19 (The Sun) amplifies April 5's public educational visibility and keynote presence."
      }
    ],
    imageBrief: "Inspiring illustration of an educator presenting a modern digital ethics lecture in a sunlit university auditorium, color palette of deep navy, gold, and crimson."
  },
  6: {
    snippetAnswer: "Being born on April 6 links your birth code to Arcana 6 (The Lovers). Resting in early April, April 6 grants a natural talent for high-stakes brand mergers, creative agency partnerships, and negotiating aesthetic commercial contracts.",
    vignetteTitle: "The Brand Merger Strategist: Unifying Creative Agencies",
    vignetteScenario: "Brokering a multi-million-dollar merger between two top design agencies, an April 6 executive crafts a deal that preserves creative autonomy while doubling global market reach.",
    birthArchetypeContent: "April 6 individuals channel the relational harmony of Arcana 6 (The Lovers) with Aries passionate drive. You possess an instinct for bringing top creative talent together, structuring commercial partnerships that yield mutual growth.",
    highFrequencyExpression: "In active light, you demonstrate creative agency merger strategy, brand partnership negotiation, aesthetic contract design, and resolving commercial deadlocks.",
    shadowChallenges: "Shadow patterns include over-analyzing contract terms, fearing loss of individual creative control, or making codependent compromises to avoid tension.",
    vocationAndFinance: "Ideal for brand merger strategists, creative agency partners, design directors, entertainment talent agents, and partnership attorneys. Wealth expands through equity in merged agencies.",
    reflectionQuestions: [
      "Am I structuring partnerships based on clear mutual value or quick compromise?",
      "How can I preserve my core creative vision while building collaborative alliances?",
      "What commercial partnership am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 6?",
        answer: "April 6 is Aries, infusing Arcana 6's partnership focus with bold commercial drive and agency ambition."
      },
      {
        question: "How does April 6 differ from March 6?",
        answer: "March 6 carries Pisces relationship therapy, while April 6 carries Aries commercial brand agency mergers and entertainment talent negotiation."
      },
      {
        question: "What is the financial key for April 6?",
        answer: "Structuring high-value creative agency mergers and long-term brand equity contracts."
      },
      {
        question: "Which Arcana complements April 6?",
        answer: "Arcana 4 (The Emperor) provides structural governance to anchor Arcana 6's commercial deals."
      }
    ],
    imageBrief: "Modern graphic depicting two agency leaders shaking hands under a golden archway with sleek modern architectural background, color palette of crimson, gold, and slate grey."
  },
  7: {
    snippetAnswer: "Being born on April 7 connects your personal vibration to Arcana 7 (The Chariot). Positioned in early April, April 7 endows you with explosive speed, competitive drive, and a talent for leading automotive motorsport engineering and racing teams.",
    vignetteTitle: "The Motorsport Chief Engineer: Winning Electric Regattas & Grand Prix",
    vignetteScenario: "Chief engineer for an electric motorsport team, an April 7 designer optimizes battery thermal dynamics minutes before a race. Their vehicle breaks lap records to win the international championship.",
    birthArchetypeContent: "April 7 individuals embody the forward momentum of Arcana 7 (The Chariot) fused with Aries competitive fire. You thrive in high-speed, high-intensity environments, mastering complex mechanical variables to cross the finish line first.",
    highFrequencyExpression: "Operating in active competitive light, you demonstrate electric motorsport engineering, rapid lap optimization, high-speed team leadership, and winning international racing titles.",
    shadowChallenges: "Under shadow stress, you might suffer from aggressive driving, impatience with pit crew mistakes, or risking mechanical failure by over-pushing equipment.",
    vocationAndFinance: "Excels as a motorsport chief engineer, electric vehicle designer, racing team director, high-speed transport developer, and performance lead. Wealth grows through racing victory bonuses.",
    reflectionQuestions: [
      "Am I balancing high-speed execution with necessary mechanical and physical maintenance?",
      "How can I inspire my pit crew to excel without creating high-stress pressure?",
      "What competitive goal am I committed to conquering this season?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 7?",
        answer: "April 7 is Aries (Fire sign), bringing intense competitive drive and high-speed energy to Arcana 7."
      },
      {
        question: "How does April 7 differ from March 7?",
        answer: "March 7 carries Pisces ocean sailing regattas, while April 7 carries Aries electric motorsport engineering and high-speed Grand Prix racing."
      },
      {
        question: "What is the performance secret for April 7?",
        answer: "Rigorous thermal management and high-precision telemetry analysis before race day."
      },
      {
        question: "Which Arcana complements April 7?",
        answer: "Arcana 11 (Strength) provides physical and mechanical stamina to support Arcana 7's rapid speed."
      }
    ],
    imageBrief: "Dynamic motorsport graphic of a futuristic electric racing car speeding across a finish line under evening stadium lights, color palette of electric blue, crimson, and gold."
  },
  8: {
    snippetAnswer: "Being born on April 8 links your birth vibration to Arcana 8 (Justice). Positioned in early April, April 8 bestows a sharp mind for corporate antitrust law, financial regulatory compliance, and auditing large-scale commercial mergers.",
    vignetteTitle: "The Antitrust Regulatory Lead: Auditing Global Tech Mergers",
    vignetteScenario: "Heading a regulatory review panel, an April 8 attorney audits a mega-merger between two tech giants. Enforcing strict consumer protection rules, they mandate open API standards to ensure fair market competition.",
    birthArchetypeContent: "April 8 individuals channel the objective balance of Arcana 8 (Justice) through Aries intellectual courage. You possess a razor-sharp mind that uncovers regulatory loopholes, standing up for fair trade, antitrust compliance, and systemic commercial balance.",
    highFrequencyExpression: "In active legal mastery, you demonstrate tech antitrust litigation, corporate regulatory compliance, objective merger auditing, and protecting open market competition.",
    shadowChallenges: "Shadow patterns show up as harsh perfectionist criticism, legalistic inflexibility, score-keeping in business alliances, or ignoring human factors in audits.",
    vocationAndFinance: "Ideal for corporate antitrust attorneys, regulatory compliance directors, tech merger auditors, fair-trade commissioners, and policy leads. Prosperity expands through corporate regulatory retains.",
    reflectionQuestions: [
      "Am I applying objective fairness to my internal team as well as external audits?",
      "Where in my business transactions can I establish complete transparency?",
      "What regulatory compliance boundary needs clear enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 8?",
        answer: "April 8 is Aries, giving courageous intellectual independence to Arcana 8's legal precision."
      },
      {
        question: "How does April 8 differ from March 8?",
        answer: "March 8 carries Pisces human rights labor standards, while April 8 carries Aries tech antitrust litigation and corporate merger compliance."
      },
      {
        question: "What is the financial rule for April 8?",
        answer: "Maintain absolute regulatory compliance in all corporate acquisitions and commercial contracts."
      },
      {
        question: "Which Arcana complements April 8?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 8's high-stakes legal cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing before a sleek glass skyscraper court building, color palette of deep crimson, steel grey, and white."
  },
  9: {
    snippetAnswer: "Being born on April 9 connects your life path to Arcana 9 (The Hermit). Approaching mid-April, April 9 endows you with a talent for solitary artificial intelligence research, deep algorithmic analysis, and pioneering breakthrough data models.",
    vignetteTitle: "The AI Research Pioneer: Developing Next-Gen Neural Architectures",
    vignetteScenario: "Working in solitary focus at a research lab, an April 9 computer scientist develops a novel neural network architecture. Their breakthrough reduces AI energy consumption by 80%, transforming green computing.",
    birthArchetypeContent: "April 9 individuals carry Arcana 9 into the domain of high-performance artificial intelligence and computer science. You require quiet solitary focus to solve complex mathematical problems, using Aries pioneer drive to illuminate technological breakthroughs.",
    highFrequencyExpression: "In active scientific light, you excel in AI neural network research, solitary algorithm design, green computing innovation, and authoring seminal computer science papers.",
    shadowChallenges: "In shadow, you might retreat into cynical isolation, hoard intellectual breakthroughs out of distrust, or show impatience toward non-technical peers.",
    vocationAndFinance: "Suited for AI research scientists, neural network architects, green computing leads, theoretical computer scientists, and algorithm authors. Income grows through tech patent licensing.",
    reflectionQuestions: [
      "Am I balancing my solitary research focus with collaborative sharing?",
      "How can I apply my technical breakthroughs to serve broader environmental goals?",
      "What complex algorithm am I called to solve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 9?",
        answer: "April 9 is Aries, blending bold pioneer curiosity with The Hermit's contemplative research focus."
      },
      {
        question: "How does April 9 differ from March 9?",
        answer: "March 9 carries Pisces ocean meteorology, while April 9 carries Aries AI neural architecture research and green computing."
      },
      {
        question: "Why does April 9 require quiet focus?",
        answer: "Solitude allows April 9 to process deep algorithmic calculations without digital and social noise."
      },
      {
        question: "Which Arcana complements April 9?",
        answer: "Arcana 1 (The Magician) provides creative initiation to launch April 9's research discoveries."
      }
    ],
    imageBrief: "Mystical portrait of a researcher examining glowing golden neural network equations on a dark glass screen in a quiet observatory lab, color palette of deep navy, gold, and electric cyan."
  },
  10: {
    snippetAnswer: "Being born on April 10 links your birth frequency to Arcana 10 (Wheel of Fortune). Closing the first decade of April, April 10 grants an intuitive rhythm for tech stock cycles, venture market timing, and scaling fast-growth startups.",
    vignetteTitle: "The Tech Venture Trader: Timing Innovation Investment Cycles",
    vignetteScenario: "Analyzing macroeconomic tech trends on April 10, a venture capitalist identifies an upcoming boom in quantum computing. Directing capital into early startups, they capture historic Q2 portfolio gains.",
    birthArchetypeContent: "April 10 individuals combine Arcana 10's cycle timing with Aries quantum tech startup drive. You excel at funding emerging technology ventures before public market surges.",
    highFrequencyExpression: "In active capital movement, you excel at quantum technology seed investment, scaling tech portfolios, timing market waves, and early-stage startup funding.",
    shadowChallenges: "Shadow manifestations include financial gambling, impatience during market consolidations, over-leveraging fund assets, or failing to build solid operational backbones.",
    vocationAndFinance: "Performs with distinction as a quantum tech fund director, startup equity manager, venture investor, and market timing strategist. Wealth accelerates through venture equity compounding.",
    reflectionQuestions: [
      "Am I flowing adaptively with market cycles or trying to force immediate returns?",
      "How can I use current high momentum to build lasting enterprise security?",
      "What repeating investment pattern am I ready to master today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 10?",
        answer: "April 10 is Aries (Fire sign), giving bold pioneer drive and financial ambition to Arcana 10's market timing."
      },
      {
        question: "How does April 10 differ from March 10?",
        answer: "March 10 carries Pisces agricultural commodities trading, while April 10 carries Aries tech stock cycle timing and quantum venture capital."
      },
      {
        question: "What is the financial superpower of April 10?",
        answer: "Timing tech market inflection points and funding high-upside quantum ventures early."
      },
      {
        question: "Which Arcana complements April 10?",
        answer: "Arcana 21 (The World) expands April 10's venture portfolio onto an international global stage."
      }
    ],
    imageBrief: "Symbolic graphic of a luminous golden wheel turning over a glowing digital circuit board under a starlit galaxy, color palette of gold, crimson, and deep navy."
  },
  11: {
    snippetAnswer: "Being born on April 11 activates Master Number 11 frequency under Arcana 11 (Strength). Moving through mid-April, April 11 endows you with extraordinary physical endurance, athletic performance coaching mastery, and crisis resilience.",
    vignetteTitle: "The Olympic Performance Coach: Training Elite Endurance Athletes",
    vignetteScenario: "Coaching an Olympic marathon runner, an April 11 sports scientist uses biomechanical analysis and mental conditioning to help the athlete break a world record under intense heat conditions.",
    birthArchetypeContent: "April 11 individuals carry the master energy of Arcana 11 (Strength) with Aries competitive physical drive. You possess an immense reservoir of physical stamina, intuitive focus, and the ability to inspire peak athletic performance under extreme pressure.",
    highFrequencyExpression: "Demonstrating master alignment, you excel at Olympic athletic performance coaching, sports biomechanics, crisis resilience, and empowering elite performers.",
    shadowChallenges: "Under shadow pressure, you might suffer from physical over-training, aggressive impatience with struggling athletes, or suppressing nervous fatigue.",
    vocationAndFinance: "Excels as an Olympic performance coach, sports biomechanist, athletic director, high-altitude training founder, and physical rehab chief. Wealth grows through high-performance coaching retains.",
    reflectionQuestions: [
      "Am I balancing my intense physical drive with necessary recovery and sleep hygiene?",
      "How can I inspire my athletes to reach peak performance without physical injury?",
      "What physical or mental barrier am I ready to overcome today?"
    ],
    faqItems: [
      {
        question: "Is April 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, granting extraordinary spiritual intuition, charisma, and physical endurance."
      },
      {
        question: "What zodiac sign is April 11?",
        answer: "April 11 is Aries, adding passionate physical energy and competitive drive to Arcana 11's intense strength."
      },
      {
        question: "How does April 11 differ from March 11?",
        answer: "March 11 carries Pisces wildlife apex predator conservation, while April 11 carries Aries Olympic athletic performance coaching and sports biomechanics."
      },
      {
        question: "What is the health key for April 11?",
        answer: "Regular nervous system regulation practices and systematic sleep recovery between intense training cycles."
      }
    ],
    imageBrief: "Inspiring illustration of an athlete standing atop a mountain stadium at sunrise under a golden star halo, color palette of crimson, gold, and white."
  },
  12: {
    snippetAnswer: "Being born on April 12 links your life vibration to Arcana 12 (The Hanged Man). Moving through mid-April, April 12 grants a unique capacity for innovative perspective shifts, non-profit social advocacy, and reversing conventional business models.",
    vignetteTitle: "The Circular Economy Director: Reversing Linear Manufacturing",
    vignetteScenario: "Redesigning a consumer electronics company's supply chain, an April 12 director replaces linear waste models with a 100% circular take-back program, cutting raw material costs while eliminating landfill waste.",
    birthArchetypeContent: "April 12 individuals embody the visionary surrender of Arcana 12 (The Hanged Man) fused with Aries pioneering drive. You excel at turning problems upside down, finding revolutionary solutions where others see dead ends.",
    highFrequencyExpression: "In high creative light, you demonstrate circular economy manufacturing design, inverted supply chain innovation, non-profit social advocacy, and radical perspective shifts.",
    shadowChallenges: "Shadow patterns show up as feeling martyred by corporate pushback, lingering in strategic indecision, or sacrificing financial stability for ungrounded ideals.",
    vocationAndFinance: "Ideal for circular economy directors, zero-waste supply chain architects, non-profit founders, innovation strategists, and sustainability directors. Wealth grows through circular business models.",
    reflectionQuestions: [
      "What current operational problem requires me to flip my perspective completely?",
      "Am I sacrificing my personal well-being for a corporate ideal that doesn't serve me?",
      "What innovative circular solution can I introduce to my industry today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 12?",
        answer: "April 12 is Aries, giving courageous pioneer initiative to The Hanged Man's unconventional perspective shifts."
      },
      {
        question: "How does April 12 differ from March 12?",
        answer: "March 12 carries Pisces surrealist sculpture, while April 12 carries Aries circular economy manufacturing and zero-waste supply chain design."
      },
      {
        question: "What is the core lesson for April 12?",
        answer: "Learning that stepping back to look at problems upside down reveals the most profitable sustainable solutions."
      },
      {
        question: "Which Arcana complements April 12?",
        answer: "Arcana 4 (The Emperor) provides structural backing to execute Arcana 12's inverted supply models."
      }
    ],
    imageBrief: "Mystical modern painting of an inverted golden hourglass where sand flows upward into glowing green sprouts, color palette of lavender, emerald green, and gold."
  },
  13: {
    snippetAnswer: "Being born on April 13 connects your personal path to Arcana 13 (Transformation / Death). Resting near mid-April, April 13 endows you with a powerful ability to overhaul failing corporate divisions, lead industrial demolition recovery, and execute total renewals.",
    vignetteTitle: "The Corporate Overhaul Specialist: Rescuing Struggling Tech Divisions",
    vignetteScenario: "Called to save a failing software division, an April 13 executive dismantles outdated legacy code and restructures product teams. Within nine months, the division launches a market-leading SaaS platform.",
    birthArchetypeContent: "April 13 individuals carry the potent rebirth frequency of Arcana 13 (Transformation) with Aries fiery courage. You do not fear ending obsolete projects; you recognize that clearing away failed systems is essential for fresh commercial growth.",
    highFrequencyExpression: "Operating in high light, you excel in corporate division overhauls, legacy software restructuring, industrial remediation execution, and leading high-impact commercial renewals.",
    shadowChallenges: "When ungrounded, you might experience destructive team purges, abrupt cancellation of viable projects, or brooding over past corporate failures.",
    vocationAndFinance: "Suited for corporate overhaul specialists, restructuring directors, legacy code refactoring leads, industrial remediation executives, and turnaround specialists. Wealth expands through turnaround equity.",
    reflectionQuestions: [
      "What obsolete system or legacy code am I ready to release to allow fresh growth?",
      "How can I lead my team through division restructurings with clear, reassuring communication?",
      "Where in my business is a rebirth waiting to occur today?"
    ],
    faqItems: [
      {
        question: "Is April 13 an unlucky birthday in numerology?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing rebirth, renewal, and high-impact structural overhauls."
      },
      {
        question: "What zodiac sign is April 13?",
        answer: "April 13 is Aries (Fire sign), bringing energetic drive and pioneer courage to Arcana 13's transformative power."
      },
      {
        question: "What is the financial engine for April 13?",
        answer: "Acquiring and overhauling distressed tech divisions or industrial assets into profitable modern enterprises."
      },
      {
        question: "Which Arcana complements April 13?",
        answer: "Arcana 19 (The Sun) brings radiant light and public visibility to illuminate Arcana 13's overhaul results."
      }
    ],
    imageBrief: "Striking artwork of a golden phoenix rising from steel industry embers into a brilliant spring sky, color palette of crimson, gold, and deep charcoal."
  },
  14: {
    snippetAnswer: "Being born on April 14 links your life vibration to Arcana 14 (Temperance). Positioned near mid-April, April 14 bestows a talent for high-frequency financial moderation, balancing complex portfolio risk, and diplomatic corporate negotiations.",
    vignetteTitle: "The Portfolio Risk Strategist: Balancing Multi-Asset Volatility",
    vignetteScenario: "Managing a global multi-asset fund during market turbulence, an April 14 portfolio strategist balances equities, bonds, and commodities. Their algorithmic hedging strategy protects capital while achieving steady annual returns.",
    birthArchetypeContent: "April 14 individuals embody the harmonious synthesis of Arcana 14 (Temperance) fused with Aries strategic drive. You possess an instinct for balancing high-risk ventures with solid defensive hedges, bringing equilibrium to chaotic financial markets.",
    highFrequencyExpression: "In active balance, you demonstrate multi-asset portfolio risk hedging, quantitative financial synthesis, diplomatic merger negotiation, and emotional self-regulation.",
    shadowChallenges: "Shadow patterns show up as avoiding necessary investment risks out of excessive caution, passive analytical delay, or compromising returns for false peace.",
    vocationAndFinance: "Ideal for portfolio risk strategists, quantitative fund managers, multi-asset directors, corporate diplomatic envoys, and financial risk officers. Prosperity expands through balanced fund management.",
    reflectionQuestions: [
      "Am I balancing my high-risk investment strategies with prudent defensive hedges?",
      "Where in my team dynamics can I bring greater diplomatic moderation?",
      "What financial portfolio requires rebalancing today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 14?",
        answer: "April 14 is Aries, giving energetic drive and strategic clarity to Arcana 14's balanced financial synthesis."
      },
      {
        question: "How does April 14 differ from March 14 (Pi Day)?",
        answer: "March 14 carries Pisces Pi Day pure mathematical equations, while April 14 carries Aries multi-asset portfolio risk hedging and quantitative finance."
      },
      {
        question: "What is the financial secret of April 14?",
        answer: "Achieving consistent high returns through systematic multi-asset risk hedging."
      },
      {
        question: "Which Arcana complements April 14?",
        answer: "Arcana 8 (Justice) provides regulatory clarity to support Arcana 14's portfolio balance."
      }
    ],
    imageBrief: "Harmonious artwork depicting a winged figure balancing golden liquid between two glowing urns above a financial stock ticker chart, color palette of gold, deep navy, and emerald green."
  },
  15: {
    snippetAnswer: "Being born on April 15 connects your birth code to Arcana 15 (The Devil). Approaching the close of Aries season, April 15 grants intense magnetic charisma, financial negotiation power, and the ability to liberate businesses from oppressive debt traps.",
    vignetteTitle: "The Debt Restructuring Architect: Liberating Distressed Enterprises",
    vignetteScenario: "Negotiating with international creditors on Tax Day (April 15), a debt restructuring architect reorganizes $500M in corporate bonds. By breaking predatory interest cycles, they save a major manufacturer from bankruptcy.",
    birthArchetypeContent: "April 15 individuals carry Arcana 15's financial negotiation magnetism on Tax Day with Aries courage. You excel at mastering debt workouts and tax law to free commercial enterprises.",
    highFrequencyExpression: "In active financial light, you bring Tax Day corporate bond reorganization, breaking predatory debt cycles, debt workout negotiations, and saving distressed manufacturers.",
    shadowChallenges: "Under shadow influence, you might be tempted by predatory financial leverage, manipulative tax schemes, or obsession with material control.",
    vocationAndFinance: "Thrives as a Tax Day corporate debt workout attorney, bond reorganization architect, distressed manufacturer advisor, and forensic tax lead. Wealth grows through high-stakes bond restructurings.",
    reflectionQuestions: [
      "Am I using my financial leverage to empower businesses or to gain predatory control?",
      "What debt cycle or unhealthy material dependency am I ready to eliminate today?",
      "How can I bring complete financial transparency to my tax and business strategy?"
    ],
    faqItems: [
      {
        question: "Does Arcana 15 mean an April 15 birthday is negative?",
        answer: "Not at all. In Destiny Matrix, Arcana 15 represents intense charisma, financial mastery, and the power to break free from debt traps."
      },
      {
        question: "What significance does Tax Day (April 15) hold for an April 15 birthday?",
        answer: "It highlights your innate gift for strategic tax optimization, debt restructuring, and mastering complex financial leverage."
      },
      {
        question: "What zodiac sign is April 15?",
        answer: "April 15 is Aries (Fire sign), infusing Arcana 15's financial power with bold negotiation drive."
      },
      {
        question: "Which Arcana complements April 15?",
        answer: "Arcana 14 (Temperance) provides calming balance to prevent financial over-leverage."
      }
    ],
    imageBrief: "Dramatic artwork showing a figure holding a glowing torch that dissolves iron tax chains over a financial vault, color palette of rich burgundy, gold, and obsidian."
  },
  16: {
    snippetAnswer: "Being born on April 16 links your life code to Arcana 16 (The Tower). Positioned in late Aries season, April 16 bestows a fearless drive to audit structural engineering flaws, lead disaster response units, and rebuild indestructible urban infrastructure.",
    vignetteTitle: "The Structural Safety Inspector: Auditing High-Rise Engineering Flaws",
    vignetteScenario: "Inspecting a newly built high-rise tower, an April 16 structural engineer detects foundation micro-fractures missed by city inspectors. Ordering immediate reinforcement, they prevent a catastrophic building collapse.",
    birthArchetypeContent: "April 16 individuals embody Arcana 16's structural inspection focus with Aries courageous action. You excel at auditing high-rise engineering flaws and enforcing safety standards.",
    highFrequencyExpression: "Operating in high technical light, you demonstrate high-rise foundation micro-fracture detection, mandatory engineering reinforcement orders, structural safety auditing, and crisis prevention.",
    shadowChallenges: "When ungrounded, you might create unnecessary panic during minor structural audits, deliver harsh destructive criticism, or resist necessary evacuation protocols.",
    vocationAndFinance: "Performs outstandingly as a high-rise foundation safety inspector, engineering micro-fracture auditor, structural reinforcement lead, and civil hazard director. Income grows through specialized structural safety certifications.",
    reflectionQuestions: [
      "What hidden structural flaw am I ready to identify and fix in my organization or life?",
      "How can I deliver safety audits with clear, constructive solution-oriented communication?",
      "What indestructible foundation am I establishing for long-term security?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 16?",
        answer: "April 16 is Aries, bringing courageous pioneer initiative to The Tower's structural awakening."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is revealing hidden flaws so you build indestructible strength."
      },
      {
        question: "Which careers suit April 16 best?",
        answer: "High-rise structural safety inspection, disaster response management, civil engineering auditing, and seismic retrofitting."
      },
      {
        question: "How can April 16 navigate sudden change?",
        answer: "Focus on core engineering principles and rebuild systematically from rock-solid foundations."
      }
    ],
    imageBrief: "Striking architectural illustration of a golden modern high-rise tower backed by lightning, revealing reinforced steel foundations below, color palette of electric blue, gold, and charcoal."
  },
  17: {
    snippetAnswer: "Being born on April 17 connects your spiritual vibration to Arcana 17 (The Star). Resting near the end of Aries season, April 17 grants inspirational vision, space technology innovation, unwavering optimism, and guiding commercial satellite networks.",
    vignetteTitle: "The Commercial Satellite Director: Launching Earth-Observation Arrays",
    vignetteScenario: "Directing a commercial space startup on April 17, a space engineer launches a constellation of Earth-observation satellites. The constellation delivers real-time climate and agricultural data across four continents.",
    birthArchetypeContent: "April 17 individuals channel the celestial guidance of Arcana 17 (The Star) with Aries pioneering courage. You possess a visionary mind, excelling at launching space technology, satellite constellations, and inspiring global environmental hope.",
    highFrequencyExpression: "Operating in high light, you demonstrate commercial satellite constellation design, Earth-observation space engineering, inspiring clean-tech leadership, and celestial vision.",
    shadowChallenges: "Shadow patterns show up as ungrounded space daydreams without orbital license execution, feeling alienated from daily reality, or losing hope during launch delays.",
    vocationAndFinance: "Thrives as a commercial satellite director, space tech engineer, Earth-observation startup founder, clean-tech visionary, and aerospace director. Prosperity expands through satellite data contracts.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to execute my ambitious space or tech vision?",
      "How can I use my innovative platforms to illuminate environmental solutions?",
      "What celestial goal am I ready to launch into reality today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 17?",
        answer: "April 17 is Aries (Fire sign), bringing bold pioneer drive and aerospace ambition to Arcana 17's celestial starlight."
      },
      {
        question: "How does April 17 differ from March 17 (St. Patrick's Day)?",
        answer: "March 17 carries Pisces eco-mythology art, while April 17 carries Aries commercial satellite constellation engineering and space tech startups."
      },
      {
        question: "What is the financial engine for April 17?",
        answer: "Building and monetizing commercial Earth-observation satellite constellations."
      },
      {
        question: "Which Arcana complements April 17?",
        answer: "Arcana 21 (The World) expands April 17's satellite data coverage onto a global international scale."
      }
    ],
    imageBrief: "Breathtaking artwork of a satellite constellation orbiting Earth under a starlit galaxy with golden beam rays projecting down, color palette of deep space navy, gold, and electric cyan."
  },
  18: {
    snippetAnswer: "Being born on April 18 links your birth code to Arcana 18 (The Moon). Closing Aries season right before Taurus, April 18 endows you with a rich intuitive imagination, subconscious psychological insight, and navigating night-vision optical technology.",
    vignetteTitle: "The Night-Vision Optical Engineer: Designing Thermal Imaging Systems",
    vignetteScenario: "Developing advanced thermal imaging sensors, an April 18 optical engineer creates night-vision camera systems for wildlife conservation and search-and-rescue teams navigating pitch-black terrain.",
    birthArchetypeContent: "April 18 individuals combine the deep subconscious perception of Arcana 18 (The Moon) with Aries fiery courage. You excel at illuminating hidden truths in darkness, developing thermal imaging tech and navigating deep psychological landscapes.",
    highFrequencyExpression: "In active light mastery, you bring thermal imaging optical engineering, night-vision technology development, depth psychological insight, and illuminating darkness.",
    shadowChallenges: "Under shadow stress, you might succumb to irrational nocturnal anxieties, fear of hidden enemies, self-deception, or escaping into ungrounded illusions.",
    vocationAndFinance: "Ideal for night-vision optical engineers, thermal imaging sensor designers, depth psychologists, search-and-rescue technology directors, and symbolist authors. Wealth grows through optical tech patents.",
    reflectionQuestions: [
      "Am I trusting my intuitive night vision or letting irrational fears cloud my judgement?",
      "How can I apply my thermal tech or psychological insights to protect others?",
      "What hidden truth am I ready to illuminate with conscious understanding today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 18?",
        answer: "April 18 sits on the Aries-Taurus cusp, blending Aries fiery courage with The Moon's intuitive night vision."
      },
      {
        question: "How does April 18 differ from March 18?",
        answer: "March 18 carries Pisces lucid dream research, while April 18 carries Aries night-vision optical engineering and thermal sensor technology."
      },
      {
        question: "What is the technical superpower of April 18?",
        answer: "Developing high-precision optical and thermal imaging technology that sees clearly through dark terrain."
      },
      {
        question: "Which Arcana complements April 18?",
        answer: "Arcana 19 (The Sun) brings radiant light to balance Arcana 18's nocturnal exploration."
      }
    ],
    imageBrief: "Atmospheric symbolist painting of a golden full moon casting a thermal green-gold glow over a serene landscape with stone towers, color palette of silver, midnight teal, and emerald green."
  },
  19: {
    snippetAnswer: "Being born on April 19 connects your core frequency to Arcana 19 (The Sun). Closing Aries season at its peak solar flare, April 19 bestows radiant leadership charisma, concentrated solar energy engineering, and inspiring public triumph.",
    vignetteTitle: "The Solar Concentrator Pioneer: Building Utility-Scale Concentrated Solar Plants",
    vignetteScenario: "Commissioning a 500MW concentrated solar power plant on April 19, a clean-energy executive uses parabolic mirrors to generate clean electricity for 200,000 homes, winning international energy excellence awards.",
    birthArchetypeContent: "April 19 individuals channel the radiant power of Arcana 19 (The Sun) at the fiery climax of Aries season. You radiate high energy, optimism, and executive warmth, leading massive solar energy ventures and inspiring public momentum.",
    highFrequencyExpression: "In radiant light mastery, you demonstrate concentrated solar power engineering, utility-scale clean energy plant commissioning, magnetic executive warmth, and public commercial triumph.",
    shadowChallenges: "In shadow, you may experience egocentric vanity, demanding absolute spotlight control, physical exhaustion from over-committing, or hiding anxiety behind smiles.",
    vocationAndFinance: "Excels as a concentrated solar power executive, utility-scale renewable director, clean energy investment chair, public speaker, and corporate chief. Prosperity expands through utility energy sales.",
    reflectionQuestions: [
      "Am I sharing my executive warmth to empower my team or to claim all public credit?",
      "How can I pace my intense solar energy drive to avoid physical exhaustion?",
      "What utility-scale clean energy initiative am I ready to commission today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 19?",
        answer: "April 19 is the final day of Aries (Fire sign), representing the radiant solar climax of Aries season."
      },
      {
        question: "How does April 19 differ from March 19?",
        answer: "March 19 carries Equinox solar thermal research, while April 19 carries peak Aries concentrated solar power plant engineering and 500MW utility grid launches."
      },
      {
        question: "What is the financial engine for April 19?",
        answer: "Commissioning utility-scale concentrated solar power plants and clean energy grids."
      },
      {
        question: "Which Arcana complements April 19?",
        answer: "Arcana 21 (The World) expands April 19's solar energy enterprise onto a global scale."
      }
    ],
    imageBrief: "Radiant tarot-style artwork of a triumphant figure riding a white horse under a brilliant blazing golden sun surrounded by parabolic solar mirrors, color palette of warm gold, amber, and sky blue."
  },
  20: {
    snippetAnswer: "Being born on April 20 links your birth vibration to Arcana 20 (Judgement). Opening Taurus season, April 20 endows you with a grounded spiritual calling, profound environmental awakening talent, and leading land restoration movements.",
    vignetteTitle: "The Land Restoration Pioneer: Reclaiming Degraded Mine Sites",
    vignetteScenario: "Opening Taurus season on April 20, an environmental scientist orchestrates a monumental land restoration project. Converting an abandoned open-pit mine into a thriving native forest reserve, they inspire global ecological restoration.",
    birthArchetypeContent: "April 20 individuals embody the awakening call of Arcana 20 (Judgement) with Taurus earth stability. You possess an instinct for discerning environmental purpose, converting scarred landscapes and outdated structures into fertile sanctuaries.",
    highFrequencyExpression: "Operating in high light, you demonstrate land restoration engineering, mine site ecological recovery, family lineage reconciliation, and awakening community earth stewardship.",
    shadowChallenges: "Under shadow friction, you may linger in harsh judgment over past environmental damage, hold grudges against legacy industries, or hesitate to launch major land projects.",
    vocationAndFinance: "Ideal for land restoration scientists, mine site ecological directors, environmental remediation leads, family heritage counselors, and sanctuary founders. Wealth builds through land reclamation grants.",
    reflectionQuestions: [
      "What scarred land or old family conflict am I called to bring healing and restoration to?",
      "Am I listening to my quiet inner awakening or staying trapped in past grievances?",
      "What ecological sanctuary am I ready to establish for future generations?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 20?",
        answer: "April 20 is the opening day of Taurus (Earth sign), bringing grounded physical stability to Arcana 20's awakening call."
      },
      {
        question: "How does April 20 differ from March 20 (Equinox)?",
        answer: "March 20 carries Pisces-Aries Equinox choral harmony, while April 20 carries Taurus opening land restoration and mine site ecological recovery."
      },
      {
        question: "Which careers suit April 20 best?",
        answer: "Land restoration science, ecological remediation, family heritage counseling, and environmental sanctuary leadership."
      },
      {
        question: "How can April 20 overcome self-judgment?",
        answer: "Practice environmental forgiveness and view past mistakes as soil for future ecological rebirth."
      }
    ],
    imageBrief: "Inspiring symbolist artwork of an angel sounding a golden horn at sunrise over a restored lush green forest springing from stone terrain, color palette of emerald green, golden yellow, and earth brown."
  },
  21: {
    snippetAnswer: "Being born on April 21 connects your personal path to Arcana 21 (The World). Resting in early Taurus season, April 21 grants a global perspective, a talent for completing major international agricultural trade alliances, and borderless sustainability initiatives.",
    vignetteTitle: "The Global Agri-Trade Director: Structuring Sustainable Commodity Networks",
    vignetteScenario: "Negotiating an international trade treaty on April 21, a global director unifies organic coffee producers across South America, Africa, and Asia under a single fair-trade price floor, securing sustainable livelihoods for 50,000 farming families.",
    birthArchetypeContent: "April 21 individuals channel Arcana 21's global trade vision with Taurus agricultural grounding. You excel at structuring international organic coffee treaties and commodity alliances.",
    highFrequencyExpression: "In active global synthesis, you excel at international organic coffee treaty negotiations, fair-trade price floor structures, cross-continental agrarian alliances, and rural economic stability.",
    shadowChallenges: "In shadow, you may experience fear of finalizing multi-year international treaties, feeling ungrounded without a home base, or perfectionist delay in trade launches.",
    vocationAndFinance: "Performs with mastery as an international organic coffee trade negotiator, agrarian price floor director, commodity trust founder, and global sustainability envoy. Wealth accelerates through international trade equity.",
    reflectionQuestions: [
      "What major multi-year agri-trade treaty am I ready to bring to full completion?",
      "How can I expand my commercial vision to encompass a broader international market?",
      "Where in my journey can I celebrate the complete global network I have built?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 21?",
        answer: "April 21 is Taurus (Earth sign), giving grounded physical stability and agricultural focus to Arcana 21's global completion."
      },
      {
        question: "How does April 21 differ from March 21?",
        answer: "March 21 carries Aries fire initiation trade platforms, while April 21 carries Taurus earth grounded organic agri-trade treaties and global commodity networks."
      },
      {
        question: "What is the financial engine for April 21?",
        answer: "Structuring international fair-trade commodity alliances and global sustainable supply chains."
      },
      {
        question: "Which Arcana complements April 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new global trade cycles."
      }
    ],
    imageBrief: "Regal symbolist illustration of a figure dancing within a golden laurel wreath surrounded by coffee and tea harvests over a globe, color palette of emerald green, gold, and warm terra cotta."
  },
  22: {
    snippetAnswer: "Being born on April 22 activates Master Number 22 under Arcana 22 (The Fool / 0). Falling on Earth Day, April 22 endows you with monumental master-builder capacity, legendary environmental vision, and leading global wilderness conservation leaps.",
    vignetteTitle: "The Earth Day Master Builder: Founding Global Wilderness Corridors",
    vignetteScenario: "On Earth Day (April 22), a visionary conservationist launches a multi-billion-dollar international trust that connects contiguous wilderness corridors across three continents, protecting millions of acres of biodiversity.",
    birthArchetypeContent: "April 22 individuals carry Master Number 22 (Master Builder) paired with Arcana 22 (The Fool) and Taurus Earth Day frequency. You possess a monumental mind capable of taking fearless leaps to construct world-changing environmental trusts and wilderness sanctuaries.",
    highFrequencyExpression: "Demonstrating master alignment, you excel at Earth Day wilderness trust founding, global conservation corridor design, master-builder eco-infrastructure, and inspiring planetary leaps of faith.",
    shadowChallenges: "Under shadow stress, you might make ungrounded financial leaps without legal backing, feel overwhelmed by global environmental crisis scale, or flee administrative duties.",
    vocationAndFinance: "Performs with master capacity as an Earth Day wilderness trust founder, planetary conservation architect, master eco-infrastructure builder, and global environmental trustee. Prosperity flows through international conservation funds.",
    reflectionQuestions: [
      "What bold Earth Day master-builder project am I called to launch to protect our planet?",
      "Am I balancing my visionary leaps of faith with solid legal and financial ground strategy?",
      "Where in my life am I ready to start completely fresh to serve a planetary purpose?"
    ],
    faqItems: [
      {
        question: "Why is April 22 a Master Number Earth Day birthday?",
        answer: "April 22 combines Master Number 22 (Master Builder) with Arcana 22 (The Fool) and Earth Day, granting capacity for monumental planetary conservation leaps."
      },
      {
        question: "What zodiac sign is April 22?",
        answer: "April 22 is Taurus (Earth sign), bringing grounded physical stamina to Master 22's world-building vision."
      },
      {
        question: "Which careers suit April 22 best?",
        answer: "Earth Day wilderness trust leadership, planetary eco-infrastructure building, international conservation corridor architecture, and environmental trusteeship."
      },
      {
        question: "How can April 22 avoid burnout?",
        answer: "Ground your monumental planetary vision with trusted legal compliance officers and financial co-trustees."
      }
    ],
    imageBrief: "Breathtaking illustration of a master builder figure standing at a mountain summit on Earth Day holding a glowing green globe in a golden laurel wreath, color palette of emerald green, gold, and azure blue."
  },
  23: {
    snippetAnswer: "Being born on April 23 connects your personal frequency to Arcana 5 (The Hierophant), derived from compound digits 2 (Intuition) and 3 (Expression). Resting in early Taurus season, April 23 endows you with a talent for authoring sustainable agriculture manuals and teaching organic farming standards.",
    vignetteTitle: "The Agronomy Professor: Authoring Regenerative Agriculture Manuals",
    vignetteScenario: "Publishing a seminal textbook on regenerative soil biology on April 23, an agronomy professor presents clear scientific evidence for chemical-free farming. Their manual becomes standard curriculum in agricultural universities worldwide.",
    birthArchetypeContent: "April 23 individuals express Arcana 5 through Taurus earth stability and compound 2+3 communicative flair. You possess a knack for translating complex soil science and regenerative farming techniques into practical, accessible educational manuals.",
    highFrequencyExpression: "In active educational light, you demonstrate regenerative agronomy authorship, publishing organic soil science textbooks, university teaching excellence, and reforming agricultural education.",
    shadowChallenges: "Shadow patterns show up as dogmatic agricultural theories, unwillingness to adapt to new soil data, or preaching organic standards without field application.",
    vocationAndFinance: "Ideal for agronomy professors, regenerative farming authors, organic certification directors, soil science educators, and agricultural publishers. Wealth grows through textbook publishing royalties.",
    reflectionQuestions: [
      "Am I teaching from practical field experience and soil science evidence?",
      "How can I translate complex regenerative concepts into simple guides for farmers?",
      "What agricultural manual am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 23?",
        answer: "April 23 is Taurus (Earth sign), infusing The Hierophant's teaching mission with grounded agricultural focus."
      },
      {
        question: "How does April 23 differ from April 5?",
        answer: "April 5 carries Aries corporate ethics academies, while April 23 carries Taurus regenerative agronomy authorship and organic soil science textbooks."
      },
      {
        question: "What is the financial model for April 23?",
        answer: "Publishing agronomy textbooks and licensing organic agricultural training curricula."
      },
      {
        question: "Which Arcana complements April 23?",
        answer: "Arcana 3 (The Empress) offers fertile backing to support Arcana 5's agricultural teaching."
      }
    ],
    imageBrief: "Vibrant artwork of an agronomy professor standing in a sunlit wheat field holding a open textbook with soil diagrams, color palette of golden wheat, emerald green, and rich earth brown."
  },
  24: {
    snippetAnswer: "Being born on April 24 links your birth vibration to Arcana 6 (The Lovers), derived from compound digits 2 (Diplomacy) and 4 (Structural Order). Positioned in early Taurus season, April 24 bestows a talent for structuring long-term agricultural co-ops and farm trade alliances.",
    vignetteTitle: "The Organic Farm Co-Op Founder: Structuring Regional Agricultural Alliances",
    vignetteScenario: "Unifying 30 small organic family farms on April 24, a co-op founder structures a shared distribution network (4) and profit-sharing agreement (6). The alliance secures direct contracts with major organic grocery chains.",
    birthArchetypeContent: "April 24 individuals channel Arcana 6 through Taurus earth grounding and compound 2+4 structural order. You excel at building harmonious agricultural alliances, structuring fair contracts that protect small farmers while achieving commercial scale.",
    highFrequencyExpression: "In active structural harmony, you bring organic farm co-op founding, regional agricultural alliance negotiation, fair profit-sharing design, and securing retail distribution contracts.",
    shadowChallenges: "When out of balance, you may experience legal delay in co-op contract formation, over-focusing on administrative details, or hesitation during farmer deadlocks.",
    vocationAndFinance: "Suited for organic farm co-op founders, agricultural alliance strategists, regional food hub directors, fair-trade contract attorneys, and farm supply heads. Wealth grows through co-op trade equity.",
    reflectionQuestions: [
      "Am I building farm alliances on clear mutual agreements or quick handshake deals?",
      "How can I combine financial structure with genuine community trust?",
      "What agricultural alliance am I ready to formalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 24?",
        answer: "April 24 is Taurus (Earth sign), bringing grounded physical stability and agricultural focus to Arcana 6's partnership design."
      },
      {
        question: "How does April 24 differ from April 6?",
        answer: "April 6 carries Aries corporate brand agency mergers, while April 24 carries Taurus organic farm co-op founding and regional food hub distribution."
      },
      {
        question: "What is the financial secret of April 24?",
        answer: "Structuring regional agricultural co-ops that command direct retail supply pricing."
      },
      {
        question: "Which Arcana complements April 24?",
        answer: "Arcana 4 (The Emperor) reinforces April 24's demand for administrative clarity in alliances."
      }
    ],
    imageBrief: "Warm graphic depicting farmers shaking hands in a prosperous spring orchard over a golden wooden co-op charter, color palette of emerald green, golden yellow, and terra cotta."
  },
  25: {
    snippetAnswer: "Being born on April 25 connects your personal frequency to Arcana 7 (The Chariot), derived from compound digits 2 (Sensitivity) and 5 (Adaptability). Resting in early Taurus season, April 25 grants a talent for leading heavy agricultural machinery innovation and automated harvesting fleets.",
    vignetteTitle: "The Automated Agronomy Fleet Lead: Deploying Electric Harvesters",
    vignetteScenario: "Designing a fleet of autonomous electric harvesters on April 25, an agronomy engineer deploys smart machinery across a 10,000-acre organic farm. The fleet harvests crops with zero emissions, cutting harvest times in half.",
    birthArchetypeContent: "April 25 individuals channel Arcana 7 through Taurus earth grounding and compound 2+5 technical adaptability. You combine mechanical drive with environmental precision, mastering heavy agricultural machinery and automated farming fleets.",
    highFrequencyExpression: "Operating in active technical light, you demonstrate autonomous electric harvester design, smart farming fleet deployment, zero-emission agricultural logistics, and rapid harvest execution.",
    shadowChallenges: "Shadow patterns show up as impatient frustration during machinery breakdowns, over-working field crews, or risking field equipment in adverse weather.",
    vocationAndFinance: "Ideal for automated agronomy fleet leads, electric harvester engineers, smart farming equipment developers, and precision agriculture directors. Wealth grows through agritech machinery patents.",
    reflectionQuestions: [
      "Am I balancing high-speed automated harvesting with careful soil health preservation?",
      "How can I lead my field engineering team to excel without creating burnout?",
      "What agricultural automation project am I ready to deploy this season?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 25?",
        answer: "April 25 is Taurus (Earth sign), giving grounded mechanical focus and agricultural stability to Arcana 7."
      },
      {
        question: "How does April 25 differ from April 7?",
        answer: "April 7 carries Aries electric motorsport racing, while April 25 carries Taurus autonomous electric harvester design and smart farming fleet deployment."
      },
      {
        question: "What is the technical edge of April 25?",
        answer: "Deploying autonomous electric heavy machinery that cuts farm harvest times while eliminating emissions."
      },
      {
        question: "Which Arcana complements April 25?",
        answer: "Arcana 11 (Strength) provides mechanical stamina to support Arcana 7's harvesting fleet operations."
      }
    ],
    imageBrief: "Dynamic agricultural graphic of a fleet of futuristic electric harvesters working a golden wheat field under a starlit twilight sky, color palette of emerald green, golden wheat, and cyan."
  },
  26: {
    snippetAnswer: "Being born on April 26 links your birth code to Arcana 8 (Justice), derived from compound digits 2 (Intuition) and 6 (Ethics). Positioned in early Taurus season, April 26 grants a razor-sharp intellect for auditing land titles, organic farming certifications, and agricultural legal compliance.",
    vignetteTitle: "The Organic Certification Auditor: Verifying Global Farm Integrity",
    vignetteScenario: "Auditing international organic supply chains on April 26, a certification officer detects fraudulent soil treatment claims at an export farm. Their rigorous enforcement protects organic food integrity worldwide.",
    birthArchetypeContent: "April 26 individuals channel Arcana 8 through Taurus earth grounding and compound 2+6 ethical precision. You possess an instinct for uncovering fraudulent claims in organic farming, enforcing land compliance, and protecting agricultural integrity.",
    highFrequencyExpression: "In active legal precision, you bring international organic certification auditing, farm soil compliance enforcement, land title legal oversight, and protecting food supply integrity.",
    shadowChallenges: "Under shadow stress, you might fall into rigid perfectionism during farm audits, harsh legalism with small landholders, or suppressing emotional empathy.",
    vocationAndFinance: "Excels as an organic certification auditor, agricultural compliance director, land title attorney, food safety commissioner, and environmental policy lead. Wealth builds through certification retains.",
    reflectionQuestions: [
      "Am I applying objective fairness to small family farms as well as large agri-corporations?",
      "Where in my supply chain auditing can I establish greater transparency?",
      "What organic certification boundary needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 26?",
        answer: "April 26 is Taurus (Earth sign), bringing grounded physical stability to Arcana 8's legal precision."
      },
      {
        question: "How does April 26 differ from April 8?",
        answer: "April 8 carries Aries tech antitrust litigation, while April 26 carries Taurus organic farming certification auditing and land title compliance."
      },
      {
        question: "What is the financial rule for April 26?",
        answer: "Maintain absolute regulatory compliance in all organic food and land investments."
      },
      {
        question: "Which Arcana complements April 26?",
        answer: "Arcana 11 (Strength) provides physical stamina to support Arcana 8's land audit cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a lush green farm map with a magnifying crystal lens, color palette of emerald green, steel grey, and gold."
  },
  27: {
    snippetAnswer: "Being born on April 27 connects your life path to Arcana 9 (The Hermit), derived from compound digits 2 (Intuition) and 7 (Analytical Focus). Positioned in early Taurus season, April 27 endows you with a talent for solitary soil microbiology research, seed banking, and fungal network analysis.",
    vignetteTitle: "The Soil Microbiologist: Unlocking Mycorrhizal Fungal Networks",
    vignetteScenario: "Working in isolation at a soil science lab on April 27, a microbiologist maps mycorrhizal fungal networks in ancient forest soils. Their discovery of a drought-resistant fungal inoculant saves dryland crops.",
    birthArchetypeContent: "April 27 individuals carry Arcana 9 into the domain of soil microbiology and seed banking. You thrive in quiet solitary laboratory environments, combining Taurus earth grounding with deep analytical focus to uncover microscopic soil wisdom.",
    highFrequencyExpression: "In active microbiology light, you demonstrate drought-resistant fungal inoculant development, ancient forest soil mapping, quiet lab seed banking, and biological soil innovation.",
    shadowChallenges: "In shadow, you may retreat into aloof lab isolation, hoard fungal research data out of distrust, or show cynicism toward non-scientific farm managers.",
    vocationAndFinance: "Thrives as a dryland mycorrhizal inoculant developer, ancient soil lab director, fungal network researcher, seed bank curator, and soil microbiologist. Revenue expands through bio-inoculant patents.",
    reflectionQuestions: [
      "Am I balancing my solitary lab research focus with practical farm application?",
      "How can I share my microscopic soil discoveries to aid dryland farmers?",
      "What biological soil secret am I called to illuminate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 27?",
        answer: "April 27 is Taurus (Earth sign), blending grounded physical patience with The Hermit's contemplative research focus."
      },
      {
        question: "How does April 27 differ from April 9?",
        answer: "April 9 carries Aries AI neural architecture research, while April 27 carries Taurus soil microbiology and mycorrhizal fungal network research."
      },
      {
        question: "Why does April 27 thrive in soil science labs?",
        answer: "Quiet lab focus allows April 27 to analyze microscopic soil organisms without digital and social distraction."
      },
      {
        question: "Which Arcana complements April 27?",
        answer: "Arcana 3 (The Empress) provides fertile growth backing to support Arcana 9's soil research."
      }
    ],
    imageBrief: "Mystical scientific portrait of a researcher examining a glowing golden mycorrhizal fungal network under a microscope in a dark lab, color palette of deep earth brown, emerald green, and gold."
  },
  28: {
    snippetAnswer: "Being born on April 28 links your birth frequency to Arcana 10 (Wheel of Fortune), derived from compound digits 2 (Strategy) and 8 (Executive Power). Positioned in early Taurus season, April 28 grants an intuitive rhythm for timberland cycles, real estate market timing, and land investment funds.",
    vignetteTitle: "The Timberland Fund Director: Timing Sustainable Forestry Cycles",
    vignetteScenario: "Directing a $1B timberland investment fund on April 28, a fund manager times sustainable harvest cycles across 200,000 acres of hardwood forests. By balancing timber harvests with carbon credit sales, they deliver top portfolio returns.",
    birthArchetypeContent: "April 28 individuals combine Arcana 10's cycle timing with Taurus timberland investor expertise. You possess a strategic instinct for managing commercial forestry funds and monetizing carbon credit portfolios at key economic moments.",
    highFrequencyExpression: "In active timberland financial light, you bring commercial hardwood harvest timing, carbon credit monetization, sustainable forestry fund management, and real estate equity scaling.",
    shadowChallenges: "Shadow patterns show up as speculative land gambling, impatience during slow forestry growth cycles, over-leveraging real estate funds, or clear-cutting for quick cash.",
    vocationAndFinance: "Performs with excellence as a commercial hardwood fund manager, carbon credit portfolio director, timberland trustee, and real estate investment chair. Wealth accelerates through land equity.",
    reflectionQuestions: [
      "Am I trusting natural multi-year forestry cycles or trying to force immediate timber returns?",
      "How can I balance commercial land harvests with long-term forest conservation?",
      "What land investment cycle am I ready to master today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 28?",
        answer: "April 28 is Taurus (Earth sign), giving grounded physical stability and financial ambition to Arcana 10's cycle timing."
      },
      {
        question: "How does April 28 differ from April 10?",
        answer: "April 10 carries Aries tech stock cycle timing, while April 28 carries Taurus timberland fund management and carbon credit portfolio monetization."
      },
      {
        question: "What is the financial engine for April 28?",
        answer: "Managing sustainable timberland funds and monetizing carbon credit portfolios."
      },
      {
        question: "Which Arcana complements April 28?",
        answer: "Arcana 21 (The World) expands April 28's timberland fund onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over a lush hardwood forest under a starlit sky, color palette of emerald green, golden yellow, and deep earth brown."
  },
  29: {
    snippetAnswer: "Being born on April 29 activates the rare Master Number 11 frequency under Arcana 11 (Strength), derived from compound digits 2 (Sensitivity) and 9 (Universal Compassion). Positioned in early Taurus season, April 29 endows you with extraordinary physical stamina and equestrian training mastery.",
    vignetteTitle: "The Master Equestrian Trainer: Rehabilitating Wild Thoroughbreds",
    vignetteScenario: "Working with a traumatized champion thoroughbred on April 29, a Master 11 horse trainer uses calm physical composure and somatic grounding. Their patient training restores the horse to international competition victory.",
    birthArchetypeContent: "April 29 individuals embody Master 11 potential under Arcana 11 (Strength) with Taurus earth stability and compound 2+9 empathetic compassion. You possess intense physical stamina, communicating with powerful animals through quiet physical composure.",
    highFrequencyExpression: "Operating in master light, you excel at master equestrian training, thoroughbred rehabilitation, somatic animal grounding, physical endurance, and leading wilderness sanctuaries.",
    shadowChallenges: "Under shadow stress, you might experience physical exhaustion from over-training horses, sudden anger bursts when animals resist, or suppressing physical fatigue.",
    vocationAndFinance: "Performs with mastery as a master equestrian trainer, thoroughbred rehabilitation director, equine therapy founder, somatic animal whisperer, and sanctuary head. Wealth grows through high-value horse training.",
    reflectionQuestions: [
      "How can I protect my physical stamina while managing high-intensity animal training?",
      "Am I applying quiet somatic composure rather than physical force with my team?",
      "What physical challenge am I called to master with patient strength today?"
    ],
    faqItems: [
      {
        question: "Why is April 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and quiet somatic mastery over animals."
      },
      {
        question: "What zodiac sign is April 29?",
        answer: "April 29 is Taurus (Earth sign), adding grounded physical endurance and animal connection to Arcana 11's intense strength."
      },
      {
        question: "How does April 29 differ from April 11?",
        answer: "April 11 carries Aries Olympic athletic performance coaching, while April 29 carries Taurus master equestrian training and thoroughbred rehabilitation."
      },
      {
        question: "What is the health key for April 29?",
        answer: "Regular physical grounding practices and systematic sleep recovery between intense horse training cycles."
      }
    ],
    imageBrief: "Inspiring artwork of a calm figure in equestrian attire gently taming a majestic wild stallion in a green spring meadow under a golden star halo, color palette of emerald green, gold, and white."
  },
  30: {
    snippetAnswer: "Being born on April 30 connects your personal frequency to Arcana 3 (The Empress), derived from compound digits 3 (Creativity) and 0 (Universal Potential). Resting on Walpurgis Night / Beltane Eve, April 30 bestows abundant creative fertility, herbal alchemy talent, and growing thriving botanical enterprises.",
    vignetteTitle: "The Herbal Alchemist: Scaling Organic Botanical Skincare Enterprises",
    vignetteScenario: "Formulating a luxury organic skincare line on Beltane Eve (April 30), a botanical chemist uses cold-pressed spring herbs. Their sustainable skincare brand captures international retail distribution and beauty awards.",
    birthArchetypeContent: "April 30 individuals embody Arcana 3's creative fertility on Beltane Eve with Taurus herbal formulation talent. You excel at creating cold-pressed organic skincare lines, combining herbal alchemy with luxury retail scaling.",
    highFrequencyExpression: "In active fertile light, you demonstrate Beltane Eve herbal cold-press alchemy, organic cosmetic chemistry, luxury botanical skincare brand scaling, and retail beauty distribution.",
    shadowChallenges: "In shadow, you may experience possessive financial control over formulations, vanity regarding brand image, or over-spending on packaging aesthetics.",
    vocationAndFinance: "Performs with distinction as a Beltane Eve cosmetic formulation chemist, organic botanical skincare CEO, cold-pressed herbal alchemist, and luxury beauty brand founder. Wealth expands through global skincare retail distribution.",
    reflectionQuestions: [
      "How can I bring more natural herbal beauty and organic purity into my product line?",
      "Am I balancing my artistic aesthetic passion with practical unit economics?",
      "What organic botanical venture am I ready to scale today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is April 30?",
        answer: "April 30 is Taurus (Earth sign), bringing grounded physical stability and organic focus to The Empress's creative fertility."
      },
      {
        question: "What significance does Walpurgis Night / Beltane Eve hold for an April 30 birthday?",
        answer: "It highlights your innate connection to spring blossom fertility, herbal alchemy, and nature's peak blooming frequency."
      },
      {
        question: "How does April 30 differ from March 30?",
        answer: "March 30 carries Aries fire vertical hydroponic farming, while April 30 carries Taurus Beltane Eve organic botanical skincare formulation and herbal alchemy."
      },
      {
        question: "Which Arcana complements April 30?",
        answer: "Arcana 4 (The Emperor) provides structural supply chain execution to support Arcana 3's beauty brand growth."
      }
    ],
    imageBrief: "Rich botanical painting of an elegant herbal chemist formulating skincare potions surrounded by blooming spring flowers on Beltane Eve under a full moon, color palette of emerald green, golden amber, and rose pink."
  }
};

export function getAprilProfile(day: number): BirthdayProfileData {
  const custom = APRIL_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `April ${day}`;
  const slug = `april-${day}`;

  const phaseText = day <= 10 ? 'early April spring surge' : day <= 20 ? 'mid-April Aries-Taurus cusp phase' : 'late-April Taurus earth stabilization';
  const seasonalPhrase = `peak spring renewal and flourishing vital energy during the ${phaseText} of April`;
  const seasonalContext = `Peak spring renewal and flourishing vital energy mark the ${phaseText} of April.`;
  const dayVibrationNote = `${formattedDate} combines ${seasonalPhrase} with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 31 : day - 1;
  const nextDay = day === 30 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'March 31' : `April ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 31 ? "Q1 milestone integration" : "Prior day energy focus",
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
      dateLabel: day === 30 ? 'May 1' : `April ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: "Subsequent integration phase",
      bestFocus: "Expanding into next day's growth",
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} momentum.`
    }
  ];

  return {
    slug,
    month: 'April',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of mid-spring April focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
    vignetteTitle: custom?.vignetteTitle || `The ${formattedDate} Catalyst: Navigating ${primaryArcana.name} Energy`,
    vignetteScenario: custom?.vignetteScenario || `In a key moment of decision, someone born on ${formattedDate} steps forward to apply the ${primaryArcana.archetype.toLowerCase()} lessons of Arcana ${primaryArcanaNum}, turning a routine challenge into a major breakthrough.`,
    birthArchetypeContent: custom?.birthArchetypeContent || `Individuals born on ${formattedDate} embody the core qualities of Arcana ${primaryArcanaNum} (${primaryArcana.name}). You possess a natural drive to master your environment, apply structured discipline, and express your authentic talents.`,
    comparisonTable,
    highFrequencyExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenges: custom?.shadowChallenges || primaryArcana.shadowExpression,
    vocationAndFinance: custom?.vocationAndFinance || `${primaryArcana.careerGuidance} ${primaryArcana.moneyChannel}`,
    reflectionQuestions: custom?.reflectionQuestions || [
      `How can I align with the ${phaseText} of April to support my goals?`,
      `In what ways does ${primaryArcana.name} encourage me to express ${primaryArcana.archetype.toLowerCase()} today?`,
      `What specific practice will help me anchor constructive high frequency in my daily routine?`
    ],
    faqItems: custom?.faqItems || [
      {
        question: `What zodiac sign is ${formattedDate}?`,
        answer: day <= 19 ? `${formattedDate} falls under Aries (Fire sign), bringing bold pioneer drive, initiative, and energetic courage.` : `${formattedDate} falls under Taurus (Earth sign), bringing grounded stability, physical endurance, and environmental focus.`
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
