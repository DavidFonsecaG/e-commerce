import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  
  // User
  const { uid } = useSelector(state => state.auth)

  return true
    ? children
    : <Navigate to='/auth/login'/>;
};

export default PrivateRouter;
