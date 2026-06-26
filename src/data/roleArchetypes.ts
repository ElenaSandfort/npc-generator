import type { RoleArchetype } from '../types/NPC';

export const roleArchetypes: RoleArchetype[] = [
  {
    name: 'Guard',
    icon: '🛡️',

    armorClassOptions: [13, 14, 15, 16],
    hitPointOptions: [9, 11, 13, 16],
    speed: '30 ft.',

    skills: ['Perception', 'Athletics', 'Intimidation'],
    languages: ['Common'],
    actions: [
      'Spear. Melee or Ranged Weapon Attack: +3 to hit, 1d6 + 1 piercing damage.',
      'Shortsword. Melee Weapon Attack: +3 to hit, 1d6 + 1 piercing damage.',
    ],

    appearances: [
      'Wears worn but well-kept armor.',
      'Has alert eyes and a disciplined posture.',
    ],
    personalities: [
      'Dutiful, cautious, and slow to trust strangers.',
      'Blunt, practical, and deeply loyal to their post.',
    ],
    goals: [
      'Wants to keep the town safe from a growing threat.',
      'Hopes to earn a promotion before the next festival.',
    ],
    questHooks: [
      'Asks the party to investigate suspicious activity near the city gate.',
      'Needs help finding a missing patrol before the captain notices.',
    ],
    abilityScoreSets: [
      {
        strength: 14,
        dexterity: 12,
        constitution: 13,
        intelligence: 10,
        wisdom: 11,
        charisma: 9,
      },
      {
        strength: 12,
        dexterity: 14,
        constitution: 12,
        intelligence: 10,
        wisdom: 13,
        charisma: 10,
      },
    ],
  },
  {
    name: 'Merchant',
    icon: '💰',

    armorClassOptions: [10, 11, 12],
    hitPointOptions: [4, 6, 8],
    speed: '30 ft.',

    skills: ['Persuasion', 'Insight', 'Deception'],
    languages: ['Common'],
    actions: [
      'Dagger. Melee Weapon Attack: +2 to hit, 1d4 piercing damage.',
      'Call for Help. The merchant shouts for nearby allies or guards.',
    ],

    appearances: [
      'Wears fine clothes slightly dulled by travel dust.',
      'Carries a heavy coin purse and too many rings.',
    ],
    personalities: [
      'Charming, calculating, and always watching for opportunity.',
      'Friendly on the surface, but careful with every word.',
    ],
    goals: [
      'Wants to recover stolen cargo before their reputation collapses.',
      'Plans to secure a profitable trade deal at any cost.',
    ],
    questHooks: [
      'Offers payment to retrieve a stolen ledger from a rival.',
      'Needs discreet escorts for a shipment no one should inspect.',
    ],
        abilityScoreSets: [
      {
        strength: 14,
        dexterity: 12,
        constitution: 13,
        intelligence: 10,
        wisdom: 11,
        charisma: 9,
      },
      {
        strength: 12,
        dexterity: 14,
        constitution: 12,
        intelligence: 10,
        wisdom: 13,
        charisma: 10,
      },
    ],
  },
];