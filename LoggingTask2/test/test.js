const { expect } = require("chai");
const counter = require("../src/counter");

describe("Counter", () => {
  beforeEach(() => {
    counter.reset();
  });

  it("should start at 0", () => {
    expect(counter.read()).to.equal(0);
  });

  it("should increase by one", () => {
    counter.increase();
    expect(counter.read()).to.equal(1);
  });

  it("should reset to zero", () => {
    counter.increase();
    counter.reset();
    expect(counter.read()).to.equal(0);
  });
});
