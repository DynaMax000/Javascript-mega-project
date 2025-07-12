// require('dotenv').config({path: './.env'});
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import connectDB from './db/index.js';
connectDB()
.then(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
  });
})
.catch((error) => console.log("Mongo DB connection failed!!!", error));

/*

----- Using IIFE to connect to MongoDB and start the server -----

import express from 'express';
const app = express();

; (async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error)
      throw error;
    })
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  }
  catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
})()

*/