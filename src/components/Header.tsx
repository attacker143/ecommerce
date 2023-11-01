import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs';
export const Header = () => {
  const navigate = useNavigate();
  const count = useSelector((state: any) => state.addcart.count);
  return (
    <div className="bg-dark">
      <div className="row justify-content-end pt-3 pb-3">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
          <button
            className="btn btn-secondary me-3 border-white text-lite"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="btn btn-secondary me-3 border-white"
            onClick={() => navigate("/products")}
          >
            Products
          </button>
          <input
            className="form-control"
            type="search"
            placeholder="Search . . ."
          />
          <button
            className="btn btn-secondary ms-3 me-3 border-white"
            onClick={() => navigate("/cart")}
          >
          <BsCart3/>
            <span className="position-absolute  translate-middle badage rounded-pill text-white bg-dark">
              {count}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
