import { useState } from "react";
import PokemonContext from ".";
import apiCall from "../../api";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      anErrorOccurred(false, "");
      const pokemonResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
      });
      setPokemons(pokemonResult.results);
    } catch (err) {
      setPokemons([]);
      anErrorOccurred(true, "Algo ha pasado, verifica tu conexion");
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) return Promise.reject("Id es requerido");
    try {
      setIsLoading(true);
      anErrorOccurred(false, "");
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetail);
    } catch (err) {
      setPokemonDetail({});
      anErrorOccurred(true, "Algo ha pasado, verifica tu conexion");
    } finally {
      setIsLoading(false);
    }
  };

  const anErrorOccurred = (hasError, message) => {
    setHasError(hasError);
    setErrorMessage(message);
  };
  return (
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        errorMessage,
        hasError,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
