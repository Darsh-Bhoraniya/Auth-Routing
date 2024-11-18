import React, { createContext, useState, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded credentials for demo (id = 'admin', password = 'admin')
  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => useContext(AuthContext);
