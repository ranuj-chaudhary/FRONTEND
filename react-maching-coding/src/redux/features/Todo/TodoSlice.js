import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { encryptData } from './services/todoApi';
import axios from 'axios';
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
      const encriptedData = await encryptData(currentTodo.todo);

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

export const fetchUsers = createAsyncThunk(
  'todos/fetchusers',
  async function (_, { dispatch, getState }) {
    console.log('clicked');
    try {
      const { data } = await axios.get('https://dummyjson.com/todos');
      dispatch(setFetchedTodos(data.todos));
      return data.todos;
    } catch (error) {
      dispatch(todoError(error));
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
    status: 'idle',
  },
  reducers: {
    setFetchedTodos(state, action) {
      state.todos = action.payload;
    },
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  todoRecieved,
  todoDeleted,
  todoLoading,
  todoError,
  todoEncrypted,
  setFetchedTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
