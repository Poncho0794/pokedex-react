import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import ErrorMessage from '../../components/ErrorMessage'
export default function PokeDetail() {
  const { id } = useParams();
  const { pokemonDetail, getPokemonDetail, isLoading, hasError, errorMessage } =
    useContext(PokemonContext);
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);
  if (isLoading) return <Loading title="Cargando pokemon..." />;
  return (
    <div>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <h3 style={{ marginTop: 30, marginBottom: 5 }}>General Info</h3>
          <p>{`Name: ${pokemonDetail?.name}`}</p>
          <p>{`weight: ${pokemonDetail?.weight} kg`}</p>
          <p>{`Heigth: ${pokemonDetail?.height} ft`}</p>
          <div>
            <h3 style={{ marginTop: 30, marginBottom: 5 }}>Stats</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []} />
          </div>
        </>
      )}
    </div>
  );
}
