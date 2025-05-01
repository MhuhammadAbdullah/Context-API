import React from 'react';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';
import { ShoppingCart, Trash2 } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, getTotalItems, getTotalPrice, clearCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-teal-700 flex items-center gap-2">
          <ShoppingCart size={24} />
          <span>Your Cart</span>
          <span className="ml-2 bg-teal-100 text-teal-800 text-sm px-2 py-1 rounded-full">
            {getTotalItems()} items
          </span>
        </h2>
        
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors duration-200"
          >
            <Trash2 size={18} />
            <span>Clear Cart</span>
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <p className="text-sm text-gray-400">Add some products to your cart to see them here</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">Total:</span>
              <span className="text-xl font-bold text-teal-700">${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;