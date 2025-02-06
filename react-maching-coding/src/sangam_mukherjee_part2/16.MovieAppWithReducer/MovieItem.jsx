import React from 'react';
import './MovieItem.css';
import { useMovieContext } from './context/MovieContext';
const MovieItem = ({ movie, type }) => {
  const { original_title: title, id } = movie;
  const {
    handleAddWatchlist,
    handleDeleteWatchlist,
    handleAddWatched,
    handleDeleteWatched,
    handleMoveToWatched,
    handleMoveToWatchList,
  } = useMovieContext();

  if (type === 'searchList') {
    return (
      <div className="movie__item">
        <p>{title}</p>
        <div className="movie__actions">
          <button onClick={() => handleAddWatchlist(movie)}>
            Add To WatchList
          </button>{' '}
          <button onClick={() => handleAddWatched(movie)}>
            Add To Watched
          </button>
        </div>
      </div>
    );
  }
  if (type === 'watchList') {
    return (
      <div className="movie__item">
        <p>{title}</p>
        <div className="movie__actions">
          <button onClick={() => handleDeleteWatchlist(id)}>
            Remove WatchList
          </button>
          <button onClick={() => handleMoveToWatched(movie, id)}>
            Move To Watched
          </button>
        </div>
      </div>
    );
  }
  if (type === 'watchedList') {
    return (
      <div className="movie__item">
        <p>{title}</p>
        <div className="movie__actions">
          <button onClick={() => handleDeleteWatched(id)}>
            Remove Watched
          </button>{' '}
          <button onClick={() => handleMoveToWatchList(movie, id)}>
            Move To WatchList
          </button>
        </div>
      </div>
    );
  }
};

export default MovieItem;
