import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const resetCart = () => {
    setItems([])
  }

  const itemCount = items.length;

  const totalCost = items.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const value = {
    items,
    addItem,
    removeItem,
    itemCount,
    totalCost,
    resetCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
