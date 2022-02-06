import './style.css'
export default function Loading({ title }) {
  return (
    <div className='loading-container'>
      <img className="loading-pokeball" src="/pokeball.png" />
      <p>{title}</p>
    </div>
  )
}