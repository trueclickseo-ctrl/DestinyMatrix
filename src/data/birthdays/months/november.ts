import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const NOVEMBER_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "November 1 pioneers sub-arctic peatland carbon flux sensing under Arcana 1 (The Magician). You deploy atmospheric eddy covariance towers across frozen peat bogs, measuring methane exchange to quantify climate cooling capacity.",
    vignetteTitle: "The Peatland Carbon Flux Specialist: Calibrating Eddy Covariance Towers",
    vignetteScenario: "Installing a 30-meter atmospheric eddy covariance tower across a frost-covered sub-arctic peat bog on November 1, a micro-climatologist measures net ecosystem carbon exchange.",
    birthArchetypeContent: "Atmospheric eddy covariance flux tower calibration and sub-arctic peatland gas modeling mark November 1 under Arcana 1 in Scorpio. You build greenhouse gas measurement networks that quantify peatland carbon sink capacity.",
    highFrequencyExpression: "Your micro-climate sensing skills excel in eddy covariance tower alignment, peatland gas flux modeling, carbon sink auditing, and peat bog conservation.",
    shadowChallenges: "Over-tuning flux analyzer sensors, doubting tower calibration data during winter frosts, or abrupt field team communication.",
    vocationAndFinance: "Pioneers carbon sensing as a peatland micro-climatologist, gas flux scientist, ecosystem auditor, and climate tech founder. Carbon sink auditing contracts bring strong earnings.",
    reflectionQuestions: [
      "Am I deploying my atmospheric carbon flux models to protect vulnerable peatland ecosystems?",
      "How can I channel Scorpio depth into precise greenhouse gas tower calibration?",
      "What sub-arctic carbon flux milestone am I ready to achieve today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 1?", answer: "November 1 is Scorpio (Water sign), bringing intense focus, intuitive depth, and analytical power to Arcana 1." },
      { question: "How does November 1 differ from October 1?", answer: "October 1 carries Libra cold-atom quantum clocks, while November 1 carries Scorpio sub-arctic peatland carbon flux sensing & eddy covariance towers." },
      { question: "What is the financial engine for November 1?", answer: "Auditing and certifying peatland carbon sink flux data for international carbon credit exchanges." },
      { question: "Which Arcana complements November 1?", answer: "Arcana 5 (The Hierophant) offers educational frameworks to publish November 1's carbon flux research." }
    ],
    imageBrief: "Clean high-tech graphic of a climatologist adjusting digital gas sensors on a metallic tower standing over a frosted brown peat bog, color palette of frost white, bog brown, and atmospheric cyan."
  },
  2: {
    snippetAnswer: "November 2 uncovers deep-sea vent fluid signals under Arcana 2 (The High Priestess). You analyze hydrothermal black smoker fluid mass spectrometry, decoding abyssal mineral water chemistry 10,000 feet beneath ocean waves.",
    vignetteTitle: "The Abyssal Hydrothermal Vent Analyst: Sampling Black Smoker Fluid Chemistry",
    vignetteScenario: "Deploying titanium fluid samplers into a 350°C hydrothermal vent on November 2, an ocean geochemist isolates rare mineral isotope signatures, mapping deep ocean crustal chemistry.",
    birthArchetypeContent: "Hydrothermal vent fluid mass spectrometry and abyssal geochemical sampling characterize November 2 via Arcana 2 in Scorpio. You evaluate oceanic crustal liquid chemistry to decode deep subterranean planetary water cycles.",
    highFrequencyExpression: "Your ocean geochemistry work excels in hydrothermal fluid sampling, mass spectrometry analysis, vent mineral mapping, and quiet abyssal ocean research.",
    shadowChallenges: "Reclusive isolation on marine research vessels, hesitation to publish unexpected vent isotope data, or emotional detachment.",
    vocationAndFinance: "Researches abyssal vents as a hydrothermal oceanographer, vent fluid geochemist, subsea mineral analyst, and deep ocean advisor. Institutional grants fund subsea research.",
    reflectionQuestions: [
      "Am I trusting my intuitive subsea insights alongside lab mass spectrometry readouts?",
      "How can I share my hydrothermal vent discoveries to protect abyssal ecosystems?",
      "What ocean floor geochemical secret am I called to illuminate today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 2?", answer: "November 2 is Scorpio (Water sign), giving intense intuition, scientific focus, and abyssal water depth to The High Priestess." },
      { question: "How does November 2 differ from October 2?", answer: "October 2 carries Libra cave drip stalagmite isotopes, while November 2 carries Scorpio abyssal hydrothermal vent fluid mass spectrometry." },
      { question: "What is the key to success for November 2?", answer: "Patient laboratory mass spectrometry analysis of delicate hydrothermal vent mineral fluids." },
      { question: "Which Arcana complements November 2?", answer: "Arcana 3 (The Empress) provides natural growth backing to support November 2's ocean chemistry work." }
    ],
    imageBrief: "Mystical scientific illustration of a deep-sea submersible claw collecting glowing amber fluid samples near a dark hydrothermal vent chimney, color palette of ocean navy, vent amber, and glow cyan."
  },
  3: {
    snippetAnswer: "November 3 refines wild sea buckthorn lipids via Arcana 3 (The Empress). You operate supercritical CO2 extraction vats, isolating omega-7 fatty acids from golden coastal berries for dermatological wound healing.",
    vignetteTitle: "The Sea Buckthorn Lipid Processor: Isolating Omega-7 Skin Therapeutics",
    vignetteScenario: "Cold-processing 50 tons of autumn sea buckthorn harvest on November 3, a phytochemical technologist extracts pure omega-7 lipids to formulate regenerative skin therapeutics for clinical use.",
    birthArchetypeContent: "Supercritical CO2 lipid extraction and omega-7 fatty acid crystallization mark November 3 under Arcana 3 in Scorpio. You process coastal autumn fruit harvests into pure therapeutic skin lipids with clinical potency.",
    highFrequencyExpression: "Your botanical lipid extraction skill excels in buckthorn berry harvesting, supercritical CO2 separation, omega-7 crystallization, and phytomedicine formulation.",
    shadowChallenges: "Hoarding extraction formulas, impatience during pressurized CO2 processing runs, or over-investing in equipment before validating market demand.",
    vocationAndFinance: "Formulates natural therapeutics as a phytomedicine technologist, omega-7 extraction specialist, cosmeceutical innovator, and botanical supplier. Clinical licensing agreements yield high profits.",
    reflectionQuestions: [
      "How can I turn autumn sea buckthorn harvests into clinically validated therapeutic lipid products?",
      "Am I balancing creative phytomedicine innovation with practical processing budgets?",
      "What sea buckthorn omega-7 clinical application am I ready to license today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 3?", answer: "November 3 is Scorpio (Water sign), infusing The Empress's creative fertility with passionate depth, intuitive focus, and technical care." },
      { question: "How does November 3 differ from October 3?", answer: "October 3 carries Libra passionflower flavonoid crystallization, while November 3 carries Scorpio sea buckthorn omega-7 supercritical CO2 lipid therapeutics." },
      { question: "What is the financial engine for November 3?", answer: "Licensing omega-7 sea buckthorn lipid extracts for clinical dermatological and wound-healing applications." },
      { question: "Which Arcana complements November 3?", answer: "Arcana 4 (The Emperor) provides structural manufacturing discipline to scale Arcana 3's phytomedicine enterprise." }
    ],
    imageBrief: "Rich illustration of a phytochemical technologist holding a golden sea buckthorn lipid flask in front of CO2 extraction equipment, color palette of buckthorn orange, golden amber, and steel silver."
  },
  4: {
    snippetAnswer: "November 4 secures salt cavern energy vaults under Arcana 4 (The Emperor). You design compressed air energy storage (CAES) systems in subterranean salt domes, stabilizing regional electric power grids.",
    vignetteTitle: "The Subterranean CAES Energy Architect: Engineering Salt Cavern Storage",
    vignetteScenario: "Pressurizing a 2,000-foot underground salt cavern on November 4, a structural energy engineer stores 300MW of excess wind energy, delivering reliable grid power during calm weather.",
    birthArchetypeContent: "Subterranean compressed air energy storage (CAES) engineering and salt dome pressurization define November 4 via Arcana 4 in Scorpio. You construct underground energy vaults that store surplus electricity for regional power grids.",
    highFrequencyExpression: "Your cavern storage engineering authority shines in salt dome pressurization, CAES vault design, turbine thermodynamic modeling, and energy grid stability.",
    shadowChallenges: "Uncompromising stubbornness during cavern pressure safety reviews, rigid adherence to drilling schedules, or tension during wellhead testing.",
    vocationAndFinance: "Manages cavern energy storage as a CAES structural lead, salt dome geologist, energy vault architect, and utility consultant. Utility contracts generate steady income.",
    reflectionQuestions: [
      "Am I leading my salt cavern engineering team with clear direction or rigid demands?",
      "Where in my civil energy projects can I deploy high-pressure CAES cavern technology?",
      "What subterranean salt cavern energy storage milestone am I ready to accomplish today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 4?", answer: "November 4 is Scorpio (Water sign), giving structural discipline, intense focus, and deep resolve to Arcana 4." },
      { question: "How does November 4 differ from October 4?", answer: "October 4 carries Libra offshore platform decommissioning, while November 4 carries Scorpio subterranean salt cavern compressed air energy storage vault engineering." },
      { question: "Which careers suit November 4 best?", answer: "CAES cavern structural engineering, salt dome energy storage design, utility grid vault management, and geological energy direction." },
      { question: "How can November 4 ensure project success?", answer: "Combine rigorous cavern structural safety standards with flexible energy market integration." }
    ],
    imageBrief: "Commanding engineering graphic showing a chief structural lead inspecting high-pressure wellhead valves on a subterranean salt cavern facility, color palette of cavern dark blue, steel silver, and amber light."
  },
  5: {
    snippetAnswer: "November 5 develops ocean floor electromagnetic survey standards under Arcana 5 (The Hierophant). You train geophysicists to deploy towed marine CSEM receivers, establishing seabed resistivity protocols that locate sub-sea hydrocarbon reservoirs.",
    vignetteTitle: "The Marine CSEM Survey Instructor: Teaching Seabed Resistivity Protocols",
    vignetteScenario: "On November 5, a senior geophysicist delivers a week-long intensive training program, teaching petroleum companies how to deploy controlled-source electromagnetic (CSEM) receivers across 3,000-metre ocean floors to locate deep hydrocarbon reserves.",
    birthArchetypeContent: "Marine controlled-source electromagnetic (CSEM) receiver deployment training and seabed resistivity survey protocol codification define November 5 via Arcana 5 in Scorpio. You establish certified industry standards for deep-water electromagnetic subsurface imaging.",
    highFrequencyExpression: "Your geophysics training program designs CSEM receiver array configurations, interprets seabed resistivity anomalies, and develops accreditation frameworks for marine survey teams.",
    shadowChallenges: "Rigid insistence on textbook CSEM processing workflows when field anomalies demand creative interpretation, or dismissing non-traditional resistivity inversion models.",
    vocationAndFinance: "Leads industry certification as a marine CSEM training director, seabed resistivity instructor, and geophysical standards consultant. Training contracts and licensing agreements generate recurring income.",
    reflectionQuestions: [
      "Am I sharing my CSEM seabed resistivity knowledge openly enough to elevate the entire industry?",
      "How can I adapt my electromagnetic survey teaching to embrace new deep-water acquisition technologies?",
      "What marine geophysical certification program am I ready to launch today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 5?", answer: "November 5 is Scorpio (Water sign), infusing The Hierophant's teaching mission with intense investigative depth, electromagnetic precision, and scientific authority." },
      { question: "How does November 5 differ from October 5?", answer: "October 5 carries Libra volcanological geothermal textbooks, while November 5 carries Scorpio marine CSEM seabed resistivity survey certification and training protocols." },
      { question: "What is the financial engine for November 5?", answer: "Licensing marine CSEM survey protocols and delivering certified training programs to global petroleum and renewables companies." },
      { question: "Which Arcana complements November 5?", answer: "Arcana 3 (The Empress) provides creative expansion to help Arcana 5 develop innovative electromagnetic training materials." }
    ],
    imageBrief: "Inspiring illustration of a marine geophysics instructor pointing at glowing CSEM resistivity maps on a large digital display surrounded by trainees, color palette of ocean navy, electric blue, and gold."
  },
  6: {
    snippetAnswer: "November 6 builds Faroese Atlantic salmon aquaculture co-operatives through Arcana 6 (The Lovers). You broker pen-sharing agreements among deep-fjord fish farmers, organizing shared feed barge logistics and sea lice monitoring to maximize sustainable yields.",
    vignetteTitle: "The Faroese Salmon Farm Alliance Director: Coordinating Deep-Fjord Pen Networks",
    vignetteScenario: "On November 6, an aquaculture alliance director negotiates a shared feed barge contract among twelve Faroese fish farming families, synchronizing sea lice treatment schedules and optimizing Atlantic salmon stocking densities across interconnected deep-fjord pens.",
    birthArchetypeContent: "Faroese deep-fjord Atlantic salmon pen network co-operation and shared biosecurity management characterize November 6 via Arcana 6 in Scorpio. You negotiate equitable alliances between independent fish farmers, building collective infrastructure that rivals industrial aquaculture operations.",
    highFrequencyExpression: "Your aquaculture alliance expertise coordinates pen-sharing agreements, sea lice biosecurity protocols, feed barge logistics, and Atlantic salmon export partnerships.",
    shadowChallenges: "Unresolved tension over profit splits when sea lice outbreaks disproportionately affect certain farms, or reluctance to share proprietary feed formulation data with alliance partners.",
    vocationAndFinance: "Directs aquaculture alliances as a salmon farm co-op director, deep-fjord pen network broker, and sustainable fish export strategist. Shared export premiums and EU organic certification contracts build strong revenues.",
    reflectionQuestions: [
      "Am I building Faroese salmon alliances on transparent cost-sharing agreements rather than goodwill alone?",
      "How can I make sea lice biosecurity data fully visible to all alliance partners?",
      "What Atlantic salmon pen co-operation deal am I ready to finalize today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 6?", answer: "November 6 is Scorpio (Water sign), bringing passionate focus, deep loyalty, and structured fairness to Arcana 6's partnership energy." },
      { question: "How does November 6 differ from October 6?", answer: "October 6 carries Libra Bavarian hops kiln co-operatives, while November 6 carries Scorpio Faroese deep-fjord Atlantic salmon pen-sharing aquaculture alliances." },
      { question: "What is the financial key for November 6?", answer: "Structuring high-margin salmon aquaculture alliances with collective EU organic certification to command premium export prices." },
      { question: "Which Arcana complements November 6?", answer: "Arcana 4 (The Emperor) provides governance structure to anchor November 6's aquaculture alliance agreements." }
    ],
    imageBrief: "Warm nautical graphic showing a Faroese aquaculture director on a feed barge shaking hands with a fish farmer against a backdrop of fjord salmon pens under autumn storm clouds, color palette of fjord blue, slate grey, and golden amber."
  },
  7: {
    snippetAnswer: "November 7 routes subsea crawler mining robots under Arcana 7 (The Chariot). You direct autonomous seabed crawlers across deep manganese nodule fields, harvesting battery metals 14,000 feet deep with zero acoustic noise.",
    vignetteTitle: "The Abyssal Seabed Crawler Lead: Navigating Deepwater Nodule Mining",
    vignetteScenario: "Routing a 30-ton autonomous crawler across a deepwater abyssal plain on November 7, a subsea robotics engineer collects battery metals while monitoring seabed silt plumes.",
    birthArchetypeContent: "Seabed manganese nodule crawler navigation and abyssal robotics routing characterize November 7 via Arcana 7 in Scorpio. You operate heavy subsea mining vehicles, harvesting energy metals while controlling ocean floor silt plumes.",
    highFrequencyExpression: "Your subsea robotics command directs abyssal crawler navigation, battery metal harvesting, acoustic plume suppression, and deepwater logistics.",
    shadowChallenges: "Frustration over ocean floor telemetry delays, pushing crawler motors past thermal limits, or short tempers with surface deck crews.",
    vocationAndFinance: "Pioneers deep sea robotics as a subsea crawler director, abyssal mining engineer, battery metal strategist, and robotics founder. Mineral supply agreements yield high returns.",
    reflectionQuestions: [
      "Am I balancing subsea crawler speed with strict deep-sea environmental protection?",
      "How can I inspire my ocean robotics crew during grueling deepwater field missions?",
      "What zero-emission abyssal metal harvesting milestone am I ready to achieve this year?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 7?", answer: "November 7 is Scorpio (Water sign), giving intense focus, intuitive depth, and subsea engineering agility to Arcana 7." },
      { question: "How does November 7 differ from October 7?", answer: "October 7 carries Libra urban eVTOL air-taxis, while November 7 carries Scorpio autonomous subsea crawler seabed manganese nodule mining navigation." },
      { question: "What is the technical edge of November 7?", answer: "Routing heavy subsea crawlers across 14,000-foot deep abyssal nodule fields with zero acoustic disruption." },
      { question: "Which Arcana complements November 7?", answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's subsea robotics operations." }
    ],
    imageBrief: "Dynamic subsea robotics graphic showing a heavy yellow crawler vehicle moving across a dark ocean seabed collecting metallic nodules, color palette of ocean navy, vehicle yellow, and sonar cyan."
  },
  8: {
    snippetAnswer: "November 8 resolves international shipping emissions disputes through Arcana 8 (Justice). You serve as an IMO maritime emissions tribunal judge, applying MARPOL Annex VI regulations to adjudicate contested carbon intensity indicator (CII) penalty disputes between flag states and shipowners.",
    vignetteTitle: "The IMO Maritime Emissions Tribunal Judge: Adjudicating CII Penalty Disputes",
    vignetteScenario: "On November 8, a maritime emissions tribunal judge examines voyage data recorder logs and fuel oil consumption records, ruling whether a bulk carrier's carbon intensity indicator rating justifies a $2.4 million MARPOL penalty imposed by a Pacific Island flag state.",
    birthArchetypeContent: "MARPOL Annex VI carbon intensity indicator penalty adjudication and international maritime emissions tribunal procedure characterize November 8 via Arcana 8 in Scorpio. You apply shipping law frameworks to deliver impartial verdicts, protecting both flag states and shipowners from regulatory overreach.",
    highFrequencyExpression: "Your maritime legal precision adjudicates CII penalty appeals, voyage data log interpretation, MARPOL compliance verification, and IMO tribunal procedure.",
    shadowChallenges: "Rigid application of CII penalty matrices without considering extraordinary voyage circumstances, or allowing flag state political pressure to distort neutral judgment.",
    vocationAndFinance: "Serves as a maritime emissions tribunal judge, MARPOL compliance auditor, CII ratings arbitrator, and IMO policy consultant. Retainers from shipping conglomerates and flag state governments provide substantial income.",
    reflectionQuestions: [
      "Am I applying MARPOL regulations with equal impartiality to both powerful shipping companies and small flag states?",
      "How can I strengthen maritime emissions tribunal procedure to prevent selective enforcement?",
      "What shipping emissions compliance standard requires clearer judicial guidance today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 8?", answer: "November 8 is Scorpio (Water sign), bringing penetrating legal analysis, ethical rigor, and institutional authority to Arcana 8." },
      { question: "How does November 8 differ from October 8?", answer: "October 8 carries Libra subsea cable landing easement arbitration, while November 8 carries Scorpio IMO maritime emissions tribunal adjudication of MARPOL CII penalty disputes." },
      { question: "What is the financial rule for November 8?", answer: "Maintain absolute MARPOL compliance impartiality and refuse retainers that compromise judicial independence in shipping emissions rulings." },
      { question: "Which Arcana complements November 8?", answer: "Arcana 11 (Strength) provides the stamina to sustain lengthy maritime tribunal hearings without compromising judgement quality." }
    ],
    imageBrief: "Authoritative legal artwork showing a maritime judge reviewing glowing digital ship voyage logs at a tribunal bench, with IMO maritime emission charts on screen, color palette of admiralty navy, gold seal, and cool grey."
  },
  9: {
    snippetAnswer: "November 9 catalogues Greenland ice sheet melt-pond spectroscopy data through Arcana 9 (The Hermit). You use airborne hyperspectral sensors to map surface albedo changes on Greenland's ice sheet, isolating algae bloom patches that accelerate melt-pond drainage cycles.",
    vignetteTitle: "The Greenland Melt-Pond Spectroscopist: Mapping Ice Sheet Algae Albedo",
    vignetteScenario: "On November 9, a cryosphere scientist reviews airborne hyperspectral imagery collected during summer flights over Greenland, mapping dark algae bloom patches that reduce surface albedo and accelerate melt-pond drainage channels across the ice sheet.",
    birthArchetypeContent: "Greenland ice sheet surface algae hyperspectral albedo mapping and melt-pond drainage cycle monitoring define November 9 via Arcana 9 in Scorpio. You work in solitary analytical silence, interpreting airborne spectral imagery to track darkening ice and predict accelerated ice mass loss.",
    highFrequencyExpression: "Your cryosphere remote sensing work maps hyperspectral albedo shifts, algae bloom boundaries, melt-pond formation rates, and ice sheet drainage network evolution.",
    shadowChallenges: "Over-extended solitary data analysis sessions, reluctance to publish algae bloom findings before achieving absolute certainty, or dismissing peer review feedback on spectral interpretation.",
    vocationAndFinance: "Archives cryosphere data as a glacial spectroscopist, ice sheet albedo analyst, melt-pond remote sensing lead, and polar data consultant. Research grants and government climate contracts fund operations.",
    reflectionQuestions: [
      "Am I sharing my Greenland ice sheet algae albedo findings openly with the polar research community?",
      "How can I translate melt-pond spectroscopy data into actionable sea-level rise projections?",
      "What algae bloom albedo mapping standard am I ready to publish today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 9?", answer: "November 9 is Scorpio (Water sign), blending deep investigative focus with The Hermit's patient, solitary analytical mastery." },
      { question: "How does November 9 differ from October 9?", answer: "October 9 carries Libra high-alpine cave ice crystal isotope archiving, while November 9 carries Scorpio Greenland ice sheet surface algae hyperspectral albedo mapping and melt-pond analysis." },
      { question: "Why does November 9 thrive in solitary data analysis?", answer: "Uninterrupted focus on spectral imagery allows November 9 to identify subtle algae bloom boundaries that team environments might miss." },
      { question: "Which Arcana complements November 9?", answer: "Arcana 17 (The Star) provides forward-looking vision to help November 9 apply spectral ice data toward global climate futures." }
    ],
    imageBrief: "Atmospheric scientific illustration of a cryosphere researcher examining false-colour hyperspectral ice maps on a laptop inside a remote polar research station, dark algae bloom patches visible on glowing cyan ice, color palette of ice white, algae purple, and data amber."
  },
  10: {
    snippetAnswer: "November 10 optimizes tidal barrage Kaplan turbine array dispatch under Arcana 10 (Wheel of Fortune). You schedule bidirectional turbine generating and pumping cycles across estuary barrages, capturing 580GWh annually by synchronizing generation windows with amphidromic tidal cycle nodes.",
    vignetteTitle: "The Tidal Barrage Kaplan Array Scheduler: Optimizing Bidirectional Turbine Dispatch",
    vignetteScenario: "On November 10, a tidal barrage operations scheduler programs bidirectional Kaplan turbine dispatch sequences across a 24-turbine La Rance-style estuary barrage, synchronizing ebb and flood generation windows with spring neap cycle forecasts to deliver 580GWh of grid power annually.",
    birthArchetypeContent: "Tidal barrage bidirectional Kaplan turbine dispatch scheduling and amphidromic tidal cycle generation window optimization define November 10 via Arcana 10 in Scorpio. You orchestrate estuary turbine arrays, rotating fortune between ebb and flood generation cycles to extract maximum grid power.",
    highFrequencyExpression: "Your tidal barrage scheduling expertise programs Kaplan turbine dispatch sequences, optimizes ebb-flood generation windows, calibrates sluice gate sequencing, and forecasts spring neap cycle output.",
    shadowChallenges: "Over-optimizing short-term Kaplan dispatch windows without accounting for estuary sediment silting impacts, or ignoring marine ecology advisories when extending peak generation periods.",
    vocationAndFinance: "Manages tidal barrage operations as a Kaplan turbine dispatch scheduler, estuary barrage operations director, and tidal renewable energy strategist. Electricity market contracts and grid stability retainers generate consistent revenues.",
    reflectionQuestions: [
      "Am I calibrating Kaplan turbine dispatch schedules against both spring neap amplitude forecasts and estuary ecosystem health indicators?",
      "How can I use bidirectional turbine pumping cycles to store grid energy during surplus renewable generation periods?",
      "What tidal barrage generation optimization milestone am I ready to implement today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 10?", answer: "November 10 is Scorpio (Water sign), giving intense scheduling precision, tidal cycle intuition, and engineering drive to Arcana 10." },
      { question: "How does November 10 differ from October 10?", answer: "October 10 carries Libra estuarine salinity gradient pressure-retarded osmosis turbines, while November 10 carries Scorpio bidirectional Kaplan tidal barrage turbine dispatch scheduling and amphidromic cycle optimization." },
      { question: "What is the technical secret of November 10?", answer: "Synchronizing bidirectional Kaplan turbine ebb-flood generation windows with amphidromic tidal cycle nodes to maximize annual barrage energy yield." },
      { question: "Which Arcana complements November 10?", answer: "Arcana 4 (The Emperor) provides structured operational governance to sustain November 10's tidal barrage scheduling systems." }
    ],
    imageBrief: "Regal symbolist graphic of a golden celestial wheel turning above a cross-section of a tidal barrage with Kaplan turbines rotating in bidirectional flow, tidal cycle waveform on screen, color palette of estuary teal, turbine steel, and schedule amber."
  },
  11: {
    snippetAnswer: "November 11 leads Carpathian wolf pack GPS satellite collar population monitoring through Arcana 11 (Strength / Master 11). You track wolf pack territory use across 800,000 hectares of Carpathian montane forest, using GPS collar fix data to negotiate livestock guardian dog deployment with Romanian shepherds.",
    vignetteTitle: "The Carpathian Wolf Pack Telemetrist: Monitoring GPS Collar Territory Networks",
    vignetteScenario: "On November 11, a large carnivore biologist downloads GPS fix clusters from seventeen satellite-collared wolves across three Carpathian packs, mapping pack territory overlap zones to recommend protective livestock guardian dog deployment before winter sheep drives begin.",
    birthArchetypeContent: "Carpathian montane forest wolf pack GPS satellite collar territory network monitoring and livestock conflict mitigation negotiation characterize November 11 via Arcana 11 in Scorpio. You combine physical mountain field endurance with quiet somatic authority, earning wolf-human coexistence through data-led negotiation.",
    highFrequencyExpression: "Your wolf telemetry expertise analyzes GPS collar fix clusters, maps pack territorial boundaries, quantifies livestock conflict hotspots, and negotiates guardian dog deployment with Romanian shepherds.",
    shadowChallenges: "Exhaustion during winter Carpathian mountain collar replacement expeditions, or allowing rancher political pressure to bias GPS territory analysis toward wolf removal rather than coexistence solutions.",
    vocationAndFinance: "Leads large carnivore conservation as a Carpathian wolf telemetrist, GPS collar population biologist, and livestock coexistence consultant. EU Life+ conservation grants and livestock protection insurance partnerships fund field operations.",
    reflectionQuestions: [
      "Am I maintaining physical conditioning between Carpathian mountain expeditions to replace GPS collars on resident pack alphas?",
      "How can I use wolf pack GPS fix cluster analysis to design livestock guardian dog deployment zones that genuinely reduce predation?",
      "What Carpathian wolf coexistence programme milestone am I ready to deliver today?"
    ],
    faqItems: [
      { question: "Why is November 11 a Master Number birthday?", answer: "Because 11 is a Master Number in numerology, granting extraordinary somatic stamina, mountain field resilience, and quiet authority in wolf-human coexistence negotiation." },
      { question: "What zodiac sign is November 11?", answer: "November 11 is Scorpio (Water sign), adding intense investigative depth, territorial awareness, and pack leadership intuition to Arcana 11's physical and moral strength." },
      { question: "How does November 11 differ from October 11?", answer: "October 11 carries Libra alpine ibex sheer cliff sanctuary warden work, while November 11 carries Scorpio Carpathian montane wolf pack GPS satellite collar territory monitoring and livestock coexistence negotiation." },
      { question: "What is the health key for November 11?", answer: "Systematic altitude acclimatization and recovery between Carpathian mountain GPS collar replacement expeditions during winter snowpack conditions." }
    ],
    imageBrief: "Inspiring conservation artwork of a large carnivore biologist reviewing wolf GPS collar fix cluster maps on a rugged tablet at a Carpathian forest ridgeline, satellite collar equipment visible, color palette of conifer forest green, montane snow white, and GPS data amber."
  },
  12: {
    snippetAnswer: "November 12 upcycles pine timber bark lignin via Arcana 12 (The Hanged Man). You ferment discarded sawmill pine bark into carbon-negative biodegradable bio-plastics and structural eco-resins through a radical inversion of industrial forestry waste streams.",
    vignetteTitle: "The Pine Bark Lignin Inverter: Fermenting Sawmill Waste into Carbon-Negative Biopolymers",
    vignetteScenario: "On November 12, a green materials engineer reverses conventional thinking by running discarded pine bark through a lignin fermentation cascade, producing carbon-negative biodegradable structural sheets that replace petrochemical plastics in automotive door panels.",
    birthArchetypeContent: "Sawmill pine bark lignin fermentation and carbon-negative biodegradable bio-plastic synthesis through radical waste-stream inversion characterize November 12 via Arcana 12 in Scorpio. You suspend conventional material science logic, discovering that turning forestry waste upside-down produces premium structural polymers.",
    highFrequencyExpression: "Your sustainable material inversion skill ferments pine lignin into carbon-negative bio-plastics, structural eco-resins, and compostable automotive panel replacements.",
    shadowChallenges: "Prolonged indecision during lignin polymerization pilot runs, inability to stop refining the process before commercializing, or frustration with traditional plastics manufacturers who resist switching.",
    vocationAndFinance: "Pioneers eco-materials as a pine lignin fermenter, carbon-negative polymer engineer, and sustainable automotive supplier. Bioplastic patents generate licensing revenue.",
    reflectionQuestions: [
      "What conventional forestry waste logic must I completely invert to unlock my highest value?",
      "Am I willing to wait through the lignin fermentation curing cycle before commercializing?",
      "What pine bark bio-plastic inversion breakthrough am I ready to patent today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 12?", answer: "November 12 is Scorpio (Water sign), giving intense transformative focus, detail mastery, and inverted thinking to The Hanged Man." },
      { question: "How does November 12 differ from October 12?", answer: "October 12 carries Libra apple pomace bio-leather repurposing, while November 12 carries Scorpio pine bark lignin fermentation into carbon-negative structural biopolymers." },
      { question: "What is the core lesson for November 12?", answer: "That inverting the forestry waste stream—treating pine bark as the primary raw material—produces superior bio-plastics over virgin polymer synthesis." },
      { question: "Which Arcana complements November 12?", answer: "Arcana 4 (The Emperor) provides the structured manufacturing discipline to scale November 12's lignin fermentation process commercially." }
    ],
    imageBrief: "Mystical modern artwork showing pine bark flowing downward into a glowing fermentation vat, emerging as clear structural bio-plastic panels, color palette of pine brown, fermentation amber, and bio-plastic transparent white."
  },
  13: {
    snippetAnswer: "November 13 terraforms flooded coal mine shafts via Arcana 13 (Transformation). You install geothermal heat exchangers in 1,500-foot flooded coal mine pits, converting abandoned mine shafts into clean municipal heating grids.",
    vignetteTitle: "The Flooded Coal Mine Geothermal Lead: Converting Pit Shafts into Heating Grids",
    vignetteScenario: "Connecting heat exchangers into a 1,500-foot flooded coal mine shaft on November 13, a geothermal engineer delivers 45°C warm water to heat 10,000 homes cleanly.",
    birthArchetypeContent: "Subterranean mine water thermal heat exchanger installation and coal pit conversion characterize November 13 via Arcana 13 in Scorpio. You drive radical industrial land renewals, converting flooded coal shafts into zero-emission municipal heating grids.",
    highFrequencyExpression: "Your energy restoration mastery drives flooded coal mine heat recovery, geothermal exchanger design, district heating greening, and coal pit transformation.",
    shadowChallenges: "Skepticism from legacy coal boards during feasibility trials, slow heat exchanger installation, or over-working engineering crews.",
    vocationAndFinance: "Heads coal pit conversion as a geothermal shaft engineer, mine water thermal specialist, and green heating developer. Revenues accrue through municipal energy contracts.",
    reflectionQuestions: [
      "What abandoned coal pit mine am I called to transform into a clean geothermal heating grid?",
      "How can I apply mine water heat pump technology to accelerate municipal clean energy transitions?",
      "Where in my career is a radical environmental rebirth waiting to happen?"
    ],
    faqItems: [
      { question: "Is November 13 an unlucky birthday in Destiny Matrix?", answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing energy rebirth, coal pit geothermal conversion, and high-impact district heating renewal." },
      { question: "What zodiac sign is November 13?", answer: "November 13 is Scorpio (Water sign), bringing intense focus, intuitive depth, and resilience to Arcana 13's transformative power." },
      { question: "What is the financial engine for November 13?", answer: "Executing flooded coal mine geothermal shaft conversions and municipal heat supply contracts for clean energy funds." },
      { question: "Which Arcana complements November 13?", answer: "Arcana 19 (The Sun) brings radiant thermal energy to illuminate November 13's mine conversion achievements." }
    ],
    imageBrief: "Striking artwork of a dark abandoned coal mine pit shaft transforming into a glowing blue geothermal heating station supplying warm water to a modern town under a clear sky, color palette of coal black, geothermal cyan, and sun gold."
  },
  14: {
    snippetAnswer: "November 14 engineers estuarine fish ladder passage systems through Arcana 14 (Temperance). You design Denil fishways and engineered pool-and-weir passages across tidal barrages, blending tidal flow timing with spawning migration windows to restore Atlantic salmon access.",
    vignetteTitle: "The Estuarine Fish Passage Engineer: Designing Tidal Barrage Denil Fishways",
    vignetteScenario: "On November 14, a hydraulic passage engineer calibrates the gate timing of a tidal barrage Denil fishway, balancing upstream freshwater flow against tidal salinity intrusion to open a 6-hour migration window for Atlantic salmon returning to natal spawning rivers.",
    birthArchetypeContent: "Tidal barrage Denil fishway hydraulic calibration and Atlantic salmon passage window engineering define November 14 via Arcana 14 in Scorpio. You blend freshwater hydrology with marine tidal dynamics, synthesizing upstream and downstream forces to restore fish migration continuity.",
    highFrequencyExpression: "Your fish passage engineering balances Denil fishway hydraulics, tidal gate timing, salinity gradient management, and salmon spawning migration restoration.",
    shadowChallenges: "Over-engineering fish passage geometry without field-testing with live salmon, or adjusting gate timing so frequently that operational maintenance teams cannot follow a consistent schedule.",
    vocationAndFinance: "Restores fish migration as a fishway hydraulic engineer, tidal barrage passage designer, and salmon migration consultant. Contracts with water authorities and fisheries boards generate steady project-based income.",
    reflectionQuestions: [
      "Am I blending tidal timing data with salmon migration behaviour to achieve genuinely functional fishways?",
      "How can I simplify my Denil fishway designs for cost-effective replication across multiple tidal barrages?",
      "What fish passage hydraulic milestone am I ready to certify and deploy today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 14?", answer: "November 14 is Scorpio (Water sign), giving intense investigative depth, practical synthesis, and tidal intuition to Arcana 14." },
      { question: "How does November 14 differ from October 14?", answer: "October 14 carries Libra coastal lagoon sediment flushing gate management, while November 14 carries Scorpio tidal barrage Denil fishway calibration for Atlantic salmon migration restoration." },
      { question: "What is the financial secret of November 14?", answer: "Developing certified fish passage templates for replication across dozens of tidal barrages under national fisheries restoration programmes." },
      { question: "Which Arcana complements November 14?", answer: "Arcana 8 (Justice) provides regulatory authority to enforce November 14's fish passage mandates through water authority compliance orders." }
    ],
    imageBrief: "Harmonious artwork of a hydraulic engineer adjusting steel fishway gate controls beside a tidal barrage while Atlantic salmon swim upward through a Denil passage channel, color palette of river blue, salmon orange, and tidal grey."
  },
  15: {
    snippetAnswer: "November 15 prosecutes illegal wildlife trafficking networks through Arcana 15 (The Devil). You deploy financial intelligence tools to trace dark-web ivory and rhino horn transaction ledgers, building money-laundering prosecution cases that dismantle poaching kingpin networks.",
    vignetteTitle: "The Wildlife Financial Crime Prosecutor: Dismantling Ivory Trade Networks",
    vignetteScenario: "On November 15, a wildlife financial crime prosecutor uses cross-border financial intelligence to trace $18 million in ivory sale proceeds through three shell companies, securing asset forfeiture orders that dismantle a transnational rhino horn trafficking network.",
    birthArchetypeContent: "Dark-web ivory and rhino horn transaction tracing and financial intelligence wildlife crime prosecution define November 15 via Arcana 15 in Scorpio. You expose money laundering chains that fund poaching kingpins, using forensic accounting to seize criminal proceeds.",
    highFrequencyExpression: "Your wildlife crime legal forensics trace ivory transaction ledgers, dark-web poaching marketplaces, financial shell company structures, and court asset seizure proceedings.",
    shadowChallenges: "Obsessive pursuit of wildlife trafficking networks at the expense of personal boundaries, or using legal intensity as a power tool rather than a conservation mission.",
    vocationAndFinance: "Enforces wildlife protection law as a financial crime prosecutor, ivory trafficking investigator, and dark-web forensic analyst. Retainers flow from conservation foundations and international law enforcement agencies.",
    reflectionQuestions: [
      "Am I using my wildlife legal forensics to protect endangered species or to fuel personal prosecutorial ambition?",
      "What ivory or rhino horn financial chain am I called to expose and dismantle today?",
      "How can I bring complete financial transparency to wildlife trafficking prosecution?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 15?", answer: "November 15 is Scorpio (Water sign), infusing Arcana 15's legal power with investigative intensity, financial forensic precision, and unwavering moral courage." },
      { question: "How does November 15 differ from October 15?", answer: "October 15 carries Libra shark finning vessel satellite tracking litigation, while November 15 carries Scorpio dark-web ivory and rhino horn financial chain prosecution and asset seizure." },
      { question: "What is the financial engine for November 15?", answer: "Prosecuting wildlife trafficking money laundering and securing court asset forfeiture orders on poaching kingpin estates." },
      { question: "Which Arcana complements November 15?", answer: "Arcana 14 (Temperance) provides measured balance to prevent prosecutorial overreach in wildlife crime cases." }
    ],
    imageBrief: "Dramatic legal artwork showing a financial crime prosecutor pointing at glowing dark-web ivory transaction flowcharts on a courtroom screen, color palette of court mahogany, deep forest green, and gold."
  },
  16: {
    snippetAnswer: "November 16 detects structural fatigue in subsea oil pipeline risers through Arcana 16 (The Tower). You deploy guided-wave ultrasonic testing (GWUT) sensors along flexible riser pipes, identifying hidden fatigue cracks before they trigger catastrophic blowouts on deep-water production platforms.",
    vignetteTitle: "The Deepwater Riser Fatigue Inspector: Deploying Guided-Wave Ultrasonic Testing",
    vignetteScenario: "On November 16, a subsea pipeline integrity engineer lowers GWUT transducer rings around a 3,000-metre flexible riser near a production platform, detecting a 4mm fatigue crack at a stress concentration zone before it propagates into a catastrophic gas release.",
    birthArchetypeContent: "Deep-water flexible riser guided-wave ultrasonic fatigue crack detection and subsea pipeline integrity inspection characterize November 16 via Arcana 16 in Scorpio. You expose hidden structural failures in critical offshore infrastructure before they escalate into sudden catastrophic collapses.",
    highFrequencyExpression: "Your pipeline integrity engineering deploys GWUT transducer arrays, interprets guided-wave defect signatures, tracks fatigue crack propagation rates, and mandates production platform riser replacement.",
    shadowChallenges: "Triggering unnecessary platform shutdowns by over-interpreting borderline GWUT anomalies, or suppressing valid fatigue warnings due to operator pressure to maintain production targets.",
    vocationAndFinance: "Inspects subsea infrastructure as a riser fatigue specialist, GWUT pipeline engineer, and offshore structural integrity consultant. Inspection contracts and emergency remediation retainers generate substantial income.",
    reflectionQuestions: [
      "Am I reporting riser fatigue findings with the courage to recommend production shutdown even under operator pressure?",
      "How can I use GWUT technology to create a proactive fatigue monitoring programme rather than reactive inspections?",
      "What subsea riser integrity standard am I ready to define and enforce today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 16?", answer: "November 16 is Scorpio (Water sign), bringing penetrating structural analysis, intense detail focus, and courageous truth-telling to The Tower." },
      { question: "Is Arcana 16 a difficult birth archetype?", answer: "Arcana 16 brings sudden structural revelations—its highest purpose is exposing hidden fatigue before catastrophic failure, not causing the collapse itself." },
      { question: "Which careers suit November 16 best?", answer: "Deepwater riser guided-wave ultrasonic inspection, subsea pipeline fatigue analysis, offshore structural integrity consulting, and production platform integrity management." },
      { question: "How can November 16 navigate sudden structural crises?", answer: "Trust GWUT sensor data, communicate findings transparently, and implement riser replacement protocols before fatigue cracks propagate to failure." }
    ],
    imageBrief: "Striking engineering artwork of a subsea inspector attaching GWUT transducer rings around a deepwater flexible riser near a production platform, showing internal crack detection visualization, color palette of ocean navy, riser steel, and crack-detection amber."
  },
  17: {
    snippetAnswer: "November 17 maps permafrost thaw subsidence via Arcana 17 (The Star). You process synthetic aperture radar (SAR) satellite interferometry, generating 3D terrain deformation maps to shield Arctic pipelines from thawing permafrost.",
    vignetteTitle: "The Arctic InSAR Deformation Analyst: Predicting Permafrost Infrastructure Failure",
    vignetteScenario: "On November 17, a satellite geodesist processes Sentinel-1 InSAR differential interferograms, detecting 8mm of seasonal permafrost thaw subsidence beneath a Trans-Siberian gas pipeline, triggering an urgent infrastructure stress assessment.",
    birthArchetypeContent: "Sentinel-1 InSAR differential interferogram processing and permafrost thaw subsidence prediction for Arctic pipeline infrastructure integrity define November 17 via Arcana 17 in Scorpio. You translate orbital radar phase-shift data into actionable infrastructure deformation alerts.",
    highFrequencyExpression: "Your InSAR geodesy work processes differential interferograms, quantifies permafrost active-layer thaw settlement rates, and delivers infrastructure failure prediction reports to pipeline operators.",
    shadowChallenges: "Getting lost in interferogram fringe interpretation without delivering actionable infrastructure risk reports, or over-qualifying subsidence predictions to avoid committing to a failure timeline.",
    vocationAndFinance: "Delivers satellite geodesy as an InSAR deformation analyst, permafrost infrastructure risk consultant, and Arctic pipeline integrity specialist. Energy company retainers and governmental Arctic safety contracts generate sustained income.",
    reflectionQuestions: [
      "Am I delivering permafrost subsidence predictions with enough precision to trigger timely infrastructure remediation?",
      "How can I use InSAR seasonal deformation time-series to distinguish frost heave from thaw settlement?",
      "What Arctic pipeline deformation threshold requires an immediate infrastructure alert today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 17?", answer: "November 17 is Scorpio (Water sign), bringing orbital precision, investigative depth, and forward-looking vision to Arcana 17." },
      { question: "How does November 17 differ from October 17?", answer: "October 17 carries Libra orbital thermal infrared magma heat anomaly mapping, while November 17 carries Scorpio Sentinel-1 InSAR differential interferogram permafrost thaw subsidence analysis for pipeline infrastructure." },
      { question: "What is the financial engine for November 17?", answer: "Delivering InSAR permafrost deformation monitoring retainers to Arctic pipeline operators and government infrastructure safety agencies." },
      { question: "Which Arcana complements November 17?", answer: "Arcana 21 (The World) helps November 17 scale InSAR deformation monitoring into a global infrastructure safety platform." }
    ],
    imageBrief: "Breathtaking artwork of a satellite geodesist interpreting glowing InSAR interferogram fringe patterns on a monitor, showing permafrost thaw subsidence beneath an Arctic pipeline, color palette of radar cyan, Arctic white, and pipeline steel."
  },
  18: {
    snippetAnswer: "November 18 tracks cavern bat sonar acoustics via Arcana 18 (The Moon). You position ultrasound acoustic microphone arrays in subterranean karst caverns, recording echolocation pulses to protect hibernating bat roosts.",
    vignetteTitle: "The Subterranean Bat Echolocation Researcher: Decoding Karst Ultrasound Signatures",
    vignetteScenario: "On November 18, a cave bio-acoustician lowers broadband ultrasonic microphone arrays into a 180-metre karst chamber, recording species-specific echolocation call signatures from 40,000 greater horseshoe bats to establish a hibernation disturbance threshold.",
    birthArchetypeContent: "Karst cavern greater horseshoe bat echolocation call signature recording and hibernation disturbance threshold research characterize November 18 via Arcana 18 in Scorpio. You decode subterranean ultrasound atmospherics to establish scientifically defensible hibernation protection standards.",
    highFrequencyExpression: "Your cave bio-acoustics research records species-specific bat call signatures, quantifies cave acoustic reverberation, and establishes hibernation disturbance decibel thresholds.",
    shadowChallenges: "Becoming consumed by the eerie subterranean acoustic environment, over-attributing irregular call patterns to external disturbance without controlling for natural thermal fluctuations.",
    vocationAndFinance: "Protects bat hibernation as a cave echolocation researcher, karst bio-acoustician, and bat sanctuary compliance consultant. Acoustic monitoring contracts with planning authorities and conservation NGOs generate reliable income.",
    reflectionQuestions: [
      "Am I trusting echolocation call signature data to establish scientifically sound bat disturbance thresholds?",
      "How can I use karst acoustics research to prevent quarrying and mining from destroying bat hibernation roosts?",
      "What cave echolocation monitoring standard am I ready to publish today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 18?", answer: "November 18 is Scorpio (Water sign), blending deep subterranean intuition with precise echolocation acoustic analysis in Arcana 18." },
      { question: "How does November 18 differ from October 18?", answer: "October 18 carries Libra forest canopy nocturnal owl silent-flight biomimicry, while November 18 carries Scorpio karst cavern greater horseshoe bat echolocation call signature recording and hibernation disturbance thresholds." },
      { question: "What is the technical superpower of November 18?", answer: "Recording species-specific bat echolocation signatures in reverberant karst chambers to define scientifically defensible hibernation protection zones." },
      { question: "Which Arcana complements November 18?", answer: "Arcana 19 (The Sun) brings daylight scientific clarity to ground November 18's nocturnal cave research in observable, reproducible data." }
    ],
    imageBrief: "Atmospheric symbolist painting of a cave researcher lowering ultrasonic microphone arrays into a dark stalactite cavern, showing glowing echolocation waveform readouts on a tablet, color palette of cave shadow, ultrasound cyan, and bioluminescent amber."
  },
  19: {
    snippetAnswer: "November 19 designs floating offshore photovoltaic arrays through Arcana 19 (The Sun). You engineer buoyancy-stabilized floating solar panel platforms for deep reservoir installations, integrating bifacial PV modules with underwater mooring systems to deliver 50MW of continuous clean power.",
    vignetteTitle: "The Floating Reservoir Solar Platform Lead: Engineering Deep-Water Bifacial PV Arrays",
    vignetteScenario: "On November 19, a floating solar engineer deploys a 50MW bifacial photovoltaic platform onto a deep hydroelectric reservoir, anchoring HDPE pontoon arrays with catenary mooring chains and integrating underwater power cables to the adjacent dam's grid connection.",
    birthArchetypeContent: "Deep hydroelectric reservoir floating bifacial photovoltaic platform engineering and catenary mooring system integration define November 19 via Arcana 19 in Scorpio. You combine solar panel buoyancy design with reservoir hydrodynamics, building platforms that generate clean electricity while reducing reservoir evaporation.",
    highFrequencyExpression: "Your floating solar engineering excels in bifacial PV pontoon buoyancy design, catenary mooring calibration, reservoir wave load analysis, and integrated hydro-solar power delivery.",
    shadowChallenges: "Overconfidence in pontoon buoyancy calculations before wave load stress-testing under storm conditions, or overlooking biofouling management protocols for underwater mooring chains.",
    vocationAndFinance: "Powers reservoirs cleanly as a floating PV platform engineer, bifacial solar array designer, and hydro-solar integration lead. Utility power purchase agreements and renewable project development fees generate strong revenues.",
    reflectionQuestions: [
      "Am I rigorously stress-testing floating solar platform mooring designs against extreme reservoir storm conditions?",
      "How can I integrate bifacial PV floating arrays with reservoir hydrology to maximize combined hydro-solar output?",
      "What floating solar platform milestone am I ready to commission today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 19?", answer: "November 19 is Scorpio (Water sign), bringing deep engineering analysis, technical precision, and solar radiance to Arcana 19." },
      { question: "How does November 19 differ from October 19?", answer: "October 19 carries Libra floating solar thermal ocean desalination dome arrays, while November 19 carries Scorpio deep reservoir floating bifacial photovoltaic platform and catenary mooring engineering." },
      { question: "What is the financial engine for November 19?", answer: "Developing floating bifacial solar reservoir platforms under long-term utility power purchase agreements and clean energy project development contracts." },
      { question: "Which Arcana complements November 19?", answer: "Arcana 21 (The World) helps November 19 scale floating reservoir solar platforms across international hydroelectric infrastructure globally." }
    ],
    imageBrief: "Radiant engineering artwork of a floating bifacial solar array deployed across a deep blue reservoir, catenary mooring chains visible below the surface, sunlight reflecting off bifacial panels, color palette of reservoir blue, solar gold, and mooring steel."
  },
  20: {
    snippetAnswer: "November 20 recovers prehistoric DNA from Arctic cave bear fossils through Arcana 20 (Judgement). You extract and sequence ancient mitochondrial DNA from 35,000-year-old Ursus spelaeus bone collagen preserved in permafrost, reconstructing Pleistocene megafauna evolutionary lineages.",
    vignetteTitle: "The Pleistocene Cave Bear Palaeogenomicist: Sequencing Ancient Mitochondrial DNA",
    vignetteScenario: "On November 20, a palaeogenomicist extracts intact mitochondrial DNA from permafrost-preserved Ursus spelaeus femur collagen, sequencing 35,000-year-old genomic data to reconstruct the phylogenetic divergence point between cave bears and modern brown bears.",
    birthArchetypeContent: "Pleistocene cave bear permafrost bone collagen ancient mitochondrial DNA extraction and Ursus spelaeus phylogenetic divergence sequencing define November 20 via Arcana 20 in Scorpio. You retrieve ancient genetic information from frozen fossil records to reconstruct extinct megafauna evolutionary histories.",
    highFrequencyExpression: "Your palaeogenomics work extracts ancient mitochondrial DNA, sequences Pleistocene cave bear genomes, reconstructs phylogenetic divergence timelines, and publishes Ursus spelaeus evolutionary histories.",
    shadowChallenges: "Contamination anxiety preventing timely publication of ancient DNA results, or over-interpreting fragmentary mitochondrial sequences without acknowledging degradation uncertainty.",
    vocationAndFinance: "Reconstructs megafauna history as a palaeogenomicist, ancient DNA extraction specialist, and Pleistocene evolutionary researcher. University grants and natural history museum partnerships fund laboratory operations.",
    reflectionQuestions: [
      "Am I publishing my cave bear ancient DNA findings despite incomplete genomic coverage, trusting their scientific value?",
      "How can I use Pleistocene palaeogenomics to inform modern bear conservation policy?",
      "What Ursus spelaeus mitochondrial sequencing milestone am I ready to submit for peer review today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 20?", answer: "November 20 is Scorpio (Water sign), bringing deep investigative intensity, death-and-rebirth insight, and genomic precision to Arcana 20." },
      { question: "How does November 20 differ from October 20?", answer: "October 20 carries Libra Cretaceous amber fossil dinosaur feather inclusion cataloguing, while November 20 carries Scorpio Pleistocene cave bear permafrost bone ancient mitochondrial DNA extraction and phylogenetic sequencing." },
      { question: "Which careers suit November 20 best?", answer: "Ancient DNA palaeogenomics, Pleistocene megafauna evolutionary research, permafrost fossil extraction, and natural history museum phylogenetics leadership." },
      { question: "How can November 20 overcome scientific self-doubt?", answer: "Trust that fragmentary ancient DNA evidence, rigorously extracted and sequenced, contributes irreplaceable evolutionary knowledge even when incomplete." }
    ],
    imageBrief: "Inspiring scientific artwork of a palaeogenomicist examining a glowing ancient DNA sequence readout from a permafrost cave bear bone sample inside a clean-room laboratory, color palette of permafrost blue, genomic green, and laboratory white."
  },
  21: {
    snippetAnswer: "November 21 builds satellite quantum key distribution networks via Arcana 21 (The World). You integrate low-earth-orbit QKD satellites with ground station entanglement receivers, establishing globally distributed quantum encryption backbones that protect national financial clearing systems.",
    vignetteTitle: "The LEO QKD Satellite Network Integrator: Building Quantum Encryption Backbones",
    vignetteScenario: "On November 21, a quantum communications engineer integrates a low-earth-orbit QKD satellite constellation with ground-based entanglement receiver stations across six continents, delivering quantum-secured encryption keys to national central bank financial clearing systems.",
    birthArchetypeContent: "Low-earth-orbit quantum key distribution satellite constellation ground station integration and global quantum encryption backbone deployment define November 21 via Arcana 21 in Scorpio. You unite space-based quantum physics with terrestrial financial infrastructure, building the world's most secure communications architecture.",
    highFrequencyExpression: "Your quantum satellite integration expertise connects LEO QKD constellations, entanglement receiver ground stations, and quantum-secured national financial clearing systems.",
    shadowChallenges: "Scope overreach in attempting to integrate too many ground station territories simultaneously, or losing sight of national security requirements while optimizing quantum link efficiency.",
    vocationAndFinance: "Secures global financial infrastructure as a LEO QKD satellite integrator, quantum encryption backbone architect, and national security communications consultant. Government and central bank retainers generate substantial sustained income.",
    reflectionQuestions: [
      "Am I integrating QKD satellite ground stations with sufficient inter-agency coordination to achieve reliable quantum encryption backbone coverage?",
      "How can I use low-earth-orbit quantum constellation telemetry to anticipate atmospheric decoherence and maintain encryption key delivery quality?",
      "What quantum communications security milestone am I ready to certify today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 21?", answer: "November 21 is Scorpio (Water sign), bringing intense technical precision, global systems thinking, and secure communications mastery to Arcana 21." },
      { question: "How does November 21 differ from October 21?", answer: "October 21 carries Libra trans-Atlantic subsea quantum optical cable installation, while November 21 carries Scorpio LEO QKD satellite constellation ground station integration and global quantum encryption backbone deployment." },
      { question: "What is the financial engine for November 21?", answer: "Building national quantum encryption backbone infrastructure through government and central bank quantum security retainers." },
      { question: "Which Arcana complements November 21?", answer: "Arcana 1 (The Magician) provides the inventive technical creativity needed to pioneer new QKD satellite ground station integration methods." }
    ],
    imageBrief: "Regal symbolist illustration of a quantum communications engineer monitoring a global QKD satellite ground station network with entanglement receiver domes visible, quantum key distribution beams connecting to orbiting satellites, color palette of deep space navy, quantum violet, and entanglement gold."
  },
  22: {
    snippetAnswer: "November 22 pioneers volcanic geothermal district heating networks on the Scorpio-Sagittarius Cusp via Arcana 22 (The Fool / Master 22). You sink 3,000-metre production wells into active volcanic caldera margins, delivering 180°C steam to heat entire cities across Iceland, Japan, and El Salvador.",
    vignetteTitle: "The Volcanic Caldera Geothermal Master: Sinking Deep Production Wells for District Heat",
    vignetteScenario: "On November 22, a master geothermal well engineer directs drilling operations into a 3,000-metre production borehole on the edge of an active volcanic caldera, delivering 180°C saturated steam to a municipal district heating network serving 85,000 households.",
    birthArchetypeContent: "Active volcanic caldera deep production well drilling and high-enthalpy geothermal district heating network commissioning define November 22 via Arcana 22 on the Scorpio-Sagittarius cusp. You combine bold frontier engineering with masterful geological risk management to unlock volcanic heat for municipal clean energy.",
    highFrequencyExpression: "Your geothermal mastery directs volcanic caldera well siting, high-enthalpy steam production, district heating pipeline networks, and municipal geothermal energy delivery.",
    shadowChallenges: "Reckless well siting decisions driven by budget pressure rather than geological data, or underestimating volcanic seismicity risks when approving drilling zones near active vent fields.",
    vocationAndFinance: "Masters volcanic geothermal energy as a caldera production well director, high-enthalpy geothermal engineer, and district heating systems architect. Geothermal energy development contracts and municipal heat supply agreements build substantial long-term revenues.",
    reflectionQuestions: [
      "Am I siting volcanic production wells with sufficient caldera seismic risk analysis to justify the bold drilling depth?",
      "How can I use geothermal exploration data to pioneer municipal clean heat delivery in volcanic regions where conventional energy cannot compete?",
      "What volcanic caldera production well milestone am I ready to commission today?"
    ],
    faqItems: [
      { question: "Why is November 22 a Master Number birthday?", answer: "November 22 combines Master Number 22 (Master Builder) with Arcana 22 (The Fool) on the Scorpio-Sagittarius cusp, granting the capacity to build monumental geothermal infrastructure that transforms entire urban energy systems." },
      { question: "What zodiac sign is November 22?", answer: "November 22 sits on the Scorpio-Sagittarius cusp, blending Scorpio geological depth with Sagittarius expansive energy infrastructure vision." },
      { question: "Which careers suit November 22 best?", answer: "Volcanic caldera geothermal well engineering, high-enthalpy steam production management, municipal district heating systems direction, and geothermal exploration leadership." },
      { question: "How can November 22 avoid project burnout?", answer: "Pace deep volcanic drilling campaigns in phases, incorporating regular geological risk reviews rather than rushing to commission production wells under investor pressure." }
    ],
    imageBrief: "Breathtaking engineering artwork of a master geothermal engineer overseeing a 3,000-metre production well drilling rig beside an active volcanic caldera, steam rising from ground vents, color palette of volcanic charcoal, geothermal steam white, and caldera amber."
  },
  23: {
    snippetAnswer: "November 23 enters Sagittarius via Arcana 5 (The Hierophant). You establish accredited training programmes for atmospheric river forecasting, teaching meteorologists to interpret ensemble NWP model output for catastrophic winter precipitation event prediction.",
    vignetteTitle: "The Atmospheric River Forecast Trainer: Accrediting Ensemble NWP Interpretation",
    vignetteScenario: "On November 23, a senior meteorological training director delivers an intensive ensemble NWP model interpretation course, teaching national weather service meteorologists to identify atmospheric river corridors and issue 72-hour extreme precipitation warnings.",
    birthArchetypeContent: "Ensemble numerical weather prediction model atmospheric river interpretation training and extreme winter precipitation forecasting accreditation define November 23 via Arcana 5 in Sagittarius. You codify cutting-edge atmospheric science into professional certification programmes that elevate national weather service forecast quality.",
    highFrequencyExpression: "Your meteorological training programme teaches ensemble NWP atmospheric river identification, extreme precipitation probability communication, and national weather service forecast verification.",
    shadowChallenges: "Presenting only deterministic worst-case atmospheric river scenarios without teaching ensemble spread uncertainty, or discouraging trainees from questioning established NWP model output bias.",
    vocationAndFinance: "Trains meteorologists as an atmospheric river forecast training director, NWP ensemble interpretation instructor, and extreme weather accreditation consultant. National weather service contracts and international meteorological training programmes generate sustained income.",
    reflectionQuestions: [
      "Am I teaching atmospheric river forecasting with sufficient ensemble uncertainty communication to prevent over-confident weather warnings?",
      "How can I adapt NWP model interpretation training to emerging machine-learning weather prediction systems?",
      "What extreme precipitation forecasting accreditation standard am I ready to publish today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 23?", answer: "November 23 enters Sagittarius (Fire sign), infusing The Hierophant's teaching mission with expansive meteorological vision, optimistic knowledge-sharing, and scientific rigour." },
      { question: "How does November 23 differ from November 5?", answer: "November 5 carries Scorpio marine CSEM seabed resistivity survey training, while November 23 carries Sagittarius atmospheric river ensemble NWP forecast interpretation accreditation." },
      { question: "What is the financial engine for November 23?", answer: "Delivering accredited atmospheric river ensemble NWP training programmes to national weather services and international meteorological organizations." },
      { question: "Which Arcana complements November 23?", answer: "Arcana 3 (The Empress) provides natural creative expansion to help Arcana 5 develop innovative atmospheric river training materials." }
    ],
    imageBrief: "Vibrant artwork of a meteorological training director pointing at a glowing ensemble NWP atmospheric river prediction model on a large screen, trainees seated in a forecast operations centre, color palette of storm cloud grey, atmospheric river blue, and training gold."
  },
  24: {
    snippetAnswer: "November 24 establishes Nordic cold-smoked Arctic char artisan co-operatives under Arcana 6 (The Lovers). You bring together Norwegian and Icelandic char smoking families, negotiating shared oak and juniper smoking kiln access and coordinating EU Protected Geographical Indication applications.",
    vignetteTitle: "The Arctic Char Cold-Smoking Alliance Lead: Coordinating PGI Certification Applications",
    vignetteScenario: "On November 24, an artisan food co-operative director negotiates a joint EU Protected Geographical Indication application for Nordic cold-smoked Arctic char, co-ordinating smoking kiln schedules and shared brining protocols among fifteen Norwegian and Icelandic fish smoking families.",
    birthArchetypeContent: "Nordic artisan cold-smoked Arctic char EU Protected Geographical Indication co-operative formation and shared smoking kiln protocol standardization define November 24 via Arcana 6 in Sagittarius. You build equitable alliances among traditional fish smoking families, protecting heritage smoking methods while unlocking premium export markets.",
    highFrequencyExpression: "Your artisan food co-operative leadership coordinates Arctic char cold-smoking kiln schedules, juniper brine standardization, EU PGI certification applications, and Scandinavian fish export logistics.",
    shadowChallenges: "Family disagreements over proprietary brining recipes threatening to collapse PGI application coalitions, or prioritizing individual smoking kiln access over collective certification timelines.",
    vocationAndFinance: "Leads artisan food alliances as a Nordic cold-smoking co-operative director, PGI certification strategist, and Scandinavian fish export broker. EU PGI designation premiums and direct restaurant supply contracts generate high margins.",
    reflectionQuestions: [
      "Am I building Nordic cold-smoking alliances on transparent shared protocol agreements rather than informal goodwill?",
      "How can I guide competing fish smoking families toward a unified PGI certification that benefits all members equally?",
      "What Arctic char smoking co-operative milestone am I ready to formalize today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 24?", answer: "November 24 is Sagittarius (Fire sign), bringing expansive partnership vision, optimistic collaboration, and structured fairness to Arcana 6's alliance energy." },
      { question: "How does November 24 differ from November 6?", answer: "November 6 carries Scorpio Faroese Atlantic salmon aquaculture pen-sharing alliances, while November 24 carries Sagittarius Nordic cold-smoked Arctic char PGI certification co-operative coordination." },
      { question: "What is the financial secret of November 24?", answer: "Securing EU Protected Geographical Indication status for Nordic cold-smoked Arctic char to command significant international restaurant and retail price premiums." },
      { question: "Which Arcana complements November 24?", answer: "Arcana 4 (The Emperor) reinforces the governance and protocol standardization needed to sustain November 24's artisan food alliances." }
    ],
    imageBrief: "Warm Scandinavian graphic of an artisan food co-operative director reviewing EU PGI documentation beside traditional cold-smoking kilns laden with Arctic char, juniper branches and oak smoke visible, color palette of smoked birch ivory, char silver, and Nordic blue."
  },
  25: {
    snippetAnswer: "November 25 commands Hyperloop vacuum tube pod convoys through Arcana 7 (The Chariot). You direct magnetically levitated passenger pod dispatching across 600-kilometre low-pressure evacuated tube corridors, achieving sub-11-minute city-to-city transit at 900 km/h.",
    vignetteTitle: "The Hyperloop Pod Convoy Commander: Directing Magnetic Levitation Dispatch Systems",
    vignetteScenario: "On November 25, a hyperloop network operations commander dispatches a convoy of magnetically levitated passenger pods through a 600-kilometre evacuated tube corridor, synchronizing pod spacing intervals and pressure lock transitions to deliver 4,000 passengers per hour at 900 km/h.",
    birthArchetypeContent: "Magnetic levitation passenger pod convoy dispatch and low-pressure evacuated tube transit network command characterize November 25 via Arcana 7 in Sagittarius. You direct the world's most advanced ground transit system, coordinating pod convoys through vacuum corridors with millisecond precision.",
    highFrequencyExpression: "Your hyperloop operations command synchronizes maglev pod spacing algorithms, pressure lock transition timing, tube vacuum level monitoring, and inter-city passenger throughput optimization.",
    shadowChallenges: "Pushing pod dispatch intervals below safe minimum spacing tolerances under passenger demand pressure, or ignoring tube vacuum integrity alerts to maintain schedule adherence.",
    vocationAndFinance: "Leads next-generation transit as a hyperloop network operations commander, maglev dispatch systems engineer, and evacuated tube infrastructure director. Hyperloop operating contracts and government mobility concessions generate substantial revenues.",
    reflectionQuestions: [
      "Am I maintaining safe pod convoy spacing intervals even when peak passenger demand pressures push beyond optimal throughput?",
      "How can I lead my hyperloop operations team to achieve consistent sub-11-minute inter-city transit without compromising tube vacuum integrity?",
      "What hyperloop convoy dispatch milestone am I ready to achieve today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 25?", answer: "November 25 is Sagittarius (Fire sign), giving expansive mobility vision, rapid decisive action, and precision transit engineering agility to Arcana 7." },
      { question: "How does November 25 differ from November 7?", answer: "November 7 carries Scorpio autonomous subsea seabed crawler mining navigation, while November 25 carries Sagittarius hyperloop magnetically levitated passenger pod convoy dispatch and evacuated tube operations." },
      { question: "What is the technical edge of November 25?", answer: "Synchronizing magnetic levitation pod spacing algorithms through evacuated tube pressure locks at 900 km/h with millisecond precision." },
      { question: "Which Arcana complements November 25?", answer: "Arcana 11 (Strength) provides the sustained operational stamina to run hyperloop convoy dispatch centres across 24-hour rotating shift patterns." }
    ],
    imageBrief: "Dynamic futuristic graphic of a hyperloop operations commander in a glowing dispatch centre monitoring magnetic levitation pod convoys speeding through a transparent evacuated tube corridor, color palette of transit silver, maglev blue, and hyperloop amber."
  },
  26: {
    snippetAnswer: "November 26 enforces deep-sea mining environmental baseline standards through Arcana 8 (Justice). You adjudicate International Seabed Authority (ISA) disputes over baseline biological survey adequacy, ruling whether deep-sea mining contractors have met polymetallic nodule environmental impact assessment standards.",
    vignetteTitle: "The ISA Deep-Sea Mining Baseline Judge: Adjudicating Biological Survey Adequacy",
    vignetteScenario: "On November 26, an International Seabed Authority legal commissioner examines baseline biological survey submissions from a deep-sea mining contractor, ruling whether abyssal megafauna density assessments meet the Exploitation Regulations' environmental impact threshold before nodule extraction commences.",
    birthArchetypeContent: "International Seabed Authority deep-sea mining baseline biological survey adequacy adjudication and Exploitation Regulations environmental impact threshold enforcement characterize November 26 via Arcana 8 in Sagittarius. You apply international seabed law to ensure mining contractors demonstrate genuine environmental baseline knowledge before extracting polymetallic nodules.",
    highFrequencyExpression: "Your deep-sea legal adjudication reviews abyssal baseline survey quality, megafauna density assessment standards, ISA Exploitation Regulation compliance, and seabed impact mitigation plans.",
    shadowChallenges: "Approving inadequate baseline surveys under pressure from ISA member state political interests, or rejecting sufficient surveys due to excessive procedural technicality rather than substantive environmental concern.",
    vocationAndFinance: "Enforces seabed environmental law as an ISA baseline survey adjudicator, deep-sea mining legal commissioner, and Exploitation Regulations compliance consultant. ISA panel retainers and environmental NGO advisory contracts generate income.",
    reflectionQuestions: [
      "Am I adjudicating deep-sea mining baseline surveys with equal rigour regardless of the contractor's nationality or ISA member state sponsorship?",
      "How can I strengthen ISA Exploitation Regulations to prevent strategic baseline survey manipulation by deep-sea mining interests?",
      "What abyssal environmental protection standard requires stronger legal enforcement today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 26?", answer: "November 26 is Sagittarius (Fire sign), bringing expansive legal vision, ethical impartiality, and structural regulatory authority to Arcana 8." },
      { question: "How does November 26 differ from November 8?", answer: "November 8 carries Scorpio IMO maritime emissions MARPOL CII penalty tribunal adjudication, while November 26 carries Sagittarius ISA deep-sea mining Exploitation Regulations biological baseline survey adequacy adjudication." },
      { question: "What is the financial rule for November 26?", answer: "Maintain absolute ISA regulatory independence and reject retainers from deep-sea mining contractors that might compromise baseline survey adjudication impartiality." },
      { question: "Which Arcana complements November 26?", answer: "Arcana 11 (Strength) sustains the intellectual and moral stamina required for rigorous ISA deep-sea mining baseline survey adjudication." }
    ],
    imageBrief: "Symmetrical legal artwork of an ISA legal commissioner examining deep-sea baseline biological survey maps at a maritime tribunal bench, abyssal megafauna imagery on screen, color palette of deep ocean navy, legal gold, and survey data white."
  },
  27: {
    snippetAnswer: "November 27 reconstructs Younger Dryas climate transitions through Lacustrine sediment varve counting through Arcana 9 (The Hermit). You extract annually laminated lake sediment cores from Scandinavian proglacial lakes, counting varve couplets to reconstruct 11,700-year-old Younger Dryas-to-Holocene climate transition chronologies.",
    vignetteTitle: "The Proglacial Varve Chronologist: Counting Younger Dryas Lacustrine Sediment Layers",
    vignetteScenario: "On November 27, a glacial varve chronologist counts annual sediment couplets under a polarizing microscope in a darkened Oslo laboratory, reconstructing a 480-year Younger Dryas climate sequence from a Scandinavian proglacial lake core with sub-annual resolution.",
    birthArchetypeContent: "Younger Dryas-to-Holocene climate transition chronology reconstruction through proglacial lake annually laminated varve sediment counting characterize November 27 via Arcana 9 in Sagittarius. You achieve absolute temporal precision through patient microscopic counting, building palaeoclimate records that no other proxy can replicate.",
    highFrequencyExpression: "Your varve chronology expertise counts annual proglacial lake sediment couplets, reconstructs Younger Dryas climate sequences, and calibrates radiocarbon dating chronologies with sub-annual resolution.",
    shadowChallenges: "Exhaustion-driven miscounting during extended microscopy sessions, or refusing to publish a varve chronology until every single couplet has been independently verified rather than applying accepted statistical error tolerances.",
    vocationAndFinance: "Archives palaeoclimate transitions as a glacial varve chronologist, proglacial lake sediment specialist, and Younger Dryas reconstruction consultant. University research grants and IPCC palaeoclimate report contributions sustain laboratory operations.",
    reflectionQuestions: [
      "Am I sharing my proglacial varve chronology findings openly enough to integrate them with other Younger Dryas proxy records?",
      "How can I apply sub-annual varve counting precision to produce the highest-resolution Younger Dryas climate reconstruction available?",
      "What proglacial lake sediment varve milestone am I ready to submit for publication today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 27?", answer: "November 27 is Sagittarius (Fire sign), blending expansive palaeoclimate vision with The Hermit's patient, microscopic analytical precision." },
      { question: "How does November 27 differ from November 9?", answer: "November 9 carries Scorpio Greenland ice sheet algae hyperspectral albedo mapping, while November 27 carries Sagittarius Younger Dryas-to-Holocene proglacial lake varve sediment chronology reconstruction." },
      { question: "Why does November 27 thrive in solitary microscopy?", answer: "Uninterrupted focus allows November 27 to achieve the sub-annual counting precision that distinguishes definitive varve chronologies from approximate palaeoclimate estimates." },
      { question: "Which Arcana complements November 27?", answer: "Arcana 3 (The Empress) provides creative fertility to help November 27 visualize and communicate complex Younger Dryas palaeoclimate findings accessibly." }
    ],
    imageBrief: "Mystical scientific portrait of a varve chronologist counting glowing annual sediment laminations through a polarizing microscope in a darkened laboratory, proglacial lake core sample visible, color palette of sediment amber, microscope blue, and data white."
  },
  28: {
    snippetAnswer: "November 28 captures deep ocean thermal energy OTEC power under Arcana 10 (Wheel of Fortune). You engineer Ocean Thermal Energy Conversion (OTEC) heat engines, converting temperature difference between 25°C surface water and 5°C deep ocean water into 24/7 power.",
    vignetteTitle: "The Ocean Thermal OTEC Lead: Operating Deepwater Heat Conversion Engines",
    vignetteScenario: "Commissioning a 20MW offshore OTEC floating platform on November 28, an ocean thermal engineer pumps 3,000-foot deep sea water to condense ammonia working fluid, generating continuous electricity day and night.",
    birthArchetypeContent: "Ocean Thermal Energy Conversion (OTEC) ammonia heat exchange and ocean temperature gradient power characterize November 28 via Arcana 10 in Sagittarius. You convert tropical ocean thermal differences into continuous 24/7 electrical power.",
    highFrequencyExpression: "Your OTEC thermal engineering stabilizes deepwater cold water pipes, ammonia heat exchangers, and continuous ocean clean power generation.",
    shadowChallenges: "Deploying OTEC cold water intake pipes without verifying wave fatigue limits, ignoring pipe biofouling, or over-working platform crews.",
    vocationAndFinance: "Develops OTEC offshore installations as a marine thermal engineer, OTEC heat architect, clean energy lead, and ocean power director. Power purchase contracts drive steady revenues.",
    reflectionQuestions: [
      "Am I testing deepwater OTEC cold water pipes against extreme current bending stress?",
      "How can I optimize ocean thermal heat exchange to maximize continuous power output?",
      "What ocean thermal OTEC energy milestone am I ready to achieve today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 28?", answer: "November 28 is Sagittarius (Fire sign), giving expansive vision, passion, and engineering drive to Arcana 10." },
      { question: "How does November 28 differ from November 10?", answer: "November 10 carries Scorpio coastal cliff OWC wave turbines, while November 28 carries Sagittarius deep ocean thermal energy conversion (OTEC) heat engines." },
      { question: "What is the technical edge of November 28?", answer: "Engineering floating OTEC heat engines that convert surface-to-deep sea water temperature differences into continuous 24/7 power." },
      { question: "Which Arcana complements November 28?", answer: "Arcana 21 (The World) expands November 28's OTEC energy projects onto an international global scale." }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over a floating OTEC ocean platform pumping deep sea water under a sunlit sky, color palette of ocean turquoise, deep blue, and gold."
  },
  29: {
    snippetAnswer: "November 29 rehabilitates critically endangered Iberian lynx populations through Arcana 11 (Strength / Master 29). You lead camera trap monitoring programmes across Andalusian scrublands, applying biophysical conditioning protocols to restore wild prey capture behaviour in captive-bred lynx before soft-release.",
    vignetteTitle: "The Iberian Lynx Rewilding Biologist: Restoring Captive-Bred Prey Capture Behaviour",
    vignetteScenario: "On November 29, an Iberian lynx rewilding biologist leads a soft-release conditioning programme in Andalusia, using controlled rabbit pen enclosures to restore natural prey capture sequences in six captive-bred lynx before their integration into the Doñana National Park wild population.",
    birthArchetypeContent: "Iberian lynx captive-bred prey capture behaviour rehabilitation and Andalusian scrubland soft-release programme management characterize November 29 via Arcana 11 in Sagittarius. You apply sustained physical and behavioural rehabilitation expertise to restore critically endangered wild felid populations.",
    highFrequencyExpression: "Your lynx rewilding expertise designs prey capture conditioning programmes, monitors captive-bred behavioural fitness, manages soft-release pen transitions, and tracks post-release wild integration success.",
    shadowChallenges: "Impatience pushing captive-bred lynx toward premature soft-release before prey capture sequences are fully restored, or allowing programme media obligations to disrupt conditioning schedules.",
    vocationAndFinance: "Leads lynx conservation as an Iberian lynx rewilding biologist, soft-release programme director, and felid behavioural rehabilitation specialist. European conservation grants and Doñana National Park partnership agreements fund field operations.",
    reflectionQuestions: [
      "Am I applying patient behavioural conditioning protocols to restore natural lynx prey capture sequences before committing to soft-release timelines?",
      "How can I use camera trap data to verify each captive-bred lynx has achieved sufficient wild behavioural fitness before Doñana integration?",
      "What Iberian lynx rewilding milestone am I ready to achieve today?"
    ],
    faqItems: [
      { question: "Why is November 29 a Master Number birthday?", answer: "Because 2+9 = 11, a Master Number in numerology associated with extraordinary intuitive strength, sustained behavioural rehabilitation patience, and somatic mastery over critical wildlife conservation challenges." },
      { question: "What zodiac sign is November 29?", answer: "November 29 is Sagittarius (Fire sign), adding expansive conservation vision and optimistic rewilding mission to Arcana 11's sustained physical and behavioural strength." },
      { question: "How does November 29 differ from November 11?", answer: "November 11 carries Scorpio sub-antarctic humpback whale bio-acoustic migration mapping, while November 29 carries Sagittarius Iberian lynx captive-bred prey capture behaviour rehabilitation and Andalusian soft-release programming." },
      { question: "What is the health key for November 29?", answer: "Structured personal recovery between intensive lynx conditioning sessions to sustain the physical and emotional stamina required for long-term rewilding programme leadership." }
    ],
    imageBrief: "Inspiring conservation artwork of a lynx rewilding biologist observing an Iberian lynx in a soft-release conditioning pen in Andalusian scrubland, camera trap monitoring poles visible, color palette of Mediterranean ochre, scrub green, and Iberian lynx amber."
  },
  30: {
    snippetAnswer: "November 30 develops fermented functional mushroom adaptogen extracts through Arcana 3 (The Empress). You cultivate lion's mane and chaga mycelium in liquid bioreactors, fermenting fungal biomass to concentrate erinacines and betulinic acid for nootropic supplement formulation.",
    vignetteTitle: "The Functional Mushroom Bioreactor Lead: Fermenting Lion's Mane Erinacines",
    vignetteScenario: "On November 30, a functional mushroom fermentation scientist monitors liquid bioreactor cultures of Hericium erinaceus mycelium, optimizing substrate pH and temperature gradients to maximize erinacine-A concentration for nootropic cognitive supplement formulations.",
    birthArchetypeContent: "Lion's mane Hericium erinaceus mycelium liquid bioreactor fermentation and erinacine-A nootropic concentration define November 30 via Arcana 3 in Sagittarius. You cultivate functional mushroom biomass, harvesting potent adaptogenic compounds for cognitive health and pharmaceutical supplement markets.",
    highFrequencyExpression: "Your mushroom bioreactor expertise optimizes Hericium erinaceus mycelium culture conditions, erinacine-A extraction protocols, chaga betulinic acid isolation, and nootropic supplement formulation.",
    shadowChallenges: "Over-promising cognitive benefit claims before clinical trial data validates erinacine-A nootropic efficacy, or rushing bioreactor scale-up before pilot fermentation quality is reproducible.",
    vocationAndFinance: "Formulates nootropic supplements as a functional mushroom fermentation scientist, lion's mane erinacine extraction specialist, and adaptogenic supplement founder. Clinical supply agreements and direct-to-consumer nootropic brands generate strong revenue.",
    reflectionQuestions: [
      "Am I grounding my lion's mane nootropic claims in reproducible bioreactor erinacine-A extraction data?",
      "How can I scale liquid bioreactor mushroom fermentation while maintaining the erinacine concentration quality that differentiates my formulations?",
      "What functional mushroom adaptogen milestone am I ready to bring to clinical validation today?"
    ],
    faqItems: [
      { question: "What zodiac sign is November 30?", answer: "November 30 is Sagittarius (Fire sign), bringing expansive botanical vision, optimistic scientific curiosity, and abundant formulation creativity to The Empress." },
      { question: "How does November 30 differ from November 3?", answer: "November 3 carries Scorpio sea buckthorn omega-7 supercritical CO2 lipid extraction, while November 30 carries Sagittarius lion's mane Hericium erinaceus liquid bioreactor mycelium fermentation and erinacine-A nootropic extraction." },
      { question: "What is the financial engine for November 30?", answer: "Developing clinical-grade lion's mane erinacine-A nootropic extracts for pharmaceutical cognitive health supplement supply agreements." },
      { question: "Which Arcana complements November 30?", answer: "Arcana 4 (The Emperor) provides manufacturing structure to scale November 30's mushroom bioreactor fermentation operations commercially." }
    ],
    imageBrief: "Rich scientific illustration of a fermentation scientist monitoring glowing bioreactor vessels filled with lion's mane mushroom mycelium culture, erinacine extract samples visible in golden vials, color palette of mycelium white, bioreactor amber, and forest green."
  }
};

