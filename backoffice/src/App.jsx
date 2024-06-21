import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          <Route path="/users" element={<PrivateRoute component={Users} />} />
          <Route path="/accounts" element={<PrivateRoute component={Accounts} />} />
          <Route path="/transactions" element={<PrivateRoute component={Transactions} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
