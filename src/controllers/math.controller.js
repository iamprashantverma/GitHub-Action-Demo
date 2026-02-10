const MathService = require("../services/math.service");

const sum = async (request) => {
  const { a, b } = request.params;
  return { result: MathService.sum(a, b) };
};

const subtract = async (request) => {
  const { a, b } = request.params;
  return { result: MathService.subtract(a, b) };
};

const multiply = async (request) => {
  const { a, b } = request.params;
  return { result: MathService.multiply(a, b) };
};

const divide = async (request, reply) => {
  const { a, b } = request.params;
  try {
    return { result: MathService.divide(a, b) };
  } catch (err) {
    reply.code(400);
    return { error: err.message };
  }
};

const power = async (request) => {
  const { base, exponent } = request.params;
  return { result: MathService.power(base, exponent) };
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  power
};
