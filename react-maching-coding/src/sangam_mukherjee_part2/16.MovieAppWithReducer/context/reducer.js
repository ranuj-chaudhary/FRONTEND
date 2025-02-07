// types
// types
import {
  ADD_WATCHED,
  ADD_WATCHLIST,
  DELETE_WATCHED,
  DELETE_WATCHLIST,
} from './types.mjs';

const movieReducer = function (state, action) {
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

export default movieReducer;
