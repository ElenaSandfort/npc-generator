import {
  alignments,
  genders,
  quirks,
  roleArchetypes,
} from '../data/npcTables';

import { species } from '../data/species';
import { additionalLanguages } from '../data/languages';

import type { NPC } from '../types/NPC';

function pickRandom<T>(items: readonly T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function pickRandomMany<T>(items: readonly T[], count: number): T[] {
  const shuffledItems = [...items].sort(() => Math.random() - 0.5);
  return shuffledItems.slice(0, count);
}

function generateName(
  selectedSpecies: (typeof species)[number],
  genderValue: 'male' | 'female' | 'non-binary'
): string {
  const firstName =
    genderValue === 'male'
      ? pickRandom(selectedSpecies.maleFirstNames)
      : genderValue === 'female'
        ? pickRandom(selectedSpecies.femaleFirstNames)
        : pickRandom(selectedSpecies.nonBinaryFirstNames);

  const lastName = pickRandom(selectedSpecies.lastNames);

  return `${firstName} ${lastName}`;
}

function generateLanguages(nativeLanguage: string): string[] {
  const randomAdditionalLanguage = pickRandom(additionalLanguages);

  return [...new Set([nativeLanguage, randomAdditionalLanguage])];
}

export function generateNPC(): NPC {
  const gender = pickRandom(genders);
  const selectedSpecies = pickRandom(species);
  const selectedRole = pickRandom(roleArchetypes);

  return {
    id: crypto.randomUUID(),

    name: generateName(selectedSpecies, gender.value),
    gender,
    species: selectedSpecies.displayName,
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
      languages: generateLanguages(selectedSpecies.nativeLanguage),
      action: pickRandom(selectedRole.actions),
    },
  };
}