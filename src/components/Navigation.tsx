import React from 'react';
import { Settings, UserCircle, ShoppingCart } from 'lucide-react';

interface NavigationProps {
  activeDemo: string;
  setActiveDemo: (demo: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeDemo, setActiveDemo }) => {
  return (
    <div className="bg-white shadow-md px-4 py-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Context API Demos</h1>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveDemo('theme')}
              className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200
                ${activeDemo === 'theme' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <Settings size={18} />
              <span className="hidden sm:inline">Theme</span>
            </button>
            
            <button
              onClick={() => setActiveDemo('auth')}
              className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200
                ${activeDemo === 'auth' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <UserCircle size={18} />
              <span className="hidden sm:inline">Auth</span>
            </button>
            
            <button
              onClick={() => setActiveDemo('cart')}
              className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200
                ${activeDemo === 'cart' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;