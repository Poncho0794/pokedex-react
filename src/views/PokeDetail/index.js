import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";

export default function PokeDetail() {
  const { id } = useParams();
  const { pokemonDetail, getPokemonDetail, isLoading } =
    useContext(PokemonContext);
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <h3 style={{ marginTop: 30, marginBottom: 5}}>General Info</h3>
      <p>{`Name: ${pokemonDetail?.name}`}</p>
      <p>{`weight: ${pokemonDetail?.weight} kg`}</p>
      <p>{`Heigth: ${pokemonDetail?.height} ft`}</p>
      <div>
        <h3 style={{ marginTop: 30, marginBottom: 5}}>Stats</h3>
        <PokeStats stats={pokemonDetail?.stats ?? []} />
      </div>
    </div>
  );
}
