import React, { useEffect, useState } from 'react';
import './DragAndDropFeature.css';

const DragAndDropFeature = () => {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchTodos() {
      setIsLoading(true);
      try {
        const res = await fetch('https://dummyjson.com/todos', {
          method: 'GET',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch details');
        }
        const data = await res.json();
        if (data && data.todos.length > 0) {
          // set todos
          const updatedTodos = data.todos.slice(0, 10).map((todo) => {
            return { ...todo, status: 'wip' };
          });
          setTodos(updatedTodos);
        }
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  function handleDragStart(event, id) {
    event.dataTransfer.setData('id', id);
  }

  function handleDrop(event, status) {
    const id = event.dataTransfer.getData('id');
    console.log(id, status);
    const updatedTodos = todos.map((todo) => {
      if (todo.id.toString() === id) {
        return {
          ...todo,
          status: status,
        };
      } else {
        return todo;
      }
    });
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  if (isLoading)
    return (
      <div className="isloading">
        <p>Loading todos..</p>
      </div>
    );
  if (errorMessage.length > 0)
    return (
      <div className="isloading">
        <p>{errorMessage}</p>
      </div>
    );

  //  apply filter based on typeof todo

  function renderTodos() {
    const tasks = {
      wip: [],
      complete: [],
    };

    todos.forEach((todo) => {
      tasks[todo.status].push(todo);
    });
    return tasks;
  }

  return (
    <div className="drag-drop-board">
      <div
        className="drag-drop-board__inprogress"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'wip')}
      >
        {renderTodos().wip.map((todo) => (
          <div
            className="todo"
            onDragStart={(e) => handleDragStart(e, todo.id)}
            key={todo.id}
            draggable={true}
          >
            <p>{todo.todo}</p>
          </div>
        ))}
      </div>
      <div
        className="drag-drop-board__complete"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'complete')}
      >
        {renderTodos().complete.map((todo) => (
          <div
            className="todo"
            onDragStart={(e) => handleDragStart(e, todo.id)}
            key={todo.id}
            draggable={true}
          >
            <p>{todo.todo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropFeature;
