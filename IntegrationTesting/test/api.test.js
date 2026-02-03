import request from "supertest";
import { expect } from "chai";
import app from "../app.js";

describe("HEX to RGB API", () => {
  it("palauttaa RGB JSONin", async () => {
    const res = await request(app).get("/hex-to-rgb/00ff00");

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      r: 0,
      g: 255,
      b: 0,
    });
  });
});
