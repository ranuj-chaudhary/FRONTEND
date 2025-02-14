import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { encryptData } from './services/todoApi';

export const encryptTodoByIdAsyncThunk = createAsyncThunk(
  'todos/todoEncrypted',
  async function (id, { dispatch, getState }) {
    try {
      dispatch(todoLoading(true));
      dispatch(todoError(''));

      const state = getState();
      const currentTodo = state.todos.todos.find((todo) => todo.id === id);
      if (!currentTodo) {
        throw new Error('no currenttodo found');
      }
      // 1 Encript data
      const encriptedData = await encryptData(currentTodo.content);
      console.log(encriptedData);
      // 2 Dipatch action with encripted todo
      dispatch(todoEncrypted(currentTodo.id, encriptedData));

      dispatch(todoLoading(false));
    } catch (error) {
      console.error(error.message);
      dispatch(todoError(error.message));
      dispatch(todoLoading(false));
    }
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    username: '',
    email: '',
    todos: [],
    loading: '',
    error: '',
  },
  reducers: {
    todoRecieved(state, action) {
      state.todos.push(action.payload);
    },
    todoDeleted(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    todoError(state, action) {
      state.error = action.payload;
    },
    todoLoading(state, action) {
      state.loading = action.payload;
    },
    todoEncrypted: {
      prepare(id, encryptedData) {
        return {
          id,
          encryptedData,
        };
      },
      reducer(state, action) {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              content: action.payload.encriptedData,
            };
          }
          return todo;
        });
      },
    },
  },
});

export const {
  todoRecieved,
  todoDeleted,
  todoLoading,
  todoError,
  todoEncrypted,
} = todosSlice.actions;

export default todosSlice.reducer;
