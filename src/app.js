const Fastify = require("fastify");
const dotenv = require("dotenv");

dotenv.config();

const app = Fastify({ logger: true });

app.get("/", async () => {
  return { msg: "Welcome to CI/CD Demo" };
});

app.register(require("./routes/math.routes"));

function start() {
  const PORT = process.env.PORT || 3000;

  app.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info(`Server started successfully at ${PORT}`);
  });
}

if (process.env.NODE_ENV !== "test") {
  start();
}

module.exports = app;
