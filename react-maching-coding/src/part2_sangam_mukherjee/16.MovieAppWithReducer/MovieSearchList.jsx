import React from 'react';
import MovieList from './MovieList';
import MovieItem from './MovieItem';

const MovieSearchList = ({ movieList }) => {
  return (
    <div className="movie_searchresult">
      <h2>Search Result</h2>
      <div className="movie__list">
        {movieList && movieList.length > 0 && (
          <MovieList
            movies={movieList}
            type={'searchList'}
            render={(movie) => (
              <MovieItem key={movie.id} movie={movie} type={'searchList'} />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default MovieSearchList;
