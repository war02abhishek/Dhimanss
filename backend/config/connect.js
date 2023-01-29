import mongoose from "mongoose";
import dotenv from "dotenv"

mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`databse is connected with server ${data.connection.host}`);
    });
};
export default connectDatabase;
