import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../../pages/shop/product";
import "../../pages/shop/shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle  pt-5  col-12 d-flex justify-content-center ">
        <h1 className=" mt-5  fw-bold starts">Bikers Heaven</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} /> 
        ))}
      </div>
    </div>
  );
};
