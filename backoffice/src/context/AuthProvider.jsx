import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { loginAdmin } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ token });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const data = await loginAdmin({ username, password });
      const { token } = data;
      localStorage.setItem('token', token); // Guardar solo 'token'
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ token });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
