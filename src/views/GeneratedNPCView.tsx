import type { NPC } from '../types/NPC';
import NPCSheet from '../components/NPCSheet';

type GeneratedNPCViewProps = {
  npc: NPC;
  onSaveNPC: () => void;
  onGenerateAnotherNPC: () => void;
  onCloseGeneratedNPC: () => void;
};

function GeneratedNPCView({
  npc,
  onSaveNPC,
  onGenerateAnotherNPC,
  onCloseGeneratedNPC,
}: GeneratedNPCViewProps) {
  return (
    <>
      <NPCSheet npc={npc} />
      <div className="view-actions">
        <button onClick={onCloseGeneratedNPC} className="button-link">← Back</button>
        <button onClick={onSaveNPC} className="button-primary">Save NPC</button>
        <button onClick={onGenerateAnotherNPC} className="button-outline">Generate Another</button>
      </div>
    </>
  );
}

export default GeneratedNPCView;