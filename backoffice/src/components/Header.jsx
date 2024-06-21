import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">lupasBank Backoffice</h1>
        <nav>
          {user && (
            <ul className="flex space-x-4">
              <li><Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link></li>
              <li><button onClick={logout} className="text-red-500 hover:underline">Logout</button></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
