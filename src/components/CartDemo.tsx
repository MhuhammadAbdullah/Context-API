import React, { useState } from 'react';
import { CartProvider } from '../contexts/CartContext';
import ProductList from './cart/ProductList';
import CartPage from './cart/CartPage';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartNavbar: React.FC<{ showCart: boolean; setShowCart: (show: boolean) => void }> = ({ showCart, setShowCart }) => {
  const { getTotalItems } = useCart();
  
  return (
    <nav className="bg-teal-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <ShoppingBag size={24} />
          <span>Shopping Cart Demo</span>
        </h1>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setShowCart(false)}
            className={`px-4 py-2 rounded-md transition-colors duration-200 
              ${!showCart ? 'bg-teal-700' : 'hover:bg-teal-700'}`}
          >
            Products
          </button>
          
          <button 
            onClick={() => setShowCart(true)}
            className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2
              ${showCart ? 'bg-teal-700' : 'hover:bg-teal-700'}`}
          >
            <ShoppingCart size={18} />
            <span>Cart</span>
            {getTotalItems() > 0 && (
              <span className="bg-white text-teal-600 text-xs px-2 py-1 rounded-full font-bold">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const CartContent: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const { getTotalItems } = useCart();
  
  // Automatically show cart when adding first item
  React.useEffect(() => {
    if (getTotalItems() > 0) {
      setShowCart(true);
    }
  }, [getTotalItems()]);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <CartNavbar showCart={showCart} setShowCart={setShowCart} />
      <div className="py-6">
        {showCart ? <CartPage /> : <ProductList />}
      </div>
    </div>
  );
};

const CartDemo: React.FC = () => {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
};

export default CartDemo;