import React from 'react';
import useAuth from '../context/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">lupasBank Backoffice</h1>
        {user && (
          <button onClick={logout} className="bg-red-500 p-2 rounded-lg hover:bg-red-600 transition-colors">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
