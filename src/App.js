import logo from "./logo.svg";
import Input from "./components/input";
import Placar from "./components/Placar";
import Pokemon from "./components/pokemon";
import "./App.css";
import Tipo from "./components/tipo";import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [record, setRecord] = useState(0);

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
  })()}, [count])

  return (
    <div className="App">
      <Placar />
      <Pokemon  pokemonData={pokemonData} pokemonIndex={pokemonIndex}/>
      <Input setCount={setCount} count={count} pokemonData={pokemonData} setRecord={setRecord} record={record}/>
      <Tipo />
    </div>
  );
}

export default App;
