import React from "react";
import axios from "axios";

const addToCart = async (cartData) => {
  try {
    const response = await axios.post("http://localhost:8000/api/carts", cartData);
    console.log("Item added to cart:", response.data);
    return response.data; // You may return the response if needed
  } catch (error) {
    if (error.response) {
      console.error("Failed to add item to cart:", error.response.data);
    } else if (error.request) {
      console.error("No response from the server:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
  }
};

export default addToCart;
