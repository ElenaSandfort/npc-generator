import { useState } from 'react';
import './App.css';
import { generateNPC } from './utils/generateNPC';

function App() {

  const [currentNPC, setCurrentNPC] = useState(generateNPC());

  function handleGenerateNewNPC() {
    setCurrentNPC(generateNPC());
  }
  return (
    <>
      <h1>NPC Generator</h1>
      <button onClick={handleGenerateNewNPC}>Generate New NPC</button>
      <h2>{currentNPC.name}</h2>
      <p>Gender: {currentNPC.gender}</p>
      <p>Species: {currentNPC.species}</p>
      <p>Profession: {currentNPC.profession}</p>
      <p>Alignment: {currentNPC.alignment}</p>
      <p>Quirk: {currentNPC.quirk}</p>
      <h3>Strenght: {currentNPC.statBlock.abilityScores.strength}</h3>
    

    </>
  )
}

export default App
