import { Link } from 'react-router-dom';


export default function StarShipCard({starship, index}) {
    return (
        <div className="bg-[#4d7c8a] text-white p-5 rounded-lg flex justify-center items-center text-xl uppercase">
            <Link to={`/ships/${index}`} >
            <h3>{starship?.name}</h3>
         
            </Link>
           
        </div>
    )
};