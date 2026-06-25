import type { NPC } from '../types/NPC';

type NPCSheetProps = {
  npc: NPC;
};

function NPCSheet({ npc }: NPCSheetProps) {
  return (
    <article className="npc-sheet">
      <header className="npc-sheet__header">
        <div className="npc-sheet__portrait">Portrait</div>

        <div className="npc-sheet__identity">
          <h2>{npc.name}</h2>
          <p>
            {npc.gender.icon} · {npc.species} · {npc.profession}
          </p>
          <p>{npc.alignment}</p>
        </div>
      </header>

      <section className="npc-panel npc-panel--narrative">
        <h3>Narrative Profile</h3>

        <div className="narrative-grid">
          <div>
            <h4>Appearance</h4>
            <p>{npc.appearance}</p>

            <h4>Personality</h4>
            <p>{npc.personality}</p>
          </div>

          <div>
            <h4>Goal</h4>
            <p>{npc.goal}</p>

            <h4>Quirk</h4>
            <p>{npc.quirk}</p>

            <h4>Quest Hook</h4>
            <p>{npc.questHook}</p>
          </div>
        </div>
      </section>

      <section className="npc-panel npc-panel--combat-overview">
        <h3>Combat Overview</h3>

        <div className="combat-overview-grid">
          <p>AC: {npc.statBlock.armorClass}</p>
          <p>HP: {npc.statBlock.hitPoints}</p>
          <p>Speed: {npc.statBlock.speed}</p>
        </div>
      </section>

      <section className="npc-panel npc-panel--abilities">
        <h3>Ability Scores</h3>

        <ul className="ability-grid">
          <li>STR: {npc.statBlock.abilityScores.strength}</li>
          <li>DEX: {npc.statBlock.abilityScores.dexterity}</li>
          <li>CON: {npc.statBlock.abilityScores.constitution}</li>
          <li>INT: {npc.statBlock.abilityScores.intelligence}</li>
          <li>WIS: {npc.statBlock.abilityScores.wisdom}</li>
          <li>CHA: {npc.statBlock.abilityScores.charisma}</li>
        </ul>
      </section>

      <section className="npc-panel npc-panel--stats">
        <h3>Character Statistics</h3>

        <p>Skills: {npc.statBlock.skills.join(', ')}</p>
        <p>Languages: {npc.statBlock.languages.join(', ')}</p>
      </section>

      <section className="npc-panel npc-panel--actions">
        <h3>Actions</h3>
        <p>{npc.statBlock.action}</p>
      </section>
    </article>
  );
}

export default NPCSheet;