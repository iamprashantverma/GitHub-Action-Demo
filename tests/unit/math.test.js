const { sum, subtract } = require("../../src/services/math.service");

describe("Math Service", () => {

  test("sum adds two numbers", () => {
    expect(sum(4, 6)).toBe(10);
  });

  test("subtract subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

});
