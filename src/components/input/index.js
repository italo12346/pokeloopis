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
  setInputColor,
}) {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState(""); // "correct" | "wrong" | ""
  const [feedback, setFeedback] = useState("");

  function saveLastChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    if (e.key !== "Enter" || !pokemonData) return;

    setShowPokemon("none");

    const name = pokemonData.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("-", " ");

    const userInput = inputText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (name === userInput) {
      setStatus("correct");
      setFeedback("✓ correto!");
      let newScore = score + 1;
      setScore(newScore);
      if (newScore > record) {
        setRecord(newScore);
        localStorage.setItem("record", newScore);
      }
    } else {
      setStatus("wrong");
      setFeedback(`✗ era ${pokemonData.name}`);
      setShowPokemon("brightness(1)");
      setScore(0);
    }

    setTimeout(() => {
      setStatus("");
      setFeedback("");
      setInputText("");
      setCount(count + 1);
    }, 1000 * 4);
  }

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <span className="input-arrow">▶</span>
        <input
          className={`poke-input ${status}`}
          value={inputText}
          onChange={saveLastChange}
          onKeyPress={handleSubmit}
          name="hit"
          type="text"
          placeholder="qual é esse pokémon?"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <span className="feedback-text" style={{ color: status === "correct" ? "#34d399" : status === "wrong" ? "#ff2d55" : "transparent" }}>
        {feedback || "."}
      </span>
      <button
        className="skip-btn"
        onClick={() => {
          setShowPokemon("none");
          setFeedback(pokemonData?.name ?? "");
          setStatus("");
          setTimeout(() => {
            setFeedback("");
            setInputText("");
            setCount(count + 1);
            setScore(0);
          }, 1600);
        }}
      >
        pular pokémon ›
      </button>
    </div>
  );
}