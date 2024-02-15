// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getAllStarships } from '../services/sw-api'; // Adjust based on actual data fetching method

function ShipDetails({starships}) {
  const { index } = useParams(); 
  const starshipIndex = parseInt(index, 10);
  const starship = starships[starshipIndex];
  // Check if index is within the array bounds
  if (starshipIndex < 0 || starshipIndex >= starships.length) {
    return <div>Starship not found. Please select a valid starship.</div>;
  }

  if (!starship) return <div>Loading...</div>;

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <p>Consumables: {starship.consumables}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <p>MGLT: {starship.MGLT}</p>
      <p>Starship Class: {starship.starship_class}</p>
      
    </div>
  );
}

export default ShipDetails;
