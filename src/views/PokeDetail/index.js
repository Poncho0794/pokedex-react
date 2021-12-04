import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

import PokeStats from "./components/PokeStats";
import usePokemonsStore from "../../zustand/stores/pokemon";

export default function PokeDetail() {
  const { id } = useParams();
  const { pokemonDetail, getPokemonDetail, isLoading, hasError, errorMessage } =
  usePokemonsStore(state => state);
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
