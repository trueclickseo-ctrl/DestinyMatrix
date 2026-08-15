import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const SEPTEMBER_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "September 1 launches an agtech robotics breakthrough under Arcana 1 (The Magician). You build autonomous micro-drone swarms for glasshouse crop pollination, replacing bee hives with laser-guided precision flight.",
    vignetteTitle: "The Greenhouse Robotics Founder: Deploying Micro-Drone Pollination Swarms",
    vignetteScenario: "Operating 50 micro-drones in a commercial tomato glasshouse on September 1, a robotics engineer achieves 99% pollination accuracy while collecting blossom telemetry.",
    birthArchetypeContent: "Agtech micro-drone swarm control and laser pollination guidance define September 1 under Arcana 1 in Virgo. You construct autonomous flight systems that automate indoor crop fertilization with zero chemical inputs.",
    highFrequencyExpression: "Your mastery centers on micro-drone swarm orchestration, laser pollination optics, indoor farming automation, and precision agricultural engineering.",
    shadowChallenges: "Over-tuning flight guidance parameters, doubting drone hardware stability during pilot tests, or brusque coordination with glasshouse growers.",
    vocationAndFinance: "Pioneers indoor farming automation as a micro-drone architect, pollination robotics founder, agtech CEO, and glasshouse automation lead. Capital expands through commercial hardware supply deals.",
    reflectionQuestions: [
      "Am I taking my micro-drone pollination concepts into full commercial glasshouse deployment?",
      "How can I channel Virgo analytical clarity into intuitive robotic flight control?",
      "What glasshouse automation milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 1?",
        answer: "September 1 is Virgo (Earth sign), bringing analytical precision, detail mastery, and practical methodology to Arcana 1."
      },
      {
        question: "How does September 1 differ from August 1?",
        answer: "August 1 carries Leo solar thermal heliostat power towers, while September 1 carries Virgo agtech bio-robotic glasshouse pollination micro-drone swarms."
      },
      {
        question: "What is the financial engine for September 1?",
        answer: "Manufacturing and licensing autonomous glasshouse micro-drone pollination swarms for commercial farming operations."
      },
      {
        question: "Which Arcana complements September 1?",
        answer: "Arcana 5 (The Hierophant) offers educational frameworks to publish September 1's robotics patents."
      }
    ],
    imageBrief: "Clean high-tech graphic of an engineer holding a tiny white micro-drone glowing with green laser optics inside a lush sunlit tomato greenhouse, color palette of tomato red, leaf green, and crisp silver."
  },
  2: {
    snippetAnswer: "September 2 uncovers hidden forest signals under Arcana 2 (The High Priestess). You analyze subterranean root exudate liquid chromatography, isolating stress terpenes to detect tree diseases weeks early.",
    vignetteTitle: "The Root Exudate Biochemist: Mapping Sub-Surface Forest Defense Signals",
    vignetteScenario: "Sampling subterranean fluids 6 feet under an oak canopy on September 2, a plant biochemist isolates stress terpenes, predicting insect attacks 14 days prior to leaf damage.",
    birthArchetypeContent: "Sub-surface root exudate chromatography and forest chemical signaling define September 2 under Arcana 2 in Virgo. You deploy underground micro-probes to decode chemical defense messages shared across tree root networks.",
    highFrequencyExpression: "Your talent shines through root fluid chromatography, sub-surface terpene analysis, forest disease forecasting, and quiet subterranean biochemistry.",
    shadowChallenges: "Reclusive isolation in soil labs, withholding biochemical sensor maps from forest managers, or avoiding public presentations.",
    vocationAndFinance: "Operates at the forefront of plant biochemistry as a root exudate scientist, soil chromatography specialist, forest pathologist, and botanical researcher. Financial growth builds through research foundation grants.",
    reflectionQuestions: [
      "Am I trusting my intuitive biochemical insights alongside lab chromatography readouts?",
      "How can I share my root exudate discoveries to protect vulnerable forest ecosystems?",
      "What subterranean plant chemistry secret am I called to illuminate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 2?",
        answer: "September 2 is Virgo (Earth sign), giving analytical focus, Earth connection, and intuitive depth to The High Priestess."
      },
      {
        question: "How does September 2 differ from August 2?",
        answer: "August 2 carries Leo volcanic magma conduit fiber-optics, while September 2 carries Virgo sub-surface root exudate biochemical chromatography."
      },
      {
        question: "What is the key to success for September 2?",
        answer: "Patient laboratory analysis of delicate subterranean root chemical signals."
      },
      {
        question: "Which Arcana complements September 2?",
        answer: "Arcana 3 (The Empress) provides natural growth backing to support September 2's biochemical discoveries."
      }
    ],
    imageBrief: "Mystical symbolist painting of a scientist analyzing a glowing amber vial of root fluid inside a dark subterranean soil chamber illuminated by glowing roots, color palette of soil brown, amber gold, and forest green."
  },
  3: {
    snippetAnswer: "September 3 advances soil fertility under Arcana 3 (The Empress). You master biodynamic grape pomace composting, fermenting organic vineyard residues into rich humus preparations for soil regeneration.",
    vignetteTitle: "The Vineyard Biodynamic Composting Master: Fermenting Organic Humus Preparations",
    vignetteScenario: "Blending grape pomace and botanical herbs in compost heaps on September 3, a soil chemist creates active biodynamic humus preparations across a 150-acre estate.",
    birthArchetypeContent: "Biodynamic vineyard pomace composting and humus preparation mark September 3 under Arcana 3 in Virgo. You transform grape pressing residues into living soil conditioners that restore vineyard microbial life.",
    highFrequencyExpression: "Your practice commands organic compost fermentation, humus microbiology, vineyard soil enrichment, and biodynamic land stewardships.",
    shadowChallenges: "Possessive control over compost formulas, impatience during multi-month soil fermentation cycles, or over-spending on organic bio-reactors.",
    vocationAndFinance: "Directs organic soil enrichment as a vineyard composting founder, soil microbiologist, estate soil director, and agrarian bio-chemist. Revenue grows through organic soil product sales.",
    reflectionQuestions: [
      "How can I turn agricultural residues into fertile soil humus for future harvests?",
      "Am I balancing creative organic soil methods with practical vineyard production budgets?",
      "What biodynamic soil preparation am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 3?",
        answer: "September 3 is Virgo (Earth sign), infusing The Empress's creative fertility with analytical precision, practical care, and detail mastery."
      },
      {
        question: "How does September 3 differ from August 3?",
        answer: "August 3 carries Leo lavandin steam distillation, while September 3 carries Virgo biodynamic vineyard pomace composting and organic humus preparation."
      },
      {
        question: "What is the financial engine for September 3?",
        answer: "Formulating and supplying commercial organic humus preparations for high-value agricultural estates."
      },
      {
        question: "Which Arcana complements September 3?",
        answer: "Arcana 4 (The Emperor) provides structural operational discipline to support Arcana 3's soil enterprise."
      }
    ],
    imageBrief: "Lush modern painting of a soil chemist holding rich dark compost in a sunlit vineyard with rows of green grapevines behind, color palette of soil brown, grapevine green, and sun gold."
  },
  4: {
    snippetAnswer: "September 4 secures alpine mountain passes under Arcana 4 (The Emperor). You design high-alpine rockfall retention cable nets, calculating cliff shear forces to anchor steel retention barriers.",
    vignetteTitle: "The Alpine Rockfall Engineer: Installing Cliff Face Retention Cable Nets",
    vignetteScenario: "Anchoring heavy steel cable nets across a 3,000-foot granite cliff on September 4, a structural engineer stops falling boulders from striking mountain highway traffic.",
    birthArchetypeContent: "High-alpine rockfall retention cable nets and cliff rock anchor calculation define September 4 under Arcana 4 in Virgo. You build high-impact mountain retention structures that protect mountain roads against rockslides.",
    highFrequencyExpression: "Your authority commands rockfall cable net design, cliff face rock anchor engineering, slope stability auditing, and alpine public safety.",
    shadowChallenges: "Rigid stubbornness during mountain community planning reviews, enforcing strict engineering specs without field flexibility, or excessive stress during mountain storms.",
    vocationAndFinance: "Leads municipal safety infrastructure projects as a rockfall structural engineer, cliff anchor designer, civil safety chair, and alpine hazard consultant. Funding stems from municipal public works contracts.",
    reflectionQuestions: [
      "Am I leading my alpine engineering crew with clear direction or rigid demands?",
      "Where in my structural civil projects can I deploy high-strength rockfall retention technology?",
      "What mountain safety engineering milestone am I ready to accomplish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 4?",
        answer: "September 4 is Virgo (Earth sign), giving analytical precision, structural discipline, and detail mastery to Arcana 4."
      },
      {
        question: "How does September 4 differ from August 4?",
        answer: "August 4 carries Leo high-desert pumped hydro dam penstock conduits, while September 4 carries Virgo high-alpine rockfall retention cable net cliff engineering."
      },
      {
        question: "Which careers suit September 4 best?",
        answer: "Rockfall structural engineering, cliff anchor project direction, civil infrastructure leadership, and alpine hazard consultancy."
      },
      {
        question: "How can September 4 ensure project success?",
        answer: "Combine rigorous structural safety standards with site adaptability to mountain terrain."
      }
    ],
    imageBrief: "Commanding civil engineering artwork showing a chief structural engineer inspecting heavy steel cable nets anchored to a massive sunlit granite cliff face above a mountain road, color palette of granite grey, steel silver, and sky blue."
  },
  5: {
    snippetAnswer: "September 5 advances botanical pest education under Arcana 5 (The Hierophant). You author bio-pesticide chemistry textbooks, establishing plant-derived pest control standards for agronomy programs.",
    vignetteTitle: "The Botanical Entomology Chair: Authoring Biopesticide Curricula",
    vignetteScenario: "Publishing a bio-pesticide chemistry textbook on September 5, an entomology professor trains university researchers to deploy plant-derived biopesticides that replace synthetic chemicals.",
    birthArchetypeContent: "Academic bio-pesticide chemistry textbooks and botanical entomology charters mark September 5 under Arcana 5 in Virgo. You turn plant defense biochemistry into university curricula, preparing agronomists to protect crops naturally.",
    highFrequencyExpression: "Your academic leadership highlights bio-pesticide textbook authoring, botanical entomology charters, plant defense lecturing, and organic pest policy.",
    shadowChallenges: "Academic dogmatism regarding traditional pest control practices, impatience with slow student research progress, or delaying publication over minor footnotes.",
    vocationAndFinance: "Chairs agricultural chemistry faculties as a bio-pesticide professor, entomology textbook author, plant defense specialist, and organic policy consultant. Royalties generate steady publishing income.",
    reflectionQuestions: [
      "Am I grounding my bio-pesticide teaching in practical field crop protection trials?",
      "How can I simplify plant defense biochemistry for upcoming agricultural students?",
      "What botanical pest control charter am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 5?",
        answer: "September 5 is Virgo (Earth sign), infusing The Hierophant's educational mission with analytical precision, practical care, and academic rigor."
      },
      {
        question: "How does September 5 differ from August 5?",
        answer: "August 5 carries Leo cryosphere glaciology treaties, while September 5 carries Virgo academic bio-pesticide chemistry textbooks and botanical entomology charters."
      },
      {
        question: "What is the financial engine for September 5?",
        answer: "Authoring bio-pesticide chemistry textbooks and advising global organic agricultural governance boards."
      },
      {
        question: "Which Arcana complements September 5?",
        answer: "Arcana 3 (The Empress) provides natural plant growth backing to support Arcana 5's educational mission."
      }
    ],
    imageBrief: "Inspiring illustration of an entomology professor teaching students in a sunlit organic farm field holding a glass dish containing beneficial predatory insects, color palette of leaf green, warm amber, and white."
  },
  6: {
    snippetAnswer: "September 6 forms Piedmont hazelnut trade co-operatives under Arcana 6 (The Lovers). You organize organic Tonda Gentile hazelnut orchards, roasting aromatic nut crops for artisan chocolatiers.",
    vignetteTitle: "The Piedmont Nut Harvest Lead: Managing Tonda Gentile Roasting Facilities",
    vignetteScenario: "Coordinating 50 Piedmont hazelnut orchards on September 6, an agricultural lead oversees roasting plants that supply European chocolate makers.",
    birthArchetypeContent: "Tonda Gentile hazelnut orchard management and roasting plant operations characterize September 6 under Arcana 6. You organize mountain nut growers into direct confectionery trade alliances.",
    highFrequencyExpression: "Your skill commands hazelnut harvest organization, roasting temperature calibration, fair-trade co-op diplomacy, and gianduja export contracts.",
    shadowChallenges: "Over-complicating profit distribution formulas among grower families, worrying over nut drying weather shifts, or delaying contract signatures.",
    vocationAndFinance: "Fosters international gourmet trade equity as a hazelnut co-op founder, roasting plant director, confectionery nut strategist, and agrarian trade negotiator. Dividends grow through shared harvest exports.",
    reflectionQuestions: [
      "Am I structuring hazelnut trade alliances on clear mutual values or quick price compromises?",
      "How can I preserve family orchard traditions while expanding roasted hazelnut exports?",
      "What fair-trade gianduja agreement am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 6?",
        answer: "September 6 is Virgo (Earth sign), bringing analytical precision, practical care, and detail mastery to Arcana 6's partnership design."
      },
      {
        question: "How does September 6 differ from August 6?",
        answer: "August 6 carries Leo saffron stigma trade co-ops, while September 6 carries Virgo Piedmont organic Tonda Gentile hazelnut roasted grower alliances."
      },
      {
        question: "What is the financial key for September 6?",
        answer: "Structuring high-value organic hazelnut co-operatives with direct international artisan confectionery export contracts."
      },
      {
        question: "Which Arcana complements September 6?",
        answer: "Arcana 4 (The Emperor) provides structural governance to anchor Arcana 6's agricultural deals."
      }
    ],
    imageBrief: "Warm graphic depicting a hazelnut producer holding roasted golden brown hazelnuts in a sunlit Piedmont hazelnut orchard surrounded by farm families, color palette of hazelnut brown, warm amber, and sun gold."
  },
  7: {
    snippetAnswer: "September 7 builds steep-slope transit systems under Arcana 7 (The Chariot). You direct automated vineyard aerial cableway freight networks, transporting harvested grape buckets across terraced mountain slopes.",
    vignetteTitle: "The Vineyard Cableway Lead: Routing Terraced Slope Harvest Freight",
    vignetteScenario: "Running an automated aerial cableway system across a 45-degree terraced vineyard on September 7, a transit engineer moves 150 tons of grapes down mountain slopes with zero soil erosion.",
    birthArchetypeContent: "Terraced vineyard aerial cableway freight routing and steep-slope harvest automation mark September 7 under Arcana 7 in Virgo. You design aerial cableway networks that haul heavy fruit down steep mountain slopes without heavy vehicles.",
    highFrequencyExpression: "Your practice centers on cableway system engineering, steep-slope harvest logistics, automated freight bucket control, and zero-emission crop transport.",
    shadowChallenges: "Frustration over cable tension calibration delays, pushing motor capacities on steep inclines, or brusque communication with harvest crews.",
    vocationAndFinance: "Engineers specialized steep-terrain freight systems as an aerial cableway architect, mountain vineyard transit manager, and agtech logistics lead. Earnings expand through commercial cableway installations.",
    reflectionQuestions: [
      "Am I balancing aerial cableway speed and efficiency with strict structural cable safety compliance?",
      "How can I inspire my transit engineering team during complex harvest season runs?",
      "What zero-emission mountain freight milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 7?",
        answer: "September 7 is Virgo (Earth sign), giving analytical precision, practical care, and transit engineering agility to Arcana 7."
      },
      {
        question: "How does September 7 differ from August 7?",
        answer: "August 7 carries Leo island cargo drone flight operations, while September 7 carries Virgo automated vineyard aerial cableway steep-slope crop freight transport."
      },
      {
        question: "What is the technical edge of September 7?",
        answer: "Designing aerial cableway freight systems that transport heavy harvests down 45-degree terraced mountain slopes without soil compaction."
      },
      {
        question: "Which Arcana complements September 7?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's harvest transport operations."
      }
    ],
    imageBrief: "Dynamic agricultural graphic showing a sleek aerial cableway bucket filled with purple grapes gliding down a terraced green mountain vineyard under a bright sun, color palette of vineyard green, steel silver, and sun gold."
  },
  8: {
    snippetAnswer: "September 8 enforces soil decontamination law under Arcana 8 (Justice). You litigate heavy metal pollution lawsuits, securing lead phytoremediation mandates that compel polluters to clean toxic urban soils.",
    vignetteTitle: "The Soil Contamination Litigator: Enforcing Lead Phytoremediation Orders",
    vignetteScenario: "Presenting soil heavy metal spectrometry evidence on September 8, an environmental prosecutor wins a ruling ordering an industrial firm to fund sunflower phytoremediation across 100 acres.",
    birthArchetypeContent: "Soil heavy metal pollution lawsuits and lead phytoremediation enforcement characterize September 8 under Arcana 8 in Virgo. You leverage soil chemistry data and environmental law to compel industrial polluters to decontaminate toxic ground.",
    highFrequencyExpression: "Your legal practice commands heavy metal pollution litigation, phytoremediation mandate enforcement, soil testing auditing, and environmental cleanup rulings.",
    shadowChallenges: "Cold legalistic detachment toward land users, hyper-critical scrutiny during site audits, or burnout from prolonged courtroom litigation.",
    vocationAndFinance: "Litigates toxic land cases as a soil decontamination attorney, heavy metal legal specialist, environmental court arbitrator, and land rights advocate. Professional fees accrue through legal retainers.",
    reflectionQuestions: [
      "Am I enforcing soil cleanup laws with diplomatic fairness for all surrounding land users?",
      "Where in my soil legal work can I establish greater heavy metal testing transparency?",
      "What soil phytoremediation standard needs strict legal enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 8?",
        answer: "September 8 is Virgo (Earth sign), bringing analytical precision, ethical fairness, and detail mastery to Arcana 8."
      },
      {
        question: "How does September 8 differ from August 8?",
        answer: "August 8 carries Leo savanna elephant corridor anti-poaching litigation, while September 8 carries Virgo soil heavy metal contamination litigation and lead phytoremediation decrees."
      },
      {
        question: "What is the financial rule for September 8?",
        answer: "Maintain absolute regulatory compliance and fair environmental law standards in all land decontamination investments."
      },
      {
        question: "Which Arcana complements September 8?",
        answer: "Arcana 11 (Strength) provides stamina to support September 8's court litigation cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a field of tall bright yellow sunflowers growing in soil, color palette of sunflower yellow, soil brown, and gold."
  },
  9: {
    snippetAnswer: "September 9 archives desert paleo-hydrology data under Arcana 9 (The Hermit). You catalog sand dune core samples, analyzing fossil aquifer isotope layers to reconstruct prehistoric Sahara greening cycles.",
    vignetteTitle: "The Dune Paleo-Hydrology Director: Archiving Sahara Fossil Aquifer Samples",
    vignetteScenario: "Analyzing 2,000-foot Sahara sand cores on September 9, a hydrologist reconstructs ancient desert water table greening epochs.",
    birthArchetypeContent: "Desert sand dune paleo-hydrology core archiving and fossil aquifer isotope analysis define September 9 under Arcana 9 in Virgo. You work in quiet desert core vaults, studying ancient sand isotopes to understand long-term planetary water cycles.",
    highFrequencyExpression: "Your research focuses on sand core archiving, fossil aquifer isotope indexing, desert paleo-climate analysis, and hydro-geology publishing.",
    shadowChallenges: "Reclusive isolation inside desert core vaults, reluctance to share aquifer isotope data with external research teams, or impatience with non-scientific inquiries.",
    vocationAndFinance: "Manages subterranean hydro-geological repositories as a paleo-sand core archivist, fossil aquifer researcher, desert stratigrapher, and hydrology scholar. Grants sustain ongoing vault research.",
    reflectionQuestions: [
      "Am I balancing my solitary sand core research with open scientific collaboration?",
      "How can I apply ancient fossil aquifer discoveries to inform modern desert water management?",
      "What underground paleo-hydrology secret am I ready to index today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 9?",
        answer: "September 9 is Virgo (Earth sign), blending analytical precision with The Hermit's contemplative research focus."
      },
      {
        question: "How does September 9 differ from August 9?",
        answer: "August 9 carries Leo salt mine rock core archiving, while September 9 carries Virgo desert sand dune paleo-hydrology fossil aquifer sand core archives."
      },
      {
        question: "Why does September 9 require quiet subterranean vault focus?",
        answer: "Solitude in sand core vaults allows September 9 to analyze delicate aquifer isotopes without atmospheric moisture contamination."
      },
      {
        question: "Which Arcana complements September 9?",
        answer: "Arcana 3 (The Empress) offers natural fertile growth backing to support September 9's hydrology research."
      }
    ],
    imageBrief: "Mystical portrait of a researcher examining a glowing sand core cylinder inside a subterranean desert archive vault lined with sand core tubes, color palette of desert sand gold, deep vault charcoal, and amber light."
  },
  10: {
    snippetAnswer: "September 10 captures sub-glacial meltwater energy under Arcana 10 (Wheel of Fortune). You engineer sub-glacial hydro-turbines beneath ice sheets, converting high-pressure meltwater flow into clean electric power.",
    vignetteTitle: "The Sub-Glacial Meltwater Turbine Engineer: Harnessing Ice Sheet Hydrokinetic Flow",
    vignetteScenario: "Installing a hydrokinetic turbine inside a sub-glacial ice tunnel on September 10, a polar engineer generates 20MW of clean electricity from sub-glacial meltwater.",
    birthArchetypeContent: "Sub-glacial meltwater hydrokinetic turbines and ice sheet fluid dynamics define September 10 under Arcana 10 in Virgo. You convert sub-glacial water kinetics into clean electricity for Arctic research stations.",
    highFrequencyExpression: "Your work commands sub-glacial turbine design, ice tunnel hydrodynamics, low-temperature generator alloys, and polar clean power grids.",
    shadowChallenges: "Rushing sub-glacial turbine deployments without ice tunnel safety checks, ignoring ice pressure wear, or over-working polar research crews.",
    vocationAndFinance: "Pioneers cryosphere energy harvesting as a sub-glacial hydro turbine designer, polar power lead, clean tech executive, and Arctic energy director. Returns flow through renewable energy contracts.",
    reflectionQuestions: [
      "Am I testing sub-glacial turbine anchors against extreme ice movement forces?",
      "How can I optimize ice tunnel hydrodynamics to maximize clean power production?",
      "What cryosphere energy project am I ready to lead today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 10?",
        answer: "September 10 is Virgo (Earth sign), bringing analytical precision, technical methodology, and engineering drive to Arcana 10."
      },
      {
        question: "How does September 10 differ from August 10?",
        answer: "August 10 carries Leo ocean wave buoys, while September 10 carries Virgo sub-glacial meltwater hydrokinetic ice tunnel turbines."
      },
      {
        question: "What is the technical secret of September 10?",
        answer: "Engineering sub-glacial turbines that convert high-pressure ice meltwater flow into continuous clean power."
      },
      {
        question: "Which Arcana complements September 10?",
        answer: "Arcana 21 (The World) expands September 10's polar energy projects onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolist graphic of a golden celestial wheel turning over a glowing blue hydro-turbine spinning inside a subterranean ice tunnel beneath a glacier, color palette of ice cyan, electric blue, and gold."
  },
  11: {
    snippetAnswer: "September 11 anchors permafrost infrastructure under Arcana 11 (Strength / Master 11). You engineer cryo-anchored foundation grids, installing thermosyphon cooling loops that prevent sub-arctic soil thaw.",
    vignetteTitle: "The Cryosphere Foundation Lead: Installing Thermosyphon Ground Cooling Loops",
    vignetteScenario: "Installing 200 thermosyphon cooling pipes into sub-arctic permafrost on September 11, a cryosphere engineer prevents soil thaw under a northern logistics terminal.",
    birthArchetypeContent: "Sub-arctic permafrost soil stabilization and thermosyphon ground cooling define September 11 under Arcana 11 in Virgo. You build heavy cryo-anchored foundations that keep frozen ground solid under warming climates.",
    highFrequencyExpression: "Your physical engineering practice commands thermosyphon loop installation, permafrost ground stabilization, cryosphere foundation design, and northern infrastructure leadership.",
    shadowChallenges: "Over-stressing during harsh sub-arctic drilling shifts, rushing thermosyphon fluid charging, or neglecting structural maintenance schedules.",
    vocationAndFinance: "Directs northern civil engineering ventures as a permafrost foundation lead, cryo-stabilization architect, sub-arctic structural engineer, and cold-climate consultant. Contracts stem from northern infrastructure funds.",
    reflectionQuestions: [
      "How can I maintain my physical stamina during grueling sub-arctic engineering deployments?",
      "Am I balancing structural strength with environmental permafrost protection?",
      "What cold-climate engineering milestone am I ready to accomplish today?"
    ],
    faqItems: [
      {
        question: "Is September 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, granting extraordinary spiritual intuition, physical stamina, and quiet somatic mastery over infrastructure."
      },
      {
        question: "What zodiac sign is September 11?",
        answer: "September 11 is Virgo (Earth sign), adding analytical precision, practical care, and structural discipline to Arcana 11's intense strength."
      },
      {
        question: "How does September 11 differ from August 11?",
        answer: "August 11 carries Leo African elephant savanna defense, while September 11 carries Virgo sub-arctic permafrost thermosyphon foundation engineering."
      },
      {
        question: "What is the health key for September 11?",
        answer: "Regular physical grounding practices and systematic hydration recovery between cold-climate field deployments."
      }
    ],
    imageBrief: "Inspiring illustration of a chief structural engineer inspecting glowing silver thermosyphon cooling pipes anchored deep into frozen sub-arctic ground under an aurora borealis sky, color palette of ice blue, silver, and aurora green."
  },
  12: {
    snippetAnswer: "September 12 upcycles timber waste under Arcana 12 (The Hanged Man). You convert discarded sawmill wood pulp into bio-based epoxy resins and pure vanillin extracts.",
    vignetteTitle: "The Waste Timber Lignin Bio-Refiner: Converting Sawmill Residue into Vanillin & Resin",
    vignetteScenario: "Processing 5,000 tons of discarded wood pulp at a sawmill on September 12, a chemical engineer extracts bio-epoxy resin and food-grade vanillin.",
    birthArchetypeContent: "Sawmill timber lignin bio-refining and bio-epoxy resin upcycling define September 12 under Arcana 12 in Virgo. You invert forestry waste, converting sawmill wood residue into sustainable bio-resins and flavorings.",
    highFrequencyExpression: "Your circular chemistry practice highlights wood lignin extraction, bio-epoxy resin synthesis, sawmill waste upcycling, and sustainable material innovation.",
    shadowChallenges: "Lingering in laboratory extraction testing without scaling plant production, over-analyzing chemical purity metrics, or ignoring financial returns.",
    vocationAndFinance: "Transforms timber waste streams as a wood lignin refiner, bio-resin developer, circular chemical engineer, and clean-materials entrepreneur. Commercial returns grow through bio-material patents.",
    reflectionQuestions: [
      "What forestry waste stream requires me to flip my design perspective completely?",
      "Am I balancing my non-profit environmental work with commercial financial growth?",
      "What timber lignin recovery technology am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 12?",
        answer: "September 12 is Virgo (Earth sign), giving analytical precision, detail mastery, and practical methodology to The Hanged Man."
      },
      {
        question: "How does September 12 differ from August 12?",
        answer: "August 12 carries Leo factory effluent fertilizer reclamation, while September 12 carries Virgo sawmill timber lignin bio-refining into vanillin and bio-epoxy resins."
      },
      {
        question: "What is the core lesson for September 12?",
        answer: "Learning that upcycling discarded sawmill pulp turns forestry waste into valuable bio-resins and food flavorings."
      },
      {
        question: "Which Arcana complements September 12?",
        answer: "Arcana 4 (The Emperor) provides structural backing to execute September 12's refining operations."
      }
    ],
    imageBrief: "Mystical modern artwork showing dark wood sawdust passing through a glowing golden bio-membrane that isolates amber bio-epoxy resin sheets and crystal vanillin powder, color palette of wood amber, golden yellow, and clean white."
  },
  13: {
    snippetAnswer: "September 13 terraforms coal mine pits under Arcana 13 (Transformation). You build bio-swale drainage networks across abandoned open-pit coal mines, planting heavy-metal extracting pioneer birch forests.",
    vignetteTitle: "The Open-Pit Terraforming Ecologist: Reclaiming Coal Mines into Pioneer Forests",
    vignetteScenario: "Designing bio-swale drainage systems across a 10,000-acre open-pit coal mine on September 13, an ecologist plants pioneer birch saplings, transforming a toxic pit into a forest sanctuary.",
    birthArchetypeContent: "Abandoned open-pit coal mine bio-swale terraforming and pioneer birch phytoremediation embody September 13 under Arcana 13 in Virgo. You lead radical land transformations, converting degraded strip-mined clay into thriving pioneer forests.",
    highFrequencyExpression: "Your land restoration work centers on open-pit coal mine bio-swale engineering, phytoremediation terraforming, pioneer forest planting, and soil ecosystem rebirth.",
    shadowChallenges: "Frustration with slow soil de-acidification timelines, risking premature tree planting before soil stabilization, or dwelling on historical industrial damage.",
    vocationAndFinance: "Reclaims industrial brownfields as an open-pit terraforming designer, soil de-acidification specialist, pioneer forestry lead, and environmental reclamation director. Revenue accrues through land restoration contracts.",
    reflectionQuestions: [
      "What damaged land system am I called to transform into a fertile pioneer forest?",
      "How can I apply bio-swale technology to accelerate soil de-acidification?",
      "Where in my career is a radical land rebirth waiting to happen?"
    ],
    faqItems: [
      {
        question: "Is September 13 an unlucky birthday in Destiny Matrix?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing soil rebirth, open-pit terraforming, and high-impact forest renewal."
      },
      {
        question: "What zodiac sign is September 13?",
        answer: "September 13 is Virgo (Earth sign), bringing analytical precision, practical care, and resilience to Arcana 13's transformative power."
      },
      {
        question: "What is the financial engine for September 13?",
        answer: "Executing open-pit mine bio-swale terraforming and carbon credit contracts for global land restoration funds."
      },
      {
        question: "Which Arcana complements September 13?",
        answer: "Arcana 19 (The Sun) brings radiant sunlight to illuminate September 13's reforestation achievements."
      }
    ],
    imageBrief: "Striking artwork of a dark terraced open-pit coal mine transforming into a lush glowing green hillside planted with white birch saplings under a clear sun, color palette of coal black, birch white, forest green, and sun gold."
  },
  14: {
    snippetAnswer: "September 14 manages estuarine salinity under Arcana 14 (Temperance). You build hydro-gate barriers across salt marsh estuaries, regulating saltwater-freshwater mixing to preserve fish nursery habitats.",
    vignetteTitle: "The Estuarine Salinity Hydrologist: Managing Salt Marsh Water Mixing Gates",
    vignetteScenario: "Operating an automated hydro-gate array across a salt marsh on September 14, a wetland hydrologist maintains 15 PSU brackish salinity, protecting juvenile fish nurseries across 5,000 acres.",
    birthArchetypeContent: "Estuarine salt marsh salinity control hydro-gates and brackish water synthesis define September 14 under Arcana 14 in Virgo. You balance ocean tide inflow and river freshwater runoff to preserve delicate coastal wetland nurseries.",
    highFrequencyExpression: "Your ecological balance work highlights estuarine salinity gate engineering, brackish water hydro-systems, salt marsh habitat preservation, and coastal hydrology.",
    shadowChallenges: "Indecision over water gate opening schedules, over-analyzing salinity sensor data, or avoiding trade negotiations with coastal development boards.",
    vocationAndFinance: "Manages coastal wetland hydrology as an estuarine salinity control architect, brackish water engineer, salt marsh restoration lead, and coastal hydro director. Income expands through engineering retainers.",
    reflectionQuestions: [
      "Am I balancing coastal land development with natural estuarine salinity mixing needs?",
      "Where in my hydrology work can I apply innovative brackish water management technology?",
      "What estuarine salinity control framework requires balancing today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 14?",
        answer: "September 14 is Virgo (Earth sign), giving analytical precision, practical care, and diplomatic balance to Arcana 14."
      },
      {
        question: "How does September 14 differ from August 14?",
        answer: "August 14 carries Leo desert oasis atmospheric moisture condensers, while September 14 carries Virgo estuarine salt marsh salinity barrier hydro-gate water synthesis."
      },
      {
        question: "What is the financial secret of September 14?",
        answer: "Designing estuarine salinity control hydro-gate systems that meet environmental restoration compliance standards."
      },
      {
        question: "Which Arcana complements September 14?",
        answer: "Arcana 8 (Justice) provides legal backing to enforce September 14's water allocation standards."
      }
    ],
    imageBrief: "Harmonious artwork of a hydrologist inspecting automated water gate barriers in a sunlit coastal salt marsh estuary surrounded by flying wading birds, color palette of marsh gold, water blue, and sun amber."
  },
  15: {
    snippetAnswer: "September 15 prosecutes flora trafficking under Arcana 15 (The Devil). You audit encrypted dark-web transactions, litigating illegal exotic plant sales logs to secure court asset forfeiture orders.",
    vignetteTitle: "The Wildlife Cyber-Prosecutor: Exposing Exotic Flora Trafficking Networks",
    vignetteScenario: "Presenting encrypted digital transaction logs in court on September 15, an environmental prosecutor dismantles an exotic orchid smuggling ring, seizing $20 million in illegal proceeds.",
    birthArchetypeContent: "Illegal rare flora cyber-trafficking litigation and digital sales log auditing define September 15 under Arcana 15 in Virgo. You use forensic digital evidence and legal sanctions to shut down dark-web networks smuggling endangered plants.",
    highFrequencyExpression: "Your legal prosecution work commands flora trafficking trial strategy, cyber transaction log auditing, digital asset forfeiture, and endangered species court protection.",
    shadowChallenges: "Aggressive hostility during courtroom cross-examinations, sensationalist legal media strategy, or neglecting personal wellbeing during complex cyber trials.",
    vocationAndFinance: "Dismantles illicit flora syndicates as a wildlife cyber-prosecutor, illegal trade litigator, digital forensic auditor, and environmental legal counsel. Earnings build through specialized trial retainers.",
    reflectionQuestions: [
      "Am I using my legal leverage to stop illegal wildlife trade or to gain trial authority?",
      "What dark-web trafficking loop or illegal flora trade am I called to challenge today?",
      "How can I bring complete legal transparency to international endangered species protection?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 15?",
        answer: "September 15 is Virgo (Earth sign), infusing Arcana 15's legal power with analytical precision, detail mastery, and courtroom focus."
      },
      {
        question: "How does September 15 differ from August 15?",
        answer: "August 15 carries Leo illegal logging timber certificate fraud litigation, while September 15 carries Virgo illegal wildlife cyber-trafficking rare flora sales log litigation."
      },
      {
        question: "What is the financial engine for September 15?",
        answer: "Auditing illegal wildlife transaction logs and litigating court asset forfeiture orders against animal traffickers."
      },
      {
        question: "Which Arcana complements September 15?",
        answer: "Arcana 14 (Temperance) provides calming balance to prevent legal litigation over-reach."
      }
    ],
    imageBrief: "Dramatic legal artwork showing a cyber-prosecutor presenting glowing digital transaction nodes on screen in a courtroom exposing illegal plant smuggling networks, color palette of court mahogany, electric cyan, and gold."
  },
  16: {
    snippetAnswer: "September 16 secures subterranean mine shafts under Arcana 16 (The Tower). You audit deep granite elevator hoist frameworks, installing steel emergency friction brakes to prevent shaft collapses.",
    vignetteTitle: "The Mine Shaft Structural Auditor: Mounting Subterranean Hoist Friction Brakes",
    vignetteScenario: "Inspecting a 4,000-foot underground mine elevator shaft on September 16, a structural auditor detects hoist cable fatigue, installing emergency friction catches to secure miners.",
    birthArchetypeContent: "Subterranean mine elevator shaft auditing and emergency friction brake mounting define September 16 under Arcana 16 in Virgo. You uncover hidden structural risks in deep mine shafts, installing fail-safe mechanical catches to prevent disasters.",
    highFrequencyExpression: "Your structural safety practice centers on mine shaft hoist auditing, elevator friction brake mounting, subterranean structural retrofitting, and mine safety compliance.",
    shadowChallenges: "Harsh delivery during municipal mine safety audits, alarming mining companies during cable testing, or halting shaft operations abruptly.",
    vocationAndFinance: "Audits deep industrial mining structures as a mine shaft safety engineer, hoist structural specialist, subterranean hazard consultant, and mine retrofitting lead. Income grows through safety compliance certifications.",
    reflectionQuestions: [
      "What hidden structural risk am I ready to identify and fix in my engineering work or life?",
      "How can I deliver subterranean safety audits with clear, solution-oriented communication?",
      "What indestructible safety foundation am I establishing for deep civil mine shafts?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 16?",
        answer: "September 16 is Virgo (Earth sign), bringing analytical precision, structural discipline, and detail mastery to The Tower."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is revealing structural vulnerabilities to build indestructible safety."
      },
      {
        question: "Which careers suit September 16 best?",
        answer: "Mine shaft structural auditing, hoist cable engineering, underground retrofitting, and elevator hazard prevention."
      },
      {
        question: "How can September 16 navigate sudden structural issues?",
        answer: "Rely on rigorous civil engineering principles and rebuild systematically from rock-solid structural foundations."
      }
    ],
    imageBrief: "Striking industrial illustration of a structural engineer holding a digital gauge inside a deep subterranean granite mine shaft elevator cage, color palette of rock granite, steel silver, and warning amber."
  },
  17: {
    snippetAnswer: "September 17 maps forest canopy biomass under Arcana 17 (The Star). You analyze orbital satellite laser lidar telemetry, generating 3D forest biomass volume maps for global carbon verification.",
    vignetteTitle: "The Orbital Lidar Satellite Analyst: Telemetering Forest Canopy Biomass",
    vignetteScenario: "Processing satellite laser lidar telemetry on September 17, an Earth observation scientist maps 3D forest biomass across 2,000,000 acres of rainforest, calculating carbon storage with 97% accuracy.",
    birthArchetypeContent: "Planetary forest canopy lidar satellite telemetry and 3D biomass volume mapping embody September 17 under Arcana 17 in Virgo. You process satellite laser telemetry, producing 3D forest structure models that guide planetary carbon accounting.",
    highFrequencyExpression: "Your spatial science practice commands canopy lidar telemetry analysis, 3D forest biomass mapping, orbital vegetation sensing, and carbon data publishing.",
    shadowChallenges: "Getting lost in theoretical lidar telemetry data without connecting with ground forestry teams, or feeling frustrated during satellite telemetry downlink delays.",
    vocationAndFinance: "Analyzes orbital lidar telemetry as a satellite laser scientist, forest canopy remote sensing director, planetary biomass analyst, and space data lead. Prosperity expands through international space data contracts.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to execute my ambitious orbital remote sensing vision?",
      "How can I use satellite canopy lidar discoveries to support global forest conservation?",
      "What Earth observation telemetry milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 17?",
        answer: "September 17 is Virgo (Earth sign), bringing analytical precision, technical methodology, and spatial vision to Arcana 17."
      },
      {
        question: "How does September 17 differ from August 17?",
        answer: "August 17 carries Leo stratospheric solar balloon ozone layer climate sensing, while September 17 carries Virgo planetary forest canopy lidar satellite 3D biomass telemetry."
      },
      {
        question: "What is the financial engine for September 17?",
        answer: "Processing and licensing orbital canopy lidar satellite biomass data for global carbon credit verification institutions."
      },
      {
        question: "Which Arcana complements September 17?",
        answer: "Arcana 21 (The World) expands September 17's satellite research onto a global international stage."
      }
    ],
    imageBrief: "Breathtaking artwork of an Earth observation satellite firing green laser pulses down onto a dense 3D green forest canopy below, color palette of cosmic blue, forest emerald green, and laser green."
  },
  18: {
    snippetAnswer: "September 18 records forest bat echolocation under Arcana 18 (The Moon). You install ultrasonic canopy microphone arrays 100 feet up in tree canopies, mapping nocturnal bat flight calls to protect rare roosting habitats.",
    vignetteTitle: "The Bat Echo-Location Bio-Acoustician: Mapping Sub-Tropical Forest Canopy Chiroptera Flight",
    vignetteScenario: "Recording nocturnal ultrasonic calls 100 feet above the forest floor on September 18, a bio-acoustician discovers a rare tree-roosting bat colony, protecting 10,000 acres from timber cutting.",
    birthArchetypeContent: "Sub-tropical forest canopy bat bio-acoustics and ultrasonic echolocation mapping define September 18 under Arcana 18 in Virgo. You study nocturnal forest canopies, using ultrasonic audio sensors to monitor bat populations and preserve roosting trees.",
    highFrequencyExpression: "Your bio-acoustics practice centers on bat echolocation recording, ultrasonic microphone deployment, nocturnal fauna tracking, and forest canopy acoustics.",
    shadowChallenges: "Superstition regarding nocturnal bat roosts, anxiety over night canopy climbing safety, or getting lost in speculative bio-acoustic theories.",
    vocationAndFinance: "Conducts forest bio-acoustic research as a bat echolocation specialist, canopy bio-acoustician, nocturnal fauna analyst, and forest reserve trustee. Grants fund ongoing acoustic research.",
    reflectionQuestions: [
      "Am I trusting my intuitive bio-acoustic findings alongside digital ultrasonic readouts?",
      "How can I apply nocturnal bat echolocation mapping to protect ancient forest canopies?",
      "What forest canopy sound mystery am I called to decode today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 18?",
        answer: "September 18 is Virgo (Earth sign), blending analytical precision with intuitive sub-surface forest bio-acoustics vision."
      },
      {
        question: "How does September 18 differ from August 18?",
        answer: "August 18 carries Leo nocturnal coral spawning bio-optics, while September 18 carries Virgo sub-tropical forest canopy bat ultrasonic bio-acoustics."
      },
      {
        question: "What is the technical superpower of September 18?",
        answer: "Mapping night forest bat echolocation calls using canopy-mounted ultrasonic microphone arrays."
      },
      {
        question: "Which Arcana complements September 18?",
        answer: "Arcana 19 (The Sun) brings radiant daylight clarity to balance Arcana 18's nocturnal forest research."
      }
    ],
    imageBrief: "Atmospheric symbolist painting of a bio-acoustician standing under a giant moonlit forest canopy holding a glowing digital ultrasonic audio sensor while bats fly silhouetted above, color palette of night indigo, emerald green, and starlight silver."
  },
  19: {
    snippetAnswer: "September 19 deploys floating reservoir solar power under Arcana 19 (The Sun). You engineer floating photovoltaic arrays on drinking water reservoirs, generating clean electricity while halting water evaporation.",
    vignetteTitle: "The Floating Solar Array Lead: Engineering Reservoir Photovoltaic Grids",
    vignetteScenario: "Anchoring 250,000 solar panels on water pontoons across a mountain reservoir on September 19, a clean energy lead generates 100MW of power while stopping 500 million gallons of evaporation.",
    birthArchetypeContent: "Floating solar photovoltaic reservoir grids and pontoon light tracking characterize September 19 under Arcana 19 in Virgo. You fuse solar power engineering with reservoir conservation, building water-based photovoltaic arrays.",
    highFrequencyExpression: "Your clean energy work commands floating solar array design, reservoir pontoon mooring, solar panel water-cooling optimization, and municipal grid expansion.",
    shadowChallenges: "Overbearing spotlight control over floating solar projects, ignoring mooring line stress during high wind reservoir gales, or masking operational delays behind PR.",
    vocationAndFinance: "Directs water-based clean energy ventures as a floating solar photovoltaic developer, reservoir array director, and municipal power executive. Revenues expand through utility power purchase contracts.",
    reflectionQuestions: [
      "Am I sharing my executive warmth to empower my solar floating array engineering team equally?",
      "How can I pace my intense drive to maintain long-term personal stamina?",
      "What floating solar array project am I ready to launch today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 19?",
        answer: "September 19 is Virgo (Earth sign), bringing analytical precision, detail mastery, and practical methodology to Arcana 19."
      },
      {
        question: "How does September 19 differ from August 19?",
        answer: "August 19 carries Leo Mojave desert solar thermal heliostat power towers, while September 19 carries Virgo floating solar photovoltaic reservoir arrays."
      },
      {
        question: "What is the financial engine for September 19?",
        answer: "Building and operating floating solar photovoltaic arrays on municipal drinking water reservoirs."
      },
      {
        question: "Which Arcana complements September 19?",
        answer: "Arcana 21 (The World) expands September 19's clean power enterprise onto a global international stage."
      }
    ],
    imageBrief: "Radiant artwork of a chief clean energy engineer inspecting a vast grid of blue floating solar panels bobbing gently on a clear mountain lake under a brilliant golden sun, color palette of lake blue, solar gold, and panel navy."
  },
  20: {
    snippetAnswer: "September 20 unlocks prehistoric plant archives under Arcana 20 (Judgement). You excavate 50,000-year-old fossilized seed deposits, using radiocarbon spectrometry to reconstruct ancient glacial flora.",
    vignetteTitle: "The Paleo-Botanical Archaeologist: Uncovering Fossilized Glacial Seed Deposits",
    vignetteScenario: "Extracting fossilized plant seeds from a subterranean glacial clay layer on September 20, an archaeologist identifies extinct flora species, publishing evolutionary plant timelines.",
    birthArchetypeContent: "Subterranean paleo-botanical seed excavation and radiocarbon plant spectrometry mark September 20 under Arcana 20 in Virgo. You unearth prehistoric seed repositories, decoding how ancient flora survived planetary climate shifts.",
    highFrequencyExpression: "Your archaeology practice highlights paleo-botanical seed excavation, radiocarbon flora spectrometry, ancient vegetation mapping, and evolutionary science publishing.",
    shadowChallenges: "Dwelling on unexcavated clay strata, harboring friction with research institution directors, or hesitating during site digs.",
    vocationAndFinance: "Directs ancient plant excavations as a paleo-botanist, seed repository curator, evolutionary archaeologist, and botanical science trustee. Grants fund archaeological digs.",
    reflectionQuestions: [
      "What prehistoric plant secret am I called to unearth for botanical science?",
      "Am I listening to my quiet inner calling or staying trapped in institutional friction?",
      "What radiocarbon seed spectrometry standard am I ready to establish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 20?",
        answer: "September 20 is Virgo (Earth sign), bringing analytical precision, technical methodology, and spatial vision to Arcana 20."
      },
      {
        question: "How does September 20 differ from August 20?",
        answer: "August 20 carries Leo metallic asteroid gamma-ray spectrometry, while September 20 carries Virgo subterranean paleo-botanical seed excavation & radiocarbon plant spectrometry."
      },
      {
        question: "Which careers suit September 20 best?",
        answer: "Paleo-botanical seed excavation, radiocarbon flora spectrometry, evolutionary archaeology, and botanical museum leadership."
      },
      {
        question: "How can September 20 overcome self-judgment?",
        answer: "Focus on active excavation research and view fossilized seed discoveries as a vital contribution to botanical science."
      }
    ],
    imageBrief: "Inspiring symbolist artwork of an archaeologist in a dark subterranean cave holding a magnifying lens over a glowing amber fossilized seed embedded in clay, color palette of earth brown, clay amber, and gold."
  },
  21: {
    snippetAnswer: "September 21 engineers deep-ocean communications under Arcana 21 (The World). You route subsea fiber-optic telecommunication cables across abyssal sea trenches, connecting isolated island archipelagos to high-speed networks.",
    vignetteTitle: "The Subsea Cable Telecommunication Lead: Routing Deep-Ocean Fiber Trenches",
    vignetteScenario: "Laying 5,000 miles of armoured subsea fiber-optic cable across abyssal sea trenches on September 21, a marine telecommunications engineer links 12 island archipelagos with high-speed internet.",
    birthArchetypeContent: "Subsea fiber-optic telecommunication routing and abyssal sea trench cable trenching define September 21 under Arcana 21 in Virgo. You engineer underwater communications infrastructure that spans open ocean basins.",
    highFrequencyExpression: "Your marine infrastructure practice commands subsea cable route survey, trenching robot operation, optical signal repeaters, and oceanic data connectivity.",
    shadowChallenges: "Over-analyzing seabed geological risk logs, delaying cable ship deployment schedules, or isolating from terrestrial network teams.",
    vocationAndFinance: "Pioneers subsea communications infrastructure as a fiber-optic cable architect, abyssal trenching director, marine telecom executive, and connectivity consultant. Profits build through bandwidth supply contracts.",
    reflectionQuestions: [
      "How can I ensure subsea fiber cable trenching preserves delicate deep-sea ecosystems?",
      "Am I building global communications connectivity while remaining personally grounded?",
      "What subsea telecommunication route milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 21?",
        answer: "September 21 is Virgo (Earth sign), bringing analytical precision, technical methodology, and global connectivity vision to Arcana 21."
      },
      {
        question: "How does September 21 differ from August 21?",
        answer: "August 21 carries Leo transcontinental high-voltage solar-wind grid treaties, while September 21 carries Virgo subsea fiber-optic telecommunication trenching across abyssal sea trenches."
      },
      {
        question: "What is the financial engine for September 21?",
        answer: "Laying subsea fiber-optic cable arrays and licensing ocean internet bandwidth to international telecom carriers."
      },
      {
        question: "Which Arcana complements September 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new subsea telecom infrastructure."
      }
    ],
    imageBrief: "Regal symbolist illustration of an underwater robotic trencher laying glowing blue fiber-optic cables along a dark deep ocean trench floor, color palette of ocean navy, electric cyan, and glowing silver."
  },
  22: {
    snippetAnswer: "September 22 marks the Autumnal Equinox cusp under Arcana 22 (The Fool / Master 22). You engineer multi-tier agroforestry windbreak guilds, planting walnut canopy trees and berry understories to shield topsoil.",
    vignetteTitle: "The Equinox Agroforestry Guild Designer: Planting Multi-Tier Topsoil Shelterbelts",
    vignetteScenario: "Planting a 50-mile multi-tier shelterbelt on September 22, an agroforestry architect places black walnut trees, hazel shrubs, and clover cover crops to eliminate wind erosion.",
    birthArchetypeContent: "Equinox multi-tier shelterbelt agroforestry and topsoil windbreak engineering mark September 22 under Arcana 22 on the Virgo-Libra cusp. You design permanent tree guilds that protect farm topsoil against gale winds.",
    highFrequencyExpression: "Your spatial forestry practice highlights multi-tier shelterbelt design, agroforestry tree guild placement, topsoil erosion prevention, and orchard landscape engineering.",
    shadowChallenges: "Planting tree guilds without checking soil moisture retention, over-spending on sapling stock, or ignoring local farm zoning guidelines.",
    vocationAndFinance: "Pioneers sustainable land design as an agroforestry guild architect, shelterbelt planner, topsoil conservation director, and farm landscape executive. Revenues build through commercial agroforestry contracts.",
    reflectionQuestions: [
      "What multi-tier tree guild design am I called to plant for agricultural land protection?",
      "Am I balancing visionary forestry goals with practical seasonal soil preparation?",
      "Where in my career am I ready to plant enduring roots on September 22?"
    ],
    faqItems: [
      {
        question: "Why is September 22 a Master Number birthday?",
        answer: "September 22 combines Master Number 22 (Master Builder) with Arcana 22 (The Fool) on the Autumnal Equinox Virgo-Libra cusp, granting capacity for monumental agroforestry guild building."
      },
      {
        question: "What zodiac sign is September 22?",
        answer: "September 22 sits on the Virgo-Libra cusp, blending Virgo analytical precision with Libra harmony and balance."
      },
      {
        question: "Which careers suit September 22 best?",
        answer: "Agroforestry guild architecture, topsoil shelterbelt design, sustainable landscape engineering, and land conservation leadership."
      },
      {
        question: "How can September 22 avoid burnout?",
        answer: "Pace long-term tree planting projects and collaborate with experienced forestry crews."
      }
    ],
    imageBrief: "Breathtaking illustration of a master builder figure standing in a sunlit agricultural field surrounded by growing rows of tall black walnut trees and fruiting bushes on the equinox, color palette of leaf green, walnut brown, and golden sun."
  },
  23: {
    snippetAnswer: "September 23 advances soil fungal biotechnology under Arcana 5 (The Hierophant). On the Autumn Equinox, you engineer underground mushroom mycelium mats, filtering toxic heavy metal run-off across industrial brownfields.",
    vignetteTitle: "The Mycelium Bioremediation Engineer: Installing Sub-Surface Fungal Filtration Mats",
    vignetteScenario: "Installing 10 acres of mushroom mycelium bio-mats 4 feet under a contaminated industrial site on September 23, a bioremediation engineer filters heavy metals from groundwater with 98% efficiency.",
    birthArchetypeContent: "Sub-surface mushroom mycelium bio-mat installation and groundwater heavy metal filtration mark September 23 under Arcana 5 in Libra. You deploy living fungal networks into soil to filter industrial pollution.",
    highFrequencyExpression: "Your clean-tech practice commands mycelium bio-mat engineering, heavy metal soil filtration, fungal bio-remediation design, and groundwater protection.",
    shadowChallenges: "Pedantic obsession over fungal culture agar assays, impatience with field site crews, or rejecting wild mycelium strains.",
    vocationAndFinance: "Directs fungal clean-tech ventures as a mycelium bio-mat engineer, soil restoration specialist, fungal genetics lead, and land remediation director. Engineering contracts generate high revenue.",
    reflectionQuestions: [
      "Am I testing mycelium bio-mats under real field groundwater flow rates?",
      "How can I scale sub-surface fungal filtration to restore larger industrial brownfields?",
      "What living fungal remediation project am I ready to install today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 23?",
        answer: "September 23 enters Libra (Air sign), infusing The Hierophant's educational mission with diplomatic balance, aesthetic harmony, and structured methodology."
      },
      {
        question: "How does September 23 differ from September 5?",
        answer: "September 5 carries Virgo biopesticide entomology textbooks, while September 23 carries Libra Autumnal Equinox mushroom mycelium sub-surface bio-mat groundwater filtration."
      },
      {
        question: "What is the financial model for September 23?",
        answer: "Installing sub-surface mushroom mycelium bio-mats for industrial land restoration projects."
      },
      {
        question: "Which Arcana complements September 23?",
        answer: "Arcana 3 (The Empress) offers fertile natural growth to support Arcana 5's teaching."
      }
    ],
    imageBrief: "Vibrant artwork of an engineer inspecting glowing white sub-surface mushroom mycelium bio-mats in a clean soil trench under an Autumnal Equinox sun halo, color palette of mycelium white, soil brown, and crisp gold."
  },
  24: {
    snippetAnswer: "September 24 unifies Venetian glass blowing workshops under Arcana 6 (The Lovers). You direct master crystal craftsmen on Murano, organizing shared furnace operations to export hand-blown art glass worldwide.",
    vignetteTitle: "The Murano Glass Atelier Lead: Directing Hand-Blown Crystal Craftsmen",
    vignetteScenario: "Coordinating 30 glass furnaces on Murano island on September 24, an atelier director forms a shared export network, supplying hand-blown crystal stemware to luxury galleries across Europe.",
    birthArchetypeContent: "Venetian hand-blown crystal glass furnace management and Murano atelier guild operations define September 24 under Arcana 6 in Libra. You bring master glassmakers together to preserve heritage crystal craft.",
    highFrequencyExpression: "Your Venetian glass art mastery centers on Murano furnace coordination, crystal annealing thermal regulation, master blower diplomacy, and fine art glass export deals.",
    shadowChallenges: "Over-complicating profit distribution formulas among glass furnace families, worrying over annealing thermal cracks, or avoiding hard negotiations with global galleries.",
    vocationAndFinance: "Heads Murano glass studios as a master glass blower, furnace plant director, luxury crystal curator, and art trade negotiator. Profits grow through hand-blown glass sales.",
    reflectionQuestions: [
      "Am I structuring artisan glass trade alliances on clear mutual values or quick price compromises?",
      "How can I preserve Murano glass blowing traditions while expanding hand-blown crystal exports?",
      "What fair-trade glass guild agreement am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 24?",
        answer: "September 24 is Libra (Air sign), bringing diplomatic harmony, aesthetic balance, and structured fairness to Arcana 6."
      },
      {
        question: "How does September 24 differ from September 6?",
        answer: "September 6 carries Virgo Piedmont roasted hazelnut grower alliances, while September 24 carries Libra Murano hand-blown crystal glass furnace artisan atelier networks."
      },
      {
        question: "What is the financial secret of September 24?",
        answer: "Structuring regional artisan glass blowing co-ops that command direct international luxury gallery export contracts."
      },
      {
        question: "Which Arcana complements September 24?",
        answer: "Arcana 4 (The Emperor) reinforces September 24's demand for administrative structure in alliances."
      }
    ],
    imageBrief: "Warm artistic graphic depicting a master glassblower holding glowing molten crystal glass on a blowpipe in a sunlit Murano glass furnace studio, color palette of furnace orange, crystal clear, and Venetian gold."
  },
  25: {
    snippetAnswer: "September 25 directs autonomous marine cargo shipping under Arcana 7 (The Chariot). You captain battery-powered electric cargo vessel trials, routing zero-emission container ships along coastal trade corridors.",
    vignetteTitle: "The Autonomous Electric Cargo Vessel Captain: Routing Coastal Zero-Emission Container Ships",
    vignetteScenario: "Navigating an electric container ship across a 300-mile coastal route on September 25, a marine transit captain moves 2,000 cargo containers with zero direct maritime emissions.",
    birthArchetypeContent: "Coastal electric container shipping and autonomous vessel navigation mark September 25 under Arcana 7 in Libra. You lead zero-emission maritime shipping projects, moving container cargo along coastal sea lanes.",
    highFrequencyExpression: "Your marine shipping practice commands electric vessel navigation, battery barge routing, coastal port automation, and zero-emission cargo transit.",
    shadowChallenges: "Impatience during maritime port safety certification, pushing battery propulsion limits in rough seas, or brusque communication with port crews.",
    vocationAndFinance: "Commands clean maritime shipping ventures as an electric cargo vessel captain, marine transit director, autonomous port executive, and shipping lead. Earnings derive from commercial freight contracts.",
    reflectionQuestions: [
      "Am I balancing high-capacity electric vessel innovation with strict maritime safety compliance?",
      "How can I lead my shipping crew to excel without creating high-pressure burnout?",
      "What zero-emission maritime freight milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 25?",
        answer: "September 25 is Libra (Air sign), giving diplomatic balance, aesthetic harmony, and transit design agility to Arcana 7."
      },
      {
        question: "How does September 25 differ from September 7?",
        answer: "September 7 carries Virgo vineyard aerial cableway crop transport, while September 25 carries Libra coastal battery-electric cargo container vessel navigation."
      },
      {
        question: "What is the technical edge of September 25?",
        answer: "Navigating 2,000-container electric cargo ships along coastal sea lanes with zero emissions."
      },
      {
        question: "Which Arcana complements September 25?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's marine shipping operations."
      }
    ],
    imageBrief: "Dynamic maritime graphic of a sleek modern blue electric container ship gliding through calm ocean water near a sunlit coastal port, color palette of ocean blue, steel silver, and sun gold."
  },
  26: {
    snippetAnswer: "September 26 adjudicates maritime shipping law under Arcana 8 (Justice). You arbitrate ocean vessel collision liability disputes, enforcing international maritime conventions to decree fair damage settlements.",
    vignetteTitle: "The Maritime Collision Arbitrator: Decreeing Ocean Vessel Liability Limits",
    vignetteScenario: "Adjudicating an international deep-sea container ship collision lawsuit on September 26, a maritime arbitrator enforces Hague-Visby rules, decreeing fair loss allocation between shipping lines.",
    birthArchetypeContent: "Maritime shipping collision law arbitration and ocean vessel liability enforcement mark September 26 under Arcana 8 in Libra. You apply international maritime conventions to decree objective fault limits in deep-sea shipping accidents.",
    highFrequencyExpression: "Your maritime legal authority commands vessel collision arbitration, Hague-Visby liability enforcement, ocean shipping loss allocation, and international maritime decrees.",
    shadowChallenges: "Hyper-critical legalistic scrutiny during admiralty hearings, rigid adherence to shipping contract checklists, or suppressing personal empathy.",
    vocationAndFinance: "Arbitrates maritime shipping cases as a vessel collision attorney, Hague-Visby legal advocate, maritime commissioner, and ocean legal trustee. Professional retainers flow from maritime insurance syndicates.",
    reflectionQuestions: [
      "Am I applying objective fairness to commercial ship captains as well as international maritime insurers?",
      "Where in my maritime legal arbitration can I establish greater liability transparency?",
      "What ocean shipping collision standard needs strict legal enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 26?",
        answer: "September 26 is Libra (Air sign), bringing diplomatic balance, ethical fairness, and structural clarity to Arcana 8."
      },
      {
        question: "How does September 26 differ from September 8?",
        answer: "September 8 carries Virgo soil heavy metal contamination litigation, while September 26 carries Libra maritime shipping collision liability arbitration & Hague-Visby decrees."
      },
      {
        question: "What is the financial rule for September 26?",
        answer: "Maintain absolute regulatory compliance and fair liability standards in all maritime legal arbitrations."
      },
      {
        question: "Which Arcana complements September 26?",
        answer: "Arcana 11 (Strength) provides stamina to support September 26's maritime arbitration hearings."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a high-seas container ship navigating blue ocean waters, color palette of ocean navy, ship blue, and gold."
  },
  27: {
    snippetAnswer: "World Tourism Day (September 27) archives deep ocean floor sediment cores under Arcana 9 (The Hermit). You catalog abyssal clay layers, analyzing micro-fossil plankton shells to reconstruct 1,000,000 years of ocean temperature shifts.",
    vignetteTitle: "The Abyssal Sediment Core Curator: Indexing Micro-Fossil Plankton Shells",
    vignetteScenario: "Sampling a 3,000-foot abyssal sediment core drilled from the Atlantic ocean floor on World Tourism Day (September 27), a marine stratigrapher archives plankton isotope shells, mapping ancient ice age ocean currents.",
    birthArchetypeContent: "Deep-sea marine sediment core repository curation and micro-fossil plankton shell analysis define September 27 under Arcana 9 in Libra. You work in subterranean core repositories, studying micro-fossils to decode prehistoric ocean temperatures.",
    highFrequencyExpression: "Your marine geology practice highlights abyssal sediment core archiving, plankton shell isotope indexing, Atlantic ocean paleoclimatology, and marine science publishing.",
    shadowChallenges: "Reclusive tendencies inside core repositories, reluctance to publish micro-fossil data, or excessive skepticism toward climate forecast models.",
    vocationAndFinance: "Curates deep-sea oceanography repositories as an abyssal sediment core specialist, marine micro-fossil archivist, oceanography researcher, and marine stratigraphy director.",
    reflectionQuestions: [
      "Am I balancing my solitary marine core archiving with open scientific collaboration?",
      "How can I apply ancient plankton shell discoveries to improve modern ocean temperature forecasting?",
      "What abyssal ocean sediment secret am I ready to catalog today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 27?",
        answer: "September 27 is Libra (Air sign), blending diplomatic balance with The Hermit's contemplative research focus."
      },
      {
        question: "How does September 27 differ from September 9?",
        answer: "September 9 carries Virgo sand dune core archives, while September 27 carries Libra deep-sea Atlantic ocean abyssal sediment micro-fossil plankton shell archives."
      },
      {
        question: "Why does September 27 thrive in marine core archives?",
        answer: "Solitary core repository focus allows September 27 to index micro-fossil plankton shells without atmospheric contamination."
      },
      {
        question: "Which Arcana complements September 27?",
        answer: "Arcana 3 (The Empress) provides fertile natural growth backing to support Arcana 9's ocean research."
      }
    ],
    imageBrief: "Mystical scientific portrait of a marine biologist examining a glowing blue abyssal sediment core tube filled with microscopic plankton shell fossils inside an ocean core vault, color palette of ocean navy, cyan, and silver."
  },
  28: {
    snippetAnswer: "September 28 stores concentrated solar power under Arcana 10 (Wheel of Fortune). You engineer molten salt thermal storage tanks, trapping 560°C liquid salt heat to run steam generators 24/7 without sunlight.",
    vignetteTitle: "The Molten Salt Thermal Engine Lead: Operating Desert Solar Storage Tanks",
    vignetteScenario: "Commissioning a 200MW molten salt thermal storage facility in the high desert on September 28, a solar energy engineer traps liquid salt heat, supplying clean electricity through the night.",
    birthArchetypeContent: "High-desert concentrated solar molten salt heat storage and liquid nitrate fluid dynamics define September 28 under Arcana 10 in Libra. You capture solar thermal heat in liquid salt tanks to deliver continuous 24-hour clean energy.",
    highFrequencyExpression: "Your thermal engineering practice highlights molten salt storage design, liquid nitrate heat exchange, solar steam turbine tuning, and clean grid expansion.",
    shadowChallenges: "Rushing thermal storage commissioning without pipe seal testing, ignoring liquid salt corrosion wear, or over-working solar site crews.",
    vocationAndFinance: "Develops solar thermal power installations as a molten salt storage engineer, solar steam turbine architect, clean power executive, and thermal energy director. Returns flow through power purchase agreements.",
    reflectionQuestions: [
      "Am I testing molten salt storage seals against extreme thermal cycles?",
      "How can I optimize liquid nitrate heat exchangers to maximize nighttime electricity output?",
      "What solar thermal storage milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 28?",
        answer: "September 28 is Libra (Air sign), giving diplomatic balance, aesthetic harmony, and engineering drive to Arcana 10."
      },
      {
        question: "How does September 28 differ from September 10?",
        answer: "September 10 carries Virgo sub-glacial meltwater ice tunnel turbines, while September 28 carries Libra high-desert concentrated solar molten salt thermal storage tanks."
      },
      {
        question: "What is the technical edge of September 28?",
        answer: "Engineering molten salt thermal storage tanks that store 560°C liquid salt heat for continuous 24/7 power generation."
      },
      {
        question: "Which Arcana complements September 28?",
        answer: "Arcana 21 (The World) expands September 28's solar energy projects onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over glowing orange molten salt thermal storage tanks at a desert solar power facility, color palette of desert amber, molten orange, and gold."
  },
  29: {
    snippetAnswer: "September 29 tracks deep abyssal marine life under Arcana 11 (Strength / Master 11). You deploy deep-sea hydrophone arrays 3,000 feet down, mapping giant squid acoustic pulses to protect trench sanctuaries.",
    vignetteTitle: "The Abyssal Cephalopod Hydrophone Lead: Mapping Deep Trench Giant Squid Pulses",
    vignetteScenario: "Deploying deep-sea hydrophone arrays into an ocean trench on September 29, a marine biologist records low-frequency giant squid bio-acoustic signals, establishing a 5,000-square-mile abyssal sanctuary.",
    birthArchetypeContent: "Deep ocean trench giant squid hydrophone tracking and abyssal bio-acoustics mark September 29 under Arcana 11 in Libra. You conduct deep ocean acoustic research, using physical stamina to map rare cephalopod trench habitats.",
    highFrequencyExpression: "Your abyssal marine research centers on giant squid hydrophone recording, ocean trench acoustic mapping, deep-sea cephalopod conservation, and marine fauna leadership.",
    shadowChallenges: "Physical fatigue during deep-sea hydrophone deployment shifts, frustration with slow ocean research funding, or neglecting personal rest.",
    vocationAndFinance: "Leads deep ocean fauna conservation as an abyssal cephalopod biologist, ocean trench sanctuary chief, marine habitat director, and ocean foundation trustee. Grants support subsea acoustic research.",
    reflectionQuestions: [
      "How can I maintain my physical stamina during grueling deep-sea hydrophone deployment shifts?",
      "Am I applying quiet somatic composure rather than force when protecting abyssal marine habitats?",
      "What deep ocean cephalopod reserve initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Why is September 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and quiet somatic mastery over deep-sea fauna."
      },
      {
        question: "What zodiac sign is September 29?",
        answer: "September 29 is Libra (Air sign), adding diplomatic balance, aesthetic harmony, and ocean connection to Arcana 11's intense strength."
      },
      {
        question: "How does September 29 differ from September 11?",
        answer: "September 11 carries Virgo sub-arctic permafrost foundation engineering, while September 29 carries Libra deep ocean trench giant squid hydrophone bio-acoustics."
      },
      {
        question: "What is the health key for September 29?",
        answer: "Regular physical grounding practices and systematic hydration recovery between subsea research shifts."
      }
    ],
    imageBrief: "Inspiring artwork of a marine biologist in a research submersible watching a glowing giant squid glide past deep ocean hydrophone sensors in dark blue trench water, color palette of abyssal navy, glowing cyan, and gold."
  },
  30: {
    snippetAnswer: "September 30 refines pomegranate seed oil under Arcana 3 (The Empress). You operate pomegranate orchard biorefineries, extracting high-purity punicic acid polyphenols for luxury anti-aging skincare.",
    vignetteTitle: "The Pomegranate Seed Oil Bio-Refiner: Extracting Punicic Acid Polyphenols",
    vignetteScenario: "Extracting punicic acid lipid polyphenols at a 200-acre pomegranate orchard facility on September 30, a bio-refinery executive supplies high-purity seed oil to global cosmetic brands.",
    birthArchetypeContent: "Organic pomegranate seed pressing and punicic acid polyphenol bio-refining define September 30 under Arcana 3 in Libra. You operate specialized cold-pressing units, converting pomegranate seed residue into high-value pharmaceutical lipids and cosmetics.",
    highFrequencyExpression: "Your botanical bio-refining practice highlights pomegranate seed pressing, punicic acid purification, lipid polyphenol processing, and luxury skincare scaling.",
    shadowChallenges: "Protective secrecy over seed extraction formulas, excessive media posturing, or over-spending on biorefinery capital equipment.",
    vocationAndFinance: "Heads botanical lipid processing as a pomegranate bio-refinery CEO, punicic acid extract founder, organic cosmetics supplier, and botanical chemist. Corporate supply contracts generate high revenues.",
    reflectionQuestions: [
      "How can I scale pomegranate seed oil biorefineries to meet global organic cosmetic demand?",
      "Am I balancing my visionary bio-refining drive with practical refinery unit costs?",
      "What organic pomegranate extract project am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is September 30?",
        answer: "September 30 is Libra (Air sign), bringing diplomatic balance, aesthetic elegance, and technical precision to The Empress."
      },
      {
        question: "How does September 30 differ from August 30?",
        answer: "August 30 carries Virgo coastal micro-algae biorefinery plant protein extraction, while September 30 carries Libra organic pomegranate seed oil punicic acid polyphenol bio-refining."
      },
      {
        question: "What is the financial engine for September 30?",
        answer: "Refining and supplying organic pomegranate punicic acid seed oil to global pharmaceutical and cosmetic conglomerates."
      },
      {
        question: "Which Arcana complements September 30?",
        answer: "Arcana 4 (The Emperor) provides structural manufacturing execution to support Arcana 3's bio-refinery growth."
      }
    ],
    imageBrief: "Rich technical illustration of a chemist inspecting glass beakers filled with deep red golden pomegranate seed oil inside a sunlit laboratory, color palette of pomegranate red, golden amber, and clean white."
  }
};

