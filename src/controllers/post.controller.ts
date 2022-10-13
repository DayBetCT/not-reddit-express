import { NextFunction, Request, Response } from 'express';

export const indexPost = (request: Request, response: Response) => {
  response.status(200).json({ message: 'indexPost' });
};

export const showPost = (request: Request, response: Response) => {
  response.status(200).json({ message: 'showPost' });
};

export const updatePost = (request: Request, response: Response) => {
  response.status(200).json({ message: 'updatePost' });
};

export const storePost = (request: Request, response: Response) => {
  response.status(200).json({ message: 'storePost' });
};

export const destroyPost = (request: Request, response: Response) => {
  response.status(200).json({ message: 'destroyPost' });
};
