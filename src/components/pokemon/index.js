import "./style.css";

const fetchedPokemonList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
let pokemonList = await fetchedPokemonList.json();
pokemonList = pokemonList.results;

const randomIndex = Math.round(Math.random() * pokemonList.length);
const pokemon = pokemonList[randomIndex];

const fetchedPokemon = await fetch(pokemon.url);
let pokemoninfo = await fetchedPokemon.json();
let pokemonImg = await pokemoninfo.sprites.front_default

function checkHit(hit) {
  if (hit === pokemon.name) {
    return true
  }else{
    return false
  }
}
console.log(checkHit(true));
export default function Pokemon () {
  if (checkHit() === true) {
    return (
      <div className="pokeCard">
        <img className="hitImg" src ={pokemonImg}></img> 
    </div>
      );
  }else{
    return (
      <div className="pokeCard">
        <img className="missImg" src ={pokemonImg}></img> 
    </div>
      );
  }
}
