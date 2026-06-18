import { useState } from 'react';
import type { NPC } from './types/NPC';
import './App.css';
import { generateNPC } from './utils/generateNPC';

function App() {

  const [currentNPC, setCurrentNPC] = useState<NPC | null>(null);
  const [savedNPCs, setSavedNPCs] = useState<NPC[]>([]);
  const [selectedNPC, setSelectedNPC] = useState<NPC | null>(null);

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

  function handleOpenNPC(npc: NPC) {
    setSelectedNPC(npc);
  }

  function handleCloseNPC() {
    setSelectedNPC(null);
  }

  return (
    <>
      {selectedNPC ? (
        <>
          <button onClick={handleCloseNPC}>Back</button>

          <h2>{selectedNPC.name}</h2>
          <p>
            {selectedNPC.speciesIcon} {selectedNPC.species} ·{' '}
            {selectedNPC.professionIcon} {selectedNPC.profession}
          </p>
          <p>Gender: {selectedNPC.gender}</p>
          <p>Alignment: {selectedNPC.alignment}</p>
          <p>Appearance: {selectedNPC.appearance}</p>
          <p>Personality: {selectedNPC.personality}</p>
          <p>Goal: {selectedNPC.goal}</p>
          <p>Quirk: {selectedNPC.quirk}</p>
          <p>Quest Hook: {selectedNPC.questHook}</p>
          <p>HP: {selectedNPC.statBlock.hitPoints}</p>
          <p>AC: {selectedNPC.statBlock.armorClass}</p>
        </>
      ) : currentNPC ? (

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
              <button onClick={() => handleOpenNPC(npc)}>Details</button>
            </article>
          ))}
        </>
      )}
    </>
  )
}

export default App
