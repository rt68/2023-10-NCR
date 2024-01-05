
// import { useParams } from 'react-router-dom';

export default function ShipDetails({starship}) {
     
    return (
        <div className="shipdetails">
            <h3>{starship?.name}</h3>
            <p>Model: {starship?.model}</p>
            <p>Manufacturer: {starship?.manufacturer}</p>
            <p>Cost: {starship?.cost_in_credits}</p>
            <p>Length: {starship?.length}</p>
        </div>
    )
}