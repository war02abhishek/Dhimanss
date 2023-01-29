import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [30, "Name must be less than 30 characters"],
    minLength: [3, "Name must be at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [validator.isEmail, "Invalid email format"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be at least 8 characters"],
    select: false, //admin jab details magega to passsword nahi dena
  },
  role: {
    type: String,
    default: "admin",
  },
});

adminSchema.methods.getJWTToken=function(){   
      
    //test signature is made
      return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });

}
adminSchema.methods.comparePassword = function (enteredPassword) {
  return enteredPassword==this.password;
};

var ProdD = mongoose.model("Admin", adminSchema);

export default ProdD;

