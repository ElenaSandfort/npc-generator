import {
  alignments,
  genders,
  names,
  quirks,
  roleArchetypes,
  species,
} from '../data/npcTables';

import type { NPC } from '../types/NPC';

function pickRandom<T>(items: readonly T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function pickRandomMany<T>(items: readonly T[], count: number): T[] {
  const shuffledItems = [...items].sort(() => Math.random() - 0.5);
  return shuffledItems.slice(0, count);
}

export function generateNPC(): NPC {
  const gender = pickRandom(genders);
  const selectedSpecies = pickRandom(species);
  const selectedRole = pickRandom(roleArchetypes);

  return {
    id: crypto.randomUUID(),

    name: pickRandom(names[selectedSpecies.id][gender.value]),
    gender,
    species: selectedSpecies.name,
    profession: selectedRole.name,
    alignment: pickRandom(alignments),

    appearance: pickRandom(selectedRole.appearances),
    personality: pickRandom(selectedRole.personalities),
    goal: pickRandom(selectedRole.goals),
    quirk: pickRandom(quirks),
    questHook: pickRandom(selectedRole.questHooks),

    professionIcon: selectedRole.icon,
    portrait: undefined,

   statBlock: {
      armorClass: pickRandom(selectedRole.armorClassOptions),
      hitPoints: pickRandom(selectedRole.hitPointOptions),
      speed: selectedRole.speed,
      abilityScores: pickRandom(selectedRole.abilityScoreSets),
      skills: pickRandomMany(selectedRole.skills, 2),
      languages: selectedRole.languages,
      action: pickRandom(selectedRole.actions),
    },
  };
}