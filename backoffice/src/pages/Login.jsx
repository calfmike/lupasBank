import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
