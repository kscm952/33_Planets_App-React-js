// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <li className="planet-item">
      <>
        <img src={imageUrl} alt={`planet ${name}`} className="image" />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </>
    </li>
  )
}

export default PlanetItem
