import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import usePokemonsStore from "../../zustand/stores/pokemon";
import PokemonList from "./components/PokemonList";
import shallow from "zustand/shallow";

export default function Home() {
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    usePokemonsStore((state) => state, shallow);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  if (isLoading) return <Loading title="Cargando pokemon..." />;
  return hasError ? (
    <ErrorMessage message={errorMessage} />
  ) : (
    <PokemonList pokemons={pokemons} />
  );
}
