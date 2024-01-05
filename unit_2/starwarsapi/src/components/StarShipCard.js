import { Link } from 'react-router-dom';
import ShipDetails from '../pages/ShipDetails';

export default function StarShipCard({starship}) {
    return (
        <div className="starship-card">
            <Link to={`/starships/${starship.name}`}>
            <h3>{starship?.name}</h3>
            <p>Model: {starship?.model}</p>
            <p>Manufacturer: {starship?.manufacturer}</p>
            </Link>
           
        </div>
    )
};