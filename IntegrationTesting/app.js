import express from "express";
import { hexToRgb } from "./hexToRgb.js";

const app = express();

app.get("/hex-to-rgb/:hex", (req, res) => {
  try {
    const rgb = hexToRgb(req.params.hex);
    res.json(rgb);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default app;
