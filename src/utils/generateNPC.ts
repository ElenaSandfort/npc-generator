import {
    actions,
    alignments,
    appearances,
    genders,
    goals,
    languages,
    names,
    personalities,
    professions,
    questHooks,
    quirks,
    skills,
    species,
} from '../data/npcTables';

import type { AbilityScores, NPC} from '../types/NPC';

function pickRandom<T>(items: readonly T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function generateAbilityScores(): AbilityScores {
  return {
    strength: pickRandom([8, 10, 12, 14]),
    dexterity: pickRandom([8, 10, 12, 14]),
    constitution: pickRandom([8, 10, 12, 14]),
    intelligence: pickRandom([8, 10, 12, 14]),
    wisdom: pickRandom([8, 10, 12, 14]),
    charisma: pickRandom([8, 10, 12, 14]),
  };
}

export function generateNPC(): NPC {
  const gender = pickRandom(genders);
  const selectedSpecies = pickRandom(species);
  const selectedProfession = pickRandom(professions);

  return {
    id: crypto.randomUUID(),

    name: pickRandom(names[gender]),
    gender,
    species: selectedSpecies.name,
    profession: selectedProfession.name,
    alignment: pickRandom(alignments),

    appearance: pickRandom(appearances),
    personality: pickRandom(personalities),
    goal: pickRandom(goals),
    quirk: pickRandom(quirks),
    questHook: pickRandom(questHooks),

    speciesIcon: selectedSpecies.icon,
    professionIcon: selectedProfession.icon,
    portrait: undefined,

    statBlock: {
      armorClass: pickRandom([10, 11, 12, 13, 14]),
      hitPoints: pickRandom([4, 6, 8, 10, 12, 16]),
      speed: '30 ft.',
      abilityScores: generateAbilityScores(),
      skills: [pickRandom(skills), pickRandom(skills)],
      languages: ['Common', pickRandom(languages)],
      action: pickRandom(actions),
    },
  };
}