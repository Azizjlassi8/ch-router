import React from 'react'
import Moviecard from '../MovieCard/Moviecard'
import "./MovieList.css";


const MovieList = ({ movies, inputSearch, rating  }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <div className='movies'>
      {movies
      .filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase())
      &&
      movie.rate >= rating
      )
      .map((movie) => (
      <Moviecard movie={movie} key= {movie.id} />
      ))}
      </div>
    </div>
  )
}

export default MovieList;
