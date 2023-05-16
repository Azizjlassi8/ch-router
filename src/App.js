import React, { useState } from "react";
import "./App.css";
import MovieList from "./Component/MovieList/MovieList";
import { moviesData } from "./Constant/Data";
import AddMovie from "./Component/AddMovie/AddMovie";
import FilterByName from "./Component/FilterByName/FilterByName";
import FilterByRate from './Component/Rating/Rating'

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <h1>Movie app</h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}  />
      <FilterByRate rating={rating} setRating={setRating} isMovieRating={false} />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
    </div>
  );
}

export default App;
