import React, { useState } from "react";
import axios from "axios";

const CustomerInfo = ({ isActive, signupData, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCustomerInfo((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const registrationData = {
      ...signupData,
      ...customerInfo
    };
    
    console.log("Sending registration data:", registrationData);
    
    try {
      const response = await axios.post("http://localhost:8000/api/register", registrationData);
      console.log("Registration successful:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Registration failed with response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server:", error.request);
      } else {
        console.error("Axios error setting up request:", error.message);
      }
    }
  };

  return (
    <div className={`customer-info-container ${isActive ? "active" : ""}`}>
      <div id="close-customer-info-btn" className="fas fa-times" onClick={onClose}></div>

      <form onSubmit={handleSubmit}>
        <h3>Customer Info Here</h3>
        <span>First Name</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your first name"
          id="first_name"
          value={customerInfo.first_name}
          onChange={handleInputChange}
        />
        <span>Last Name</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your last name"
          id="last_name"
          value={customerInfo.last_name}
          onChange={handleInputChange}
        />
        <span>Address</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your address"
          id="address"
          value={customerInfo.address}
          onChange={handleInputChange}
        />
        <span>Phone Number</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your phone number"
          id="phone_number"
          value={customerInfo.phone_number}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" className="btn" id="signupbtn" />
      </form>
    </div>
  );
};

export default CustomerInfo;