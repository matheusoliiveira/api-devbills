import cors from "@fastify/cors";
import Fastify, { type FastifyInstance } from "fastify";
import { env } from "./config/env";
import routes from "./routes";

const app: FastifyInstance = Fastify({
  logger: {
    level: env.NODE_ENV === "development" ? "info" : "error",
  },
});

app.register(cors, {
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  origin: true,
});

app.register(routes, { prefix: "/api" });

export default app;
