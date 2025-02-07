import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

// types
import {
  ADD_WATCHED,
  ADD_WATCHLIST,
  DELETE_WATCHED,
  DELETE_WATCHLIST,
} from './types.mjs';

// custom hook
import useDebounce from '../hooks/useDebounce';
import movieReducer from './reducer.js';

// api key and token
const BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTYxZDM5NDAxOGU1Y2M4NjgxMDE3NjUzMDk2NmZjMyIsIm5iZiI6MTczODg1MzYwOC42NjksInN1YiI6IjY3YTRjY2U4NDUwMWIyZjIzMzY2ZWFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uwm0Vnivpr-Xt4FfxpiRuNd_lor_pFsYYlNetZGy5rE';

// 1) CREATE MOVIE CONTEXT
const MovieContext = createContext(null);

const initialState = {
  watchlist: JSON.parse(localStorage.getItem('watchlist')) || [],
  watched: JSON.parse(localStorage.getItem('watched')) || [],
};

// 2) Movie Context Provider
function MovieProvider({ children }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [queryParams, setQueryParams] = useState('');

  const useDebounceParamSearch = useDebounce(queryParams, 500);

  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: BEARER_TOKEN,
      },
    };

    (async function () {
      if (useDebounceParamSearch.length === 0) return;
      setLoading(true);
      setError('');
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${useDebounceParamSearch}&include_adult=true&language=en-US&page=1`,
          options
        );

        if (!res.ok) {
          throw new Error('Problem fetching movie data', res.status);
        }

        const movies = await res.json();

        if (movies && movies.results.length > 0) {
          setMovieList(movies.results.slice(0, 20));
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [useDebounceParamSearch]);

  // set local storage
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  function handleAddWatchlist(movie) {
    const index = state.watchlist.findIndex((ele) => ele.id === movie.id);
    if (index === -1) {
      dispatch({ type: ADD_WATCHLIST, payload: movie });
    } else {
      alert(`Movie exist in watchlist`);
    }
  }

  function handleDeleteWatchlist(id) {
    dispatch({ type: DELETE_WATCHLIST, payload: { id } });
  }

  function handleAddWatched(movie) {
    const index = state.watched.findIndex((ele) => ele.id === movie.id);
    if (index === -1) {
      dispatch({ type: ADD_WATCHED, payload: movie });
    } else {
      alert(`Movie exist in watched list`);
    }
  }

  function handleDeleteWatched(id) {
    dispatch({ type: DELETE_WATCHED, payload: { id } });
  }

  function handleMoveToWatched(movie, id) {
    handleAddWatched(movie);
    handleDeleteWatchlist(id);
  }
  function handleMoveToWatchList(movie, id) {
    handleAddWatchlist(movie);
    handleDeleteWatched(id);
  }
  return (
    <MovieContext.Provider
      value={{
        movieList,
        loading,
        error,
        state,
        handleAddWatchlist,
        handleDeleteWatchlist,
        handleAddWatched,
        handleDeleteWatched,
        queryParams,
        setQueryParams,
        handleMoveToWatched,
        handleMoveToWatchList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
// 3) Custom Hook for context
function useMovieContext() {
  const context = useContext(MovieContext);
  if (!context) {
    throw Error('Context in outside the MovieContext Provider.');
  }
  return context;
}

export { useMovieContext, MovieProvider };
