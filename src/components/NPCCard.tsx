import type { NPC } from '../types/NPC';

type NPCCardProps = {
  npc: NPC;
  onOpenNPC: (npc: NPC) => void;
};

function NPCCard({ npc, onOpenNPC }: NPCCardProps) {
  return (
    <article className="npc-card">
      <div className="npc-card__portrait">
        <div className="npc-card__portrait-placeholder">
          Portrait
        </div>

        <div className="npc-card__badge" aria-label={npc.profession}>
          {npc.professionIcon}
        </div>
      </div>

      <div className="npc-card__content">
        <h3>{npc.name}</h3>
        <p>
          {npc.gender.icon} · {npc.species} · {npc.profession}
        </p>
        <div className="horizontal-divider"></div>
        <p><strong>Goal</strong><br></br>
        {npc.goal}
        </p>
      </div>

      <button onClick={() => onOpenNPC(npc)} className="button-link">Details → </button>
    </article>
  );
}

export default NPCCard;