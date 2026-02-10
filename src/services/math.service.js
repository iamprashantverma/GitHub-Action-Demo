const MathService = {
  sum(a, b) {
    return Number(a) + Number(b);
  },

  subtract(a, b) {
    return Number(a) - Number(b);
  },

  multiply(a, b) {
    return Number(a) * Number(b);
  },

  divide(a, b) {
    if (Number(b) === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return Number(a) / Number(b);
  },

  power(base, exponent) {
    return Math.pow(Number(base), Number(exponent));
  }
};

module.exports = MathService;
