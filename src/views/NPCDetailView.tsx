import type { NPC } from '../types/NPC';

type NPCDetailViewProps = {
  npc: NPC;
  onCloseNPC: () => void;
  onDeleteNPC: (id: string) => void;
};

function NPCDetailView({ npc, onCloseNPC, onDeleteNPC }: NPCDetailViewProps) {
  return (
    <>
      <button onClick={onCloseNPC}>Back</button>
      <button onClick={() => onDeleteNPC(npc.id)}>Delete NPC</button>

      <h2>{npc.name}</h2>
      <p>
        {npc.speciesIcon} {npc.species} · {npc.professionIcon} {npc.profession}
      </p>
      <p>Gender: {npc.gender}</p>
      <p>Alignment: {npc.alignment}</p>
      <p>Appearance: {npc.appearance}</p>
      <p>Personality: {npc.personality}</p>
      <p>Goal: {npc.goal}</p>
      <p>Quirk: {npc.quirk}</p>
      <p>Quest Hook: {npc.questHook}</p>
      <p>HP: {npc.statBlock.hitPoints}</p>
      <p>AC: {npc.statBlock.armorClass}</p>
    </>
  );
}

export default NPCDetailView;