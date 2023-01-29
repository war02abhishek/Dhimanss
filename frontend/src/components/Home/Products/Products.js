import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../actions/ProductAction";
import ProductsCard from "./ProductsCard";
import "./Products.css";
import Loader from "../../Layout/Loader/Loader";

const Products = () => {
  const { products, loading, error } = useSelector((state) => state.products);

   const dispatch = useDispatch();
   useEffect(() => {
     console.log("getproducts ");
     dispatch(getAllProducts());
   }, []);

   
  console.log(products);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="ProductContainer">
          <div></div>
          <h1 className="OurProductsTitle">
            Our
            <span>Products</span>{" "}
          </h1>

          <div className="ProductsContainer">
            {products &&
              products.map((item) => (
                <ProductsCard
                  name={item?.name}
                  desc={item?.description}
                  price={item?.price}
                  dim={item?.dimensions}
                  id={item?.id}
                  idd={item?._id}
                  moq={item?.moq}
                  image={item.images}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
