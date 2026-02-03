import { expect } from "chai";
import { hexToRgb } from "../hexToRgb.js";

describe("hexToRgb unit test", () => {
  it("muuntaa hexin rgb:ksi", () => {
    const result = hexToRgb("ff0000");
    expect(result).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("heittää virheen väärästä hexistä", () => {
    expect(() => hexToRgb("zzz")).to.throw("Invalid hex");
  });
});
