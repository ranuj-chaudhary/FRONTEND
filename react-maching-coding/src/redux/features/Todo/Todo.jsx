// hooks
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { todoRecieved } from './TodoSlice';
import { fetchUsers } from './TodoSlice';
// components
import TodoItem from './TodoItem';

// css
import './Todo.css';

// helper package
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [content, setContent] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      todoRecieved({
        id: uuidv4(),
        todo: content,
      })
    );
  }

  return (
    <div className="todo-app">
      <h1>Add Todo App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="todo-input">Add todo do add</label>
        <input
          id="todo-input"
          type="text"
          value={content}
          name="todo-input"
          onClick={(e) => {
            setContent(e.target.value);
          }}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Todo</button>
      {todos && todos.length > 0
        ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : null}
    </div>
  );
}

export default Todo;
