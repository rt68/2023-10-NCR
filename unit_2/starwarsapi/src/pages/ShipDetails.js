import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllStarships } from "../services/sw-api";
// import StarShipCard from "../components/StarShipCard";
export default function ShipDetails() {
  const { starshipId } = useParams(); // Adjust based on your URL param
  const [starship, setStarship] = useState(null);
  useEffect(() => {
    async function fetchStarship() {
      try {
        const data = await getAllStarships();
        // Assuming `data.results` contains the array of starships
        const specificStarship = data.results.find(
          (ship) => ship.id === starshipId
        ); // Adjust the condition based on your identifier
        setStarship(specificStarship);
      } catch (error) {
        console.error("Failed to fetch starship details:", error);
        // Handle error state
      }
    }

    fetchStarship();
  }, [starshipId]);

  return (
    <div className="shipdetails">
      {starship ? (
        // <StarShipCard starship={starship} />
        <>
          <h3>{starship?.name}</h3>
          <p>Model: {starship?.model}</p>
          <p>Manufacturer: {starship?.manufacturer}</p>
          <p>Cost: {starship?.cost_in_credits}</p>
          <p>Length: {starship?.length}</p>

        </>
      ) : (
        <p>Loading starship details...</p>
      )}
    </div>
  );
}
