import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`
      py-4 px-6 text-center
      transition-colors duration-300 ease-in-out
      ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-800 text-gray-300'}
    `}>
      <p>Theme Toggle Demo - Using React Context API</p>
    </footer>
  );
};

export default Footer;