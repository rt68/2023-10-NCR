import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { getAllStarships } from "./services/sw-api";
import Nav from "./components/Nav";
// import StarShipCard from "./components/StarShipCard";
import Ships from "./pages/Ships";
import ShipDetails from "./pages/ShipDetails";
// Wrapper component for ShipDetails to pass props
function ShipDetailsWrapper({ starships }) {
  return <ShipDetails starships={starships} />;
}

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchStarships = async (url) => {
    setLoading(true);
    const data = await getAllStarships(url);
    setStarships(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  };
  useEffect(() => {
    fetchStarships();
    // console.log(starships)
  }, []);

  const handlePagination = (url) => {
    if (url) fetchStarships(url);
  };

  if (loading) return <div>Loading...</div>;
  // useEffect(() => {
  //   getAllStarships().then(data => {
  //     console.log(data.results);
  //     setStarships(data.results)
  //   })
  // }, [])

  return (
    <div className="text-center">
      <Nav />
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 p-5 bg-[#f4f4f4]">
        {starships.map((starship, index) => (
          <StarShipCard key={index} starship={starship} index={index}/>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {prevPage && (
          <button onClick={() => handlePagination(prevPage)}>Previous</button>
        )}
        {nextPage && (
          <button onClick={() => handlePagination(nextPage)}>Next</button>
        )}
      </div> */}
      <Routes>
        <Route
          path="/ships"
          element={
            <Ships
              starships={starships}
              nextPage={nextPage}
              prevPage={prevPage}
              handlePagination={handlePagination}
            />
          }
        />
        <Route
          path="/ships/:index"
          element={<ShipDetailsWrapper starships={starships} />}
        />
      </Routes>
    </div>
  );
}

export default App;
