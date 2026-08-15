import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const AUGUST_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Sunlight on August 1 brings forth Arcana 1 (The Magician) in the heart of Leo solar fire. You specialize in concentrating desert solar thermal flux, positioning tracking heliostat mirrors, and engineering high-temperature molten salt power towers.",
    vignetteTitle: "The Heliostat Solar Thermal Lead: Engineering Desert Molten Salt Power Towers",
    vignetteScenario: "Commissioning a 200-meter concentrated solar tower in the Mojave basin on August 1, a solar thermal engineer coordinates 10,000 sun-tracking heliostat mirrors. Their system concentrates intense solar rays onto a central receiver, heating molten salt to 565°C to generate 150MW of clean electricity.",
    birthArchetypeContent: "Concentrated solar thermal flux and heliostat mirror array positioning define August 1 under Arcana 1. You fuse Leo solar warmth with Magician creative initiation, constructing utility-scale thermal power towers integrated with molten salt energy storage.",
    highFrequencyExpression: "In active solar engineering, your work highlights solar thermal flux calculations, heliostat array positioning, molten salt energy storage, and desert utility grid expansion.",
    shadowChallenges: "Shadow states show up as impetuous decisions during solar plant permitting, clashing with utility grid dispatchers, or abandoning thermal projects prematurely.",
    vocationAndFinance: "Flourishes in renewable utilities as a solar thermal architect, heliostat array designer, molten salt engineer, and power plant CEO. Revenue builds through long-term electricity purchase contracts.",
    reflectionQuestions: [
      "Am I bringing my concentrated solar tower concepts into complete utility grid construction?",
      "How can I channel August solar radiance to inspire my engineering studio?",
      "What solar thermal energy innovation am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 1?",
        answer: "August 1 is Leo (Fire sign), bringing solar warmth, executive confidence, and creative initiation to The Magician."
      },
      {
        question: "How does August 1 differ from July 1?",
        answer: "July 1 carries Cancer solar skyscraper design, while August 1 carries Leo concentrated solar heliostat tower engineering and molten salt thermal storage."
      },
      {
        question: "What is the financial engine for August 1?",
        answer: "Developing and operating utility-scale concentrated solar thermal power plants for regional electricity networks."
      },
      {
        question: "Which Arcana complements August 1?",
        answer: "Arcana 19 (The Sun) amplifies August 1's public visibility and solar energy acclaim."
      }
    ],
    imageBrief: "Vibrant graphic of an engineer standing beside a glowing golden solar tower surrounded by thousands of sunlit tracking heliostat mirrors, color palette of solar gold, desert amber, and deep sky blue."
  },
  2: {
    snippetAnswer: "Born under the quiet influence of Arcana 2 (The High Priestess) on August 2, you hold deep intuitive sensitivity to volcanic earth movements, subterranean magma conduit acoustics, and caldera strain gauge monitoring.",
    vignetteTitle: "The Caldera Seismologist: Mapping Subterranean Magma Acoustic Frequencies",
    vignetteScenario: "Monitoring a volcanic rift zone on August 2, a geothermal seismologist deploys fiber-optic acoustic lines 5,000 feet into subterranean rock layers. Their spatial mapping detects subtle seismic frequency shifts 72 hours before magma pressure expands.",
    birthArchetypeContent: "Subterranean magma conduit acoustics and caldera strain gauge monitoring define August 2 under Arcana 2. You explore deep volcanic earth layers, deploying fiber-optic sensors to decode subterranean acoustic signals released by magma chambers.",
    highFrequencyExpression: "In quiet earth science, your path highlights volcanic seismology, fiber-optic line deployment, caldera strain gauge mapping, and intuitive geological perception.",
    shadowChallenges: "Unbalanced states lead to solitary isolation in subterranean research vaults, withholding seismic sensor data from colleagues, or ignoring surface engineering teams.",
    vocationAndFinance: "Excels in geophysics as a volcanic seismologist, subterranean sensor researcher, acoustic geology director, and caldera analyst. Income grows through specialized research grants.",
    reflectionQuestions: [
      "Am I trusting my intuitive earth acoustic observations alongside digital seismic sensors?",
      "How can I share my volcanic geothermal findings to protect surrounding mountain communities?",
      "What quiet subterranean study am I called to complete today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 2?",
        answer: "August 2 is Leo (Fire sign), giving solar warmth and intuitive depth to The High Priestess's quiet inner wisdom."
      },
      {
        question: "How does August 2 differ from July 2?",
        answer: "July 2 carries Cancer bathyal trench sonar acoustics, while August 2 carries Leo subterranean volcanic tremor monitoring and magma conduit fiber-optic sensing."
      },
      {
        question: "What is the key to success for August 2?",
        answer: "Patience and quiet scientific observation of deep subterranean acoustic signals."
      },
      {
        question: "Which Arcana complements August 2?",
        answer: "Arcana 3 (The Empress) provides natural growth backing to support August 2's geothermal discoveries."
      }
    ],
    imageBrief: "Mystical symbolist painting of a geologist monitoring glowing red seismic wave monitors inside a deep volcanic subterranean vault, color palette of volcanic charcoal, magma orange, and glowing cyan."
  },
  3: {
    snippetAnswer: "August 3 activates Arcana 3 (The Empress) with botanical abundance. You excel in harvesting organic lavandin flower fields, operating copper steam retorts, and refining helichrysum volatile essential oils for luxury natural cosmetics.",
    vignetteTitle: "The Lavandin Distillation Master: Refining Helichrysum Volatile Oils",
    vignetteScenario: "Operating a copper steam retort facility on August 3, a botanical chemist distills fresh lavandin blossoms and helichrysum flower heads across a 500-acre estate. Their process extracts pure volatile essential oils that supply international natural skincare brands.",
    birthArchetypeContent: "Provence lavandin harvesting and helichrysum copper steam retort distillation mark August 3 under Arcana 3. You process floral crops into high-purity volatile essential oils, combining agrarian beauty with sustainable extraction chemistry.",
    highFrequencyExpression: "In active fertile light, your leadership focuses on lavandin flower cultivation, helichrysum steam distillation, volatile oil chemistry, and botanical cosmetic scaling.",
    shadowChallenges: "Imbalance shows up as possessive control over essential oil trade formulas, excessive spending on custom copper retorts, or impatience during crop harvest seasons.",
    vocationAndFinance: "Thrives in luxury cosmetics as a lavandin estate founder, botanical bio-refinery CEO, natural fragrance chemist, and aroma director. Wealth expands through high-value essential oil export deals.",
    reflectionQuestions: [
      "How can I scale my organic essential oil bio-refinery to set international purity standards?",
      "Am I balancing my creative floral fragrance design with practical field distillation costs?",
      "What botanical extraction innovation am I ready to introduce today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 3?",
        answer: "August 3 is Leo (Fire sign), bringing solar radiance, aesthetic elegance, and executive warmth to The Empress's creative fertility."
      },
      {
        question: "How does August 3 differ from July 3?",
        answer: "July 3 carries Cancer seaweed bioplastic packaging, while August 3 carries Leo Provence lavandin & helichrysum steam distillation bio-refineries."
      },
      {
        question: "What is the financial engine for August 3?",
        answer: "Cultivating and refining organic lavandin essential oils for international cosmetics and wellness conglomerates."
      },
      {
        question: "Which Arcana complements August 3?",
        answer: "Arcana 4 (The Emperor) provides structural manufacturing execution to support Arcana 3's bio-refinery growth."
      }
    ],
    imageBrief: "Lush modern painting of a botanical chemist holding a glass flask of golden lavender oil inside a sunlit copper distillation laboratory overlooking purple lavender fields, color palette of lavender violet, solar gold, and copper amber."
  },
  4: {
    snippetAnswer: "August 4 anchors structural civil authority under Arcana 4 (The Emperor). You excel at high-desert dual-basin pumped hydro-storage dam engineering, elevation head differential calculation, and penstock water conduit design.",
    vignetteTitle: "The Penstock Hydro Engineer: Building Dual-Basin Storage Reservoirs",
    vignetteScenario: "Directing a major water infrastructure project on August 4, a civil hydro engineer constructs a dual-basin pumped hydro-storage dam in a desert canyon. The system utilizes high-pressure penstock conduits to store daytime solar energy, generating 400MW during evening peak hours.",
    birthArchetypeContent: "High-desert dual-basin pumped hydro-storage dam engineering and penstock water conduit calculation mark August 4 under Arcana 4. You design high-capacity reservoirs leveraging elevation head differentials to store solar power and stabilize regional grids.",
    highFrequencyExpression: "In structural civil discipline, your work commands dual-basin hydro-storage reservoir design, penstock conduit engineering, elevation head optimization, and major infrastructure authority.",
    shadowChallenges: "Shadow patterns manifest as rigid micromanagement over construction sites, enforcing harsh shift rules without crew consultation, or resisting alternative grid designs.",
    vocationAndFinance: "Commands high respect as a penstock hydro engineer, dual-basin storage project director, civil hydro chair, and water utility CEO. Wealth accumulates through municipal infrastructure contracts.",
    reflectionQuestions: [
      "Am I leading my civil hydro engineering team with clear direction or rigid demands?",
      "Where in my renewable grid projects can I deploy high-capacity pumped hydro-storage technology?",
      "What desert water storage milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 4?",
        answer: "August 4 is Leo (Fire sign), infusing Arcana 4's executive discipline with solar warmth, courage, and engineering authority."
      },
      {
        question: "How does August 4 differ from July 4?",
        answer: "July 4 carries Cancer orbital satellite solar array engineering, while August 4 carries Leo high-desert dual-basin pumped hydro-storage dam engineering."
      },
      {
        question: "Which careers suit August 4 best?",
        answer: "Dual-basin hydro-storage engineering, penstock conduit project direction, civil infrastructure leadership, and water utility development."
      },
      {
        question: "How can August 4 maintain project momentum?",
        answer: "Combine structural civil engineering standards with clear team communication and environmental water permits."
      }
    ],
    imageBrief: "Commanding civil engineering graphic showing a chief hydro engineer inspecting a massive concrete mountain reservoir holding crystal blue water under a blazing desert sun, color palette of desert sand, water blue, and solar gold."
  },
  5: {
    snippetAnswer: "August 5 unites educational leadership under Arcana 5 (The Hierophant). You draft alpine cryosphere glaciology treaties, set high-peak runoff preservation standards, and train mountain research teams to deploy thermal ice blankets.",
    vignetteTitle: "The Cryosphere Glaciologist: Deploying Glacier Thermal Barrier Blankets",
    vignetteScenario: "Drafting an alpine ice sheet conservation treaty on August 5, a high-altitude glaciologist trains mountain research teams across 15 nations. Their treaty deploys thermal barrier blankets over 30 melting glaciers, protecting freshwater headwaters for downstream regions.",
    birthArchetypeContent: "Glacial sheet thermal blanket deployment and high-peak runoff preservation define August 5 under Arcana 5. You train mountain research teams to shield melting ice caps.",
    highFrequencyExpression: "In master educational alignment, your work centers on alpine cryosphere glaciology, high-peak runoff charters, glacier thermal barrier deployment, and mountain water policy leadership.",
    shadowChallenges: "Authoritarian zoning rules in mountain villages, clashing with local mountaineering guides, or delaying conservation permits out of bureaucratic rigidity.",
    vocationAndFinance: "Directs mountain freshwater preservation as a cryosphere glaciology chair, high-peak runoff policy author, and glaciology foundation head. Wealth builds through environmental consulting retainers.",
    reflectionQuestions: [
      "Am I testing glacial preservation protocols alongside local mountain farming communities?",
      "How can I streamline high-altitude watershed protection standards for international mountain reserves?",
      "What alpine water conservation charter am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 5?",
        answer: "August 5 is Leo (Fire sign), giving solar warmth, executive confidence, and teaching authority to The Hierophant's mission."
      },
      {
        question: "How does August 5 differ from July 5?",
        answer: "July 5 carries Cancer mangrove estuary restoration charters, while August 5 carries Leo alpine cryosphere glaciology charters and high-peak runoff preservation standards."
      },
      {
        question: "What is the financial engine for August 5?",
        answer: "Publishing alpine watershed conservation standards and auditing mountain freshwater compliance for international water funds."
      },
      {
        question: "Which Arcana complements August 5?",
        answer: "Arcana 19 (The Sun) amplifies August 5's global environmental visibility and mountain policy impact."
      }
    ],
    imageBrief: "Inspiring illustration of a glaciologist teaching young researchers on a sunlit snow-capped mountain peak overlooking a turquoise glacial lake, color palette of glacier blue, snow white, and solar gold."
  },
  6: {
    snippetAnswer: "An August 6 birthday embodies agrarian trade co-operatives under Arcana 6 (The Lovers). You organize Piedmont organic golden saffron stigma cropping, dry wild thyme blossoms, and execute fair-trade spice agreements.",
    vignetteTitle: "The Saffron Stigma Merchant: Structuring Piedmont Spice Trade Charters",
    vignetteScenario: "Unifying 50 organic saffron and thyme farming families on August 6, a spice trade director creates a direct export charter. Their alliance secures purchase contracts for hand-harvested crocus stigma threads with luxury European culinary buyers.",
    birthArchetypeContent: "Piedmont golden saffron stigma cropping and wild thyme flower spice trade consortiums define August 6 under Arcana 6. You unite regional spice orchardists into equitable trade grower alliances, securing fair distribution for dried crocus blossom threads.",
    highFrequencyExpression: "In gourmet spice logistics, you command saffron stigma pricing, crocus harvest coordination, thyme drying protocols, and direct culinary contracts.",
    shadowChallenges: "Over-analyzing profit distribution formulas among farming families, fearing loss of personal farm control, or bowing to predatory wholesale prices.",
    vocationAndFinance: "Generates high trade equity as a saffron harvest director, crocus trade partner, gourmet spice strategist, and agrarian negotiator. Returns grow through harvest revenue splits.",
    reflectionQuestions: [
      "Am I structuring saffron spice trade alliances on clear mutual values or quick price compromises?",
      "How can I preserve farm family income while upholding organic saffron soil charters?",
      "What organic spice trade agreement am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 6?",
        answer: "August 6 is Leo (Fire sign), bringing solar warmth, charisma, and executive presence to Arcana 6's partnership design."
      },
      {
        question: "How does August 6 differ from July 6?",
        answer: "July 6 carries Cancer Mediterranean caper trade co-ops, while August 6 carries Leo Piedmont organic golden saffron cropping and wild thyme spice grower alliances."
      },
      {
        question: "What is the financial key for August 6?",
        answer: "Structuring high-value organic golden saffron grower alliances and direct culinary export charters."
      },
      {
        question: "Which Arcana complements August 6?",
        answer: "Arcana 4 (The Emperor) provides structural governance to anchor Arcana 6's agricultural deals."
      }
    ],
    imageBrief: "Modern graphic depicting a spice trade director holding golden saffron threads surrounded by farm families on a sunlit hillside holding baskets of purple crocus flowers, color palette of saffron gold, crocus violet, and sun amber."
  },
  7: {
    snippetAnswer: "August 7 drives aerial transit innovation under Arcana 7 (The Chariot). You direct archipelago long-range electric cargo drone flight operations, manage electric rotorcraft logistics, and route medical payloads to island communities.",
    vignetteTitle: "The Island Cargo Drone Pilot: Routing Electric Rotorcraft Payload Corridors",
    vignetteScenario: "Directing a fleet of 50 long-range electric cargo drones on August 7, an aviation logistics director coordinates medical payload deliveries across an archipelago of 30 remote islands with zero carbon emissions.",
    birthArchetypeContent: "Archipelago long-range electric cargo drone flight operations and electric rotorcraft logistics mark August 7 under Arcana 7. You master autonomous flight technology, routing zero-emission cargo drones across island flight corridors to deliver critical medical supplies.",
    highFrequencyExpression: "In aerial drone transit, your work commands electric rotorcraft navigation, autonomous flight path programming, island payload delivery, and zero-emission flight safety.",
    shadowChallenges: "Irritation over civil aviation flight delays, pushing drone rotor battery limits during gusty ocean gales, or communicating abruptly with ground handlers.",
    vocationAndFinance: "Leads aerial tech ventures as an autonomous cargo drone commander, electric flight director, island air freight CEO, and drone fleet founder. Wealth grows through government medical transit contracts.",
    reflectionQuestions: [
      "Am I balancing high-speed cargo drone innovation with strict aviation weather safety compliance?",
      "How can I inspire my flight operations team during complex multi-island cargo missions?",
      "What zero-emission aerial freight milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 7?",
        answer: "August 7 is Leo (Fire sign), giving solar confidence, executive presence, and aerial flight navigation agility to Arcana 7."
      },
      {
        question: "How does August 7 differ from July 7?",
        answer: "July 7 carries Cancer electric cargo sailboat shipping, while August 7 carries Leo archipelago long-range electric cargo drone flight operations and rotorcraft logistics."
      },
      {
        question: "What is the technical edge of August 7?",
        answer: "Commanding long-range electric cargo drones that transport medical payloads across island archipelagos with zero carbon emissions."
      },
      {
        question: "Which Arcana complements August 7?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's flight operations."
      }
    ],
    imageBrief: "Dynamic aviation graphic of a sleek white double-wing electric cargo drone flying over turquoise island waters under a bright sun, color palette of ocean turquoise, sky blue, and solar gold."
  },
  8: {
    snippetAnswer: "August 8 operates with judicial legal power under Arcana 8 (Justice). You litigate Sub-Saharan savanna elephant migration corridor injunctions, enforce anti-poaching law, and defend wildlife boundary lines.",
    vignetteTitle: "The Elephant Corridor Attorney: Litigating Anti-Poaching Sanctuary Boundaries",
    vignetteScenario: "Presenting satellite habitat tracking evidence on August 8, an environmental attorney secures a binding legal injunction halting commercial mining across a 100,000-acre African elephant migration corridor.",
    birthArchetypeContent: "Sub-Saharan savanna elephant wildlife corridor sanctuary litigation and anti-poaching legal injunctions characterize August 8 under Arcana 8. You leverage satellite habitat mapping and international conservation law to enforce strict sanctuary boundaries around endangered fauna.",
    highFrequencyExpression: "In environmental litigation, you spearhead elephant corridor injunctions, anti-poaching treaty enforcement, wildlife boundary litigation, and habitat protection court victories.",
    shadowChallenges: "Cold legalistic detachment toward tribal land users, rigid adherence to litigation strategy despite changing field conditions, or burnout from courtroom battles.",
    vocationAndFinance: "Commands high legal retainers as a savanna wildlife attorney, international anti-poaching litigator, habitat court arbitrator, and legal policy director. Income builds through environmental retainers.",
    reflectionQuestions: [
      "Am I enforcing wildlife sanctuary bans with diplomatic fairness for local pastoral communities?",
      "Where in my environmental legal work can I establish greater habitat monitoring transparency?",
      "What wildlife migration corridor standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 8?",
        answer: "August 8 is Leo (Fire sign), bringing solar courage, executive authority, and legal agility to Arcana 8's regulatory precision."
      },
      {
        question: "How does August 8 differ from July 8?",
        answer: "July 8 carries Cancer coral reef sanctuary injunctions, while August 8 carries Leo Sub-Saharan savanna elephant migration corridor sanctuary litigation and anti-poaching law."
      },
      {
        question: "What is the financial rule for August 8?",
        answer: "Maintain absolute regulatory compliance and fair international conservation law standards in all environmental investments."
      },
      {
        question: "Which Arcana complements August 8?",
        answer: "Arcana 11 (Strength) provides stamina to support August 8's international wildlife litigation cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a sunlit savanna wildlife corridor with lions walking peacefully below, color palette of savanna gold, emerald green, and deep amber."
  },
  9: {
    snippetAnswer: "Entering the world on August 9 connects your inner compass to Arcana 9 (The Hermit). You curate deep subterranean salt mine rock core repositories, catalog continental drill cylinders, and index halite vault geology.",
    vignetteTitle: "The Halite Core Curator: Archiving Continental Geological Drill Cylinders",
    vignetteScenario: "Working inside a subterranean salt mine rock core vault on August 9, a geologist catalogs 500 million-year-old rock cylinders drilled from deep continental plates. Their halite chamber repository preserves Earth's mineral history for global geological research.",
    birthArchetypeContent: "Deep subterranean salt mine rock core repository curation and continental rock cylinder cataloging define August 9 under Arcana 9. You thrive in quiet halite crystal vaults 2,000 feet underground, indexing ancient rock cylinder samples to reconstruct prehistoric planetary cycles.",
    highFrequencyExpression: "In quiet geological research, your work highlights halite vault rock cylinder archiving, continental core cataloging, deep subterranean mineral indexing, and publishing geological science.",
    shadowChallenges: "Reclusive tendencies inside subterranean salt vaults, refusing to share drill sample findings with external research teams, or acting dismissively toward public advocates.",
    vocationAndFinance: "Flourishes in geological research as a halite vault curator, rock core archivist, deep-earth mineral cataloger, and stratigraphy scholar. Revenue grows through survey contracts and research grants.",
    reflectionQuestions: [
      "Am I balancing my solitary subterranean vault research with open scientific collaboration?",
      "How can I apply ancient geological core discoveries to understand modern earth climate shifts?",
      "What deep subterranean earth secret am I ready to archive today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 9?",
        answer: "August 9 is Leo (Fire sign), blending solar executive presence with The Hermit's contemplative research focus."
      },
      {
        question: "How does August 9 differ from July 9?",
        answer: "July 9 carries Cancer hydrothermal vent extremophile enzyme analysis, while August 9 carries Leo deep subterranean salt mine rock core repository curation and halite vault geology."
      },
      {
        question: "Why does August 9 require quiet subterranean vault focus?",
        answer: "Solitude in salt mine vaults allows August 9 to index delicate ancient rock cores without atmospheric moisture contamination."
      },
      {
        question: "Which Arcana complements August 9?",
        answer: "Arcana 3 (The Empress) offers natural fertile growth to support August 9's geological research discoveries."
      }
    ],
    imageBrief: "Mystical portrait of a geologist holding a glowing ancient rock core sample inside a massive subterranean salt mine vault lined with crystal salt walls, color palette of salt crystal white, deep earth charcoal, and gold."
  },
  10: {
    snippetAnswer: "August 10 vibrates with ocean wave kinetic energy under Arcana 10 (Wheel of Fortune). You position point-absorber wave energy converters, tuning hydraulic rams to power coastal regions.",
    vignetteTitle: "The Ocean Wave Hydrodynamics Lead: Tuning Hydraulic Ram Swell Converters",
    vignetteScenario: "Deploying a 100MW offshore wave farm on August 10, a marine hydrodynamics lead anchors 30 floating surge converters in ocean swell corridors, generating clean power for 40,000 homes.",
    birthArchetypeContent: "Floating wave surge buoy converters and hydraulic ram tuning characterize August 10 under Arcana 10. You capture ocean swell kinetics to deliver clean electricity to coastal communities.",
    highFrequencyExpression: "In active wave engineering, you master point-absorber buoy design, ocean surge hydraulic ram mechanics, coastal swell array tuning, and kinetic wave grid expansion.",
    shadowChallenges: "Rushing subsea buoy anchoring deployments without fatigue testing, ignoring wave swell vibration wear, or over-working dive crews during installation.",
    vocationAndFinance: "Commands deep technical expertise as a wave energy park lead, point-absorber buoy developer, surge converter designer, and marine hydrodynamics chair. Income builds through utility power contracts.",
    reflectionQuestions: [
      "Am I maintaining rigorous offshore installation safety during extreme ocean wave swell deployments?",
      "How can I optimize point-absorber buoy hydrodynamics to maximize kinetic wave power capture?",
      "What ocean wave energy project am I ready to lead today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 10?",
        answer: "August 10 is Leo (Fire sign), giving solar executive warmth and engineering drive to Arcana 10's cycle timing."
      },
      {
        question: "How does August 10 differ from July 10?",
        answer: "July 10 carries Cancer subsea ocean stream turbine hydrodynamics, while August 10 carries Leo offshore ocean wave surge point-absorber buoy converter hydrodynamics."
      },
      {
        question: "What is the technical secret of August 10?",
        answer: "Engineering point-absorber buoys that capture ocean wave kinetics for 24/7 clean coastal power generation."
      },
      {
        question: "Which Arcana complements August 10?",
        answer: "Arcana 21 (The World) expands August 10's wave energy projects onto a global international scale."
      }
    ],
    imageBrief: "Regal symbolist graphic of a golden celestial wheel turning over a glowing floating ocean wave buoy array bobbing in blue ocean swells, color palette of ocean turquoise, electric surge cyan, and gold."
  },
  11: {
    snippetAnswer: "Arriving on World Elephant Day eve (August 11), your path aligns with Arcana 11 (Strength). You direct Serengeti African elephant corridor anti-poaching patrols across savanna tracks.",
    vignetteTitle: "The Serengeti Elephant Captain: Managing Grassland Ranger Outposts",
    vignetteScenario: "Leading a wildlife conservation trust on August 11, an African elephant biologist deploys satellite collar tracking across 300,000 acres of Serengeti savanna corridor. Their ranger network halts illegal ivory poaching while securing migration passage for 500 wild elephants.",
    birthArchetypeContent: "Serengeti elephant migration corridor protection and ranger post coordination define August 11 under Arcana 11. You navigate open grassland trails, using calm physical stamina to protect wild herds.",
    highFrequencyExpression: "In wildlife protection, your strength shines through elephant herd tracking, savanna ranger post management, ivory poaching interception, and grounded somatic wilderness leadership.",
    shadowChallenges: "Physical exhaustion from long savanna foot patrols, explosive anger toward armed poachers, or ignoring physical recovery needs.",
    vocationAndFinance: "Directs wildlife conservation trusts as an elephant migration biologist, savanna corridor captain, anti-poaching ranger chief, and fauna trust executive. Funding comes from global conservation grants.",
    reflectionQuestions: [
      "How can I maintain my physical stamina during grueling savanna anti-poaching patrols?",
      "Am I applying quiet somatic composure rather than force when working with savanna pastoral communities?",
      "What African elephant reserve milestone am I called to achieve today?"
    ],
    faqItems: [
      {
        question: "Is August 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, granting extraordinary spiritual intuition, physical stamina, and quiet somatic mastery over savanna wildlife."
      },
      {
        question: "What zodiac sign is August 11?",
        answer: "August 11 is Leo (Fire sign), adding solar courage, executive authority, and savanna connection to Arcana 11's intense strength."
      },
      {
        question: "How does August 11 differ from July 11?",
        answer: "July 11 carries Cancer Amazonian jaguar flooded forest defense, while August 11 carries Leo Serengeti African elephant savanna corridor defense."
      },
      {
        question: "What is the health key for August 11?",
        answer: "Regular physical grounding practices and systematic hydration recovery between open savanna field patrols."
      }
    ],
    imageBrief: "Inspiring illustration of a calm wildlife biologist standing on a sunlit African savanna beside a magnificent bull elephant under a golden sun halo, color palette of savanna gold, elephant grey, and sky blue."
  },
  12: {
    snippetAnswer: "World Elephant Day (August 12) vibrates under Arcana 12 (The Hanged Man). You convert industrial manufacturing effluent into organic liquid fertilizer via membrane refining.",
    vignetteTitle: "The Liquid Upcycling Lead: Reclaiming Nitrogen Bio-Fertilizer From Factory Effluent",
    vignetteScenario: "Installing a bio-membrane refinery on World Elephant Day (August 12), a chemical engineer reclaims 1,000 tons of nitrogen bio-fertilizer from industrial factory streams.",
    birthArchetypeContent: "Industrial factory stream bio-filtration and nitrogen liquid reclamation mark August 12 under Arcana 12. You convert hazardous plant effluent into agricultural bio-fertilizer.",
    highFrequencyExpression: "In inverted industrial chemistry, you excel at factory effluent bio-membrane filtration, nitrogen bio-fertilizer extraction, liquid waste upcycling, and clean filtrate production.",
    shadowChallenges: "Lingering in analytical lab testing without scaling plant production, feeling overwhelmed by industrial chemical permits, or ignoring commercial return metrics.",
    vocationAndFinance: "Pioneers circular industrial chemistry as an effluent membrane refiner, nitrogen recovery director, waste upcycling engineer, and clean-tech CEO. Wealth expands through refining patents.",
    reflectionQuestions: [
      "What industrial waste stream requires me to flip my design perspective completely?",
      "Am I balancing my non-profit environmental water work with personal financial growth?",
      "What nutrient recovery technology am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What makes August 12 special on World Elephant Day?",
        answer: "August 12 combines Arcana 12's inverted vision with World Elephant Day, establishing a frequency for industrial factory effluent upcycling and clean watershed protection."
      },
      {
        question: "What zodiac sign is August 12?",
        answer: "August 12 is Leo (Fire sign), giving solar warmth, executive confidence, and design agility to The Hanged Man's perspective shifts."
      },
      {
        question: "What is the core lesson for August 12?",
        answer: "Learning that upcycling factory effluent turns hazardous liquid waste into valuable bio-fertilizer filtrate."
      },
      {
        question: "Which Arcana complements August 12?",
        answer: "Arcana 4 (The Emperor) provides structural backing to execute August 12's refining operations."
      }
    ],
    imageBrief: "Mystical modern artwork of dark industrial effluent passing through a glowing gold membrane that isolates bright green liquid bio-nutrients, color palette of industrial slate, glowing emerald, and solar gold."
  },
  13: {
    snippetAnswer: "August 13 vibrates with rebirth power under Arcana 13 (Transformation). You specialize in volcanic ash lava field bio-char soil reclamation, restoring basalt topsoil, and establishing carbon-sequestering fruit tree agroforests.",
    vignetteTitle: "The Basalt Ash Agro-Ecologist: Reclaiming Lava Fields into Fruit Agroforests",
    vignetteScenario: "Reclaiming a 10,000-acre volcanic ash wasteland on August 13, an agro-ecologist integrates basalt soil bio-char enrichments and deep-root fruit orchards. Their restoration revives infertile lava terrain into a thriving carbon-sequestering agroforest.",
    birthArchetypeContent: "Volcanic ash lava field bio-char soil reclamation and fruit tree agroforestry carbon sinks embody August 13 under Arcana 13. You do not fear barren lava ash terrain; you lead radical ecological transformations of volcanic ash into fertile fruit orchards.",
    highFrequencyExpression: "In ecological renewal, your practice commands lava ash bio-char enrichment, basalt topsoil restoration, fruit tree agroforest design, and carbon sink land rebirth.",
    shadowChallenges: "Frustration with slow soil bio-char enrichment timelines, risking premature fruit tree planting before soil stabilization, or dwelling on historical volcanic damage.",
    vocationAndFinance: "Leads land restoration ventures as a volcanic ash bio-char lead, basalt soil ecologist, agroforest project director, and land trust executive. Income builds through carbon credit contracts.",
    reflectionQuestions: [
      "What degraded land system am I called to transform into a fertile agroforest?",
      "How can I apply bio-char technology to accelerate soil carbon sequestration?",
      "Where in my career is a radical land rebirth waiting to happen?"
    ],
    faqItems: [
      {
        question: "Is August 13 an unlucky birthday in Destiny Matrix?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing soil rebirth, lava field bio-char reclamation, and high-impact renewal."
      },
      {
        question: "What zodiac sign is August 13?",
        answer: "August 13 is Leo (Fire sign), bringing solar warmth, executive confidence, and resilience to Arcana 13's transformative power."
      },
      {
        question: "What is the financial engine for August 13?",
        answer: "Executing lava field bio-char soil reclamation and carbon credit contracts for international agricultural funds."
      },
      {
        question: "Which Arcana complements August 13?",
        answer: "Arcana 19 (The Sun) brings radiant sunlight and public acclaim to illuminate August 13's agroforestry achievements."
      }
    ],
    imageBrief: "Striking artwork of black volcanic ash terrain transforming into a lush glowing green orchard with golden fruit under a brilliant midsummer sun, color palette of volcanic black, orchard green, and solar gold."
  },
  14: {
    snippetAnswer: "World Lizard Day (August 14) balances dryland hydrology under Arcana 14 (Temperance). You erect solar dew collection arrays, producing fresh water for desert reserves.",
    vignetteTitle: "The Oasis Dew Collector: Deploying Solar Atmospheric Moisture Generators",
    vignetteScenario: "Setting up solar dew collectors in a desert oasis on World Lizard Day (August 14), a dryland hydrologist gathers 20,000 liters of pure drinking water from air vapor.",
    birthArchetypeContent: "Solar desert humidity traps and oasis water harvesting define August 14 under Arcana 14. You capture atmospheric vapor along arid valleys to supply fresh drinking water during dry seasons.",
    highFrequencyExpression: "In ecological moderation, your leadership highlights atmospheric moisture condenser tuning, dryland dew collector management, oasis well balance, and arid wildlife hydrology.",
    shadowChallenges: "Indecision over water allocation quotas during droughts, over-analyzing atmospheric condenser placement, or avoiding trade negotiations with desert nomadic tribes.",
    vocationAndFinance: "Pioneers dryland water solutions as a desert oasis hydrologist, solar humidity trap designer, and oasis watershed director. Income expands through hydro-engineering retainers.",
    reflectionQuestions: [
      "Am I balancing desert wildlife water needs with surrounding community livestock?",
      "Where in my desert hydrology work can I apply innovative atmospheric water harvesting technology?",
      "What desert watershed framework requires rebalancing today?"
    ],
    faqItems: [
      {
        question: "What makes August 14 special on World Lizard Day?",
        answer: "August 14 combines Arcana 14's balanced synthesis with World Lizard Day, establishing a frequency for desert oasis atmospheric moisture condensers and dryland wildlife water balance."
      },
      {
        question: "What zodiac sign is August 14?",
        answer: "August 14 is Leo (Fire sign), giving solar confidence, executive warmth, and diplomatic agility to Arcana 14's balance."
      },
      {
        question: "What is the financial secret of August 14?",
        answer: "Designing balanced atmospheric moisture condenser systems that supply pristine water to desert wildlife reserves and eco-lodges."
      },
      {
        question: "Which Arcana complements August 14?",
        answer: "Arcana 8 (Justice) provides legal backing to enforce August 14's water allocation standards."
      }
    ],
    imageBrief: "Harmonious artwork of a hydrologist inspecting golden atmospheric water generator panels in a sunlit desert oasis surrounded by palms, color palette of desert gold, oasis turquoise, and solar amber."
  },
  15: {
    snippetAnswer: "August 15 commands legal authority under Arcana 15 (The Devil). You wield courtroom leverage against illegal timber syndicates, exposing fraudulent satellite timber certificates and securing Amazonian hardwood clearing bans.",
    vignetteTitle: "The Hardwood Clearing Litigator: Exposing Fraudulent Timber Certificates",
    vignetteScenario: "Exposing fraudulent satellite timber certificates in international court on August 15, a forestry environmental attorney defeats an illegal logging syndicate. Their trial victory secures a 20-year legal ban on commercial hardwood clearing across 200,000 acres of tropical rainforest.",
    birthArchetypeContent: "Amazonian hardwood logging fraud litigation and illegal timber certificate bans define August 15 under Arcana 15. You use court injunctions to protect tropical rainforest acres.",
    highFrequencyExpression: "In forestry legal advocacy, you command timber fraud trial strategy, illegal logging cross-examination, satellite certificate auditing, and rainforest clearing injunctions.",
    shadowChallenges: "Relentless hostility during court cross-examinations, sensationalist legal media campaigns, or neglecting personal wellbeing during trial marathons.",
    vocationAndFinance: "Flourishes in legal litigation as a timber fraud prosecutor, international forestry litigator, satellite certificate auditor, and rainforest defense counsel. Earnings expand through legal retainers.",
    reflectionQuestions: [
      "Am I using my legal leverage to expose illegal timber clearing or to gain trial authority?",
      "What illegal timber license or environmental vulnerability am I called to challenge today?",
      "How can I bring complete legal transparency to tropical rainforest protection treaties?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 15?",
        answer: "August 15 is Leo (Fire sign), infusing Arcana 15's legal power with solar confidence, courage, and courtroom agility."
      },
      {
        question: "How does August 15 differ from July 15?",
        answer: "July 15 carries Cancer deep-sea mining ban litigation, while August 15 carries Leo Amazonian illegal logging satellite timber certificate fraud litigation."
      },
      {
        question: "What is the financial engine for August 15?",
        answer: "Auditing high-value international forestry timber certificates and litigating rainforest protection treaties."
      },
      {
        question: "Which Arcana complements August 15?",
        answer: "Arcana 14 (Temperance) provides calming balance to prevent legal litigation over-reach."
      }
    ],
    imageBrief: "Dramatic artwork showing a figure holding a golden gavel that halts a massive timber bulldozer on a tropical rainforest edge, color palette of jungle green, solar gold, and mahogany brown."
  },
  16: {
    snippetAnswer: "August 16 awakens structural safety under Arcana 16 (The Tower). You specialize in urban skyscraper tectonic fault stress testing, installing tuned mass dampers, and retrofitting seismic steel cross-braces.",
    vignetteTitle: "The Structural Seismic Auditor: Retrofitting Urban Skyscraper Shear-Walls",
    vignetteScenario: "Inspecting a 60-story high-rise tower located along a major tectonic fault on August 16, a structural engineer detects internal shear wall stress. Ordering emergency tuned mass damper installation and seismic steel retrofitting, they prevent catastrophic seismic collapse.",
    birthArchetypeContent: "Urban skyscraper tectonic fault shear-wall stress testing and seismic steel bracing define August 16 under Arcana 16. You detect hidden structural engineering fractures, mandating tuned mass dampers and steel retrofitting to secure urban high-rise towers against earthquakes.",
    highFrequencyExpression: "In skyscraper safety engineering, your work highlights tuned mass damper installation, tectonic shear-wall testing, seismic steel retrofitting, and high-rise structural compliance.",
    shadowChallenges: "Excessive harshness during safety compliance reviews, creating panic among building occupants during routine tests, or halting construction unnecessarily.",
    vocationAndFinance: "Directs civil safety firms as a tuned mass damper engineer, seismic high-rise auditor, structural retrofitting lead, and building hazard consultant. Income grows through safety certifications.",
    reflectionQuestions: [
      "What hidden structural flaw am I ready to identify and fix in my engineering work or life?",
      "How can I deliver structural safety audits with clear, solution-oriented communication?",
      "What indestructible safety foundation am I establishing for urban high-rise civil buildings?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 16?",
        answer: "August 16 is Leo (Fire sign), bringing solar warmth, executive courage, and technical focus to The Tower's awakening."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is revealing hidden structural flaws to build indestructible safety."
      },
      {
        question: "Which careers suit August 16 best?",
        answer: "Tuned mass damper engineering, seismic high-rise auditing, urban tower retrofitting, and earthquake hazard prevention."
      },
      {
        question: "How can August 16 navigate sudden change?",
        answer: "Focus on core structural engineering principles and rebuild systematically from rock-solid seismic foundations."
      }
    ],
    imageBrief: "Striking architectural illustration of a towering modern skyscraper reinforced with golden internal steel cross-beams gleaming during a seismic test, color palette of steel silver, electric gold, and navy blue."
  },
  17: {
    snippetAnswer: "August 17 channels visionary starlight under Arcana 17 (The Star). You excel in stratospheric high-altitude solar balloon research, measuring ozone layer gas telemetry, and advancing upper atmospheric climate science.",
    vignetteTitle: "The Upper Atmosphere Meteorologist: Telemetering Stratospheric Solar Balloons",
    vignetteScenario: "Launching a high-altitude solar balloon into the stratosphere at 100,000 feet on August 17, an atmospheric scientist collects real-time ozone layer gas and solar radiation telemetry. Their sensor model refines planetary climate change predictions across 40 meteorological institutions.",
    birthArchetypeContent: "Stratospheric high-altitude solar balloon ozone layer climate sensing and flight telemetry embody August 17 under Arcana 17. You deploy stratospheric solar balloons into upper atmospheric gas layers, collecting climate data that illuminates global environmental solutions.",
    highFrequencyExpression: "In upper atmospheric science, your vision guides stratospheric solar balloon deployment, ozone gas telemetry modeling, upper atmosphere radiation sensing, and climate science publishing.",
    shadowChallenges: "Losing connection with daily practical lab tasks while pursuing theoretical atmospheric concepts, or feeling frustrated during poor launch weather.",
    vocationAndFinance: "Inspires globally as a stratospheric balloon scientist, solar balloon engineer, upper atmosphere meteorologist, and scientific author. Prosperity expands through international climate research grants.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to execute my ambitious stratospheric climate research vision?",
      "How can I use atmospheric sensor discoveries to illuminate planetary climate solutions?",
      "What stratospheric climate milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 17?",
        answer: "August 17 is Leo (Fire sign), bringing solar warmth, executive confidence, and technological agility to Arcana 17's celestial vision."
      },
      {
        question: "How does August 17 differ from July 17?",
        answer: "July 17 carries Cancer optical telescope mirror alignment, while August 17 carries Leo stratospheric high-altitude solar balloon ozone layer climate sensing."
      },
      {
        question: "What is the financial engine for August 17?",
        answer: "Designing stratospheric sensor balloons and directing atmospheric climate research funded by global meteorological foundations."
      },
      {
        question: "Which Arcana complements August 17?",
        answer: "Arcana 21 (The World) expands August 17's climate research onto a global international stage."
      }
    ],
    imageBrief: "Breathtaking artwork of a large golden atmospheric research balloon rising into the deep blue stratosphere above the curved Earth background, color palette of cosmic blue, starlight silver, and solar gold."
  },
  18: {
    snippetAnswer: "August 18 explores nocturnal reef biology under Arcana 18 (The Moon). You map lunar coral spawning synchrony using low-light underwater optical sensors to track larvae settlement.",
    vignetteTitle: "The Reef Spawning Bio-Optics Lead: Mapping Coral Larvae Drift Patterns",
    vignetteScenario: "Deploying low-light underwater camera arrays on a full moon August 18 night, a marine biologist records a mass coral spawning event across a 30-mile barrier reef. Their bio-optical model tracks coral larvae drift settlement sites with 95% accuracy.",
    birthArchetypeContent: "Lunar coral spawning synchrony and low-light underwater optical sensing mark August 18 under Arcana 18. You study dark ocean reef spawns during full moons.",
    highFrequencyExpression: "In marine optics research, your work highlights coral spawning lunar synchrony modeling, low-light underwater camera sensing, coral larvae drift settlement tracking, and bio-optical data publishing.",
    shadowChallenges: "Superstition regarding ocean tide charts, anxiety over night dive safety, or getting lost in speculative marine theories without data.",
    vocationAndFinance: "Excels in marine optics as a coral spawning bio-optics researcher, nocturnal oceanographer, larvae drift analyst, and marine tech director. Earnings build through bio-sensor patents.",
    reflectionQuestions: [
      "Am I trusting my intuitive bio-optical ocean findings alongside digital light sensors?",
      "How can I apply nocturnal coral spawning mapping to protect ocean reef regeneration?",
      "What nocturnal marine light mystery am I ready to illuminate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 18?",
        answer: "August 18 sits in late Leo (Fire sign), blending solar executive warmth with intuitive sub-surface marine vision."
      },
      {
        question: "How does August 18 differ from July 18?",
        answer: "July 18 carries Cancer dinoflagellate night swarm sensing, while August 18 carries Leo nocturnal barrier reef coral spawning lunar synchrony bio-optics."
      },
      {
        question: "What is the technical superpower of August 18?",
        answer: "Mapping nocturnal coral spawning events using sensitive underwater bio-camera arrays."
      },
      {
        question: "Which Arcana complements August 18?",
        answer: "Arcana 19 (The Sun) brings radiant surface light to balance Arcana 18's nocturnal ocean exploration."
      }
    ],
    imageBrief: "Atmospheric symbolist painting of a diver underwater watching glowing pink coral eggs float upward like stars into dark night ocean water under a full moon, color palette of ocean navy, coral pink, and starlight silver."
  },
  19: {
    snippetAnswer: "World Humanitarian Day (August 19) activates Arcana 19 (The Sun). You operate Mojave solar thermal power towers, focusing tracking mirrors to drive electrical turbines.",
    vignetteTitle: "The Mojave Heliostat Director: Supplying Solar Steam Power",
    vignetteScenario: "Launching a 300MW solar thermal power station on World Humanitarian Day (August 19), a clean energy CEO aligns 15,000 tracking mirror heliostats in a Mojave desert basin.",
    birthArchetypeContent: "Desert solar thermal steam plants and heliostat array positioning define August 19 under Arcana 19. You convert intense midsummer sun into thermal turbine electricity.",
    highFrequencyExpression: "In utility clean power, you lead Mojave solar steam engineering, heliostat mirror grid management, thermal steam turbine operation, and regional utility power dispatch.",
    shadowChallenges: "Overbearing central spotlight control over utility projects, ignoring heat exhaustion risks among plant technicians, or masking operational errors behind corporate press releases.",
    vocationAndFinance: "Spearheads clean utility power as a Mojave solar thermal CEO, heliostat grid director, and clean energy executive. Income expands through multi-state power contracts.",
    reflectionQuestions: [
      "Am I sharing my executive warmth to empower my solar power engineering team equally?",
      "How can I pace my intense midsummer energy drive to maintain long-term physical stamina?",
      "What utility solar thermal power project am I ready to launch today?"
    ],
    faqItems: [
      {
        question: "What makes August 19 special on World Humanitarian Day?",
        answer: "August 19 combines Arcana 19's radiant solar authority with World Humanitarian Day, establishing a calling for Mojave desert utility heliostat solar thermal steam power plants."
      },
      {
        question: "What zodiac sign is August 19?",
        answer: "August 19 sits near the height of Leo solar fire, representing peak midsummer light power."
      },
      {
        question: "What is the financial engine for August 19?",
        answer: "Commissioning utility-scale solar thermal steam power plants that supply electricity to major municipal populations."
      },
      {
        question: "Which Arcana complements August 19?",
        answer: "Arcana 21 (The World) expands August 19's solar enterprise onto a global international stage."
      }
    ],
    imageBrief: "Radiant tarot-style artwork of a triumphant executive standing atop a sunlit solar tower overlooking a vast grid of glowing heliostat mirrors in a desert under a blazing golden sun, color palette of sun gold, desert sand, and cobalt blue."
  },
  20: {
    snippetAnswer: "August 20 awakens spatial calling under Arcana 20 (Judgement). You analyze near-Earth metallic asteroid gamma-ray spectrometry probe data, launching automated space missions to extract platinum-group metals.",
    vignetteTitle: "The Orbital Asteroid Spectrometrist: Mining Platinum Space Metals",
    vignetteScenario: "Analyzing gamma-ray spectrometer data from an autonomous space probe on August 20, an astrophysicist identifies a 500-meter near-Earth asteroid rich in platinum-group metals. Their mineral assay initiates an automated space resource harvesting mission.",
    birthArchetypeContent: "Near-Earth metallic asteroid gamma-ray spectrometry probe missions and space platinum metal assaying define August 20 under Arcana 20. You analyze remote space probe spectral data to locate metallic asteroids, launching automated mining missions to secure rare metals for clean technology.",
    highFrequencyExpression: "In orbital space exploration, your practice centers on near-Earth asteroid gamma-ray spectrometry, space platinum assaying, automated mining probe telemetry, and space mineral discovery.",
    shadowChallenges: "Dwelling on past failed probe launches, harboring resentment toward rival space agencies, or hesitating during trajectory maneuvers.",
    vocationAndFinance: "Serves humanity as a near-Earth asteroid spectrometry lead, space resource director, aerospace astrophysicist, and space mining trustee. Wealth builds through space mineral contracts.",
    reflectionQuestions: [
      "What space resource extraction technology am I called to build for future space missions?",
      "Am I listening to my quiet inner awakening or staying trapped in past mission failures?",
      "What asteroid spectrometry standard am I ready to establish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 20?",
        answer: "August 20 is Leo (Fire sign), bringing solar warmth, executive confidence, and spatial vision to Arcana 20's awakening."
      },
      {
        question: "How does August 20 differ from July 20?",
        answer: "July 20 carries Cancer lunar regolith oxygen extraction, while August 20 carries Leo near-Earth metallic asteroid gamma-ray spectrometry probe missions."
      },
      {
        question: "Which careers suit August 20 best?",
        answer: "Near-Earth asteroid spectrometry, space resource engineering, aerospace astrophysics, and orbital mining leadership."
      },
      {
        question: "How can August 20 overcome self-judgment?",
        answer: "Focus on active space technology building and view asteroid resource harvesting as a step for human space expansion."
      }
    ],
    imageBrief: "Inspiring symbolist artwork of an astrophysicist inside an orbital space station analyzing a glowing digital holographic model of a metallic asteroid floating in space, color palette of cosmic black, electric cyan, and solar gold."
  },
  21: {
    snippetAnswer: "August 21 manifests borderless power synthesis under Arcana 21 (The World). You broker transcontinental solar-wind grid interconnector treaties connecting 40 nations.",
    vignetteTitle: "The Transcontinental Grid Diplomat: Ratifying Cross-Border Cable Treaties",
    vignetteScenario: "Signing a cross-continental grid treaty on August 21, an international energy diplomat unifies 40 nations to build a 5,000-mile solar-wind interconnector.",
    birthArchetypeContent: "Transcontinental high-voltage power treaties and undersea grid cables embody August 21 under Arcana 21. You unify multi-national clean energy networks across continents.",
    highFrequencyExpression: "In global grid policy, you lead transcontinental power interconnector negotiations, cross-continental energy grid accords, international high-voltage cabling treaties, and global clean power diplomacy.",
    shadowChallenges: "Diplomatic fatigue from continuous international travel, over-complicating grid treaty clauses, or feeling ungrounded away from home.",
    vocationAndFinance: "Operates at the highest level of international policy as a renewable grid treaty negotiator, interconnector envoy, and global clean energy attorney. Wealth grows through policy retainers.",
    reflectionQuestions: [
      "What major international renewable energy grid treaty am I ready to bring to complete ratification?",
      "How can I expand my diplomatic vision to encompass global solar-wind interconnector alliances?",
      "Where in my journey can I celebrate the complete international grid network I have built on August 21?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 21?",
        answer: "August 21 sits on the Leo-Virgo threshold, bringing solar executive presence, global vision, and administrative precision to Arcana 21."
      },
      {
        question: "How does August 21 differ from July 21?",
        answer: "July 21 carries Cancer ocean plastic recovery treaties, while August 21 carries Leo transcontinental high-voltage solar-wind energy grid interconnector treaties."
      },
      {
        question: "What is the financial engine for August 21?",
        answer: "Structuring borderless international solar-wind power grid treaties and global clean energy trusts."
      },
      {
        question: "Which Arcana complements August 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new global energy cycles."
      }
    ],
    imageBrief: "Regal symbolist illustration of a figure standing on a globe connecting golden glowing power grid lines across continents under a brilliant sun, color palette of cosmic blue, solar gold, and electric cyan."
  },
  22: {
    snippetAnswer: "August 22 unlocks Master 22 builder potential on World Plant Milk Day under Arcana 22 (The Fool / 0). You construct organic oat estate autonomous agricultural micro-robot weeding swarms, deploying zero-chemical precision robotics.",
    vignetteTitle: "The Precision Agtech Swarm Founder: Deploying Organic Oat Field Micro-Robots",
    vignetteScenario: "Launching a swarm of 100 autonomous agricultural micro-robots on World Plant Milk Day (August 22), a robotics founder manages a 5,000-acre organic oat estate. Their micro-robot swarm eliminates weeds and monitors soil health with zero chemical pesticides.",
    birthArchetypeContent: "Organic oat estate autonomous agricultural micro-robot weeding swarms and robotic soil scanning define August 22's Master 22 potential under Arcana 22 on the Leo-Virgo cusp. You construct field micro-robot swarms that manage organic crop estates to eliminate synthetic chemicals.",
    highFrequencyExpression: "In agricultural robotics, your mastery shines through micro-robot weeding swarm design, zero-chemical precision farming management, organic oat field automation, and agtech soil scanning.",
    shadowChallenges: "Deploying micro-robot swarms without adequate battery field testing, getting overwhelmed by agtech data logs, or neglecting office financial controls.",
    vocationAndFinance: "Pioneers master agricultural tech as a micro-robot weeding swarm founder, precision farming CEO, planetary agricultural director, and land trustee. Wealth flows through multi-lateral agtech funding.",
    reflectionQuestions: [
      "What bold agricultural bio-robot swarm project am I called to launch for sustainable food systems?",
      "Am I balancing my visionary leaps of faith with solid field engineering and financial ground strategy?",
      "Where in my life am I ready to start completely fresh to serve a planetary food purpose?"
    ],
    faqItems: [
      {
        question: "Why is August 22 a Master Number birthday?",
        answer: "August 22 combines Master Number 22 (Master Builder) with Arcana 22 (The Fool) on the Leo-Virgo cusp, granting capacity for monumental agricultural robotics leaps."
      },
      {
        question: "What zodiac sign is August 22?",
        answer: "August 22 sits on the Leo-Virgo cusp, blending Leo executive solar warmth with Virgo precision and care."
      },
      {
        question: "Which careers suit August 22 best?",
        answer: "Micro-robot weeding swarm leadership, precision farming building, organic oat estate management, and agtech trusteeship."
      },
      {
        question: "How can August 22 avoid burnout?",
        answer: "Ground your monumental agtech robotics vision with trusted field engineers and financial co-trustees."
      }
    ],
    imageBrief: "Breathtaking illustration of a master builder figure inspecting small golden solar agricultural micro-robots weeding a sunlit green oat field, color palette of oat gold, emerald green, and sky blue."
  },
  23: {
    snippetAnswer: "Entering Virgo precision on August 23, August 23 expresses educational authority under Arcana 5 (The Hierophant). You author academic botanical pharmacognosy textbooks, train herbal pharmacology assayers, and publish standardized plant monographs.",
    vignetteTitle: "The Pharmacognosy Scholar: Publishing Plant Monograph Quality Assays",
    vignetteScenario: "Publishing an academic botanical pharmacognosy textbook on August 23, a botanical pharmacist trains research teams across 20 pharmaceutical universities. Their textbook establishes global plant monograph standards for organic plant-based medicines.",
    birthArchetypeContent: "Academic botanical pharmacognosy textbooks and plant monograph purity standardization distinguish August 23 under Arcana 5 in Virgo. You translate botanical medicine chemistry into compulsory academic standards for natural pharmacy programs.",
    highFrequencyExpression: "In botanical pharmacy education, your practice centers on pharmacognosy textbook writing, herbal pharmacology assaying, plant monograph standardization, and natural medicine lecturing.",
    shadowChallenges: "Pedantic obsession over minor assay variations, impatience with student herbalists, or rejecting non-standardized traditional remedies out of hand.",
    vocationAndFinance: "Establishes industry standards as a pharmacognosy author, organic pharmacy director, botanical professor, and medicinal plant consultant. Financial returns build through textbook publishing and advisory retainers.",
    reflectionQuestions: [
      "Am I teaching pharmacognosy from practical laboratory trials and botanical field harvests?",
      "How can I translate complex herbal chemistry into clear standards for future natural pharmacists?",
      "What organic botanical medicine textbook am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 23?",
        answer: "August 23 enters Virgo (Earth sign), infusing The Hierophant's teaching mission with analytical precision, practical methodology, and detail mastery."
      },
      {
        question: "How does August 23 differ from August 5?",
        answer: "August 5 carries Leo alpine cryosphere glaciology charters, while August 23 carries Virgo academic botanical pharmacognosy textbooks."
      },
      {
        question: "What is the financial model for August 23?",
        answer: "Publishing pharmacognosy textbooks and consulting for international natural pharmaceutical corporations."
      },
      {
        question: "Which Arcana complements August 23?",
        answer: "Arcana 3 (The Empress) offers fertile natural growth to support Arcana 5's botanical teaching."
      }
    ],
    imageBrief: "Vibrant artwork of a professor examining digital chemical structures of medicinal herbs inside a sunlit botanical laboratory filled with dried plants and glass beakers, color palette of sage green, golden amber, and clean white."
  },
  24: {
    snippetAnswer: "International Strange Music Day on August 24 inspires gourmet spice trade under Arcana 6 (The Lovers). You structure Malagasy cured vanilla bean alliances and green cardamom pod harvest co-ops.",
    vignetteTitle: "The Malagasy Vanilla Curing Master: Directing Gourmet Spice Co-Operatives",
    vignetteScenario: "Unifying 40 organic vanilla farming families on International Strange Music Day (August 24), a spice trade director organizes a cured pod co-op supplying luxury culinary brands.",
    birthArchetypeContent: "Malagasy cured vanilla bean alliances and green cardamom pod harvest co-ops mark August 24 under Arcana 6. You unite cured pod growers into fair profit-sharing agreements.",
    highFrequencyExpression: "In cured spice trade logistics, you excel at Malagasy vanilla bean curing, green cardamom harvest management, gourmet spice co-op structuring, and cured pod export contracts.",
    shadowChallenges: "Over-complicating profit distribution formulas among vanilla bean curing families, worrying over organic pod inspection delays, or avoiding hard negotiations with global gourmet buyers.",
    vocationAndFinance: "Commands strong equity as a Malagasy cured pod director, vanilla bean curing specialist, cardamom harvest founder, and gourmet spice trade partner. Profit accelerates through export contracts.",
    reflectionQuestions: [
      "Am I building vanilla spice alliances on clear mutual agreements or verbal promises?",
      "How can I combine organic cardamom cultivation structure with genuine grower community trust?",
      "What organic vanilla spice alliance am I ready to formalize on International Strange Music Day?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 24?",
        answer: "August 24 is Virgo (Earth sign), bringing analytical precision, practical care, and detail mastery to Arcana 6's partnership design."
      },
      {
        question: "How does August 24 differ from August 6?",
        answer: "August 6 carries Leo Piedmont organic golden saffron cropping, while August 24 carries Virgo Malagasy organic vanilla bean & green cardamom pod curing co-operatives."
      },
      {
        question: "What is the financial secret of August 24?",
        answer: "Structuring regional organic vanilla bean co-ops that command direct international gourmet export contracts."
      },
      {
        question: "Which Arcana complements August 24?",
        answer: "Arcana 4 (The Emperor) reinforces August 24's demand for administrative structure in alliances."
      }
    ],
    imageBrief: "Warm graphic depicting spice growers harvesting dark vanilla pods and green cardamom pods under a bright late summer sun into woven baskets, color palette of vanilla dark brown, cardamom green, and solar gold."
  },
  25: {
    snippetAnswer: "August 25 propels clean rapid transit under Arcana 7 (The Chariot). You direct intercity magnetic levitation train guidance trials at 300mph along low-carbon tracks.",
    vignetteTitle: "The Levitation Transit Lead: Testing 300mph Maglev Rail Corridors",
    vignetteScenario: "Testing a 300-mile maglev train corridor on August 25, a transit engineer conducts 300mph track guidance speed trials with zero direct carbon emissions.",
    birthArchetypeContent: "Intercity maglev train guidance and 300mph magnetic levitation track trials anchor August 25 under Arcana 7. You lead high-speed passenger rail projects connecting urban centers.",
    highFrequencyExpression: "In maglev rail transit, your leadership commands magnetic levitation track guidance, 300mph passenger train speed trials, intercity rail corridor design, and zero-carbon transit operations.",
    shadowChallenges: "Impatience during municipal transit permits, pushing train speed trials past safety limits, or brusque station team communications.",
    vocationAndFinance: "Drives rapid ground transport innovation as a maglev transit engineer, 300mph track guidance director, and clean rail executive. Revenue flows through public transit contracts.",
    reflectionQuestions: [
      "Am I balancing high-speed maglev rail innovation with strict rail safety compliance?",
      "How can I lead my transit engineering team to excel without creating high-pressure burnout?",
      "What zero-emission high-speed rail milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 25?",
        answer: "August 25 is Virgo (Earth sign), giving analytical precision, methodology, and transit design agility to Arcana 7."
      },
      {
        question: "How does August 25 differ from August 7?",
        answer: "August 7 carries Leo archipelago long-range electric cargo drone flight operations, while August 25 carries Virgo intercity magnetic levitation maglev passenger train speed trial engineering."
      },
      {
        question: "What is the technical edge of August 25?",
        answer: "Designing 300mph magnetic levitation passenger trains that transport 100,000 daily intercity commuters with zero carbon emissions."
      },
      {
        question: "Which Arcana complements August 25?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's rail trial programs."
      }
    ],
    imageBrief: "Dynamic transit graphic of a sleek silver high-speed maglev train gliding along an elevated track against a late summer mountain backdrop, color palette of steel silver, electric blue, and sun gold."
  },
  26: {
    snippetAnswer: "Women's Equality Day (August 26) decrees aquifer fairness under Arcana 8 (Justice). You litigate groundwater pumping limits, safeguarding farm family wells.",
    vignetteTitle: "The Groundwater Rights Arbitrator: Decreeing Agricultural Aquifer Limits",
    vignetteScenario: "Auditing agricultural groundwater pumping on Women's Equality Day (August 26), a water rights lawyer enforces extraction limits across three farm basins.",
    birthArchetypeContent: "Groundwater aquifer pumping limits and small farm well protection define August 26 under Arcana 8. You enforce agricultural water decrees to ensure fair aquifer access.",
    highFrequencyExpression: "In agricultural water law, your authority commands aquifer pumping rights arbitration, groundwater extraction limits, community well legal protection, and irrigation water rights decrees.",
    shadowChallenges: "Hyper-critical legalistic scrutiny during farm audits, rigid adherence to water metering checklists, or suppressing personal empathy.",
    vocationAndFinance: "Upholds environmental law as a water rights arbitrator, aquifer legal advocate, agricultural water commissioner, and groundwater policy director. Earnings build through environmental legal retainers.",
    reflectionQuestions: [
      "Am I applying objective fairness to small family farms as well as large industrial food corporations?",
      "Where in my aquifer water auditing can I establish greater legal transparency?",
      "What agricultural groundwater protection standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What makes August 26 special on Women's Equality Day?",
        answer: "August 26 combines Arcana 8's legal justice with Women's Equality Day, establishing a frequency for groundwater aquifer agricultural pumping rights legal arbitration."
      },
      {
        question: "What zodiac sign is August 26?",
        answer: "August 26 is Virgo (Earth sign), bringing analytical precision, ethical fairness, and detail mastery to Arcana 8's legal governance."
      },
      {
        question: "What is the financial rule for August 26?",
        answer: "Maintain absolute regulatory compliance and fair water law standards in all agricultural investments."
      },
      {
        question: "Which Arcana complements August 26?",
        answer: "Arcana 11 (Strength) provides stamina to support August 26's water arbitration cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a lush green farm field with a clear stream flowing through it, color palette of emerald green, water blue, and gold."
  },
  27: {
    snippetAnswer: "August 27 conducts deep Arctic permafrost research under Arcana 9 (The Hermit) in Virgo. You specialize in permafrost seed vault sub-zero repository curation, cataloging ancient crop germplasm cylinders, and arctic genetic archiving.",
    vignetteTitle: "The Polar Germplasm Curator: Archiving Frozen Crop Seeds",
    vignetteScenario: "Sampling a subterranean ice vault 300 feet inside Arctic permafrost on August 27, a bio-archivist preserves 10,000 ancient crop seed varieties isolated in sub-zero germplasm cylinders for 50,000 years. Their vault safeguards Earth's crop genetic diversity against future climate shifts.",
    birthArchetypeContent: "Arctic permafrost ancient seed bank sub-zero repository curation and crop germplasm cylinder cataloging define August 27 under Arcana 9 in Virgo. You work in quiet scientific focus, indexing plant genetic samples stored inside deep Arctic permafrost vaults.",
    highFrequencyExpression: "In Arctic bio-archiving, your work centers on sub-zero seed cylinder indexing, permafrost vault curation, and ancient crop genetic preservation.",
    shadowChallenges: "Reclusive tendencies inside polar seed vaults, reluctance to publish genetic sequence data, or excessive skepticism toward new plant breeding techniques.",
    vocationAndFinance: "Advances earth science as a permafrost seed archivist, crop geneticist, bio-repository curator, and Arctic scientist. Revenue grows through agricultural genetic grants and research contracts.",
    reflectionQuestions: [
      "Am I balancing my solitary Arctic seed vault archiving with open scientific collaboration?",
      "How can I apply ancient seed genetic discoveries to improve modern crop resilience?",
      "What Arctic permafrost seed secret am I ready to catalog today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 27?",
        answer: "August 27 is Virgo (Earth sign), blending analytical precision with The Hermit's contemplative research focus."
      },
      {
        question: "How does August 27 differ from August 9?",
        answer: "August 9 carries Leo salt mine rock cylinder archiving, while August 27 carries Virgo Arctic permafrost ancient seed bank sub-zero repository curation."
      },
      {
        question: "Why does August 27 thrive in Arctic seed vaults?",
        answer: "Quiet laboratory focus allows August 27 to index delicate ancient seed genetics without thermal contamination."
      },
      {
        question: "Which Arcana complements August 27?",
        answer: "Arcana 3 (The Empress) provides fertile natural growth backing to support Arcana 9's seed research."
      }
    ],
    imageBrief: "Mystical scientific portrait of a scientist examining glowing seed tubes inside a ice-lined subterranean Arctic seed vault, color palette of ice blue, frost white, and starlight silver."
  },
  28: {
    snippetAnswer: "August 28 captures mountain water kinetic power under Arcana 10 (Wheel of Fortune). You build alpine run-of-river stream turbines, using low-head water intakes to supply mountain villages.",
    vignetteTitle: "The Low-Head Hydro Engineer: Building Alpine Run-of-River Intakes",
    vignetteScenario: "Commissioning a 50MW run-of-river hydro plant in an alpine valley on August 28, a hydrodynamics engineer installs 20 low-head stream generators. The system captures mountain stream flow to power 25,000 mountain households with zero dam reservoirs.",
    birthArchetypeContent: "Alpine run-of-river stream turbines and low-head water intakes characterize August 28 under Arcana 10. You generate hydro electricity without building river dams.",
    highFrequencyExpression: "In run-of-river engineering, you master low-head stream turbine placement, alpine water intake hydrodynamics, mountain stream generator tuning, and eco-friendly hydro power.",
    shadowChallenges: "Rushing stream turbine anchoring deployments, ignoring water flow silt wear, or over-working mountain installation dive crews.",
    vocationAndFinance: "Pioneers clean water energy as a micro-hydro engineer, stream turbine designer, and run-of-river hydro director. Wealth grows through hydro turbine patents.",
    reflectionQuestions: [
      "Am I testing micro-hydro turbine anchorings against extreme alpine spring flood swell forces?",
      "How can I optimize run-of-river water turbine hydrodynamics to maximize electricity output?",
      "What alpine micro-hydro power milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is August 28?",
        answer: "August 28 is Virgo (Earth sign), giving analytical precision, methodology, and engineering drive to Arcana 10."
      },
      {
        question: "How does August 28 differ from August 10?",
        answer: "August 10 carries Leo ocean wave energy converter hydrodynamics, while August 28 carries Virgo alpine mountain stream run-of-river micro-hydro water turbine hydrodynamics."
      },
      {
        question: "What is the technical edge of August 28?",
        answer: "Engineering run-of-river micro-hydro water turbines that capture mountain stream kinetics without building massive dams."
      },
      {
        question: "Which Arcana complements August 28?",
        answer: "Arcana 21 (The World) expands August 28's hydro power projects onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over a glowing underwater stream turbine spinning in a clear alpine mountain river, color palette of river turquoise, forest emerald, and gold."
  },
  29: {
    snippetAnswer: "International Day Against Nuclear Tests (August 29) invokes Master 11 under Arcana 11 (Strength). You patrol Siberian taiga tiger snow corridors, protecting wild predators.",
    vignetteTitle: "The Taiga Wildlife Captain: Tracking Sub-Zero Siberian Tiger Corridors",
    vignetteScenario: "Coordinating a taiga wilderness trust on International Day Against Nuclear Tests (August 29), a wildlife biologist leads ranger patrols across 400,000 acres of Siberian pine forest. Their sanctuary defense halts illegal poaching while securing sub-zero migration passage for 40 wild Siberian tigers.",
    birthArchetypeContent: "Siberian taiga tiger snow migration corridors and sub-zero wilderness ranger outposts define August 29 under Arcana 11. You lead cold-climate tiger tracking to prevent forest poaching.",
    highFrequencyExpression: "In cold wilderness conservation, your resilience commands Siberian tiger snow tracking, taiga pine forest patrol management, sub-zero ranger outpost operations, and grounded predator defense.",
    shadowChallenges: "Severe physical strain during sub-zero wilderness tracking, frustration with slow international conservation funding, or neglecting personal rest.",
    vocationAndFinance: "Protects endangered species as an International Day Against Nuclear Tests director, Siberian tiger biologist, and taiga sanctuary trustee. Wealth grows through global fauna grants.",
    reflectionQuestions: [
      "How can I protect my physical stamina while conducting long sub-zero taiga patrols?",
      "Am I applying quiet somatic composure rather than force when protecting tiger migration corridors?",
      "What taiga forest sanctuary initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Why is August 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and quiet somatic mastery over taiga tiger wildlife."
      },
      {
        question: "What zodiac sign is August 29?",
        answer: "August 29 is Virgo (Earth sign), adding analytical precision, practical methodology, and forest connection to Arcana 11's intense strength."
      },
      {
        question: "How does August 29 differ from August 11?",
        answer: "August 11 carries Leo African elephant savanna defense, while August 29 carries Virgo Siberian taiga tiger snow forest migration corridor defense."
      },
      {
        question: "What is the health key for August 29?",
        answer: "Regular physical grounding practices and systematic hydration recovery between cold taiga field patrols."
      }
    ],
    imageBrief: "Inspiring artwork of a calm wildlife biologist standing in a sunlit snowy taiga pine forest beside a magnificent Siberian tiger under a golden sun halo, color palette of pine green, snow white, tiger amber, and gold."
  },
  30: {
    snippetAnswer: "International Whale Shark Day (August 30) fosters marine abundance under Arcana 3 (The Empress). You operate coastal micro-algae biorefineries, extracting plant protein isolates.",
    vignetteTitle: "The Algae Biorefinery Director: Extracting Sustainable Plant Protein Isolates",
    vignetteScenario: "Building a 500-acre marine micro-algae biorefinery on International Whale Shark Day (August 30), a bio-refining executive extracts sustainable plant protein isolates.",
    birthArchetypeContent: "Coastal marine micro-algae biorefineries and plant-based protein isolate extraction define August 30 under Arcana 3. You operate ocean photobioreactor tanks to produce sustainable food proteins.",
    highFrequencyExpression: "In sustainable food refining, your leadership drives marine micro-algae photobioreactor cultivation, plant protein isolate extraction, coastal bio-refinery operation, and eco-friendly food scaling.",
    shadowChallenges: "Protective secrecy over algae tank nutrient mixes, excessive media posturing, or over-spending on biorefinery capital equipment.",
    vocationAndFinance: "Builds bio-energy empires as a marine algae biorefinery founder, protein synthesis estate CEO, sustainable food producer, and bio-chemist. Wealth expands through commercial food supply contracts.",
    reflectionQuestions: [
      "How can I scale marine micro-algae biorefineries to eliminate unsustainable food production impact?",
      "Am I balancing my visionary bio-refining energy drive with practical refinery unit costs?",
      "What marine algae protein refinement project am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What makes August 30 special on International Whale Shark Day?",
        answer: "August 30 combines Arcana 3's creative fertility with International Whale Shark Day, establishing a frequency for coastal marine micro-algae biorefinery sustainable plant protein synthesis."
      },
      {
        question: "What zodiac sign is August 30?",
        answer: "August 30 is Virgo (Earth sign), bringing analytical precision, methodology, and technical elegance to The Empress's creative fertility."
      },
      {
        question: "What is the financial engine for August 30?",
        answer: "Refining and supplying sustainable micro-algae protein isolates to global food and nutrition conglomerates."
      },
      {
        question: "Which Arcana complements August 30?",
        answer: "Arcana 4 (The Emperor) provides structural manufacturing execution to support Arcana 3's bio-refinery growth."
      }
    ],
    imageBrief: "Rich technical illustration of an engineer standing beside glowing blue-green ocean photobioreactor tanks in a coastal facility under a late summer sun, color palette of emerald algae green, ocean blue, and solar gold."
  },
  31: {
    snippetAnswer: "International Overdose Awareness Day (August 31) commands biosphere governance under Arcana 4 (The Emperor). You administer global reserve perimeters, building radar outpost towers.",
    vignetteTitle: "The Reserve Sanctuary Director: Administering Biosphere Radar Outposts",
    vignetteScenario: "Directing a global biosphere reserve on August 31, a reserve administrator installs anti-contamination radar towers across 1,000,000 acres to protect wildlife.",
    birthArchetypeContent: "Planetary biosphere reserve governance and perimeter radar towers mark August 31 under Arcana 4. You establish solar environmental outposts to shield reserve boundaries.",
    highFrequencyExpression: "In environmental administration, you command biosphere reserve perimeter radar deployment, environmental sensor outpost infrastructure, sanctuary security protocols, and planetary reserve governance.",
    shadowChallenges: "Rigid bureaucratic enforcement over reserve boundaries, clashing with local indigenous foraging groups, or imposing draconian penalty structures.",
    vocationAndFinance: "Directs ecological security as a planetary biosphere administrator, reserve radar designer, and sanctuary foundation chair. Financial growth builds through security retainers.",
    reflectionQuestions: [
      "Am I leading my biosphere reserve security teams with protective authority or rigid demands?",
      "How can I deploy solar environmental outposts to strengthen reserve boundary enforcement?",
      "What planetary biosphere security infrastructure milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What makes August 31 special on International Overdose Awareness Day?",
        answer: "August 31 combines Arcana 4's executive governance with International Overdose Awareness Day, establishing a calling for global planetary biosphere reserve perimeter sensor outpost governance."
      },
      {
        question: "What zodiac sign is August 31?",
        answer: "August 31 is Virgo (Earth sign), infusing Arcana 4's executive discipline with analytical precision, methodology, and protective governance."
      },
      {
        question: "Which careers suit August 31 best?",
        answer: "Planetary biosphere governance, national reserve administration, environmental security architecture, and biosphere trust leadership."
      },
      {
        question: "How can August 31 maintain administrative momentum?",
        answer: "Combine structural biosphere governance standards with clear team communication and international reserve permits."
      }
    ],
    imageBrief: "Commanding architectural graphic of a chief biosphere administrator inspecting a solar-powered environmental outpost tower overlooking a vast sunlit forest reserve, color palette of forest emerald, solar gold, and slate grey."
  }
};

