import {
  destroyPost,
  indexPost,
  showPost,
  storePost,
  updatePost,
} from '@controllers/post.controller';
import { joi } from '@utils/joi';
import { Request, Response, Router } from 'express';

const postSchema = joi.object({
  text: joi.string().required(),
});

const putSchema = joi.object({
  text: joi.string().allow('').optional(),
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
      const validated = postSchema.validate(request.body);

      if (!validated.error) {
        return await storePost(request, response);
      }

      response.status(422).json({ message: validated.error?.details });
    }),

    Router().put('/:postId', async (request: Request, response: Response) => {
      const validated = putSchema.validate(request.body);

      if (!validated.error) {
        return await updatePost(request, response);
      }

      response.status(422).json({ message: validated.error?.details });
    }),

    Router().delete(
      '/:postId',
      async (request: Request, response: Response) => {
        await destroyPost(request, response);
      }
    ),
  ];
};
