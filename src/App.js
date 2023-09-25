import Input from "./components/input";
import Placar from "./components/Placar";
import Pokemon from "./components/pokemon";
import "./App.css";
import Tipo from "./components/tipo";
import { useEffect, useState } from "react";
import types from "./config/types.json";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const [record, setRecord] = useState(0);

  const [pokemonData, setPokemonData] = useState();
  const [pokemonIndex, setPokemonIndex] = useState();
  const [showPokemon, setShowPokemon] = useState("brightness(0)");
  const [inputColor, setInputColor] = useState("#ececec");

  useEffect(() => {
    let localRecord = localStorage.getItem("record");
    console.log(localRecord);
    setRecord(localRecord ? localRecord : 0);
  }, [])

  useEffect(() => {
    (async () => {
      const maxPokemonValue = 1010;
      const minPokemonValue = 1;

      const randomIndex =
        Math.floor(Math.random() * maxPokemonValue) + minPokemonValue;

      const fetchedPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomIndex}`
      );
      let pokemonInfo = await fetchedPokemon.json();
      console.log(pokemonInfo.name);
      setPokemonData(pokemonInfo);
      setShowPokemon("brightness(0)");
      setInputColor("#ececec");
      setRecord(localStorage.getItem("record") ? localStorage.getItem("record") : 0);
      setPokemonIndex(randomIndex);

      let localRecord = Number(localStorage.getItem("record"));

      if (score > localRecord) {
        setRecord(localRecord + 1);
        localStorage.setItem("record", localRecord + 1);
      }
    })();
  }, [count]);

  return (
    <div className="App">
      <Placar score={score} highscore={record} />
      <Pokemon
        pokemonType={types[pokemonData?.types[0].type.name]}
        pokemonIndex={pokemonIndex}
        showPokemon={showPokemon}
      />
      <Input
        score={score}
        setScore={setScore}
        setCount={setCount}
        count={count}
        pokemonData={pokemonData}
        setRecord={setRecord}
        record={record}
        setShowPokemon={setShowPokemon}
        inputColor={inputColor}
        setInputColor={setInputColor}
      />
      <Tipo tipo={types[pokemonData?.types[0].type.name]} />
    </div>
  );
}

export default App;