export function getSeptemberProfile(day: number): BirthdayProfileData {
  const custom = SEPTEMBER_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `September ${day}`;
  const slug = `september-${day}`;

  const phaseText = day <= 10 ? `early September Virgo soil harvest phase of day ${day}` : day <= 22 ? `mid-September Virgo-Libra equinox cusp phase of day ${day}` : `late-September Libra air balance phase of day ${day}`;
  const seasonalContext = `Early autumn equinox transition and soil harvest vitality mark the ${phaseText}.`;
  const dayVibrationNote = `${formattedDate} combines this early-autumn energy with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 31 : day - 1;
  const nextDay = day === 30 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'August 31' : `September ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 31 ? "August closing late-summer threshold" : `Preceding September ${prevDay} vibration`,
      bestFocus: `Consolidating earlier September ${prevDay} momentum`,
      keyContrast: `Paves the way for Arcana ${primaryArcanaNum} expression on September ${day}.`
    },
    {
      dateLabel: formattedDate,
      arcanaNum: primaryArcanaNum,
      arcanaName: primaryArcana.name,
      coreTheme: custom?.vignetteTitle || `${primaryArcana.name} activation`,
      bestFocus: `Anchoring unique September ${day} profile strengths`,
      keyContrast: `Your individual September ${day} archetype focus.`,
      isCurrentDay: true
    },
    {
      dateLabel: day === 30 ? 'October 1' : `September ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: `Emerging September ${nextDay} expansion`,
      bestFocus: `Advancing toward September ${nextDay} wisdom`,
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} qualities.`
    }
  ];

  return {
    slug,
    month: 'September',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of September seasonal focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
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
        answer: day <= 22 ? `${formattedDate} falls under Virgo (Earth sign), bringing analytical precision, practical care, and detail mastery.` : `${formattedDate} falls under Libra (Air sign), bringing diplomatic balance, aesthetic harmony, and relationship equilibrium.`
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
