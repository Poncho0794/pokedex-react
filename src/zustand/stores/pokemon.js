import create from "zustand";
import apiCall from "../../api";
import { CacheProxy } from "../../api/CacheProxy";

const usePokemonsStore = create((set, get) => ({
  getPokemons: async () => {
    try {
      set({ hasError: false, errorMessage: "", isLoading: true });
      const pokemonResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
      });
      set({ isLoading: false, pokemons: pokemonResult.results });
    } catch (error) {
      set({
        isLoading: false,
        pokemons: [],
        hasError: true,
        errorMessage: "Algo ha pasado, verifica tu conexion",
      });
    }
  },
  pokemons: [],
  getPokemonDetail: async (id) => {
    const proxy = new CacheProxy();
    if (!id) return Promise.reject("Id es requerido");
    try {
      set({ hasError: false, errorMessage: "", isLoadingDetail: true });
      const pokemonDetail = await proxy.getPokemon(id, apiCall, `https://pokeapi.co/api/v2/pokemon/${id}`)
      set({ pokemonDetail, isLoadingDetail: false });
    } catch (error) {
      set({
        isLoadingDetail: false,
        pokemonDetail: {},
        hasError: true,
        errorMessage: "Algo ha pasado, verifica tu conexion",
      });
    }
  },
  pokemonDetail: {},
  isLoading: false,
  errorMessage: "",
  hasError: false,
}));

export default usePokemonsStore;
