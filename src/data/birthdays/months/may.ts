import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const MAY_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Being born on May 1 connects your core frequency to Arcana 1 (The Magician). Opening May on May Day, May 1 endows you with May Day floral magic, organic herbal tea formulation initiative, and launching botanical consumer wellness brands.",
    vignetteTitle: "The May Day Floral Herbalist: Launching Organic Artisan Tea Lines",
    vignetteScenario: "On May Day (May 1), a floral chemist launches an organic cold-infused artisan tea brand using hand-harvested elderflower and mint. The brand lands shelf space in 500 premium gourmet markets across Europe.",
    birthArchetypeContent: "May 1 individuals combine Arcana 1's creative initiation with Taurus physical earth stability and May Day botanical vitality. You excel at blending raw floral ingredients into artisan herbal teas and natural botanical beverages.",
    highFrequencyExpression: "In active creative light, you demonstrate artisan herbal tea formulation, May Day floral product launches, organic beverage brand building, and botanical retail success.",
    shadowChallenges: "Under shadow stress, you might act impulsively on blend recipes, lose patience during bottling production, or abandon tea line variations after launch.",
    vocationAndFinance: "Excels as an artisan tea formulator, floral chemist, organic beverage CEO, botanical brand director, and wellness entrepreneur. Wealth grows through botanical beverage equity.",
    reflectionQuestions: [
      "Am I carrying my floral tea formulations through complete commercial distribution?",
      "How can I channel May Day vitality to inspire my product team?",
      "What organic botanical beverage am I ready to introduce today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 1?",
        answer: "May 1 is Taurus (Earth sign), bringing physical stability and botanical focus to The Magician's creative initiation."
      },
      {
        question: "What significance does May Day hold for May 1?",
        answer: "It highlights your innate connection to spring blossom vitality, floral chemistry, and launching artisan herbal tea brands."
      },
      {
        question: "What is the financial engine for May 1?",
        answer: "Formulating and selling organic artisan herbal teas and botanical wellness beverages."
      },
      {
        question: "Which Arcana complements May 1?",
        answer: "Arcana 19 (The Sun) amplifies May 1's public visibility and gourmet retail brand success."
      }
    ],
    imageBrief: "Vibrant graphic of a tea formulator holding a glass teapot infused with elderflowers under a May Day blossom arch, color palette of emerald green, golden sunlight, and rose pink."
  },
  2: {
    snippetAnswer: "Being born on May 2 links your life path to Arcana 2 (The High Priestess). Resting in early May, May 2 grants quiet intuitive wisdom, spring forest herbalism, and an instinct for reading subtle plant communication networks.",
    vignetteTitle: "The Spring Forest Herbalist: Decoding Fungal Communication Signatures",
    vignetteScenario: "Researching in an ancient beech forest on May 2, a plant herbalist detects subtle electrical impulses passing between trees and soil fungi. Their intuitive discovery proves trees exchange nutrients during seasonal spring growth.",
    birthArchetypeContent: "May 2 individuals fuse the reflective wisdom of Arcana 2 (The High Priestess) with Taurus forest grounding. You possess deep herbal intelligence, listening quietly to underground fungal networks and subtle forest communication systems.",
    highFrequencyExpression: "In quiet mastery, you bring forest bio-electrical research, fungal network analysis, spring herbalism, and unshakeable intuitive ecological insight.",
    shadowChallenges: "Shadow expressions include retreating into secretive forest isolation, hesitating to publish findings out of self-doubt, or withholding plant wisdom from research peers.",
    vocationAndFinance: "Ideal for forest herbalists, fungal network researchers, botanical museum curators, plant bio-electricians, and depth ecologists. Wealth builds through research grants and books.",
    reflectionQuestions: [
      "Am I trusting my quiet intuitive forest insights alongside lab sensor readings?",
      "How can I share my findings to advance forest conservation?",
      "What quiet time in nature do I need to clear my vision today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 2?",
        answer: "May 2 is Taurus (Earth sign), giving physical patience and forest focus to The High Priestess's quiet inner wisdom."
      },
      {
        question: "How does May 2 differ from April 2?",
        answer: "April 2 carries Aries corporate risk advisory, while May 2 carries Taurus spring forest herbalism and fungal bio-electric research."
      },
      {
        question: "What is the key to success for May 2?",
        answer: "Patience and quiet observation of underground forest networks."
      },
      {
        question: "Which Arcana complements May 2?",
        answer: "Arcana 3 (The Empress) provides fertile growth to cultivate May 2's forest discoveries."
      }
    ],
    imageBrief: "Mystical symbolist painting of a calm herbalist listening to a glowing beech tree trunk in an ancient spring forest under moonlight, color palette of deep moss green, silver, and gold."
  },
  3: {
    snippetAnswer: "Being born on May 3 connects your core frequency to Arcana 3 (The Empress). Resting in early May, May 3 bestows luxurious aesthetic vision, organic lavender estate cultivation, and scaling natural scent extraction houses.",
    vignetteTitle: "The Lavender Estate Master: Cultivating Organic Scent Distilleries",
    vignetteScenario: "Managing a 300-acre organic lavender estate on May 3, a master distiller extracts pure therapeutic essential oils using solar steam apparatus. Their lavender oil supplies top luxury perfume houses in Paris.",
    birthArchetypeContent: "May 3 individuals express the fertile majesty of Arcana 3 (The Empress) with Taurus botanical grounding. You possess a gift for cultivating organic flower estates, distilling therapeutic essential oils, and building luxury scent brands.",
    highFrequencyExpression: "In active fertile light, you demonstrate lavender estate cultivation, solar steam essential oil distillation, organic scent branding, and luxury cosmetics supply.",
    shadowChallenges: "Shadow patterns show up as financial over-spending on estate copper stills, emotional attachment to acreage, or stubbornness during dry summer spells.",
    vocationAndFinance: "Excels as a lavender estate owner, essential oil master distiller, organic cosmetics supplier, luxury scent founder, and estate manager. Wealth expands through scent equity.",
    reflectionQuestions: [
      "How can I enhance organic soil vitality across my flower fields?",
      "Am I balancing my passion for scent luxury with practical business economics?",
      "What natural essential oil venture am I ready to cultivate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 3?",
        answer: "May 3 is Taurus (Earth sign), giving grounded agricultural patience to The Empress's creative fertility."
      },
      {
        question: "How does May 3 differ from April 3?",
        answer: "April 3 carries Aries luxury eco-resort design, while May 3 carries Taurus organic lavender estate cultivation and essential oil distillation."
      },
      {
        question: "What is the primary money channel for May 3?",
        answer: "Cultivating organic lavender fields and distilling therapeutic essential oils for luxury markets."
      },
      {
        question: "Which Arcana complements May 3?",
        answer: "Arcana 4 (The Emperor) provides structural supply order to support Arcana 3's distillery operations."
      }
    ],
    imageBrief: "Lush painting of an elegant distiller standing in purple lavender fields holding a copper flask of golden oil under a bright sun, color palette of lavender violet, emerald green, and golden sunlight."
  },
  4: {
    snippetAnswer: "Being born on May 4 links your life vibration to Arcana 4 (The Emperor). Resting in early May, May 4 endows you with passive solar green architecture mastery, earth-sheltered home design, and building zero-energy residential estates.",
    vignetteTitle: "The Passive Solar Architect: Building Earth-Sheltered Autonomous Estates",
    vignetteScenario: "Designing a 50-home earth-sheltered residential community on May 4, a green architect integrates rammed-earth walls and passive solar heating. The community operates with zero heating bills through harsh winters.",
    birthArchetypeContent: "Rammed-earth construction and passive thermal mass define May 4's mastery under Arcana 4. You build earth-integrated residential compounds that maintain constant internal temperatures without grid electricity.",
    highFrequencyExpression: "Operating in high structural alignment, your practice highlights passive solar home orientation, rammed-earth thermal walls, off-grid residential design, and zero-carbon housing.",
    shadowChallenges: "In shadow, you may exhibit stubborn architectural rigidity, micromanaging building crews, or resisting passive thermal model updates.",
    vocationAndFinance: "Suited for passive thermal home designers, rammed-earth building directors, off-grid residential leads, and green housing developers. Wealth builds through sustainable real estate development.",
    reflectionQuestions: [
      "Am I leading my architectural team with clear guidance or rigid demands?",
      "Where in my home designs can I integrate rammed-earth thermal mass technology?",
      "What zero-energy residential structure am I establishing for families today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 4?",
        answer: "May 4 is Taurus (Earth sign), infusing Arcana 4's executive discipline with grounded earth-building power."
      },
      {
        question: "How does May 4 differ from April 4?",
        answer: "April 4 carries Aries transit infrastructure, while May 4 carries Taurus passive solar architecture and rammed-earth residential communities."
      },
      {
        question: "Which careers suit May 4 best?",
        answer: "Passive solar architecture, rammed-earth construction, green real estate development, and residential operations."
      },
      {
        question: "How can May 4 maintain building momentum?",
        answer: "Combine thermal engineering standards with open team communication and environmental permits."
      }
    ],
    imageBrief: "Commanding architectural graphic showing an architect standing over blueprints of a modern rammed-earth solar home built into a grassy hillside at sunrise, color palette of earth terracotta, forest green, and gold."
  },
  5: {
    snippetAnswer: "Being born on May 5 connects your personal vibration to Arcana 5 (The Hierophant), amplified by compound double-5 date energy. May 5 bestows a talent for founding agroforestry institutes, publishing food forest manuals, and training regenerative arborists.",
    vignetteTitle: "The Agroforestry Institute Founder: Educating Global Food Forest Designers",
    vignetteScenario: "Establishing a global agroforestry academy on May 5, an educator creates degree programs in multi-strata food forest design. Their institute trains 1,500 foresters annually who plant edible canopies across 25 countries.",
    birthArchetypeContent: "Multi-strata canopy education and agroforestry leadership characterize May 5 under Arcana 5. Double-5 energy grants exceptional pedagogical reach, enabling you to build accredited academies that train food forest designers globally.",
    highFrequencyExpression: "In master educational light, you specialize in food forest curriculum publishing, agroforestry institute direction, edible canopy research, and training professional foresters.",
    shadowChallenges: "Under shadow stress, you might fall into rigid forestry dogma, preaching canopy principles you don't plant, or reacting defensively to student critiques.",
    vocationAndFinance: "Thrives as an agroforestry academy founder, food forest curriculum author, environmental institute dean, tree stewardship mentor, and forestry chancellor. Wealth expands through tuition and licensing.",
    reflectionQuestions: [
      "Am I teaching food forest design from practical planting experience?",
      "How can I expand my educational programs to reach young arborists globally?",
      "What agroforestry manual am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "Why is May 5 a double-5 birthday?",
        answer: "Month 5 and Day 5 double-anchor Arcana 5's master teacher frequency with extraordinary educational adaptability."
      },
      {
        question: "What zodiac sign is May 5?",
        answer: "May 5 is Taurus (Earth sign), giving physical stability and forestry focus to The Hierophant's educational mission."
      },
      {
        question: "What is the financial engine for May 5?",
        answer: "Founding and operating accredited agroforestry academies and licensing food forest curricula."
      },
      {
        question: "Which Arcana complements May 5?",
        answer: "Arcana 19 (The Sun) amplifies May 5's global institutional visibility and student enrollment."
      }
    ],
    imageBrief: "Inspiring illustration of an educator guiding students through a sunlit multi-strata food forest campus with tree canopy lecture halls, color palette of emerald green, golden wheat, and navy blue."
  },
  6: {
    snippetAnswer: "Being born on May 6 links your birth code to Arcana 6 (The Lovers). Positioned in early May, May 6 grants a natural talent for structuring eco-glamping resort alliances, negotiating outdoor retreat contracts, and building wilderness hospitality partnerships.",
    vignetteTitle: "The Eco-Glamping Alliance Director: Unifying Luxury Wilderness Retreats",
    vignetteScenario: "Brokering a coalition of 20 luxury eco-glamping resorts on May 6, a hospitality director establishes a shared zero-waste charter and marketing portal. The alliance commands premium international eco-travel bookings.",
    birthArchetypeContent: "High-end glamping partnerships and outdoor retreat coalitions define May 6's expression of Arcana 6. You synthesize luxury hospitality aesthetics with strict zero-waste charters, forging commercial alliances across boutique wilderness resorts.",
    highFrequencyExpression: "Demonstrating commercial alignment, your focus highlights eco-glamping resort coalition management, zero-waste hospitality standards, wilderness retreat branding, and luxury travel agreements.",
    shadowChallenges: "Shadow patterns include over-analyzing retreat partnership terms, fearing loss of individual lodge identity, or making weak compromises to avoid tension.",
    vocationAndFinance: "Ideal for eco-glamping alliance directors, wilderness hospitality leads, outdoor retreat partners, glamping supply heads, and partnership attorneys. Wealth grows through hospitality equity.",
    reflectionQuestions: [
      "Am I structuring glamping alliances on clear mutual values or quick compromises?",
      "How can I preserve luxury wilderness comfort while upholding strict zero-waste charters?",
      "What outdoor retreat partnership am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 6?",
        answer: "May 6 is Taurus (Earth sign), bringing grounded physical stability and luxury aesthetic focus to Arcana 6's partnership design."
      },
      {
        question: "How does May 6 differ from April 6?",
        answer: "April 6 carries Aries corporate brand agency mergers, while May 6 carries Taurus eco-glamping resort alliances and luxury wilderness retreats."
      },
      {
        question: "What is the financial key for May 6?",
        answer: "Structuring high-value glamping resort coalitions and exclusive wilderness booking portals."
      },
      {
        question: "Which Arcana complements May 6?",
        answer: "Arcana 4 (The Emperor) provides structural governance to anchor Arcana 6's glamping deals."
      }
    ],
    imageBrief: "Modern graphic depicting two retreat directors shaking hands outside a luxury canvas dome tent in a sunlit pine forest, color palette of forest green, warm canvas beige, and gold."
  },
  7: {
    snippetAnswer: "Being born on May 7 connects your personal vibration to Arcana 7 (The Chariot). Positioned in early May, May 7 endows you with a passion for solar electric river catamaran engineering, inland waterway logistics, and leading clean water transport fleets.",
    vignetteTitle: "The Solar River Catamaran Lead: Clean Inland Water Freight Fleets",
    vignetteScenario: "Designing a fleet of solar electric river barges on May 7, a naval engineer replaces diesel river transport across a 300-mile waterway. The solar vessels move cargo with zero noise and zero diesel emissions.",
    birthArchetypeContent: "May 7 individuals embody the forward momentum of Arcana 7 (The Chariot) fused with Taurus physical stamina. You excel in clean river transport technology, mastering solar electric barges and leading inland waterway freight fleets.",
    highFrequencyExpression: "Operating in active marine light, you demonstrate solar electric river catamaran design, zero-emission barge freight logistics, hydro-drive optimization, and river fleet leadership.",
    shadowChallenges: "Under shadow stress, you might become frustrated by shallow river currents, push solar battery packs past safety limits, or act brusquely toward river dock crews.",
    vocationAndFinance: "Excels as a solar river catamaran engineer, inland waterway transport director, hydro-drive developer, barge fleet lead, and maritime founder. Wealth grows through river freight contracts.",
    reflectionQuestions: [
      "Am I balancing high-speed river transport with strict battery thermal safety?",
      "How can I inspire my river logistics team during shallow water navigation?",
      "What clean river transport milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 7?",
        answer: "May 7 is Taurus (Earth sign), giving physical stamina and river engineering stability to Arcana 7."
      },
      {
        question: "How does May 7 differ from April 7?",
        answer: "April 7 carries Aries electric motorsport racing, while May 7 carries Taurus solar electric river catamaran design and inland waterway freight fleets."
      },
      {
        question: "What is the technical edge of May 7?",
        answer: "Designing solar electric river barges that move cargo with zero noise and zero diesel pollution."
      },
      {
        question: "Which Arcana complements May 7?",
        answer: "Arcana 11 (Strength) provides physical stamina to support Arcana 7's river fleet operations."
      }
    ],
    imageBrief: "Dynamic maritime graphic of a sleek solar electric river catamaran carrying cargo down a sunlit forest river, color palette of river blue, solar gold, and emerald green."
  },
  8: {
    snippetAnswer: "Being born on May 8 links your core frequency to Arcana 8 (Justice). Resting in early May, May 8 endows you with an agrarian talent for mountain tea harvesting audits, botanical trade policy, and plantation living wage compliance.",
    vignetteTitle: "The Fair-Trade Tea Auditor: Evaluating Mountain Plantation Wage Contracts",
    vignetteScenario: "Inspecting organic tea estates in high Darjeeling valleys on May 8, a labor standards reviewer verifies shade-growing methods and worker living wage payouts. Their audit awards top fair-trade certification for global tea exporters.",
    birthArchetypeContent: "Shade-grown Darjeeling tea estate audits and labor wage verification drive May 8 under Arcana 8. You evaluate soil organic purity and living wage contracts across high mountain harvesting communities.",
    highFrequencyExpression: "In legal and agrarian precision, your work centers on shade-grown tea estate auditing, organic soil certification verification, plantation wage compliance, and defending mountain trade ethics.",
    shadowChallenges: "Shadow patterns show up as legalistic nitpicking during estate inspections, rigid perfectionism, or ignoring local mountain culture in audits.",
    vocationAndFinance: "Ideal for Darjeeling tea estate auditors, shade-grown tea trade inspectors, mountain labor attorneys, and food equity commissioners. Wealth grows through estate audit contracts.",
    reflectionQuestions: [
      "Am I enforcing trade compliance with compassionate understanding for mountain tea workers?",
      "Where in my botanical supply chain can I build greater wage transparency?",
      "What fair-trade tea standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 8?",
        answer: "May 8 is Taurus (Earth sign), bringing grounded physical stability and botanical focus to Arcana 8's legal precision."
      },
      {
        question: "How does May 8 differ from April 8?",
        answer: "April 8 carries Aries tech antitrust litigation, while May 8 carries Taurus shade-grown organic tea auditing and plantation labor compliance."
      },
      {
        question: "What is the financial rule for May 8?",
        answer: "Maintain strict fair-trade transparency and organic compliance in all botanical tea investments."
      },
      {
        question: "Which Arcana complements May 8?",
        answer: "Arcana 11 (Strength) provides physical stamina to support May 8's mountain field audits."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a mist-covered mountain tea plantation with a magnifying crystal, color palette of emerald green, mist white, and gold."
  },
  9: {
    snippetAnswer: "Being born on May 9 connects your life path to Arcana 9 (The Hermit). Approaching mid-May, May 9 endows you with a passion for Amazonian canopy research labs, epiphytic orchid studies, and solitary rainforest plant science.",
    vignetteTitle: "The Canopy Botanist: Studying Epiphytic Orchids in Rainforest Tops",
    vignetteScenario: "Living in a tree-canopy research station on May 9, a botanist studies rare epiphytic orchids 150 feet above the ground. Their research reveals how canopy orchids absorb atmospheric moisture to survive drought.",
    birthArchetypeContent: "Tree-canopy research stations and epiphytic orchid biology anchor May 9 under Arcana 9. You thrive in solitary canopy platforms, analyzing how micro-climates in high rainforest branches cultivate rare medicinal orchid species.",
    highFrequencyExpression: "Operating in scientific solitude, your work highlights rainforest canopy research station management, epiphytic orchid taxonomy, micro-climate analysis, and publishing canopy botanical studies.",
    shadowChallenges: "In shadow, you may retreat into antisocial canopy isolation, hoard orchid data out of distrust, or show impatience toward ground support crews.",
    vocationAndFinance: "Suited for canopy botanists, epiphytic orchid researchers, rainforest lab leads, plant taxonomists, and botanical authors. Income grows through research publishing and patents.",
    reflectionQuestions: [
      "Am I balancing my solitary canopy research with public sharing to aid rainforest conservation?",
      "How can I apply my orchid discoveries to protect endangered tree canopies?",
      "What canopy plant mystery am I ready to study today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 9?",
        answer: "May 9 is Taurus (Earth sign), blending grounded physical patience with The Hermit's contemplative research focus."
      },
      {
        question: "How does May 9 differ from April 9?",
        answer: "April 9 carries Aries AI neural architecture research, while May 9 carries Taurus rainforest canopy botany and epiphytic orchid studies."
      },
      {
        question: "Why does May 9 require quiet canopy focus?",
        answer: "Solitude in tree-top stations allows May 9 to observe delicate canopy biology without ground distraction."
      },
      {
        question: "Which Arcana complements May 9?",
        answer: "Arcana 3 (The Empress) offers fertile natural growth to support May 9's orchid discoveries."
      }
    ],
    imageBrief: "Mystical portrait of a botanist in a sunlit tree-canopy laboratory examining a glowing epiphytic orchid on a high branch, color palette of deep forest green, orchid magenta, and gold."
  },
  10: {
    snippetAnswer: "Being born on May 10 connects your core code to Arcana 10 (Wheel of Fortune). Closing the opening decade of May, May 10 endows you with an astute market instinct for organic citrus grove real estate, fruit farm timing, and agricultural trust funds.",
    vignetteTitle: "The Citrus Orchard Investor: Acquiring & Scaling Organic Fruit Groves",
    vignetteScenario: "Acquiring 2,000 acres of conventional citrus groves on May 10, an investor transitions the land to 100% organic regenerative management. The grove value doubles within three years while supplying fresh organic juice nationwide.",
    birthArchetypeContent: "Organic citrus groves and fruit farm asset cycles drive May 10's expression of Arcana 10. You possess a specialized real estate instinct for timing citrus land purchases, converting depleted orchards into thriving organic juice production trusts.",
    highFrequencyExpression: "In active citrus real estate light, you acquire organic fruit groves, time orchard conversions, manage agricultural trusts, and scale organic juice production.",
    shadowChallenges: "Shadow patterns show up as speculative fruit farm gambling, impatience during tree growth phases, or over-leveraging citrus real estate funds.",
    vocationAndFinance: "Excels as an organic citrus orchard investor, fruit farm fund manager, agricultural trust director, and grove conversion lead. Wealth accelerates through orchard equity.",
    reflectionQuestions: [
      "Am I trusting natural multi-year tree growth cycles or rushing immediate harvest returns?",
      "How can I balance commercial grove investments with genuine soil health restoration?",
      "What citrus orchard opportunity am I ready to evaluate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 10?",
        answer: "May 10 is Taurus (Earth sign), giving grounded physical stability and orchard ambition to Arcana 10's cycle timing."
      },
      {
        question: "How does May 10 differ from April 10?",
        answer: "April 10 carries Aries tech stock cycle timing, while May 10 carries Taurus organic citrus grove acquisition and fruit farm conversion."
      },
      {
        question: "What is the financial superpower of May 10?",
        answer: "Timing citrus orchard acquisitions and converting conventional groves into organic trusts."
      },
      {
        question: "Which Arcana complements May 10?",
        answer: "Arcana 21 (The World) expands May 10's fruit farm fund onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolist graphic of a golden celestial wheel turning over a sunlit organic orange grove laden with ripe fruit, color palette of citrus orange, emerald green, and sky blue."
  },
  11: {
    snippetAnswer: "Being born on May 11 activates Master Number 11 frequency under Arcana 11 (Strength). Moving through mid-May, May 11 endows you with unflinching somatic endurance, mountain gorilla troop protection, and endangered primate protection.",
    vignetteTitle: "The Primate Sanctuary Lead: Protecting Mountain Rainforest Troops",
    vignetteScenario: "Directing an endangered primate sanctuary on May 11, a conservation biologist guides the rehabilitation of orphaned mountain gorillas. Their calm somatic presence restores the gorillas to wild family troops.",
    birthArchetypeContent: "Wild mountain gorilla protection and primate infant rehabilitation characterize May 11's Master 11 vibration under Arcana 11. You lead rainforest field teams, applying somatic composure to restore traumatized gorillas to wild troops.",
    highFrequencyExpression: "In master physical alignment, your practice highlights mountain gorilla sanctuary management, primate troop rehabilitation, anti-poaching patrol direction, and rainforest endurance.",
    shadowChallenges: "Under shadow pressure, you might experience physical exhaustion from steep rainforest patrols, sudden anger when encountering poachers, or suppressing physical fatigue.",
    vocationAndFinance: "Performs as a wild gorilla sanctuary director, primate rehabilitation lead, anti-poaching field commander, and rainforest conservation trustee. Wealth grows through multi-lateral wildlife trusts.",
    reflectionQuestions: [
      "How can I maintain my physical stamina during steep rainforest patrols?",
      "Am I applying quiet somatic composure rather than physical force in high-stress field encounters?",
      "What primate conservation initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Is May 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, granting extraordinary spiritual intuition, physical stamina, and quiet somatic mastery over wildlife."
      },
      {
        question: "What zodiac sign is May 11?",
        answer: "May 11 is Taurus (Earth sign), adding grounded physical endurance and animal connection to Arcana 11's intense strength."
      },
      {
        question: "How does May 11 differ from April 11?",
        answer: "April 11 carries Aries Olympic athletic performance coaching, while May 11 carries Taurus mountain gorilla sanctuary direction and primate rehabilitation."
      },
      {
        question: "What is the health key for May 11?",
        answer: "Regular physical grounding practices and systematic sleep recovery between intense mountain patrols."
      }
    ],
    imageBrief: "Inspiring illustration of a calm primatologist sitting peacefully beside a majestic silverback gorilla in a mist-covered mountain rainforest under a star halo, color palette of emerald green, mist silver, and gold."
  },
  12: {
    snippetAnswer: "Being born on May 12 links your life vibration to Arcana 12 (The Hanged Man). Moving through mid-May, May 12 grants a talent for industrial micro-plastic filtration design, inverting river waste flows, and aquatic bio-engineering.",
    vignetteTitle: "The Micro-Plastic Filtration Engineer: Intercepting Industrial Fiber Waste",
    vignetteScenario: "Designing a magnetic bio-filter for textile factory drains on May 12, an engineer traps 99% of synthetic micro-plastic fibers before they reach municipal rivers. The reclaimed fibers are upcycled into acoustic insulation.",
    birthArchetypeContent: "Textile mill micro-plastic bio-filtration and wastewater inversion define May 12 under Arcana 12. You flip traditional waste disposal upside down, deploying magnetic bio-filters at factory discharge pipes to capture micro-fibers for upcycling.",
    highFrequencyExpression: "In high creative light, your work focuses on factory micro-plastic bio-filtration, wastewater upcycling engineering, non-profit river protection, and radical circular design.",
    shadowChallenges: "Shadow patterns show up as feeling martyred by slow factory compliance approvals, lingering in analytical indecision, or sacrificing personal income for non-profit causes.",
    vocationAndFinance: "Ideal for micro-plastic filtration leads, industrial waste-to-material architects, non-profit water safety leads, circular engineering leads, and aquatic leads. Wealth grows through filtration patents.",
    reflectionQuestions: [
      "What industrial waste stream requires me to flip my perspective completely?",
      "Am I balancing my non-profit environmental work with personal financial stability?",
      "What micro-plastic filtration technology can I introduce today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 12?",
        answer: "May 12 is Taurus (Earth sign), giving physical persistence and practical execution to The Hanged Man's perspective shifts."
      },
      {
        question: "How does May 12 differ from April 12?",
        answer: "April 12 carries Aries zero-waste supply chain design, while May 12 carries Taurus industrial micro-plastic filtration and wastewater bio-engineering."
      },
      {
        question: "What is the core lesson for May 12?",
        answer: "Learning that trapping micro-plastics at factory drains reveals profitable upcycled insulation technologies."
      },
      {
        question: "Which Arcana complements May 12?",
        answer: "Arcana 4 (The Emperor) provides structural backing to execute May 12's filtration systems."
      }
    ],
    imageBrief: "Mystical modern painting of an inverted glass river filter where trapped glowing micro-fibers flow upward into clean insulation panels, color palette of ocean turquoise, silver, and gold."
  },
  13: {
    snippetAnswer: "Being born on May 13 connects your personal path to Arcana 13 (Transformation / Death). Resting near mid-May, May 13 endows you with a powerful ability to lead post-industrial open-pit mine bio-recovery, phytoremediation, and total soil renewal.",
    vignetteTitle: "The Phytoremediation Lead: Reclaiming Open-Pit Copper Mines",
    vignetteScenario: "Tasked with restoring a 1,000-acre abandoned copper mine on May 13, a bio-remediation scientist plants heavy-metal accumulating poplar trees and hyper-accumulator grasses. Within three years, soil toxicity drops to safe natural levels.",
    birthArchetypeContent: "May 13 individuals carry the potent rebirth frequency of Arcana 13 (Transformation) with Taurus earth persistence. You do not fear scarred mine sites; you excel at applying phytoremediation to extract heavy metals and transform barren pits into thriving forests.",
    highFrequencyExpression: "Operating in high light, you excel in open-pit mine phytoremediation, heavy metal soil extraction, biological site recovery, and leading total ecological land renewals.",
    shadowChallenges: "When ungrounded, you might feel overwhelmed by scarred mining landscapes, attempt field work without protective gear, or brood over industrial destruction.",
    vocationAndFinance: "Suited for phytoremediation leads, mine site recovery scientists, heavy metal soil extractors, environmental remediation leads, and land renewal directors. Wealth expands through remediation contracts.",
    reflectionQuestions: [
      "What scarred mine site or toxic land am I ready to clean and restore?",
      "How can I apply phytoremediation plants to accelerate heavy metal extraction?",
      "Where in my business or life is an ecological rebirth waiting to occur?"
    ],
    faqItems: [
      {
        question: "Is May 13 an unlucky birthday in Destiny Matrix?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing soil rebirth, phytoremediation, and high-impact mine site renewal."
      },
      {
        question: "What zodiac sign is May 13?",
        answer: "May 13 is Taurus (Earth sign), bringing physical persistence and botanical focus to Arcana 13's transformative power."
      },
      {
        question: "What is the financial engine for May 13?",
        answer: "Executing phytoremediation contracts that restore scarred mining real estate for community land use."
      },
      {
        question: "Which Arcana complements May 13?",
        answer: "Arcana 19 (The Sun) brings radiant sunlight and public recognition to illuminate May 13's land renewal results."
      }
    ],
    imageBrief: "Striking artwork of green poplar trees sprouting across a terraced copper mine pit under a bright spring sun, color palette of emerald green, copper orange, and sky blue."
  },
  14: {
    snippetAnswer: "Being born on May 14 links your life vibration to Arcana 14 (Temperance). Positioned near mid-May, May 14 bestows a talent for balancing alpine river basin hydro-diplomacy, glacial melt water allocation, and precision dam flow management.",
    vignetteTitle: "The Glacial Water Allocation Envoy: Managing Alpine River Basins",
    vignetteScenario: "Mediating a cross-border water sharing treaty between three mountain nations on May 14, a hydro-diplomat balances seasonal glacial melt water flows. Their hydro-flow model guarantees water for agriculture and hydroelectric power without downstream depletion.",
    birthArchetypeContent: "May 14 individuals embody the harmonious synthesis of Arcana 14 (Temperance) fused with Taurus earth practicality. You possess a talent for balancing glacial melt water allocations, managing alpine river basin hydro-diplomacy, and designing sustainable dam release flows.",
    highFrequencyExpression: "In active balance, you demonstrate alpine river basin hydro-diplomacy, glacial melt water allocation, dam release flow balancing, and international water mediation.",
    shadowChallenges: "Shadow patterns show up as avoiding tough water allocation decisions out of conflict aversion, passive analytical delays, or compromising river flow safety limits.",
    vocationAndFinance: "Ideal for glacial water allocation envoys, alpine hydro-diplomats, river basin managers, hydroelectric flow engineers, and water policy mediators. Wealth expands through water engineering contracts.",
    reflectionQuestions: [
      "Am I balancing seasonal glacial water demands with long-term river basin health?",
      "Where in my international negotiations can I bring greater diplomatic moderation?",
      "What alpine water management framework requires rebalancing today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 14?",
        answer: "May 14 is Taurus (Earth sign), giving physical practicality and water focus to Arcana 14's balanced synthesis."
      },
      {
        question: "How does May 14 differ from April 14?",
        answer: "April 14 carries Aries portfolio risk hedging, while May 14 carries Taurus alpine river basin hydro-diplomacy and glacial melt water allocation."
      },
      {
        question: "What is the financial secret of May 14?",
        answer: "Designing balanced hydro-flow management systems that secure water for agriculture and clean power."
      },
      {
        question: "Which Arcana complements May 14?",
        answer: "Arcana 8 (Justice) provides legal backing to enforce May 14's international water treaties."
      }
    ],
    imageBrief: "Harmonious artwork depicting a winged figure pouring glacial water between two golden urns over a snow-capped mountain river valley with a hydroelectric dam below, color palette of emerald green, glacial blue, and gold."
  },
  15: {
    snippetAnswer: "Being born on May 15 connects your birth code to Arcana 15 (The Devil). Approaching mid-May, May 15 grants intense charisma, financial mastery over seed patent litigation, and the ability to liberate organic farmers from corporate seed lock-ins.",
    vignetteTitle: "The Seed Sovereignty Litigator: Breaking Corporate Seed Monopolies",
    vignetteScenario: "Defending a regional organic farming cooperative on May 15, a seed sovereignty attorney defeats a corporate seed patent infringement lawsuit. Their victory establishes legal protections for saving heirloom crop seeds across five states.",
    birthArchetypeContent: "Heirloom seed patent defense and farm monopoly dismantling mark May 15's expression of Arcana 15. You command deep legal leverage in agricultural courtrooms, striking down corporate seed patent lock-ins to restore seed saving rights to organic farming co-ops.",
    highFrequencyExpression: "In high legal authority, your work highlights seed patent litigation, breaking corporate farm monopolies, defending organic co-ops, and securing seed sovereignty.",
    shadowChallenges: "Under shadow influence, you might be tempted by predatory patent monetization, manipulative crop speculation, or obsession with legal control.",
    vocationAndFinance: "Thrives as a seed sovereignty litigator, organic farm antitrust lawyer, agricultural patent defender, and seed trust lead. Wealth grows through high-value agricultural litigation.",
    reflectionQuestions: [
      "Am I using my legal leverage to empower organic farmers or to gain monopoly control?",
      "What seed lock-in or unhealthy commercial dependency am I ready to eliminate today?",
      "How can I bring complete legal transparency to my seed and farm investments?"
    ],
    faqItems: [
      {
        question: "Does Arcana 15 mean a May 15 birthday is negative?",
        answer: "Not at all. In Destiny Matrix, Arcana 15 represents intense charisma, legal power, and the ability to break free from corporate seed monopolies."
      },
      {
        question: "What zodiac sign is May 15?",
        answer: "May 15 is Taurus (Earth sign), infusing Arcana 15's legal power with grounded agricultural persistence."
      },
      {
        question: "What is the financial engine for May 15?",
        answer: "Defending organic farm cooperatives and litigating seed patent antitrust cases."
      },
      {
        question: "Which Arcana complements May 15?",
        answer: "Arcana 14 (Temperance) provides calming balance to prevent litigation over-reach."
      }
    ],
    imageBrief: "Dramatic artwork showing a figure holding a golden heirloom wheat stalk that dissolves iron patent locks over an organic farm field, color palette of rich burgundy, golden wheat, and obsidian."
  },
  16: {
    snippetAnswer: "Being born on May 16 links your life code to Arcana 16 (The Tower). Positioned in mid-May, May 16 bestows a technical focus on inspecting seawall structural erosion, retrofitting tsunami breakwaters, and rebuilding resilient coastal infrastructure.",
    vignetteTitle: "The Seawall Engineer: Retrofitting Coastal Tsunami Defense Barriers",
    vignetteScenario: "Inspecting a concrete sea wall on May 16, a marine structural engineer identifies hidden ocean saltwater erosion. Ordering emergency carbon-fiber retrofitting, they protect a coastal city from storm surge breaches.",
    birthArchetypeContent: "Coastal seawall saltwater corrosion detection and breakwater engineering define May 16 under Arcana 16. You audit aging concrete coastal barriers, ordering emergency carbon-fiber retrofits to defend coastal cities from storm surge breaches.",
    highFrequencyExpression: "In coastal structural engineering, you audit aging seawall barriers, detect saltwater concrete corrosion, mandate carbon-fiber retrofits, and protect coastal cities from storm surges.",
    shadowChallenges: "When ungrounded, you might create unnecessary panic during minor seawall inspections, deliver harsh destructive criticism, or delay urgent breakwater repairs.",
    vocationAndFinance: "Thrives as a coastal seawall engineer, tsunami barrier auditor, breakwater safety director, and marine hazard consultant. Wealth grows through specialized seawall safety certifications.",
    reflectionQuestions: [
      "What hidden structural flaw am I ready to identify and fix in my coastal engineering or life?",
      "How can I deliver safety audits with clear, solution-oriented communication?",
      "What resilient seawall foundation am I establishing for coastal communities?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 16?",
        answer: "May 16 is Taurus (Earth sign), bringing physical persistence and structural focus to The Tower's awakening."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is revealing hidden flaws so you build indestructible strength."
      },
      {
        question: "Which careers suit May 16 best?",
        answer: "Coastal seawall engineering, tsunami barrier auditing, breakwater safety management, and coastal hazard restoration."
      },
      {
        question: "How can May 16 navigate sudden change?",
        answer: "Focus on core marine structural principles and rebuild systematically from rock-solid foundations."
      }
    ],
    imageBrief: "Striking architectural illustration of a golden reinforced seawall backed by lightning, holding back ocean storm waves, color palette of steel blue, gold, and ocean navy."
  },
  17: {
    snippetAnswer: "Being born on May 17 connects your spiritual vibration to Arcana 17 (The Star). Resting near mid-May, May 17 grants visionary inspiration, deep-sea coral nursery array deployment, unwavering optimism, and guiding marine thermal satellites.",
    vignetteTitle: "The Ocean Coral Array Lead: Deploying Deep-Sea Nursery Monitoring Satellites",
    vignetteScenario: "Directing an ocean restoration project on May 17, a marine biologist deploys satellite-linked acoustic sensors over deep-sea coral reefs. The system detects illegal bottom trawling, enabling real-time naval protection of ancient coral reefs.",
    birthArchetypeContent: "Satellite-linked reef acoustic sensors and deep-sea coral restoration embody May 17's mastery under Arcana 17. You link orbital thermal satellite arrays to underwater coral nurseries, monitoring reef health and preventing illegal bottom trawling across ancient marine sanctuaries.",
    highFrequencyExpression: "In celestial marine alignment, your leadership focuses on satellite reef acoustic tracking, deep-sea coral restoration, orbital ocean surveillance, and inspiring marine conservation hope.",
    shadowChallenges: "Shadow patterns show up as ungrounded ocean daydreams without field execution, feeling alienated from local fishing ports, or losing hope during coral damage events.",
    vocationAndFinance: "Thrives as a satellite ocean sensor lead, marine conservation founder, deep-sea biologist, clean-tech visionary, and aquatic array director. Prosperity expands through marine conservation contracts.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to execute my ambitious ocean protection vision?",
      "How can I use satellite acoustic platforms to illuminate deep-sea conservation solutions?",
      "What ocean nursery goal am I ready to launch today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 17?",
        answer: "May 17 is Taurus (Earth sign), bringing grounded physical persistence and marine focus to Arcana 17's celestial starlight."
      },
      {
        question: "How does May 17 differ from April 17?",
        answer: "April 17 carries Aries commercial Earth-observation satellites, while May 17 carries Taurus satellite-monitored deep-sea coral nursery arrays and acoustic reef protection."
      },
      {
        question: "What is the financial engine for May 17?",
        answer: "Building and operating satellite-monitored ocean acoustic sensor arrays funded by marine trusts."
      },
      {
        question: "Which Arcana complements May 17?",
        answer: "Arcana 21 (The World) expands May 17's ocean acoustic monitoring onto a global international scale."
      }
    ],
    imageBrief: "Breathtaking artwork of glowing deep-sea coral reefs linked by golden beam rays to a satellite orbiting Earth above, color palette of ocean turquoise, star gold, and coral red."
  },
  18: {
    snippetAnswer: "Being born on May 18 links your birth code to Arcana 18 (The Moon). Approaching the Taurus-Gemini cusp, May 18 endows you with a rich intuitive imagination, hydrothermal vent ecology research, and navigating deep-ocean acoustic sonar technology.",
    vignetteTitle: "The Hydrothermal Vent Ecologist: Mapping Abyssal Chemosynthesis",
    vignetteScenario: "Piloting a deep-sea submersible on May 18, a oceanographer discovers novel extremophile bacteria thriving around abyssal hydrothermal vents. Their discovery of heat-stable enzymes revolutionizes industrial green chemistry.",
    birthArchetypeContent: "Abyssal hydrothermal vent ecology and chemosynthetic enzymes mark May 18's path under Arcana 18. You descend into pitch-black ocean trenches, utilizing specialized sonar mapping to discover heat-resistant extremophile bacteria that transform industrial green chemistry.",
    highFrequencyExpression: "In abyssal light mastery, your work highlights hydrothermal vent exploration, chemosynthetic enzyme discovery, deep-trench sonar mapping, and green chemistry innovation.",
    shadowChallenges: "Under shadow stress, you might succumb to irrational abyssal fears, fear of ocean pitch-blackness, self-deception, or escaping into ungrounded aquatic fantasies.",
    vocationAndFinance: "Ideal for abyssal vent ecologists, ocean sonar mapping leads, extremophile enzyme researchers, oceanographers, and marine authors. Wealth grows through green chemistry patents.",
    reflectionQuestions: [
      "Am I trusting my intuitive deep-sea perception or letting irrational abyssal fears cloud my focus?",
      "How can I apply chemosynthetic enzyme discoveries to serve industrial green chemistry?",
      "What abyssal ocean mystery am I ready to illuminate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 18?",
        answer: "May 18 sits near the Taurus-Gemini cusp, blending Taurus physical persistence with The Moon's intuitive abyssal vision."
      },
      {
        question: "How does May 18 differ from April 18?",
        answer: "April 18 carries Aries night-vision optical engineering, while May 18 carries Taurus hydrothermal vent ecology and abyssal chemosynthetic enzyme research."
      },
      {
        question: "What is the technical superpower of May 18?",
        answer: "Discovering heat-stable extremophile enzymes around deep ocean vents that transform green chemistry."
      },
      {
        question: "Which Arcana complements May 18?",
        answer: "Arcana 19 (The Sun) brings radiant surface light to balance Arcana 18's abyssal ocean exploration."
      }
    ],
    imageBrief: "Atmospheric symbolist painting of a deep-sea submersible light beam illuminating a glowing hydrothermal vent chimney in an ocean trench, color palette of deep ocean midnight navy, fiery orange, and gold."
  },
  19: {
    snippetAnswer: "Being born on May 19 connects your core frequency to Arcana 19 (The Sun). Closing Taurus season at peak solar power, May 19 bestows radiant executive warmth, floating PV reservoir engineering, and inspiring public clean energy victory.",
    vignetteTitle: "The Hydro-Solar Array Developer: Commissioning Floating PV Reservoirs",
    vignetteScenario: "Commissioning a 500MW floating solar installation over a hydro reservoir on May 19, an energy executive covers 1,000 acres of water. The hybrid plant generates clean power year-round while preventing reservoir evaporation.",
    birthArchetypeContent: "Hydro-solar reservoir installations and 500MW hybrid clean energy grids represent May 19's peak solar power under Arcana 19. You cover water surfaces with elevated PV panels, eliminating reservoir evaporation while supplying municipal power grids.",
    highFrequencyExpression: "In radiant solar mastery, your leadership highlights floating solar array deployment, reservoir evaporation prevention, hydro-solar grid integration, and public clean energy success.",
    shadowChallenges: "In shadow, you may experience egocentric vanity, demanding absolute spotlight control over solar projects, physical exhaustion from over-working, or hiding stress behind smiles.",
    vocationAndFinance: "Performs with distinction as a hydro-solar hybrid developer, floating PV energy director, reservoir clean-tech chair, and utility power executive. Wealth accelerates through multi-megawatt energy sales.",
    reflectionQuestions: [
      "Am I sharing my executive warmth to empower my engineering and energy teams equally?",
      "How can I pace my intense solar energy drive to maintain long-term physical stamina?",
      "What floating solar reservoir initiative am I ready to commission today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 19?",
        answer: "May 19 is the final full day of Taurus (Earth sign), representing the peak physical solar strength of Taurus season."
      },
      {
        question: "How does May 19 differ from April 19?",
        answer: "April 19 carries Aries concentrated solar power plant engineering, while May 19 carries Taurus 500MW floating solar reservoir engineering and hydro-solar hybrid grids."
      },
      {
        question: "What is the financial engine for May 19?",
        answer: "Commissioning floating solar reservoir arrays that sell clean power while reducing reservoir evaporation."
      },
      {
        question: "Which Arcana complements May 19?",
        answer: "Arcana 21 (The World) expands May 19's floating solar enterprise onto a global international stage."
      }
    ],
    imageBrief: "Radiant tarot-style artwork of a triumphant figure standing over a sunlit blue reservoir covered in glowing golden solar panels under a blazing sun, color palette of warm gold, reservoir blue, and sky blue."
  },
  20: {
    snippetAnswer: "Being born on May 20 links your birth vibration to Arcana 20 (Judgement). Opening Gemini season on the Cusp of Energy, May 20 endows you with a grounded spiritual calling, subterranean seed vault direction, and preserving global crop genetics.",
    vignetteTitle: "The Subterranean Crop Vault Director: Safeguard for Global Genetic Food Security",
    vignetteScenario: "Opening Gemini season on May 20, an agricultural geneticist directs a global deposit ceremony placing 100,000 heirloom seed varieties in a subterranean mountain vault, securing crop diversity for future centuries.",
    birthArchetypeContent: "Subterranean arctic seed vault governance and heirloom crop genetic protection mark May 20 on the Taurus-Gemini cusp under Arcana 20. You direct international deposits of ancient seed varieties into deep mountain vaults, safeguarding planetary food security.",
    highFrequencyExpression: "Operating in awakening clarity, your path centers on subterranean seed vault direction, heirloom genetic diversity preservation, international food security governance, and ancestral seed defense.",
    shadowChallenges: "Under shadow friction, you may linger in harsh judgment over past crop diversity loss, hold grudges against industrial seed corporations, or hesitate during vault deposits.",
    vocationAndFinance: "Ideal for subterranean seed vault directors, heirloom crop geneticists, food security envoys, agricultural heritage counselors, and sanctuary founders. Wealth builds through international research grants.",
    reflectionQuestions: [
      "What heirloom crop variety or family genetic heritage am I called to protect and preserve?",
      "Am I listening to my quiet inner awakening or staying trapped in past crop loss grief?",
      "What food security vault framework am I ready to establish for future generations?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 20?",
        answer: "May 20 sits on the Taurus-Gemini cusp, marking the opening transition into Gemini (Air sign)."
      },
      {
        question: "How does May 20 differ from April 20?",
        answer: "April 20 carries Taurus opening mine site land restoration, while May 20 carries Taurus-Gemini subterranean crop vault direction and genetic preservation."
      },
      {
        question: "Which careers suit May 20 best?",
        answer: "Subterranean crop vault direction, heirloom genetics, food security diplomacy, and agricultural heritage preservation."
      },
      {
        question: "How can May 20 overcome self-judgment?",
        answer: "Focus on active seed preservation and view ancient crop varieties as living keys for future climate resilience."
      }
    ],
    imageBrief: "Inspiring symbolist artwork of an angel sounding a golden trumpet over a crystalline subterranean vault stored with glowing golden seed vials, color palette of emerald green, ice blue, and gold."
  },
  21: {
    snippetAnswer: "Being born on May 21 connects your core code to Arcana 21 (The World). Resting in early Gemini season, May 21 bestows a borderless diplomatic vision, a talent for completing international marine protection accords, and global ocean sustainability treaties.",
    vignetteTitle: "The High-Seas Treaty Negotiator: Unifying 120 Nations on Marine Sanctuaries",
    vignetteScenario: "Finalizing a historic international high-seas treaty on May 21, a diplomat unifies 120 nations under a legally binding accord that bans industrial mining across international ocean trenches.",
    birthArchetypeContent: "High-seas marine sanctuary accords and 120-nation ocean mining bans embody May 21's global completion under Arcana 21. You channel Gemini diplomatic intellect into international treaty negotiations, establishing legally binding protection across international ocean waters.",
    highFrequencyExpression: "In international ocean diplomacy, you negotiate borderless high-seas treaties, unite 120 nations under marine protection accords, and ban deep-sea ocean trench mining.",
    shadowChallenges: "In shadow, you may experience fear of finalizing multi-national treaty terms, feeling ungrounded without a home base, or perfectionist delays in accord ratification.",
    vocationAndFinance: "Excels as an international high-seas treaty negotiator, UN marine protection envoy, global ocean trustee, and environmental diplomat. Wealth expands through international policy retainers.",
    reflectionQuestions: [
      "What major international marine treaty am I ready to bring to complete ratification?",
      "How can I expand my diplomatic vision to encompass broader global ocean alliances?",
      "Where in my journey can I celebrate the complete international network I have built?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 21?",
        answer: "May 21 is early Gemini (Air sign), bringing communicative intellect and diplomatic agility to Arcana 21's global completion."
      },
      {
        question: "How does May 21 differ from April 21?",
        answer: "April 21 carries Taurus organic coffee trade treaties, while May 21 carries Gemini international high-seas marine protection treaties and 120-nation ocean negotiations."
      },
      {
        question: "What is the financial engine for May 21?",
        answer: "Structuring borderless international marine protection accords and global ocean sustainability trusts."
      },
      {
        question: "Which Arcana complements May 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new global treaty cycles."
      }
    ],
    imageBrief: "Regal symbolist illustration of a figure dancing within a golden laurel wreath surrounded by flags of 120 nations over a sunlit globe, color palette of ocean turquoise, gold, and azure blue."
  },
  22: {
    snippetAnswer: "Born on May 22, your life code activates Master Number 22 under Arcana 22 (The Fool / 0). Aligning with World Biodiversity Day, May 22 endows you with architectural earth-building mastery, legendary ecological vision, and constructing global rainforest biosphere reserves.",
    vignetteTitle: "The World Biodiversity Day Champion: Launching Amazonian Corridor Networks",
    vignetteScenario: "Commemorating World Biodiversity Day on May 22, an eco-architect secures multi-national agreements for a 15-million-acre rainforest wildlife corridor linking Amazonian reserves.",
    birthArchetypeContent: "World Biodiversity Day (May 22) blends Master 22 vision with Arcana 22's uninhibited potential. You construct multi-country Amazonian wildlife corridors that safeguard planetary species diversity.",
    highFrequencyExpression: "Celebrating World Biodiversity Day, you lead Amazonian wildlife corridor initiatives, build multi-national land trusts, and champion global rainforest protection.",
    shadowChallenges: "In shadow states, you may doubt your Amazonian conservation plans, over-rely on speculative funding, or clash with municipal land zoning authorities.",
    vocationAndFinance: "Thrives as a World Biodiversity Day wildlife corridor architect, Amazonian reserve director, multi-national land trust lead, and biodiversity advocate. Wealth expands through international conservation grants.",
    reflectionQuestions: [
      "What Amazonian wildlife corridor project am I called to launch on World Biodiversity Day?",
      "Am I combining my uninhibited leaps of faith with practical multi-national land trust strategy?",
      "Where in my life am I ready to establish a new ecological sanctuary today?"
    ],
    faqItems: [
      {
        question: "What makes May 22 special on World Biodiversity Day?",
        answer: "May 22 links Master Number 22 (Master Builder) with Arcana 22 (The Fool) and World Biodiversity Day, empowering multi-country rainforest wildlife corridor creation."
      },
      {
        question: "What zodiac sign governs May 22?",
        answer: "May 22 is Gemini (Air sign), infusing communicative diplomacy into Master 22's Amazonian conservation projects."
      },
      {
        question: "What are the primary career paths for May 22?",
        answer: "Amazonian wildlife corridor architecture, multi-national land trust direction, and biodiversity advocacy."
      },
      {
        question: "How can May 22 maintain project momentum?",
        answer: "Anchor large ecological visions with practical legal agreements and local indigenous partnerships."
      }
    ],
    imageBrief: "Breathtaking illustration of a master builder figure standing atop a tropical mountain summit on World Biodiversity Day holding a glowing green globe encircled by rare wildlife and flora, color palette of emerald green, golden sunlight, and azure blue."
  },
  23: {
    snippetAnswer: "Being born on May 23 connects your personal frequency to Arcana 5 (The Hierophant), derived from compound digits 2 (Sensitivity) and 3 (Expression). Resting in early Gemini season, May 23 endows you with a talent for authoring urban arboriculture manuals and teaching municipal tree shade policy.",
    vignetteTitle: "The Urban Arboriculture Author: Designing City Tree Canopy Policies",
    vignetteScenario: "Publishing a comprehensive textbook on municipal tree shade policy on May 23, an urban arborist trains city planners across 50 metros. Their manual becomes mandatory policy, doubling city tree shade in hot urban centers.",
    birthArchetypeContent: "Urban tree shade legislation and municipal canopy policy manuals mark May 23 under Arcana 5. You translate urban forestry research into mandatory city planning codes, doubling tree shade across metropolitan districts.",
    highFrequencyExpression: "In educational and municipal authority, your work focuses on urban shade policy manuals, city canopy planning, arborist training textbooks, and municipal forestry reform.",
    shadowChallenges: "Shadow patterns show up as dogmatic forestry theories, unwillingness to adopt drone canopy survey data, or preaching tree conservation without field application.",
    vocationAndFinance: "Excels as a city tree shade author, municipal canopy director, urban forestry planner, and environmental publisher. Wealth grows through city consulting contracts and textbook sales.",
    reflectionQuestions: [
      "Am I teaching urban tree canopy policy from practical planting experience and city data?",
      "How can I translate complex canopy science into clear guidelines for municipal leaders?",
      "What urban arboriculture manual am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 23?",
        answer: "May 23 is Gemini (Air sign), infusing The Hierophant's teaching mission with communicative intellect."
      },
      {
        question: "How does May 23 differ from May 5?",
        answer: "May 5 carries Taurus permaculture university founding, while May 23 carries Gemini urban arboriculture authorship and municipal tree shade policy manuals."
      },
      {
        question: "What is the financial model for May 23?",
        answer: "Publishing urban arboriculture manuals and consulting for municipal city planning departments."
      },
      {
        question: "Which Arcana complements May 23?",
        answer: "Arcana 3 (The Empress) offers fertile growth to support Arcana 5's arboriculture teaching."
      }
    ],
    imageBrief: "Vibrant artwork of an arborist author presenting an urban tree canopy blueprint on a digital tablet to city officials in a sunlit metropolitan park, color palette of emerald green, golden sunlight, and slate grey."
  },
  24: {
    snippetAnswer: "Being born on May 24 links your birth vibration to Arcana 6 (The Lovers), derived from compound digits 2 (Diplomacy) and 4 (Structural Order). Positioned in early Gemini season, May 24 bestows a talent for structuring outdoor adventure trek cooperatives and eco-guide alliances.",
    vignetteTitle: "The Mountain Guide Co-Op Director: Unifying Expedition Trekking Alliances",
    vignetteScenario: "Unifying 50 alpine climbing guides on May 24, a travel director creates a cooperative booking portal and revenue-sharing framework. The alliance secures direct international trekking expedition bookings.",
    birthArchetypeContent: "Alpine climbing guide cooperatives and mountain trek booking portals characterize May 24 under Arcana 6. Compound 2+4 structural order enables you to unify local guides under shared profit-sharing charters.",
    highFrequencyExpression: "In structural partnership alignment, your focus centers on mountain trek co-op management, outdoor guide revenue sharing, digital expedition booking portals, and adventure travel alliances.",
    shadowChallenges: "When out of balance, you may experience legal delays in co-op contract formation, over-focusing on booking portal code, or hesitation during guide deadlocks.",
    vocationAndFinance: "Ideal for mountain trek co-op leads, climbing guide alliance directors, alpine expedition hub leads, and adventure travel founders. Wealth grows through co-op booking commissions.",
    reflectionQuestions: [
      "Am I building trekking alliances on clear mutual agreements or verbal promises?",
      "How can I combine digital booking structure with genuine mountain guide community trust?",
      "What outdoor adventure alliance am I ready to formalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 24?",
        answer: "May 24 is Gemini (Air sign), bringing communicative intellect and adventure agility to Arcana 6's partnership design."
      },
      {
        question: "How does May 24 differ from May 6?",
        answer: "May 6 carries Taurus eco-glamping luxury hospitality, while May 24 carries Gemini outdoor trekking guide co-op founding and digital booking platforms."
      },
      {
        question: "What is the financial secret of May 24?",
        answer: "Structuring regional mountain trek co-ops that command direct international adventure booking commissions."
      },
      {
        question: "Which Arcana complements May 24?",
        answer: "Arcana 4 (The Emperor) reinforces May 24's demand for administrative structure in alliances."
      }
    ],
    imageBrief: "Warm graphic depicting mountain trekking guides signing a golden digital charter in an alpine wooden lodge overlooking sunlit peaks, color palette of forest green, alpine white, and gold."
  },
  25: {
    snippetAnswer: "Being born on May 25 connects your personal frequency to Arcana 7 (The Chariot), derived from compound digits 2 (Sensitivity) and 5 (Adaptability). Resting in early Gemini season, May 25 grants a talent for leading hydrogen-powered cargo drone engineering and zero-emission flight testing.",
    vignetteTitle: "The Hydrogen Cargo Drone Lead: Zero-Emission Heavy Air Freight",
    vignetteScenario: "Designing a liquid-hydrogen cargo drone on May 25, an aerospace engineer completes a successful 300-mile mountain delivery test. The autonomous drone transports 500 lbs of medical supplies with zero carbon emissions.",
    birthArchetypeContent: "Autonomous liquid-hydrogen cargo drones and zero-emission flight testing anchor May 25 under Arcana 7. You combine Gemini aerospace intellect with technical adaptability, leading flight trials for heavy cargo drones that transport emergency medical supplies over mountain ranges.",
    highFrequencyExpression: "In aerospace momentum, your practice highlights liquid-hydrogen cargo drone engineering, autonomous air freight flight testing, heavy payload delivery, and zero-emission aviation.",
    shadowChallenges: "Shadow patterns show up as impatient frustration during flight certification delays, over-working drone software teams, or pushing hydrogen tanks past pressure safety limits.",
    vocationAndFinance: "Ideal for hydrogen cargo drone leads, fuel cell flight engineers, zero-emission air freight developers, and aerospace test leads. Wealth grows through aviation patents.",
    reflectionQuestions: [
      "Am I balancing high-speed drone innovation with strict hydrogen safety compliance?",
      "How can I lead my aerospace engineering team to excel without creating high-pressure burnout?",
      "What zero-emission cargo flight milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 25?",
        answer: "May 25 is Gemini (Air sign), giving communicative intellect and flight agility to Arcana 7."
      },
      {
        question: "How does May 25 differ from May 7?",
        answer: "May 7 carries Taurus solar river catamarans, while May 25 carries Gemini hydrogen cargo drone engineering and zero-emission heavy air freight testing."
      },
      {
        question: "What is the technical edge of May 25?",
        answer: "Designing liquid-hydrogen heavy cargo drones that transport supplies with zero emissions."
      },
      {
        question: "Which Arcana complements May 25?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's drone flight testing programs."
      }
    ],
    imageBrief: "Dynamic aerospace graphic of a sleek hydrogen heavy cargo drone flying cleanly through an alpine pass under a golden sun, color palette of sky blue, solar gold, and pure white."
  },
  26: {
    snippetAnswer: "Being born on May 26 links your birth code to Arcana 8 (Justice), derived from compound digits 2 (Intuition) and 6 (Ethics). Positioned in early Gemini season, May 26 endows you with a discerning legal intelligence for auditing organic tea trade compliance, pesticide bans, and international labor law.",
    vignetteTitle: "The Tea Trade Compliance Lawyer: Enforcing Organic Plantation Ethics",
    vignetteScenario: "Auditing tea plantations in South Asia on May 26, a compliance lawyer enforces organic pesticide bans and living wage guarantees. Their audit secures 100% fair-trade certification for a major global tea brand.",
    birthArchetypeContent: "Fair-trade tea estate compliance and agricultural labor law form the core of May 26 under Arcana 8. You conduct multi-plantation audits across South Asia, enforcing living wage payouts and organic pesticide bans.",
    highFrequencyExpression: "In legal trade compliance, you enforce organic crop standards, verify pesticide-free farming across tea estates, protect mountain picker wage rights, and champion fair agricultural trade.",
    shadowChallenges: "Under shadow stress, you might become overly bureaucratic during compliance reviews, demand unrealistic certification timelines, or judge small tea farmers harshly.",
    vocationAndFinance: "Thrives as a mountain tea trade lawyer, fair-trade plantation compliance lead, South Asian agricultural auditor, and organic crop ethics director. Wealth expands through corporate compliance retainers.",
    reflectionQuestions: [
      "Am I applying objective fairness to small tea co-ops as well as large beverage buyers?",
      "Where in my tea supply chain auditing can I establish greater labor transparency?",
      "What organic tea certification standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 26?",
        answer: "May 26 is Gemini (Air sign), bringing communicative intellect and diplomatic agility to Arcana 8's legal precision."
      },
      {
        question: "How does May 26 differ from May 8?",
        answer: "May 8 carries Taurus shade-grown tea field auditing, while May 26 carries Gemini organic tea supply compliance and international trade labor law."
      },
      {
        question: "What is the financial rule for May 26?",
        answer: "Maintain absolute regulatory compliance and fair-trade ethics in all botanical supply investments."
      },
      {
        question: "Which Arcana complements May 26?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 8's trade audit cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a sunlit mountain tea harvest with a magnifying crystal lens, color palette of emerald green, tea brown, and gold."
  },
  27: {
    snippetAnswer: "Being born on May 27 connects your life path to Arcana 9 (The Hermit), derived from compound digits 2 (Intuition) and 7 (Analytical Focus). Positioned in early Gemini season, May 27 endows you with a talent for digital herbarium AI indexing, plant migration modeling, and cataloging herbarium databases.",
    vignetteTitle: "The Digital Herbarium AI Indexer: Modeling 200 Years of Plant Migration",
    vignetteScenario: "Working in quiet focus at a national botanical institute on May 27, an AI botanist indexes 800,000 historic herbarium specimens. Their digital model maps how European alpine plants shifted elevation over two centuries of climate change.",
    birthArchetypeContent: "Herbarium AI specimen indexing and plant elevation shift modeling define May 27 under Arcana 9. You work in quiet scientific focus, utilizing machine learning to digitize historic herbarium archives and model two centuries of botanical climate migration.",
    highFrequencyExpression: "In quiet digital science, your work highlights herbarium specimen AI indexing, plant elevation shift modeling, botanical database curation, and publishing climate migration studies.",
    shadowChallenges: "In shadow, you may retreat into antisocial database isolation, hoard digital herbarium records out of distrust, or show cynicism toward non-technical botanists.",
    vocationAndFinance: "Thrives as a digital herbarium AI indexer, plant migration modeler, herbarium database curator, botanical taxonomist, and plant scientist. Income grows through database licensing and grants.",
    reflectionQuestions: [
      "Am I balancing my solitary AI database focus with open scientific collaboration?",
      "How can I apply digital herbarium records to assist global climate botanists?",
      "What plant migration mystery am I ready to solve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 27?",
        answer: "May 27 is Gemini (Air sign), blending communicative intellect with The Hermit's contemplative research focus."
      },
      {
        question: "How does May 27 differ from May 9?",
        answer: "May 9 carries Taurus canopy botany, while May 27 carries Gemini digital herbarium AI indexing and plant migration modeling."
      },
      {
        question: "Why does May 27 thrive in botanical AI databases?",
        answer: "Quiet research focus allows May 27 to index complex plant migration data without social distraction."
      },
      {
        question: "Which Arcana complements May 27?",
        answer: "Arcana 3 (The Empress) provides fertile natural growth backing to support Arcana 9's taxonomy work."
      }
    ],
    imageBrief: "Mystical scientific portrait of a researcher cataloging glowing digital herbarium leaf scans on a glass workstation in a quiet library archive, color palette of deep navy, emerald green, and gold."
  },
  28: {
    snippetAnswer: "Being born on May 28 links your birth frequency to Arcana 10 (Wheel of Fortune), derived from compound digits 2 (Strategy) and 8 (Executive Power). Positioned in early Gemini season, May 28 endows you with strategic market timing for battery energy storage venture funds, clean-tech market timing, and grid battery IPOs.",
    vignetteTitle: "The Battery Storage Venture Director: Timing Utility Energy Storage IPOs",
    vignetteScenario: "Directing a $1.5B energy storage venture fund on May 28, an investor times public IPO launches for long-duration iron-air battery startups. Their fund captures historic equity gains during a grid reliability transition.",
    birthArchetypeContent: "Long-duration battery storage venture capital and grid reliability IPO timing characterize May 28 under Arcana 10. You combine Gemini market agility with 2+8 executive power, timing public capital launches for iron-air battery technology during renewable market expansions.",
    highFrequencyExpression: "In clean-tech venture capital, you direct utility battery storage funds, time public IPO launches for energy startups, scale grid infrastructure, and master clean energy market cycles.",
    shadowChallenges: "Shadow patterns show up as speculative battery stock gambling, impatience during grid market consolidations, over-leveraging venture funds, or premature IPOs.",
    vocationAndFinance: "Performs with excellence as a battery storage venture director, renewable IPO timing lead, energy equity trustee, and clean-tech investment chair. Wealth accelerates through venture equity compounding.",
    reflectionQuestions: [
      "Am I trusting natural market investment cycles or trying to force immediate IPO returns?",
      "How can I balance venture profitability with long-term energy grid reliability?",
      "What battery storage investment cycle am I ready to master today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 28?",
        answer: "May 28 is Gemini (Air sign), giving communicative intellect and financial ambition to Arcana 10's cycle timing."
      },
      {
        question: "How does May 28 differ from May 10?",
        answer: "May 10 carries Taurus organic citrus orchard acquisitions, while May 28 carries Gemini battery storage venture fund management and utility energy IPO timing."
      },
      {
        question: "What is the financial engine for May 28?",
        answer: "Managing energy storage venture funds and timing utility battery startup IPOs."
      },
      {
        question: "Which Arcana complements May 28?",
        answer: "Arcana 21 (The World) expands May 28's battery fund onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over a modern utility battery storage facility under a starlit sky, color palette of emerald green, electric cyan, and gold."
  },
  29: {
    snippetAnswer: "Being born on May 29 activates the rare Master Number 11 frequency under Arcana 11 (Strength), derived from compound digits 2 (Sensitivity) and 9 (Universal Compassion). Positioned in early Gemini season, May 29 endows you with extraordinary physical stamina and migratory songbird flyway sanctuary protection.",
    vignetteTitle: "The Migratory Songbird Flyway Lead: Protecting International Wetland Corridors",
    vignetteScenario: "Coordinating an international wetland protection trust on May 29, an avian biologist establishes a 2,500-mile protected flyway corridor for endangered songbirds. The network safeguards 6 million birds during spring migrations.",
    birthArchetypeContent: "International songbird flyway corridors and wetland sanctuary networks define May 29's Master 11 potential under Arcana 11. You navigate 2,500-mile migratory bird routes, utilizing quiet somatic stamina to establish protected wetland stops across international borders.",
    highFrequencyExpression: "In master avian conservation, you establish protected songbird flyway corridors, lead international wetland habitat trusts, conduct bird migration surveys, and demonstrate field endurance.",
    shadowChallenges: "Under shadow strain, you might experience physical exhaustion from grueling field surveys, react with sudden anger toward land developers, or ignore personal fatigue.",
    vocationAndFinance: "Performs with mastery as a migratory songbird flyway lead, wetland sanctuary director, avian rehabilitation lead, somatic wildlife whisperer, and flyway trustee. Wealth grows through conservation grants.",
    reflectionQuestions: [
      "How can I protect my physical stamina while conducting long songbird flyway surveys?",
      "Am I applying quiet somatic composure rather than force when protecting bird habitats?",
      "What migratory flyway initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Why is May 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and quiet somatic mastery over wildlife."
      },
      {
        question: "What zodiac sign is May 29?",
        answer: "May 29 is Gemini (Air sign), adding flight intellect and bird connection to Arcana 11's intense strength."
      },
      {
        question: "How does May 29 differ from May 11?",
        answer: "May 11 carries Taurus mountain gorilla sanctuary direction, while May 29 carries Gemini migratory songbird flyway protection and wetland conservation."
      },
      {
        question: "What is the health key for May 29?",
        answer: "Regular physical grounding practices and systematic sleep recovery between intense migratory bird surveys."
      }
    ],
    imageBrief: "Inspiring artwork of a calm conservationist holding a golden compass in a sunlit wetland sanctuary as thousands of wild migratory songbirds fly overhead under a golden star halo, color palette of emerald green, sky blue, and gold."
  },
  30: {
    snippetAnswer: "Being born on May 30 connects your personal frequency to Arcana 3 (The Empress), derived from compound digits 3 (Creativity) and 0 (Universal Potential). Resting in late May, May 30 bestows abundant creative fertility, damask rose water fragrance formulation, and scaling natural scent houses.",
    vignetteTitle: "The Damask Rose Distiller: Scaling Organic Rose Water Fragrance Houses",
    vignetteScenario: "Formulating a luxury organic rose water fragrance on May 30, a master perfumer extracts cold-pressed damask rose petals from estate fields. Their clean scent brand captures international department store placement.",
    birthArchetypeContent: "Damask rose essential oil extraction and organic rose water perfumery define May 30 under Arcana 3. You distill hand-harvested rose blossoms into luxury botanical scents, securing placement in international retail department stores.",
    highFrequencyExpression: "In creative scent alignment, your focus centers on damask rose water distillation, luxury natural perfume formulation, organic scent house scaling, and clean beauty distribution.",
    shadowChallenges: "In shadow, you may experience possessive financial control over fragrance formulas, vanity regarding brand image, or over-spending on glass bottle designs.",
    vocationAndFinance: "Suited for damask rose distillers, organic rose water perfumers, luxury scent house founders, and botanical cosmetics CEOs. Prosperity expands through international department store sales.",
    reflectionQuestions: [
      "How can I bring more natural rose floral purity and scent elegance into my products?",
      "Am I balancing my artistic fragrance passion with practical unit economics?",
      "What organic rose perfume venture am I ready to scale today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 30?",
        answer: "May 30 is Gemini (Air sign), bringing communicative charm and aesthetic elegance to The Empress's creative fertility."
      },
      {
        question: "How does May 30 differ from April 30?",
        answer: "April 30 carries Taurus Beltane Eve organic botanical skincare, while May 30 carries Gemini luxury damask rose water perfumery and organic flower estate scaling."
      },
      {
        question: "What is the financial engine for May 30?",
        answer: "Formulating and selling luxury organic rose water perfumes through global retail department stores."
      },
      {
        question: "Which Arcana complements May 30?",
        answer: "Arcana 4 (The Emperor) provides structural supply chain execution to support Arcana 3's fragrance brand growth."
      }
    ],
    imageBrief: "Rich botanical painting of an elegant perfumer holding a crystal rose scent bottle in a sunlit field of blooming pink damask roses, color palette of rose pink, emerald green, and golden sunlight."
  },
  31: {
    snippetAnswer: "Being born on May 31 connects your personal frequency to Arcana 4 (The Emperor), derived from compound digits 3 (Creative Vision) and 1 (Initiative). Closing May on Memorial Day weekend, May 31 endows you with sovereign permaculture estate architecture, building off-grid resilient communities, and long-term land governance.",
    vignetteTitle: "The Permaculture Estate Architect: Building Off-Grid Sustainable Communities",
    vignetteScenario: "Directing the development of a 500-acre permaculture community on May 31, a master architect integrates solar micro-grids, passive thermal housing, and food forest agriculture. The off-grid community achieves 100% food and energy autonomy.",
    birthArchetypeContent: "May 31 individuals channel sovereign governance under Arcana 4 (The Emperor) with Gemini communicative intellect and compound 3+1 initiative. You excel at designing master off-grid permaculture estates and resilient housing communities that achieve total energy and food independence.",
    highFrequencyExpression: "Operating in high sovereign light, you demonstrate off-grid permaculture estate design, solar micro-grid integration, food forest master planning, and sovereign community governance.",
    shadowChallenges: "In shadow, you might show stubborn architectural micromanagement, imposing strict HOA rules on residents, or resisting feedback on estate blueprints.",
    vocationAndFinance: "Performs with mastery as a permaculture estate architect, off-grid community founder, solar micro-grid director, sustainable land governor, and real estate master planner. Wealth accelerates through green real estate development.",
    reflectionQuestions: [
      "Am I leading my off-grid community design with empowering resident participation?",
      "How can I integrate passive solar heating and food forests into my architectural master plans?",
      "What sovereign sustainable estate am I ready to build today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is May 31?",
        answer: "May 31 is Gemini (Air sign), infusing Arcana 4's executive discipline with communicative intellect and master planning vision."
      },
      {
        question: "How does May 31 differ from May 4?",
        answer: "May 4 carries Taurus mass-timber skyscraper engineering, while May 31 carries Gemini off-grid permaculture estate architecture and food forest community master planning."
      },
      {
        question: "What is the financial engine for May 31?",
        answer: "Designing and developing off-grid permaculture real estate communities and eco-estates."
      },
      {
        question: "Which Arcana complements May 31?",
        answer: "Arcana 3 (The Empress) offers natural fertile beauty to balance Arcana 4's structural estate governance."
      }
    ],
    imageBrief: "Commanding architectural artwork of a master planner looking over a sunlit 500-acre off-grid permaculture community with solar homes and lush food forests, color palette of emerald green, golden sunlight, and slate blue."
  }
};

