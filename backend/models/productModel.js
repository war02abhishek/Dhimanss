import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Product ID is required"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Product Name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
    maxLength: [8, "Price cannot excedd 8 char"],
  },
  moq: {
    type: Number,
  },
  dimensions: {
    type: String,
  },
  weight: {
    type: String,
  },
  // image: [
  //   {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  images: [
    {
      type: String,
      required: true,
    },
  ],
  selectedFile: String, //if we want to select a image from our device
 
});

//used to create collection Product in database 
var ProdD = mongoose.model("Product", productSchema);
export default ProdD;