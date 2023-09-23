import { useState } from "react";
import "./style.css";

export default function Input({
  score,
  setScore,
  setCount,
  count,
  pokemonData,
  setRecord,
  record,
  setShowPokemon,
  inputColor,
  setInputColor
}) {
  const [inputText, setInputText] = useState("");

  function saveLastChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    if (e.key !== "Enter") return;

    setShowPokemon("none");
    
    const name = pokemonData.name.toLowerCase();
    const userInput = inputText.toLowerCase();
    
    if (name === userInput) {
      let localRecord = Number(localStorage.getItem("record")) + 1;
      console.log("Acertou!");
      setScore(score + 1);
      if (localRecord > record) {
        setRecord(localRecord);
        localStorage.setItem("record", localRecord);
      }
      setInputColor("#008000");
    } else {
      setInputColor("#ff3529");
    }

    setTimeout(() => {
      setCount(count + 1);
    }, 1000 * 4);
  }
  return (
    <div>
      <input
        style={{ backgroundColor: inputColor }}
        onChange={saveLastChange}
        onKeyPress={handleSubmit}
        name="hit"
        type="text"
        placeholder="Adivinhe o Pokemon"
      ></input>
    </div>
  );
}
