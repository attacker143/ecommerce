import React from "react";
import { Header } from "./Header";
import { Footers } from "./Footers";
import { Slider } from "./Slider";
import { useGetLatestProductQuery } from "../api/getProducts";
import { products } from "../type/types";
import { Link } from "react-router-dom";

export const Home = () => {
  
  const {data} = useGetLatestProductQuery();
  return (
    <>
      <Header />
      <Slider/>
      <div className="container">
        <h2 className="mt-4">Latest <span className="text-primary">Products</span></h2>
        <div className=" container mt-5 d-flex flex-wrap justify-content-center align-items-center">
        {data ? (
          data.map((products: products) => {
            return (
              <div
                className="card m-2  border-white shadow rounded"
                style={{ width: "250px" }}
                role="button"
                
              >
                <div className="mt-3">
                  <img
                    src={products.image}
                    alt="product-img"
                    width="200px"
                    height="200px"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bold">{products.title} </h6>
                  <h6 className="text-success card-text fw-bold">
                    {" "}
                    Price : $ {products.price}
                  </h6>
                  <h6 className="text-danger card-text fw-bold">
                    Rating : {products.rating.rate}
                    
                  </h6>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading ... </div>
        )}
      </div>
      </div>
      <div className="container mt-4 mb-4">
        <Link to="/products" className="link-dark">More Products</Link>
        </div>
      <Footers />
    </>
  );
};
