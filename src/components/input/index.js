import { useState } from "react";
import  "./style.css";

export default function Input ({ score, setScore, setCount, count, pokemonData, setRecord, record, tipoColor}) {
  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState(tipoColor?.color);

  function saveLastChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit (e) {
    if (e.key !== 'Enter') return;
    
    const name = pokemonData.name.toLowerCase();
    const userInput = inputText.toLowerCase();

    if (name === userInput) {
      console.log('Acertou!');
      setScore(score + 1);
      if(score >= record) {
        setRecord(score);
        localStorage.setItem("record", record);
      }
      setCount(count + 1);
      setColor("#008000")
    } else {
      setCount(count + 1);
      setColor("#ff3529")
    }
  }
  return (
    <div >
        <input style={{ backgroundColor: color }} onChange={saveLastChange} onKeyPress={handleSubmit} name="hit" type="text" placeholder="Adivinhe o Pokemon"></input>
    </div>
  );
}