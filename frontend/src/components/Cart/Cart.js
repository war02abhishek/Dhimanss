import React from "react";
import { removeItemsFromCart } from "../../actions/ProductAction";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import RemoveModeratorIcon from "@mui/icons-material/RemoveModerator";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className="cart-page">
        <h1 className="OurProductsTitle">
          <span className="mywishlist">MY WISHLIST</span>{" "}
        </h1>
        <ul>
          <>
            {cartItems.length === 0 ? (
             
                <div className="emptyCart">
              
                  <RemoveModeratorIcon />

                  <h1>
                    Add some cool products in your cart <span>🚀⭐</span>&nbsp;
                  </h1>
                  <Link to="/products">
                    View some awesome products <span>🤩💥</span>&nbsp;
                  </Link>
                </div>
            ) : (
              <>
                {cartItems.map((product) => (
                  <li key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p>ID: {product.id}</p>
                      <p>Price: ₹{product.price}</p>
                      <p>MOQ: {product.moq}</p>
                      <p>Dimensions: {product.dimensions}</p>
                      <p>Weight: {product.weight}</p>
                    </div>
                    <div className="product-actions">
                      <button
                        onClick={() =>
                          dispatch(removeItemsFromCart(product.product))
                        }
                      >
                        Delete from Cart
                      </button>
                    </div>
                  </li>
                ))}
              </>
            )}
          </>
        </ul>
      </div>
    </>
  );
};

export default Cart;
