import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card 
        title="Users"
        description="Manage users"
        onClick={() => navigate('/users')}
      />
      <Card 
        title="Accounts"
        description="Manage accounts"
        onClick={() => navigate('/accounts')}
      />
      <Card 
        title="Transactions"
        description="Manage transactions"
        onClick={() => navigate('/transactions')}
      />
    </div>
  );
};

export default Dashboard;
