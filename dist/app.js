import Fastify from "fastify";
import cors from "@fastify/cors";
import routes from "./routes/index.js";
import { env } from "./config/env.js";
const app = Fastify({
    logger: {
        level: env.NODE_ENV === "dev" ? "info" : "error",
    },
});
await app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
});
await app.register(routes, { prefix: "/api" });
export default app;
