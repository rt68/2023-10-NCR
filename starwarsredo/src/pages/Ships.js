
import StarShipCard from "../components/StarShipCard";

const Ships = ({ starships, nextPage, prevPage, handlePagination }) => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 p-5 bg-[#f4f4f4]">
        {starships.map((starship, index) => (
          <StarShipCard key={index} starship={starship} index={index} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {prevPage && (
          <button onClick={() => handlePagination(prevPage)}>Previous</button>
        )}
        {nextPage && (
          <button onClick={() => handlePagination(nextPage)}>Next</button>
        )}
      </div>
    </>
  );
};

export default Ships;
