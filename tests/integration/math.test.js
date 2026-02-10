const request = require("supertest");
const app = require("../../src/app");

describe("Math APIs", () => {

  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  test("GET /sum/:a/:b returns correct sum", async () => {
    const res = await request(app.server).get("/sum/4/6");

    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(10);
  });

  test("GET /subtract/:a/:b returns correct subtraction", async () => {
    const res = await request(app.server).get("/subtract/10/4");

    expect(res.statusCode).toBe(200);
    expect(res.body.subtract).toBe(6);
  });

});
