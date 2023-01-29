import mongoose from "mongoose";
import express from "express";

const router=express.Router();

import Enquiry from "../models/enquirymodel.js"

import ErrorHandler from "../utils/ErrorHandler.js";
import ApiFeatures from "../utils/apiFeatures.js";


export const getAllEnquiry=async(req,res,next)=>{
    try {

        console.log("getting all Enquirys");
        console.log("searching",req.query);
        
        const enqCount=await Enquiry.countDocuments();
        const apiFeatures=new ApiFeatures(Enquiry.find(),req.query).search();

        const enq=await apiFeatures.query.clone();
        console.log(enq);
        let filterdenqCount=enq.length;

        res.status(200).json({
          sucess: true,
          enq,
          enqCount,
          filterdenqCount
        });        
    } catch (error) {
         res.status(404).json({ message: error.message });
    }
}

export const createEnquiry = async (req, res, next) => {
  try {
    console.log(req.body);

    const enquiry = await Enquiry.create(req.body); //requesting database to create

    res.status(201).json({
      sucess: true,
      enquiry,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//DELETE PRODUCT --BY ADMIN
export const deleteEnquiry = async (req, res, next) => {
  try {
    const enq = await Enquiry.findById(req.params.id);

    if (!enq) {
      
      return next(new ErrorHandler("Enquiry not found", 404));
    }
    await Enquiry.findByIdAndRemove(req.params.id);
    // await product.remove();

    res.status(200).json({
      sucess: true,
      message: "Enquiry Deleted Sucessfully",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};