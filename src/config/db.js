import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

let connectionURL = process.env.DB_CONNECTION_URL;

connectionURL = connectionURL.replace("<username>", process.env.DB_USER_NAME);
connectionURL = connectionURL.replace("<password>", process.env.DB_PASSWORD);
connectionURL = `${connectionURL}/${process.env.DB_NAME}?${process.env.DB_URL_QUERY}`;

const connectDB = async () => {
  // try {
  await mongoose.connect(connectionURL, {});
  // useNewUrlParser: true, // provides better support for connection strings using newer MongoDB features.
  // useUnifiedTopology: true, // provides a more robust and flexible way of managing connections to the MongoDB server

  console.log("Database connection was successfully established");
  // } catch (error) {
  // console.error("Error connecting to Database:", error.message);

  // process.exit(1); // Exit process with failure
  // }
};

const db = {
  connectDB,
};

export default db;
