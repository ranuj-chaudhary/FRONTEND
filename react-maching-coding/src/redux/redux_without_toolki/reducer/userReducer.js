const initialState = {
  username: '',
  email: '',
  todos: [],
  loading: false,
  error: '',
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const ENCRYPT_TODO = 'ENCRYPT_TODO';
const ERROR_TODO = 'ERROR_TODO';
const LOADING_TODO = 'LOADING_TODO';

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ERROR_TODO:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };
    case ENCRYPT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                content: action.payload.encriptedData,
              };
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
}

// action creaters

function loadingTodo(value) {
  return {
    type: LOADING_TODO,
    payload: value,
  };
}

export function addTodo(user) {
  return {
    type: ADD_TODO,
    payload: user,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
}

export function encryptTodoWithId(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(loadingTodo(true));
      dispatch(handleError(''));

      const state = getState();

      const currentTodo = state.todo.todos.find((todo) => todo.id === id);
      if (!currentTodo) {
        throw new Error('no currenttodo found');
      }
      // 1 Encript data
      const encriptedData = await encryptData(currentTodo.content);
     
      // 2 Dipatch action with encripted todo
      dispatch(encryptTodo(id, encriptedData));

      dispatch(loadingTodo(false));
    } catch (error) {
      console.error(error);
      dispatch(handleError(error.message));
      dispatch(loadingTodo(false));
    }
  };
}

// Encript data with bcrypt
function encryptData(data) {
  let hashedValue = '';
  for (let i = 0; i < data.length; i++) {
    hashedValue += data.charCodeAt(i);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(hashedValue);
    }, 500);
  });
}

function encryptTodo(id, encriptedData) {
  return {
    type: ENCRYPT_TODO,
    payload: { id, encriptedData },
  };
}

function handleError(error) {
  return {
    type: ERROR_TODO,
    payload: error,
  };
}
