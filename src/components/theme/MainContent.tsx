import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const MainContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <main className={`
      flex-1 p-6
      transition-colors duration-300 ease-in-out
      ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-gray-200'}
    `}>
      <div className={`
        max-w-2xl mx-auto p-6 rounded-lg
        transition-colors duration-300 ease-in-out
        ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-md'}
      `}>
        <h2 className="text-2xl font-bold mb-4">Theme Context Example</h2>
        <p className="mb-4">
          This example demonstrates how to use React's Context API to manage a global theme.
          The current theme is <span className="font-semibold">{theme}</span>.
        </p>
        <p className="mb-4">
          All components in this section consume the ThemeContext and update their styles accordingly.
        </p>
        <div className={`
          p-4 rounded-md mt-6
          transition-colors duration-300 ease-in-out
          ${theme === 'light' ? 'bg-blue-100 text-blue-800' : 'bg-blue-900 text-blue-100'}
        `}>
          <p>This box also changes based on the theme!</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;