const express = require("express");
const logger = require("./logger");
const routes = require("./routes");

const app = express();
const PORT = 3000;

logger.info("[MAIN] Starting");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGINT", () => {
  logger.info("[MAIN] Stopping");
  process.exit();
});
