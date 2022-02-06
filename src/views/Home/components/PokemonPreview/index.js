import Loading from "../../../../components/Loading";
import usePokemonsStore from "../../../../zustand/stores/pokemon";
import shallow from "zustand/shallow";

import "./style.css";

export default function PokemonPreview() {
  const {
    isLoadingDetail,
    pokemonDetail,
  } = usePokemonsStore((state) => state, shallow);
  const { name, sprites } = pokemonDetail
  return (
    <div className="preview-container">
      {isLoadingDetail ? (
        <Loading title="Cargando..." />
      ) : (
        <img
          className="preview-image"
          src={sprites ? sprites.front_default : "/pokeball.png"}
        />
      )}
    </div>
  );
}
