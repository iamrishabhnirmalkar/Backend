// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB();

// ==============This is first approach to connect database and express=========================

// import mongooose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

// const app = express()(async () => {
//   try {
//     await mongooose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//     app.on("Error", (error) => {
//       console.log("ERRR:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log("App is listing on port ${process.env.PORT}");
//     });
//   } catch (error) {
//     console.log("ERROR IN DATABSE", error);
//     throw err;
//   }
// })();
