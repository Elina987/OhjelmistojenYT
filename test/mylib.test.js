const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("../mylib");

describe("mylib.js (expect style)", () => {
  before(function () {
    console.log("Test Starting");
  });

  after(function () {
    console.log("Test finished");
  });

  //Describe

  describe("add()", () => {
    it("adds two numbers correctly", () => {
      expect(add(5, 3)).to.equal(8);
    });
  });

  describe("subtract()", () => {
    it("subtracts two numbers correctly", () => {
      expect(subtract(10, 5)).to.equal(5);
    });
  });

  describe("multiply()", () => {
    it("multiplies two numbers correctly", () => {
      expect(multiply(4, 3)).to.equal(12);
    });
  });

  describe("divide()", () => {
    it("divides two numbers correctly", () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it("throws an error if divisor is zero", () => {
      expect(() => divide(5, 0)).to.throw("ZeroDivisionError");
    });
  });
});
