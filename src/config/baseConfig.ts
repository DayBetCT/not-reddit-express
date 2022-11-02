import { config } from "dotenv";
import { cleanEnv, num, port, str } from "envalid";

config({ path: ".env.dev" });

export const env = cleanEnv(process.env, {
  PORT: port(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
  DB_PORT: port(),
  DB_HOST: str(),
  DB_DIALECT: str(),
  POOL_MAX: num(),
  POOL_MIN: num(),
  POOL_ACQUIRE: num(),
  POOL_IDLE: num(),
});
