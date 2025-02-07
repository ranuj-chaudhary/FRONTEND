import React from 'react';
import './WatchList.css';
import MovieList from './MovieList';
import MovieItem from './MovieItem';

const WatchList = ({ watchlistMovies }) => {
  return (
    <div className="movie__watched">
      <h2>WatchList Movies</h2>
      {watchlistMovies && watchlistMovies.length > 0 && (
        <MovieList
          movies={watchlistMovies}
          type={'watchedList'}
          render={(movie) => (
            <MovieItem key={movie.id} movie={movie} type={'watchList'} />
          )}
        />
      )}
    </div>
  );
};

export default WatchList;
