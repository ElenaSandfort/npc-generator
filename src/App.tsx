import './App.css';
import { generateNPC } from './utils/generateNPC';

function App() {
  const npc = generateNPC();
  return (
    <>
      <h1>NPC Generator</h1>
      <h2>{npc.name}</h2>
      <p>Gender: {npc.gender}</p>
      <p>Species: {npc.species}</p>
      <p>Profession: {npc.profession}</p>
      <p>Alignment: {npc.alignment}</p>
      <p>Quirk: {npc.quirk}</p>
      <h3>Strenght: {npc.statBlock.abilityScores.strength}</h3>
    

    </>
  )
}

export default App
