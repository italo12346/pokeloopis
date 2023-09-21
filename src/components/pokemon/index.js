import React, { useEffect, useState, useRef } from "react";
import "./style.css";

export default function Pokemon({ pokemonType, pokemonIndex }) {
  function fixIndexValue(index) {
    if (index < 10) return '00' + index;
    if (index < 100) return '0' + index;
    return index;
  }

  const [showImg, setImg] = useState("missImg");
  const indexRef = useRef(pokemonIndex);

  useEffect(() => {
    let timeout;
    if (pokemonIndex !== indexRef.current) {
      setImg("show");
      indexRef.current = pokemonIndex;

      timeout = setTimeout(() => {
        setImg("missImg");
      }, 159); // Defina o tempo que desejar aqui em milissegundos (1 segundo no exemplo)
    }

    return () => clearTimeout(timeout);
  }, [pokemonIndex]);

  return (
    <div style={{ backgroundColor: pokemonType?.color }} className="pokeCard">
      {pokemonIndex !== undefined && (
        <img
          className={`${showImg}`}
          draggable="false"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fixIndexValue(pokemonIndex)}.png`}
        />
      )}
    </div>
  );
}
