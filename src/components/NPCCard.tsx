import type { NPC } from '../types/NPC';

type NPCCardProps = {
  npc: NPC;
  onOpenNPC: (npc: NPC) => void;
};

function NPCCard({ npc, onOpenNPC }: NPCCardProps) {
  return (
    <article className="npc-card">
      <div className="npc-card__portrait">{npc.speciesIcon}</div>

      <div className="npc-card__content">
        <h3>{npc.name}</h3>
        <p>
          {npc.gender} {npc.species} · {npc.profession}
        </p>
        <p>{npc.goal}</p>
      </div>

      <button onClick={() => onOpenNPC(npc)} className="button-outline">Details</button>
    </article>
  );
}

export default NPCCard;