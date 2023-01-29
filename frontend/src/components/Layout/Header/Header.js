import React,{useState,useEffect} from 'react'
import './Header.css'
import {AiFillHome} from "react-icons/ai";
import {useSelector} from "react-redux"
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import {BsQuestionLg} from "react-icons/bs"
import {MdOutlineMailOutline} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {RiAdminFill} from "react-icons/ri"





const Header = () => {
  


  const {isAuthenticated}=useSelector((state)=>state.Admin)
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [toggle,useToggle]=useState(false);

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
      <ul className="HeadLinks">
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

      <ul className="PhoneHeadLinks">
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
}

export default Header