import React, { Fragment, useEffect, useState } from "react";
import "./NewProduct.css";
import { useSelector, useDispatch } from "react-redux";
// import { createProduct } from "../../actions/productsActions";

import { Button } from "@material-ui/core";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import { createProduct, updateProduct } from "../../actions/ProductAction";

// import FileBase from "react-file-base64";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const {id}=useParams();

  const navigate = useNavigate();
  const [imagesPreview, setImagesPreview] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    moq: "",
    dimensions: "",
    weight: "",
    images: [],
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  //previw dekhta ese
  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setProduct({
  //     ...product,
  //     Images: [...product.Images, ...files],
  //   });
  // };

  // const handleImageChange = e => {
  //   setProduct({
  //     ...product,
  //     Images: [...product.Images, e.target.files[0]]
  //   });
  // }
  const handleImageChange = (e) => {
    //created files array which is array of selected files
    const files = Array.from(e.target.files);

    //creating new array imagesBuffer
    //by iterating files array
    const imagesBuffer = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader(); //create new instance of FileReader obj which is used to read content of file
        reader.readAsDataURL(file); //read file as url
        reader.onload = () => resolve(reader.result); //when file has been sucessfully read we call resolve callback and pass result property of reader obj
        reader.onerror = (error) => reject(error);
      });
    });

    //using Promise all we wait till all files are not read successfully
    //ie we make ensure all data is available before updating the state
    Promise.all(imagesBuffer).then((imagesBuffer) => {
      setProduct({
        ...product,
        images: [...product.images, ...imagesBuffer],
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(updateProduct(id,product));
    navigate('/');

    // add code here to submit the form data to your API
  };
  useEffect(() => {
    // const handleImagePreview = () => {
    //   setImagesPreview(product.images);
    // };
    console.log(product.images);
    const imagesPreviewUrls = product.images.map((image) => {
      const imageBlob = new Blob([image], { type: image.type }); //convert to BLOB

      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(image);
      });
    });

    Promise.all(imagesPreviewUrls).then((imagesPreviewUrls) => {
      setImagesPreview(imagesPreviewUrls);
    });
  }, [product.images, dispatch]);

  return (
    <div className="Productformcontainer">
      <h1>Update Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <label className="product-form-label">
          Product ID:
          <input
            className="product-form-input"
            type="text"
            name="id"
            value={product.ProductID}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="product-form-input"
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="product-form-input"
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="product-form-input"
          />
        </label>
        <br />
        <label>
          MOQ:
          <input
            type="number"
            name="moq"
            value={product.moq}
            onChange={handleChange}
            className="product-form-input"
          />
        </label>
        <br />
        <label>
          Dimensions:
          <input
            type="text"
            name="dimensions"
            value={product.dimensions}
            onChange={handleChange}
            className="product-form-input"
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={product.weight}
            onChange={handleChange}
            className="product-form-input"
          />
        </label>
        <br />
        {product.images.map((it, index) => (
          <img
            className="newProductimg"
            src={it}
            key={index}
            width="100"
            height="100"
          />
        ))}

        {/* {imagesPreview.map((image, index) => (
          <img src={image} key={index} width="100" height="100" />
        ))} */}

        <label>
          Images:
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="product-form-input"
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
