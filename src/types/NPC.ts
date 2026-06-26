export type AbilityScores = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};

export type Gender = {
  value: 'male' | 'female' | 'non-binary';
  label: string;
  icon: string;
};

export type Species = {
  id: string;
  displayName: string;
  nativeLanguage: string;

  maleFirstNames: string[];
  femaleFirstNames: string[];
  nonBinaryFirstNames: string[];
  lastNames: string[];
};

export type LightStatBlock = {
    armorClass: number;
    hitPoints: number;
    speed: string;
    abilityScores: AbilityScores;
    skills: string[];
    languages: string[];
    action: string;
};

export type NPC = {
    id: string;

    name: string;
    gender: Gender;
    species: string;
    profession: string;
    alignment: string;

    appearance: string;
    personality: string;
    goal: string;
    quirk: string;
    questHook: string;

    professionIcon: string;
    portrait?: string;

    statBlock: LightStatBlock;
};

export type RoleArchetype = {
  name: string;
  icon: string;

  armorClassOptions: number[];
  hitPointOptions: number[];
  speed: string;
  
  abilityScoreSets: AbilityScores[];

  skills: string[];
  languages: string[];
  actions: string[];

  appearances: string[];
  personalities: string[];
  goals: string[];
  questHooks: string[];
};