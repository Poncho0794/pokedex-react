import { Link } from "react-router-dom";
import { getPokemonIdFromUrl } from "../../../../utils";
import "./style.css";
export default function PokemonListItem({
  pokemon: { name, url },
  onSelect,
  active,
}) {
  const id = getPokemonIdFromUrl(url);
  return (
    <div
      className={
        active ? "pokelist_item-container-active" : "pokelist_item-container"
      }
      onClick={() => onSelect(id, name)}
    >
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${id}`}>Ver detalle</Link>
      </button>
    </div>
  );
}
