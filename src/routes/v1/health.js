import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("GET /api/v1/local/health");

  res.status(200).json({ health: "OK" });
});

export default router;
