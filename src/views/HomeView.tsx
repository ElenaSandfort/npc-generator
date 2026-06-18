import type { NPC } from '../types/NPC';

type HomeViewProps = {
  savedNPCs: NPC[];
  onGenerateNPC: () => void;
  onOpenNPC: (npc: NPC) => void;
};

function HomeView({ savedNPCs, onGenerateNPC, onOpenNPC }: HomeViewProps) {
  return (
    <>
      <button onClick={onGenerateNPC}>Generate NPC</button>

      <h2>Saved NPCs</h2>

      {savedNPCs.map((npc) => (
        <article key={npc.id}>
          <h3>{npc.name}</h3>
          <p>
            {npc.speciesIcon} {npc.species} · {npc.professionIcon}{' '}
            {npc.profession}
          </p>
          <button onClick={() => onOpenNPC(npc)}>Details</button>
        </article>
      ))}
    </>
  );
}

export default HomeView;