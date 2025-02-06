import React from 'react';
import './WatchedList.css';
import MovieList from './MovieList';
import { useMovieContext } from './context/MovieContext';

const WatchedList = ({ watchedMovies }) => {
  return (
    <div className="movie__watched">
      <h2>Watched Movies</h2>
      {watchedMovies && watchedMovies.length > 0 && (
        <MovieList movies={watchedMovies} type={"watchedList"}/>
      )}
    </div>
  );
};

export default WatchedList;
