import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import usePokemonsStore from "../../zustand/stores/pokemon";
import PokemonList from "./components/PokemonList";
import PokemonPreview from "./components/PokemonPreview";
import shallow from "zustand/shallow";
import "./style.css";
export default function Home() {
  const {
    getPokemons,
    pokemons,
    isLoading,
    isLoadingDetail,
    hasError,
    errorMessage,
    getPokemonDetail,
    pokemonDetail,
  } = usePokemonsStore((state) => state, shallow);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  if (hasError) return <ErrorMessage message={errorMessage} />;
  console.log(pokemonDetail);
  return (
    <div className="home-container">
      {isLoading ? (
        <Loading title="Cargando pokemon..." />
      ) : (
        <>
          <PokemonPreview {...pokemonDetail} loading={isLoadingDetail}/>
          <PokemonList pokemons={pokemons} onPokemonSelect={getPokemonDetail} />
        </>
      )}
    </div>
  );
}
