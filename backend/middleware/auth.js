import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticatedUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    // console.log(token);
    if (!token) {
      return next(new ErrorHandler("please login to acess this resource", 401));
    }
    //comparing test sign with orignal sign
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Admin.findById(decodedData.id);

    next();
  } catch (error) {
    console.log(error);
  }
};

export const AuthenticatedRole = (...roles) => {
  try {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        //roles array mai agar admin nahi hai to unauthorised else continue ir next()
        return next(
          new ErrorHandler(
            `Role: ${req.user.role} You are not authorized to perform this action`,
            403
          )
        );
      }
      next();
    };
  } catch (error) {
    res.status(404).json({ message: "error in Authnticating role" });
    // console.log(error);
  }
};
