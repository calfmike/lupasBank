import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import useAuth from './context/useAuth';

const AppContent = () => {
  const { user } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem('token');

  if (token && location.pathname === '/login') {
    return <Navigate to="/dashboard" />;
  }

  if (!token && location.pathname !== '/login') {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
