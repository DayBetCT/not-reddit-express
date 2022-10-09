import express, { Application, Request, Response } from 'express';

export const app = (): Application => {
  const app = express();

  app.get('/', (request: Request, response: Response) => {
    response.status(200).json({ message: 'hello' });
  });

  return app;
};
