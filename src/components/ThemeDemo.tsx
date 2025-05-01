import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from './theme/Header';
import MainContent from './theme/MainContent';
import Footer from './theme/Footer';

const ThemeDemo: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ThemeDemo;