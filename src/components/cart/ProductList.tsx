import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import { useCart, Product } from '../../contexts/CartContext';

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    description: 'Feature-rich smartwatch with health tracking',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 79.99,
    description: 'Portable speaker with crystal clear sound',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 4,
    name: 'Laptop Backpack',
    price: 49.99,
    description: 'Durable backpack with laptop compartment',
    image: 'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

const ProductList: React.FC = () => {
  const { addToCart, cartItems } = useCart();

  const getItemQuantity = (productId: number) => {
    const item = cartItems.find(item => item.id === productId);
    return item?.quantity || 0;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-teal-700">Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => {
          const quantity = getItemQuantity(product.id);
          
          return (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="text-teal-600 font-bold mb-4">${product.price.toFixed(2)}</p>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors duration-200"
                >
                  <Plus size={16} />
                  <span>
                    {quantity === 0 ? 'Add to Cart' : `Add Another (${quantity} in cart)`}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;