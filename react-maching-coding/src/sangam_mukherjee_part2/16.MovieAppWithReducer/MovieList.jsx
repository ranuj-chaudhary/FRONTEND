import React from 'react';
import './MovieList.css';
import MovieItem from './MovieItem';
const MovieList = ({ movies, type }) => {
  return (
    <div className="movie__list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} type={type} />
      ))}
    </div>
  );
};

export default MovieList;
