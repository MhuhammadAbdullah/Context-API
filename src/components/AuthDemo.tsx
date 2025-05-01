import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from './auth/Navbar';
import LoginForm from './auth/LoginForm';
import Dashboard from './auth/Dashboard';
import { useAuth } from '../contexts/AuthContext';

const AuthContent: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        {user ? <Dashboard /> : <LoginForm />}
      </div>
    </div>
  );
};

const AuthDemo: React.FC = () => {
  return (
    <AuthProvider>
      <AuthContent />
    </AuthProvider>
  );
};

export default AuthDemo;