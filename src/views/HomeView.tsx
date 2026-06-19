import type { NPC } from '../types/NPC';
import NPCCard from '../components/NPCCard';

type HomeViewProps = {
  savedNPCs: NPC[];
  onGenerateNPC: () => void;
  onOpenNPC: (npc: NPC) => void;
};

function HomeView({ savedNPCs, onGenerateNPC, onOpenNPC }: HomeViewProps) {
  return (
    <div className="home">
      <header className="home-header">
        <h1>NPC Generator</h1>
        <p>
          Generate memorable NPCs for your next D&D session.
        </p>
      </header>

      <section className="generate-section">
        <div className="generate-d20">
          D20
        </div>

        <button onClick={onGenerateNPC}>
          Generate NPC
        </button>
      </section>

      <section className="saved-section">
        <h2>Saved NPCs</h2>

        {savedNPCs.length === 0 ? (
          <p>
            No saved NPCs yet.
          </p>
        ) : (
          <div className="saved-grid">
            {savedNPCs.map((npc) => (
            <NPCCard key={npc.id} npc={npc} onOpenNPC={onOpenNPC} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomeView;