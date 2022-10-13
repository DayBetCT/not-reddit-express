import { indexPost } from '../controllers/post.controller';
import { NextFunction, Request, Response, Router } from 'express';

export const PostRoute = () => {
  return [
    Router().get('/', (request: Request, response: Response) => {
      indexPost(request, response);
    }),
    Router().get('/:postId', (request: Request, response: Response) => {
      response.status(200).json({ message: 'post show' });
    }),
    Router().post('/', (request: Request, response: Response) => {
      response.status(200).json({ message: 'post store' });
    }),
    Router().put('/:postId', (request: Request, response: Response) => {
      response.status(200).json({ message: 'post update' });
    }),
    Router().delete('/:postId', (request: Request, response: Response) => {
      response.status(200).json({ message: 'post destroy' });
    }),
  ];
};
