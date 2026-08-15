import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const JULY_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Arriving on July 1 activates Arcana 1 (The Magician) on the Cancer-Leo solstice threshold. Opening July into midsummer, July 1 endows you with high-altitude solar skyscraper design mastery, kinetic facade shading, and launching zero-emission urban towers.",
    vignetteTitle: "The High-Altitude Solar Skyscraper Architect: Designing Kinetic Facade Shading",
    vignetteScenario: "Opening July on July 1, a green architect unveils a 70-story zero-emission skyscraper in a major metropolis. The tower features kinetic photovoltaic shading louvers that track the sun, generating 2MW of clean solar power daily.",
    birthArchetypeContent: "High-altitude solar skyscraper design and kinetic facade shading characterize July 1 under Arcana 1. You fuse Cancer nurturing space intuition with Magician creative initiation, constructing zero-emission urban towers integrated with kinetic solar facades.",
    highFrequencyExpression: "In active architectural mastery, your work highlights solar skyscraper engineering, kinetic facade shading, zero-emission tower design, and green urban planning.",
    shadowChallenges: "Under shadow stress, you might act impetuously during structural permits, clash with municipal planning boards, or abandon architectural projects prematurely.",
    vocationAndFinance: "Flourishes as a solar skyscraper architect, kinetic facade engineer, green tower developer, and urban design director. Wealth expands through high-value commercial architectural commissions.",
    reflectionQuestions: [
      "Am I bringing my kinetic solar skyscraper concepts into complete urban construction?",
      "How can I channel early July solar vitality to inspire my architectural studio?",
      "What zero-emission tower design am I ready to unveil today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 1?",
        answer: "July 1 is Cancer (Water sign), bringing intuitive depth, protective care, and emotional resonance to The Magician's creative initiation."
      },
      {
        question: "How does July 1 differ from June 1?",
        answer: "June 1 carries Gemini solar kinetic public plaza art, while July 1 carries Cancer high-altitude solar skyscraper design and kinetic facade shading."
      },
      {
        question: "What is the financial engine for July 1?",
        answer: "Designing and developing zero-emission commercial solar skyscrapers for international urban real estate groups."
      },
      {
        question: "Which Arcana complements July 1?",
        answer: "Arcana 19 (The Sun) amplifies July 1's public architectural visibility and solar energy acclaim."
      }
    ],
    imageBrief: "Vibrant graphic of an architect inspecting a towering 70-story glass skyscraper with glowing golden kinetic solar louvers under a bright midsummer sun, color palette of steel silver, solar gold, and sky blue."
  },
  2: {
    snippetAnswer: "Born on July 2, your life blueprint aligns with Arcana 2 (The High Priestess) on World UFO Day. July 2 grants quiet intuitive wisdom, bathyal oceanic trench sonar acoustics, and mapping deep-sea bioluminescent squid communication routes.",
    vignetteTitle: "The Bathyal Sonar Acoustic Lead: Mapping Deep-Sea Trench Echo Signals",
    vignetteScenario: "Researching deep ocean abyssal plains on July 2, a marine acoustician records hydro-acoustic signals from a 30,000-foot ocean trench. Their spatial mapping discovers a bioluminescent squid communication network that coordinates deep-sea migration.",
    birthArchetypeContent: "Bathyal trench sonar acoustics and bioluminescent deep-sea communication define July 2 under Arcana 2. You explore pitch-black abyssal ocean depths, deploying hydrophones to decode subterranean acoustic signals released by deep-sea organisms.",
    highFrequencyExpression: "In quiet oceanic focus, your path highlights bathyal trench acoustics, hydrophone array deployment, deep-sea migration mapping, and unshakeable intuitive marine insight.",
    shadowChallenges: "Under stress, you might withdraw into silent submarine research isolation, hesitate to share oceanic acoustic data, or ignore surface marine team communications.",
    vocationAndFinance: "Performs with distinction as a bathyal ocean acoustician, hydro-acoustic researcher, deep-sea sonar director, and marine biologist. Income builds through marine research grants.",
    reflectionQuestions: [
      "Am I trusting my intuitive oceanic sound observations alongside electronic hydrophone data?",
      "How can I share my deep-sea acoustic findings to protect ocean migration sanctuaries?",
      "What quiet hydro-acoustic study am I called to complete today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 2?",
        answer: "July 2 is Cancer (Water sign), giving intuitive depth and emotional perception to The High Priestess's quiet inner wisdom."
      },
      {
        question: "How does July 2 differ from June 2?",
        answer: "June 2 carries Gemini subterranean cave speleology, while July 2 carries Cancer bathyal trench sonar acoustics and deep-sea migration mapping."
      },
      {
        question: "What is the key to success for July 2?",
        answer: "Patience and quiet scientific observation of deep oceanic acoustic signals."
      },
      {
        question: "Which Arcana complements July 2?",
        answer: "Arcana 3 (The Empress) provides natural growth backing to support July 2's marine acoustic discoveries."
      }
    ],
    imageBrief: "Mystical symbolist painting of a marine scientist inside a deep-sea submersible monitoring glowing blue sonar waves in a pitch-black oceanic trench, color palette of deep abyssal navy, electric cyan, and silver."
  },
  3: {
    snippetAnswer: "Celebrating a July 3 birthday opens your path under Arcana 3 (The Empress) on International Plastic Free Day (July 3). July 3 bestows luxurious aesthetic vision, seaweed-derived bioplastic packaging formulation, and scaling zero-waste eco-packaging estates.",
    vignetteTitle: "The Plastic Free Day Bio-Packaging Lead: Formulating Seaweed Packaging Polymers",
    vignetteScenario: "Unveiling a 100% home-compostable seaweed bioplastic film on International Plastic Free Day (July 3), a materials scientist scales a zero-waste packaging facility. Their bio-packaging replaces petroleum plastics across 50 international cosmetics brands.",
    birthArchetypeContent: "Seaweed-derived bioplastic packaging formulation and zero-waste eco-packaging estates distinguish July 3 under Arcana 3 on International Plastic Free Day. You distill marine seaweed kelp into fully compostable biopolymers that replace single-use petroleum plastics.",
    highFrequencyExpression: "In active fertile light on International Plastic Free Day, your leadership focuses on seaweed bioplastic formulation, compostable packaging design, eco-materials branding, and sustainable supply scaling.",
    shadowChallenges: "When unbalanced, you may experience possessive control over biopolymer trade formulas, over-spending on custom packaging molds, or impatience during bioplastic degradation trials.",
    vocationAndFinance: "Excels as a seaweed bioplastic founder, eco-packaging CEO, sustainable materials alchemist, and clean-tech executive. Wealth expands through high-value compostable packaging contracts.",
    reflectionQuestions: [
      "How can I scale my seaweed bioplastic packaging to eliminate ocean petroleum waste?",
      "Am I balancing my creative material design with practical factory manufacturing costs?",
      "What plastic-free packaging innovation am I ready to introduce today?"
    ],
    faqItems: [
      {
        question: "What makes July 3 special on International Plastic Free Day?",
        answer: "July 3 combines Arcana 3's creative fertility with International Plastic Free Day, establishing a frequency for seaweed bioplastic packaging formulation."
      },
      {
        question: "What zodiac sign is July 3?",
        answer: "July 3 is Cancer (Water sign), bringing ocean connection, emotional care, and aesthetic elegance to The Empress's creative fertility."
      },
      {
        question: "What is the financial engine for July 3?",
        answer: "Formulating and scaling seaweed-based compostable bioplastic packaging for international retail and cosmetics conglomerates."
      },
      {
        question: "Which Arcana complements July 3?",
        answer: "Arcana 4 (The Emperor) provides structural manufacturing execution to support Arcana 3's bio-packaging growth."
      }
    ],
    imageBrief: "Lush modern painting of a scientist holding a roll of transparent, glowing green seaweed bioplastic film inside a sunlit eco-packaging laboratory, color palette of emerald kelp green, solar gold, and clean white."
  },
  4: {
    snippetAnswer: "Your July 4 birth date anchors structural authority under Arcana 4 (The Emperor) near Earth's Aphelion. July 4 endows you with orbital satellite solar array structural engineering mastery, space station array foundations, and aphelion trajectory calculation.",
    vignetteTitle: "The Space Solar Structural Engineer: Deploying Orbital Satellite Solar Wings",
    vignetteScenario: "Directing an orbital satellite mission on July 4, a structural space engineer deploys a 100-meter solar array wing in low Earth orbit. The high-efficiency space solar array generates continuous 500kW power for an international orbital research station.",
    birthArchetypeContent: "Orbital satellite solar array structural engineering and aphelion trajectory calculation mark July 4 under Arcana 4. You design zero-gravity space station solar wings that withstand orbital thermal shifts and capture peak solar energy in space.",
    highFrequencyExpression: "In orbital structural discipline, your work commands space station solar array architecture, zero-gravity wing deployment, satellite aphelion tracking, and aerospace engineering authority.",
    shadowChallenges: "In shadow, you may exhibit rigid aerospace micromanagement, enforcing overly strict launch schedules without crew input, or resisting orbital design innovations.",
    vocationAndFinance: "Commands respect as a space solar structural engineer, orbital satellite array director, aerospace civil chair, and satellite company CEO. Wealth builds through high-value aerospace contracts.",
    reflectionQuestions: [
      "Am I leading my aerospace engineering team with clear direction or rigid demands?",
      "Where in my orbital satellite projects can I deploy high-efficiency space solar technology?",
      "What space solar structural milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 4?",
        answer: "July 4 is Cancer (Water sign), infusing Arcana 4's executive discipline with protective intuition and engineering agility."
      },
      {
        question: "How does July 4 differ from June 4?",
        answer: "June 4 carries Gemini sub-surface hyper-loop tunnel engineering, while July 4 carries Cancer orbital satellite solar array structural engineering and space solar deployment."
      },
      {
        question: "Which careers suit July 4 best?",
        answer: "Orbital satellite solar array engineering, space station structural direction, aerospace civil leadership, and satellite technology development."
      },
      {
        question: "How can July 4 maintain project momentum?",
        answer: "Combine structural aerospace standards with clear engineering communication and orbital launch permits."
      }
    ],
    imageBrief: "Commanding aerospace graphic showing a chief space engineer inspecting a massive gold-plated satellite solar wing unfolding in space against the blue Earth background, color palette of cosmic black, solar gold, and Earth blue."
  },
  5: {
    snippetAnswer: "July 5 births unite teaching clarity under Arcana 5 (The Hierophant). Positioned in early July, July 5 bestows a talent for formulating mangrove estuary restoration charters, publishing coastal wetland preservation standards, and directing marine conservation education.",
    vignetteTitle: "The Mangrove Estuary Director: Publishing Coastal Wetland Restoration Charters",
    vignetteScenario: "Publishing a comprehensive mangrove wetland restoration manual on July 5, a coastal ecologist trains coastal preservation teams across 20 tropical nations. Their restoration protocol secures 50,000 acres of coastal mangrove carbon sinks.",
    birthArchetypeContent: "Mangrove estuary restoration charters and coastal wetland preservation standards mark July 5 under Arcana 5. You translate marine ecology research into mandatory coastal land policies, training coastal communities to protect mangrove nurseries.",
    highFrequencyExpression: "In master educational alignment, your work centers on mangrove wetland restoration, coastal carbon sink charters, marine ecology education, and coastal policy leadership.",
    shadowChallenges: "Under shadow friction, you might mandate rigid coastal zoning rules, clash with local fishing communities, or delay restoration permits out of bureaucratic perfectionism.",
    vocationAndFinance: "Shines as a mangrove estuary director, coastal wetland educator, marine policy author, and conservation foundation chair. Wealth grows through international environmental consulting and grants.",
    reflectionQuestions: [
      "Am I testing mangrove restoration protocols alongside local coastal fishing communities?",
      "How can I streamline coastal wetland preservation standards for international marine reserves?",
      "What marine conservation charter am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 5?",
        answer: "July 5 is Cancer (Water sign), giving protective care, emotional resonance, and intuitive depth to The Hierophant's mission."
      },
      {
        question: "How does July 5 differ from June 5?",
        answer: "June 5 carries Gemini World Environment Day zero-waste industrial design, while July 5 carries Cancer mangrove estuary restoration charters and coastal wetland education."
      },
      {
        question: "What is the financial engine for July 5?",
        answer: "Publishing coastal wetland restoration standards and auditing marine carbon sink compliance for global conservation funds."
      },
      {
        question: "Which Arcana complements July 5?",
        answer: "Arcana 19 (The Sun) amplifies July 5's global marine visibility and coastal policy impact."
      }
    ],
    imageBrief: "Inspiring illustration of a coastal ecologist teaching local community leaders how to plant mangrove saplings along a sunlit coastal estuary, color palette of mangrove green, ocean turquoise, and solar gold."
  },
  6: {
    snippetAnswer: "A July 6 birthday embodies commercial partnership alignment under Arcana 6 (The Lovers) on World Kissing Day. July 6 grants a gift for structuring Mediterranean terraced caper berry harvesting, cold-pressed virgin olive oil distribution, and artisan grove consortium trade.",
    vignetteTitle: "The Terraced Caper & Virgin Olive Oil Lead: Managing Mediterranean Exports",
    vignetteScenario: "Unifying 40 organic caper and virgin olive oil farming families on July 6, an agricultural trade director structures a straight harvest export charter. The consortium secures long-term purchase agreements with luxury European culinary markets.",
    birthArchetypeContent: "Terraced caper berry picking and cold-pressed extra-virgin olive oil distribution define July 6 under Arcana 6. You unite regional grove orchardists into equitable trade consortiums, securing straight distribution for stone-pressed virgin oils and brined caper berries.",
    highFrequencyExpression: "Excels in terraced caper trade negotiation, cold-pressed virgin olive oil consortium structuring, straight Mediterranean culinary export charters, and artisan grove consortiums.",
    shadowChallenges: "Shadow patterns include over-analyzing consortium profit split ratios, fearing loss of individual orchard autonomy, or making weak compromises during buyer price negotiations.",
    vocationAndFinance: "Flourishes in agricultural trade as a caper berry exporter, cold-pressed olive oil founder, and Mediterranean grove partner. Wealth grows through culinary trade equity.",
    reflectionQuestions: [
      "Am I structuring virgin olive oil trade consortiums on clear mutual values or quick price compromises?",
      "How can I preserve farm family income while upholding organic agroforestry soil charters?",
      "What organic olive oil trade charter am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 6?",
        answer: "July 6 is Cancer (Water sign), bringing emotional warmth, protective care, and diplomatic agility to Arcana 6's partnership design."
      },
      {
        question: "How does July 6 differ from June 6?",
        answer: "June 6 features Gemini organic berry farming, whereas July 6 features Cancer Mediterranean terraced caper berry picking and cold-pressed extra-virgin olive oil trade."
      },
      {
        question: "What is the financial key for July 6?",
        answer: "Structuring high-value organic cold-pressed extra-virgin olive oil consortiums and straight gourmet export charters."
      },
      {
        question: "Which Arcana complements July 6?",
        answer: "Arcana 4 (The Emperor) provides structural governance to anchor Arcana 6's agricultural deals."
      }
    ],
    imageBrief: "Modern graphic depicting an agricultural director shaking hands with olive growers on a terraced hillside holding wooden crates of olives and glass bottles of golden virgin oil, color palette of olive green, sun gold, and warm terracotta."
  },
  7: {
    snippetAnswer: "Navigating life from July 7 drives forward momentum under Arcana 7 (The Chariot) on World Chocolate Day (July 7). July 7 endows you with a passion for zero-emission electric cargo sailboat shipping, organic cacao sea trade routes, and leading clean maritime cargo fleets.",
    vignetteTitle: "The Electric Cargo Sailboat Lead: Transporting Organic Cacao Across Oceans",
    vignetteScenario: "Directing a 200-foot electric cargo sailboat on World Chocolate Day (July 7), a maritime captain transports 500 tons of organic fair-trade cacao beans from South America to Europe with zero carbon emissions.",
    birthArchetypeContent: "Zero-emission electric cargo sailboat shipping and organic cacao sea trade routes mark July 7 under Arcana 7 on World Chocolate Day. You master wind-assisted clean shipping technology, transporting fair-trade cacao across ocean trade lanes without fossil fuels.",
    highFrequencyExpression: "In oceanic freight transit, your practice commands double-masted electric cargo sailboat navigation, zero-emission sea trade routes, organic cacao cargo logistics, and clean maritime fleet direction.",
    shadowChallenges: "Under shadow stress, you might become frustrated by port customs clearance delays, push cargo sailboat speeds past weather safety limits, or act brusquely toward harbor crews.",
    vocationAndFinance: "Leads with authority as an electric cargo sailboat captain, clean maritime shipping director, organic cacao logistics lead, and wind shipping CEO. Wealth grows through sustainable freight contracts.",
    reflectionQuestions: [
      "Am I balancing high-speed clean shipping innovation with strict maritime weather safety compliance?",
      "How can I inspire my ocean sailing crew during complex transatlantic cargo voyages?",
      "What zero-emission maritime shipping milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What makes July 7 special on World Chocolate Day?",
        answer: "July 7 combines Arcana 7's maritime momentum with World Chocolate Day, establishing a frequency for zero-emission electric cargo sailboat shipping of organic cacao."
      },
      {
        question: "What zodiac sign is July 7?",
        answer: "July 7 is Cancer (Water sign), giving ocean connection, protective strength, and maritime navigation agility to Arcana 7."
      },
      {
        question: "What is the technical edge of July 7?",
        answer: "Commanding wind-assisted electric cargo sailboats that haul 500 tons of organic cacao across oceans with zero carbon emissions."
      },
      {
        question: "Which Arcana complements July 7?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's ocean shipping operations."
      }
    ],
    imageBrief: "Dynamic maritime graphic of a sleek white double-masted electric cargo sailboat gliding through ocean waves under a bright summer sun, color palette of ocean navy, sail white, and solar gold."
  },
  8: {
    snippetAnswer: "July 8 awakens legal precision under Arcana 8 (Justice). Positioned in early July, July 8 grants a razor-sharp mind for securing tropical coral reef marine sanctuary injunctions, enforcing international maritime protected zone charters, and prosecuting illegal ocean trawling.",
    vignetteTitle: "The Coral Injunction Legal Advocate: Halting Illegal Ocean Trawling",
    vignetteScenario: "Presenting subsea satellite tracking evidence on July 8, an international ocean advocate secures a binding legal injunction halting commercial trawling across a 50,000-square-mile marine sanctuary in the South Pacific.",
    birthArchetypeContent: "Coral reef marine sanctuary injunctions and illegal trawling prosecution characterize July 8 under Arcana 8. You leverage satellite vessel tracking data and international maritime law to enforce strict sanctuary boundaries around fragile ocean reefs.",
    highFrequencyExpression: "In maritime legal precision, your practice highlights ocean sanctuary injunctions, illegal trawling prosecution, coral reef sanctuary enforcement, and global marine protection law.",
    shadowChallenges: "Strained shadow states show up as hyper-critical legalistic scrutiny, rigid adherence to court filings, or ignoring customary fishing rights.",
    vocationAndFinance: "Commands legal respect as a coral sanctuary injunction advocate, marine treaty attorney, ocean sanctuary auditor, and maritime policy lead. Earnings build through international legal retainers.",
    reflectionQuestions: [
      "Am I enforcing coral sanctuary bans with diplomatic fairness for local artisanal fishers?",
      "Where in my ocean legal work can I establish greater sanctuary monitoring transparency?",
      "What coral reef marine protection standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 8?",
        answer: "July 8 is Cancer (Water sign), bringing ocean protection intuition and legal agility to Arcana 8's regulatory precision."
      },
      {
        question: "How does July 8 differ from June 8?",
        answer: "June 8 carries Gemini World Oceans Day seabed mining bans, while July 8 carries Cancer coral reef sanctuary injunctions and illegal trawling prosecution."
      },
      {
        question: "What is the financial rule for July 8?",
        answer: "Maintain absolute regulatory compliance and fair international ocean protection law standards in all marine investments."
      },
      {
        question: "Which Arcana complements July 8?",
        answer: "Arcana 11 (Strength) provides stamina to support July 8's international marine litigation cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden scale of justice standing over a glowing tropical coral reef teeming with vibrant fish, color palette of ocean turquoise, coral red, and gold."
  },
  9: {
    snippetAnswer: "Entering the world on July 9 connects your inner compass to Arcana 9 (The Hermit). Approaching mid-July, July 9 endows you with a passion for deep-sea hydrothermal vent extremophile enzyme analysis, cataloging abyssal biological samples, and indexing volcanic sea vent geology.",
    vignetteTitle: "The Hydrothermal Extremophile Analyst: Decoding Abyssal Vent Microbe Enzymes",
    vignetteScenario: "Working inside an ocean research submarine vault on July 9, a microbiologist analyzes heat-resistant extremophile enzymes recovered from a 12,000-foot volcanic sea vent. Their bio-analysis discovers a thermal enzyme that accelerates medical diagnostic testing.",
    birthArchetypeContent: "Hydrothermal vent extremophile enzyme analysis and abyssal microbe cataloging define July 9 under Arcana 9. You thrive in quiet submarine research vaults, isolating heat-resistant enzymes from extremophile bacteria found at 12,000-foot volcanic hydrothermal vents.",
    highFrequencyExpression: "In quiet marine research, your work highlights hydrothermal vent enzyme analysis, extremophile microbe cataloging, abyssal biological archiving, and publishing deep-ocean science.",
    shadowChallenges: "When isolated, you might retreat into silent submarine laboratory work, withhold enzyme research data from colleagues, or show impatience toward public ocean advocates.",
    vocationAndFinance: "Flourishes as a hydrothermal extremophile analyst, marine microbiologist, abyssal vault curator, and scientific author. Revenue grows through biotechnology patents and research grants.",
    reflectionQuestions: [
      "Am I balancing my solitary hydrothermal vent research with open scientific collaboration?",
      "How can I apply extremophile marine enzyme discoveries to improve modern medical science?",
      "What abyssal ocean vent secret am I ready to study today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 9?",
        answer: "July 9 is Cancer (Water sign), blending intuitive ocean connection with The Hermit's contemplative research focus."
      },
      {
        question: "How does July 9 differ from June 9?",
        answer: "June 9 carries Gemini polar glacial ice core research, while July 9 carries Cancer deep-sea hydrothermal vent extremophile enzyme analysis and abyssal microbe cataloging."
      },
      {
        question: "Why does July 9 require quiet marine vault focus?",
        answer: "Solitude in marine research vaults allows July 9 to measure delicate heat-resistant vent enzymes without contamination."
      },
      {
        question: "Which Arcana complements July 9?",
        answer: "Arcana 3 (The Empress) offers natural fertile growth to support July 9's marine research discoveries."
      }
    ],
    imageBrief: "Mystical portrait of a marine scientist examining a glowing tube sample of deep-sea vent minerals inside a dark blue submersible, color palette of ocean navy, volcanic orange, and gold."
  },
  10: {
    snippetAnswer: "July 10 marks a powerful cycle transition under Arcana 10 (Wheel of Fortune). Closing the first decade of July, July 10 grants an intuitive rhythm for subsea tidal current turbine arrays, 100MW ocean stream pressure modeling, and scaling hydro-power fields.",
    vignetteTitle: "The Ocean Current Subsea Turbine Lead: Scaling 100MW Tidal Array Barrages",
    vignetteScenario: "Engineering a 100MW ocean stream turbine barrage on July 10, a subsea hydrodynamics designer anchors 45 twin-rotor water turbines in high-velocity coastal channels. The predictable lunar tide system supplies 24/7 continuous clean power to 50,000 island households.",
    birthArchetypeContent: "Subsea ocean stream turbine hydrodynamics and 100MW tidal barrage pressure modeling characterize July 10 under Arcana 10. You convert natural lunar ocean currents into continuous electricity, building subsea water turbine arrays in high-velocity channels.",
    highFrequencyExpression: "In active ocean turbine engineering, your work focuses on subsea tidal stream hydrodynamics, ocean current turbine alignment, subsea barrage pressure balance, and scaling clean hydro-power arrays.",
    shadowChallenges: "Shadow friction shows up as rushing subsea turbine anchoring schedules, ignoring tidal current fatigue stress, or over-working dive assembly teams during installation.",
    vocationAndFinance: "Achieves distinction as a subsea ocean turbine engineer, tidal barrage director, ocean energy plant manager, and marine power CEO. Wealth expands through power purchase contracts.",
    reflectionQuestions: [
      "Am I maintaining rigorous subsea installation safety during high-velocity tidal deployments?",
      "How can I optimize twin-rotor tidal turbine hydrodynamics to maximize electricity output?",
      "What ocean tidal barrage project am I ready to lead today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 10?",
        answer: "July 10 is Cancer (Water sign), giving intuitive ocean connection and engineering agility to Arcana 10's cycle timing."
      },
      {
        question: "How does July 10 differ from June 10?",
        answer: "June 10 carries Gemini deep-well geothermal steam engineering, while July 10 carries Cancer subsea ocean stream turbine hydrodynamics and 100MW tidal barrage pressure modeling."
      },
      {
        question: "What is the technical secret of July 10?",
        answer: "Engineering twin-rotor subsea tidal stream turbines that capture predictable lunar ocean currents for 24/7 power."
      },
      {
        question: "Which Arcana complements July 10?",
        answer: "Arcana 21 (The World) expands July 10's tidal power projects onto a global international scale."
      }
    ],
    imageBrief: "Regal symbolist graphic of a golden celestial wheel turning over a glowing underwater tidal turbine array spinning in clear ocean currents, color palette of ocean turquoise, electric cyan, and gold."
  },
  11: {
    snippetAnswer: "Arriving on World Population Day (July 11), your life path resonates under Arcana 11 (Strength). July 11 bestows extraordinary physical resilience, establishing Amazonian jaguar flooded forest reserves, and deploying indigenous river ranger patrols across varzea jungle basins.",
    vignetteTitle: "The Amazonian Jaguar Basin Director: Managing Flooded Forest River Patrols",
    vignetteScenario: "Leading a river conservation trust on World Population Day (July 11), an Amazonian biologist deploys hydro-acoustic camera traps across 200,000 acres of varzea flooded forest. Their river ranger network halts illegal jaguar pelt poaching while securing fishing rights for 15 riverside villages.",
    birthArchetypeContent: "Amazonian jaguar flooded basin sanctuary defense and indigenous river ranger networks define July 11 under Arcana 11 on World Population Day. You traverse dense tropical waterways, channeling quiet somatic calm to safeguard wild jaguars.",
    highFrequencyExpression: "Champions Amazonian jaguar reserve stewardship, varzea river ranger deployment, tropical rainforest basin protection, and calm somatic wilderness leadership.",
    shadowChallenges: "Risking physical burnout on long river patrols, abrupt irritation toward timber encroachers, or neglecting rest.",
    vocationAndFinance: "Flourishes as an Amazonian jaguar biologist, varzea basin director, river ranger captain, and rainforest trust trustee. Earnings grow through global biodiversity grants.",
    reflectionQuestions: [
      "How can I maintain my physical stamina during grueling Amazonian river anti-poaching patrols?",
      "Am I applying quiet somatic composure rather than force when working with varzea river village communities?",
      "What Amazonian jaguar reserve milestone am I called to achieve today?"
    ],
    faqItems: [
      {
        question: "Is July 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, granting extraordinary spiritual intuition, physical stamina, and quiet somatic mastery over flooded forest wildlife."
      },
      {
        question: "What zodiac sign is July 11?",
        answer: "July 11 is Cancer (Water sign), adding intuitive protective warmth and emotional depth to Arcana 11's intense strength."
      },
      {
        question: "How does July 11 differ from June 11?",
        answer: "June 11 carries Gemini Himalayan snow leopard tracking, while July 11 carries Cancer World Population Day Amazonian jaguar flooded forest reserve defense."
      },
      {
        question: "What is the health key for July 11?",
        answer: "Regular physical grounding practices and systematic hydration recovery between intense flooded forest river patrols."
      }
    ],
    imageBrief: "Inspiring illustration of a calm wildlife biologist standing in a sunlit Amazonian flooded rainforest beside a magnificent spotted jaguar under a golden sun halo, color palette of jungle emerald, jaguar gold, and river blue."
  },
  12: {
    snippetAnswer: "Illuminated by perspective shifts, July 12 aligns with Arcana 12 (The Hanged Man). Moving through mid-July, July 12 grants a breakthrough vision for extracting battery-grade lithium from desalination plant brine discharges, inverting toxic ocean waste into clean battery minerals.",
    vignetteTitle: "The Desalination Brine Mineral Refiner: Extracting Battery-Grade Lithium",
    vignetteScenario: "Designing a specialized membrane filtration system on July 12, a chemical engineer reclaims 500 tons of battery-grade lithium carbonate from coastal desalination brine wastewater. Their process eliminates ocean brine toxicity while supplying clean lithium for EV batteries.",
    birthArchetypeContent: "Desalination brine lithium extraction and geothermal mineral recovery characterize July 12 under Arcana 12. You flip coastal wastewater management upside down, turning toxic ocean brine into high-purity lithium for green technology.",
    highFrequencyExpression: "In creative inverted material chemistry, your practice centers on desalination brine lithium recovery, membrane mineral separation, zero-toxicity ocean chemical extraction, and circular battery metal supply.",
    shadowChallenges: "Shadow patterns include feeling overwhelmed by chemical plant permits, lingering in analytical lab testing, or sacrificing personal profit for environmental non-profits.",
    vocationAndFinance: "Pioneers clean technology as a brine lithium extraction engineer, ocean mineral recovery lead, circular battery chemist, and clean-tech executive. Income expands through mineral refining patents.",
    reflectionQuestions: [
      "What industrial waste stream requires me to flip my design perspective completely?",
      "Am I balancing my non-profit environmental brine work with personal financial growth?",
      "What ocean mineral recovery technology am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 12?",
        answer: "July 12 is Cancer (Water sign), giving protective intuition, emotional depth, and design agility to The Hanged Man's perspective shifts."
      },
      {
        question: "How does July 12 differ from June 12?",
        answer: "June 12 carries Gemini e-waste silver recovery and solar cell upcycling, while July 12 carries Cancer desalination brine lithium extraction and geothermal mineral recovery."
      },
      {
        question: "What is the core lesson for July 12?",
        answer: "Learning that extracting battery-grade lithium from desalination brine turns ocean waste into valuable clean energy materials."
      },
      {
        question: "Which Arcana complements July 12?",
        answer: "Arcana 4 (The Emperor) provides structural backing to execute July 12's refining operations."
      }
    ],
    imageBrief: "Mystical modern artwork of blue ocean brine passing through a glowing gold membrane that isolates pure white lithium crystals, color palette of ocean turquoise, bright gold, and clean white."
  },
  13: {
    snippetAnswer: "Vibrating with rebirth power, July 13 activates Arcana 13 (Transformation). Resting near mid-July, July 13 endows you with the power to lead post-industrial steel mill green hydrogen decarbonization, transforming fossil-fueled steelworks into zero-emission green steel foundries.",
    vignetteTitle: "The Green Steel Decarbonization Lead: Transforming Fossil Foundries into Hydrogen Mills",
    vignetteScenario: "Retrofitting an 80-year-old blast furnace steel plant on July 13, a metallurgical engineer replaces coal coke with green hydrogen direct reduced iron technology. Their overhaul eliminates 3 million tons of carbon emissions annually, birthing a zero-emission steel facility.",
    birthArchetypeContent: "Post-industrial steel mill hydrogen decarbonization and green steel manufacturing embody July 13 under Arcana 13. You do not fear heavy industrial blast furnaces; you lead radical conversions of coal steelworks into clean green hydrogen foundries.",
    highFrequencyExpression: "In radical industrial renewal, your leadership excels at blast furnace green hydrogen conversion, zero-carbon steel metallurgy, industrial decarbonization, and heavy factory environmental rebirth.",
    shadowChallenges: "When ungrounded, you might feel frustrated by slow corporate industrial permits, risk hasty hydrogen piping tests without pressure checks, or brood over past industrial pollution.",
    vocationAndFinance: "Directs heavy industry rebirth as a green steel program lead, industrial decarbonization engineer, metallurgical director, and clean-tech executive. Wealth grows through industrial transformation contracts.",
    reflectionQuestions: [
      "What heavy industrial system am I called to transform into a clean green operation?",
      "How can I apply green hydrogen technology to eliminate fossil fuel carbon emissions?",
      "Where in my career is a radical industrial rebirth waiting to happen?"
    ],
    faqItems: [
      {
        question: "Is July 13 an unlucky birthday in Destiny Matrix?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing industrial rebirth, green steel decarbonization, and high-impact renewal."
      },
      {
        question: "What zodiac sign is July 13?",
        answer: "July 13 is Cancer (Water sign), bringing protective warmth, intuitive care, and resilience to Arcana 13's transformative power."
      },
      {
        question: "What is the financial engine for July 13?",
        answer: "Executing green hydrogen decarbonization contracts for global industrial steel manufacturing conglomerates."
      },
      {
        question: "Which Arcana complements July 13?",
        answer: "Arcana 19 (The Sun) brings radiant sunlight and public acclaim to illuminate July 13's green steel achievements."
      }
    ],
    imageBrief: "Striking artwork of an old grey steel mill transforming into a glowing green and gold hydrogen foundry with clean white steam rising under a bright sun, color palette of steel grey, emerald green, and gold."
  },
  14: {
    snippetAnswer: "Centered in diplomatic balance on World Chimpanzee Day (July 14), July 14 expresses Arcana 14 (Temperance). Positioned near mid-July, July 14 bestows a talent for tropical cloud forest canopy fog harvesting, balancing mountain watershed moisture, and primate habitat hydrology.",
    vignetteTitle: "The Cloud Forest Fog Moisture Lead: Harvesting Canopy Moisture for Primate Reserves",
    vignetteScenario: "Installing a 100-mesh fog harvesting net array along an alpine cloud forest ridge on World Chimpanzee Day (July 14), a mountain hydrologist collects 10,000 liters of pure fresh water daily from passing canopy mist. Their water system feeds mountain primate reserves during dry seasons.",
    birthArchetypeContent: "Tropical cloud forest fog moisture harvesting and canopy watershed balance mark July 14 under Arcana 14 on World Chimpanzee Day. You balance cloud forest moisture levels, deploying mesh fog collectors along mountain ridges to supply fresh water to tropical wildlife sanctuaries.",
    highFrequencyExpression: "In active ecological moderation, your practice highlights cloud forest fog mesh harvesting, mountain canopy moisture balance, alpine watershed regulation, and wildlife habitat hydrology.",
    shadowChallenges: "Shadow patterns show up as hesitation during dry season water distribution decisions, over-analyzing fog net placement, or avoiding local community water negotiations.",
    vocationAndFinance: "Harmonizes water systems as a cloud forest hydrologist, fog harvesting engineer, mountain watershed director, and primate sanctuary manager. Wealth expands through watershed engineering contracts.",
    reflectionQuestions: [
      "Am I balancing wildlife sanctuary water needs with surrounding community agriculture?",
      "Where in my cloud forest hydrology work can I apply innovative fog harvesting technology?",
      "What mountain watershed framework requires rebalancing today?"
    ],
    faqItems: [
      {
        question: "What makes July 14 special on World Chimpanzee Day?",
        answer: "July 14 combines Arcana 14's balanced synthesis with World Chimpanzee Day, establishing a frequency for cloud forest fog harvesting and primate habitat water balance."
      },
      {
        question: "What zodiac sign is July 14?",
        answer: "July 14 is Cancer (Water sign), giving protective care, emotional intuition, and diplomatic agility to Arcana 14's balance."
      },
      {
        question: "What is the financial secret of July 14?",
        answer: "Designing balanced cloud forest fog harvesting systems that supply pristine water to mountain wildlife reserves and ecotourism lodges."
      },
      {
        question: "Which Arcana complements July 14?",
        answer: "Arcana 8 (Justice) provides legal backing to enforce July 14's water allocation standards."
      }
    ],
    imageBrief: "Harmonious artwork of a hydrologist inspecting golden fog harvesting nets suspended along a sunlit tropical cloud forest mountain ridge, color palette of mist white, forest emerald, and sun gold."
  },
  15: {
    snippetAnswer: "Possessing charismatic legal leverage on World Youth Skills Day (July 15), July 15 commands Arcana 15 (The Devil). Approaching mid-July, July 15 grants courtroom authority over deep-sea mining ban litigation, striking down seabed extraction licenses, and funding clean tech.",
    vignetteTitle: "The Deep-Sea Mining Ban Advocate: Litigating Abyssal Trench Preservation",
    vignetteScenario: "Exposing environmental risk assessments in tribunal hearings on World Youth Skills Day (July 15), an ocean environmental attorney defeats a seabed mining syndicate. Their trial victory secures a 20-year legal ban on polymetallic nodule dredging across 100,000 square miles of oceanic trench.",
    birthArchetypeContent: "Abyssal trench polymetallic nodule seabed mining moratoriums and ocean sanctuary legal defense define July 15 under Arcana 15. You wield intense courtroom leverage against deep-sea extraction syndicates to shield pristine benthic marine ecosystems.",
    highFrequencyExpression: "Flourishes in ocean advocacy as a seabed mining moratorium attorney, deep-sea tribunal advocate, and marine defense lead.",
    shadowChallenges: "Courtroom trial perfectionism, aggressive media litigation posturing, or legal fatigue.",
    vocationAndFinance: "Commands legal respect as a seabed mining litigation attorney, deep-sea sanctuary advocate, and international ocean policy director. Earnings expand through legal retainers.",
    reflectionQuestions: [
      "Am I using my legal leverage to expose deep-sea seabed extraction risks or to gain trial authority?",
      "What seabed mining license or environmental vulnerability am I called to challenge today?",
      "How can I bring complete legal transparency to ocean trench preservation treaties?"
    ],
    faqItems: [
      {
        question: "What makes July 15 special on World Youth Skills Day?",
        answer: "July 15 combines Arcana 15's legal leverage with World Youth Skills Day, establishing a calling for deep-sea seabed mining ban litigation."
      },
      {
        question: "What zodiac sign is July 15?",
        answer: "July 15 is Cancer (Water sign), infusing Arcana 15's legal power with protective care, intuition, and courtroom agility."
      },
      {
        question: "What is the financial engine for July 15?",
        answer: "Litigating high-value international marine environmental protection treaties and seabed mining moratoriums."
      },
      {
        question: "Which Arcana complements July 15?",
        answer: "Arcana 14 (Temperance) provides calming balance to prevent legal litigation over-reach."
      }
    ],
    imageBrief: "Dramatic artwork showing a figure holding a golden gavel that halts a deep-sea robotic dredging vehicle on an abyssal ocean floor, color palette of ocean navy, electric gold, and cyan."
  },
  16: {
    snippetAnswer: "Awakening structural safety, July 16 operates under Arcana 16 (The Tower). Positioned in mid-July, July 16 bestows a drive to inspect volcanic basalt lava tube structural integrity, prevent subterranean cavern collapses, and reinforce geothermal tunnels.",
    vignetteTitle: "The Volcanic Lava Tube Structural Engineer: Reinforcing Geothermal Caverns",
    vignetteScenario: "Inspecting an ancient volcanic lava tube system converted into a geothermal energy vault on July 16, a structural geologist detects internal basalt fracturing. Ordering emergency shotcrete lining and steel rock-bolting, they prevent cavern roof collapse.",
    birthArchetypeContent: "Volcanic basalt lava tube stress testing and subterranean cavern reinforcement define July 16 under Arcana 16. You detect hidden subterranean geological fractures, mandating steel rock-bolting to secure underground geothermal infrastructure.",
    highFrequencyExpression: "Serves subterranean civil projects as a volcanic lava tube engineer, geothermal cavern auditor, and basalt stress analyst.",
    shadowChallenges: "Delivering overly harsh safety audit reprimands, inducing panic during geological inspections, or delaying vault construction.",
    vocationAndFinance: "Protects public safety as a volcanic subterranean engineer, lava tube structural lead, and geological hazard consultant. Income grows through specialized structural safety certifications.",
    reflectionQuestions: [
      "What hidden subterranean flaw am I ready to identify and fix in my engineering work or life?",
      "How can I deliver structural safety audits with clear, solution-oriented communication?",
      "What indestructible safety foundation am I establishing for underground geothermal operations?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 16?",
        answer: "July 16 is Cancer (Water sign), bringing earth protection intuition, protective care, and technical focus to The Tower's awakening."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is revealing hidden structural flaws to build indestructible safety."
      },
      {
        question: "Which careers suit July 16 best?",
        answer: "Volcanic subterranean engineering, lava tube structural auditing, geothermal vault management, and seismic hazard prevention."
      },
      {
        question: "How can July 16 navigate sudden change?",
        answer: "Focus on core geological principles and rebuild systematically from rock-solid structural foundations."
      }
    ],
    imageBrief: "Striking architectural illustration of a glowing volcanic basalt cavern reinforced with golden steel archway beams, color palette of volcanic charcoal, electric gold, and magma orange."
  },
  17: {
    snippetAnswer: "Guided by visionary starlight on World Emoji Day (July 17), July 17 aligns with Arcana 17 (The Star). July 17 grants visionary inspiration, high-altitude optical telescope mirror alignment, deep-space infrared imaging, and guiding planetary astronomy.",
    vignetteTitle: "The High-Altitude Optical Astronomer: Aligning Deep-Space Telescope Mirrors",
    vignetteScenario: "Aligning a 39-meter optical telescope mirror on a 14,000-foot mountain peak on July 17, an astrophysicist captures high-resolution infrared images of an exoplanet atmosphere 100 light-years away, discovering water vapor signatures.",
    birthArchetypeContent: "Mountain optical telescope mirror alignment and exoplanet infrared astronomy embody July 17 under Arcana 17 on World Emoji Day. You deploy giant mountain telescope mirrors that focus starlight from distant galaxies, revealing water signatures across distant solar systems.",
    highFrequencyExpression: "In celestial astronomical alignment, your leadership excels at mountain optical telescope mirror positioning, exoplanet infrared imaging, stellar spectroscopy, and deep-space observatory direction.",
    shadowChallenges: "Shadow patterns show up as ungrounded astronomical daydreams without observational rigor, feeling alienated from daily earthly routines, or losing focus during cloudy mountain weather.",
    vocationAndFinance: "Inspires globally as an optical astronomer, telescope mirror architect, deep-space astrophysicist, observatory director, and scientific author. Prosperity expands through international space research grants.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to execute my ambitious deep-space astronomical vision?",
      "How can I use starlight telescope discoveries to illuminate humanity's place in the universe?",
      "What astronomical deep-space milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What makes July 17 special on World Emoji Day?",
        answer: "July 17 combines Arcana 17's visionary starlight with World Emoji Day, establishing a frequency for high-altitude optical astronomy and deep-space infrared imaging."
      },
      {
        question: "What zodiac sign is July 17?",
        answer: "July 17 is Cancer (Water sign), bringing protective intuition, emotional depth, and technological agility to Arcana 17's celestial vision."
      },
      {
        question: "What is the financial engine for July 17?",
        answer: "Designing optical telescope mirrors and directing deep-space infrared imaging programs funded by global observatory foundations."
      },
      {
        question: "Which Arcana complements July 17?",
        answer: "Arcana 21 (The World) expands July 17's astronomical research onto a global international stage."
      }
    ],
    imageBrief: "Breathtaking artwork of a massive 39-meter optical telescope mirror glistening under a brilliant starry night sky on a high mountain summit, color palette of cosmic indigo, starlight silver, and solar gold."
  },
  18: {
    snippetAnswer: "Navigating intuitive depths on Nelson Mandela Day (July 18), July 18 channels Arcana 18 (The Moon). July 18 endows you with a rich intuitive imagination, bioluminescent marine dinoflagellate night swarm sensing, and coastal bio-optical mapping.",
    vignetteTitle: "The Dinoflagellate Bio-Optics Lead: Sensing Nocturnal Marine Swarms",
    vignetteScenario: "Deploying high-sensitivity ocean bio-cameras on a dark July 18 night, a marine photobiologist maps glowing blue dinoflagellate plankton blooms along a 50-mile coastline. Their spatial light model predicts ocean nutrient upwelling signals 48 hours in advance.",
    birthArchetypeContent: "Bioluminescent dinoflagellate night swarm sensing and bio-optical coastal mapping mark July 18 under Arcana 18 on Nelson Mandela Day. You explore dark midnight ocean waters, using light sensors to track glowing plankton swarms.",
    highFrequencyExpression: "In nocturnal marine light sensing, your practice highlights bioluminescent dinoflagellate swarm mapping, bio-optical coastal camera sensing, plankton upwelling tracking, and oceanographic data publishing.",
    shadowChallenges: "Under shadow stress, you might succumb to irrational fears of ocean depths, fear of midnight dark water, or ungrounded biological speculation.",
    vocationAndFinance: "Excels in marine photobiology as a bio-optics researcher, nocturnal oceanographer, dinoflagellate analyst, and marine technology director. Earnings build through bio-sensor patents.",
    reflectionQuestions: [
      "Am I trusting my intuitive bio-optical ocean findings alongside digital sensors?",
      "How can I apply bioluminescent dinoflagellate mapping to predict coastal ocean health?",
      "What nocturnal ocean light mystery am I ready to illuminate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 18?",
        answer: "July 18 sits in late Cancer (Water sign), blending protective care, emotional depth, and intuitive sub-surface marine vision."
      },
      {
        question: "How does July 18 differ from June 18?",
        answer: "June 18 carries Gemini bioluminescent fungal spore communication, while July 18 carries Cancer Nelson Mandela Day bioluminescent dinoflagellate night swarm sensing."
      },
      {
        question: "What is the technical superpower of July 18?",
        answer: "Mapping nocturnal bioluminescent plankton swarms using sensitive ocean bio-camera arrays."
      },
      {
        question: "Which Arcana complements July 18?",
        answer: "Arcana 19 (The Sun) brings radiant surface light to balance Arcana 18's nocturnal marine exploration."
      }
    ],
    imageBrief: "Atmospheric symbolist painting of a scientist in a boat looking down into dark ocean water glowing with bright neon-blue dinoflagellate light under a full moon, color palette of ocean navy, electric neon blue, and silver."
  },
  19: {
    snippetAnswer: "Radiating solar authority, July 19 commands Arcana 19 (The Sun). Positioned near peak midsummer solar power, July 19 bestows radiant executive warmth, Concentrated Solar Thermal Desalination towers, and producing sunlit desert fresh water.",
    vignetteTitle: "The Desert Solar Steam Desalination Chair: Generating Coastal Fresh Water",
    vignetteScenario: "Commissioning a Concentrated Solar Thermal Desalination plant on July 19, a clean water executive uses heliostat mirror fields to heat seawater to steam. The system produces 50 million liters of pure drinking water daily for desert communities with zero carbon emissions.",
    birthArchetypeContent: "Concentrated Solar Thermal Desalination towers and sunlit desert fresh water production define July 19 under Arcana 19. You channel peak midsummer solar heat into thermal distillation towers, turning sea water into pure drinking water for arid regions.",
    highFrequencyExpression: "Leads utility water projects as a solar thermal desalination CEO, desert clean water director, and thermal energy executive.",
    shadowChallenges: "Demanding central spotlight control over solar plant projects, physical heat exhaustion, or hiding stress behind executive authority.",
    vocationAndFinance: "Achieves public acclaim as a solar thermal desalination CEO, desert clean water director, solar thermal executive, and public advocate. Prosperity expands through multi-state water supply contracts.",
    reflectionQuestions: [
      "Am I sharing my executive warmth to empower my solar thermal engineering team equally?",
      "How can I pace my intense midsummer energy drive to maintain long-term physical stamina?",
      "What solar thermal fresh water project am I ready to launch today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 19?",
        answer: "July 19 sits near the Cancer-Leo solstice cusp, representing peak midsummer solar light power."
      },
      {
        question: "How does July 19 differ from June 19?",
        answer: "June 19 carries Gemini parabolic trough solar mirror fields, while July 19 carries Cancer Concentrated Solar Thermal Desalination towers and desert fresh water production."
      },
      {
        question: "What is the financial engine for July 19?",
        answer: "Commissioning solar thermal desalination plants that supply pure drinking water to desert municipalities."
      },
      {
        question: "Which Arcana complements July 19?",
        answer: "Arcana 21 (The World) expands July 19's solar water enterprise onto a global international stage."
      }
    ],
    imageBrief: "Radiant tarot-style artwork of a triumphant engineer standing beside a solar thermal tower in a desert watching crystal clear water flow into a reservoir under a blazing sun, color palette of sun gold, desert sand, and water blue."
  },
  20: {
    snippetAnswer: "Awakened by spiritual purpose on World Jump Day (July 20), July 20 vibrates under Arcana 20 (Judgement) on the Cancer-Leo cusp. July 20 endows you with a grounded calling, lunar regolith oxygen extraction engineering, and closed-loop space habitat life support leadership.",
    vignetteTitle: "The Lunar Oxygen Extraction Lead: Engineering Space Habitat Life Support",
    vignetteScenario: "Testing a lunar regolith processing reactor on July 20, a space chemical engineer extracts 100 kilograms of pure breathable oxygen from simulated moon dust. Their closed-loop system secures sustainable life support for permanent lunar research bases.",
    birthArchetypeContent: "Lunar regolith oxygen extraction reactors and space habitat closed-loop life support define July 20 under Arcana 20. You convert moon dust minerals into breathable oxygen and water, establishing self-sustaining life support systems for international lunar habitats.",
    highFrequencyExpression: "In awakening spatial purpose, your practice commands lunar regolith processing, space habitat closed-loop oxygen extraction, orbital life support chemistry, and planetary resource survival.",
    shadowChallenges: "Under shadow friction, you may linger in harsh judgment over past space mission failures, hold grudges against competing aerospace teams, or hesitate during critical reactor trials.",
    vocationAndFinance: "Serves humanity as a lunar regolith oxygen lead, space life support director, aerospace chemical engineer, and space habitat trustee. Wealth builds through international space agency contracts.",
    reflectionQuestions: [
      "What closed-loop space life support technology am I called to build for future lunar bases?",
      "Am I listening to my quiet inner awakening or staying trapped in past mission failures?",
      "What lunar oxygen extraction standard am I ready to establish today?"
    ],
    faqItems: [
      {
        question: "What makes July 20 special on World Jump Day?",
        answer: "July 20 combines Arcana 20's spiritual awakening with World Jump Day and the Cancer-Leo Cusp, creating a calling for lunar regolith oxygen extraction reactors and space life support."
      },
      {
        question: "What zodiac sign is July 20?",
        answer: "July 20 sits on the Cancer-Leo Cusp, marking the transition from Cancer (Water) into Leo (Fire)."
      },
      {
        question: "Which careers suit July 20 best?",
        answer: "Lunar regolith oxygen lead work, space closed-loop life support engineering, aerospace chemical research, and space habitat direction."
      },
      {
        question: "How can July 20 overcome self-judgment?",
        answer: "Focus on active space technology building and view closed-loop life support as a beacon of human ingenuity."
      }
    ],
    imageBrief: "Inspiring symbolist artwork of an engineer standing inside a lunar habitat looking out at Earth while holding a container of glowing blue liquid oxygen extracted from moon dust, color palette of lunar grey, cyan oxygen blue, and gold."
  },
  21: {
    snippetAnswer: "Unifying global power on the Cancer-Leo cusp (July 21), July 21 manifests Arcana 21 (The World). July 21 grants a global perspective, a talent for completing 150-nation ocean plastic recovery treaties, and borderless clean marine environment accords.",
    vignetteTitle: "The Global Ocean Treaty Plenipotentiary: Unifying 150 Nations for Marine Restoration",
    vignetteScenario: "Finalizing a historic clean ocean treaty on July 21, an international diplomat unifies 150 nations under a binding accord that mandates 100% recycling of maritime plastic waste and funds autonomous ocean cleanup fleets globally.",
    birthArchetypeContent: "150-nation ocean plastic recovery treaties and borderless marine cleanup accords embody July 21's planetary synthesis under Arcana 21 on the Cancer-Leo cusp. You channel global diplomatic authority, establishing binding international treaties that eliminate ocean plastic pollution.",
    highFrequencyExpression: "Achieves global impact as an ocean plastic treaty diplomat, UN marine trustee, and international environmental attorney.",
    shadowChallenges: "Hesitation during complex multi-national treaty drafting, feeling ungrounded during global travel, or diplomatic perfectionism.",
    vocationAndFinance: "Achieves global impact as an ocean plastic treaty negotiator, UN marine trustee, international environmental lawyer, and global ocean diplomat. Wealth accelerates through international policy retainers.",
    reflectionQuestions: [
      "What major international ocean plastic treaty am I ready to bring to complete ratification?",
      "How can I expand my diplomatic vision to encompass global marine cleanup alliances?",
      "Where in my journey can I celebrate the complete international network I have built on July 21?"
    ],
    faqItems: [
      {
        question: "What makes July 21 special on the Cancer-Leo cusp?",
        answer: "July 21 combines Arcana 21's global completion with the Cancer-Leo cusp transition, granting capacity for 150-nation ocean plastic recovery treaties."
      },
      {
        question: "What zodiac sign is July 21?",
        answer: "July 21 marks the Cancer-Leo cusp transition into Leo (Fire sign), bringing solar warmth, executive presence, and global vision to Arcana 21."
      },
      {
        question: "What is the financial engine for July 21?",
        answer: "Structuring borderless international ocean plastic recovery treaties and global clean marine trusts."
      },
      {
        question: "Which Arcana complements July 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new global environmental cycles."
      }
    ],
    imageBrief: "Regal symbolist illustration of a figure standing on a globe surrounded by flags of 150 nations over pristine blue oceans free of plastic waste, color palette of ocean cyan, solar gold, and emerald green."
  },
  22: {
    snippetAnswer: "Unlocking Master 22 builder potential on the Cancer-Leo cusp, July 22 activates Arcana 22 (The Fool / 0). July 22 endows you with monumental master-builder capacity, legendary autonomous subsea micro-submarine trash harvester swarms, and abyssal ocean debris recovery.",
    vignetteTitle: "The Abyssal Trench Harvester Founder: Deploying Subsea Micro-Submarines",
    vignetteScenario: "Launching a fleet of 30 autonomous subsea micro-submarines on July 22, a marine robotics founder recovers 10,000 tons of sunken plastic waste from abyssal ocean floors at depths of 5,000 feet.",
    birthArchetypeContent: "Autonomous subsea micro-submarine trash harvesters and abyssal plastic recovery define July 22's Master 22 potential under Arcana 22. You construct subsea robotic swarms that clean deep ocean floors to restore marine trench habitats.",
    highFrequencyExpression: "Pioneers deep-sea technology as a subsea trash harvester founder, ocean robotics CEO, and trench recovery director.",
    shadowChallenges: "Rushing subsea micro-robot deployments without pressure testing, feeling overwhelmed by trench debris metrics, or fleeing office admin.",
    vocationAndFinance: "Pioneers master marine tech as a subsea trash harvester founder, ocean robotics CEO, planetary marine director, and ocean trustee. Wealth flows through multi-lateral environmental funding.",
    reflectionQuestions: [
      "What bold subsea micro-submarine trash harvester project am I called to launch for our oceans?",
      "Am I balancing my visionary leaps of faith with solid marine engineering and financial ground strategy?",
      "Where in my life am I ready to start completely fresh to serve a planetary marine purpose?"
    ],
    faqItems: [
      {
        question: "Why is July 22 a Master Number birthday?",
        answer: "July 22 combines Master Number 22 (Master Builder) with Arcana 22 (The Fool) on the Cancer-Leo cusp, granting capacity for monumental subsea micro-submarine trash harvester leaps."
      },
      {
        question: "What zodiac sign is July 22?",
        answer: "July 22 sits on the Cancer-Leo cusp, blending Cancer ocean care with Leo solar builder drive."
      },
      {
        question: "Which careers suit July 22 best?",
        answer: "Subsea micro-submarine trash harvester leadership, marine robotics building, deep ocean trench restoration, and planetary marine trusteeship."
      },
      {
        question: "How can July 22 avoid burnout?",
        answer: "Ground your monumental subsea robotics vision with trusted ocean robotics engineers and financial co-trustees."
      }
    ],
    imageBrief: "Breathtaking illustration of a master builder figure inspecting a small golden subsea micro-submarine recovering plastic from a glowing blue ocean trench, color palette of deep trench blue, electric gold, and cyan."
  },
  23: {
    snippetAnswer: "July 23 integrates educational authority under Arcana 5 (The Hierophant) in Leo season. July 23 endows you with a talent for authoring Mediterranean damask rose and lavender essential oil distillation manuals, training master perfumers, and publishing botanical chemistry standards.",
    vignetteTitle: "The Fragrance Chemistry Professor: Setting Organic Essential Oil Standards",
    vignetteScenario: "Publishing an authoritative manual on damask rose and lavender essential oil distillation on July 23, a botanical chemist trains master perfumers across 30 French fragrance houses. Their textbook sets global purity standards for organic flower oils.",
    birthArchetypeContent: "Damask rose and lavender essential oil distillation manuals and organic perfume chemistry standards distinguish July 23 under Arcana 5 in Leo. You translate botanical extraction science into compulsory industry standards for luxury perfume houses.",
    highFrequencyExpression: "Establishes fragrance standards as a perfume chemistry professor, essential oil textbook author, and aroma consultant.",
    shadowChallenges: "Rigid insistence on chemical purity formulas, impatience with apprentice perfumers, or dismissive attitudes toward synthetic substitutes.",
    vocationAndFinance: "Establishes industry standards as a botanical distillation author, organic essential oil director, perfume chemistry professor, and fragrance consultant. Financial returns build through textbook publishing and advisory retainers.",
    reflectionQuestions: [
      "Am I teaching essential oil distillation from practical copper kettle trials and field harvests?",
      "How can I translate complex botanical chemistry into clear standards for master perfumers?",
      "What organic essential oil manual am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 23?",
        answer: "July 23 enters Leo (Fire sign), infusing The Hierophant's teaching mission with solar radiance, warmth, and executive presence."
      },
      {
        question: "How does July 23 differ from July 5?",
        answer: "July 5 carries Cancer mangrove estuary restoration charters, while July 23 carries Leo damask rose & lavender essential oil distillation manuals."
      },
      {
        question: "What is the financial model for July 23?",
        answer: "Publishing botanical distillation textbooks and consulting for international luxury fragrance houses."
      },
      {
        question: "Which Arcana complements July 23?",
        answer: "Arcana 3 (The Empress) offers fertile natural growth to support Arcana 5's botanical teaching."
      }
    ],
    imageBrief: "Vibrant artwork of a botanical chemist presenting digital molecular diagrams of rose oil to perfumers in a sunlit lavender laboratory, color palette of lavender violet, rose pink, and solar gold."
  },
  24: {
    snippetAnswer: "Midsummer light on July 24 inspires agrarian trade alliances under Arcana 6 (The Lovers) on International Self-Care Day. July 24 endows you with a talent for organizing organic lemongrass and ginger rhizome distillation guilds, securing fair-trade spice agreements, and scaling herbal tea exports.",
    vignetteTitle: "The Organic Lemongrass & Ginger Guild Lead: Directing Botanical Co-Ops",
    vignetteScenario: "Unifying 40 organic lemongrass and ginger farming families on International Self-Care Day (July 24), a spice alliance director creates a fair-trade herb co-op. Their export network supplies organic rhizome tea extracts to luxury wellness beverage brands worldwide.",
    birthArchetypeContent: "Organic lemongrass and ginger rhizome distillation cooperatives and botanical tea alliances mark July 24 under Arcana 6 on International Self-Care Day. You structure fair profit-sharing charters for spice growers, securing direct trade deals with luxury beverage brands.",
    highFrequencyExpression: "Fosters botanical harmony as a lemongrass guild lead, ginger spice alliance founder, and organic rhizome exporter.",
    shadowChallenges: "Over-complicating lemongrass grower profit split models, worrying over field certification timing, or avoiding buyer price talks.",
    vocationAndFinance: "Fosters botanical harmony as a lemongrass guild lead, ginger spice alliance founder, organic rhizome exporter, and fair-trade advocate. Returns grow through co-operative herb equity.",
    reflectionQuestions: [
      "Am I building lemongrass spice alliances on clear mutual agreements or verbal promises?",
      "How can I combine organic ginger rhizome structure with genuine grower community trust?",
      "What organic lemongrass tea alliance am I ready to formalize on International Self-Care Day?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 24?",
        answer: "July 24 is Leo (Fire sign), bringing solar warmth, charisma, and executive presence to Arcana 6's partnership design."
      },
      {
        question: "How does July 24 differ from July 6?",
        answer: "July 6 carries Cancer organic wild caper trade co-ops, while July 24 carries Leo International Self-Care Day organic lemongrass & ginger rhizome co-ops."
      },
      {
        question: "What is the financial secret of July 24?",
        answer: "Structuring regional organic lemongrass rhizome co-ops that command direct international wellness beverage export contracts."
      },
      {
        question: "Which Arcana complements July 24?",
        answer: "Arcana 4 (The Emperor) reinforces July 24's demand for administrative structure in alliances."
      }
    ],
    imageBrief: "Warm graphic depicting spice growers harvesting golden ginger rhizomes and fresh lemongrass stalks under a bright Leo sun into woven wooden baskets, color palette of lemongrass green, ginger gold, and earth brown."
  },
  25: {
    snippetAnswer: "Hydrogen ferry momentum on July 25 drives Arcana 7 (The Chariot). Resting in Leo season, July 25 grants a talent for leading hydrogen fuel cell commuter ferry engineering, zero-emission harbor transit optimization, and rapid water transport fleets.",
    vignetteTitle: "The Clean Harbor Ferry Commodore: Launching Hydrogen Fuel Cell Vessels",
    vignetteScenario: "Commissioning a 300-passenger hydrogen fuel cell commuter ferry on July 25, a marine transit engineer completes speed trials across a busy harbor. The hydrogen ferry carries 50,000 daily harbor commuters with zero noise and zero water pollution.",
    birthArchetypeContent: "Hydrogen-powered urban commuter ferry fleets and zero-emission harbor transit anchor July 25 under Arcana 7 in Leo. You combine Leo executive presence with hydrogen fuel cell marine engineering, leading transit trials for zero-emission ferries moving commuters across coastal bays.",
    highFrequencyExpression: "Pioneers rapid water transport as a hydrogen ferry lead, marine fuel cell developer, and harbor transit director.",
    shadowChallenges: "Impatience during harbor authority transit permits, pushing ferry speed trials past safety limits, or brusque harbor communications.",
    vocationAndFinance: "Pioneers rapid harbor transit as a hydrogen ferry lead, marine fuel cell developer, harbor transit director, and clean ferry founder. Income expands through public maritime transit contracts.",
    reflectionQuestions: [
      "Am I balancing high-speed hydrogen ferry innovation with strict maritime safety compliance?",
      "How can I lead my harbor transit engineering team to excel without creating high-pressure burnout?",
      "What zero-emission hydrogen ferry milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 25?",
        answer: "July 25 is Leo (Fire sign), giving solar warmth, executive presence, and harbor transit design agility to Arcana 7."
      },
      {
        question: "How does July 25 differ from July 7?",
        answer: "July 7 carries Cancer electric cargo sailboat shipping, while July 25 carries Leo hydrogen-powered urban commuter ferry fleets and zero-emission harbor transit."
      },
      {
        question: "What is the technical edge of July 25?",
        answer: "Designing hydrogen fuel cell commuter ferries that transport 50,000 daily harbor passengers with zero emissions."
      },
      {
        question: "Which Arcana complements July 25?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's ferry trial programs."
      }
    ],
    imageBrief: "Dynamic transit graphic of a sleek white hydrogen fuel cell commuter ferry gliding across a sunlit harbor in front of a modern city skyline, color palette of navy blue, pure white, and solar gold."
  },
  26: {
    snippetAnswer: "World Mangrove Day regulatory clarity on July 26 defines Arcana 8 (Justice) on World Mangrove Ecosystem Day (July 26). Positioned in Leo season, July 26 grants a razor-sharp mind for auditing mangrove sanctuary compliance, enforcing coastal carbon sink law, and protecting coastal wetland treaties.",
    vignetteTitle: "The Mangrove Sanctuary Litigator: Defending Coastal Blue Carbon Forests",
    vignetteScenario: "Auditing coastal wetland developments on World Mangrove Day (July 26), an environmental lawyer enforces mangrove sanctuary protection laws across 10 coastal states. Their litigation halts illegal resort destruction across 20,000 acres of blue carbon mangrove forests.",
    birthArchetypeContent: "World Mangrove Ecosystem Day legal defense and coastal blue carbon sanctuary enforcement define July 26 under Arcana 8 in Leo. You mandate coastal mangrove protection law, penalizing illegal coastal development to safeguard carbon-absorbing mangrove wetlands.",
    highFrequencyExpression: "Upholds environmental law as a World Mangrove Day legal lead, coastal carbon attorney, and marine commissioner.",
    shadowChallenges: "Hyper-critical legalistic scrutiny during resort audits, rigid adherence to zoning checklists, or suppressing personal empathy.",
    vocationAndFinance: "Upholds environmental law as a World Mangrove Day legal lead, coastal carbon sink attorney, marine wetland commissioner, and blue carbon policy director. Earnings build through environmental litigation retainers.",
    reflectionQuestions: [
      "Am I applying objective fairness to small coastal communities as well as large resort developers?",
      "Where in my mangrove sanctuary auditing can I establish greater legal transparency?",
      "What coastal blue carbon protection standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What makes July 26 special on World Mangrove Ecosystem Day?",
        answer: "July 26 combines Arcana 8's legal justice with World Mangrove Ecosystem Day, establishing a frequency for coastal carbon sink law enforcement."
      },
      {
        question: "What zodiac sign is July 26?",
        answer: "July 26 is Leo (Fire sign), bringing solar authority, courage, and executive presence to Arcana 8's legal precision."
      },
      {
        question: "What is the financial rule for July 26?",
        answer: "Maintain absolute regulatory compliance and fair coastal law standards in all blue carbon environmental investments."
      },
      {
        question: "Which Arcana complements July 26?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 8's mangrove litigation cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a lush coastal mangrove forest with a magnifying crystal lens, color palette of mangrove green, ocean turquoise, and gold."
  },
  27: {
    snippetAnswer: "Sub-glacial Antarctic research defines July 27 under Arcana 9 (The Hermit). Positioned in Leo season, July 27 endows you with specialized talent for deep ice core geochemical sampling, cataloging ancient sub-glacial lake microbes, and indexing sub-zero biological archives.",
    vignetteTitle: "The Antarctic Sub-Ice Glaciologist: Sampling Ancient Subterranean Lakes",
    vignetteScenario: "Sampling a subterranean ice lake 3,000 meters beneath the Antarctic ice sheet on July 27, a glaciologist recovers pristine extremophile microbes isolated for 1 million years. Their discovery reveals ancient metabolic pathways used in novel biotechnology.",
    birthArchetypeContent: "Sub-glacial Antarctic lake sampling and ancient extremophile microbe indexing define July 27 under Arcana 9 in Leo. You work in quiet scientific focus, deploying hot-water drills to sample isolated sub-glacial lakes deep beneath polar ice sheets.",
    highFrequencyExpression: "Advances polar science as a sub-glacial lake microbiologist, ice core geochemist, and Antarctic researcher.",
    shadowChallenges: "Withdrawing into silent polar research isolation, withholding extremophile sample data, or dismissive attitudes toward non-scientists.",
    vocationAndFinance: "Advances earth science as a sub-glacial lake microbiologist, polar ice geochemist, extremophile curator, and Antarctic scientist. Revenue grows through biotechnology patents and research grants.",
    reflectionQuestions: [
      "Am I balancing my solitary polar lake modeling focus with open scientific collaboration?",
      "How can I apply sub-glacial microbial discoveries to assist modern medical biotechnology?",
      "What sub-zero Antarctic ice mystery am I ready to solve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is July 27?",
        answer: "July 27 is Leo (Fire sign), blending solar warmth with The Hermit's contemplative research focus."
      },
      {
        question: "How does July 27 differ from June 27?",
        answer: "June 27 carries Cancer basalt rock indexing, while July 27 carries Leo sub-glacial Antarctic lake sampling and extremophile microbe indexing."
      },
      {
        question: "Why does July 27 thrive in Antarctic microbe databases?",
        answer: "Quiet laboratory focus allows July 27 to analyze delicate ancient sub-glacial microbes without atmospheric contamination."
      },
      {
        question: "Which Arcana complements July 27?",
        answer: "Arcana 3 (The Empress) provides fertile natural growth backing to support Arcana 9's polar research."
      }
    ],
    imageBrief: "Mystical scientific portrait of a glaciologist analyzing glowing blue ice cores inside a polar ice lab, color palette of glacier blue, crisp white, and starlight silver."
  },
  28: {
    snippetAnswer: "Deep-water aerogenerator wind dynamics characterize July 28 under Arcana 10 (Wheel of Fortune) on World Nature Conservation Day. July 28 grants an intuitive rhythm for spar-buoy floating wind turbine arrays, taut-leg subsea mooring design, and scaling 500MW offshore power fields.",
    vignetteTitle: "The Spar-Buoy Aerogenerator Lead: Deploying 500MW Offshore Wind Arrays",
    vignetteScenario: "Commissioning a 500MW floating wind farm in deep ocean waters on World Nature Conservation Day (July 28), a marine wind engineer anchors 30 spar-buoy aerogenerators in 1,000-foot deep water. The floating wind farm captures deep-ocean winds to supply 150,000 coastal homes.",
    birthArchetypeContent: "Offshore floating aerogenerator dynamics and deep-water spar-buoy mooring characterize July 28 under Arcana 10 on World Nature Conservation Day. You convert deep-sea wind pressure into clean electricity, building floating turbine fields in offshore waters.",
    highFrequencyExpression: "Pioneers offshore aerogenerator engineering as a floating wind lead, spar-buoy mooring designer, and deep-water turbine CEO.",
    shadowChallenges: "Rushing subsea mooring line deployments, ignoring ocean wave fatigue limits, or over-working offshore installation crews.",
    vocationAndFinance: "Pioneers marine clean energy as a floating wind engineer, spar-buoy mooring designer, and offshore wind farm director. Wealth grows through wind turbine patents.",
    reflectionQuestions: [
      "Am I testing floating aerogenerator moorings against extreme ocean storm swell forces?",
      "How can I optimize spar-buoy taut-leg mooring hydrodynamics to increase wind energy output?",
      "What offshore floating wind milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What makes July 28 special on World Nature Conservation Day?",
        answer: "July 28 combines Arcana 10's cycle timing with World Nature Conservation Day, establishing a frequency for spar-buoy floating aerogenerator engineering."
      },
      {
        question: "What zodiac sign is July 28?",
        answer: "July 28 is Leo (Fire sign), giving solar executive warmth and engineering drive to Arcana 10."
      },
      {
        question: "What is the technical edge of July 28?",
        answer: "Engineering spar-buoy floating aerogenerators anchored with taut-leg subsea moorings in deep ocean water."
      },
      {
        question: "Which Arcana complements July 28?",
        answer: "Arcana 21 (The World) expands July 28's wind power projects onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over a glowing spar-buoy floating aerogenerator array spinning in ocean swell, color palette of ocean navy, electric wind cyan, and gold."
  },
  29: {
    snippetAnswer: "Celebrating International Wildlife Day on July 29 activates Master 11 potential under Arcana 11 (Strength). Positioned in Leo season, July 29 endows you with physical stamina for protecting Sub-Saharan cheetah sprinter hunting plains, acacia grassland sanctuaries, and swift predator plain conservation.",
    vignetteTitle: "The Savanna Cheetah Corridor Lead: Protecting Grassland Migration Reserves",
    vignetteScenario: "Coordinating a grassland sanctuary trust on July 29, a wildlife biologist leads ranger patrols across 300,000 acres of acacia savanna plains. Their sanctuary defense protects cheetah hunting corridors while supporting pastoral community grazing agreements.",
    birthArchetypeContent: "Sub-Saharan cheetah sprinter hunting plain defense and acacia grassland sanctuary trusteeship define July 29's Master 11 path under Arcana 11 on International Wildlife Day. You navigate open 100-degree grassland plains, using calm physical composure to protect Sub-Saharan cheetahs.",
    highFrequencyExpression: "Champions Sub-Saharan cheetah sprinter hunting plain stewardship, acacia grassland corridor management, and savanna predator sanctuary trusteeship.",
    shadowChallenges: "Physical exhaustion from grueling 100-degree savanna patrols, sudden frustration over illegal land fencing, or suppressing fatigue.",
    vocationAndFinance: "Directs African predator conservation as a cheetah biologist, savanna plain sanctuary lead, and velocity wildlife trustee. Funding expands through global fauna grants.",
    reflectionQuestions: [
      "How can I protect my physical stamina while conducting long open savanna plain patrols?",
      "Am I applying quiet somatic composure rather than force when protecting cheetah hunting corridors?",
      "What savanna grassland sanctuary initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Why is July 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and quiet somatic mastery over savanna cheetah wildlife."
      },
      {
        question: "What zodiac sign is July 29?",
        answer: "July 29 is Leo (Fire sign), adding solar courage, executive authority, and savanna connection to Arcana 11's intense strength."
      },
      {
        question: "How does July 29 differ from June 29?",
        answer: "June 29 features Cancer wandering albatross oceanic island protection, whereas July 29 features Leo Sub-Saharan cheetah sprinter hunting plain stewardship."
      },
      {
        question: "What is the health key for July 29?",
        answer: "Regular physical grounding practices and systematic hydration recovery between open savanna field patrols."
      }
    ],
    imageBrief: "Inspiring artwork of a calm wildlife biologist standing on an acacia savanna plain beside a magnificent African cheetah under a golden sun halo, color palette of savanna gold, cheetah amber, and sky blue."
  },
  30: {
    snippetAnswer: "Culminating July into midsummer on International Day of Friendship (July 30), July 30 embodies Arcana 3 (The Empress). July 30 bestows abundant creative fertility, cultivating solar photobioreactor micro-algae biofuel refining estates, and scaling clean aviation fuel production.",
    vignetteTitle: "The Micro-Algae Biofuel Estate Lead: Refining Zero-Carbon Aviation Fuel",
    vignetteScenario: "Commissioning a 1,000-acre solar photobioreactor micro-algae facility on International Day of Friendship (July 30), a bio-refining executive distills lipid-rich micro-algae into zero-carbon sustainable aviation fuel. Their bio-fuel contracts supply major international airlines with clean jet fuel.",
    birthArchetypeContent: "Solar photobioreactor micro-algae cultivation and clean aviation bio-fuel refining define July 30 under Arcana 3 on International Day of Friendship. You cultivate lipid-dense micro-algae in sunlit photobioreactors, launching zero-emission bio-refining estates that replace jet fuel.",
    highFrequencyExpression: "Builds bio-refining estates as a micro-algae bio-fuel founder, photobioreactor engineer, and sustainable aviation fuel CEO.",
    shadowChallenges: "Possessive control over photobioreactor lipid extraction formulas, vanity regarding clean-tech press, or over-spending on refining equipment.",
    vocationAndFinance: "Builds bio-energy empires as a micro-algae bio-fuel founder, photobioreactor estate CEO, clean jet fuel producer, and bio-chemist. Wealth expands through commercial airline bio-fuel contracts.",
    reflectionQuestions: [
      "How can I scale solar photobioreactor micro-algae cultivation to eliminate fossil jet fuel carbon emissions?",
      "Am I balancing my visionary bio-refining energy drive with practical refinery unit costs?",
      "What micro-algae bio-fuel refinement project am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What makes July 30 special on International Day of Friendship?",
        answer: "July 30 combines Arcana 3's creative fertility with International Day of Friendship, establishing a frequency for solar photobioreactor micro-algae bio-fuel refining."
      },
      {
        question: "What zodiac sign is July 30?",
        answer: "July 30 is Leo (Fire sign), bringing solar radiance, executive warmth, and technical elegance to The Empress's creative fertility."
      },
      {
        question: "What is the financial engine for July 30?",
        answer: "Refining and supplying clean micro-algae sustainable aviation fuel to commercial international airlines."
      },
      {
        question: "Which Arcana complements July 30?",
        answer: "Arcana 4 (The Emperor) provides structural manufacturing execution to support Arcana 3's bio-refinery growth."
      }
    ],
    imageBrief: "Rich technical illustration of an engineer standing beside glowing green solar photobioreactor tube arrays in a desert bio-refinery under a bright Leo sun, color palette of emerald algae green, solar gold, and clean white."
  },
  31: {
    snippetAnswer: "Closing July under executive governance on World Ranger Day (July 31), July 31 anchors Arcana 4 (The Emperor). July 31 endows you with sanctuary governance mastery, anti-poaching security infrastructure design, and directing global park ranger networks.",
    vignetteTitle: "The World Ranger Day Governance Lead: Building Sanctuary Security Infrastructure",
    vignetteScenario: "Directing a global national park security network on World Ranger Day (July 31), a sanctuary administrator installs satellite radar towers and solar ranger stations across a 500,000-acre wildlife reserve. Their governance system equips 200 park rangers to protect endangered rhinos.",
    birthArchetypeContent: "World Ranger Day wildlife sanctuary governance and anti-poaching security infrastructure mark July 31 under Arcana 4 in Leo. You build solar-powered ranger outposts and satellite radar networks, empowering park rangers to enforce sanctuary boundaries and protect endangered wildlife.",
    highFrequencyExpression: "In master park governance alignment, your leadership commands wildlife sanctuary security design, park ranger infrastructure, anti-poaching administration, and global park trusteeship.",
    shadowChallenges: "Under shadow stress, you might exhibit rigid administrative control over ranger teams, impose harsh disciplinary rules without listening to rangers, or clash with regional park boards.",
    vocationAndFinance: "Commands high executive authority as a World Ranger Day governance lead, national park director, anti-poaching security architect, and wildlife trust chair. Wealth grows through high-level environmental security retainers.",
    reflectionQuestions: [
      "Am I leading my park ranger security teams with protective authority or rigid demands?",
      "How can I deploy solar ranger outposts to strengthen sanctuary boundary enforcement?",
      "What national park security infrastructure milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What makes July 31 special on World Ranger Day?",
        answer: "July 31 combines Arcana 4's executive governance with World Ranger Day, establishing a calling for national park security infrastructure and park ranger network leadership."
      },
      {
        question: "What zodiac sign is July 31?",
        answer: "July 31 is Leo (Fire sign), infusing Arcana 4's executive discipline with solar authority, courage, and protective leadership."
      },
      {
        question: "Which careers suit July 31 best?",
        answer: "World Ranger Day governance leadership, national park administration, anti-poaching security architecture, and wildlife sanctuary trusteeship."
      },
      {
        question: "How can July 31 maintain administrative momentum?",
        answer: "Combine structural park governance standards with clear ranger communication and international sanctuary permits."
      }
    ],
    imageBrief: "Commanding architectural graphic of a chief park administrator inspecting a solar-powered ranger outpost tower overlooking a vast sunlit wildlife savanna, color palette of savanna gold, emerald green, and slate grey."
  }
};

