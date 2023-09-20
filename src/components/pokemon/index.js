import { useEffect } from "react";
import "./style.css";

export default function Pokemon ({pokemonData, pokemonIndex}) {

  function fixIndexValue (index) {
    if (index < 10) return '00' + index;
    if (index < 100) return '0' + index;
    return index;
  }

  return (

    <div className="pokeCard">
           { <img className="missImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fixIndexValue(pokemonIndex)}.png`}></img>}
       </div>
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
