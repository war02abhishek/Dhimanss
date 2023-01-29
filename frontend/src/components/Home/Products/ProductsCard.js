import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { addItemsToCart } from '../../../actions/ProductAction'
import { Link } from 'react-router-dom'
import './ProductsCard.css'

const ProductsCard = ({name,desc,id,price,dim,weight,moq,idd,image}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert=useAlert();

  

  const handleClick = () => {
    console.log(idd);
    dispatch(addItemsToCart(idd))
    alert.success("Item added to Wishlist ")
  }
console.log(image);

  return (
    <div className="product-card">
      <Link  to={`product/${idd}`}>
        <img src={image} alt="imgr" className="product-image" />

        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <div className="product-price">{`₹${price}`}</div>
          <div className="product-description">{desc}</div>
          <div className="product-dimension">{`Dimension: ${dim}`}</div>
          <div className="product-id">{`Product ID: ${id}`} </div>
          <div className="product-id">{`Minimum Order Quantity: ${moq}`}</div>
        </div>
        <Link to="/">
          <button
            onClick={() => {
              dispatch(addItemsToCart(idd));
              alert.success("ITEM ADDED TO WISHLIST ");
            }}
            className="add-to-wishlist-button"
          >
            Add to Wish List
          </button>
        </Link>
      </Link>
    </div>
  );
}

export default ProductsCard