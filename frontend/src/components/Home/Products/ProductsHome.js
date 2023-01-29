import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../actions/ProductAction";
import ProductsCard from "./ProductsCard";
import "./ProductsHome.css";

const ProductsHome = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="ProductHomeContainer">
      <h1 className="ProductsTitle">
        Our
        <span>Products</span>{" "}
      </h1>

      <div className="ProductsHContainer">
        
        {products &&
          products.map((item) => (
            
            <ProductsCard
              name={item?.name}
              desc={item?.description}
              price={item?.price}
              dim={item?.dimensions}
              id={item?.id}
              moq={item?.moq}
              idd={item?._id}
              image={item?.images}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsHome;
