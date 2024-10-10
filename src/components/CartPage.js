import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';

const CartPage = ({ onClose }) => { // Receive onClose prop to close the cart
  const { cartItems, setCartItems, clearCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cart'); // Adjust the URL as needed
        // Set cart items from API response
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [setCartItems]);

  return (
    <div className="cart-modal" style={modalStyles}>
      <div className="cart-modal-content" style={modalContentStyles}>
        <button onClick={onClose} style={closeButtonStyles}>Close</button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={clearCart}>Clear Cart</button>
        <button onClick={() => alert('Proceeding to checkout')}>Checkout</button>
      </div>
    </div>
  );
};

// Inline CSS for simplicity
const modalStyles = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '300px',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '20px',
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
};

const closeButtonStyles = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
};

export default CartPage;