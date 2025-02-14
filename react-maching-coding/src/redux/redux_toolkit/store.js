import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer/rootReducer';
import todoReducer from '../features/Todo/TodoSlice';
// const rootReducer = combineReducers({
//   todo: userReducer,
// });
const store = configureStore({
  reducer: rootReducer,
});

export default store;
