import React, { useState } from 'react';
import ThemeDemo from './components/ThemeDemo';
import AuthDemo from './components/AuthDemo';
import CartDemo from './components/CartDemo';
import Navigation from './components/Navigation';

function App() {
  const [activeDemo, setActiveDemo] = useState('theme');

  const renderActiveDemo = () => {
    switch (activeDemo) {
      case 'theme':
        return <ThemeDemo />;
      case 'auth':
        return <AuthDemo />;
      case 'cart':
        return <CartDemo />;
      default:
        return <ThemeDemo />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation activeDemo={activeDemo} setActiveDemo={setActiveDemo} />
      <div className="flex-1">
        {renderActiveDemo()}
      </div>
    </div>
  );
}

export default App;