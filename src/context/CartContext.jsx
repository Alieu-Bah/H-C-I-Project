// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const mockProducts = [
  {
    id: 1,
    name: 'Gaming RAM Module 16GB',
    price: 79.99,
    image: '/src/assets/ram.jpg',
    inStock: true,
  },
  {
    id: 2,
    name: '512GB NVMe SSD',
    price: 109.99,
    image: '/src/assets/ssd.jpg',
    inStock: true,
  },
  {
    id: 3,
    name: 'High-End PCB Motherboard',
    price: 249.99,
    image: '/src/assets/motherboard.jpg',
    inStock: false,
  },
   {
    id: 4,
    name: 'Computer Keyboard',
    price: 60.99,
    image: '/src/assets/computer-1869236_1280.jpg',
    inStock: true,
  },
   {
    id: 5,
    name: 'Wired Mouse',
    price: 60.99,
    image: '/src/assets/computer-mouse-152249_1280.png',
    inStock: true,
  },
  {
  id: 6,
    name: 'CPU Processor Computer',
    price: 40.99,
    image: '/src/assets/cpu-2103856_1280.png',
    inStock: false
  },
  // TODO: Add more products
];

export function CartProvider({ children }) {
  const [products] = useState(mockProducts);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

    const incrementProductQuantity = product => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

   const decrementProductQuantity = product => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing && existing.quantity > 1) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return [...prevItems.filter(item => item.id !== product.id)];
    });
  };
  const removeFromCart = productId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ products, cartItems, addToCart, removeFromCart,
         clearCart, incrementProductQuantity, decrementProductQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
