// import React, { useState } from "react";

import { useSelector } from "react-redux";
import { products } from "../type/types";
export const Checkout = () => {
  const data = useSelector((state: any) => state.addcart.data);
  const totalPrice  = useSelector((state:any) => state.addcart.totalPrice);
  // const [Total ,setTotal] =useState<number>(0);
  return (
    <div className="container">
      <h4>Order Details</h4>
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((product: products) => {
                // const price = product.price
              return (
                <tr className="mt-4">
                  <td>
                    <img
                      src={product.image}
                      alt="product"
                      width={"80px"}
                      height={"100px"}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })
          ) : (
            null
          )}
          <tr>
            <td colSpan={2}>
                Total
            </td>
            <td>
                {totalPrice}
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary">Pay now</button>
    </div>
  );
};
