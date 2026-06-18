import type { NPC } from '../types/NPC';

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
      <h2>{npc.name}</h2>
      <button onClick={onSaveNPC}>Save NPC</button>
      <button onClick={onGenerateAnotherNPC}>Generate Another</button>
    </>
  );
}

export default GeneratedNPCView;