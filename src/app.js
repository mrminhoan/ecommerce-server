import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello World",
    metadata: 'hello world'.repeat(10000)
  });
});

export { app };
