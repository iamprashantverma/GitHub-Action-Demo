const mathController = require("../controllers/math.controller");

async function mathRoutes(app) {
  app.get("/sum/:a/:b", mathController.sum);
  app.get("/subtract/:a/:b", mathController.subtract);
  app.get("/multiply/:a/:b", mathController.multiply);
  app.get("/divide/:a/:b", mathController.divide);
  app.get("/power/:base/:exponent", mathController.power);
}

module.exports = mathRoutes;
