import PokemonListItem from "./PokemonListItem";

export default function PokemonList({ pokemons, onPokemonSelect }) {
  return (
    <div style={{ flexDirection: 'column'}}>
      {pokemons?.map((pokemon, index) => (
        <PokemonListItem key={index} pokemon={ pokemon } onSelect={onPokemonSelect} />
      ))}
    </div>
  );
}
