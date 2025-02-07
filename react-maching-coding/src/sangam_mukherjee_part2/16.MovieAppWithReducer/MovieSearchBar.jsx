import React from 'react';
import './MovieSearchBar.css';
const MovieSearchBar = ({ query, setState }) => {
  return (
    <div className="movie__search">
      <input
        className="movie__input"
        type="text"
        value={query}
        onChange={(e) => {
          setState(e.target.value);
        }}
        name="search"
        placeholder="search your favourite movie"
        autoFocus
      />
    </div>
  );
};

export default MovieSearchBar;
