import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-green-100 text-green-700 rounded-full p-2">
          <CheckCircle size={30} />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-center">
        Welcome to your Dashboard, {user.username}
      </h2>
      
      <p className="text-gray-600 text-center mb-6">
        You have successfully logged in using the Auth Context.
      </p>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="font-semibold mb-2">How it works:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>The AuthContext stores the user's login status</li>
          <li>Components can access this state without prop drilling</li>
          <li>The navbar shows your username from the context</li>
          <li>Logging out will update the context state</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;