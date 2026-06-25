import type { NPC } from '../types/NPC';
import NPCSheet from '../components/NPCSheet';

type NPCDetailViewProps = {
  npc: NPC;
  onCloseNPC: () => void;
  onDeleteNPC: (id: string) => void;
};

function NPCDetailView({ npc, onCloseNPC, onDeleteNPC }: NPCDetailViewProps) {
    function handlePrintNPC() {
      window.print();
    }
  return (
    <>
      <NPCSheet npc={npc} />
      <div className="view-actions">
        <button onClick={onCloseNPC} className="button-link">← Back</button>
        <button onClick={handlePrintNPC} className="button-primary">Print / Save as PDF</button>
        <button onClick={() => onDeleteNPC(npc.id)} className="button-danger">Delete NPC</button>
      </div>
    </>
  );
}

export default NPCDetailView;