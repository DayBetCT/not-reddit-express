import express, { Application } from "express";
import { Pool } from "pg";
import { env } from "@config/baseConfig";
import { PostRoute } from "@routes/post.route";
import helmet from "helmet";

export const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
});

export const app = (): Application => {
  const expressApp = express();

  expressApp.use(express.json());
  expressApp.use(helmet());

  expressApp.use("/posts", PostRoute());

  return expressApp;
};
