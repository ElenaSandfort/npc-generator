import type { NPC } from '../types/NPC';

type NPCSheetProps = {
  npc: NPC;
};

function NPCSheet({ npc }: NPCSheetProps) {
  return (
    <article>
      <header>
        <h2>{npc.name}</h2>
        <p>
          {npc.speciesIcon} {npc.species} · {npc.professionIcon}{' '}
          {npc.profession}
        </p>
      </header>

      <section>
        <h3>Identity</h3>
        <p>Gender: {npc.gender}</p>
        <p>Alignment: {npc.alignment}</p>
      </section>

      <section>
        <h3>Roleplay</h3>
        <p>Appearance: {npc.appearance}</p>
        <p>Personality: {npc.personality}</p>
        <p>Goal: {npc.goal}</p>
        <p>Quirk: {npc.quirk}</p>
        <p>Quest Hook: {npc.questHook}</p>
      </section>

      <section>
        <h3>Stats</h3>
        <p>AC: {npc.statBlock.armorClass}</p>
        <p>HP: {npc.statBlock.hitPoints}</p>
        <p>Speed: {npc.statBlock.speed}</p>

        <h4>Ability Scores</h4>
        <ul>
          <li>STR: {npc.statBlock.abilityScores.strength}</li>
          <li>DEX: {npc.statBlock.abilityScores.dexterity}</li>
          <li>CON: {npc.statBlock.abilityScores.constitution}</li>
          <li>INT: {npc.statBlock.abilityScores.intelligence}</li>
          <li>WIS: {npc.statBlock.abilityScores.wisdom}</li>
          <li>CHA: {npc.statBlock.abilityScores.charisma}</li>
        </ul>

        <p>Skills: {npc.statBlock.skills.join(', ')}</p>
        <p>Languages: {npc.statBlock.languages.join(', ')}</p>
        <p>Action: {npc.statBlock.action}</p>
      </section>
    </article>
  );
}

export default NPCSheet;