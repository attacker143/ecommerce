import React from "react";
import { useGetProductsQuery } from "../api/getProducts";
import { products } from "../type/types";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import {Footers} from './Footers'

export const Products = () => {
  const { data } = useGetProductsQuery();
  const navigate = useNavigate();
  console.log(data);

  return (
    <>
    <Header/>
      <div className=" container mt-5 d-flex flex-wrap justify-content-center align-items-center">
        {data ? (
          data.map((products: products) => {
            return (
              <div
                className="card m-2  border-white shadow rounded"
                style={{ width: "250px" }}
                role="button"
                onClick={() => navigate(`/product/${products.id}`)}
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
      <Footers/>
    </>
  );
};
