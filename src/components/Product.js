import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
