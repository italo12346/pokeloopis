import { useState } from "react";
import inputStyle from "./style.css";

export default function Input ({setCount, count, pokemonData, setRecord, record}) {

  const [inputText, setInputText] = useState('');

  function saveLastChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit (event) {

    if (event.key !== 'Enter') return;
    
    const name = pokemonData.name.toLowerCase();
    const userInput =inputText.toLowerCase();

    if (name === userInput) {
      console.log('Acertou!');
      setCount(count++);
    } else {
      setCount(count++);
    }
  }

  return (
  <div style={inputStyle.div}>
      <input onChange={saveLastChange} onKeyPress={handleSubmit} style={inputStyle.input} name="hit" type="text" placeholder="Adivinhe o Pokemon"></input>
  </div>
  );
}