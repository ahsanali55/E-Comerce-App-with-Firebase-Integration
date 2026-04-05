import React from "react";
import Products from "./Products";
import LoadingSpiner from "./LoadingSpiner";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const isfetch = useSelector((state) => state.product.isfetch);
  return (
    <div className="w-full bg-[#f7f7f7] relative ">
      <div className="mx-auto w-11/12 max-w-[1080px] h-full p-2 md:p-4">
        <h1
          className="my-8 text-2xl md:text-4xl font-bold font-poppins
      "
        >
          Checkout AHSAN STORE
        </h1>
        {isfetch?  <LoadingSpiner /> : <Products />}
        
       
      </div>
    </div>
  );
};

export default ProductsContainer;
