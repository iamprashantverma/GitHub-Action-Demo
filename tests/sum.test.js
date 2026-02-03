const request = require("supertest");
const app = require("../src/app");

describe("GET /sum/:a/:b", () => {

  beforeAll(async () => {
    // Ensure Fastify is ready before tests
    await app.ready();
  });

  afterAll(async () => {
    // Close Fastify after tests
    await app.close();
  });

  it("returns correct sum", async () => {
    const res = await request(app.server).get("/sum/4/6");

    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(10);
  });
});
