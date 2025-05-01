import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`
      py-4 px-6 flex justify-between items-center
      transition-colors duration-300 ease-in-out
      ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}
      shadow-md
    `}>
      <h1 className="text-xl font-bold">Theme Toggle Demo</h1>
      <button 
        onClick={toggleTheme}
        className={`
          p-2 rounded-full
          transition-colors duration-300 ease-in-out
          ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-700 hover:bg-gray-600'}
        `}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </header>
  );
};

export default Header;