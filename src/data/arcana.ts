export interface ArcanaEncyclopediaEntry {
  number: number;
  name: string;
  archetype: string;
  meaning: string;
  historicalContext: string;
  positiveExpression: string;
  shadowExpression: string;
  careerGuidance: string;
  loveCompatibility: string;
  moneyChannel: string;
  spiritualLesson: string;
  chakraConnection: string;
  dailyWisdom: string;
  reflectionQuestions: string[];
}

export const MAJOR_ARCANA_DATABASE: Record<number, ArcanaEncyclopediaEntry> = {
  1: {
    number: 1,
    name: "The Magician",
    archetype: "The Visionary Creator & Master Manifestor",
    meaning: "Arcana 1 represents raw initiative, creative willpower, and active leadership. In the Destiny Matrix system, individuals carrying this vibration at their core possess an innate drive to translate abstract ideas into tangible reality.",
    historicalContext: "Historically rooted in Tarot symbolism as the bridge between spiritual intention and physical manifestation, Arcana 1 within Natalia Ladini's 22-Arcana framework marks the starting frequency of conscious creation and personal authority.",
    positiveExpression: "Resourceful initiative, independent drive, clear boundary setting, decisive action, and pioneering courage.",
    shadowExpression: "Ego-driven impatience, manipulation of others, difficulty delegating, or reluctance to finish what was started.",
    careerGuidance: "Autonomy and raw initiative define the Magician’s ideal workplace. Driving proprietary tech ventures, launching independent startups, or helming solo strategic consultancies allows this frequency to shine without corporate friction.",
    loveCompatibility: "Dynamic, high-velocity creators require a calm, steady anchor. Partnerships thrive when a grounded companion offers emotional stability, keeping the Magician’s fiery inspiration centered.",
    moneyChannel: "Monetization follows original intellectual property, personal brand authority, and lightning-fast execution speed. Revenue peaks when transforming abstract concepts directly into market-ready products.",
    spiritualLesson: "Discovering that true personal power emerges from aligning willpower with integrity rather than forcing outcomes through ego.",
    chakraConnection: "Crown & Third Eye (Vision & Higher Intention)",
    dailyWisdom: "Focus your intent today — you already possess the core skills required to shape your current circumstances.",
    reflectionQuestions: [
      "Where in my life am I waiting for permission to take initial action?",
      "How can I channel my creative ideas into a structured daily project?",
      "Am I using my influence to empower others or to control outcomes?"
    ]
  },
  2: {
    number: 2,
    name: "The High Priestess",
    archetype: "The Intuitive Mystic & Sacred Diplomat",
    meaning: "Arcana 2 carries the vibration of subtle perception, subconscious wisdom, and diplomatic mediation. It governs the quiet space between cause and effect.",
    historicalContext: "Associated in esoteric tradition with the veil of mystery and hidden knowledge, Arcana 2 in the Destiny Matrix system represents passive reception, secret insight, and deep emotional awareness.",
    positiveExpression: "Intuitive clarity, gentle peacemaking, active listening, emotional discernment, and respectful boundary management.",
    shadowExpression: "Secretiveness, passive-aggressive communication, emotional isolation, or ignoring obvious logical facts in favor of illusion.",
    careerGuidance: "Quiet environments requiring deep psychological insight, archival research, or subtle conflict resolution provide the perfect stage for Arcana 2 to excel.",
    loveCompatibility: "Subtle emotional resonance matters more than loud displays of affection. Deep soul connections develop alongside reflective partners who honor sacred privacy and intuitive quiet.",
    moneyChannel: "Wealth flows in through discreet financial advisories, specialized research grants, passive royalties, and confidential consulting engagements.",
    spiritualLesson: "Learning to trust inner quiet signals over loud external opinions while maintaining healthy personal boundaries.",
    chakraConnection: "Third Eye & Heart (Subtle Sight & Emotional Discernment)",
    dailyWisdom: "Silence holds the answer today. Pause and listen to your internal signal before making key choices.",
    reflectionQuestions: [
      "What subtle gut feeling have I been ignoring lately?",
      "How can I practice active listening without absorbing other people's stress?",
      "Where do I need to establish clearer privacy in my daily life?"
    ]
  },
  3: {
    number: 3,
    name: "The Empress",
    archetype: "The Mother of Abundance & Creative Beauty",
    meaning: "Arcana 3 represents fertility, material elegance, artistic cultivation, and generous caretaking. It is the frequency of natural expansion.",
    historicalContext: "Drawing from archetypal mother symbols and nature's fertility, Arcana 3 in the 22-Arcana framework highlights practical growth, sensory beauty, and material prosperity.",
    positiveExpression: "Abundant mindset, artistic flair, nurturing care, aesthetic refinement, and generous hospitality.",
    shadowExpression: "Extravagance, over-protectiveness, vanity, material carelessness, or difficulty setting limits on spending.",
    careerGuidance: "Sensory design, high-end hospitality, luxury fashion houses, and botanical conservation projects blossom under the Empress’s nurturing touch.",
    loveCompatibility: "Generous affection demands a reliable foundation. Relationships expand beautifully when paired with a structured, protective partner who honors natural growth cycles.",
    moneyChannel: "Financial expansion accelerates by elevating visual aesthetics, crafting high-comfort consumer goods, or curating beautiful spatial environments.",
    spiritualLesson: "Receiving abundance with gratitude and recognizing that natural growth requires patient care.",
    chakraConnection: "Heart & Sacral (Creation & Pure Delight)",
    dailyWisdom: "Nurture your current projects today — beauty and growth naturally follow focused, loving attention.",
    reflectionQuestions: [
      "How can I bring more harmony and aesthetic comfort into my immediate living space?",
      "Am I allowing myself to receive support as generously as I offer it?",
      "What creative seeds am I ready to nourish into fruition?"
    ]
  },
  4: {
    number: 4,
    name: "The Emperor",
    archetype: "The Master Architect & Sovereign Ruler",
    meaning: "Arcana 4 embodies structural discipline, stability, executive organization, and protective leadership.",
    historicalContext: "Reflecting traditional Tarot symbols of sovereignty and order, Arcana 4 in Natalia Ladini's matrix framework represents foundational security and systemic governance.",
    positiveExpression: "Systematic organization, dependable protection, strategic vision, unwavering stability, and ethical authority.",
    shadowExpression: "Rigidity, stubbornness, micromanagement, emotional distance, or controlling behavior under stress.",
    careerGuidance: "Commanding high-stakes corporate structures, overseeing civil infrastructure, enforcing legal compliance, or steering real estate portfolios satisfies Arcana 4's appetite for order and systemic mastery.",
    loveCompatibility: "Behind a formidable exterior lies a desire for heartfelt warmth. Relationships flourish alongside an intuitive, emotionally receptive partner who creates a safe haven for vulnerability.",
    moneyChannel: "Building enduring equity demands disciplined asset accumulation. Wealth compounds through commercial property acquisition, structured corporate dividend streams, and rigorous capital auditing.",
    spiritualLesson: "True authority rests on protective service and building lasting safety for others rather than rigid control.",
    chakraConnection: "Root & Solar Plexus (Grounding & Ethical Authority)",
    dailyWisdom: "Build strong foundations today — lasting achievements require consistent order and discipline.",
    reflectionQuestions: [
      "Where in my work or life do I need to establish clearer structural order?",
      "Am I leading with calm authority or reacting out of a need for control?",
      "How can I create lasting security for the people who rely on me?"
    ]
  },
  5: {
    number: 5,
    name: "The Hierophant",
    archetype: "The Sacred Mentor & Master Teacher",
    meaning: "Arcana 5 carries the frequency of higher wisdom, moral integrity, structured education, and mentorship.",
    historicalContext: "Associated with spiritual traditions, moral philosophy, and institutional knowledge, Arcana 5 in the Destiny Matrix system governs mentorship, lifelong learning, and principled guidance.",
    positiveExpression: "Wise mentorship, ethical leadership, dedication to truth, inspiring teaching, and structured learning.",
    shadowExpression: "Dogmatism, narrow-mindedness, insistence on rigid conformity, or spiritual pride.",
    careerGuidance: "Academic dean positions, ethical compliance boards, published literature, and structured spiritual mentorship offer meaningful outlets for Arcana 5’s pedagogical gifts.",
    loveCompatibility: "Shared philosophical values form the bedrock of lasting connection. Romance thrives with intellectually curious partners who cherish moral integrity and continuous self-improvement.",
    moneyChannel: "Income scales through accredited certification courses, book publishing royalties, institutional keynotes, and high-level advisory retains.",
    spiritualLesson: "Discovering the inner teacher within yourself while remaining receptive to new evidence and perspectives.",
    chakraConnection: "Throat & Crown (Sacred Voice & Divine Truth)",
    dailyWisdom: "Share your knowledge generously today, but keep your mind open to fresh insights.",
    reflectionQuestions: [
      "What important lesson have I learned that could benefit someone else right now?",
      "Am I holding onto a rigid belief that no longer serves my growth?",
      "How can I integrate moral integrity into my daily practical decisions?"
    ]
  },
  6: {
    number: 6,
    name: "The Lovers",
    archetype: "The Harmonic Match & Master of Choice",
    meaning: "Arcana 6 is the energy of heart-centered choice, emotional chemistry, relational harmony, and unconditional aesthetic acceptance.",
    historicalContext: "Evolving from the dualities of Eden, Arcana 6 in Ladini numerology symbolizes making decisions from love rather than fear.",
    positiveExpression: "Magnetic charm, heart alignment, aesthetic elegance, conflict resolution, passionate commitment.",
    shadowExpression: "Codependency, indecisiveness, superficial judgment, fear of rejection, seeking external validation.",
    careerGuidance: "Brand diplomacy, high-end matchmaking, interior curation, and public relations thrive under Arcana 6's natural charm.",
    loveCompatibility: "Authentic vulnerability is non-negotiable. Romantic bonds deepen when mutual admiration and open heart communication remain paramount.",
    moneyChannel: "Financial success flourishes by building aesthetic brand experiences, high-converting partnership deals, and customer loyalty programs.",
    spiritualLesson: "Choosing self-love first ensures that all external relationships reflect genuine harmony.",
    chakraConnection: "Heart & Throat (Relational Truth & Emotional Harmony)",
    dailyWisdom: "Make choices aligned with your heart's highest truth today.",
    reflectionQuestions: [
      "Am I choosing out of genuine love or fear of being alone?",
      "Where can I bring greater harmony to my daily interactions?",
      "How can I practice deeper self-acceptance right now?"
    ]
  },
  7: {
    number: 7,
    name: "The Chariot",
    archetype: "The Triumphant Vector & Goal Achiever",
    meaning: "Arcana 7 embodies focused drive, victorious momentum, strategic movement, and overcoming obstacles through willpower.",
    historicalContext: "Representing conquered dualities and victorious transit, Arcana 7 in the matrix drives rapid progress and team direction.",
    positiveExpression: "Unstoppable determination, clear goal setting, team motivation, athletic vigor, strategic focus.",
    shadowExpression: "Aggressive impatience, recklessness, forcing outcomes, burn-out, conflict with team members.",
    careerGuidance: "Logistics orchestration, competitive athletics, venture acceleration, and expedition management keep Arcana 7 energized.",
    loveCompatibility: "Shared life ambitions drive romantic synergy. Partnerships succeed with adventurous companions who embrace active travel and ambitious milestones.",
    moneyChannel: "Rapid returns generate through milestone achievements, logistics optimization, fleet operations, and high-speed project delivery.",
    spiritualLesson: "True victory lies in mastering internal impulses while guiding external progress with calm focus.",
    chakraConnection: "Solar Plexus & Navel (Drive & Directed Power)",
    dailyWisdom: "Set a clear goal today and take decisive action to reach it.",
    reflectionQuestions: [
      "What core objective demands my undivided focus right now?",
      "Am I steering my team with calm confidence or aggressive speed?",
      "How can I maintain physical energy during high-demand phases?"
    ]
  },
  8: {
    number: 8,
    name: "Justice",
    archetype: "The Cosmic Regulator & Karmic Arbiter",
    meaning: "Arcana 8 represents cause-and-effect understanding, legal balance, systemic fairness, and structural accountability.",
    historicalContext: "Rooted in the scales of Ma'at and divine law, Arcana 8 highlights karma, contractual clarity, and objective truth.",
    positiveExpression: "Impartial objectivity, contractual integrity, logical clarity, ethical rigor, systemic balance.",
    shadowExpression: "Judgementalism, rigid legalism, unwillingness to forgive, playing the victim, blame shifting.",
    careerGuidance: "Judicial proceedings, corporate auditing, contract negotiation, and regulatory compliance demand Arcana 8's objective precision.",
    loveCompatibility: "Mutual respect and transparent honesty form the core. Romance thrives alongside partners who honor clear commitments and emotional fairness.",
    moneyChannel: "Financial stability is guaranteed through transparent contracts, legal protection, tax compliance, and fair trade practices.",
    spiritualLesson: "Recognizing that every thought and action produces an exact equivalent return in the physical world.",
    chakraConnection: "Third Eye & Solar Plexus (Karmic Sight & Integrity)",
    dailyWisdom: "Act with total honesty today — the universe balances all accounts.",
    reflectionQuestions: [
      "Where in my life am I being called to practice absolute fairness?",
      "Am I taking full responsibility for the outcomes I experience?",
      "How can I resolve outstanding contractual or personal imbalances?"
    ]
  },
  9: {
    number: 9,
    name: "The Hermit",
    archetype: "The Solitary Sage & Lamp of Truth",
    meaning: "Arcana 9 is the vibration of deep introspection, scholarly mastery, spiritual wisdom, and quiet self-sufficiency.",
    historicalContext: "Symbolizing Diogenes searching for an honest soul, Arcana 9 represents inner illumination gained through solitude.",
    positiveExpression: "Deep research, patient wisdom, self-sufficiency, contemplative clarity, spiritual guidance.",
    shadowExpression: "Social isolation, cynicism, intellectual arrogance, fear of intimacy, emotional coldness.",
    careerGuidance: "Independent scientific research, philosophical writing, specialized archive studies, and solo analytical engineering suit Arcana 9.",
    loveCompatibility: "Patience and respect for personal space are essential. Intimacy deepens with quiet partners who cherish intellectual depth over constant social activity.",
    moneyChannel: "Monetization arises from rare expertise, patented methodologies, technical monographs, and high-value niche consulting.",
    spiritualLesson: "The brightest light is discovered within the quiet sanctuary of your own soul.",
    chakraConnection: "Crown & Third Eye (Inner Illumination & Wisdom)",
    dailyWisdom: "Carve out time for quiet reflection today — your inner lamp holds the truth.",
    reflectionQuestions: [
      "What deep wisdom is waiting for me in quiet solitude?",
      "Am I isolating myself out of fear or seeking true inner clarity?",
      "How can I share my accumulated knowledge to illuminate others?"
    ]
  },
  10: {
    number: 10,
    name: "Wheel of Fortune",
    archetype: "The Fortunate Navigator & Master of Cycles",
    meaning: "Arcana 10 represents destiny alignment, synchronicity, effortless flow, and adapting to life's cyclical nature.",
    historicalContext: "Reflecting Rota Fortunae in classical philosophy, Arcana 10 governs good luck, unexpected opportunities, and karmic flow.",
    positiveExpression: "Synchronistic luck, adaptability, trusting life flow, optimistic timing, effortless momentum.",
    shadowExpression: "Fatalistic passivity, gambling risks, resisting natural cycles, anxiety over temporary downturns.",
    careerGuidance: "Stock trading, trend forecasting, event promotion, and dynamic market arbitrage align with Arcana 10's timing instinct.",
    loveCompatibility: "Spontaneous adventures keep the spark alive. Relationships flourish with easygoing partners who ride life's waves with joyful trust.",
    moneyChannel: "Prosperity arrives through timely market entries, lucky investments, unexpected windfalls, and riding emerging trends.",
    spiritualLesson: "Trusting that the wheel constantly turns toward your soul's highest evolutionary good.",
    chakraConnection: "Navel & Crown (Divine Timing & Synchronicity)",
    dailyWisdom: "Trust the current rhythm of your life today — fortune favors flexible action.",
    reflectionQuestions: [
      "Am I swimming against life's natural current or flowing with opportunity?",
      "What unexpected opening is presenting itself to me right now?",
      "How can I practice gratitude during both peaks and valleys?"
    ]
  },
  11: {
    number: 11,
    name: "Strength",
    archetype: "The Vital Force & Gentle Conqueror",
    meaning: "Arcana 11 symbolizes biological stamina, instinctual self-mastery, passionate courage, and protective warmth.",
    historicalContext: "Depicting the maiden gently taming the lion, Arcana 11 highlights spiritualized willpower subduing raw animal impulses.",
    positiveExpression: "Gentle self-mastery, physical endurance, magnetic charisma, protective courage, creative passion.",
    shadowExpression: "Aggressive outbursts, workaholism, controlling dominance, impotence, physical exhaustion.",
    careerGuidance: "Athletic coaching, emergency surgery, executive rescue operations, and high-intensity physical leadership fit Arcana 11.",
    loveCompatibility: "Intense passion requires emotional gentleness. Bonds thrive when partners practice mutual respect rather than trying to dominate.",
    moneyChannel: "Wealth generates through high-output production, fitness brand empires, emergency services, and athletic performance.",
    spiritualLesson: "Real strength is not brute coercion, but gentle love mastering primitive fear.",
    chakraConnection: "Solar Plexus & Heart (Passionate Drive & Compassionate Will)",
    dailyWisdom: "Lead with soft persuasion today — gentleness overcomes great pressure.",
    reflectionQuestions: [
      "Am I trying to force outcomes through anger or gentle persistence?",
      "How can I channel my physical energy into constructive outlets?",
      "Where do I need to schedule mandatory rest to protect my vitality?"
    ]
  },
  12: {
    number: 12,
    name: "The Hanged Man",
    archetype: "The Visionary Servant & Master of Perspective",
    meaning: "Arcana 12 represents unconventional insight, selfless service, spiritual surrender, and viewing reality from fresh angles.",
    historicalContext: "Showing Odin suspended from Yggdrasil, Arcana 12 symbolizes voluntary pause gaining divine enlightenment.",
    positiveExpression: "Unconventional creativity, deep empathy, non-attachment, psychological insight, healthy service.",
    shadowExpression: "Martyr complex, codependency, feeling trapped, boundary erosion, passive manipulation.",
    careerGuidance: "Psychological counseling, conceptual art, fine photography, and non-profit leadership highlight Arcana 12's unique vision.",
    loveCompatibility: "Unconditional empathy demands strong personal boundaries. Romance flourishes when service is given from abundance rather than sacrifice.",
    moneyChannel: "Income derives from art therapy, specialized psychology, photographic licensing, and innovative creative consulting.",
    spiritualLesson: "Surrendering ego control opens the doorway to extraordinary spiritual revelation.",
    chakraConnection: "Crown & Third Eye (New Vision & Higher Perception)",
    dailyWisdom: "Shift your perspective today — a temporary pause holds hidden wisdom.",
    reflectionQuestions: [
      "How would this situation look if I viewed it from an opposite angle?",
      "Am I sacrificing my own wellbeing to rescue someone inappropriately?",
      "What do I need to surrender to gain ultimate clarity?"
    ]
  },
  13: {
    number: 13,
    name: "Transformation (Death)",
    archetype: "The Alchemist of Rebirth & Metamorphosis",
    meaning: "Arcana 13 is the frequency of radical renewal, closing obsolete chapters, profound metamorphosis, and rebirth.",
    historicalContext: "Representing the Phoenix rising from ashes, Arcana 13 cuts away dead structures to allow vibrant new growth.",
    positiveExpression: "Transformative courage, decisive clutter-clearing, restructuring capability, emotional resilience.",
    shadowExpression: "Fear of change, stubborn clinging to dead situations, grief paralysis, destructive chaos.",
    careerGuidance: "Corporate restructuring turnarounds, crisis intervention, surgical medicine, and bio-recycling technologies rely on Arcana 13.",
    loveCompatibility: "Continuous personal evolution is mandatory. Relationships endure when both partners willingly allow old habits to die for fresh growth.",
    moneyChannel: "Prosperity is created by acquiring underperforming assets, purging inefficiency, and building modern, high-value systems.",
    spiritualLesson: "Endings are simply fertile soil for magnificent new beginnings.",
    chakraConnection: "Root & Sacral (Primal Renewal & Release)",
    dailyWisdom: "Release what no longer serves your growth today — clear space for rebirth.",
    reflectionQuestions: [
      "What obsolete habit am I holding onto out of fear of change?",
      "How can I embrace this transition as a fresh rebirth?",
      "What new space opens up once I let go of past burdens?"
    ]
  },
  14: {
    number: 14,
    name: "Temperance",
    archetype: "The Sacred Alchemist & Master Weaver",
    meaning: "Arcana 14 brings equilibrium, artful synthesis, moderation, emotional healing, and divine timing.",
    historicalContext: "Showing an angel pouring water between golden chalices, Arcana 14 symbolizes harmonizing opposing polarities.",
    positiveExpression: "Emotional equilibrium, artistic grace, patient mediation, moderation, refined aesthetic taste.",
    shadowExpression: "Imbalance, addictive tendencies, procrastination, compromise of principles, extreme drama.",
    careerGuidance: "Fine art alchemy, pharmaceutical chemistry, international diplomatic mediation, and culinary art match Arcana 14.",
    loveCompatibility: "Peaceful emotional safety builds long-term commitment. Relationships bloom alongside calm partners who value quiet harmony.",
    moneyChannel: "Wealth compounds through steady investments, fine art curation, holistic wellness products, and patient management.",
    spiritualLesson: "Divine magic happens when opposing forces are blended into perfect harmony.",
    chakraConnection: "Heart & Throat (Alchemical Synthesis & Peace)",
    dailyWisdom: "Seek the golden middle path today — balance brings enduring strength.",
    reflectionQuestions: [
      "Where in my life am I swinging between extreme highs and lows?",
      "How can I bring more creative synthesis into my work?",
      "Am I allowing time for peaceful emotional recovery?"
    ]
  },
  15: {
    number: 15,
    name: "The Devil",
    archetype: "The Illuminator of Shadows & Material Magnet",
    meaning: "Arcana 15 represents material magnetism, charismatic sway, shadow integration, and mastering physical power with integrity.",
    historicalContext: "Depicting figures with loose neck chains, Arcana 15 highlights that bondage to desire is an illusion cleared by conscious choice.",
    positiveExpression: "Magnetic charisma, ethical wealth attraction, psychological insight, shadow mastery, unshakeable freedom.",
    shadowExpression: "Addictive behavior, financial manipulation, toxic jealousy, greed, codependent control.",
    careerGuidance: "Luxury real estate brokerage, venture capital firms, show business production, and executive negotiations draw Arcana 15.",
    loveCompatibility: "Intense physical attraction needs ethical transparency. Romance thrives when mutual passion is paired with complete emotional freedom.",
    moneyChannel: "Massive prosperity flows through luxury brand creation, high-yield investments, commercial real estate, and entertainment empires.",
    spiritualLesson: "True mastery is enjoying material abundance without being owned by it.",
    chakraConnection: "Root & Solar Plexus (Material Attraction & Freedom)",
    dailyWisdom: "Examine your desires with complete honesty today — true freedom begins within.",
    reflectionQuestions: [
      "Am I controlling my material ambitions or letting them control me?",
      "Where can I practice greater transparency in business and love?",
      "How can I channel my personal charm to empower others ethically?"
    ]
  },
  16: {
    number: 16,
    name: "The Tower",
    archetype: "The Awakener & Architect of Truth",
    meaning: "Arcana 16 represents sudden awakening, shattering false illusions, structural breakthrough, and spiritual liberation.",
    historicalContext: "Showing lightning striking a stone tower, Arcana 16 symbolizes divine truth dismantling pride and false foundations.",
    positiveExpression: "Radical breakthrough, structural honesty, rapid awakening, fearlessness, building on rock-solid truth.",
    shadowExpression: "Sudden destructive collapses, stubborn denial of reality, trauma paralysis, chaotic disruption.",
    careerGuidance: "Emergency crisis response, structural demolition, cybersecurity auditing, and radical paradigm-shifting consulting suit Arcana 16.",
    loveCompatibility: "Absolute truth clears false illusions. Relationships become unbreakable when built on total honesty rather than convenient lies.",
    moneyChannel: "Rebounding wealth generates by rebuilding after market shifts, solving structural crises, and pioneering revolutionary fixes.",
    spiritualLesson: "When false towers crumble, the indestructible foundation of your true soul remains.",
    chakraConnection: "Crown & Root (Divesting Illusion & Grounded Truth)",
    dailyWisdom: "Embrace sudden shifts as necessary awakenings today — truth sets you free.",
    reflectionQuestions: [
      "What false assumption in my life is ready to be dismantled?",
      "Am I building my plans on genuine truth or temporary illusion?",
      "How can I embrace sudden changes with courage and resilience?"
    ]
  },
  17: {
    number: 17,
    name: "The Star",
    archetype: "The Beacon of Hope & Inspired Talent",
    meaning: "Arcana 17 carries the vibration of divine inspiration, talent recognition, optimism, fame, and spiritual renewal.",
    historicalContext: "Depicting the maiden pouring celestial waters under seven stars, Arcana 17 represents hope, inspiration, and cosmic guidance.",
    positiveExpression: "Radiant optimism, artistic talent, inspiring presence, cosmic vision, effortless grace.",
    shadowExpression: "Unrealistic fantasy, creative blockages, feeling invisible, cynicism, unfulfilled potential.",
    careerGuidance: "Performing arts, astrology, public broadcasting, international talent agencies, and trendsetting design suit Arcana 17.",
    loveCompatibility: "Shared dreams and spiritual optimism ignite connection. Romance flourishes with inspiring partners who cheer your highest aspirations.",
    moneyChannel: "Abundance arrives through personal talent visibility, artistic royalties, media features, and inspiring public performance.",
    spiritualLesson: "Your unique authentic talent is a sacred gift meant to light the way for others.",
    chakraConnection: "Third Eye & Heart (Inspiration & Celestial Light)",
    dailyWisdom: "Let your inner light shine brightly today — your optimism inspires hope.",
    reflectionQuestions: [
      "What unique talent have I been hiding from the world?",
      "Am I keeping my vision focused on hope or giving in to doubt?",
      "How can I inspire others through my creative work today?"
    ]
  },
  18: {
    number: 18,
    name: "The Moon",
    archetype: "The Master of Intuition & Subconscious Realms",
    meaning: "Arcana 18 governs deep psychological intuition, manifestation visualization, subconscious mastery, and creative imagery.",
    historicalContext: "Showing the path between towers under the moon, Arcana 18 symbolizes navigating subconscious waters to unlock hidden gifts.",
    positiveExpression: "Vivid creative imagination, deep psychological intuition, manifestation power, empathetic sensitivity.",
    shadowExpression: "Paranoid illusions, fear of the unknown, emotional confusion, deceptive self-delusion.",
    careerGuidance: "Clinical psychology, film directing, mystery writing, dream analysis, and subconscious hypnotherapy suit Arcana 18.",
    loveCompatibility: "Deep emotional empathy creates sacred bonds. Partnerships require clear communication to dispel projection and illusion.",
    moneyChannel: "Prosperity manifests through creative media production, psychological software, luxury scents, and imaginative storytelling.",
    spiritualLesson: "Facing your internal shadow fears transforms illusions into extraordinary intuitive power.",
    chakraConnection: "Third Eye & Sacral (Subconscious Sight & Creative Flow)",
    dailyWisdom: "Trust your intuitive dreams today — look beneath surface appearances.",
    reflectionQuestions: [
      "What subconscious fear is projecting into my current reality?",
      "How can I channel my vivid imagination into creative projects?",
      "Am I seeing this situation clearly or through the lens of past memory?"
    ]
  },
  19: {
    number: 19,
    name: "The Sun",
    archetype: "The Radiant Leader & Source of Joy",
    meaning: "Arcana 19 represents radiant joy, material prosperity, public success, magnetic leadership, and generous warmth.",
    historicalContext: "Depicting a child riding a white horse under a smiling sun, Arcana 19 symbolizes pure innocence, success, and vital radiance.",
    positiveExpression: "Radiant enthusiasm, material success, generous leadership, magnetic joy, unshakeable confidence.",
    shadowExpression: "Arrogant egocentrism, burn-out from over-exposure, superficial pride, demanding applause.",
    careerGuidance: "Public keynote speaking, major brand ambassadorship, solar energy ventures, and children's education lead Arcana 19.",
    loveCompatibility: "Warm, sunny affection fills the relationship. Romance blooms with cheerful, generous partners who share joyful celebrations.",
    moneyChannel: "High financial abundance generates through public recognition, major commercial successes, solar tech, and brand empires.",
    spiritualLesson: "True joy is an infinite resource that brightens everyone it touches.",
    chakraConnection: "Solar Plexus & Crown (Radiant Vitality & Divine Joy)",
    dailyWisdom: "Share your warmth and enthusiasm generously today — success is yours.",
    reflectionQuestions: [
      "Where can I bring more genuine joy and playfulness into my day?",
      "Am I allowing my light to shine fully without self-doubt?",
      "How can I use my success to illuminate and empower others?"
    ]
  },
  20: {
    number: 20,
    name: "Judgement",
    archetype: "The Ancestral Awakener & Karmic Healer",
    meaning: "Arcana 20 represents lineage healing, spiritual awakening, high responsibility, systemic transformation, and rebirth.",
    historicalContext: "Showing the angel blowing the trumpet for resurrection, Arcana 20 symbolizes answering a higher calling and healing ancestral patterns.",
    positiveExpression: "Ancestral wisdom, clear life calling, systemic healing, responsible leadership, spiritual rebirth.",
    shadowExpression: "Harsh family judgment, carrying ancestral trauma, fear of stepping into your calling, holding grudges.",
    careerGuidance: "Family business turnarounds, legal systemic reform, genealogy research, and historical documentary film suit Arcana 20.",
    loveCompatibility: "Deep soul connection across generations. Relationships thrive when both partners honor family roots while creating fresh joint values.",
    moneyChannel: "Wealth flows through family enterprise inheritance, historic real estate restoration, and solving systemic community needs.",
    spiritualLesson: "Answering your soul's true calling liberates your entire lineage from past karmic debt.",
    chakraConnection: "Crown & Throat (Sacred Calling & Lineage Voice)",
    dailyWisdom: "Heed your higher calling today — past lessons clear the path forward.",
    reflectionQuestions: [
      "What family pattern am I being called to heal and release?",
      "Am I ready to step fully into my higher life purpose?",
      "How can I honor my roots while building my independent legacy?"
    ]
  },
  21: {
    number: 21,
    name: "The World",
    archetype: "The Global Ambassador & Universal Master",
    meaning: "Arcana 21 symbolizes global completion, international expansion, digital connectivity, holistic synthesis, and absolute freedom.",
    historicalContext: "Depicting the dancer in the laurel wreath surrounded by four elemental guardians, Arcana 21 represents total mastery and cosmic unity.",
    positiveExpression: "Global vision, international success, holistic integration, digital connection, peaceful completion.",
    shadowExpression: "Fear of expanding beyond local borders, feeling trapped in small thinking, unfinished projects.",
    careerGuidance: "International diplomacy, global eCommerce, multi-lingual broadcasting, and international environmental policy suit Arcana 21.",
    loveCompatibility: "Love knows no geographical boundaries. Romance flourishes with open-minded, worldly partners who enjoy cross-cultural travel.",
    moneyChannel: "Massive wealth scales through international trade, global digital platforms, cross-border investments, and worldwide networks.",
    spiritualLesson: "Recognizing that you are a citizen of the universe, connected in unity with all living beings.",
    chakraConnection: "Crown & All Chakras (Universal Unity & Complete Freedom)",
    dailyWisdom: "Expand your horizon today — the entire world is open to your vision.",
    reflectionQuestions: [
      "Where am I restricting my vision to local limits instead of thinking globally?",
      "What major project is ready for graceful completion?",
      "How can I connect with diverse perspectives across the globe?"
    ]
  },
  22: {
    number: 22,
    name: "The Fool",
    archetype: "The Divine Innocent & Freedom Pilgrim",
    meaning: "Arcana 22 (or Arcana 0) represents absolute freedom, spontaneous trust, leap of faith, fresh beginnings, and pure divine potential.",
    historicalContext: "Depicting the youth walking joyously toward a cliff with a white dog, Arcana 22 symbolizes infinite potential beginning the sacred journey.",
    positiveExpression: "Spontaneous trust, joyful freedom, unburdened fresh starts, open-minded wonder, fearless courage.",
    shadowExpression: "Foolish recklessness, avoiding responsibility, chaotic instability, fear of commitment.",
    careerGuidance: "Pioneering experimental innovation, travel blogging, freelance creative exploration, and disruptive startup labs fit Arcana 22.",
    loveCompatibility: "Lighthearted joy and mutual freedom keep romance vibrant. Bonds deepen with adventurous companions who enjoy spontaneous leaps.",
    moneyChannel: "Prosperity arrives through uninhibited innovative gambles, creative risk-taking, and discovering untapped frontier markets.",
    spiritualLesson: "Trusting the universe completely as you step into the unknown with an open, joyful heart.",
    chakraConnection: "Crown & Heart (Divine Trust & Pure Wonder)",
    dailyWisdom: "Take a leap of trust today — fresh beginnings bring boundless magic.",
    reflectionQuestions: [
      "Where in my life am I holding back from taking a necessary leap of trust?",
      "Am I overburdened by unnecessary mental baggage?",
      "How can I bring more spontaneous wonder into my daily routine?"
    ]
  }
};

export function getLocalizedArcanaEntry(number: number, locale: string): ArcanaEncyclopediaEntry {
  const masterEntry = MAJOR_ARCANA_DATABASE[number] || MAJOR_ARCANA_DATABASE[1];
  return masterEntry;
}
