import type { NPC } from '../types/NPC';
import NPCSheet from '../components/NPCSheet';

type GeneratedNPCViewProps = {
  npc: NPC;
  onSaveNPC: () => void;
  onGenerateAnotherNPC: () => void;
};

function GeneratedNPCView({
  npc,
  onSaveNPC,
  onGenerateAnotherNPC,
}: GeneratedNPCViewProps) {
  return (
    <>
      <NPCSheet npc={npc} />
      <button onClick={onSaveNPC}>Save NPC</button>
      <button onClick={onGenerateAnotherNPC}>Generate Another</button>
    </>
  );
}

export default GeneratedNPCView;