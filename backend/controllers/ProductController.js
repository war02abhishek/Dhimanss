
import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import Product from "../models/productModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";

import ApiFeatures from "../utils/apiFeatures.js";

//CREATE PRODUCT --BY ADMIN
export const createProduct = async (req, res, next) => {
  try {
    console.log(req.body);
   
    const product = await Product.create(req.body); //requesting database to create

    res.status(201).json({
      sucess: true,
      product,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    //  return  next(new ErrorHandler('temp error',404)); //alert cecking
    console.log("get all product backend controller");
    const resultPerPage = 12;
    const productsCount = await Product.countDocuments();
    console.log(req.query);
    const apiFeatures = new ApiFeatures(Product.find(), req.query).search()
      .filter()
      // .pagination(resultPerPage); //you can use req.query.keyword here or inside ApiFeatures class

    const Products = await apiFeatures.query.clone();
    // const products = await Product.find({name:samosa});
    // const products = await Product.find();
    let filteredProductsCount = Products.length;
    console.log(Products);
    res.status(200).json({
      sucess: true,
      Products,
      resultPerPage,
      productsCount,
      filteredProductsCount,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//UPDATE PRODUCT --BY ADMIN
export const updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      // res.status(500).json({
      //   sucess: true,
      //   message:"Product Not Found"
      // })
      return next(new ErrorHandler("product not found", 404));
    }

    console.log(req.params.id);
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      sucess: true,
      product,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//DELETE PRODUCT --BY ADMIN
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      // res.status(500).json({
      //   sucess: true,
      //   message: "Product Not Found",
      // });
      return next(new ErrorHandler("product not found", 404));
    }
    await Product.findByIdAndRemove(req.params.id);
    // await product.remove();

    res.status(200).json({
      sucess: true,
      message: "Product Deleted Sucessfully",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get single product details
export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {

      return next(new ErrorHandler("product not found", 404));
    }
    res.status(200).json({
      sucess: true,
      product,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get All Product (Admin)
export const getAdminProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
