import Input from "./components/input";
import Placar from "./components/Placar";
import Pokemon from "./components/pokemon";
import "./App.css";
import Tipo from "./components/tipo";import { useEffect, useState } from 'react';
import types from "./config/types.json";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(localStorage.getItem("record") ? localStorage.getItem("record") : 0);

  const [pokemonData,setPokemonData] = useState();
  const [pokemonIndex, setPokemonIndex] = useState();

  useEffect(() => {(async () => {
    const maxPokemonValue = 1010;
    const minPokemonValue = 1;
    
    const randomIndex = Math.floor(Math.random() * maxPokemonValue) + minPokemonValue;
    
    const fetchedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`);
    let pokemonInfo = await fetchedPokemon.json();
    console.log(pokemonInfo.name);
    setPokemonData(pokemonInfo);
    
    setPokemonIndex(randomIndex);
  })()}, [count]);

  return (
    <div className="App">
      <Placar score={ score } highscore={ record } />
      <Pokemon  pokemonType={ types[pokemonData?.types[0].type.name] } pokemonIndex={pokemonIndex}/>
      <Input score={ score } setScore={ setScore } setCount={setCount} count={count} pokemonData={pokemonData} setRecord={setRecord} record={record}/>
      <Tipo tipo={ types[pokemonData?.types[0].type.name] }/>
    </div>
  );
}

export default App;
