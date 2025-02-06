import React from 'react';
import './MovieApp.css';
import { useMovieContext } from './context/MovieContext';
import MovieList from './MovieList';
import WatchedList from './WatchedList';
import WatchList from './WatchList';
import MovieSearchList from './MovieSearchList';
const MovieApp = () => {
  const {
    movieList,
    loading,
    error,
    watchlist,
    watched,
    handleAddWatchlist,
    handleDeleteWatchlist,
    handleAddWatched,
    handleDeleteWatched,
    queryParams,
    setQueryParams,
  } = useMovieContext();

  return (
    <div className="movie">
      <h1>Searched Movie list</h1>
      <div className="movie__search">
        <input
          className="movie__input"
          type="text"
          value={queryParams}
          onChange={(e) => {
            setQueryParams(e.target.value);
          }}
          name="search"
        />
        <button>Search</button>
      </div>
      <div className="movie__container">
        <MovieSearchList movieList={movieList} />
        <WatchList watchlistMovies={watchlist} />
        <WatchedList watchedMovies={watched} />
      </div>
    </div>
  );
};

export default MovieApp;
