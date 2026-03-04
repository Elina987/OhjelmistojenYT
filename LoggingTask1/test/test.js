const test = require("node:test");
const assert = require("node:assert");
const logger = require("../src/logger");

test("logger should not throw error", () => {
  assert.doesNotThrow(() => {
    logger.info("test message");
  });
});
