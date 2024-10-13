import http from "http";
import dotenv from "dotenv";

import app from "./app.js";
import db from "./config/db.js";

// Load environment variables from .env file
dotenv.config();

// We aim to avoid using an Express server unless we are also using an Express request handler.
const server = http.createServer(app);

const port = process.env.PORT || 4000;

const main = async () => {
  try {
    // Connect to your MongoDB database
    await db.connectDB();

    server.listen(port, async () => {
      console.log(`Server is listening on PORT ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

main();
