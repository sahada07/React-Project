import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import CustomerInfo from "./CustomerInfo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { CartContext } from "../CartContext";
import CartPage from "./CartPage";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCustomerInfo, setShowCustomerInfo] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Track cart modal state

  const { cartItems, logout } = useContext(CartContext); // Assume logout function is in context
  const navigate = useNavigate(); // Hook for navigation

  const handleUserIconClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowCustomerInfo(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
    setShowCustomerInfo(false);
  };

  const handleCustomerInfoClick = () => {
    setShowCustomerInfo(true);
    setShowSignIn(false);
    setShowSignUp(false);
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowCustomerInfo(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <div>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <i className="fas fa-book"></i> bookly
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#" className="fas fa-heart"></a>
            <div className="fas fa-shopping-cart" onClick={toggleCart}>
              <span className="cart-count">{cartItems.length}</span>
            </div>
            <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>
            <div className="fas fa-sign-out-alt" onClick={handleLogout}></div> {/* Logout icon */}
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <Link to="/">home</Link>
            <Link to="/genre">genre</Link>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">contact</a>
          </nav>
        </div>
      </header>

      {isCartOpen && <CartPage onClose={closeCart} isOpen={isCartOpen} />} {/* Pass isOpen prop */}

      <SignIn isActive={showSignIn} onClose={closeForms} onSignUpClick={handleSignUpClick} />
      <SignUp isActive={showSignUp} onClose={closeForms} onCustomerClick={handleCustomerInfoClick} />
      <CustomerInfo isActive={showCustomerInfo} onClose={closeForms} />
    </div>
  );
};

export default Header;
