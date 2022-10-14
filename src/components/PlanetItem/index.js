// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div>
      {/* <div testid="planets"> */}
      <h1>PLANETS</h1>
      {/* <img className="image" src={imageUrl} alt={`planet ${name}`} /> */}
      <img className="image" src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
