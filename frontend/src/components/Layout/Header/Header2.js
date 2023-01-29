import React, { useState, useEffect } from "react";
import "./Header2.css";
import { AiFillHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import { FaAlignRight } from "react-icons/fa";

const Header2 = () => {
  const { isAuthenticated } = useSelector((state) => state.Admin);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [isOpen, setIsOpen] = useState(false);

  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // var it,ad;
    // if( localStorage.getItem(cartItems))
    // {
    //    it = JSON.parse(localStorage.getItem("cartItems") || []);
    // }
    // setCartItems(it);
  }, []);

  return (
    <div className="HeadContainer">
      <button type="button" className="nav-btn" onClick={handleToggle}>
        <FaAlignRight className="nav-icon" />
      </button>

      <ul className={isOpen ? "HeadLinks show-nav" : "HeadLinks"}>
        <a href="/">
          <AiFillHome />
          <span>HOME</span>
        </a>
        <a href="/products">
          <FaProductHunt />
          <span>PRODUCT</span>
        </a>
        <a href="/qa">
          <BsQuestionLg />
          <span>Q&A</span>
        </a>
        <a href="/contact">
          <MdOutlineMailOutline />
          <span>CONTACT</span>
        </a>
        <a href="/about">
          <CgProfile />
          <span>ABOUT US</span>
        </a>

        {cartItems?.length > 0 ? (
          <a href="/cart">
            <FaShoppingCart />
            <span>{cartItems.length}</span>
          </a>
        ) : null}
        {isAuthenticated ? (
          <a href="/admin">
            <RiAdminFill fontSize={25} />
          </a>
        ) : null}
      </ul>
    </div>
  );
};

export default Header2;
