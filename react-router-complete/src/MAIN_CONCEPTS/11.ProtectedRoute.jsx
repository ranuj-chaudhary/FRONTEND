import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{ from: location.pathname, message: 'User Successfull Logout' }}
      replace
    />
  );
};

export default ProtectedRoute;
