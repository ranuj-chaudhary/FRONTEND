import React from 'react';
import './MovieList.css';
import { useMovieContext } from './context/MovieContext';

const MovieList = ({ movies, render }) => {
  const {
    handleAddWatchlist,
    handleDeleteWatchlist,
    handleAddWatched,
    handleDeleteWatched,
    handleMoveToWatched,
    handleMoveToWatchList,
    movieList,
  } = useMovieContext();

  function handleClick(event) {
    const movieId = Number(event.target.dataset.id);
    const movie = movieList.find((item) => item.id === movieId);

    if (event.target.id === 'add-watchlist') {
      handleAddWatchlist(movie);
    } else if (event.target.id === 'add-watched') {
      handleAddWatched(movie);
    } else if (event.target.id === 'delete-watchlist') {
      handleDeleteWatchlist(movieId);
    } else if (event.target.id === 'moveto-watched') {
      handleMoveToWatched(movie, movieId);
    } else if (event.target.id === 'delete-watched') {
      handleDeleteWatched(movieId);
    } else if (event.target.id === 'moveto-watchlist') {
      handleMoveToWatchList(movie, movieId);
    }
  }

  return (
    <div className="movie__list" onClick={handleClick}>
      {movies && movies.length > 0 && movies.map((movie) => render(movie))}
    </div>
  );
};

export default MovieList;
