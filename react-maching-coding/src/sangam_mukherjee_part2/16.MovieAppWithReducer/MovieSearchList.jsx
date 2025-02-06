import React from 'react';
import MovieList from './MovieList';

const MovieSearchList = ({ movieList }) => {
  return (
    <div className="movie_searchresult">
      <h2>Search Result</h2>
      <div className="movie__list">
        {movieList && movieList.length > 0 && (
          <MovieList movies={movieList} type={'searchList'} />
        )}
      </div>
    </div>
  );
};

export default MovieSearchList;
