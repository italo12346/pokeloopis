import { useState } from "react";
import inputStyle from "./style.css";

export default function Input ({ score, setScore, setCount, count, pokemonData, setRecord, record }) {
  const [inputText, setInputText] = useState('');

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
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div style={inputStyle.div}>
        <input onChange={saveLastChange} onKeyPress={handleSubmit} style={inputStyle.input} name="hit" type="text" placeholder="Adivinhe o Pokemon"></input>
    </div>
  );
}