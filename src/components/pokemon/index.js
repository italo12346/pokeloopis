import React from "react";
import "./style.css";

function fixIndexValue(index) {
  if (index < 10) return '00' + index;
  if (index < 100) return '0' + index;
  return index;
}

export default function Pokemon({ pokemonType, pokemonIndex, showPokemon }) {
  const isRevealed = showPokemon !== "brightness(0)";

  return (
    <div
      style={{
        '--type-color': pokemonType?.color
          ? pokemonType.color + '55'
          : 'rgba(255,45,85,0.2)',
        background: pokemonType?.color
          ? `radial-gradient(ellipse at center, ${pokemonType.color}18 0%, rgba(255,255,255,0.03) 70%)`
          : 'rgba(255,255,255,0.04)',
      }}
      className="pokeCard"
    >
      {/* Pokeball watermark */}
      <svg className="pokeball-bg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="6" fill="none"/>
        <line x1="5" y1="100" x2="195" y2="100" stroke="white" strokeWidth="6"/>
        <circle cx="100" cy="100" r="28" stroke="white" strokeWidth="6" fill="none"/>
        <circle cx="100" cy="100" r="14" fill="white"/>
      </svg>

      {pokemonIndex !== undefined && (
        <img
          style={{ filter: showPokemon }}
          className={isRevealed ? 'revealed' : ''}
          draggable="false"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fixIndexValue(pokemonIndex)}.png`}
          alt="pokemon"
        />
      )}

      <div className="poke-shadow" style={{ opacity: isRevealed ? 1 : 0.3 }} />
    </div>
  );
}