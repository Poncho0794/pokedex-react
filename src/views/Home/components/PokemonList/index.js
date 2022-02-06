import PokemonListItem from "./PokemonListItem";
import './style.css'
export default function PokemonList({ pokemons, onPokemonSelect }) {
  return (
    <div className="pokelist-container">
      {pokemons?.map((pokemon, index) => (
        <PokemonListItem key={index} pokemon={ pokemon } onSelect={onPokemonSelect} />
      ))}
    </div>
  );
}
