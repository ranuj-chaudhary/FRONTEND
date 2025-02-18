import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { authLogin, authError } from '../context/AuthContext';
import { validateUser } from '../services/loginApi';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch, isAuthenticated, error } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isAuthenticated)
      navigate(
        location.state?.from || '/dashboard',
        { state: { auth: isAuthenticated } },
        { replace: true }
      );
  }, [isAuthenticated]);

  async function fetchUserAuth() {
    try {
      const authStatus = await validateUser(username, password);

      if (authStatus && authStatus.isAuthenticated) {
        dispatch(authLogin(authStatus.isAuthenticated));
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      dispatch(authError(error.message));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username && password) {
      fetchUserAuth();
    }
  }

  return (
    <div className="m-2">
      <h1>Login form</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          className="border-2 border-white p-2"
          type="text"
          id="username"
          name="username"
          placeholder="enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-white p-2"
          type="text"
          id="password"
          name="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-1 py-1 text-black bg-amber-600 font-bold"
        >
          Submit
        </button>
        <p>{location?.state?.message ? location.state.message : null}</p>
      </form>
    </div>
  );
};

export default Login;
