import { app } from "./src/app.js";
const PORT = 3020;

const server = app.listen(PORT, () => {
  console.log("Server is running on port: >>", PORT);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Exit Server Express"));
});
