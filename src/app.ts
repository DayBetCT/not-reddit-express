import express, { Application, Router } from 'express';
import { PostRoute } from './routes/post.route';

export const app = (): Application => {
  const app = express();

  app.use('/posts', PostRoute());

  return app;
};
