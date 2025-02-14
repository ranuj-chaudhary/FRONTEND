import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { encryptTodoByIdAsyncThunk, todoDeleted } from './TodoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  return (
    <div key={todo.id} style={{ border: '2px solid black' }}>
      {loading ? <p>Encripting data Please wait...</p> : <p>{todo.content}</p>}
      <button onClick={() => dispatch(todoDeleted({ id: todo.id }))}>
        Delete Todo
      </button>
      <button onClick={() => dispatch(encryptTodoByIdAsyncThunk(todo.id))}>
        Encript Todo
      </button>
    </div>
  );
};

export default TodoItem;
