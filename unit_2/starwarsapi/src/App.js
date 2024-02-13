import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllStarships } from './services/sw-api';
// import StarShipCard from './components/StarShipCard';
import Nav from './components/Nav';
import Ships from './pages/Ships';
import ShipDetails from './pages/ShipDetails';
// import './App.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then(data => {
      console.log(data);
      setStarships(data.results)
    });
  }, []);

  return (
    <div className="text-center">
    <Nav />
    {/* <Ships /> */}
     <Routes>
     <Route path="/" element={<Ships starships={starships} />} />
      <Route path="/starships/:starshipname" element={<ShipDetails  />} />
      
     </Routes>
    </div>
  );
}

export default App;
