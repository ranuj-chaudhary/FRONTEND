import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [sortBy, setSortBy] = useState('name');

  return (
    <nav className="text-2xl bg-amber-400 text-black p-2 ">
      <ul className="list-none flex gap-4">
        <li>
          <Link className="cursor-pointer hover:text-blue-500" to="/">
            Home{' '}
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-blue-500" to="/contact">
            Contact{' '}
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
          <Link className="cursor-pointer hover:text-blue-500" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-blue-500" to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
