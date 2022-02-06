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
    hasError,
    errorMessage,
    getPokemonDetail,
  } = usePokemonsStore((state) => state, shallow);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  if (hasError) return <ErrorMessage message={errorMessage} />;
  return (
    <div className="home-container">
      {isLoading ? (
        <Loading title="Cargando pokemon..." />
      ) : (
        <>
          <PokemonPreview />
          <PokemonList pokemons={pokemons} onPokemonSelect={getPokemonDetail} />
        </>
      )}
    </div>
  );
}
