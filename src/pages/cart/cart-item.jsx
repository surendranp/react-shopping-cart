import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem"> 
      <img src={productImage} alt="" />
      <div className="description">
        <p class="fs-10 text-dark fw-bold">{productName}  </p>
        <p class="fs-5 "> Price: ₹ {price}</p>
        <div className="countHandler">
          <button  onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button  onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
