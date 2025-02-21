import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { authLogin, authError, authStatus } from '../context/AuthContext';
import { validateUser } from '../services/loginApi';

const style = {
  button:
    'px-1 py-1 text-black bg-amber-600 font-bold cursor-pointer transition-all active:scale-95',
  input: 'border-2 border-white p-2 border-2 border-white p-2',
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch, isAuthenticated, error, status } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated)
      navigate(
        location?.state?.from || '/dashboard',
        { state: { auth: isAuthenticated } },
        { replace: true }
      );
  }, [isAuthenticated]);

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        dispatch(authError(''));
      }, 2000);
    }
  }, [error]);

  async function fetchUserAuth(username, password) {
    try {
      dispatch(authError(''));
      dispatch(authStatus(''));
      const authValidation = await validateUser(username, password);

      if (authValidation && authValidation.isAuthenticated) {
        dispatch(authStatus('Validation Successfull'));
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
        dispatch(authLogin(authValidation.isAuthenticated));
      }
    } catch (error) {
      setUsername('');
      setPassword('');
      throw error;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    fetchUserAuth(username, password).catch((error) => {
      dispatch(authError(error));
    });
  }

  return (
    <div className="m-2">
      <div className="header flex justify-between">
        <p className="text-3xl">Login form</p>
        <p className="font-bold">
          {location?.state?.message > 0 ? location.state.message : null}
        </p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-2 my-4"
      >
        <label htmlFor="username">Username</label>
        <input
          className={style.input}
          type="text"
          id="username"
          name="username"
          placeholder="enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className={style.input}
          type="text"
          id="password"
          name="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="h-8">
          {error.length > 0 ? (
            <p className="py-2 text-white">{error}</p>
          ) : (
            <p className="py-2 text-white">{status}</p>
          )}
        </div>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
