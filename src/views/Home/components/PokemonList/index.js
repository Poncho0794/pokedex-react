import { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";
import { getPokemonIdFromUrl } from "../../../../utils";
import "./style.css";

export default function PokemonList({ pokemons, onPokemonSelect }) {
  const [pokemonSelected, setPokemonSelected] = useState("");
  const handleOnSelect = (id, name) => {
    setPokemonSelected(name);
    onPokemonSelect(id);
  };
  const handleOnKeyDown = (e) => {
    
    const currentSelected = pokemons.findIndex(
      (pokemon) => pokemon.name === pokemonSelected
    );
    if(currentSelected <= 3 || currentSelected >= pokemons.length - 4) e.preventDefault();
    let nextPokemon;
    if (e.keyCode === 38) {
      const nextIndex = currentSelected <= 0 ? 0 : currentSelected - 1;
      nextPokemon = pokemons[nextIndex];
    } else if (e.keyCode === 40) {
      const nextIndex =
        currentSelected >= pokemons.length - 1
          ? pokemons.length - 1
          : currentSelected + 1;
      nextPokemon = pokemons[nextIndex];
    } else return;
    const nextPokemonId = getPokemonIdFromUrl(nextPokemon.url);
    setPokemonSelected(nextPokemon.name);
    onPokemonSelect(nextPokemonId);
  };

  return (
    <div
      className="pokelist-container "
      onKeyDown={handleOnKeyDown}
      tabIndex="0"
    >
      {pokemons?.map((pokemon, index) => (
        <PokemonListItem
          key={index}
          pokemon={pokemon}
          onSelect={handleOnSelect}
          active={pokemonSelected === pokemon.name}
        />
      ))}
    </div>
  );
}
