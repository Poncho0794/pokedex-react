import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import usePokemonsStore from "../../zustand/stores/pokemon";
import PokemonList from "./components/PokemonList";
import PokemonPreview from "./components/PokemonPreview";
import shallow from "zustand/shallow";

export default function Home() {
  const { getPokemons, pokemons, isLoading, hasError, errorMessage, getPokemonDetail, pokemonDetail } =
    usePokemonsStore((state) => state, shallow);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  if (isLoading) return <Loading title="Cargando pokemon..." />;
  console.log(pokemonDetail)
  return hasError ? (
    <ErrorMessage message={errorMessage} />
  ) : (
    <div style={{display: "flex"}}>
      <PokemonPreview {...pokemonDetail} />
      <PokemonList pokemons={pokemons} onPokemonSelect={getPokemonDetail}/>
      
    </div>
    
  );
}
