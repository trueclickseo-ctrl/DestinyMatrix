import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const OCTOBER_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "October 1 pioneers quantum optics under Arcana 1 (The Magician). You construct cold-atom lattice interferometers, using laser cooling to synchronize atomic quantum clocks for deep-space navigation.",
    vignetteTitle: "The Quantum Optics Architect: Synchronizing Cold-Atom Lattice Clocks",
    vignetteScenario: "Cooling rubidium atoms to micro-Kelvin temperatures in a laser trap on October 1, a quantum physicist achieves 10-18 atomic clock precision for interplanetary guidance.",
    birthArchetypeContent: "Cold-atom lattice interferometry and laser quantum clock synchronization define October 1 under Arcana 1 in Libra. You build optical lattice traps that measure gravitational micro-shifts.",
    highFrequencyExpression: "Your optical physics talent excels in laser trap alignment, rubidium atom cooling, quantum clock calibration, and deep-space guidance optics.",
    shadowChallenges: "Over-tuning laser frequency locks, doubting atomic trap stability during beam trials, or abrupt laboratory communication.",
    vocationAndFinance: "Invents quantum instruments as a cold-atom physicist, optical clock developer, space guidance strategist, and quantum startup founder. Commercial licensing yields strong revenues.",
    reflectionQuestions: [
      "Am I deploying my cold-atom quantum lattice concepts into commercial satellite systems?",
      "How can I channel Libra balance into precise optical laser beam tuning?",
      "What atomic clock precision milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 1?",
        answer: "October 1 is Libra (Air sign), bringing diplomatic harmony, aesthetic balance, and analytical clarity to Arcana 1."
      },
      {
        question: "How does October 1 differ from September 1?",
        answer: "September 1 carries Virgo glasshouse pollination micro-drones, while October 1 carries Libra cold-atom lattice interferometry and laser quantum clocks."
      },
      {
        question: "What is the financial engine for October 1?",
        answer: "Manufacturing and licensing optical lattice atomic clocks for global space navigation agencies."
      },
      {
        question: "Which Arcana complements October 1?",
        answer: "Arcana 5 (The Hierophant) offers educational frameworks to publish October 1's quantum optics patents."
      }
    ],
    imageBrief: "Clean high-tech graphic of a quantum physicist aligning glowing violet laser beams inside a vacuum chamber cooling rubidium atoms, color palette of quantum violet, electric cyan, and silver."
  },
  2: {
    snippetAnswer: "October 2 uncovers subterranean cave water signals under Arcana 2 (The High Priestess). You analyze stalagmite calcite isotope liquid chromatography, decoding 100,000 years of cavern drip hydrology.",
    vignetteTitle: "The Karst Hydro-Geologist: Mapping Subterranean Cavern Drip Isotope Cycles",
    vignetteScenario: "Sampling cave drip water 300 feet underground on October 2, a hydro-geologist isolates calcite oxygen isotopes, uncovering prehistoric rainfall patterns.",
    birthArchetypeContent: "Subterranean karst cave hydro-geology and stalagmite calcite isotope liquid chromatography define October 2 under Arcana 2 in Libra. You study cavern drip water chemistry to decode ancient planetary water table shifts.",
    highFrequencyExpression: "Your speleology work excels in cavern drip sampling, calcite isotope extraction, karst hydro-mapping, and quiet subterranean water research.",
    shadowChallenges: "Reclusive tendencies in subterranean caverns, hesitation to present findings to regional water authorities, or solitary withdrawal.",
    vocationAndFinance: "Researches cave hydrology as a karst speleologist, drip water geochemist, subterranean hydro-analyst, and groundwater advisor. Research grants fund cavern studies.",
    reflectionQuestions: [
      "Am I trusting my intuitive speleological insights alongside lab isotope readouts?",
      "How can I share my cavern drip discoveries to protect vulnerable karst aquifers?",
      "What subterranean cave water secret am I called to illuminate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 2?",
        answer: "October 2 is Libra (Air sign), giving aesthetic harmony, intuitive depth, and analytical balance to The High Priestess."
      },
      {
        question: "How does October 2 differ from September 2?",
        answer: "September 2 carries Virgo root exudate terpene chromatography, while October 2 carries Libra karst cave stalagmite calcite isotope drip chromatography."
      },
      {
        question: "What is the key to success for October 2?",
        answer: "Patient laboratory analysis of delicate subterranean cave drip water isotope signals."
      },
      {
        question: "Which Arcana complements October 2?",
        answer: "Arcana 3 (The Empress) provides natural growth backing to support October 2's hydro-geological discoveries."
      }
    ],
    imageBrief: "Mystical symbolist painting of a scientist holding a glowing amber vial under a cave stalagmite inside a subterranean crystal cavern, color palette of cavern dark blue, amber gold, and stalactite white."
  },
  3: {
    snippetAnswer: "October 3 advances calming phytomedicine under Arcana 3 (The Empress). You operate passionflower bio-reactors, crystallizing passiflora flavonoids to formulate organic botanical sleep therapeutics.",
    vignetteTitle: "The Passionflower Flavonoid Bio-Refiner: Crystallizing Calming Phytomedicines",
    vignetteScenario: "Extracting passiflora flavonoids from 100 acres of passionflower vines on October 3, a bio-refinery executive formulates non-sedative botanical therapeutics.",
    birthArchetypeContent: "Organic passionflower vine extraction and flavonoid crystallization mark October 3 under Arcana 3 in Libra. You refine autumn botanical harvests into high-purity pharmaceutical calmants.",
    highFrequencyExpression: "Your botanical processing skill excels in passionflower harvesting, passiflora flavonoid crystallization, calming formula design, and organic refining.",
    shadowChallenges: "Guarding extraction methods too secretively, impatience during vine crystallization cycles, or over-capitalizing refinery machinery.",
    vocationAndFinance: "Formulates botanical calmants as a passionflower refinery founder, passiflora chemist, herbal therapeutic lead, and green formulation executive. High-margin cosmetics supply drives profits.",
    reflectionQuestions: [
      "How can I turn autumn passionflower harvests into valuable calming bio-products?",
      "Am I balancing creative phytomedicine methods with practical processing budgets?",
      "What passionflower flavonoid formula am I ready to produce today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 3?",
        answer: "October 3 is Libra (Air sign), infusing The Empress's creative fertility with aesthetic elegance, diplomatic harmony, and technical care."
      },
      {
        question: "How does October 3 differ from September 3?",
        answer: "September 3 carries Virgo vineyard pomace composting, while October 3 carries Libra organic passionflower flavonoid bio-refining for calming therapeutics."
      },
      {
        question: "What is the financial engine for October 3?",
        answer: "Refining and supplying organic passionflower flavonoids for global pharmaceutical and wellness conglomerates."
      },
      {
        question: "Which Arcana complements October 3?",
        answer: "Arcana 4 (The Emperor) provides structural manufacturing discipline to support Arcana 3's biorefinery growth."
      }
    ],
    imageBrief: "Lush modern illustration of a chemist holding a flask of purple passionflower extract in a sunlit vine greenhouse, color palette of passionflower purple, golden amber, and leaf green."
  },
  4: {
    snippetAnswer: "October 4 dismantles marine steel jackets under Arcana 4 (The Emperor). You direct deepwater oil platform decommissioning, calculating explosive diamond wire cutting vectors to remove 5,000-ton steel legs.",
    vignetteTitle: "The Deepwater Platform Dismantling Lead: Executing Diamond Wire Subsea Cuts",
    vignetteScenario: "Severing a 400-foot underwater oil platform steel jacket leg on October 4, an offshore structural engineer removes an obsolete rig without marine environmental spill.",
    birthArchetypeContent: "Offshore platform decommissioning and subsea diamond wire cutting calculation define October 4 under Arcana 4 in Libra. You execute high-impact marine structural removals, dismantling obsolete offshore rigs safely.",
    highFrequencyExpression: "Your subsea engineering authority shines in diamond wire cutting, marine jacket removal, rig salvage auditing, and offshore safety compliance.",
    shadowChallenges: "Uncompromising stubbornness during oil rig contract disputes, rigid adherence to cut schedules, or tension during heavy lift operations.",
    vocationAndFinance: "Manages offshore rig removals as a subsea demolition engineer, platform decommissioning chief, marine salvage strategist, and offshore civil consultant. Salvage contracts generate steady income.",
    reflectionQuestions: [
      "Am I leading my offshore engineering crew with clear direction or rigid demands?",
      "Where in my subsea civil projects can I deploy high-precision diamond wire cutting technology?",
      "What marine rig decommissioning milestone am I ready to accomplish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 4?",
        answer: "October 4 is Libra (Air sign), giving aesthetic harmony, structural discipline, and diplomatic balance to Arcana 4."
      },
      {
        question: "How does October 4 differ from September 4?",
        answer: "September 4 carries Virgo alpine rockfall cable nets, while October 4 carries Libra offshore platform decommissioning and subsea diamond wire cutting."
      },
      {
        question: "Which careers suit October 4 best?",
        answer: "Offshore platform decommissioning, subsea structural engineering, rig removal direction, and marine heavy lift consultancy."
      },
      {
        question: "How can October 4 ensure project success?",
        answer: "Combine rigorous subsea engineering standards with adaptability to ocean wave conditions."
      }
    ],
    imageBrief: "Commanding marine engineering artwork showing a chief offshore engineer inspecting subsea diamond wire cutting equipment on a crane vessel next to a massive oil platform jacket, color palette of ocean blue, steel grey, and crane yellow."
  },
  5: {
    snippetAnswer: "October 5 advances geothermal hydro-geology education under Arcana 5 (The Hierophant). You author volcanic aquifer pressure charters, establishing sub-surface thermal flow standards for geophysics programs.",
    vignetteTitle: "The Geothermal Hydro-Geology Chair: Authoring Volcanic Aquifer Curricula",
    vignetteScenario: "Publishing a geothermal reservoir geophysics textbook on October 5, a hydro-geologist trains researchers to model subterranean hot rock water recharge.",
    birthArchetypeContent: "Academic geothermal hydro-geology textbooks and volcanic aquifer pressure charters mark October 5 under Arcana 5 in Libra. You turn sub-surface thermal hydrology into university curricula, preparing geophysicists to tap subterranean energy safely.",
    highFrequencyExpression: "Your geophysics teaching excels in volcanic aquifer analysis, geothermal pressure modeling, sub-surface thermal lecturing, and clean energy education.",
    shadowChallenges: "Dogmatic insistence on traditional reservoir models, frustration over student lab data delays, or perfectionist textbook editing.",
    vocationAndFinance: "Heads geothermal geophysics departments as a reservoir dynamics chair, volcanic aquifer author, thermal hydro-geologist, and clean energy policy advisor. Revenues accrue through publishing royalties.",
    reflectionQuestions: [
      "Am I grounding my geothermal hydro-geology teaching in practical hot rock well pressure trials?",
      "How can I simplify subterranean thermal aquifer dynamics for upcoming geophysics students?",
      "What volcanic reservoir hydro-geology charter am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 5?",
        answer: "October 5 is Libra (Air sign), infusing The Hierophant's educational mission with aesthetic balance, diplomatic clarity, and academic rigor."
      },
      {
        question: "How does October 5 differ from September 5?",
        answer: "September 5 carries Virgo biopesticide entomology textbooks, while October 5 carries Libra academic geothermal hydro-geology & volcanic aquifer pressure textbooks."
      },
      {
        question: "What is the financial engine for October 5?",
        answer: "Authoring geothermal hydro-geology textbooks and advising global clean energy governance boards."
      },
      {
        question: "Which Arcana complements October 5?",
        answer: "Arcana 3 (The Empress) provides natural growth backing to support Arcana 5's educational mission."
      }
    ],
    imageBrief: "Inspiring illustration of a geophysics professor teaching students near a sunlit geothermal steam well holding a digital temperature probe, color palette of steam white, rock grey, and amber."
  },
  6: {
    snippetAnswer: "October 6 forms Bavarian organic hops grower co-operatives via Arcana 6 (The Lovers). You organize Hallertau hop yards, operating warm-air kiln drying facilities to feed continental micro-breweries.",
    vignetteTitle: "The Bavarian Hops Kiln Lead: Managing Hallertau Drying Facilities",
    vignetteScenario: "Unifying 45 Hallertau hop yard growers in Bavaria on October 6, a co-op lead oversees kiln drying plants that supply kiln-dried hop resins to craft brewmasters.",
    birthArchetypeContent: "Hallertau hop yard management and kiln drying plant operations characterize October 6 via Arcana 6 in Libra. You organize European hop growers into equitable hop export federations.",
    highFrequencyExpression: "Your brewing trade mastery highlights Hallertau hop yard organization, kiln temperature regulation, craft brewery diplomacy, and hop export contracts.",
    shadowChallenges: "Anxiety over hop cone lupulin moisture levels, friction with traditional brewmasters, or delaying export logistics.",
    vocationAndFinance: "Directs hop harvesting co-ops as a Hallertau kiln manager, lupulin extraction specialist, and craft beer exporter. Dividends grow through shared hop exports.",
    reflectionQuestions: [
      "Am I structuring hops trade alliances on clear mutual values or quick price compromises?",
      "How can I preserve Bavarian hop yard traditions while expanding kiln-dried hop exports?",
      "What fair-trade craft brewing supply agreement am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 6?",
        answer: "October 6 is Libra (Air sign), bringing diplomatic harmony, aesthetic elegance, and structured fairness to Arcana 6."
      },
      {
        question: "How does October 6 differ from September 6?",
        answer: "September 6 carries Virgo Piedmont roasted hazelnut co-ops, while October 6 carries Libra Bavarian organic Hallertau hops kiln drying grower alliances."
      },
      {
        question: "What is the financial key for October 6?",
        answer: "Structuring high-value organic hops co-operatives with direct international craft brewery export contracts."
      },
      {
        question: "Which Arcana complements October 6?",
        answer: "Arcana 4 (The Emperor) provides structural governance to anchor Arcana 6's agricultural deals."
      }
    ],
    imageBrief: "Warm graphic depicting a Bavarian hop farmer holding fresh green hop cones in a sunlit hop yard near a drying kiln, color palette of hop green, warm amber, and sun gold."
  },
  7: {
    snippetAnswer: "October 7 builds urban eVTOL air-taxi corridors under Arcana 7 (The Chariot). You direct automated electric vertical takeoff aircraft routing, managing vertiport passenger departure slots across city skylines.",
    vignetteTitle: "The eVTOL Air-Taxi Flight Director: Routing Urban Vertiport Corridors",
    vignetteScenario: "Routing 100 electric air-taxis across a metropolitan vertiport network on October 7, a transit engineer moves 2,000 commuters at 150mph with zero noise impact.",
    birthArchetypeContent: "Electric vertical takeoff air-taxi routing and urban vertiport corridor management define October 7 under Arcana 7 in Libra. You design aerial urban transit networks that fly passengers across crowded cities.",
    highFrequencyExpression: "Your aerial mobility skills shine in electric air-taxi routing, vertiport corridor design, propeller noise suppression, and urban transit logistics.",
    shadowChallenges: "Frustration over civil aviation regulatory clearance, pushing battery range limits, or short-tempered communication with ground vertiport crews.",
    vocationAndFinance: "Pioneers urban air mobility as an eVTOL flight control lead, vertiport transit architect, urban aerial director, and aviation tech founder. Vertiport network expansion brings strong profits.",
    reflectionQuestions: [
      "Am I balancing eVTOL air-taxi speed with strict civil aviation safety compliance?",
      "How can I inspire my transit engineering team during complex vertiport operations?",
      "What zero-emission urban aerial transit milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 7?",
        answer: "October 7 is Libra (Air sign), giving aesthetic harmony, diplomatic balance, and transit engineering agility to Arcana 7."
      },
      {
        question: "How does October 7 differ from September 7?",
        answer: "September 7 carries Virgo vineyard aerial cableways, while October 7 carries Libra automated electric eVTOL air-taxi urban vertiport transit corridors."
      },
      {
        question: "What is the technical edge of October 7?",
        answer: "Routing 100 passenger eVTOL air-taxis across urban vertiports at 150mph with zero direct emissions."
      },
      {
        question: "Which Arcana complements October 7?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's transit flight operations."
      }
    ],
    imageBrief: "Dynamic aerial transit graphic showing a sleek white electric eVTOL aircraft gliding past sunlit skyscrapers toward a rooftop vertiport pad, color palette of sky blue, white, and gold."
  },
  8: {
    snippetAnswer: "October 8 adjudicates subsea cable landing rights through Arcana 8 (Justice). You resolve international submarine telecommunication cable landing rights disputes, validating coastal easement permissions for ocean data networks.",
    vignetteTitle: "The Subsea Cable Landing Arbitrator: Validating Coastal Easement Access",
    vignetteScenario: "Settling a subsea fiber cable landing dispute on October 8, a subsea ocean rights advocate enforces international telecommunication treaties, validating coastal easement permissions for subsea cables.",
    birthArchetypeContent: "Subsea telecommunication cable landing rights arbitration and coastal easement validation characterize October 8 via Arcana 8 in Libra. You apply international maritime law to allocate subsea cable landing corridors fairly.",
    highFrequencyExpression: "Your ocean legal expertise validates subsea cable landing access, coastal easement rights, submarine pipeline permits, and marine telecom compliance.",
    shadowChallenges: "Overly rigid legalistic demands during cable tribunal hearings, inflexible adherence to landing contract checklists, or emotional detachment.",
    vocationAndFinance: "Settles submarine network disputes as a subsea telecom attorney, coastal easement advocate, landing commissioner, and telecom legal trustee. Retainers flow from subsea network consortia.",
    reflectionQuestions: [
      "Am I applying objective fairness to subsea cable operators as well as coastal municipal authorities?",
      "Where in my subsea legal work can I establish greater cable landing transparency?",
      "What submarine cable protection standard needs strict legal enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 8?",
        answer: "October 8 is Libra (Air sign), bringing diplomatic balance, ethical fairness, and structural clarity to Arcana 8."
      },
      {
        question: "How does October 8 differ from September 8?",
        answer: "September 8 carries Virgo soil heavy metal contamination litigation, while October 8 carries Libra subsea telecommunication cable landing rights arbitration & coastal easement decrees."
      },
      {
        question: "What is the financial rule for October 8?",
        answer: "Maintain absolute regulatory compliance and fair coastal access standards in all subsea cable landing projects."
      },
      {
        question: "Which Arcana complements October 8?",
        answer: "Arcana 11 (Strength) provides stamina to support October 8's subsea legal arbitration cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over subsea fiber cable landing stations on a sunlit coastline, color palette of sea blue, station white, and gold."
  },
  9: {
    snippetAnswer: "October 9 archives alpine cave ice crystal cores through Arcana 9 (The Hermit). You document 50,000-year-old glacier ice crystal cores drilled inside high-altitude karst caves, examining ice crystal drip strata to reconstruct paleoclimate history.",
    vignetteTitle: "The Cave Ice Crystal Curator: Documenting High-Alpine Melt Layer Isotope Records",
    vignetteScenario: "Examining an ice crystal core drilled inside an alpine cave 9,000 feet high on October 9, a high-mountain glaciologist preserves ice crystal drip strata, mapping ancient mountain temperature cycles.",
    birthArchetypeContent: "High-alpine cave ice crystal core repository curation and melt layer isotope analysis characterize October 9 via Arcana 9 in Libra. You work in quiet ice cave vaults, cataloging ancient ice crystal layers to decode mountain climate history.",
    highFrequencyExpression: "Your speleoglaciology research documents high-alpine ice crystal cores, cave melt layer isotopes, and prehistoric mountain temperature cycles.",
    shadowChallenges: "Solitary withdrawal inside alpine ice caves, reluctance to release melt layer data to research teams, or excessive skepticism toward climate forecasts.",
    vocationAndFinance: "Preserves high-altitude climate records as an ice crystal core specialist, cave ice archivist, speleoglaciologist, and mountain ice director. Research grants sustain vault operations.",
    reflectionQuestions: [
      "Am I balancing my solitary cave ice archiving with open scientific collaboration?",
      "How can I apply ancient mountain ice discoveries to inform modern climate policy?",
      "What alpine cave ice secret am I ready to catalog today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 9?",
        answer: "October 9 is Libra (Air sign), blending aesthetic harmony and diplomatic balance with The Hermit's contemplative research focus."
      },
      {
        question: "How does October 9 differ from September 9?",
        answer: "September 9 carries Virgo sand dune core archives, while October 9 carries Libra high-alpine cave ice crystal melt layer isotope archives."
      },
      {
        question: "Why does October 9 thrive in ice cave vaults?",
        answer: "Solitary ice cave vault focus allows October 9 to index delicate melt layers without surface temperature contamination."
      },
      {
        question: "Which Arcana complements October 9?",
        answer: "Arcana 3 (The Empress) offers natural fertile growth backing to support October 9's ice research."
      }
    ],
    imageBrief: "Mystical scientific portrait of a researcher examining a glowing ice crystal core cylinder inside a subterranean alpine ice cave lined with clear crystal walls, color palette of ice cyan, deep blue, and starlight silver."
  },
  10: {
    snippetAnswer: "October 10 captures estuarine blue energy power under Arcana 10 (Wheel of Fortune). You engineer pressure-retarded osmosis (PRO) blue energy hydro-turbines, converting salinity difference between river freshwater and sea saltwater into 24/7 clean electricity.",
    vignetteTitle: "The Salinity Gradient Blue Energy Lead: Operating Pressure-Retarded Osmosis Turbines",
    vignetteScenario: "Commissioning a 20MW blue energy salinity gradient plant on October 10, a hydrokinetic engineer uses semi-permeable membranes to generate continuous electricity where rivers meet the sea.",
    birthArchetypeContent: "Estuarine salinity gradient pressure-retarded osmosis (PRO) hydro-turbines define October 10 under Arcana 10 in Libra. You convert river-sea salinity differences into continuous clean electricity for coastal communities.",
    highFrequencyExpression: "Your blue energy innovations focus on PRO turbine calibration, osmotic membrane pressure tuning, estuarine intake design, and renewable grid integration.",
    shadowChallenges: "Deploying PRO osmotic membranes without verifying anti-biofouling filters, ignoring river salinity shifts, or pushing plant crews past safety limits.",
    vocationAndFinance: "Engineers estuarine energy systems as a PRO turbine developer, salinity gradient strategist, blue power executive, and hydro-clean director. Energy purchase agreements generate long-term cash flow.",
    reflectionQuestions: [
      "Am I testing PRO semi-permeable membranes against extreme water bio-fouling?",
      "How can I optimize river-sea salinity mixing to maximize continuous power output?",
      "What estuarine blue energy milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 10?",
        answer: "October 10 is Libra (Air sign), giving aesthetic harmony, diplomatic balance, and engineering drive to Arcana 10."
      },
      {
        question: "How does October 10 differ from September 10?",
        answer: "September 10 carries Virgo sub-glacial meltwater ice tunnel turbines, while October 10 carries Libra estuarine salinity gradient pressure-retarded osmosis (PRO) blue energy turbines."
      },
      {
        question: "What is the technical secret of October 10?",
        answer: "Engineering PRO blue energy turbines that convert freshwater-saltwater salinity differences into continuous 24/7 power."
      },
      {
        question: "Which Arcana complements October 10?",
        answer: "Arcana 21 (The World) expands October 10's blue energy projects onto a global international stage."
      }
    ],
    imageBrief: "Regal symbolist graphic of a golden celestial wheel turning over a glowing blue PRO hydro-turbine operating at a river estuary mouth, color palette of ocean turquoise, electric cyan, and gold."
  },
  11: {
    snippetAnswer: "October 11 guards alpine ibex sanctuaries under Arcana 11 (Strength / Master 11). You lead sheer mountain wall patrols, installing radio collar telemetry to protect endangered ibex herds across 300,000 acres of high-altitude cliffs.",
    vignetteTitle: "The Alpine Ibex Sanctuary Warden: Safeguarding Sheer Mountain Cliff Ranges",
    vignetteScenario: "Patrolling 11,000-foot granite cliffs on October 11, a wildlife biologist uses VHF radio collar telemetry to track alpine ibex breeding herds, stopping illegal cliff poaching.",
    birthArchetypeContent: "High-altitude alpine ibex cliff wall defense and radio collar telemetry mark October 11 under Arcana 11 in Libra. You lead extreme mountain cliff wilderness patrols, using physical stamina to protect agile ungulate species.",
    highFrequencyExpression: "Your wildlife conservation leadership shines in ibex herd monitoring, radio telemetry fitting, mountain ridge patrols, and ungulate protection.",
    shadowChallenges: "Physical exhaustion during steep cliff foot patrols, frustration with illegal poachers, or neglecting personal rest.",
    vocationAndFinance: "Leads alpine fauna conservation as an ibex biologist, cliff sanctuary chief, wildlife habitat director, and high-altitude foundation trustee. Grants support mountain patrol operations.",
    reflectionQuestions: [
      "How can I protect my physical stamina while conducting long steep cliff patrols?",
      "Am I applying quiet somatic composure rather than force when protecting mountain wildlife?",
      "What alpine ibex cliff sanctuary initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Why is October 11 a Master Number birthday?",
        answer: "Because 11 is a Master Number in numerology, granting extraordinary spiritual intuition, physical stamina, and quiet somatic mastery over high-altitude wilderness."
      },
      {
        question: "What zodiac sign is October 11?",
        answer: "October 11 is Libra (Air sign), adding aesthetic harmony, diplomatic balance, and cliff connection to Arcana 11's intense strength."
      },
      {
        question: "How does October 11 differ from September 11?",
        answer: "September 11 carries Virgo sub-arctic permafrost foundation engineering, while October 11 carries Libra high-altitude alpine ibex cliff sanctuary defense."
      },
      {
        question: "What is the health key for October 11?",
        answer: "Regular physical grounding practices and systematic hydration recovery between mountain cliff patrol shifts."
      }
    ],
    imageBrief: "Inspiring illustration of a calm wildlife warden standing on a steep mountain ledge watching horn-crested alpine ibex climb a granite cliff under a sunlit sky, color palette of granite grey, sky blue, and gold."
  },
  12: {
    snippetAnswer: "October 12 upcycles cider press residues via Arcana 12 (The Hanged Man). You process discarded apple pomace bark into bio-based leather alternative materials and natural pectin biopolymers.",
    vignetteTitle: "The Apple Bark Bio-Leather Refiner: Repurposing Pomace Residue into Biomaterials",
    vignetteScenario: "Processing autumn fruit waste on October 12, a circular material engineer manufactures durable plant-based bio-leather sheets for eco-apparel manufacturers.",
    birthArchetypeContent: "Apple pomace pulp fermentation bio-refining and plant-based bio-leather synthesis characterize October 12 via Arcana 12 in Libra. You invert food processing waste, repurposing discarded apple press bark into sustainable bio-materials.",
    highFrequencyExpression: "Your sustainable materials innovation repurposes apple pomace waste into bio-leather sheets, pectin biopolymers, and eco-fashion textiles.",
    shadowChallenges: "Doubt during fruit fiber fermentation trials, impatience with material curing times, or over-spending on press vats.",
    vocationAndFinance: "Formulates plant leather as an apple pomace material innovator, biopolymer chemist, and sustainable fashion supplier. Commercial returns grow through bio-material patents.",
    reflectionQuestions: [
      "What agricultural waste stream requires me to flip my design perspective completely?",
      "Am I balancing my non-profit environmental work with commercial financial growth?",
      "What apple bio-leather manufacturing technology am I ready to deploy today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 12?",
        answer: "October 12 is Libra (Air sign), giving aesthetic harmony, detail mastery, and practical methodology to The Hanged Man."
      },
      {
        question: "How does October 12 differ from September 12?",
        answer: "September 12 carries Virgo sawmill timber lignin refining, while October 12 carries Libra apple pomace bark bio-leather fermentation and biopolymer synthesis."
      },
      {
        question: "What is the core lesson for October 12?",
        answer: "Learning that upcycling discarded apple pomace turns fruit waste into valuable sustainable bio-leather materials."
      },
      {
        question: "Which Arcana complements October 12?",
        answer: "Arcana 4 (The Emperor) provides structural backing to execute October 12's refining operations."
      }
    ],
    imageBrief: "Mystical modern artwork showing apple pomace passing through a glowing golden bio-vat producing rich brown bio-leather material sheets and clear biopolymer liquid, color palette of apple brown, golden amber, and white."
  },
  13: {
    snippetAnswer: "October 13 terraforms industrial nickel slag heaps via Arcana 13 (Transformation). You plant hyper-accumulator nickel fern bio-swales across abandoned metal smelter slag dumps, decontaminating heavy metals from toxic soil.",
    vignetteTitle: "The Nickel Slag Terraforming Ecologist: Converting Smelter Dumps into Fern Sanctuaries",
    vignetteScenario: "Installing hyper-accumulator fern field planting across a 3,000-acre smelter slag dump on October 13, an ecologist introduces metal-extracting ferns, converting smelter tailings into a green sanctuary.",
    birthArchetypeContent: "Industrial nickel smelter slag heap bio-swale terraforming and nickel fern phytoremediation characterize October 13 via Arcana 13 in Libra. You lead radical land transformations, converting degraded toxic metal dumps into thriving fern sanctuaries.",
    highFrequencyExpression: "Your eco-restoration mastery drives nickel slag bio-swales, fern phytoremediation, smelter site greening, and soil metal extraction.",
    shadowChallenges: "Skepticism from mining boards during soil trials, slow fern root spreading, or over-working reclamation crews.",
    vocationAndFinance: "Heads slag reclamation as a nickel fern ecologist, metal phytoremediation expert, and industrial soil restorer. Revenue accrues through land restoration contracts.",
    reflectionQuestions: [
      "What toxic industrial site am I called to transform into a fertile fern sanctuary?",
      "How can I apply nickel fern phytoremediation technology to accelerate soil decontamination?",
      "Where in my career is a radical environmental rebirth waiting to happen?"
    ],
    faqItems: [
      {
        question: "Is October 13 an unlucky birthday in Destiny Matrix?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing soil rebirth, nickel slag terraforming, and high-impact fern reserve renewal."
      },
      {
        question: "What zodiac sign is October 13?",
        answer: "October 13 is Libra (Air sign), bringing aesthetic balance, diplomatic clarity, and resilience to Arcana 13's transformative power."
      },
      {
        question: "What is the financial engine for October 13?",
        answer: "Executing nickel smelter slag bio-swale terraforming and carbon credit contracts for global land restoration funds."
      },
      {
        question: "Which Arcana complements October 13?",
        answer: "Arcana 19 (The Sun) brings radiant sunlight to illuminate October 13's fern reclamation achievements."
      }
    ],
    imageBrief: "Striking artwork of a dark grey industrial nickel slag heap transforming into a lush glowing green fern sanctuary under a clear sun, color palette of slag grey, fern emerald, and sun gold."
  },
  14: {
    snippetAnswer: "October 14 balances coastal lagoon sediment via Arcana 14 (Temperance). You construct tidal inlet flushing hydro-gates across coastal lagoons, modulating estuarine channel flows to protect marine spawning grounds.",
    vignetteTitle: "The Coastal Lagoon Hydrologist: Regulating Tidal Inlet Flushing Gates",
    vignetteScenario: "Adjusting tidal lagoon inlet sluices on October 14, a wetland hydrologist maintains 25 PSU salinity, protecting 4,000 acres of estuarine fish spawning bays during autumn tides.",
    birthArchetypeContent: "Coastal lagoon inlet sediment flushing and tidal hydro-gate synthesis characterize October 14 via Arcana 14 in Libra. You harmonize sea influx with river discharge to maintain lagoon ecological equilibrium.",
    highFrequencyExpression: "Your coastal engineering talent regulates tidal gate timing, lagoon sediment balance, fish nursery salinity, and estuarine wetland preservation.",
    shadowChallenges: "Hesitation during ocean storm surge warnings, over-tuning lagoon gate timers, or friction with coastal resort owners.",
    vocationAndFinance: "Manages lagoon hydrology as a tidal sluice architect, coastal estuary engineer, and fish nursery conservationist. Retainers flow from public works contracts.",
    reflectionQuestions: [
      "Am I balancing coastal land development with natural lagoon salinity flushing needs?",
      "Where in my hydrology work can I apply innovative lagoon flushing gate technology?",
      "What coastal lagoon water framework requires balancing today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 14?",
        answer: "October 14 is Libra (Air sign), giving aesthetic harmony, diplomatic balance, and practical care to Arcana 14."
      },
      {
        question: "How does October 14 differ from September 14?",
        answer: "September 14 carries Virgo estuarine salt marsh salinity gates, while October 14 carries Libra coastal lagoon sediment flushing hydro-gate synthesis."
      },
      {
        question: "What is the financial secret of October 14?",
        answer: "Designing coastal lagoon hydro-gate systems that meet municipal environmental compliance standards."
      },
      {
        question: "Which Arcana complements October 14?",
        answer: "Arcana 8 (Justice) provides legal backing to enforce October 14's water allocation standards."
      }
    ],
    imageBrief: "Harmonious artwork of a hydrologist inspecting automated water flushing gates in a sunlit coastal lagoon surrounded by wading seabirds, color palette of lagoon turquoise, sand gold, and sky amber."
  },
  15: {
    snippetAnswer: "October 15 prosecutes illegal shark finning via Arcana 15 (The Devil). You investigate high-seas vessel tracking logs and dark-web marine cargo trades, prosecuting black-market fishing vessels to impound illegal ocean catches.",
    vignetteTitle: "The High-Seas Cyber-Prosecutor: Targeting Illegal Shark Finning Syndicates",
    vignetteScenario: "Submitting satellite AIS position logs in court on October 15, an environmental prosecutor dismantles an illegal high-seas finning fleet, seizing $20 million in contraband fishing boats.",
    birthArchetypeContent: "High-seas shark finning cyber-prosecution and vessel tracking log auditing characterize October 15 via Arcana 15 in Libra. You use satellite AIS position telemetry to dismantle illegal ocean poaching networks.",
    highFrequencyExpression: "Your maritime legal forensic skills target illegal vessel tracking logs, high-seas finning fleet asset forfeitures, and ocean fauna court enforcement.",
    shadowChallenges: "Relentless aggression in legal cross-examinations, media sensationalism, or exhaustion from high-seas maritime trials.",
    vocationAndFinance: "Enforces ocean law as a shark finning prosecutor, maritime AIS tracking specialist, and illegal fleet investigator. Retainers flow from international marine protection funds.",
    reflectionQuestions: [
      "Am I using my legal leverage to stop illegal marine trade or to gain trial authority?",
      "What vessel log anomaly or illegal shark finning trade am I called to challenge today?",
      "How can I bring complete legal transparency to international marine fauna protection?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 15?",
        answer: "October 15 is Libra (Air sign), infusing Arcana 15's legal power with aesthetic balance, diplomatic clarity, and courtroom focus."
      },
      {
        question: "How does October 15 differ from September 15?",
        answer: "September 15 carries Virgo rare flora sales log cyber-prosecution, while October 15 carries Libra high-seas shark finning vessel tracking log litigation & asset forfeiture."
      },
      {
        question: "What is the financial engine for October 15?",
        answer: "Auditing illegal fishing vessel logs and litigating court asset forfeiture orders against shark finning syndicates."
      },
      {
        question: "Which Arcana complements October 15?",
        answer: "Arcana 14 (Temperance) provides calming balance to prevent legal litigation over-reach."
      }
    ],
    imageBrief: "Dramatic legal artwork showing a cyber-prosecutor presenting glowing digital high-seas vessel tracking maps on screen in a courtroom exposing illegal finning fleets, color palette of court mahogany, electric cyan, and gold."
  },
  16: {
    snippetAnswer: "October 16 secures suspension bridge stay-cables via Arcana 16 (The Tower). You evaluate 4,000-foot suspension bridge stay-cable aerodynamic fairings, installing wind flutter dampers to prevent bridge oscillations during gales.",
    vignetteTitle: "The Suspension Bridge Structural Auditor: Retrofitting Stay-Cable Wind Dampers",
    vignetteScenario: "Testing stay-cables on a long-span suspension structure on October 16, a structural engineer detects wind shear vortex resonance, installing aerodynamic cable fairings to secure the span.",
    birthArchetypeContent: "Suspension bridge stay-cable aerodynamic fairing auditing and wind flutter damper mounting characterize October 16 via Arcana 16 in Libra. You uncover hidden structural risks in long-span bridges, installing fail-safe dampers to withstand gale storms.",
    highFrequencyExpression: "Your civil engineering discipline delivers suspension bridge cable auditing, aerodynamic fairing retrofits, and wind flutter damper installation.",
    shadowChallenges: "Abrupt safety warnings during bridge structural audits, alarming municipal transport boards, or traffic lane closures.",
    vocationAndFinance: "Protects suspension spans as a stay-cable fairing engineer, wind vortex auditor, and bridge structural retrofitter. Income grows through safety compliance certifications.",
    reflectionQuestions: [
      "What structural cable risk am I ready to identify and resolve in my engineering work or life?",
      "How can I deliver bridge safety audits with clear, solution-oriented communication?",
      "What indestructible safety foundation am I establishing for long-span suspension bridges?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 16?",
        answer: "October 16 is Libra (Air sign), bringing aesthetic harmony, structural discipline, and detail mastery to The Tower."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is revealing structural vulnerabilities to build indestructible safety."
      },
      {
        question: "Which careers suit October 16 best?",
        answer: "Suspension bridge stay-cable auditing, wind flutter damper engineering, long-span retrofitting, and cable sway hazard prevention."
      },
      {
        question: "How can October 16 navigate sudden structural issues?",
        answer: "Rely on rigorous civil engineering principles and rebuild systematically from rock-solid structural foundations."
      }
    ],
    imageBrief: "Striking architectural illustration of a structural engineer inspecting glowing blue stay-cable dampers high on a suspension bridge tower above the ocean, color palette of ocean navy, steel grey, and damper blue."
  },
  17: {
    snippetAnswer: "October 17 maps magma heat flux via Arcana 17 (The Star). You process orbital thermal infrared satellite telemetry, generating 3D volcanic thermal anomaly maps to predict eruption risks.",
    vignetteTitle: "The Orbital Thermal Infrared Satellite Analyst: Modeling Magma Thermal Anomalies",
    vignetteScenario: "Evaluating thermal infrared satellite telemetry on October 17, an Earth observation scientist detects a magma plume thermal anomaly over a volcano, warning civil defense 14 days before an eruption.",
    birthArchetypeContent: "Planetary volcanic magma thermal infrared satellite telemetry and 3D heat anomaly mapping characterize October 17 via Arcana 17 in Libra. You process thermal satellite telemetry, producing 3D magma plume models that guide volcanic disaster prevention.",
    highFrequencyExpression: "Your remote sensing expertise generates 3D volcanic heat maps, orbital thermal infrared telemetry, and satellite eruption risk forecasts.",
    shadowChallenges: "Skepticism toward ground sensor readings, isolation in satellite data labs, or impatience during orbit downlink delays.",
    vocationAndFinance: "Forecasts volcanic eruptions as an orbital thermal analyst, satellite infrared specialist, and planetary heat mapper. Contracts stem from space agencies.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to execute my ambitious orbital thermal sensing vision?",
      "How can I use satellite thermal infrared telemetry discoveries to support volcanic safety?",
      "What Earth observation thermal telemetry milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 17?",
        answer: "October 17 is Libra (Air sign), bringing aesthetic balance, technical methodology, and spatial vision to Arcana 17."
      },
      {
        question: "How does October 17 differ from September 17?",
        answer: "September 17 carries Virgo forest canopy lidar satellite telemetry, while October 17 carries Libra orbital thermal infrared satellite magma heat flux telemetry."
      },
      {
        question: "What is the financial engine for October 17?",
        answer: "Processing and licensing orbital thermal infrared satellite volcano data for global disaster response agencies."
      },
      {
        question: "Which Arcana complements October 17?",
        answer: "Arcana 21 (The World) expands October 17's satellite research onto a global international stage."
      }
    ],
    imageBrief: "Breathtaking artwork of a satellite firing infrared sensor beams down onto a glowing orange volcano crater map, color palette of volcanic orange, cosmic navy, and sensor infrared red."
  },
  18: {
    snippetAnswer: "October 18 tracks owl flight acoustics via Arcana 18 (The Moon). You position ultra-sensitive acoustic microphone arrays in dense autumn woodlands, recording nocturnal owl silent flight wing acoustics to design quiet aircraft propellers.",
    vignetteTitle: "The Nocturnal Owl Bio-Acoustician: Analyzing Silent Flight Feather Biomimicry",
    vignetteScenario: "Monitoring nocturnal wing sound frequencies 60 feet up in a forest canopy on October 18, a bio-acoustician analyzes feather edge acoustics to engineer quiet drone propellers.",
    birthArchetypeContent: "Sub-tropical forest canopy owl bio-acoustics and silent flight aero-acoustic tracking characterize October 18 via Arcana 18 in Libra. You study nocturnal avian fauna, using acoustic audio sensors to analyze quiet flight mechanics.",
    highFrequencyExpression: "Your acoustic bio-engineering records forest canopy owl flight frequencies, trailing-edge feather serrations, and quiet propeller biomimicry.",
    shadowChallenges: "Superstition during night woodland climbs, fixation on ambient forest noise, or over-complicating acoustic models.",
    vocationAndFinance: "Engineers quiet propellers as an owl flight acoustician, feather serration researcher, and avian bio-mimic. Grants fund ongoing research.",
    reflectionQuestions: [
      "Am I trusting my intuitive bio-acoustic findings alongside digital acoustic readouts?",
      "How can I apply nocturnal owl silent flight mapping to quiet industrial aircraft noise?",
      "What forest canopy sound mystery am I called to decode today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 18?",
        answer: "October 18 is Libra (Air sign), blending aesthetic balance with intuitive sub-surface forest bio-acoustics vision."
      },
      {
        question: "How does October 18 differ from September 18?",
        answer: "September 18 carries Virgo forest bat bio-acoustics, while October 18 carries Libra sub-tropical nocturnal owl silent flight bio-acoustics."
      },
      {
        question: "What is the technical superpower of October 18?",
        answer: "Mapping night owl silent flight wing acoustics using forest canopy bio-acoustic microphone arrays."
      },
      {
        question: "Which Arcana complements October 18?",
        answer: "Arcana 19 (The Sun) brings radiant daylight clarity to balance Arcana 18's nocturnal forest research."
      }
    ],
    imageBrief: "Atmospheric symbolist painting of a bio-acoustician standing under a moonlit forest canopy holding a glowing audio sensor while a barn owl glides silently silhouetted above, color palette of night indigo, forest emerald, and starlight silver."
  },
  19: {
    snippetAnswer: "October 19 deploys solar thermal desalination via Arcana 19 (The Sun). You design floating solar thermal desalination domes, concentrating sunlight onto ocean water evaporation chambers to generate 1,000,000 gallons of fresh drinking water daily.",
    vignetteTitle: "The Solar Desalination Dome Lead: Operating Floating Concentrator Arrays",
    vignetteScenario: "Deploying a floating solar water purification dome field on October 19, a clean water lead converts ocean saltwater into pure drinking water with zero carbon emissions.",
    birthArchetypeContent: "Floating solar thermal ocean water evaporation domes and solar collector optics characterize October 19 via Arcana 19 in Libra. You fuse solar power engineering with water purification, building ocean-based solar stills.",
    highFrequencyExpression: "Your renewable water enterprise drives floating solar thermal dome optics, ocean water evaporation stills, and municipal fresh water distribution.",
    shadowChallenges: "Demanding total control over solar water projects, ignoring salt scaling in dome glass, or over-promising fresh water yields.",
    vocationAndFinance: "Purifies ocean water as a solar desalination founder, floating dome architect, and municipal clean water developer. Revenues expand through utility water purchase contracts.",
    reflectionQuestions: [
      "Am I sharing my executive warmth to empower my solar desalination engineering team equally?",
      "How can I pace my intense drive to maintain long-term personal stamina?",
      "What floating solar desalination project am I ready to launch today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 19?",
        answer: "October 19 is Libra (Air sign), bringing aesthetic elegance, diplomatic balance, and practical methodology to Arcana 19."
      },
      {
        question: "How does October 19 differ from September 19?",
        answer: "September 19 carries Virgo floating solar reservoir arrays, while October 19 carries Libra floating solar thermal ocean water desalination domes."
      },
      {
        question: "What is the financial engine for October 19?",
        answer: "Building and operating floating solar thermal desalination arrays for municipal coastal water utilities."
      },
      {
        question: "Which Arcana complements October 19?",
        answer: "Arcana 21 (The World) expands October 19's clean water enterprise onto a global international stage."
      }
    ],
    imageBrief: "Radiant artwork of a chief clean water engineer inspecting a grid of transparent glass solar desalination domes floating on blue ocean water under a brilliant sun, color palette of ocean turquoise, glass gold, and sun yellow."
  },
  20: {
    snippetAnswer: "October 20 excavates amber fossil feathers via Arcana 20 (Judgement). You discover Cretaceous amber feather inclusions trapped in ancient resins, using isotopic age dating to reconstruct ancient avian evolution.",
    vignetteTitle: "The Amber Paleo-Ornithologist: Cataloging Cretaceous Feather Nodules",
    vignetteScenario: "Unearthing amber resin nodules from a subterranean clay layer on October 20, an archaeologist identifies Cretaceous dinosaur feather structures, publishing evolutionary flight timelines.",
    birthArchetypeContent: "Subterranean amber resin feather fossil excavation and radiocarbon paleo-ornithology spectrometry characterize October 20 via Arcana 20 in Libra. You unearth prehistoric amber feather inclusions, decoding how early birds evolved flight.",
    highFrequencyExpression: "Your paleontology research uncovers amber dinosaur feather fossils, Cretaceous resin inclusions, radiocarbon feather spectrometry, and evolutionary flight origins.",
    shadowChallenges: "Disputes with museum curators over amber nodule ownership, hesitation during cave digging, or dwelling on unexcavated strata.",
    vocationAndFinance: "Decodes avian evolution as an amber feather paleontologist, Cretaceous fossil curator, and evolutionary flight researcher. Grants fund archaeological digs.",
    reflectionQuestions: [
      "What prehistoric feather secret am I called to unearth for evolutionary science?",
      "Am I listening to my quiet inner calling or staying trapped in institutional friction?",
      "What radiocarbon amber spectrometry standard am I ready to establish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 20?",
        answer: "October 20 is Libra (Air sign), bringing aesthetic balance, technical methodology, and spatial vision to Arcana 20."
      },
      {
        question: "How does October 20 differ from September 20?",
        answer: "September 20 carries Virgo paleo-botanical seed excavation, while October 20 carries Libra subterranean amber fossil dinosaur feather inclusion excavation & radiocarbon spectrometry."
      },
      {
        question: "Which careers suit October 20 best?",
        answer: "Amber feather fossil excavation, radiocarbon feather spectrometry, evolutionary archaeology, and natural history museum leadership."
      },
      {
        question: "How can October 20 overcome self-judgment?",
        answer: "Focus on active excavation research and view amber feather discoveries as a vital contribution to evolutionary science."
      }
    ],
    imageBrief: "Inspiring symbolist artwork of an archaeologist in a dark subterranean cave holding a magnifying lens over a glowing golden amber resin nodule containing a fossilized feather, color palette of amber gold, cave charcoal, and starlight silver."
  },
  21: {
    snippetAnswer: "October 21 routes trans-Atlantic quantum cryptography cables via Arcana 21 (The World). You install trans-oceanic quantum-encrypted seabed fiber arrays across the ocean floor, securing global financial data against cyber interception.",
    vignetteTitle: "The Trans-Atlantic Quantum Subsea Cable Lead: Installing Encrypted Ocean Fiber",
    vignetteScenario: "Trenching a trans-oceanic quantum-encrypted seabed fiber array on October 21, a marine telecom engineer connects European and American financial hubs with unhackable data channels.",
    birthArchetypeContent: "Trans-Atlantic subsea quantum key optical cable routing and ocean trench installation characterize October 21 via Arcana 21 in Libra. You engineer underwater communications infrastructure that spans open ocean basins.",
    highFrequencyExpression: "Your deepwater engineering career focuses on subsea QKD quantum key optical cables, underwater robotic trenching, and ocean crypto-network routing.",
    shadowChallenges: "Stress over ocean floor trenching failures, friction with banking tech teams, or isolating on cable ships.",
    vocationAndFinance: "Secures global finance as a subsea quantum cable engineer, ocean trenching director, and QKD network architect. Contracts stem from global financial institutions.",
    reflectionQuestions: [
      "How can I ensure subsea QKD cable trenching preserves delicate deep-sea ecosystems?",
      "Am I building global quantum data connectivity while remaining personally grounded?",
      "What trans-Atlantic quantum cable milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 21?",
        answer: "October 21 is Libra (Air sign), bringing aesthetic balance, technical methodology, and global connectivity vision to Arcana 21."
      },
      {
        question: "How does October 21 differ from September 21?",
        answer: "September 21 carries Virgo subsea fiber cable trenching, while October 21 carries Libra trans-Atlantic subsea quantum key distribution (QKD) optical cable trenching."
      },
      {
        question: "What is the financial engine for October 21?",
        answer: "Laying subsea QKD quantum cable arrays and licensing unhackable trans-oceanic data channels to global banks."
      },
      {
        question: "Which Arcana complements October 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new subsea quantum infrastructure."
      }
    ],
    imageBrief: "Regal symbolist illustration of an underwater robotic trencher laying glowing violet quantum optical fiber cable along a dark ocean floor, color palette of ocean navy, quantum violet, and glowing silver."
  },
  22: {
    snippetAnswer: "October 22 marks the Autumn Equinox-Scorpio cusp via Arcana 22 (The Fool / Master 22). You establish high-alpine larch tree avalanche protection shelterbelts, planting cliff-slope tree barriers to shield alpine villages from snow slides.",
    vignetteTitle: "The Cusp Alpine Avalanche Shelterbelt Designer: Rooting Mountain Slope Barriers",
    vignetteScenario: "Establishing a cliff-slope larch protective forest barrier on October 22, an avalanche agroforestry architect anchors deep-rooted larch trees on 40-degree mountain slopes, stopping snow slides.",
    birthArchetypeContent: "Equinox-Scorpio cusp high-alpine larch avalanche protection shelterbelts and slope stabilization characterize October 22 via Arcana 22 on the Libra-Scorpio cusp. You design permanent high-altitude tree barriers that protect mountain villages against avalanches.",
    highFrequencyExpression: "Your ecological mountain design centers on high-alpine larch shelterbelts, 40-degree cliff slope forestry, and avalanche slide barrier planting.",
    shadowChallenges: "Planting larch saplings without checking rock depth, over-spending on mountain nursery stock, or ignoring alpine wind warnings.",
    vocationAndFinance: "Protects alpine villages as a larch shelterbelt planner, cliff slope forester, and mountain avalanche control lead. Commercial contracts expand revenues.",
    reflectionQuestions: [
      "What high-alpine tree barrier design am I called to plant for mountain village protection?",
      "Am I balancing visionary forestry goals with practical seasonal slope preparation?",
      "Where in my career am I ready to plant enduring roots on October 22?"
    ],
    faqItems: [
      {
        question: "Why is October 22 a Master Number birthday?",
        answer: "October 22 combines Master Number 22 (Master Builder) with Arcana 22 (The Fool) on the Libra-Scorpio cusp, granting capacity for monumental high-alpine avalanche shelterbelt building."
      },
      {
        question: "What zodiac sign is October 22?",
        answer: "October 22 sits on the Libra-Scorpio cusp, blending Libra aesthetic balance with Scorpio depth and transformative intensity."
      },
      {
        question: "Which careers suit October 22 best?",
        answer: "Alpine avalanche shelterbelt architecture, mountain slope barrier design, high-altitude landscape engineering, and slope conservation leadership."
      },
      {
        question: "How can October 22 avoid burnout?",
        answer: "Pace long-term tree planting projects and collaborate with experienced alpine forestry crews."
      }
    ],
    imageBrief: "Breathtaking illustration of a master builder figure standing on a snowy mountain slope surrounded by growing rows of golden-orange larch trees on the cusp, color palette of larch gold, snow white, and cliff granite."
  },
  23: {
    snippetAnswer: "October 23 enters Scorpio via Arcana 5 (The Hierophant). You lecture on academic oceanography textbooks, establishing deep ocean thermohaline circulation charters for marine science programs.",
    vignetteTitle: "The Oceanography Physics Chair: Instructing Thermohaline Circulation Dynamics",
    vignetteScenario: "Teaching deep ocean current circulation concepts on October 23, an oceanographer trains researchers to model Atlantic meridional overturning current heat transport.",
    birthArchetypeContent: "Academic oceanography textbooks and thermohaline circulation charters characterize October 23 via Arcana 5 in Scorpio. You turn abyssal ocean physics into university curricula, preparing oceanographers to track planetary current stability.",
    highFrequencyExpression: "Your marine physics lecturing articulates deep ocean thermohaline circulation, abyssal current dynamics, and university oceanography curricula.",
    shadowChallenges: "Dogmatic reliance on classic ocean current models, impatience with student archivists, or dismissing unexpected salinity data.",
    vocationAndFinance: "Teaches ocean science faculties as an oceanography professor, thermohaline dynamics author, abyssal current specialist, and marine policy consultant. Royalties fund research.",
    reflectionQuestions: [
      "Am I teaching oceanography physics from practical abyssal current field sampling?",
      "How can I simplify deep ocean thermohaline circulation dynamics for upcoming marine students?",
      "What abyssal oceanography textbook am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 23?",
        answer: "October 23 enters Scorpio (Water sign), infusing The Hierophant's teaching mission with deep research intensity, intuitive power, and scientific rigor."
      },
      {
        question: "How does October 23 differ from October 5?",
        answer: "October 5 carries Libra glaciology textbooks, while October 23 carries Scorpio academic deep ocean thermohaline circulation oceanography textbooks."
      },
      {
        question: "What is the financial model for October 23?",
        answer: "Authoring oceanography textbooks and advising global marine circulation governance boards."
      },
      {
        question: "Which Arcana complements October 23?",
        answer: "Arcana 3 (The Empress) offers fertile natural growth to support Arcana 5's teaching."
      }
    ],
    imageBrief: "Vibrant artwork of an oceanography professor examining glowing global thermohaline ocean current maps inside a sunlit laboratory under a Scorpio water sign halo, color palette of deep blue, ocean cyan, and gold."
  },
  24: {
    snippetAnswer: "October 24 forms Piedmont organic chestnut trade co-operatives under Arcana 6 (The Lovers). You organize Castanea sativa chestnut groves, operating stone flour mill facilities to supply European gourmet bakeries.",
    vignetteTitle: "The Piedmont Chestnut Mill Lead: Managing Organic Stone-Milling Facilities",
    vignetteScenario: "Unifying 35 organic chestnut farming families in Piedmont on October 24, a co-op director operates stone flour mills, supplying certified chestnut flour to luxury European bakeries.",
    birthArchetypeContent: "Piedmont organic Castanea chestnut farming and stone flour mill co-operatives define October 24 under Arcana 6 in Scorpio. You build fair orchard grower partnerships that protect mountain groves while securing gourmet export deals.",
    highFrequencyExpression: "Your agrarian co-op leadership manages Castanea sativa chestnut orchards, stone flour mill plants, and gourmet bakery export contracts.",
    shadowChallenges: "Argumentative disputes over milling profit margins among grower families, worry over nut flour moisture metrics, or reluctant negotiation with global buyers.",
    vocationAndFinance: "Negotiates gourmet food trade as a chestnut co-op founder, milling plant director, artisan food strategist, and farm trade advocate. Profits grow through export contracts.",
    reflectionQuestions: [
      "Am I building farm trade alliances on clear mutual agreements or verbal promises?",
      "How can I combine chestnut milling plant structure with genuine grower community trust?",
      "What organic chestnut trade alliance am I ready to formalize today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 24?",
        answer: "October 24 is Scorpio (Water sign), bringing intuitive depth, emotional passion, and structured fairness to Arcana 6."
      },
      {
        question: "How does October 24 differ from October 6?",
        answer: "October 6 carries Libra Tuscan organic olive co-ops, while October 24 carries Scorpio Piedmont organic Castanea chestnut stone flour mill grower alliances."
      },
      {
        question: "What is the financial secret of October 24?",
        answer: "Structuring regional organic chestnut co-operatives that command direct international gourmet export contracts."
      },
      {
        question: "Which Arcana complements October 24?",
        answer: "Arcana 4 (The Emperor) reinforces October 24's demand for administrative structure in alliances."
      }
    ],
    imageBrief: "Warm graphic depicting Piedmont farmers harvesting brown chestnuts under a warm autumn sun near a stone flour mill, color palette of chestnut brown, warm amber, and sun gold."
  },
  25: {
    snippetAnswer: "October 25 directs autonomous electric straddle carriers via Arcana 7 (The Chariot). You pilot battery-powered electric container straddle carrier cranes, routing zero-emission container corridors across automated port terminals.",
    vignetteTitle: "The Electric Straddle Carrier Captain: Maneuvering Automated Port Corridors",
    vignetteScenario: "Maneuvering a battery-powered straddle carrier crane unit on October 25, a port logistics captain moves 4,000 container boxes per day with zero port emissions.",
    birthArchetypeContent: "Automated port container straddle carrier crane routing and battery charging characterize October 25 via Arcana 7 in Scorpio. You lead zero-emission industrial port logistics projects, routing automated cranes across container terminals.",
    highFrequencyExpression: "Your container port operations direct electric straddle carrier fleets, automated terminal routing, and zero-emission freight logistics.",
    shadowChallenges: "Frustration over port crane charging downtime, pushing battery packs past capacity, or short temper with yard dockers.",
    vocationAndFinance: "Directs port freight as an electric straddle carrier operator, container terminal logistics lead, and crane fleet manager. Corporate contracts generate high earnings.",
    reflectionQuestions: [
      "Am I balancing automated straddle carrier innovation with strict port terminal safety?",
      "How can I lead my port logistics crew to excel without creating high-pressure burnout?",
      "What zero-emission port terminal milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 25?",
        answer: "October 25 is Scorpio (Water sign), giving intuitive focus, emotional drive, and transit design agility to Arcana 7."
      },
      {
        question: "How does October 25 differ from October 7?",
        answer: "October 7 carries Libra urban eVTOL air-taxis, while October 25 carries Scorpio automated electric container straddle carrier crane port navigation."
      },
      {
        question: "What is the technical edge of October 25?",
        answer: "Routing 30 electric straddle carrier cranes across automated port yards moving 4,000 containers daily with zero emissions."
      },
      {
        question: "Which Arcana complements October 25?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's heavy port operations."
      }
    ],
    imageBrief: "Dynamic industrial graphic of a tall blue electric straddle carrier crane lifting a shipping container in a sunlit ocean port yard, color palette of ocean navy, crane blue, and sun gold."
  },
  26: {
    snippetAnswer: "October 26 adjudicates transboundary air pollution law via Arcana 8 (Justice). You resolve cross-border industrial acid rain emissions disputes, enforcing international air quality conventions to validate industrial pollution limits.",
    vignetteTitle: "The Transboundary Air Pollution Arbitrator: Validating Plume Emission Treaties",
    vignetteScenario: "Settling a cross-border acid rain pollution dispute on October 26, a transboundary air quality commissioner enforces UN Air Pollution Treaties, validating sulfur emission cuts for industrial smelters.",
    birthArchetypeContent: "Transboundary air pollution plume arbitration and UN transboundary acid rain treaty decrees characterize October 26 via Arcana 8 in Scorpio. You apply international environmental law to resolve cross-border industrial emissions disputes and validate clean air standards.",
    highFrequencyExpression: "Your international clean air advocacy arbitrates cross-border acid rain disputes, industrial emissions limits, and UN air treaty decrees.",
    shadowChallenges: "Excessive skepticism during clean air summits, friction with factory owners over sulfur quotas, or stubborn resistance to compromise.",
    vocationAndFinance: "Navigates atmospheric policy as an acid rain litigator, clean air negotiator, industrial emission auditor, and transboundary environmental mediator. Retainers stem from international green trusts.",
    reflectionQuestions: [
      "Am I applying objective fairness to industrial power operators as well as downwind forest communities?",
      "Where in my air legal auditing can I establish greater emission plume transparency?",
      "What transboundary air quality protection standard needs strict legal enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 26?",
        answer: "October 26 is Scorpio (Water sign), bringing intuitive depth, ethical fairness, and structural clarity to Arcana 8."
      },
      {
        question: "How does October 26 differ from October 8?",
        answer: "October 8 carries Libra satellite orbital slot arbitration, while October 26 carries Scorpio transboundary cross-border air pollution plume arbitration & UN decrees."
      },
      {
        question: "What is the financial rule for October 26?",
        answer: "Maintain absolute regulatory compliance and fair air quality standards in all industrial emissions projects."
      },
      {
        question: "Which Arcana complements October 26?",
        answer: "Arcana 11 (Strength) provides stamina to support October 26's clean air legal arbitration hearings."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over industrial chimneys equipped with clean air scrubbers under a clear sky, color palette of sky blue, chimney grey, and gold."
  },
  27: {
    snippetAnswer: "October 27 archives ancient amber forest resin repositories via Arcana 9 (The Hermit). You document 90-million-year-old amber resin cores excavated in subterranean mine caverns, examining dinosaur-era gas composition to decode Cretaceous air composition.",
    vignetteTitle: "The Cretaceous Amber Resin Curator: Documenting Ancient Air Bubble Archives",
    vignetteScenario: "Examining an amber resin core drilled 200 feet underground on October 27, a paleo-atmosphere scientist preserves 90-million-year-old oxygen bubbles, mapping ancient Cretaceous atmospheric pressure.",
    birthArchetypeContent: "Subterranean amber resin core repository curation and Cretaceous gas bubble analysis characterize October 27 via Arcana 9 in Scorpio. You work in quiet amber vaults, cataloging ancient resin inclusions to decode dinosaur-era atmosphere chemistry.",
    highFrequencyExpression: "Your amber geochemist work catalogs subterranean resin cores, Cretaceous air bubble inclusions, and ancient atmospheric gas pressure.",
    shadowChallenges: "Fixating on subterranean cavern isolation, withholding ancient air bubble data from atmospheric panels, or skepticism toward modern carbon models.",
    vocationAndFinance: "Curates amber gas deposits as a Cretaceous air analyst, resin inclusion specialist, paleo-atmosphere researcher, and amber repository director. Institutional funding supports laboratory studies.",
    reflectionQuestions: [
      "Am I balancing my solitary amber core archiving with open scientific collaboration?",
      "How can I apply ancient Cretaceous air discoveries to inform modern atmosphere models?",
      "What subterranean amber resin secret am I ready to catalog today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 27?",
        answer: "October 27 is Scorpio (Water sign), blending intuitive research depth with The Hermit's contemplative focus."
      },
      {
        question: "How does October 27 differ from October 9?",
        answer: "October 9 carries Libra salt cavern evaporite core archives, while October 27 carries Scorpio subterranean 90-million-year amber resin Cretaceous air bubble archives."
      },
      {
        question: "Why does October 27 thrive in amber vaults?",
        answer: "Quiet amber vault focus allows October 27 to index delicate air bubbles without surface gas contamination."
      },
      {
        question: "Which Arcana complements October 27?",
        answer: "Arcana 3 (The Empress) provides fertile natural growth backing to support Arcana 9's atmosphere research."
      }
    ],
    imageBrief: "Mystical scientific portrait of a researcher examining a glowing amber resin core cylinder inside a subterranean amber vault lined with glass storage tubes, color palette of amber gold, cavern grey, and starlight silver."
  },
  28: {
    snippetAnswer: "October 28 captures floating offshore wind flywheel power under Arcana 10 (Wheel of Fortune). You engineer gyroscopic flywheel stabilizing buoys for deepwater floating wind turbines, converting 50-knot gale gusts into smooth 24/7 grid electricity.",
    vignetteTitle: "The Floating Wind Flywheel Lead: Operating Gyroscopic Stabilizing Generators",
    vignetteScenario: "Commissioning a 15MW floating wind turbine on a gyroscopic spar buoy on October 28, a marine wind engineer stabilizes turbine pitch in 30-foot seas, generating continuous offshore electricity.",
    birthArchetypeContent: "Deepwater floating wind turbine gyroscopic flywheel buoys and spar hydrodynamics define October 28 under Arcana 10 in Scorpio. You convert offshore gale winds into continuous clean electricity for coastal power grids.",
    highFrequencyExpression: "Your floating wind engineering stabilizes gyroscopic flywheel buoys, spar dynamic positioning, and deepwater wind turbine pitch control.",
    shadowChallenges: "Rushing floating spar buoy deployments without gyroscopic stabilizer stress tests, ignoring seawater corrosion wear, or over-working offshore site crews.",
    vocationAndFinance: "Develops floating wind power installations as an offshore wind engineer, gyroscopic flywheel architect, clean tech executive, and marine wind director. Returns flow through power purchase contracts.",
    reflectionQuestions: [
      "Am I testing floating wind gyroscopic stabilizers against extreme storm pitch forces?",
      "How can I optimize spar buoy dynamics to maximize continuous power output in ocean gales?",
      "What floating offshore wind milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 28?",
        answer: "October 28 is Scorpio (Water sign), giving intuitive depth, passion, and engineering drive to Arcana 10."
      },
      {
        question: "How does October 28 differ from October 10?",
        answer: "October 10 carries Libra ocean thermal energy OTEC heat engines, while October 28 carries Scorpio deepwater floating wind turbine gyroscopic flywheel spar buoys."
      },
      {
        question: "What is the technical edge of October 28?",
        answer: "Engineering gyroscopic flywheel spar buoys that stabilize 15MW floating wind turbines in 30-foot storm seas."
      },
      {
        question: "Which Arcana complements October 28?",
        answer: "Arcana 21 (The World) expands October 28's floating wind projects onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over a massive floating wind turbine spinning on a blue ocean spar buoy, color palette of ocean navy, turbine white, and gold."
  },
  29: {
    snippetAnswer: "October 29 guards deep-sea blue whales via Arcana 11 (Strength / Master 11). You monitor abyssal acoustic hydrophones, mapping blue whale 20-Hz vocalizations to reroute commercial container shipping lanes away from feeding corridors.",
    vignetteTitle: "The Abyssal Blue Whale Bio-Acoustician: Tracking Low-Frequency Infrasound",
    vignetteScenario: "Monitoring 20-Hz blue whale vocal calls 4,000 feet deep on October 29, a marine biologist reroutes commercial container shipping lanes, preventing ship strike mortality across 2,000,000 acres.",
    birthArchetypeContent: "Abyssal ocean blue whale hydrophone tracking and low-frequency infrasound mapping characterize October 29 via Arcana 11 in Scorpio. You conduct deep ocean bio-acoustic research, using physical stamina to protect the largest cetacean species on Earth.",
    highFrequencyExpression: "Your cetacean bio-acoustic work maps 4,000-foot deep blue whale infrasound calls, rerouting ocean cargo lanes away from feeding grounds.",
    shadowChallenges: "Physical exhaustion from long ocean research voyages, anger at commercial cargo fleets, or neglecting rest between shifts.",
    vocationAndFinance: "Protects blue whales as an abyssal hydrophone acoustician, ocean sanctuary biologist, and shipping lane rerouting lead. Grants support subsea acoustic research.",
    reflectionQuestions: [
      "How can I maintain my physical stamina during grueling deep ocean hydrophone deployment shifts?",
      "Am I applying quiet somatic composure rather than force when negotiating shipping lane rerouting?",
      "What abyssal blue whale sanctuary initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Why is October 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and quiet somatic mastery over deep ocean fauna."
      },
      {
        question: "What zodiac sign is October 29?",
        answer: "October 29 is Scorpio (Water sign), adding intuitive depth, emotional passion, and abyssal ocean connection to Arcana 11's intense strength."
      },
      {
        question: "How does October 29 differ from October 11?",
        answer: "October 11 carries Libra alpine snow leopard ridge tracking, while October 29 carries Scorpio abyssal deep ocean blue whale low-frequency hydrophone acoustics."
      },
      {
        question: "What is the health key for October 29?",
        answer: "Regular physical grounding practices and systematic hydration recovery between deep ocean research shifts."
      }
    ],
    imageBrief: "Inspiring artwork of a marine biologist in a research vessel watching a massive blue whale surface in deep ocean water near glowing hydrophone buoys, color palette of abyssal navy, whale blue, cyan, and gold."
  },
  30: {
    snippetAnswer: "October 30 refines organic cranberry seed lipids via Arcana 3 (The Empress). You cold-press autumn cranberry press residues, pressing seed pomace into bio-active facial elixirs and restorative dermatological serums.",
    vignetteTitle: "The Cranberry Seed Lipid Bio-Refiner: Extracting Proanthocyanidin Polyphenols",
    vignetteScenario: "Cold-pressing autumn cranberry press residues on October 30, a bio-refinery founder isolates rich antioxidant lipid extracts for luxury dermatological lines.",
    birthArchetypeContent: "Autumn cranberry seed pressing and bioactive polyphenol extraction define October 30 via Arcana 3 in Scorpio. You convert harvest pomace into premium dermatological oils.",
    highFrequencyExpression: "Your botanical oil refining extracts cranberry seed lipids for therapeutic skin formulations.",
    shadowChallenges: "Guarding cranberry lipid formulas too secretively, impatience during bog pressing runs, or over-capitalizing extraction units.",
    vocationAndFinance: "Extracts bog lipids as a cranberry seed oil refiner, proanthocyanidin chemist, and luxury skincare formula supplier. High revenues grow through corporate supply contracts.",
    reflectionQuestions: [
      "How can I turn autumn cranberry seeds into valuable dermatological lipid products?",
      "Am I balancing creative seed refining methods with practical processing budgets?",
      "What cranberry proanthocyanidin formula am I ready to produce today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 30?",
        answer: "October 30 is Scorpio (Water sign), bringing intuitive depth, emotional passion, and technical precision to The Empress."
      },
      {
        question: "How does October 30 differ from September 30?",
        answer: "September 30 carries Libra pomegranate punicic acid oil biorefining, while October 30 carries Scorpio organic cranberry seed proanthocyanidin polyphenol bio-refining."
      },
      {
        question: "What is the financial engine for October 30?",
        answer: "Refining and supplying organic cranberry proanthocyanidin seed oil to global pharmaceutical and cosmetic conglomerates."
      },
      {
        question: "Which Arcana complements October 30?",
        answer: "Arcana 4 (The Emperor) provides structural manufacturing execution to support Arcana 3's bio-refinery growth."
      }
    ],
    imageBrief: "Rich technical illustration of a chemist inspecting glass beakers filled with deep ruby cranberry seed oil inside a sunlit laboratory, color palette of cranberry ruby, golden amber, and clean white."
  },
  31: {
    snippetAnswer: "October 31 (Halloween / Reformation Day) fortifies planetary gene vaults under Arcana 4 (The Emperor). You engineer climate-proof granite gene bunkers deep inside permafrost mountains, protecting global livestock and crop genetic archives.",
    vignetteTitle: "The Subterranean DNA Vault Engineer: Fortifying Climate-Proof Gene Bunkers",
    vignetteScenario: "Installing blast-proof subterranean vault doors on a 600-foot granite mountain gene bunker on October 31, a structural engineer secures 500,000 cryo-frozen DNA samples against global cataclysms.",
    birthArchetypeContent: "Subterranean granite gene vault fortification and cryosphere climate-proofing define October 31 under Arcana 4 in Scorpio. You build indestructible planetary genetic repositories that protect human agriculture and biodiversity for centuries.",
    highFrequencyExpression: "Your structural security work fortifies subterranean granite gene bunkers, permafrost blast doors, and long-term DNA cryo-preservation.",
    shadowChallenges: "Rigid stubbornness during international genetic repository reviews, enforcing strict bunker security protocols without field flexibility, or stress during facility construction.",
    vocationAndFinance: "Leads planetary safety infrastructure as a gene vault structural engineer, granite bunker designer, genetic conservation chair, and hazard consultant. Global foundations fund projects.",
    reflectionQuestions: [
      "Am I leading my gene vault engineering crew with clear direction or rigid demands?",
      "Where in my structural projects can I deploy high-strength granite bunker technology?",
      "What planetary genetic preservation milestone am I ready to accomplish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is October 31?",
        answer: "October 31 is Scorpio (Water sign), giving intense intuitive focus, structural discipline, and deep resolve to Arcana 4."
      },
      {
        question: "How does October 31 differ from October 4?",
        answer: "October 4 carries Libra offshore platform decommissioning, while October 31 carries Scorpio subterranean granite gene vault permafrost bunker fortification."
      },
      {
        question: "Which careers suit October 31 best?",
        answer: "Subterranean gene vault engineering, granite bunker design, genetic heritage protection, and planetary safety leadership."
      },
      {
        question: "How can October 31 ensure project success?",
        answer: "Combine rigorous structural safety standards with long-term vision for human agricultural survival."
      }
    ],
    imageBrief: "Commanding architectural artwork showing a chief structural engineer standing before a massive steel vault door embedded deep in a sunlit granite mountain face, color palette of granite grey, steel silver, and amber light."
  }
};

