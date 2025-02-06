import React from 'react';
import './WatchList.css';
import MovieList from './MovieList';
import { useMovieContext } from './context/MovieContext';

const WatchList = ({ watchlistMovies }) => {
  return (
    <div className="movie__watched">
      <h2>WatchList Movies</h2>
      {watchlistMovies && watchlistMovies.length > 0 && (
        <MovieList movies={watchlistMovies} type={'watchList'} />
      )}
    </div>
  );
};

export default WatchList;
