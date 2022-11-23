import express from "express";
import cors from "cors";
import { router } from "./router";
import { Server } from "http";
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

export function startServer(): Server {
  const PORT = process.env.PORT ?? 8080;
  const server = app.listen(PORT, () => {
    console.log(`:rocket: Server running and listening on http://localhost:${PORT}/`);
  });
  process.on("SIGTERM", () => {
    server.close();
  });
  return server;
}

export default app;
