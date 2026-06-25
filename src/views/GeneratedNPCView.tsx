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
      <div className="view-actions">
        <button onClick={onSaveNPC} className="button-primary">Save NPC</button>
        <button onClick={onGenerateAnotherNPC} className="button-outline">Generate Another</button>
      </div>
    </>
  );
}

export default GeneratedNPCView;