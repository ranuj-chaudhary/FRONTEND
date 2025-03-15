import React from 'react';

// custom hooks
import { useMovieContext } from './context/MovieContext';

// components
import WatchedList from './WatchedList';
import WatchList from './WatchList';
import MovieSearchList from './MovieSearchList';
import MovieSearchBar from './MovieSearchBar';

// css
import './MovieApp.css';

const MovieApp = () => {
  const { movieList, queryParams, setQueryParams, state } = useMovieContext();
 
  return (
    <div className="movie">
      <h1>Searched Movie list</h1>
      <MovieSearchBar query={queryParams} setState={setQueryParams} />
      <div className="movie__container">
        <MovieSearchList movieList={movieList} />
        <WatchList watchlistMovies={state.watchlist} />
        <WatchedList watchedMovies={state.watched} />
      </div>
    </div>
  );
};

export default MovieApp;
