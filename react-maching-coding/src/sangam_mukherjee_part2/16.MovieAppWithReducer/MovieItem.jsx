import React from 'react';
import './MovieItem.css';

const MovieItem = ({ movie, type }) => {
  const { original_title: title, id } = movie;

  if (type === 'searchList') {
    return (
      <div className="movie__item">
        <p>{title}</p>
        <div className="movie__actions">
          <button data-id={`${id}`} id="add-watchlist">
            Add To WatchList
          </button>
          <button data-id={`${id}`} id="add-watched">
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
          <button data-id={`${id}`} id="delete-watchlist">
            Remove WatchList
          </button>
          <button data-id={`${id}`} id="moveto-watched">
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
          <button data-id={`${id}`} id="delete-watched">
            Remove Watched
          </button>
          <button data-id={`${id}`} id="moveto-watchlist">
            Move To WatchList
          </button>
        </div>
      </div>
    );
  }
};

export default MovieItem;
