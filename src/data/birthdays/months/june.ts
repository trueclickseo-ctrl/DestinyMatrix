import type { BirthdayProfileData, DateComparisonRow, BirthdayFaqItem } from '../types';
import { MAJOR_ARCANA_DATABASE } from '../../arcana';

function calculateDayArcana(day: number): number {
  let num = day;
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
  }
  return num || 1;
}

export const JUNE_PROFILES_DATA: Record<number, Partial<BirthdayProfileData>> = {
  1: {
    snippetAnswer: "Arriving on June 1 activates Arcana 1 (The Magician). Opening June into midsummer, June 1 endows you with solar kinetic sculpture mastery, designing interactive wind energy installations, and launching public urban light art exhibits.",
    vignetteTitle: "The Solar Kinetic Sculptor: Creating Wind-Powered Public Urban Plaza Art",
    vignetteScenario: "Opening June on June 1, a kinetic artist unveils a 50-foot wind-driven solar sculpture in a central city plaza. The rotating metallic installation generates 10kW of clean power while mesmerizing thousands of daily visitors.",
    birthArchetypeContent: "June 1 individuals combine Arcana 1's creative initiation with Gemini communicative agility and solar kinetic art innovation. You excel at designing wind-driven light sculptures and public solar installations that merge public art with clean power.",
    highFrequencyExpression: "In active creative light, you demonstrate solar kinetic sculpture design, wind energy art installations, public plaza revitalization, and clean power creative leadership.",
    shadowChallenges: "Under shadow stress, you might act impulsively on sculpture mechanics, lose patience during municipal permits, or abandon installation concepts prematurely.",
    vocationAndFinance: "Thrives as a solar kinetic sculptor, wind art engineer, public plaza design lead, kinetic studio CEO, and urban art director. Wealth grows through public art commissions.",
    reflectionQuestions: [
      "Am I bringing my kinetic wind art concepts into complete municipal installation?",
      "How can I channel early June solar vitality to inspire my engineering studio?",
      "What public clean power sculpture am I ready to unveil today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 1?",
        answer: "June 1 is Gemini (Air sign), bringing communicative intellect, charm, and aesthetic agility to The Magician's creative initiation."
      },
      {
        question: "How does June 1 differ from May 1?",
        answer: "May 1 carries Taurus organic herbal tea formulation, while June 1 carries Gemini solar kinetic sculpture and public wind art engineering."
      },
      {
        question: "What is the financial engine for June 1?",
        answer: "Designing and installing high-value solar kinetic sculptures for major city plazas and corporate headquarters."
      },
      {
        question: "Which Arcana complements June 1?",
        answer: "Arcana 19 (The Sun) amplifies June 1's public installation visibility and artistic acclaim."
      }
    ],
    imageBrief: "Vibrant graphic of a sculptor standing before a towering 50-foot metallic wind sculpture glowing with solar lights in a sunlit plaza, color palette of polished steel, solar gold, and sky blue."
  },
  2: {
    snippetAnswer: "Entering life on June 2 activates Arcana 2 (The High Priestess) alongside Gemini analytical vision. June 2 endows you with a keen gift for mapping subterranean limestone caverns, recording acoustic echoes in deep caves, and protecting underground river channels.",
    vignetteTitle: "The Subaquatic Speleologist: Mapping Subterranean Cavern Acoustic Echoes",
    vignetteScenario: "Exploring deep limestone caves on June 2, a speleologist deploys hydro-acoustic sensors across an uncharted 50-mile subterranean river chamber. Their spatial mapping safeguards underground drinking water reserves for three coastal counties.",
    birthArchetypeContent: "Subterranean speleology and cavern acoustic mapping characterize June 2 under Arcana 2. You explore hidden underground limestone chambers, deploying sound sensors to map acoustic resonance across subterranean water channels.",
    highFrequencyExpression: "In quiet mastery, you bring cavern speleology, subterranean echo mapping, underground river protection, and unshakeable intuitive hydro-geological insight.",
    shadowChallenges: "Under stress, you might retreat into solitary cavern explorations, avoid team debriefings, or hide subterranean geological discoveries.",
    vocationAndFinance: "Excels as a subterranean speleologist, cavern acoustics engineer, limestone cave surveyor, and groundwater hydrologist. Income expands through specialized cave exploration grants and municipal consulting.",
    reflectionQuestions: [
      "Am I trusting my quiet intuitive water observations alongside electronic sensor data?",
      "How can I share my subterranean aquifer findings to protect municipal drinking water?",
      "What quiet time in nature do I need to clear my hydro-geological focus today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 2?",
        answer: "June 2 is Gemini (Air sign), giving analytical intellect and intellectual curiosity to The High Priestess's quiet inner wisdom."
      },
      {
        question: "How does June 2 differ from May 2?",
        answer: "May 2 carries Taurus spring forest canopy eco-hydrology, while June 2 carries Gemini subterranean cave speleology and cavern acoustic echo mapping."
      },
      {
        question: "What is the key to success for June 2?",
        answer: "Patience and quiet scientific observation of subterranean freshwater reserves."
      },
      {
        question: "Which Arcana complements June 2?",
        answer: "Arcana 3 (The Empress) provides fertile natural growth to support June 2's hydro-geological discoveries."
      }
    ],
    imageBrief: "Mystical symbolist painting of a hydro-geologist standing in a sunlit limestone cavern watching crystal-clear blue spring water flow through glowing subterranean rock, color palette of subterranean cobalt, limestone white, and emerald green."
  },
  3: {
    snippetAnswer: "Celebrating a June 3 birthday opens your journey under Arcana 3 (The Empress). Positioned in early June, June 3 grants aesthetic mastery for cultivating organic alpine strawberry fields, formulating gourmet berry preserves, and managing luxury food estates.",
    vignetteTitle: "The Alpine Strawberry Estate Master: Scaling Organic Berry Preserves",
    vignetteScenario: "Managing a 300-acre organic alpine strawberry estate on June 3, an agriculturalist transitions berry fields to drip irrigation and copper-kettle preserve distillation. Their luxury preserve line enters gourmet markets across Paris and Tokyo.",
    birthArchetypeContent: "Alpine strawberry farming and organic berry preserve distillation define June 3 under Arcana 3. You combine Gemini charm with Empress fertility, growing organic strawberries and crafting luxury fruit preserves for international boutique grocers.",
    highFrequencyExpression: "In active fertile light, you demonstrate alpine strawberry cultivation, gourmet preserve distillation, organic estate branding, and luxury food export success.",
    shadowChallenges: "When unbalanced, you may over-spend on custom glass preserve jars, act possessively over recipe trade secrets, or worry about berry harvest weather fluctuations.",
    vocationAndFinance: "Thrives as an organic strawberry estate founder, gourmet berry alchemist, luxury food brand CEO, and agricultural export director. Revenue expands through high-value boutique preserve sales.",
    reflectionQuestions: [
      "How can I enhance organic soil vitality across my strawberry fields?",
      "Am I balancing my passion for luxury fruit production with practical export economics?",
      "What organic stone fruit estate venture am I ready to expand today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 3?",
        answer: "June 3 is Gemini (Air sign), giving communicative agility and commercial charm to The Empress's creative fertility."
      },
      {
        question: "How does June 3 differ from May 3?",
        answer: "May 3 carries Taurus organic lavender estate cultivation, while June 3 carries Gemini alpine strawberry farming and artisan berry preserve distillation."
      },
      {
        question: "What is the primary money channel for June 3?",
        answer: "Cultivating organic strawberry estates and exporting luxury artisan preserves to international gourmet markets."
      },
      {
        question: "Which Arcana complements June 3?",
        answer: "Arcana 4 (The Emperor) provides structural supply order to support Arcana 3's gourmet export operations."
      }
    ],
    imageBrief: "Lush painting of an elegant orchardist standing in a sunlit cherry orchard holding wooden crates of ripe dark red cherries under a summer sun, color palette of deep ruby red, emerald green, and warm gold."
  },
  4: {
    snippetAnswer: "Your June 4 birth date anchors structural authority under Arcana 4 (The Emperor). Resting in early June, June 4 endows you with sub-surface tunnelling structural engineering mastery, hyper-loop transit tube foundations, and building underground eco-transit hubs.",
    vignetteTitle: "The Sub-Surface Tunnel Engineer: Constructing Zero-Carbon Hyper-Loop Transit Lines",
    vignetteScenario: "Directing a 30-mile underground transit project on June 4, a structural engineer bores eco-tunnels through granite bedrock using electric cutter heads. The zero-carbon hyper-loop line connects two major cities in 12 minutes.",
    birthArchetypeContent: "Sub-surface eco-tunnelling and hyper-loop structural foundations define June 4 under Arcana 4. You construct underground transit corridors and subterranean urban infrastructure that reduce surface urban congestion and carbon emissions.",
    highFrequencyExpression: "Operating in high structural alignment, your practice highlights sub-surface tunnel engineering, hyper-loop foundation design, underground eco-transit, and subterranean urban civil engineering.",
    shadowChallenges: "In shadow, you may exhibit rigid engineering micromanagement, imposing strict boring schedules without crew feedback, or resisting tunnel design innovations.",
    vocationAndFinance: "Commands respect as a sub-surface tunnel engineer, hyper-loop civil lead, underground transit director, and subterranean infrastructure head. Wealth builds through civil engineering contracts.",
    reflectionQuestions: [
      "Am I leading my tunnel boring crew with clear guidance or rigid demands?",
      "Where in my subterranean projects can I incorporate zero-emission electric boring technology?",
      "What underground eco-transit corridor am I establishing for cities today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 4?",
        answer: "June 4 is Gemini (Air sign), infusing Arcana 4's executive discipline with communicative intellect and engineering agility."
      },
      {
        question: "How does June 4 differ from May 4?",
        answer: "May 4 carries Taurus passive solar earth-sheltered homes, while June 4 carries Gemini sub-surface hyper-loop tunnel engineering and underground eco-transit."
      },
      {
        question: "Which careers suit June 4 best?",
        answer: "Sub-surface tunnel engineering, hyper-loop foundation civil work, underground transit direction, and subterranean infrastructure design."
      },
      {
        question: "How can June 4 maintain project momentum?",
        answer: "Combine structural engineering standards with clear crew safety communication and environmental boring permits."
      }
    ],
    imageBrief: "Commanding engineering graphic showing a chief engineer inspecting a massive illuminated underground transit tunnel with a high-speed hyper-loop train, color palette of steel silver, electric blue, and slate grey."
  },
  5: {
    snippetAnswer: "June 5 births unite double-5 frequency with Arcana 5 (The Hierophant) on World Environment Day (June 5). June 5 bestows a talent for formulating zero-waste industrial design protocols, publishing eco-product disassembly standards, and certifying sustainable factories.",
    vignetteTitle: "The World Environment Day Industrial Lead: Publishing Zero-Waste Factory Standards",
    vignetteScenario: "Unveiling a zero-waste industrial manufacturing code on World Environment Day (June 5), a product steward certifies 50 electronics factories. Their disassembly protocol ensures 99% of consumer device components are recovered and remanufactured.",
    birthArchetypeContent: "World Environment Day industrial stewardship and zero-waste factory certification mark June 5 under Arcana 5. Double-5 date frequency empowers you to establish binding product disassembly protocols that eliminate manufacturing waste across global assembly plants.",
    highFrequencyExpression: "In master industrial alignment on World Environment Day, your work focuses on zero-waste product standards, eco-factory certification, modular disassembly protocols, and industrial environmental stewardship.",
    shadowChallenges: "Under shadow friction, you might mandate overly complex factory disassembly rules, clash with manufacturing plant managers, or delay product compliance audits.",
    vocationAndFinance: "Shines as a World Environment Day industrial steward, zero-waste factory auditor, product disassembly strategist, and manufacturing policy lead. Wealth grows through factory compliance auditing.",
    reflectionQuestions: [
      "Am I testing zero-waste disassembly protocols on real assembly lines?",
      "How can I streamline eco-factory certification standards for international manufacturers?",
      "What industrial product disassembly code am I ready to enforce today?"
    ],
    faqItems: [
      {
        question: "Why is June 5 a double-5 World Environment Day birthday?",
        answer: "Month 6 contains June 5 (World Environment Day), combining double-5 teaching frequency with global zero-waste industrial leadership."
      },
      {
        question: "What zodiac sign is June 5?",
        answer: "June 5 is Gemini (Air sign), giving communicative intellect and technical agility to The Hierophant's mission."
      },
      {
        question: "What is the financial engine for June 5?",
        answer: "Certifying zero-waste manufacturing plants and auditing industrial product disassembly compliance."
      },
      {
        question: "Which Arcana complements June 5?",
        answer: "Arcana 19 (The Sun) amplifies June 5's global industrial visibility and factory compliance."
      }
    ],
    imageBrief: "Inspiring illustration of a product steward inspecting a robotically disassembled solar smartphone in a clean, modern zero-waste factory on World Environment Day, color palette of emerald green, silver, and clean white."
  },
  6: {
    snippetAnswer: "A June 6 birthday embodies double-6 partnership harmony under Arcana 6 (The Lovers). Resting in early June, June 6 grants exceptional skill for organizing organic strawberry and blackberry guild cooperatives, establishing berry farm corridors, and securing direct food trade contracts.",
    vignetteTitle: "The Double-6 Berry Guild Lead: Unifying Organic Strawberry & Blackberry Growers",
    vignetteScenario: "Unifying a coalition of 50 organic berry farming families on June 6, a guild founder structures a fair-trade fruit alliance. Their direct distribution network supplies organic fresh berries to artisan bakeries across North America.",
    birthArchetypeContent: "Organic berry farming cooperatives and fruit meadow preservation mark June 6's double-6 expression of Arcana 6. You unite regional growers into fair-trade fruit cooperatives that safeguard organic harvests.",
    highFrequencyExpression: "Demonstrating commercial partnership alignment, your focus highlights berry guild management, organic fruit meadow preservation, trade agreements, and fair trade alliances.",
    shadowChallenges: "Shadow friction includes over-analyzing berry guild profit shares, fearing loss of farm autonomy, or delaying buyer contract negotiations.",
    vocationAndFinance: "Builds equity as a berry guild director, fruit meadow founder, organic produce distributor, and fair-trade agricultural negotiator. Earnings grow through cooperative fruit equity.",
    reflectionQuestions: [
      "Am I structuring agroforestry alliances on clear mutual values or quick price compromises?",
      "How can I preserve farm family income while upholding organic agroforestry soil charters?",
      "What organic cocoa and hazelnut trade agreement am I ready to finalize today?"
    ],
    faqItems: [
      {
        question: "Why is June 6 a double-6 birthday?",
        answer: "Month 6 and Day 6 double-anchor Arcana 6's master partnership frequency with extraordinary commercial and agricultural alignment."
      },
      {
        question: "What zodiac sign is June 6?",
        answer: "June 6 is Gemini (Air sign), bringing communicative intellect and diplomatic agility to Arcana 6's partnership design."
      },
      {
        question: "What is the financial key for June 6?",
        answer: "Structuring high-value apiary cooperatives and direct fair-trade wildflower honey export agreements."
      },
      {
        question: "Which Arcana complements June 6?",
        answer: "Arcana 4 (The Emperor) provides structural governance to anchor Arcana 6's agricultural deals."
      }
    ],
    imageBrief: "Modern graphic depicting an agroforestry director shaking hands with hazelnut farmers in a lush shade-grown cocoa grove under a golden summer sun, color palette of cocoa brown, emerald green, and gold."
  },
  7: {
    snippetAnswer: "June 7 propels your life path under Arcana 7 (The Chariot). Resting in early June, June 7 bestows engineering mastery for liquid-hydrogen heavy freight locomotives, zero-emission rail corridor optimization, and leading clean rail transit networks.",
    vignetteTitle: "The Hydrogen Rail Lead: Engineering High-Payload Freight Locomotives",
    vignetteScenario: "Deploying a fleet of 20 liquid-hydrogen heavy freight locomotives on June 7, a rail engineer completes a 1,500-mile cross-country rail corridor. The hydrogen trains haul 10,000 tons of freight with zero carbon emissions.",
    birthArchetypeContent: "Liquid-hydrogen freight locomotives and heavy rail corridor optimization define June 7 under Arcana 7. You combine Gemini technical intellect with Arcana 7 drive, engineering hydrogen fuel cell trains that replace heavy diesel locomotives across trans-continental rail routes.",
    highFrequencyExpression: "In active freight transit light, your practice highlights hydrogen locomotive engineering, heavy rail corridor optimization, zero-emission freight logistics, and clean rail transit leadership.",
    shadowChallenges: "Under pressure, you might act impatiently during railway safety certification delays, push locomotive speed tests past thermal limits, or act brusquely toward rail dispatch teams.",
    vocationAndFinance: "Pioneers zero-emission rail as a hydrogen locomotive engineer, heavy freight rail director, rail corridor strategist, and clean transit CEO. Wealth grows through rail freight contracts.",
    reflectionQuestions: [
      "Am I balancing high-speed elevated transit innovation with strict urban safety compliance?",
      "How can I inspire my civil transit engineering team during complex municipal track trials?",
      "What zero-emission urban monorail milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 7?",
        answer: "June 7 is Gemini (Air sign), giving communicative intellect and urban transit design agility to Arcana 7."
      },
      {
        question: "How does June 7 differ from May 7?",
        answer: "May 7 carries Taurus solar river catamarans, while June 7 carries Gemini liquid-hydrogen freight locomotives and heavy rail corridor optimization."
      },
      {
        question: "What is the technical edge of June 7?",
        answer: "Engineering liquid-hydrogen freight locomotives that haul 10,000 tons of freight with zero carbon emissions."
      },
      {
        question: "Which Arcana complements June 7?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's transit trial operations."
      }
    ],
    imageBrief: "Dynamic transit graphic of a futuristic white mag-lev monorail gliding along an elevated track fitted with golden solar panels above a modern green city under a bright summer sun, color palette of pure white, solar gold, and sky blue."
  },
  8: {
    snippetAnswer: "World Oceans Day on June 8 awakens regulatory clarity under Arcana 8 (Justice). Positioned in early June, June 8 grants a razor-sharp mind for auditing international deep-sea trench mining bans, enforcing seabed tribunal jurisdictions, and defending ocean treaty law.",
    vignetteTitle: "The World Oceans Day Seabed Tribunal Lead: Enforcing Deep-Sea Trench Mining Bans",
    vignetteScenario: "On World Oceans Day (June 8), an international ocean treaty lawyer presents satellite subsea data to the International Seabed Tribunal, halting illegal ocean trench mining operations and establishing a permanent 100,000-square-mile abyssal ocean reserve.",
    birthArchetypeContent: "World Oceans Day deep-sea trench sovereignty and international seabed treaty enforcement define June 8 under Arcana 8. You evaluate subsea data and ocean treaty law, enforcing strict jurisdictional compliance to protect fragile abyssal trench ecosystems.",
    highFrequencyExpression: "In maritime legal precision on World Oceans Day, your work centers on international seabed tribunal litigation, ocean trench mining ban enforcement, deep-sea sanctuary protection, and defending global ocean law.",
    shadowChallenges: "Shadow patterns show up as legalistic nitpicking during seabed treaty drafting, rigid perfectionism, or ignoring coastal nations' economic resource claims.",
    vocationAndFinance: "Operates as a World Oceans Day tribunal legal lead, International Seabed Tribunal attorney, deep-sea mining ban auditor, ocean sovereignty director, and maritime treaty commissioner. Wealth grows through international legal retainers.",
    reflectionQuestions: [
      "Am I enforcing deep-sea mining bans with diplomatic fairness for developing coastal nations?",
      "Where in my ocean legal work can I establish greater international tribunal transparency?",
      "What World Oceans Day deep-sea treaty standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What makes June 8 special on World Oceans Day?",
        answer: "June 8 combines Arcana 8's legal justice with World Oceans Day, establishing a frequency for enforcing global deep-sea trench mining bans."
      },
      {
        question: "What zodiac sign is June 8?",
        answer: "June 8 is Gemini (Air sign), bringing communicative intellect and legal agility to Arcana 8's regulatory precision."
      },
      {
        question: "What is the financial rule for June 8?",
        answer: "Maintain absolute regulatory compliance and fair international ocean law standards in all maritime investments."
      },
      {
        question: "Which Arcana complements June 8?",
        answer: "Arcana 11 (Strength) provides stamina to support June 8's international tribunal litigation cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden scale of justice standing over a deep oceanic trench with glowing blue water beams mapping abyssal depths, color palette of ocean navy, gold, and sapphire blue."
  },
  9: {
    snippetAnswer: "Entering the world on June 9 connects your inner compass to Arcana 9 (The Hermit). Approaching mid-June, June 9 endows you with a passion for polar glacial ice core research, cataloging 100,000-year atmospheric gas archives, and analyzing paleoclimate ice layers.",
    vignetteTitle: "The Glacial Ice Core Taxonomist: Decoding 100,000 Years of Atmospheric History",
    vignetteScenario: "Working in an Antarctic ice core vault on June 9, a paleoclimatologist analyzes atmospheric carbon bubbles trapped 2,000 meters deep in glacier ice. Their ice core records reveal historic natural carbon cycles, aiding long-term climate forecasting.",
    birthArchetypeContent: "Polar glacial ice core analysis and 100,000-year paleoclimate atmospheric gas archiving mark June 9 under Arcana 9. You thrive in solitary sub-zero ice vaults, analyzing gas isotopes trapped in ancient polar ice sheets to understand planetary climate history.",
    highFrequencyExpression: "Operating in scientific solitude, your work highlights polar ice core research, paleoclimate gas archiving, glacial layer taxonomy, and publishing ancient atmospheric studies.",
    shadowChallenges: "In shadow, you may retreat into antisocial polar laboratory isolation, hoard ice core data out of distrust, or show impatience toward public climate communicators.",
    vocationAndFinance: "Flourishes as a glacial ice core taxonomist, paleoclimatologist, Antarctic lab director, atmospheric gas analyst, and scientific author. Income grows through research publishing and global grants.",
    reflectionQuestions: [
      "Am I balancing my solitary polar ice core research with public climate science education?",
      "How can I apply 100,000-year atmospheric ice discoveries to improve modern climate models?",
      "What paleoclimate ice layer secret am I ready to study today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 9?",
        answer: "June 9 is Gemini (Air sign), blending communicative intellect with The Hermit's contemplative research focus."
      },
      {
        question: "How does June 9 differ from May 9?",
        answer: "May 9 carries Taurus canopy botany, while June 9 carries Gemini polar glacial ice core research and 100,000-year paleoclimate atmospheric archiving."
      },
      {
        question: "Why does June 9 require quiet ice-vault focus?",
        answer: "Solitude in Antarctic ice core vaults allows June 9 to measure delicate microscopic gas bubbles without atmospheric contamination."
      },
      {
        question: "Which Arcana complements June 9?",
        answer: "Arcana 3 (The Empress) offers natural fertile growth to support June 9's ice core research discoveries."
      }
    ],
    imageBrief: "Mystical portrait of a scientist in polar gear examining a glowing cylindrical ice core sample inside a blue subterranean ice vault, color palette of glacier blue, crisp white, and gold."
  },
  10: {
    snippetAnswer: "June 10 marks a powerful cycle transition under Arcana 10 (Wheel of Fortune). Closing the first decade of June, June 10 grants an intuitive rhythm for deep-well geothermal hydro-thermal engineering, 5,000m reservoir pressure modeling, and scaling geothermal power plants.",
    vignetteTitle: "The Geothermal Reservoir Engineer: Scaling 5,000m Thermal Power Fields",
    vignetteScenario: "Engineering a 500MW geothermal plant on June 10, a hydro-thermal engineer drills two 5,000-meter deep wells into crystalline bedrock. The closed-loop thermal system circulates subterranean steam to supply 24/7 baseload power.",
    birthArchetypeContent: "Deep-well geothermal steam engineering and subterranean hydro-thermal pressure modeling drive June 10's expression of Arcana 10. You master 5,000-meter geothermal drilling technology, converting deep earth heat into continuous clean baseload electricity.",
    highFrequencyExpression: "In active geothermal engineering light, you manage 5,000-meter drilling rigs, model sub-surface steam pressure, deploy hydro-thermal turbines, and scale baseload geothermal power.",
    shadowChallenges: "Shadow patterns show up as rushing deep-well drilling schedules, neglecting seismic pressure monitoring, or over-working drilling crews during reservoir testing.",
    vocationAndFinance: "Achieves distinction as a geothermal reservoir engineer, 5,000m drilling director, hydro-thermal plant manager, and deep-earth power chair. Wealth grows through geothermal energy contracts.",
    reflectionQuestions: [
      "Am I maintaining rigorous sub-surface pressure safety during deep drilling?",
      "How can I optimize closed-loop geothermal steam extraction to increase turbine efficiency?",
      "What deep-well hydro-thermal project am I ready to lead today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 10?",
        answer: "June 10 is Gemini (Air sign), giving communicative intellect and engineering agility to Arcana 10's cycle timing."
      },
      {
        question: "How does June 10 differ from May 10?",
        answer: "May 10 carries Taurus organic citrus orchard acquisitions, while June 10 carries Gemini deep-well geothermal steam engineering and 5,000m reservoir pressure modeling."
      },
      {
        question: "What is the technical secret of June 10?",
        answer: "Engineering 5,000-meter closed-loop hydro-thermal steam systems that generate 24/7 clean baseload power."
      },
      {
        question: "Which Arcana complements June 10?",
        answer: "Arcana 21 (The World) expands June 10's geothermal projects onto a global international scale."
      }
    ],
    imageBrief: "Regal symbolist graphic of a golden celestial wheel turning over a glowing deep subterranean geothermal power plant beneath green mountains, color palette of subterranean amber, electric cyan, and gold."
  },
  11: {
    snippetAnswer: "Embodied by Master 11 stamina, June 11 vibrates under Arcana 11 (Strength). Moving through mid-June, June 11 endows you with extraordinary physical endurance, tracking endangered Himalayan snow leopards across 15,000-foot alpine ridges, and building community livestock protection trusts.",
    vignetteTitle: "The Himalayan Wildlife Lead: High-Altitude Snow Leopard Sanctuary Defense",
    vignetteScenario: "Directing an Alpine snow leopard trust on June 11, a wildlife biologist coordinates satellite collar tracking across 15,000-foot Himalayan ridges. Their community livestock insurance program reduces snow leopard poaching to zero across 20 mountain villages.",
    birthArchetypeContent: "High-altitude snow leopard tracking and mountain livestock protection characterize June 11 under Arcana 11. You navigate steep Himalayan snow ridges, using quiet composure to protect snow leopards while ensuring mountain herder safety.",
    highFrequencyExpression: "In master alpine alignment, your leadership centers on snow leopard sanctuary management, community livestock insurance, alpine wildlife tracking, and physical high-altitude endurance.",
    shadowChallenges: "Under pressure, you may experience physical exhaustion during long snow patrols, feel sudden frustration toward poachers, or ignore personal fatigue.",
    vocationAndFinance: "Leads with calm power as a snow leopard biologist, alpine wildlife director, high-altitude expedition head, and mountain conservation trustee. Funding expands through wildlife foundation grants.",
    reflectionQuestions: [
      "How can I maintain my physical stamina during grueling high-altitude snow tracking expeditions?",
      "Am I applying quiet somatic composure rather than anger when working with mountain herder communities?",
      "What high-altitude wildlife protection milestone am I called to achieve today?"
    ],
    faqItems: [
      {
        question: "Is June 11 a Master Number birthday?",
        answer: "Yes, 11 is a Master Number in numerology, granting extraordinary spiritual intuition, physical stamina, and quiet somatic mastery over mountain wildlife."
      },
      {
        question: "What zodiac sign is June 11?",
        answer: "June 11 is Gemini (Air sign), adding communicative intellect and mountain agility to Arcana 11's intense strength."
      },
      {
        question: "How does June 11 differ from May 11?",
        answer: "May 11 carries Taurus mountain gorilla sanctuary direction, while June 11 carries Gemini high-altitude snow leopard tracking and mountain herder safety."
      },
      {
        question: "What is the health key for June 11?",
        answer: "Regular physical grounding practices and systematic sleep recovery between high-altitude snow surveys."
      }
    ],
    imageBrief: "Inspiring illustration of a calm wildlife biologist standing on a snowy 15,000-foot mountain ridge beside a majestic snow leopard under a starlit halo, color palette of alpine snow white, ice blue, and gold."
  },
  12: {
    snippetAnswer: "Illuminated by perspective shifts, June 12 aligns with Arcana 12 (The Hanged Man). Moving through mid-June, June 12 grants a vision for extracting pure silver from discarded electronic circuit boards and upcycling reclaimed metals into solar photovoltaic panels.",
    vignetteTitle: "The Circuit Board Silver Solar Upcycler: Reclaiming Precious Metal Photovoltaics",
    vignetteScenario: "Designing an e-waste refining system on June 12, an engineer extracts 500 kilograms of pure silver from discarded computer circuit boards. The reclaimed precious metal is upcycled directly into high-efficiency solar photovoltaic cells.",
    birthArchetypeContent: "E-waste silver extraction and solar cell upcycling define June 12 under Arcana 12. You flip electronic recycling upside down, refining silver from discarded electronics to produce high-efficiency solar energy modules.",
    highFrequencyExpression: "In high creative light, your work focuses on e-waste silver recovery, solar cell upcycling, zero-waste metal refining, and radical circular material design.",
    shadowChallenges: "Shadow states include feeling unappreciated by e-waste collectors, lingering in engineering indecision, or sacrificing personal earnings for non-profit recycling projects.",
    vocationAndFinance: "Pioneers clean technology as an e-waste silver refiner, solar material architect, circular electronics director, and clean-tech consultant. Earnings grow through metal refining patents.",
    reflectionQuestions: [
      "What electronic waste stream requires me to flip my design perspective completely?",
      "Am I balancing my non-profit e-waste refining work with personal financial stability?",
      "What precious metal solar recycling technology can I introduce today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 12?",
        answer: "June 12 is Gemini (Air sign), giving communicative intellect and design agility to The Hanged Man's perspective shifts."
      },
      {
        question: "How does June 12 differ from May 12?",
        answer: "May 12 carries Taurus industrial factory micro-plastic filtration, while June 12 carries Gemini e-waste silver extraction and solar photovoltaic upcycling."
      },
      {
        question: "What is the core lesson for June 12?",
        answer: "Learning that extracting silver from discarded circuit boards unlocks valuable high-efficiency solar panel materials."
      },
      {
        question: "Which Arcana complements June 12?",
        answer: "Arcana 4 (The Emperor) provides structural backing to execute June 12's refining operations."
      }
    ],
    imageBrief: "Mystical modern painting of glowing silver circuit boards dissolving into liquid light that reshapes into high-tech golden solar panels, color palette of metallic silver, solar gold, and electric blue."
  },
  13: {
    snippetAnswer: "Vibrating with rebirth power, June 13 activates Arcana 13 (Transformation). Resting near mid-June, June 13 endows you with the skill to decontaminate petrochemical refinery wastewater soils, deploying specialized aerobic microbes to transform toxic sludge fields into wetland reserves.",
    vignetteTitle: "The Refinery Wastewater Remediation Lead: Decontaminating Sludge Fields",
    vignetteScenario: "Managing a soil decontamination project on June 13, an environmental engineer deploys specialized aerobic microbes across a 300-acre abandoned oil refinery sludge field. Within two years, hydrocarbon toxicity drops to zero, creating a safe regional wetland reserve.",
    birthArchetypeContent: "Petrochemical wastewater sludge decontamination and microbial soil remediation characterize June 13 under Arcana 13. You do not fear refinery sludge sites; you deploy specialized microbes to digest hydrocarbons from contaminated soil, renewing damaged landscapes.",
    highFrequencyExpression: "Operating in high light, you excel in refinery sludge decontamination, microbial soil remediation, hydrocarbon breakdown, and leading industrial land rebirth.",
    shadowChallenges: "When ungrounded, you might feel overwhelmed by soil hydrocarbon toxicity metrics, attempt hazardous sampling without safety respirators, or brood over historic industrial pollution.",
    vocationAndFinance: "Directs environmental renewal as a refinery wastewater remediation lead, microbial soil scientist, hydrocarbon recovery manager, and land restoration director. Financial growth stems from decontamination contracts.",
    reflectionQuestions: [
      "What abandoned industrial chemical site am I ready to transform into a living public park?",
      "How can I apply microbial bioremediation science to accelerate toxic soil decontamination?",
      "Where in my life or career is a radical environmental rebirth waiting to occur?"
    ],
    faqItems: [
      {
        question: "Is June 13 an unlucky birthday in Destiny Matrix?",
        answer: "No. In Destiny Matrix, 13 represents Arcana 13 (Transformation), symbolizing soil rebirth, chemical site bioremediation, and high-impact environmental renewal."
      },
      {
        question: "What zodiac sign is June 13?",
        answer: "June 13 is Gemini (Air sign), bringing communicative intellect and adaptability to Arcana 13's transformative power."
      },
      {
        question: "What is the financial engine for June 13?",
        answer: "Executing industrial smelting slag decontamination and soil remediation contracts for municipal governments."
      },
      {
        question: "Which Arcana complements June 13?",
        answer: "Arcana 19 (The Sun) brings radiant sunlight and public recognition to illuminate June 13's land restoration results."
      }
    ],
    imageBrief: "Striking artwork of an abandoned industrial factory site blossoming into a sunlit public park filled with sunflower fields under a rainbow, color palette of emerald green, sunflower yellow, and warm terra cotta."
  },
  14: {
    snippetAnswer: "Centered in diplomatic balance, June 14 expresses Arcana 14 (Temperance). Positioned near mid-June, June 14 bestows a talent for managing estuary silt transport and salinity flow gates, balancing coastal wetland fish hatcheries with farmland irrigation demands.",
    vignetteTitle: "The Estuary Salinity Gate Mediator: Balancing Silt Flow with Farmland Runoff",
    vignetteScenario: "Mediating a complex river basin water dispute on June 14, a delta hydrologist manages water flow gates along an estuary delta. Their salinity balance model protects coastal wetland fish hatcheries while ensuring steady irrigation for upstream farms.",
    birthArchetypeContent: "Estuary salinity gate management and river silt transport diplomacy mark June 14 under Arcana 14. You balance river basin water flows, protecting fish hatcheries while ensuring steady irrigation for upstream farms.",
    highFrequencyExpression: "In active balance, you demonstrate estuary salinity management, silt transport engineering, agricultural runoff mediation, and wetland policy diplomacy.",
    shadowChallenges: "Shadow patterns include avoiding tough water allocation decisions out of conflict aversion, passive analytical delays, or compromising delta salinity limits under political pressure.",
    vocationAndFinance: "Harmonizes water systems as a river delta hydrologist, estuary basin manager, wetland restoration engineer, and water policy mediator. Wealth expands through water basin engineering contracts.",
    reflectionQuestions: [
      "Am I balancing agricultural irrigation demands with strict river delta wetland health?",
      "Where in my river basin water negotiations can I bring greater diplomatic moderation?",
      "What estuary salinity management framework requires rebalancing today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 14?",
        answer: "June 14 is Gemini (Air sign), giving communicative intellect and diplomatic agility to Arcana 14's balanced synthesis."
      },
      {
        question: "How does June 14 differ from May 14?",
        answer: "May 14 carries Taurus alpine river basin hydro-diplomacy, while June 14 carries Gemini estuary salinity gate management and river silt transport diplomacy."
      },
      {
        question: "What is the financial secret of June 14?",
        answer: "Designing balanced estuary salinity management systems that preserve fish hatcheries while supporting farming."
      },
      {
        question: "Which Arcana complements June 14?",
        answer: "Arcana 8 (Justice) provides legal backing to enforce June 14's water allocation standards."
      }
    ],
    imageBrief: "Harmonious artwork depicting a winged figure pouring freshwater into an estuary delta where river water meets the blue sea amidst lush green wetlands under a warm sun, color palette of estuary turquoise, emerald green, and gold."
  },
  15: {
    snippetAnswer: "Possessing charismatic legal leverage, June 15 commands Arcana 15 (The Devil). Approaching mid-June, June 15 grants intense courtroom charisma, financial mastery over industrial smelter emissions litigation, and prosecuting atmospheric sulfur dioxide violations in federal courtrooms.",
    vignetteTitle: "The Smelter Emissions Antitrust Litigator: Prosecuting Air Pollution Cartels",
    vignetteScenario: "Exposing illegal sulfur dioxide emissions on June 15, an antitrust trial lawyer defeats a major smelting conglomerate in federal court. Their verdict forces the company to pay $150M into air quality monitoring trusts for illegal toxic emissions.",
    birthArchetypeContent: "Industrial smelter sulfur dioxide emissions litigation and air pollution prosecution define June 15 under Arcana 15. You command deep legal leverage in courtrooms, striking down illegal corporate emissions schemes to protect clean air and public health.",
    highFrequencyExpression: "In high legal authority, your work highlights smelter emissions antitrust litigation, breaking corporate pollution monopolies, defending air transparency, and securing corporate environmental compliance.",
    shadowChallenges: "Shadow friction includes courtroom stubbornness during settlement talks, over-leveraging trial publicity, or pushing aggressive litigation tactics.",
    vocationAndFinance: "Excels as a smelter emissions attorney, atmospheric pollution prosecutor, environmental trial advocate, and clean air compliance director. Financial success builds through courtroom trial victories and legal retainers.",
    reflectionQuestions: [
      "Am I using my legal leverage to expose industrial greenwashing or to gain corporate litigation power?",
      "What corporate greenwashing claim or deceptive dependency am I ready to defeat today?",
      "How can I bring complete legal transparency to environmental corporate claims?"
    ],
    faqItems: [
      {
        question: "Does Arcana 15 mean a June 15 birthday is negative?",
        answer: "Not at all. In Destiny Matrix, Arcana 15 represents intense charisma, legal power, and the ability to break free from corporate greenwashing cartels."
      },
      {
        question: "What zodiac sign is June 15?",
        answer: "June 15 is Gemini (Air sign), infusing Arcana 15's legal power with communicative intellect and courtroom agility."
      },
      {
        question: "What is the financial engine for June 15?",
        answer: "Exposing toxic dumping schemes and litigating high-value chemical waste antitrust cases."
      },
      {
        question: "Which Arcana complements June 15?",
        answer: "Arcana 14 (Temperance) provides calming balance to prevent legal litigation over-reach."
      }
    ],
    imageBrief: "Dramatic artwork showing a figure holding a golden gavel that shatters a false green plastic shield over an industrial oil refinery, color palette of rich burgundy, deep obsidian, and gold."
  },
  16: {
    snippetAnswer: "Awakening structural safety, June 16 operates under Arcana 16 (The Tower). Positioned in mid-June, June 16 bestows a drive to audit subsea oil pipeline pressure hulls, detect deep-ocean seismic stress micro-cracks, and prevent underwater structural collapse.",
    vignetteTitle: "The Subsea Pipeline Safety Auditor: Detecting Deep-Ocean Stress Fractures",
    vignetteScenario: "Inspecting an offshore subsea oil pipeline on June 16, a marine structural engineer detects micro-fractures in a deep-water pressure joint 3,000 feet below sea level. Ordering immediate pipeline shut-in and sleeve reinforcement, they avert a catastrophic ocean oil spill.",
    birthArchetypeContent: "Subsea oil pipeline pressure hull auditing and marine seismic stress detection characterize June 16 under Arcana 16. You uncover hidden underwater structural stress fractures, mandating emergency sleeve repairs to protect ocean ecosystems.",
    highFrequencyExpression: "Operating in technical crisis prevention, your work highlights subsea pipeline safety auditing, offshore pressure joint inspection, seismic stress fracture detection, and ocean pipeline engineering.",
    shadowChallenges: "Strained shadow reactions show up as over-reacting during pressure pipe inspections, issuing blunt reprimands to offshore technicians, or stalling maintenance permits.",
    vocationAndFinance: "Shines in technical safety management as a subsea pipeline auditor, offshore structural inspector, marine pressure vessel engineer, and subsea risk consultant. Financial returns grow through specialized subsea safety contracts.",
    reflectionQuestions: [
      "What hidden structural flaw am I ready to identify and fix in my engineering work or life?",
      "How can I deliver safety audits with clear, solution-oriented communication?",
      "What indestructible safety foundation am I establishing for water reservoir operations?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 16?",
        answer: "June 16 is Gemini (Air sign), bringing communicative intellect and technical focus to The Tower's awakening."
      },
      {
        question: "Is Arcana 16 a difficult birth archetype?",
        answer: "Arcana 16 brings periodic sudden awakenings, but its ultimate purpose is revealing hidden flaws so you build indestructible structural safety."
      },
      {
        question: "Which careers suit June 16 best?",
        answer: "Nuclear power plant containment safety engineering, concrete dome auditing, reactor safety management, and seismic hazard prevention."
      },
      {
        question: "How can June 16 navigate sudden change?",
        answer: "Focus on core civil engineering principles and rebuild systematically from rock-solid structural foundations."
      }
    ],
    imageBrief: "Striking architectural illustration of a golden reinforced dam spillway backed by lightning holding back a massive reservoir under a dark sky, color palette of concrete grey, electric gold, and deep blue."
  },
  17: {
    snippetAnswer: "Guided by visionary starlight, June 17 aligns with Arcana 17 (The Star) on World Day to Combat Desertification (June 17). June 17 grants visionary inspiration, deploying solar atmospheric dew collectors, unwavering optimism, and guiding desert freshwater recovery.",
    vignetteTitle: "The World Day to Combat Desertification Lead: Deploying Solar Dew Harvesters",
    vignetteScenario: "Directing a desert water initiative on World Day to Combat Desertification (June 17), a clean-tech inventor installs 2,000 bio-inspired solar atmospheric dew harvesters across an arid desert region, extracting 50,000 liters of pure drinking water from night air daily.",
    birthArchetypeContent: "World Day to Combat Desertification leadership and solar atmospheric dew harvesting embody June 17's mastery under Arcana 17. You deploy bio-inspired atmospheric dew collectors that condense freshwater from desert night air, bringing clean water to arid communities.",
    highFrequencyExpression: "In celestial freshwater recovery alignment on World Day to Combat Desertification, your leadership focuses on solar dew harvester deployment, desert water security, bio-inspired clean technology, and inspiring environmental hope.",
    shadowChallenges: "Shadow patterns show up as ungrounded atmospheric water daydreams without field execution, feeling alienated from local desert communities, or losing hope during heatwaves.",
    vocationAndFinance: "Inspires globally as a solar dew technology lead, desert water project founder, atmospheric water engineer, clean-tech visionary, and water trustee. Prosperity expands through international clean-water contracts.",
    reflectionQuestions: [
      "Am I taking concrete daily steps to execute my ambitious solar dew harvesting vision?",
      "How can I use bio-inspired atmospheric condensation to illuminate desert water solutions?",
      "What desert freshwater recovery goal am I ready to launch on World Day to Combat Desertification?"
    ],
    faqItems: [
      {
        question: "What makes June 17 special on World Day to Combat Desertification?",
        answer: "June 17 combines Arcana 17's visionary starlight with World Day to Combat Desertification, establishing a frequency for solar atmospheric dew harvesting."
      },
      {
        question: "What zodiac sign is June 17?",
        answer: "June 17 is Gemini (Air sign), bringing communicative intellect and technological agility to Arcana 17's celestial vision."
      },
      {
        question: "What is the financial engine for June 17?",
        answer: "Building and deploying solar atmospheric dew harvesting networks funded by global water innovation trusts."
      },
      {
        question: "Which Arcana complements June 17?",
        answer: "Arcana 21 (The World) expands June 17's dew harvesting projects onto a global international scale."
      }
    ],
    imageBrief: "Breathtaking artwork of glowing bio-inspired solar dew collectors glistening with clear water droplets under starlight over golden desert dunes, color palette of atmospheric silver, desert gold, and deep night blue."
  },
  18: {
    snippetAnswer: "Navigating intuitive depths, June 18 channels Arcana 18 (The Moon). Approaching the Summer Solstice cusp, June 18 endows you with a rich intuitive imagination, bioluminescent fungal spore communication research, and navigating nocturnal forest light signaling.",
    vignetteTitle: "The Bioluminescent Fungal Mycologist: Mapping Nocturnal Spore Light Networks",
    vignetteScenario: "Researching in an old-growth forest on a June 18 full moon night, a mycologist records bioluminescent light pulses between glowing fungal mycelium and tree roots. Their discovery reveals a nocturnal light-signaling system that coordinates forest defense against pests.",
    birthArchetypeContent: "Bioluminescent fungal spore networks and nocturnal mycelium light signaling mark June 18's path under Arcana 18. You explore pitch-black midnight forest floors, utilizing specialized optical sensors to map bio-lumuminescent light pulses released by subterranean mushroom networks.",
    highFrequencyExpression: "In nocturnal fungal mastery, your work highlights bioluminescent spore research, mycelium light communication, subterranean fungal ecology, and publishing forest mycology studies.",
    shadowChallenges: "Under shadow stress, you might succumb to irrational forest fears, fear of night darkness, self-deception, or escaping into ungrounded biological daydreams.",
    vocationAndFinance: "Excels in bio-optical research as a bioluminescent mycologist, nocturnal forest ecologist, fungal light researcher, bio-analyst, and scientific author. Wealth grows through bio-lumuminescent technology patents.",
    reflectionQuestions: [
      "Am I trusting my intuitive fungal light observations or letting irrational forest fears cloud my focus?",
      "How can I apply bioluminescent mycelium discoveries to enhance natural forest pest resistance?",
      "What nocturnal fungal light mystery am I ready to illuminate today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 18?",
        answer: "June 18 sits near the Gemini-Cancer solstice cusp, blending Gemini communicative intellect with The Moon's intuitive sub-surface vision."
      },
      {
        question: "How does June 18 differ from May 18?",
        answer: "May 18 carries Taurus hydrothermal vent ecology, while June 18 carries Gemini bioluminescent fungal spore communication and nocturnal mycelium light signaling."
      },
      {
        question: "What is the technical superpower of June 18?",
        answer: "Mapping nocturnal subterranean fungal light signaling using sensitive bio-optical sensor arrays."
      },
      {
        question: "Which Arcana complements June 18?",
        answer: "Arcana 19 (The Sun) brings radiant surface light to balance Arcana 18's subterranean fungal exploration."
      }
    ],
    imageBrief: "Atmospheric symbolist painting of a scientist under a full moon kneeling beside glowing green and cyan bioluminescent mushrooms pulsing light across a dark forest floor, color palette of forest night green, bioluminescent cyan, and silver."
  },
  19: {
    snippetAnswer: "Radiating solar authority, June 19 commands Arcana 19 (The Sun). Closing Gemini season near peak Summer Solstice solar power, June 19 bestows radiant executive warmth, parabolic trough solar mirror field engineering, and 400°C industrial steam thermal victory.",
    vignetteTitle: "The Solar Parabolic Trough Lead: Engineering 400°C Industrial Steam Fields",
    vignetteScenario: "Commissioning a 300MW parabolic trough solar thermal field on June 19, a thermal engineer aligns 1,000-meter parabolic mirrors to heat synthetic oil to 400°C. The high-temperature solar system supplies zero-carbon thermal steam to regional chemical factories.",
    birthArchetypeContent: "June 19 births channel Arcana 19's peak solar power into parabolic trough solar mirror fields. You deploy 1,000-meter parabolic mirror troughs that concentrate direct sunlight onto fluid receiver pipes, generating high-pressure 400°C thermal steam for industrial factories.",
    highFrequencyExpression: "In radiant solar mastery near Summer Solstice, your leadership highlights parabolic trough mirror field design, 400°C industrial steam generation, thermal receiver optimization, and zero-carbon factory heating.",
    shadowChallenges: "In shadow, you may experience egocentric vanity, demanding absolute spotlight control over thermal solar projects, physical exhaustion from over-working, or hiding stress behind smiles.",
    vocationAndFinance: "Achieves public acclaim as a parabolic trough solar developer, industrial thermal energy CEO, clean-heat investment chair, public speaker, and solar executive. Prosperity expands through multi-megawatt industrial steam sales.",
    reflectionQuestions: [
      "Am I sharing my executive warmth to empower my mirror trough engineering and solar teams equally?",
      "How can I pace my intense Summer Solstice energy drive to maintain long-term physical stamina?",
      "What parabolic trough industrial thermal initiative am I ready to commission today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 19?",
        answer: "June 19 sits near the Gemini-Cancer Summer Solstice cusp, representing peak solar light power."
      },
      {
        question: "How does June 19 differ from May 19?",
        answer: "May 19 carries Taurus 500MW floating solar reservoirs, while June 19 carries Gemini parabolic trough solar mirror fields and 400°C industrial steam generation."
      },
      {
        question: "What is the financial engine for June 19?",
        answer: "Commissioning parabolic trough solar thermal fields that supply 400°C clean steam directly to industrial manufacturing plants."
      },
      {
        question: "Which Arcana complements June 19?",
        answer: "Arcana 21 (The World) expands June 19's solar thermal enterprise onto a global international stage."
      }
    ],
    imageBrief: "Radiant tarot-style artwork of a triumphant figure standing beside rows of polished parabolic mirror troughs reflecting intense summer sunlight onto a glowing receiver pipe, color palette of brilliant sun gold, molten copper, and sky blue."
  },
  20: {
    snippetAnswer: "Awakened by spiritual purpose on World Refugee Day (June 20), June 20 vibrates under Arcana 20 (Judgement). Opening the Solstice Cusp on World Refugee Day (June 20), June 20 endows you with a grounded spiritual calling, formulating international climate migration treaties, and island relocation governance leadership.",
    vignetteTitle: "The World Refugee Day Climate Envoy: Drafting International Relocation Treaties",
    vignetteScenario: "Directing an international climate policy summit on World Refugee Day (June 20), a diplomat drafts a multi-national treaty securing legal land rights and sovereign status for island populations displaced by rising sea levels.",
    birthArchetypeContent: "World Refugee Day climate migration governance and island relocation treaties mark June 20 on the Gemini-Cancer Solstice cusp under Arcana 20. You direct international drafting of climate relocation accords, securing sovereign land rights for populations displaced by environmental sea level changes.",
    highFrequencyExpression: "Operating in awakening clarity on World Refugee Day, your path centers on climate migration treaty drafting, island relocation governance, international human rights law, and ancestral land defense.",
    shadowChallenges: "Under shadow friction, you may linger in harsh judgment over past climate displacement treaties, hold grudges against polluting industrial nations, or hesitate during policy negotiations.",
    vocationAndFinance: "Serves humanity as a World Refugee Day climate envoy, climate migration policy director, international human rights attorney, and relocation trustee. Wealth builds through international policy retainers.",
    reflectionQuestions: [
      "What climate migration treaty or island relocation governance framework am I called to establish?",
      "Am I listening to my quiet inner awakening or staying trapped in past displacement grief?",
      "What international land rights charter am I ready to build for future generations?"
    ],
    faqItems: [
      {
        question: "What makes June 20 special on World Refugee Day?",
        answer: "June 20 combines Arcana 20's spiritual awakening with World Refugee Day and the Solstice Cusp, creating a calling for international climate migration governance."
      },
      {
        question: "What zodiac sign is June 20?",
        answer: "June 20 sits on the Gemini-Cancer Solstice cusp, marking the transition from Gemini (Air) into Cancer (Water)."
      },
      {
        question: "Which careers suit June 20 best?",
        answer: "World Refugee Day climate migration envoy work, island relocation governance, international human rights law, and sanctuary treaty drafting."
      },
      {
        question: "How can June 20 overcome self-judgment?",
        answer: "Focus on active climate policy building and view international relocation treaties as living beacons of human dignity."
      }
    ],
    imageBrief: "Inspiring symbolist artwork of an angel sounding a golden trumpet over a sunlit global summit hall where international delegates sign a golden parchment treaty, color palette of emerald green, gold, and sapphire blue."
  },
  21: {
    snippetAnswer: "Unifying global power on the Summer Solstice (June 21), June 21 manifests Arcana 21 (The World). June 21 grants a global perspective, a talent for connecting trans-continental solar grids, and leading continuous 24-hour clean energy exchanges.",
    vignetteTitle: "The Summer Solstice Power Grid Architect: Interconnecting 24-Hour Solar Energy Systems",
    vignetteScenario: "Leading a global clean energy summit on June 21, a grid architect connects national power networks across 3 continents, establishing a continuous 24-hour solar power exchange that eliminates fossil fuel peak power plants.",
    birthArchetypeContent: "Summer Solstice peak completion and trans-continental power grid interties embody June 21's borderless synthesis under Arcana 21. You channel Solstice energy into planetary power grid architecture, establishing international interties that link solar power across continents.",
    highFrequencyExpression: "In borderless global synthesis on the Summer Solstice, your leadership focuses on trans-continental power grid interties, continuous 24-hour solar exchanges, international energy protocols, and planetary grid integration.",
    shadowChallenges: "Under pressure, you may over-extend your diplomatic schedule, hesitate during inter-grid frequency synchronization, or worry about national energy sovereignty disputes.",
    vocationAndFinance: "Pioneers global energy integration as an international power grid architect, trans-continental clean energy director, and energy infrastructure trustee. Earnings build through multi-lateral energy grid advisory.",
    reflectionQuestions: [
      "What major international HVDC solar supergrid treaty am I ready to bring to complete ratification?",
      "How can I expand my diplomatic vision to encompass trans-continental power grid alliances?",
      "Where in my journey can I celebrate the complete global network I have built on the Summer Solstice?"
    ],
    faqItems: [
      {
        question: "What makes June 21 special on the Summer Solstice?",
        answer: "June 21 combines Arcana 21's global completion with the Summer Solstice peak light, granting capacity for 150-nation HVDC solar supergrid treaties."
      },
      {
        question: "What zodiac sign is June 21?",
        answer: "June 21 marks the Summer Solstice transition into Cancer (Water sign), bringing emotional depth and global nurturing to Arcana 21."
      },
      {
        question: "What is the financial engine for June 21?",
        answer: "Structuring borderless international HVDC solar supergrid accords and global clean energy trusts."
      },
      {
        question: "Which Arcana complements June 21?",
        answer: "Arcana 1 (The Magician) provides active creative spark to launch new global energy cycles."
      }
    ],
    imageBrief: "Regal symbolist illustration of a figure dancing within a golden Solstice sun wreath surrounded by flags of 150 nations over a glowing global HVDC power grid, color palette of brilliant sun gold, electric cyan, and emerald green."
  },
  22: {
    snippetAnswer: "Unlocking Master 22 builder potential, June 22 activates Arcana 22 (The Fool / 0). Positioned on the Solstice cusp, June 22 endows you with monumental master-builder capacity, legendary autonomous drone reforestation vision, and reforesting 100,000 wildfire-burned acres.",
    vignetteTitle: "The Autonomous Reforestation Master Builder: Deploying Drone Swarms Over Burned Slopes",
    vignetteScenario: "Deploying a swarm of 100 autonomous seed-dropping drones on June 22, a forestry tech founder plants 5 million climate-resilient tree seeds across 100,000 acres of wildfire-scorched mountain slopes in 30 days.",
    birthArchetypeContent: "Autonomous seed-dropping drone swarms and wildfire land restoration define June 22's Master 22 potential under Arcana 22. You construct autonomous aerial drone swarms that reforest burned mountain slopes to restore planetary forest cover.",
    highFrequencyExpression: "In master forestry alignment, your path highlights autonomous drone reforestation, wildfire slope recovery, master eco-technology, and bold land restoration leaps.",
    shadowChallenges: "Under shadow stress, you might make ungrounded financial leaps without drone field testing, feel overwhelmed by wildfire destruction metrics, or flee administrative duties.",
    vocationAndFinance: "Pioneers master forestry tech as an autonomous reforestation founder, drone eco-tech CEO, planetary forest director, and land trustee. Wealth flows through multi-lateral environmental funding.",
    reflectionQuestions: [
      "What bold drone reforestation master-builder project am I called to launch for our mountain forests?",
      "Am I balancing my visionary leaps of faith with solid drone engineering and financial ground strategy?",
      "Where in my life am I ready to start completely fresh to serve a planetary forest purpose?"
    ],
    faqItems: [
      {
        question: "Why is June 22 a Master Number birthday?",
        answer: "June 22 combines Master Number 22 (Master Builder) with Arcana 22 (The Fool), granting capacity for monumental autonomous drone reforestation leaps."
      },
      {
        question: "What zodiac sign is June 22?",
        answer: "June 22 is early Cancer (Water sign), bringing deep emotional care for forest health to Master 22's world-building drive."
      },
      {
        question: "Which careers suit June 22 best?",
        answer: "Autonomous drone reforestation leadership, forestry eco-technology building, international land restoration architecture, and environmental trusteeship."
      },
      {
        question: "How can June 22 avoid burnout?",
        answer: "Ground your monumental drone reforestation vision with trusted robotics engineers and financial co-trustees."
      }
    ],
    imageBrief: "Breathtaking illustration of a master builder figure standing on a mountain peak watching a swarm of golden autonomous drones dropping glowing seeds over a greening forest valley under a bright sun, color palette of forest green, solar gold, and sky blue."
  },
  23: {
    snippetAnswer: "June 23 integrates Master 5 wisdom with Cancer water sensitivity. Celebrating a June 23 birthday grants specialized talent for authoring compostable bio-resin manuals, training plastic factory engineers, and establishing green materials standards.",
    vignetteTitle: "The Circular Materials Author: Publishing Non-Toxic Bio-Resin Standards",
    vignetteScenario: "Publishing a textbook on non-toxic bio-resin chemistry on June 23, a materials engineer trains product designers across 40 manufacturing plants. Their textbook becomes mandatory policy, replacing petroleum plastics with fully compostable bio-resins.",
    birthArchetypeContent: "Compostable bio-resin chemistry and eco-materials manuals characterize June 23 under Arcana 5. You convert plant polymer data into compulsory factory design standards, phasing out petroleum plastics.",
    highFrequencyExpression: "In educational and chemical authority, your work focuses on circular materials textbooks, non-toxic bio-resin standards, industrial designer training, and materials engineering reform.",
    shadowChallenges: "When strained, you may push unrealistic bio-resin production deadlines, dismiss composite laboratory testing, or act dogmatically during factory audits.",
    vocationAndFinance: "Pioneers sustainable manufacturing as a compostable bio-resin specialist, green polymer author, eco-materials professor, and factory compliance consultant. Financial returns build through material patents and technical advisory.",
    reflectionQuestions: [
      "Am I teaching non-toxic bio-resin engineering from practical factory testing and mold trials?",
      "How can I translate complex polymer chemistry into clear standards for product designers?",
      "What circular materials engineering manual am I ready to publish today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 23?",
        answer: "June 23 is Cancer (Water sign), infusing The Hierophant's teaching mission with emotional care and intuitive wisdom."
      },
      {
        question: "How does June 23 differ from June 5?",
        answer: "June 5 carries Gemini circular design education, while June 23 carries Cancer non-toxic bio-resin chemistry authorship and circular materials textbooks."
      },
      {
        question: "What is the financial model for June 23?",
        answer: "Publishing materials engineering manuals and consulting for international industrial manufacturers."
      },
      {
        question: "Which Arcana complements June 23?",
        answer: "Arcana 3 (The Empress) offers fertile natural growth to support Arcana 5's materials teaching."
      }
    ],
    imageBrief: "Vibrant artwork of a materials engineering author presenting digital molecular diagrams of plant bio-resins to industrial designers in a modern materials laboratory, color palette of emerald green, amber yellow, and steel grey."
  },
  24: {
    snippetAnswer: "Midsummer energy on June 24 inspires apiculture sanctuary partnerships under Arcana 6 (The Lovers). Born on June 24, your path excels at organizing regional beekeeper co-operatives, protecting pollinator travel corridors, and securing fair wildflower honey trade deals.",
    vignetteTitle: "The Midsummer Apiculture Co-Op Lead: Unifying Organic Honeybee Sanctuaries",
    vignetteScenario: "Unifying 50 organic beekeepers on Midsummer (June 24), an apiculture director creates a cooperative honeybee sanctuary and profit-sharing network. The alliance protects 100,000 bee hives while supplying pure organic wildflower honey globally.",
    birthArchetypeContent: "June 24 births manifest Arcana 6's partnership harmony across Midsummer organic honeybee co-ops. You structure fair profit-sharing charters for beekeepers, protecting regional pollinator corridors and securing direct international export agreements for organic honey.",
    highFrequencyExpression: "In structural partnership alignment on Midsummer, your focus centers on honeybee co-op management, organic apiculture profit-sharing, pollinator corridor protection, and natural honey trade alliances.",
    shadowChallenges: "Under stress, you might over-complicate beekeeper profit split calculations, worry over hive location zoning, or avoid necessary price negotiations.",
    vocationAndFinance: "Fosters agricultural harmony as an apiculture sanctuary organizer, honeybee co-op founder, organic honey exporter, and pollinator corridor advocate. Returns grow through co-operative honey equity.",
    reflectionQuestions: [
      "Am I building honeybee sanctuary alliances on clear mutual agreements or verbal promises?",
      "How can I combine organic apiculture structure with genuine beekeeper community trust?",
      "What organic honeybee alliance am I ready to formalize on Midsummer?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 24?",
        answer: "June 24 is Cancer (Water sign), bringing emotional warmth and community care to Arcana 6's partnership design."
      },
      {
        question: "How does June 24 differ from June 6?",
        answer: "June 6 carries Gemini agroforestry cocoa co-ops, while June 24 carries Cancer Midsummer organic honeybee sanctuary founding and beekeeper profit-sharing."
      },
      {
        question: "What is the financial secret of June 24?",
        answer: "Structuring regional organic beekeeper co-ops that command direct international wildflower honey export contracts."
      },
      {
        question: "Which Arcana complements June 24?",
        answer: "Arcana 4 (The Emperor) reinforces June 24's demand for administrative structure in alliances."
      }
    ],
    imageBrief: "Warm graphic depicting beekeepers inspecting wooden honeycomb frames under a Midsummer sun in a field of blooming wildflowers, color palette of honey gold, emerald green, and amber."
  },
  25: {
    snippetAnswer: "Alpine cable transit momentum on June 25 drives Arcana 7 (The Chariot). Resting in early Cancer season, June 25 grants a talent for leading solar canopy aerial tramway engineering and zero-emission alpine incline transit fleets.",
    vignetteTitle: "The Alpine Solar Tramway Lead: Engineering High-Altitude Incline Cable Transit",
    vignetteScenario: "Designing a 10-mile solar canopy aerial tramway on June 25, an alpine engineer completes mountain transit trials across a 10,000-foot ridge. The cable cars transport 10,000 daily mountain visitors with zero carbon emissions.",
    birthArchetypeContent: "High-altitude solar aerial tramways and steep incline cable transit fleets anchor June 25 under Arcana 7. You combine Cancer mountain sensitivity with technical cable engineering adaptability, leading transit trials for solar aerial tramways that transport mountain travelers across deep gorges.",
    highFrequencyExpression: "In alpine transit momentum, your practice highlights solar aerial tramway engineering, zero-emission mountain transit trials, cable flight optimization, and incline cable fleet leadership.",
    shadowChallenges: "Under pressure, you might act impatiently during mountain cable safety checks, push maintenance crews past limits, or over-strain solar battery cells.",
    vocationAndFinance: "Pioneers alpine cable transit as an aerial tramway lead, high-altitude cable engineer, incline transit developer, and mountain cable director. Income expands through cable transit patents.",
    reflectionQuestions: [
      "Am I balancing high-altitude aerial tramway innovation with strict cable safety compliance?",
      "How can I lead my alpine engineering team to excel without creating high-pressure burnout?",
      "What zero-emission mountain cable transit milestone am I ready to achieve this year?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 25?",
        answer: "June 25 is Cancer (Water sign), giving intuitive mountain sky connection and transit agility to Arcana 7."
      },
      {
        question: "How does June 25 differ from June 7?",
        answer: "June 7 carries Gemini elevated solar mag-lev monorails, while June 25 carries Cancer solar canopy aerial tramways and 10,000-foot alpine cable transit."
      },
      {
        question: "What is the technical edge of June 25?",
        answer: "Designing solar canopy aerial tramways that transport 10,000 daily mountain visitors with zero carbon emissions."
      },
      {
        question: "Which Arcana complements June 25?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 7's cable transit trial programs."
      }
    ],
    imageBrief: "Dynamic aviation graphic of a modern white aerial tramway car fitted with golden solar panels gliding smoothly above a deep alpine gorge under a bright summer sun, color palette of pure white, solar gold, and mountain blue."
  },
  26: {
    snippetAnswer: "Ethical stone fruit harvest auditing defines June 26 under Arcana 8 (Justice). Positioned in early Cancer season, June 26 grants a razor-sharp mind for enforcing farmworker heat safety protocols, auditing pesticide-free orchards, and securing fair-trade export standards.",
    vignetteTitle: "The Organic Stone Fruit Compliance Auditor: Guaranteeing Harvest Labor Standards",
    vignetteScenario: "Auditing organic stone fruit orchards across South America on June 26, a compliance lawyer enforces fair labor standards, pesticide-free soils, and living wage payouts. Their audit secures 100% fair-trade export certification for a major stone fruit producer.",
    birthArchetypeContent: "June 26 births apply Arcana 8's trade compliance to organic stone fruit supply chains. You mandate orchard heat safety protocols and living wage guarantees across international fruit harvesting estates.",
    highFrequencyExpression: "In agrarian legal compliance, your leadership centers on organic stone fruit auditing, orchard heat safety enforcement, fair-trade labor certification, and protecting agricultural trade ethics.",
    shadowChallenges: "Shadow states include hyper-critical scrutiny during small orchard visits, rigid adherence to audit checklists, or suppressing personal warmth during farm inspections.",
    vocationAndFinance: "Upholds agricultural law as a stone fruit compliance auditor, agrarian labor attorney, harvest safety commissioner, and fair-trade inspector. Earnings build through agricultural audit retainers.",
    reflectionQuestions: [
      "Am I applying objective fairness to small stone fruit orchards as well as large distributor buyers?",
      "Where in my fruit supply chain auditing can I establish greater labor transparency?",
      "What organic stone fruit labor certification standard needs strict enforcement today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 26?",
        answer: "June 26 is Cancer (Water sign), bringing emotional care and community protection to Arcana 8's legal precision."
      },
      {
        question: "How does June 26 differ from May 26?",
        answer: "May 26 carries Gemini organic tea trade compliance, while June 26 carries Cancer organic stone fruit trade auditing and orchard worker heat safety law."
      },
      {
        question: "What is the financial rule for June 26?",
        answer: "Maintain absolute regulatory compliance and fair labor ethics in all agricultural supply investments."
      },
      {
        question: "Which Arcana complements June 26?",
        answer: "Arcana 11 (Strength) provides stamina to support Arcana 8's orchard labor audit cases."
      }
    ],
    imageBrief: "Symmetrical modern legal artwork showing a golden balance standing over a sunlit organic peach and cherry harvest with a magnifying crystal lens, color palette of peach orange, emerald green, and gold."
  },
  27: {
    snippetAnswer: "Subterranean basalt CO2 mineralization defines June 27 under Arcana 9 (The Hermit). Positioned in early Cancer season, June 27 endows you with specialized talent for deep carbon rock indexing, modeling subsurface geochemical reactions, and cataloging basalt stone storage formations.",
    vignetteTitle: "The Basalt Carbon Sequestration Indexer: Modeling Subterranean CO2 Mineralization",
    vignetteScenario: "Working in quiet scientific focus at a geothermal geology lab on June 27, a geochemist indexes CO2 mineralization rates in deep subterranean basalt formations. Their data proves that dissolved carbon turns into solid stone within two years, permanently trapping greenhouse gases.",
    birthArchetypeContent: "Subterranean basalt carbon mineralization and deep CO2 storage indexing define June 27 under Arcana 9. You work in quiet scientific focus, utilizing geochemical modeling to measure how injected carbon dioxide reacts with deep basalt rock to form permanent stone formations.",
    highFrequencyExpression: "In quiet digital geology science, your work highlights basalt carbon sequestration indexing, CO2 mineralization modeling, subterranean storage database curation, and publishing carbon geology studies.",
    shadowChallenges: "When isolated, you might withdraw into silent geology research, withhold basalt core data from peers, or act dismissively toward non-technical environmental advocates.",
    vocationAndFinance: "Advances earth science as a basalt carbon mineralization specialist, subterranean CO2 analyst, carbon storage geologist, and deep-rock geochemist. Revenue grows through geochemical patents and research grants.",
    reflectionQuestions: [
      "Am I balancing my solitary basalt carbon modeling focus with open scientific collaboration?",
      "How can I apply subterranean carbon mineralization data to assist global carbon removal projects?",
      "What basalt CO2 storage mystery am I ready to solve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 27?",
        answer: "June 27 is Cancer (Water sign), blending intuitive earth care with The Hermit's contemplative research focus."
      },
      {
        question: "How does June 27 differ from May 27?",
        answer: "May 27 carries Gemini digital herbarium AI indexing, while June 27 carries Cancer deep carbon sequestration basalt rock indexing and subterranean CO2 mineralization modeling."
      },
      {
        question: "Why does June 27 thrive in basalt carbon databases?",
        answer: "Quiet laboratory focus allows June 27 to model complex subterranean mineral reactions without social distraction."
      },
      {
        question: "Which Arcana complements June 27?",
        answer: "Arcana 3 (The Empress) provides fertile natural growth backing to support Arcana 9's geology work."
      }
    ],
    imageBrief: "Mystical scientific portrait of a geochemist analyzing glowing blue liquid carbon converting into solid white calcite crystals inside dark basalt rock core samples, color palette of basalt black, calcite white, and cobalt blue."
  },
  28: {
    snippetAnswer: "Wave tank hydrodynamic prototyping defines June 28 under Arcana 10 (Wheel of Fortune). Positioned in early Cancer season, June 28 grants an intuitive rhythm for ocean wave turbine testing, hydro-dynamic buoy array optimization, and scaling marine power farms.",
    vignetteTitle: "The Wave Hydrodynamics Engineer: Prototyping Subsea Wave Turbine Arrays",
    vignetteScenario: "Testing a 1:10 scale wave buoy in a wave basin facility on June 28, a hydrodynamics engineer optimizes turbine rotor pitch. Their hydrodynamic design captures 90% of wave energy during storm swells, paving the way for ocean power farm deployment.",
    birthArchetypeContent: "Ocean wave turbine hydrodynamics and wave tank buoy array testing characterize June 28 under Arcana 10. You combine Cancer water intuition with 2+8 structural focus, testing subsea wave energy buoys in hydrodynamic wave tanks to maximize power generation from ocean swells.",
    highFrequencyExpression: "In active wave engineering, your practice highlights wave tank buoy testing, subsea turbine hydrodynamic optimization, ocean power farm scaling, and wave energy engineering.",
    shadowChallenges: "Shadow patterns show up as rushing wave tank stress tests, ignoring wave swell fatigue limits, or over-working buoy assembly crews during ocean deployment trials.",
    vocationAndFinance: "Pioneers marine energy as a wave hydrodynamics engineer, subsea turbine designer, ocean wave basin director, and marine power lead. Wealth grows through wave turbine patents.",
    reflectionQuestions: [
      "Am I testing wave energy buoys against real ocean storm swell forces?",
      "How can I optimize wave turbine rotor hydrodynamics to increase electricity output?",
      "What subsea wave energy prototyping milestone am I ready to achieve today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 28?",
        answer: "June 28 is Cancer (Water sign), giving intuitive water connection and engineering focus to Arcana 10's cycle timing."
      },
      {
        question: "How does June 28 differ from May 28?",
        answer: "May 28 carries Gemini battery storage venture funds, while June 28 carries Cancer ocean wave energy buoy tank prototyping and subsea turbine hydrodynamics."
      },
      {
        question: "What is the technical edge of June 28?",
        answer: "Testing subsea wave energy buoys in hydrodynamic wave basins to capture 90% of ocean swell power."
      },
      {
        question: "Which Arcana complements June 28?",
        answer: "Arcana 21 (The World) expands June 28's wave power projects onto an international global scale."
      }
    ],
    imageBrief: "Regal symbolic graphic of a golden celestial wheel turning over a glowing offshore wave energy buoy array generating power in rolling ocean waves, color palette of ocean turquoise, electric cyan, and gold."
  },
  29: {
    snippetAnswer: "Compassionate wildlife mastery on June 29 unlocks Master Number 11 under Arcana 11 (Strength). Positioned in early Cancer season, June 29 endows you with physical stamina for protecting wandering albatross cliff nesting colonies and eradicating invasive nest predators across remote sub-Antarctic islands.",
    vignetteTitle: "The Albatross Island Sanctuary Lead: Protecting Sub-Antarctic Cliff Nesting Colonies",
    vignetteScenario: "Coordinating a remote island seabird trust on June 29, an ornithologist eradicates invasive nest predators across a 5,000-acre sub-Antarctic island. Their work saves 20,000 endangered wandering albatross chicks during summer nesting season.",
    birthArchetypeContent: "Sub-Antarctic wandering albatross island sanctuary defense and predator eradication define June 29's Master 11 path under Arcana 11. You patrol isolated island cliffs, using quiet physical composure to protect albatross chicks.",
    highFrequencyExpression: "In master marine bird wildlife alignment, your path highlights albatross cliff sanctuary defense, sub-Antarctic seabird surveys, nest predator eradication, and physical conservation stamina.",
    shadowChallenges: "Under shadow stress, you might experience physical exhaustion from long island cliff patrols, sudden frustration over longline fishing hazards, or suppressing physical fatigue.",
    vocationAndFinance: "Protects endangered species as an albatross sanctuary director, island seabird biologist, remote wildlife rehabilitation head, and island trustee. Wealth grows through conservation grants.",
    reflectionQuestions: [
      "How can I protect my physical stamina while conducting long remote island cliff patrols?",
      "Am I applying quiet somatic composure rather than force when protecting endangered seabird nesting habitats?",
      "What albatross island sanctuary initiative am I called to lead today?"
    ],
    faqItems: [
      {
        question: "Why is June 29 a Master 11 birthday in numerology?",
        answer: "Because 2+9 = 11, a Master Number associated with spiritual illumination, intense physical stamina, and quiet somatic mastery over marine wildlife."
      },
      {
        question: "What zodiac sign is June 29?",
        answer: "June 29 is Cancer (Water sign), adding intuitive ocean care and seabird connection to Arcana 11's intense strength."
      },
      {
        question: "How does June 29 differ from June 11?",
        answer: "June 11 carries Gemini snow leopard mountain tracking, while June 29 carries Cancer wandering albatross cliff nesting sanctuary defense and sub-Antarctic seabird protection."
      },
      {
        question: "What is the health key for June 29?",
        answer: "Regular physical grounding practices and systematic sleep recovery between intense remote island field expeditions."
      }
    ],
    imageBrief: "Inspiring artwork of a calm wildlife biologist standing on a windswept ocean cliff beside a magnificent wandering albatross spreading its 11-foot wings beneath a starlit halo, color palette of ocean navy, wind white, and gold."
  },
  30: {
    snippetAnswer: "Culminating June into midsummer, June 30 embodies Arcana 3 (The Empress). Closing June into midsummer, June 30 bestows abundant creative fertility, cultivating organic stone fruit orchards, and scaling artisan peach preserve brands.",
    vignetteTitle: "The Midsummer Stone Fruit Estate Master: Scaling Organic Preserve Empires",
    vignetteScenario: "Formulating an organic midsummer peach and apricot preserve line on June 30, a master jam artisan distills tree-ripened fruit in copper kettles. Their gourmet preserve brand captures international distribution across 500 premium gourmet markets.",
    birthArchetypeContent: "Midsummer heirloom stone fruit orchard cultivation and organic preserve formulation define June 30 under Arcana 3. You harvest tree-ripened peaches and apricots, launching luxury gourmet food brands sold in international boutique markets.",
    highFrequencyExpression: "In creative culinary alignment, your focus centers on organic stone fruit orchard cultivation, luxury artisan preserve formulation, gourmet brand scaling, and premium food distribution.",
    shadowChallenges: "In shadow, you may experience possessive financial control over recipe formulas, vanity regarding brand image, or over-spending on custom glass jar packaging.",
    vocationAndFinance: "Builds gourmet empires as a luxury stone fruit artisan, organic orchard estate CEO, gourmet food founder, and preserve alchemist. Wealth expands through global gourmet food sales.",
    reflectionQuestions: [
      "How can I bring more natural midsummer stone fruit flavor and gourmet elegance into my products?",
      "Am I balancing my artistic food passion with practical unit economics?",
      "What organic stone fruit preserve venture am I ready to scale today?"
    ],
    faqItems: [
      {
        question: "What zodiac sign is June 30?",
        answer: "June 30 is Cancer (Water sign), bringing emotional warmth, artistic intuition, and aesthetic elegance to The Empress's creative fertility."
      },
      {
        question: "How does June 30 differ from May 30?",
        answer: "May 30 carries Gemini damask rose water perfumery, while June 30 carries Cancer luxury midsummer organic stone fruit preserve formulation and gourmet brand scaling."
      },
      {
        question: "What is the financial engine for June 30?",
        answer: "Formulating and selling luxury organic stone fruit preserves through global gourmet food markets."
      },
      {
        question: "Which Arcana complements June 30?",
        answer: "Arcana 4 (The Emperor) provides structural supply chain execution to support Arcana 3's gourmet brand growth."
      }
    ],
    imageBrief: "Rich culinary painting of an elegant artisan holding a crystal jar of golden peach preserve in a sunlit orchard of heavy fruiting peach trees, color palette of peach orange, emerald green, and golden sunlight."
  }
};

