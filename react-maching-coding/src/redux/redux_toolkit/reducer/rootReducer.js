import { combineReducers } from 'redux';
import todoReducer from '../../features/Todo/TodoSlice';

export const rootReducer = combineReducers({
  todos: todoReducer,
});


