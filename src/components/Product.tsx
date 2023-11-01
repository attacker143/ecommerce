import React from "react";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../api/getProducts";
// import ReactStars from 'react-stars'
import { useDispatch } from "react-redux";
import { addItems } from "../reducer/cartSlice";

export const Product = () => {
  const { id } = useParams();
  // console.log(param)
  const { data } = useGetProductQuery(id);
  // console.log(data);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="container">
      {/* {true ? <div className="alert alert-success alert-dismissible" style={{height:"auto"}}>
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <p>Product Added Successfuly , go to <Link to='/cart' className="alert-link">Cart</Link></p>
          </div>:null} */}
      {data ? (
        <div className="d-flex align-item-center justify-content-center mt-5 ">
          
          <div
            className="card m-2   border-white shadow rounded"
            // style={{ width: "600px" }}
            role="button"
          >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={data.image}
                  alt="product-img"
                  width="300px"
                  height="300px"
                  //   className="card-img-top"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title fw-bold">{data.title} </h6>
                  <h6 className="text-success fw-bold card-text">
                    {" "}
                    Price : $ {data.price}
                  </h6>
                  <h6 className="text-danger fw-bold card-text">

                  
                    Rating : {data.rating.rate}
                  </h6>
                  <h6 className="text-danger fw-bold card-text">
                    Description :<p className="text-dark"><small>{data.description}</small></p>
                  </h6>

                  <button
                    className="btn btn-secondary border-white mt-4"
                    onClick={() => dispatch(addItems({data:data}))}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-secondary mt-4 ms-4"
                    // onClick={() => dispatch(addItems(data))}
                    
                  >
                   Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      ) : (
        <div>Loading ...</div>
      )}
      </div>
    </>
  );
};
