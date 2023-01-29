import app from "./app.js";
import dotenv from "dotenv";

import connectDatabase from "./config/connect.js";

//Handling Uncaught Exception
process.on('uncaughtException',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log('shutting down the server due to Uncaught Exception')
  process.exit(1);
})

   dotenv.config({ path: "backend/config/config.env" });
connectDatabase();



const server = app.listen(process.env.PORT, () => {
  console.log("Server is running on  http://localhost:" + process.env.PORT);
});

// console.log(youtube);
//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to Unhandled promise  Rejection");

  server.close(() => {
    process.exit(1);
  });
});