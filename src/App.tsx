import { useState, useEffect } from 'react';
import type { NPC } from './types/NPC';
import './App.css';
import { generateNPC } from './utils/generateNPC';

const STORAGE_KEY = 'npc-generator-saved-npcs';

function App() {

  const [currentNPC, setCurrentNPC] = useState<NPC | null>(null);

  const [savedNPCs, setSavedNPCs] = useState<NPC[]>(() => {
    const storedNPCs = localStorage.getItem(STORAGE_KEY);

    if (!storedNPCs) return [];

    return JSON.parse(storedNPCs);
  });

  const [selectedNPC, setSelectedNPC] = useState<NPC | null>(null);

  useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedNPCs));
}, [savedNPCs]);

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

  function handleDeleteNPC(id: string) {
    const shouldDelete = window.confirm(
      'Are you sure you want to delete this NPC?'
    );

    if (!shouldDelete) return;

    setSavedNPCs(savedNPCs.filter((npc) => npc.id !== id));
    setSelectedNPC(null);
  }

  return (
    <>
      {selectedNPC ? (
        <>
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
          <button onClick={handleCloseNPC}>Back</button>
          <button onClick={() => handleDeleteNPC(selectedNPC.id)}>
            Delete NPC
          </button>
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