export function getJuneProfile(day: number): BirthdayProfileData {
  const custom = JUNE_PROFILES_DATA[day];
  const primaryArcanaNum = calculateDayArcana(day);
  const primaryArcana = MAJOR_ARCANA_DATABASE[primaryArcanaNum] || MAJOR_ARCANA_DATABASE[1];
  const formattedDate = `June ${day}`;
  const slug = `june-${day}`;

  const phaseText = day <= 10 ? 'early June environmental blossom phase' : day <= 20 ? 'mid-June Summer Solstice approach transition' : 'late-June Solstice peak & Cancer water phase';
  const seasonalPhrase = `vibrant midsummer light and peak environmental vitality during the ${phaseText} of June`;
  const seasonalContext = `Vibrant midsummer light and peak environmental vitality mark the ${phaseText} of June.`;
  const dayVibrationNote = `${formattedDate} combines ${seasonalPhrase} with the individual numerical frequency of Day ${day} (governed by Arcana ${primaryArcanaNum}: ${primaryArcana.name}).`;

  const prevDay = day === 1 ? 31 : day - 1;
  const nextDay = day === 30 ? 1 : day + 1;

  const prevArcana = calculateDayArcana(prevDay);
  const nextArcana = calculateDayArcana(nextDay);

  const comparisonTable: DateComparisonRow[] = [
    {
      dateLabel: day === 1 ? 'May 31' : `June ${prevDay}`,
      arcanaNum: prevArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[prevArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: prevDay === 31 ? "May closing solar threshold" : "Preceding June date pattern",
      bestFocus: "Consolidating earlier June momentum",
      keyContrast: `Paves the way for Arcana ${primaryArcanaNum} expression on June ${day}.`
    },
    {
      dateLabel: formattedDate,
      arcanaNum: primaryArcanaNum,
      arcanaName: primaryArcana.name,
      coreTheme: custom?.vignetteTitle || `${primaryArcana.name} activation`,
      bestFocus: "Anchoring current June profile strengths",
      keyContrast: "Your unique June archetype focus.",
      isCurrentDay: true
    },
    {
      dateLabel: day === 30 ? 'July 1' : `June ${nextDay}`,
      arcanaNum: nextArcana,
      arcanaName: (MAJOR_ARCANA_DATABASE[nextArcana] || MAJOR_ARCANA_DATABASE[1]).name,
      coreTheme: "Emerging Solstice expansion",
      bestFocus: "Advancing toward upcoming date wisdom",
      keyContrast: `Shifts June frequency toward Arcana ${nextArcana} qualities.`
    }
  ];

  return {
    slug,
    month: 'June',
    day,
    formattedDate,
    primaryArcanaNum,
    primaryArcana,
    h1Title: `${formattedDate} Birthday: ${primaryArcana.name} and What It Means for You`,
    metaTitle: `${formattedDate} Birthday: ${primaryArcana.name} Guide | Souliography`,
    metaDescription: `Detailed ${formattedDate} birthday profile in Destiny Matrix. Discover Arcana ${primaryArcanaNum} (${primaryArcana.name}) influences, career vocation, money channel, and reflection prompts.`,
    snippetAnswer: custom?.snippetAnswer || `Being born on ${formattedDate} connects your life path to Arcana ${primaryArcanaNum} (${primaryArcana.name}). This birth date bestows a unique combination of June seasonal focus and ${primaryArcana.archetype.toLowerCase()} qualities, driving your personal purpose and career growth.`,
    vignetteTitle: custom?.vignetteTitle || `The ${formattedDate} Catalyst: Navigating ${primaryArcana.name} Energy`,
    vignetteScenario: custom?.vignetteScenario || `In a key moment of decision, someone born on ${formattedDate} steps forward to apply the ${primaryArcana.archetype.toLowerCase()} lessons of Arcana ${primaryArcanaNum}, turning a routine challenge into a major breakthrough.`,
    birthArchetypeContent: custom?.birthArchetypeContent || `Individuals born on ${formattedDate} embody the core qualities of Arcana ${primaryArcanaNum} (${primaryArcana.name}). You possess a natural drive to master your environment, apply structured discipline, and express your authentic talents.`,
    comparisonTable,
    highFrequencyExpression: custom?.highFrequencyExpression || primaryArcana.positiveExpression,
    shadowChallenges: custom?.shadowChallenges || primaryArcana.shadowExpression,
    vocationAndFinance: custom?.vocationAndFinance || `${primaryArcana.careerGuidance} ${primaryArcana.moneyChannel}`,
    reflectionQuestions: custom?.reflectionQuestions || [
      `How can I align with the ${phaseText} of June to support my goals?`,
      `In what ways does ${primaryArcana.name} encourage me to express ${primaryArcana.archetype.toLowerCase()} today?`,
      `What specific practice will help me anchor constructive high frequency in my daily routine?`
    ],
    faqItems: custom?.faqItems || [
      {
        question: `What zodiac sign is ${formattedDate}?`,
        answer: day <= 20 ? `${formattedDate} falls under Gemini (Air sign), bringing communicative intellect, adaptability, and social agility.` : `${formattedDate} falls under Cancer (Water sign), bringing intuitive warmth, emotional care, and protective strength.`
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
