import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Header = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [sortBy, setSortBy] = useState('name');
  const { dispatch, status, error, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  function handleLogout() {
    dispatch(logout(false));
    dispatch(authError(''));
    dispatch(authStatus(''));
  }
  function handleBack() {
    navigate(-1);
  }
  return (
    <nav className="text-2xl bg-amber-400 text-black p-2 ">
      <ul className="list-none flex gap-4">
        <li>
          <Link className="cursor-pointer hover:text-blue-500" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-blue-500" to="/sidebar">
            Transition Animation
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-blue-500" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-blue-500" to="/redirects">
            Redirects
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer hover:text-blue-500"
            to={{
              pathname: '/about',
              search: `?sort=${sortBy}`,
              hash: '#the-hash',
              state: { fromDashboard: true },
            }}
          >
            AboutUs
          </Link>
        </li>
        <li>
          {!isAuthenticated ? (
            <Link className="cursor-pointer hover:text-blue-500" to="/login">
              Login
            </Link>
          ) : (
            <Link
              className="cursor-pointer hover:text-blue-500"
              to="/login"
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
        </li>
        <li>
          <Link
            className="cursor-pointer hover:text-blue-500"
            to="/redirects"
            onClick={handleBack}
          >
            {`<--Back`}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
