import http from "http";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

import app from "./app.js";

// We aim to avoid using an Express server unless we are also using an Express request handler.
const server = http.createServer(app);

const port = process.env.PORT || 4000;

const main = async () => {
  try {
    // TODO: Connect to your MongoDB database

    server.listen(port, async () => {
      console.log(`Server is listening on PORT ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

main();