export function getJulyProfile(day: number): BirthdayProfileData {
  const custom = JULY_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `July ${day}`;
  const slug = `july-${day}`;

  const phaseText = day <= 10 ? `early July Cancer water phase of day ${day}` : day <= 22 ? `mid-July Cancer-Leo solstice cusp phase of day ${day}` : `late-July Leo solar fire phase of day ${day}`;
  const seasonalContext = `Radiant midsummer light and peak environmental vitality mark the ${phaseText}.`;
  const dayVibrationNote = `${formattedDate} combines this midsummer energy with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 30 : day - 1;
  const nextDay = day === 31 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'June 30' : `July ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 30 ? "June closing midsummer threshold" : `Preceding July ${prevDay} vibration`,
      bestFocus: `Consolidating earlier July ${prevDay} momentum`,
      keyContrast: `Paves the way for Arcana ${primaryArcanaNum} expression on July ${day}.`
    },
    {
      dateLabel: formattedDate,
      arcanaNum: primaryArcanaNum,
      arcanaName: primaryArcana.name,
      coreTheme: custom?.vignetteTitle || `${primaryArcana.name} activation`,
      bestFocus: `Anchoring unique July ${day} profile strengths`,
      keyContrast: `Your individual July ${day} archetype focus.`,
      isCurrentDay: true
    },
    {
      dateLabel: day === 31 ? 'August 1' : `July ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: `Emerging July ${nextDay} expansion`,
      bestFocus: `Advancing toward July ${nextDay} wisdom`,
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} qualities.`
    }
  ];

  return {
    slug,
    month: 'July',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of July seasonal focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
    vignetteTitle: custom?.vignetteTitle || `The ${formattedDate} Catalyst: Navigating ${primaryArcana.name} Energy`,
    vignetteScenario: custom?.vignetteScenario || `In a key moment of decision, someone born on ${formattedDate} steps forward to apply the ${primaryArcana.archetype.toLowerCase()} lessons of Arcana ${primaryArcanaNum}, turning a routine challenge into a major breakthrough.`,
    birthArchetypeContent: custom?.birthArchetypeContent || `Individuals born on ${formattedDate} embody the core qualities of Arcana ${primaryArcanaNum} (${primaryArcana.name}). You possess a natural drive to master your environment, apply structured discipline, and express your authentic talents.`,
    comparisonTable,
    highFrequencyExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenges: custom?.shadowChallenges || primaryArcana.shadowExpression,
    vocationAndFinance: custom?.vocationAndFinance || `${primaryArcana.careerGuidance} ${primaryArcana.moneyChannel}`,
    reflectionQuestions: custom?.reflectionQuestions || [
      `How can I align with the ${phaseText} to support my goals?`,
      `In what ways does ${primaryArcana.name} encourage me to express ${primaryArcana.archetype.toLowerCase()} today?`,
      `What specific practice will help me anchor constructive high frequency in my daily routine?`
    ],
    faqItems: custom?.faqItems || [
      {
        question: `What zodiac sign is ${formattedDate}?`,
        answer: day <= 22 ? `${formattedDate} falls under Cancer (Water sign), bringing intuitive depth, protective care, and emotional resonance.` : `${formattedDate} falls under Leo (Fire sign), bringing solar warmth, courage, and executive authority.`
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
