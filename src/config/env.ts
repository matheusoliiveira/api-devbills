import { z } from "zod";


if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config();
}

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),

  DATABASE_URL: z.string().min(5, "DATABASE_URL é obrigatório"),

  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),

  // FIREBASE
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Variáveis de ambiente INVÁLIDAS", _env.error.format());
  process.exit(1);
}

export const env = _env.data;
