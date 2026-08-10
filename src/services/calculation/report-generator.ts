import { calculateDetailedDestinyMatrix } from './destiny-matrix';

export interface SectionReading {
  headline: string;
  body: string;
  relevantNumbersStr: string;
  strapline: string;
}

export interface FullSoulMatrixReport {
  name: string;
  dob: string;
  formattedDob: string;
  generatedDate: string;
  titleName: string;
  sections: Record<string, SectionReading>;
}

// Arcana Meaning Knowledge Base (1-22) for dynamic personalized synthesis
const ARCANA_MEANINGS: Record<number, { title: string; core: string; gift: string; challenge: string }> = {
  1: { title: "Magician & Pioneer", core: "creation, manifestation, and original thought", gift: "turning ideas into immediate reality", challenge: "avoiding impatience or controlling tendencies" },
  2: { title: "High Priestess & Intuitive", core: "receptive wisdom, intuition, and unseen truths", gift: "perceiving underlying emotional currents", challenge: "overcoming passive isolation or secretiveness" },
  3: { title: "Empress & Nurturer", core: "abundance, creativity, and organic growth", gift: "bringing projects and relationships to full bloom", challenge: "balancing self-care with care for others" },
  4: { title: "Emperor & System Builder", core: "structure, discipline, and executive authority", gift: "building lasting systems and establishing stability", challenge: "guarding against rigidity or stubborn control" },
  5: { title: "Hierophant & Teacher", core: "tradition, spiritual guidance, and higher knowledge", gift: "sharing wisdom and establishing ethical foundations", challenge: "releasing dogma or strict perfectionism" },
  6: { title: "Lovers & Harmonizer", core: "choice, relationships, and emotional harmony", gift: "uniting contrasting forces with compassion", challenge: "overcoming indecision or seeking external validation" },
  7: { title: "Charioteer & Goal Attainer", core: "willpower, victory through effort, and focused drive", gift: "overcoming obstacles with swift determination", challenge: "managing burnout or aggressive momentum" },
  8: { title: "Justice & Balance Keeper", core: "karmic law, cause-and-effect, and moral truth", gift: "seeing raw facts and restoring fair equilibrium", challenge: "avoiding harsh self-criticism or judgment" },
  9: { title: "Hermit & Truth Seeker", core: "introspection, inner mastery, and deep analysis", gift: "finding clarity in solitude and guiding others", challenge: "preventing excessive detachment or mistrust" },
  10: { title: "Wheel of Fortune & Catalyst", core: "cycles, unexpected shifts, and divine luck", gift: "adapting swiftly to life's changing rhythms", challenge: "resisting temporary loss of control" },
  11: { title: "Strength & Resilient Leader", core: "inner fortitude, passion, and gentle power", gift: "mastering intense emotions with calm composure", challenge: "avoiding suppression of natural feelings" },
  12: { title: "Hanged Man & Perspective Shifter", core: "unconventional vision, patience, and altruism", gift: "seeing solutions from entirely novel angles", challenge: "guarding against self-sacrifice or delay" },
  13: { title: "Rebirth & Transformative Force", core: "profound metamorphosis, letting go, and renewal", gift: "initiating needed endings for powerful beginnings", challenge: "clinging to obsolete patterns out of fear" },
  14: { title: "Temperance & Master Alchemist", core: "moderation, synthesis, and inner harmony", gift: "blending diverse ideas into seamless balance", challenge: "avoiding extremes or stagnation" },
  15: { title: "Devil & Shadow Master", core: "vital energy, material mastery, and unmasking illusion", gift: "harnessing passion and seeing true motives", challenge: "breaking free from unhealthy attachments" },
  16: { title: "Tower & Breakthrough Catalyst", core: "awakening, radical dismantling, and truth", gift: "breaking through false structures to build anew", challenge: "navigating sudden disruption with grace" },
  17: { title: "Star & Inspiring Visionary", core: "hope, talent illumination, and higher purpose", gift: "radiating authentic inspiration and creative light", challenge: "staying grounded in practical reality" },
  18: { title: "Moon & Subconscious Navigator", core: "imagination, depth, and unlocking hidden potential", gift: "navigating psychological depth and artistic vision", challenge: "dispelling anxiety or illusion" },
  19: { title: "Sun & Radiant Joy", core: "vitality, leadership, and expansive success", gift: "illuminating space and uplifting surrounding community", challenge: "distributing warmth without burning out" },
  20: { title: "Judgment & Ancestral Awakening", core: "soul calling, rebirth, and ancestral healing", gift: "heeding your higher vocation and forgiving the past", challenge: "releasing self-doubt or legacy burdens" },
  21: { title: "World & Global Synthesizer", core: "completion, broad horizons, and universal harmony", gift: "unifying global perspectives into holistic success", challenge: "avoiding fear of expanding past comfort" },
  22: { title: "Fool & Infinite Explorer", core: "freedom, trust in the journey, and pure potential", gift: "embracing fresh starts with unshakeable faith", challenge: "ensuring practical foresight alongside faith" }
};

