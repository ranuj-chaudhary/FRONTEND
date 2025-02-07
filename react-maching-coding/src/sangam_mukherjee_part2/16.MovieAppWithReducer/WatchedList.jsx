import React from 'react';
import './WatchedList.css';
import MovieList from './MovieList';

import MovieItem from './MovieItem';

const WatchedList = ({ watchedMovies }) => {
  return (
    <div className="movie__watched">
      <h2>Watched Movies</h2>
      {watchedMovies && watchedMovies.length > 0 && (
        <MovieList
          movies={watchedMovies}
          type={'watchedList'}
          render={(movie) => (
            <MovieItem key={movie.id} movie={movie} type={'watchedList'} />
          )}
        />
      )}
    </div>
  );
};

export default WatchedList;
