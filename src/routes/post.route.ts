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
    Router().get('/', async (request: Request, response: Response) => {
      await indexPost(request, response);
    }),

    Router().get('/:postId', async (request: Request, response: Response) => {
      await showPost(request, response);
    }),

    Router().post('/', async (request: Request, response: Response) => {
      await storePost(request, response);
    }),

    Router().put('/:postId', async (request: Request, response: Response) => {
      await updatePost(request, response);
    }),

    Router().delete(
      '/:postId',
      async (request: Request, response: Response) => {
        await destroyPost(request, response);
      }
    ),
  ];
};
