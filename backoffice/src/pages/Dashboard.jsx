import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/users" className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
          <h2 className="text-xl font-semibold">Manage Users</h2>
          <p className="mt-2 text-gray-600">View and manage all users.</p>
        </Link>
        <Link to="/accounts" className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
          <h2 className="text-xl font-semibold">Manage Accounts</h2>
          <p className="mt-2 text-gray-600">View and manage all accounts.</p>
        </Link>
        <Link to="/transactions" className="block p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition">
          <h2 className="text-xl font-semibold">Manage Transactions</h2>
          <p className="mt-2 text-gray-600">View and manage all transactions.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
