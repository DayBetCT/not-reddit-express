import { Post } from "@models/post.model";
import { Request, Response } from "express";

export const indexPost = async (
  request: Request,
  response: Response
): Promise<void> => {
  const posts = await Post.findAll({
    order: [["created_at", "DESC"]],
  });

  response.status(200).json({ data: posts });
};

export const showPost = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const post = await Post.findByPk(request.params.postId);

  console.log(post?.get());

  if (post?.get() === undefined) {
    return response.status(404).json({ message: "post does not exist" });
  }

  return response.status(200).json({ data: post });
};

export const updatePost = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    await Post.update(request.body, {
      where: { id: request.params.postId },
    });
  } catch (error) {
    return response.status(404).json({ message: "post not found" });
  }

  return response
    .status(200)
    .json({ message: await Post.findByPk(request.params.postId) });
};

export const storePost = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const post = await Post.create(request.body);

  return response.status(200).json({ data: post });
};

export const destroyPost = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    await Post.destroy({ where: { id: request.params.postId } });
  } catch (error) {
    return response.status(404).json({ message: "post does not exist" });
  }

  return response.sendStatus(204);
};
