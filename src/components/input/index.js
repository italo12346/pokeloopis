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
    
    const name = pokemonData.name.toLowerCase().replace("-", " ");
    const userInput = inputText.toLowerCase();
    
    if (name === userInput) {
      console.log("Acertou!");
      let newScore = score + 1;
      setScore(newScore);
      setInputColor("#008000");
    } else {
      setInputColor("#ff3529");
      setScore(0);
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
