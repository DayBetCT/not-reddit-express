import express, { Application } from 'express';
import { PostRoute } from './routes/post.route';
import { Pool } from 'pg';
import { env } from './config';

export const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
});

export const app = (): Application => {
  const app = express();

  app.use('/posts', PostRoute());

  return app;
};
