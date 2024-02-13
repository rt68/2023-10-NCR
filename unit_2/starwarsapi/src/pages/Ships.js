import React from 'react'
import StarShipCard from '../components/StarShipCard'
function Ships({starships}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 p-5 bg-[#f4f4f4]">
    {starships.map(starship => (
     <StarShipCard key={starship.name} starship={starship} />
    ))}
    </div>
  )
}

export default Ships