export function getNovemberProfile(day: number): BirthdayProfileData {
  const custom = NOVEMBER_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `November ${day}`;
  const slug = `november-${day}`;

  const phaseText = day <= 10 ? `early November Scorpio water depth phase of day ${day}` : day <= 22 ? `mid-November Scorpio-Sagittarius cusp phase of day ${day}` : `late-November Sagittarius fire expansion phase of day ${day}`;
  const seasonalContext = `Late-autumn seasonal transition and frost vitality mark the ${phaseText}.`;
  const dayVibrationNote = `${formattedDate} combines this late-autumn energy with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 31 : day - 1;
  const nextDay = day === 30 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'October 31' : `November ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 31 ? "October closing harvest threshold" : `Preceding November ${prevDay} vibration`,
      bestFocus: `Consolidating earlier November ${prevDay} momentum`,
      keyContrast: `Paves the way for Arcana ${primaryArcanaNum} expression on November ${day}.`
    },
    {
      dateLabel: formattedDate,
      arcanaNum: primaryArcanaNum,
      arcanaName: primaryArcana.name,
      coreTheme: custom?.vignetteTitle || `${primaryArcana.name} activation`,
      bestFocus: `Anchoring unique November ${day} profile strengths`,
      keyContrast: `Your individual November ${day} archetype focus.`,
      isCurrentDay: true
    },
    {
      dateLabel: day === 30 ? 'December 1' : `November ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: `Emerging November ${nextDay} expansion`,
      bestFocus: `Advancing toward November ${nextDay} wisdom`,
      keyContrast: `Shifts frequency toward Arcana ${nextArcana} qualities.`
    }
  ];

  return {
    slug,
    month: 'November',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of November seasonal focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
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
        answer: day <= 21 ? `${formattedDate} falls under Scorpio (Water sign), bringing intense transformation, deep intuition, and emotional power.` : `${formattedDate} falls under Sagittarius (Fire sign), bringing expansive optimism, adventurous vision, and philosophical wisdom.`
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
    seasonalContext,
    dayVibrationNote,
    constructiveExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenge: custom?.shadowChallenges || primaryArcana.shadowExpression,
    careerGuidance: primaryArcana.careerGuidance,
    moneyChannel: primaryArcana.moneyChannel
  };
}
