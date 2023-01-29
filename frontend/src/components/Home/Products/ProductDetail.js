import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProducts,
  getProductDetail,
} from "../../../actions/ProductAction";
import Loader from "../../Layout/Loader/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch=useDispatch();

  useEffect(() => {
    console.log("HI");
    console.log(id);
    dispatch(getProductDetail(id));
  }, [id,dispatch]);

  const { products } = useSelector((state) => state.products);
  const {ProductDetail,loading}=useSelector((state)=>state.ProductDetail);

  const filterProduct = products.filter((product) => product._id === id);
  console.log(filterProduct);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-detail-container">
          <img src={ProductDetail.image} alt="p.name" className="p-image" />
          <div className="p-info">
            <h3 className="p-name">{ProductDetail.name}</h3>
            <div className="p-price">{`₹${ProductDetail.price}`}</div>
            <div className="p-id">{`Product ID:   ${ProductDetail.id}`}</div>
            <div className="p-description">{`DESCRIPTION:    ${ProductDetail.description}`}</div>
            <div className="p-dimension">
              DIMENSION: {ProductDetail.dimensions}
            </div>
            <div className="p-weight">WEIGHT: {ProductDetail.weight}</div>
            <div className="p-moq">MOQ: {ProductDetail.moq}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
