import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "enquiry type is required"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "enquiry Name is required"],
    trim: true,
  },
  link: {
    type: String,
    required: [true, "enquiry URL Name is required"],
    trim: true,
  },
});

var ProdD = mongoose.model("Enquiry", enquirySchema);
export default ProdD;