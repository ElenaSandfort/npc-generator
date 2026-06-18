import { useState, useEffect } from 'react';
import type { NPC } from './types/NPC';
import './App.css';
import { generateNPC } from './utils/generateNPC';
import HomeView from './views/HomeView';
import GeneratedNPCView from './views/GeneratedNPCView';
import NPCDetailView from './views/NPCDetailView';

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
        <NPCDetailView
          npc={selectedNPC}
          onCloseNPC={handleCloseNPC}
          onDeleteNPC={handleDeleteNPC}
        />
      ) : currentNPC ? (
        <GeneratedNPCView
          npc={currentNPC}
          onSaveNPC={handleSaveNPC}
          onGenerateAnotherNPC={handleGenerateAnotherNPC}
        />
      ) : (
        <HomeView
          savedNPCs={savedNPCs}
          onGenerateNPC={handleGenerateNPC}
          onOpenNPC={handleOpenNPC}
        />
      )}
    </>
  )
}

export default App
