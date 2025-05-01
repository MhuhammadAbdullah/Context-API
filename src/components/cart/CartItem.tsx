import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, CartItem as CartItemType } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center p-4 hover:bg-gray-50">
      <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden mr-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <p className="text-teal-600 font-bold mt-1">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded overflow-hidden">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-2 hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            {item.quantity === 1 ? <Trash2 size={16} className="text-red-500" /> : <Minus size={16} />}
          </button>
          
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
            className="w-16 text-center border-x px-2 py-1"
            min="1"
          />
          
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-2 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="min-w-[80px] text-right">
          <span className="font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
        
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;