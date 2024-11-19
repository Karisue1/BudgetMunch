import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logOut = () => {
    localStorage.removeItem('token');
    setToken(null); // Update context state
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
