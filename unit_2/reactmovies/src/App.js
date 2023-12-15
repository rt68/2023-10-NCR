import {useState, useEffect} from "react";

import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  //variable with your apiKey
  const apiKey = "434b8c69";

  //State to hold movie data
  const [movie, setMovie] = useState({});

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  } catch(e){
		console.error(e)
  }
  };
//This will run on the first render but not on subsquent renders
useEffect(() => {
  const movies = ['Donnie Darko', 'Princess Mononoke', 'I, robot', 'Eternal Sunshine of the Spotless Mind', 'The Knight Before Christmas', 'Home Alone']
  getMovie(movies[Math.floor(Math.random() * movies.length)]);
}, []);
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