export function getMayProfile(day: number): BirthdayProfileData {
  const custom = MAY_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `May ${day}`;
  const slug = `may-${day}`;

  const phaseText = day <= 10 ? 'early May Beltane peak blossom phase' : day <= 20 ? 'mid-May Taurus-Gemini cusp transition' : 'late-May Gemini air expansion phase';
  const seasonalPhrase = `lush late-spring bloom and vibrant environmental vitality during the ${phaseText} of May`;
  const seasonalContext = `Lush late-spring bloom and vibrant environmental vitality mark the ${phaseText} of May.`;
  const dayVibrationNote = `${formattedDate} combines ${seasonalPhrase} with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 30 : day - 1;
  const nextDay = day === 31 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'April 30' : `May ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 30 ? "Beltane Eve transition" : "Prior day energy focus",
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
      dateLabel: day === 31 ? 'June 1' : `May ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: "Subsequent integration phase",
      bestFocus: "Expanding into next day's growth",
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} momentum.`
    }
  ];

  return {
    slug,
    month: 'May',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of May seasonal focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
    vignetteTitle: custom?.vignetteTitle || `The ${formattedDate} Catalyst: Navigating ${primaryArcana.name} Energy`,
    vignetteScenario: custom?.vignetteScenario || `In a key moment of decision, someone born on ${formattedDate} steps forward to apply the ${primaryArcana.archetype.toLowerCase()} lessons of Arcana ${primaryArcanaNum}, turning a routine challenge into a major breakthrough.`,
    birthArchetypeContent: custom?.birthArchetypeContent || `Individuals born on ${formattedDate} embody the core qualities of Arcana ${primaryArcanaNum} (${primaryArcana.name}). You possess a natural drive to master your environment, apply structured discipline, and express your authentic talents.`,
    comparisonTable,
    highFrequencyExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenges: custom?.shadowChallenges || primaryArcana.shadowExpression,
    vocationAndFinance: custom?.vocationAndFinance || `${primaryArcana.careerGuidance} ${primaryArcana.moneyChannel}`,
    reflectionQuestions: custom?.reflectionQuestions || [
      `How can I align with the ${phaseText} of May to support my goals?`,
      `In what ways does ${primaryArcana.name} encourage me to express ${primaryArcana.archetype.toLowerCase()} today?`,
      `What specific practice will help me anchor constructive high frequency in my daily routine?`
    ],
    faqItems: custom?.faqItems || [
      {
        question: `What zodiac sign is ${formattedDate}?`,
        answer: day <= 20 ? `${formattedDate} falls under Taurus (Earth sign), bringing grounded stability, physical endurance, and environmental focus.` : `${formattedDate} falls under Gemini (Air sign), bringing communicative intellect, adaptability, and social agility.`
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
