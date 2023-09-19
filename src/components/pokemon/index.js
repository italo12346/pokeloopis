import { useEffect } from "react";
import "./style.css";

// const pokemon = pokemonList[randomIndex];

// const fetchedPokemon = await fetch(pokemon.url);
// let pokemoninfo = await fetchedPokemon.json();
// let pokemonImg = await pokemoninfo.sprites.front_default

// function checkHit(hit) {
//   if (hit === pokemon.name) {
//     return true
//   }else{
//     return false
//   }
// }
// console.log(checkHit(true));
export default function Pokemon ({pokemonData, pokemonIndex}) {

  function fixIndexValue (index) {
    if (index < 10) return '00' + index;
    if (index < 100) return '0' + index;
    return index;
  }

  return (
    <img className="hitImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fixIndexValue(pokemonIndex)}.png`}></img>
  )

  // if (checkHit() === true) {
  //   return (
  //     <div className="pokeCard">
  //       {/* <img className="hitImg" src ={pokemonImg}></img>  */}
  //   </div>
  //     );
  // }else{
  //   return (
  //     <div className="pokeCard">
  //       {/* <img className="missImg" src ={pokemonImg}></img>  */}
  //   </div>
  //     );
  // }
}
