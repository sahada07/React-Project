import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        // Add new item
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Logout function to clear user-related data
  const logout = () => {
    clearCart(); // Clear the cart
    // Add any other necessary cleanup for logout here, such as clearing user data
    console.log("User has logged out, cart cleared.");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, logout }}>
      {children}
    </CartContext.Provider>
  );
};