function getArcana(num: number) {
  const normalized = num > 22 ? ((num - 1) % 22) + 1 : (num <= 0 ? 1 : num);
  return ARCANA_MEANINGS[normalized] || ARCANA_MEANINGS[6];
}

export async function generateOrGetDeepReport(dob: string, name: string): Promise<FullSoulMatrixReport> {
  const cleanName = (name || '').trim();
  
  // Calculate dynamic matrix numbers from DOB + Name
  const matrix = calculateDetailedDestinyMatrix(dob || '1980-01-14', cleanName);

  const personalityA = getArcana(matrix.personalityNumber);
  const soulA = getArcana(matrix.soulNumber);
  const lifePathA = getArcana(matrix.lifePathNumber);
  const expressionA = getArcana(matrix.expressionNumber);
  const centerA = getArcana(matrix.centerArcana);
  const moneyA = getArcana(matrix.moneyArcana);
  const loveA = getArcana(matrix.loveArcana);
  const karmicA = getArcana(matrix.bottomArcana);
  const talentA = getArcana(matrix.topRightArcana);
  const yearA = getArcana(matrix.yearArcana);

  const displayName = cleanName || 'Seeker';
  const titleName = cleanName ? `${cleanName}'s` : 'Your';
  const personGreeting = cleanName ? `${cleanName}` : 'you';

  // Format DOB safely
  let formattedDob = 'January 14, 1980';
  try {
    const parts = (dob || '1980-01-14').split('-');
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      formattedDob = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
  } catch (e) {
    formattedDob = dob;
  }

  const report: FullSoulMatrixReport = {
    name: displayName,
    titleName: titleName,
    dob: dob || '1980-01-14',
    formattedDob: formattedDob,
    generatedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    sections: {
      'core-personality': {
        strapline: 'How you actually operate day to day — the traits that come through automatically, and the ones you have had to build on purpose.',
        headline: `${displayName}, your Personality ${matrix.personalityNumber} (${personalityA.title}) anchors your external presence while Soul ${matrix.soulNumber} (${soulA.title}) shapes your inner drive.`,
        body: `Personality Arcana ${matrix.personalityNumber} makes ${personalityA.core} your automatic baseline in daily interactions. Beneath this, Soul Arcana ${matrix.soulNumber} calls ${personGreeting} toward ${soulA.core}. Your distinct mechanism pairs the gift of ${personalityA.gift} with an evolving quest for ${soulA.gift}. When stress occurs, watch for ${personalityA.challenge}, grounding back into your authentic core.`,
        relevantNumbersStr: `Personality Arcana ${matrix.personalityNumber}, Soul Arcana ${matrix.soulNumber}`
      },
      'life-purpose': {
        strapline: 'The central thread connecting your choices — what you are naturally drawn toward, and why certain paths keep pulling you back.',
        headline: `Life Path ${matrix.lifePathNumber} (${lifePathA.title}) directs long-term destiny, aligned with Expression ${matrix.expressionNumber} (${expressionA.title}).`,
        body: `Your life path is governed by Arcana ${matrix.lifePathNumber}, focusing your evolution on ${lifePathA.core}. Expression Arcana ${matrix.expressionNumber} gives this purpose practical execution through ${expressionA.gift}. For ${displayName}, key decisions succeed when you channel ${lifePathA.gift} while avoiding ${expressionA.challenge}.`,
        relevantNumbersStr: `Life Path Arcana ${matrix.lifePathNumber}, Expression Arcana ${matrix.expressionNumber}`
      },
      'career-money': {
        strapline: 'See where this pattern helps you seize the right opportunity — and where it quietly talks you out of one.',
        headline: `Center Purpose ${matrix.centerArcana} (${centerA.title}) channels into Money Line ${matrix.moneyArcana} (${moneyA.title}) for career breakthrough.`,
        body: `Center Arcana ${matrix.centerArcana} defines your decision-making style under commercial pressure. Money Line Arcana ${matrix.moneyArcana} translates this into financial strategy by unlocking ${moneyA.gift}. For ${displayName}, financial growth thrives when combining ${centerA.core} with clear execution, ensuring ${moneyA.challenge} does not delay progress.`,
        relevantNumbersStr: `Center Arcana ${matrix.centerArcana}, Money Line Arcana ${matrix.moneyArcana}`
      },
      'love-compatibility': {
        strapline: 'How this pattern shapes the way you express needs, set boundaries, and build trust with others.',
        headline: `Love Line ${matrix.loveArcana} (${loveA.title}) anchors relational safety, requiring open boundary alignment with Soul ${matrix.soulNumber}.`,
        body: `Love Line Arcana ${matrix.loveArcana} governs how ${displayName} expresses affection and establishes trust. Coupled with Soul Arcana ${matrix.soulNumber}, your relationship dynamic flourishes through ${loveA.core}. Trust builds when you leverage ${loveA.gift} while remaining mindful of ${loveA.challenge}.`,
        relevantNumbersStr: `Love Line Arcana ${matrix.loveArcana}, Soul Arcana ${matrix.soulNumber}`
      },
      'karmic-blueprint': {
        strapline: 'The repeating inner conflict behind your stress response — where it comes from and how to interrupt the cycle.',
        headline: `Karmic Tail ${matrix.bottomArcana} (${karmicA.title}) highlights stress friction, resolved through Center Purpose ${matrix.centerArcana}.`,
        body: `Under acute stress, Karmic Arcana ${matrix.bottomArcana} triggers ${karmicA.challenge}. For ${displayName}, interrupting this pattern requires shifting to Center Arcana ${matrix.centerArcana} (${centerA.title}), transforming reaction into ${centerA.gift}.`,
        relevantNumbersStr: `Karmic Arcana ${matrix.bottomArcana}, Center Arcana ${matrix.centerArcana}`
      },
      'natural-gifts': {
        strapline: 'The abilities that come easiest to you but are also the easiest to overlook, because they have never felt like effort.',
        headline: `Talent Zone Arcana ${matrix.topRightArcana} (${talentA.title}) grants effortless mastery in creative and intuitive execution.`,
        body: `Positioned at Arcana ${matrix.topRightArcana}, your innate superpower centers on ${talentA.gift}. For ${displayName}, this intuitive strength operates with natural ease, providing a distinct strategic advantage in ${talentA.core}.`,
        relevantNumbersStr: `Talent Arcana ${matrix.topRightArcana}, Paternal Line ${matrix.topLeftArcana}`
      },
      'chakra-analysis': {
        strapline: 'A full breakdown of your chakra table — which centers are open, which are under pressure, and daily energy tendencies.',
        headline: `Crown Physics ${matrix.chakras[0]?.physics || 14} and Heart Emotion ${matrix.chakras[3]?.emotions || 6} balance mental & emotional focus.`,
        body: `Your personalized energy chart bridges upper mental clarity (Crown ${matrix.chakras[0]?.physics || 14}) with emotional resonance (Heart ${matrix.chakras[3]?.emotions || 6}). Root energy (${matrix.chakras[6]?.physics || 6}) anchors physical stamina, giving ${displayName} balanced endurance across daily demands.`,
        relevantNumbersStr: `Crown ${matrix.chakras[0]?.physics || 14}, Heart ${matrix.chakras[3]?.emotions || 6}, Root ${matrix.chakras[6]?.physics || 6}`
      },
      'current-life-stage': {
        strapline: 'Whether your current cycle is asking you to watch and wait, or make one decisive move — and what that move likely is.',
        headline: `Your timing cycle activates Year Arcana ${matrix.yearArcana} (${yearA.title}), urging decisive action through ${yearA.core}.`,
        body: `Reflecting your active age cycle, Year Arcana ${matrix.yearArcana} emphasizes ${yearA.gift}. For ${displayName}, this period rewards clear initiative over passive hesitation, steering progress through ${yearA.core}.`,
        relevantNumbersStr: `Current Year Arcana ${matrix.yearArcana}`
      },
      'growth-roadmap': {
        strapline: 'What to prioritize over the next 30 days, and the one habit or pattern worth letting go of first.',
        headline: `Focus 30-day goals on Life Path ${matrix.lifePathNumber} (${lifePathA.title}) while releasing Karmic ${matrix.bottomArcana} hesitation.`,
        body: `Your growth roadmap calls ${displayName} to double down on ${lifePathA.gift}. Simultaneously, releasing ${karmicA.challenge} unlocks immediate momentum across personal and professional domains.`,
        relevantNumbersStr: `Life Path Arcana ${matrix.lifePathNumber}, Karmic Arcana ${matrix.bottomArcana}`
      },
      'soul-summary': {
        strapline: 'A single-page synthesis pulling every section together — the short version of your entire matrix, written in plain language.',
        headline: `Synthesis for ${displayName}: Unifying Center ${matrix.centerArcana}, Life Path ${matrix.lifePathNumber}, and Love Line ${matrix.loveArcana} into active mastery.`,
        body: `Your Soul Matrix connects identity (${matrix.centerArcana}: ${centerA.title}), purpose (${matrix.lifePathNumber}: ${lifePathA.title}), and relationships (${matrix.loveArcana}: ${loveA.title}). Aligning these arcana provides ${displayName} with an authentic, empowering framework for lifelong fulfillment.`,
        relevantNumbersStr: `Center ${matrix.centerArcana}, Life Path ${matrix.lifePathNumber}, Money ${matrix.moneyArcana}, Love ${matrix.loveArcana}`
      }
    }
  };

  return report;
}
