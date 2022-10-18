import express, { Application } from 'express';
import { PostRoute } from './routes/post.route';
import { Pool } from 'pg';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from './config/index';

export const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
});

export const app = (): Application => {
  const app = express();

  app.use('/posts', PostRoute());

  return app;
};
