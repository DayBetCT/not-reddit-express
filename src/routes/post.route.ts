import {
  destroyPost,
  indexPost,
  showPost,
  storePost,
  updatePost,
} from '@controllers/post.controller';
import { joi } from '@utils/joi';
import { Request, Response, Router } from 'express';

const schema = joi.object({
  text: joi.string().alphanum().required(),
});

export const PostRoute = () => {
  return [
    Router().get('/', async (request: Request, response: Response) => {
      await indexPost(request, response);
    }),

    Router().get('/:postId', async (request: Request, response: Response) => {
      await showPost(request, response);
    }),

    Router().post('/', async (request: Request, response: Response) => {
      const validated = schema.validate(request.body);

      if (!validated.error) {
        return await storePost(request, response);
      }

      response.status(422).json({ message: validated.error?.details });
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
