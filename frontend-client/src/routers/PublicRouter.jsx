import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRouter = ({ children }) => {

  // User
  const { uid } = useSelector(state => state.auth)

  // Current Location
  const { pathname } = useLocation();

  return uid && (pathname === '/auth/login')
    ? <Navigate to='/admin/dashboard' />
    : children;
};

export default PublicRouter;
