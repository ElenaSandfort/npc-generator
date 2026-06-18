import type { NPC } from '../types/NPC';
import NPCSheet from '../components/NPCSheet';

type NPCDetailViewProps = {
  npc: NPC;
  onCloseNPC: () => void;
  onDeleteNPC: (id: string) => void;
};

function NPCDetailView({ npc, onCloseNPC, onDeleteNPC }: NPCDetailViewProps) {
  return (
    <>
      <NPCSheet npc={npc} />
      <button onClick={onCloseNPC}>Back</button>
      <button onClick={() => onDeleteNPC(npc.id)}>Delete NPC</button>
    </>
  );
}

export default NPCDetailView;