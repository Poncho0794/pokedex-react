import './style.css'

export default function PokemonPreview({ name, sprites }) {
  return <div className="preview-container">
    <img className="preview-image" src={sprites ? sprites.front_default : ""}/>
    </div>
}