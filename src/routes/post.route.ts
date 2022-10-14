import {
  destroyPost,
  indexPost,
  showPost,
  storePost,
  updatePost,
} from '../controllers/post.controller';
import { Request, Response, Router } from 'express';

export const PostRoute = () => {
  return [
    Router().get('/', (request: Request, response: Response) => {
      indexPost(request, response);
    }),
    Router().get('/:postId', (request: Request, response: Response) => {
      showPost(request, response);
    }),
    Router().post('/', (request: Request, response: Response) => {
      storePost(request, response);
    }),
    Router().put('/:postId', (request: Request, response: Response) => {
      updatePost(request, response);
    }),
    Router().delete('/:postId', (request: Request, response: Response) => {
      destroyPost(request, response);
    }),
  ];
};
