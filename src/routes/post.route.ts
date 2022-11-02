import {
  destroyPost,
  indexPost,
  showPost,
  storePost,
  updatePost,
} from "@controllers/post.controller";
import { joi } from "@utils/joi";
import { Request, Response, Router } from "express";

const postSchema = joi.object({
  text: joi.string().required(),
});

const putSchema = joi.object({
  text: joi.string().allow("").optional(),
});

export const PostRoute = (): Router[] => {
  return [
    Router().get("/", (request: Request, response: Response) => {
      void indexPost(request, response);
    }),

    Router().get("/:postId", (request: Request, response: Response) => {
      void showPost(request, response);
    }),

    Router().post("/", (request: Request, response: Response) => {
      const validated = postSchema.validate(request.body);

      if (validated.error == null) {
        void storePost(request, response);
        return;
      }

      response.status(422).json({ message: validated.error.details });
    }),

    Router().put("/:postId", (request: Request, response: Response) => {
      const validated = putSchema.validate(request.body);

      if (validated.error == null) {
        void updatePost(request, response);
        return;
      }

      response.status(422).json({ message: validated.error.details });
    }),

    Router().delete("/:postId", (request: Request, response: Response) => {
      void destroyPost(request, response);
    }),
  ];
};
