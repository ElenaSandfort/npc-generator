import { useState } from 'react';
import type { NPC } from './types/NPC';
import './App.css';
import { generateNPC } from './utils/generateNPC';

function App() {

  const [currentNPC, setCurrentNPC] = useState<NPC | null>(null);
  const [savedNPCs, setSavedNPCs] = useState<NPC[]>([]);

  function handleGenerateNPC() {
    setCurrentNPC(generateNPC());
  }

  function handleSaveNPC() {
    if (!currentNPC) return;

    setSavedNPCs([currentNPC, ...savedNPCs]);
    setCurrentNPC(null);
  }

  function handleGenerateAnotherNPC() {
    setCurrentNPC(generateNPC());
  }

  return (
    <>
    {currentNPC ? (
      <>
        <h2>{currentNPC.name}</h2>
        <button onClick={handleSaveNPC}>Save NPC</button>
        <button onClick={handleGenerateAnotherNPC}>Generate Another</button>
      </>
    ) : (
      <>
        <button onClick={handleGenerateNPC}>Generate NPC</button>
        <h2>Saved NPCs</h2>
        {savedNPCs.map((npc) => (
          <article key={npc.id}>
            <h3>{npc.name}</h3>
            <p>
              {npc.speciesIcon} {npc.species} · {npc.professionIcon}{' '}
              {npc.profession}
            </p>
          </article>
        ))}
      </>
    )}
    </>
  )
}

export default App
