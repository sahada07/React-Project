import React, { useState } from "react";
import CustomerInfo from "./CustomerInfo";
import SignIn from "./SignIn"; // Import SignIn component

const SignUp = ({ isActive, onClose }) => {
  const [showCustomerInfo, setShowCustomerInfo] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false); // Track SignIn visibility
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleCustomerInfoForm = (e) => {
    e.preventDefault();
    setShowCustomerInfo(true); // Show CustomerInfo form
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCloseForms = () => {
    setShowCustomerInfo(false);
    onClose(); // Notify parent to close SignUp
  };

  const handleSignInClick = () => {
    setShowSignIn(true); // Show SignIn form
    onClose(); // Close SignUp form
  };

  return (
    <div className={`signup-form-container ${isActive ? "active" : ""}`}>
      <div
        id="close-signup-btn"
        className="fas fa-times"
        onClick={handleCloseForms}
      ></div>

      {!showSignIn && !showCustomerInfo ? (
        <form onSubmit={handleCustomerInfoForm}>
          <h3>Register on Sahad's store</h3>
          <span>Email</span>
          <input
            type="email"
            className="box"
            placeholder="Enter your email"
            id="email"
            value={signupData.email}
            onChange={handleInputChange}
          />
          <span>Password</span>
          <input
            type="password"
            className="box"
            placeholder="Enter your password"
            id="password"
            value={signupData.password}
            onChange={handleInputChange}
          />
          <span>Confirm Password</span>
          <input
            type="password"
            className="box"
            placeholder="Confirm your password"
            id="password_confirmation"
            value={signupData.password_confirmation}
            onChange={handleInputChange}
          />

          <div className="checkbox">
            <input type="checkbox" id="remember-me2" />
            <label htmlFor="remember-me2"> Remember me </label>
          </div>
          <p>
            I already have an account?{" "}
            <a href="#signin" id="signin" onClick={handleSignInClick}>
              Click here
            </a>
          </p>
          <input type="submit" value="Sign up" className="btn" id="signupbtn" />
        </form>
      ) : showSignIn ? (
        <SignIn
          isActive={showSignIn}
          onClose={() => setShowSignIn(false)} // Close SignIn form
          onSignUpClick={() => setShowSignIn(false)} // Switch to SignUp
        />
      ) : (
        <CustomerInfo
          isActive={showCustomerInfo}
          signupData={signupData}
          onClose={handleCloseForms}
        />
      )}
    </div>
  );
};

export default SignUp;