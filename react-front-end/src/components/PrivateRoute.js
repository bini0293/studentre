// PrivateRoute.js (Corrected)

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Use your own authentication logic
  
  return (
    <Route 
      {...rest} 
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;