export function getAugustProfile(day: number): BirthdayProfileData {
  const custom = AUGUST_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `August ${day}`;
  const slug = `august-${day}`;

  const phaseText = day <= 10 ? `early August Leo solar fire phase of day ${day}` : day <= 22 ? `mid-August Leo-Virgo cusp phase of day ${day}` : `late-August Virgo earth phase of day ${day}`;
  const seasonalContext = `Radiant late-summer light and peak environmental harvest vitality mark the ${phaseText}.`;
  const dayVibrationNote = `${formattedDate} combines this late-summer energy with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 31 : day - 1;
  const nextDay = day === 31 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'July 31' : `August ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 31 ? "July closing midsummer threshold" : `Preceding August ${prevDay} vibration`,
      bestFocus: `Consolidating earlier August ${prevDay} momentum`,
      keyContrast: `Paves the way for Arcana ${primaryArcanaNum} expression on August ${day}.`
    },
    {
      dateLabel: formattedDate,
      arcanaNum: primaryArcanaNum,
      arcanaName: primaryArcana.name,
      coreTheme: custom?.vignetteTitle || `${primaryArcana.name} activation`,
      bestFocus: `Anchoring unique August ${day} profile strengths`,
      keyContrast: `Your individual August ${day} archetype focus.`,
      isCurrentDay: true
    },
    {
      dateLabel: day === 31 ? 'September 1' : `August ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: `Emerging August ${nextDay} expansion`,
      bestFocus: `Advancing toward August ${nextDay} wisdom`,
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} qualities.`
    }
  ];

  return {
    slug,
    month: 'August',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of August seasonal focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
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
        answer: day <= 22 ? `${formattedDate} falls under Leo (Fire sign), bringing solar warmth, courage, and executive authority.` : `${formattedDate} falls under Virgo (Earth sign), bringing analytical precision, practical methodology, and detail mastery.`
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
