import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import useDebounce from '../hooks/useDebounce';

const BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTYxZDM5NDAxOGU1Y2M4NjgxMDE3NjUzMDk2NmZjMyIsIm5iZiI6MTczODg1MzYwOC42NjksInN1YiI6IjY3YTRjY2U4NDUwMWIyZjIzMzY2ZWFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uwm0Vnivpr-Xt4FfxpiRuNd_lor_pFsYYlNetZGy5rE';
// const API_KEY = '9961d394018e5cc86810176530966fc3';

const ADD_WATCHLIST = 'ADD_WATCHLIST';
const DELETE_WATCHLIST = 'DELETE_WATCHLIST';
const ADD_WATCHED = 'ADD_WATCHED';
const DELETE_WATCHED = 'DELETE_WATCHED';

const MovieContext = createContext(null);

const initialState = {
  watchlist: [],
  watched: [],
};

const movieReducer = function (state, action) {
  console.log(action)
  switch (action.type) {
    case ADD_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case DELETE_WATCHLIST:
      return {
        ...state,
        watchlist: [
          ...state.watchlist.filter((movie) => movie.id !== action.payload.id),
        ],
      };
    case ADD_WATCHED:
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    case DELETE_WATCHED:
      return {
        ...state,
        watched: [
          ...state.watched.filter((movie) => movie.id !== action.payload.id),
        ],
      };

    default:
      return state;
  }
};

function MovieProvider({ children }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [queryParams, setQueryParams] = useState('');

  const useDebounceParamSearch = useDebounce(queryParams, 500);
  console.log(useDebounceParamSearch);

  const [{ watched, watchlist }, dispatch] = useReducer(
    movieReducer,
    initialState
  );

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

  function handleAddWatchlist(movie) {
    dispatch({ type: ADD_WATCHLIST, payload: movie });
  }
  function handleDeleteWatchlist(id) {
    dispatch({ type: DELETE_WATCHLIST, payload: { id } });
  }

  function handleAddWatched(movie) {
    dispatch({ type: ADD_WATCHED, payload: movie });
  }

  function handleDeleteWatched(id) {
    dispatch({ type: DELETE_WATCHED, payload: { id } });
  }

  function handleMoveToWatched(movie, id){
    handleAddWatched(movie)
    handleDeleteWatchlist(id)
  }
  function handleMoveToWatchList(movie, id){
    handleAddWatchlist(movie)
    handleDeleteWatched(id)
  }
  return (
    <MovieContext.Provider
      value={{
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
        handleMoveToWatched,
        handleMoveToWatchList

      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovieContext() {
  const context = useContext(MovieContext);
  if (!context) {
    throw Error('context not found');
  }
  return context;
}

export { useMovieContext, MovieProvider };
