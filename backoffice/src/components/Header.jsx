import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      {user && (
        <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
