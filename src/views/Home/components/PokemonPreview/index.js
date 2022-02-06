import Loading from "../../../../components/Loading";
import "./style.css";

export default function PokemonPreview({ name, sprites, loading }) {
  return loading ? (
    <Loading title="" />
  ) : (
    <div className="preview-container">
      <img
        className="preview-image"
        src={sprites ? sprites.front_default : "/pokeball.png"}
      />
    </div>
  );
}
