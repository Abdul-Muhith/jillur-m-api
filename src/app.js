import express from "express";

import applyMiddleware from "./middlewares/applyMiddleware.js";

const app = express();

// → → → middlewares setup here → → →
applyMiddleware(app);

// TODO: setup here routes later → → →

// TODO: NOT FOUND ERROR HANDLING → → →

// TODO: GLOBAL ERROR HANDLING → → →

export default app;
