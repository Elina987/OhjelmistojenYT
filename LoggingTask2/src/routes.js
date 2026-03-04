const express = require("express");
const router = express.Router();
const counter = require("./counter");
const logger = require("./logger");

router.get("/counter-increase", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-increase'");
  const value = counter.increase();
  logger.info(`[COUNTER] increase ${value}`);
  res.json({ count: value });
});

router.get("/counter-read", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-read'");
  const value = counter.read();
  logger.info(`[COUNTER] read ${value}`);
  res.json({ count: value });
});

router.get("/counter-reset", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-reset'");
  const value = counter.reset();
  logger.info(`[COUNTER] zeroed ${value}`);
  res.json({ count: value });
});

module.exports = router;
