import { useState } from "react";
import PokemonContext from ".";
import apiCall from "../../api";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getPokemons = async () => {
    try {
      setIsLoading(true);
      const pokemonResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
      });
      setPokemons(pokemonResult.results);
    } catch (err) {
      setPokemons([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) return Promise.reject("Id es requerido");
    try {
      setIsLoading(true);
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetail);
    } catch (err) {
      setPokemonDetail({});
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PokemonContext.Provider
      value={{ getPokemons, pokemons, getPokemonDetail, pokemonDetail, isLoading }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
