const {
  sum,
  subtract,
  multiply,
  divide,
  power
} = require("../../src/services/math.service");

describe("Math Service", () => {

  describe("sum", () => {
    test("adds two numbers", () => {
      expect(sum(4, 6)).toBe(10);
    });

    test("handles string numbers", () => {
      expect(sum("2", "3")).toBe(5);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });
  });

  describe("multiply", () => {
    test("multiplies two numbers", () => {
      expect(multiply(3, 5)).toBe(15);
    });
  });

  describe("divide", () => {
    test("divides two numbers", () => {
      expect(divide(20, 4)).toBe(5);
    });

    test("throws error when dividing by zero", () => {
      expect(() => divide(10, 0))
        .toThrow("Division by zero is not allowed");
    });
  });

  describe("power", () => {
    test("calculates power correctly", () => {
      expect(power(2, 3)).toBe(8);
    });
  });

});
