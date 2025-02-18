import { Link, useLocation } from 'react-router-dom';
import "./Breadcrumps.css"
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <ul className="breadcrumbs">
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const path = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={path}>
              <Link to={path}>{value.replace(/-/g, ' ')}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
