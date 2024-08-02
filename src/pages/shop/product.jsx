import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <div className="img">
      <img src={productImage} alt="" /> 
      </div>
      <div className="description">
        <p>
          <b class="fw-bold text-dark">{productName}</b>
        </p>
        <p> ₹{price}</p>
      </div>
      <button class="addToCartBttn btn btn-dark btn-sm" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
