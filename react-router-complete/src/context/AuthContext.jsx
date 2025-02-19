import { createContext, useContext, useReducer } from 'react';
import { AUTH_ERROR, AUTH_LOGIN, AUTH_STATUS, AUTH_LOGOUT } from '../constants';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  status: '',
  error: '',
};

const authReducer = function (state, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case AUTH_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

const AuthContextProvider = function ({ children }) {
  const [{ isAuthenticated, error, status }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, error, status, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const authLogin = function (isAuthenticated) {
  return {
    type: AUTH_LOGIN,
    payload: isAuthenticated,
  };
};
export const authError = function (error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};
export const authStatus = function (status) {
  return {
    type: AUTH_STATUS,
    payload: status,
  };
};
export const logout = function (logout) {
  return {
    type: AUTH_LOGOUT,
    payload: logout,
  };
};

function useAuthContext() {
  const authContext = useContext(AuthContext);
  if (authContext === undefined)
    throw Error('Context outside the auth context');

  return authContext;
}
export { useAuthContext, AuthContextProvider };
