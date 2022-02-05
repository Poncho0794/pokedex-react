import { Link } from "react-router-dom";
import { getPokemonIdFromUrl } from '../../../utils'

export default function PokemonListItem({ pokemon: { name, url}, onSelect }) {
  const id = getPokemonIdFromUrl(url)
    return (
    <>
      <p>{name}</p>
      <button onClick={() => onSelect(id)}>Select Pokemon</button>
      <button>
        <Link to={`/pokemon/${id}`}>Ver detalle</Link>
      </button>
    </>
  );
}
