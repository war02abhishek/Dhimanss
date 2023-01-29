import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import Admin from "../models/adminModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";
// import catchAsyncError from "../middleware/catchAsyncError.js";
import ApiFeatures from "../utils/apiFeatures.js";
import sendToken from "../utils/jwtToken.js";


//REGISTER USER
export const registerUser = async (req, res, next) => {
  try {
  

    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await Admin.create({
      name,
      email,
      password,
    }); //requesting database to create

    sendToken(user, 200, res);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//LOGIN USER
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide email and password", 400));
    }

    const user = await Admin.findOne({ email }).select("+password");
    if (!user) {
      return next(
        new ErrorHandler("User Doesnt exist Invalid Credentials", 401)
      );
    }
    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
      return next(
        new ErrorHandler("password not matched Invalid Credentials", 401)
      );
    }
    sendToken(user, 200, res);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//LOG OUT
export const logoutUser = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()), //abhi ke abhi expire hojao
      httpOnly: true,
    });

    res.status(200).json({
      sucess: true,
      message: "LOG OUT",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
