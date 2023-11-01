import React from "react";
import { Header } from "./Header";

import { shallowEqual, useSelector } from "react-redux";

import { products } from "../type/types";

import { removeItems } from "../reducer/cartSlice";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const navigate = useNavigate();
  const data = useSelector((state: any) => state.addcart.data, shallowEqual);
  const totalPrice = useSelector(
    (state: any) => state.addcart.totalPrice,
    shallowEqual
  );
  // const quantity = useSelector((state:any) => state.addcart.quantity);
  console.log("totalprice", totalPrice);

  const dispatch = useDispatch();
  // console.log(data);

  return (
    <>
      <Header />
      {totalPrice > 0 ? (
        <div className=" container mt-5 d-flex flex-column flex-wrap justify-content-center align-items-center">
          {data ? (
            data.map((products: products) => {
              return (
                <div
                  className="card m-2   border-white shadow rounded"
                  style={{ width: "600px" }}
                  role="button"
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={products.image}
                        alt="product-img"
                        width="200px"
                        height="200px"
                        //   className="card-img-top"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">
                          {products.title}{" "}
                        </h6>
                        <h6 className="text-success fw-bold card-text">
                          {" "}
                          Price : $ {products.price}
                        </h6>
                        {/* <h6 className="text-danger fw-bold card-text">
                        Rating : {products.rating.rate}
                      </h6> */}
                        {/* <div className="card-text mt-4">
                          <button
                            className="btn btn-danger me-4"
                            onClick={() => dispatch(add())}
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            className="btn btn-danger ms-4"
                            onClick={() => dispatch(rem())}
                          >
                            {" "}
                            +{" "}
                          </button> */}
                        </div>
                        <button
                          className="btn btn-danger mt-4"
                          onClick={() =>
                            dispatch(removeItems({ id: products.id }))
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                // </div>
              );
            })
          ) : (
            <div>Loading ... </div>
          )}
          <div className="d-flex flex-direction-end mt-3">
            <strong>Total : {totalPrice}</strong>
          </div>
          <button
            className="btn btn-success mt-4 ms-4 "
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      ) : (
        <small>Cart Empty Go and choose your product</small>
      )}
    </>
  );
};
