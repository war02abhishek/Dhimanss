import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect,
  Link,
} from "react-router-dom";
import './App.css'
// import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer1";
import ContactForm from "./components/Home/EnquiryForm/ContactForm";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import QandA from "./components/QandA/qandA.js";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Products from "./components/Home/Products/Products";
import Admin from "./components/Admin/Admin";
import NewProduct from "./components/Admin/NewProduct";
import NewProduct2 from "./components/Admin/NewProduct2";
import Cart from "./components/Cart/Cart";
import Enquiry from "./components/Admin/Enquiry";
import Header2 from "./components/Layout/Header/Header2";
import PContactForm from "./components/Home/EnquiryForm/PContactForm";
import UpdateProduct from "./components/Admin/UpdateProduct";
import AdminEnquiry from "./components/Admin/AdminEnquiry";

import { useSelector } from "react-redux";
import ProductDetail from "./components/Home/Products/ProductDetail";

const App = () => {
   
  
  return (
    <Router>
      {/* <Header /> */}
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qa" element={<QandA />} />
        <Route path="/contact" element={<PContactForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/create" element={<NewProduct />} />
        <Route path="/admin/enquiry" element={<Enquiry />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />
        <Route path="/admin/adminenquiry" element={<AdminEnquiry />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