export function getOctoberProfile(day: number): BirthdayProfileData {
  const custom = OCTOBER_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `October ${day}`;
  const slug = `october-${day}`;

  const phaseText = day <= 10 ? `early October Libra air balance phase of day ${day}` : day <= 22 ? `mid-October Libra-Scorpio cusp phase of day ${day}` : `late-October Scorpio water depth phase of day ${day}`;
  const seasonalContext = `Mid-autumn seasonal transition and foliage vitality mark the ${phaseText}.`;
  const dayVibrationNote = `${formattedDate} combines this mid-autumn energy with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 30 : day - 1;
  const nextDay = day === 31 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'September 30' : `October ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 30 ? "September closing harvest threshold" : `Preceding October ${prevDay} vibration`,
      bestFocus: `Consolidating earlier October ${prevDay} momentum`,
      keyContrast: `Paves the way for Arcana ${primaryArcanaNum} expression on October ${day}.`
    },
    {
      dateLabel: formattedDate,
      arcanaNum: primaryArcanaNum,
      arcanaName: primaryArcana.name,
      coreTheme: custom?.vignetteTitle || `${primaryArcana.name} activation`,
      bestFocus: `Anchoring unique October ${day} profile strengths`,
      keyContrast: `Your individual October ${day} archetype focus.`,
      isCurrentDay: true
    },
    {
      dateLabel: day === 31 ? 'November 1' : `October ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: `Emerging October ${nextDay} expansion`,
      bestFocus: `Advancing toward October ${nextDay} wisdom`,
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} qualities.`
    }
  ];

  return {
    slug,
    month: 'October',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of October seasonal focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
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
        answer: day <= 22 ? `${formattedDate} falls under Libra (Air sign), bringing diplomatic balance, aesthetic harmony, and relationship equilibrium.` : `${formattedDate} falls under Scorpio (Water sign), bringing intense transformation, deep intuition, and emotional power.`
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
